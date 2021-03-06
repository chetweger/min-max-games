README = '''Welcome to meta_tic-tac-toe by Chet Weger

This program relies on the min-max algorithm with alpha beta
pruning as well as temporal difference learning to learn values
for a weighted utility function.

To produce a graph of the AI training, type trainAI()

You can start a new game of meta_tic-tac-toe with:
playAI()'''

if __name__ == '__main__':
  '''Libraries required for the command line interface.
  We don't want to try to import these for pyjs.
  '''
  import copy
  import os
  global CWD
  CWD = os.getcwd()
  import sys
  import subprocess
  from matplotlib import pyplot
  from numpy import array

DIMENSION = 3

# standard function constants based on conjecture
# and limited gameplay experience
ALPHA = 0.005

messageComputersTurn   = "Computer's turn."
messageChoosePlayer    = "Which player goes first? (1 = you, 2 = computer, 0 = stop) "
messageGoodbye       = "Goodbye. Thanks for playing tic tac toe!."
messageTryAgain      = "That is invalid. Please try again."
messageUsersTurn     = "User's turn."
messageWelcome       = "Welcome to meta tic tac toe!"
messageYouWin      = "User wins."
messageCompWin       = "Computer Wins"

def has_row(list_dict):
  '''returns true we have [DIMENSION] in a row
  '''
  cells = map((lambda x: x['cell']), list_dict)
  list_and = reduce( (lambda x,y: x & y), cells) #should be NON zero if 1's matching exists
  return bool(list_and)

def is_win(board):
  '''returns true if a board (DIMENSION X DIMENSION) has been won
  '''
  for row in board:
    if has_row(row):
      return True
  board_Transpose = zip(*board)
  for column in board_Transpose:
    if has_row(column):
      return True
  zip(*board)
  length = len(board)
  diagonal1 = [board[i][i] for i in range(length)] #returns y=-x diagonal (the trace)
  diagonal2 = [board[i][length-i-1] for i in range(length)] #returns y=x diagonal
  if (has_row(diagonal1) or has_row(diagonal2)):
    return True
  return False

def is_full(board):
  '''Determines if the current board is full.
  '''
  for row in board:
    for cell in row:
      if cell['cell'] == 0:
        return False
  return True

def is_over(state):
  '''Determines if the game is over!
  If over, prints message and returns True else False.
  '''
  for rowBoards in state.boards:
    for board in rowBoards:
      if (not is_win(board)) and (not is_full(board)):
        return False
  return "asdf"

def utility(state, constants):
  '''Finds the utility of a state which is a product
  of 6 different component sub utility functions.'''
  f1 = f1_score(state) * constants['c1']
  f2 = f2_center(state) * constants['c2']
  f3 = f3_corner(state) * constants['c3']
  f4 = f4_side(state) * constants['c4']
  f5 = f5_blocking(state) * constants['c5']
  f6 = f6_potential(state) * constants['c6']
  return_value = (f1 + f2 + f3 + f4 + f5 + f6)
  return - return_value

def sub_utility(state, constants):
  '''The utility function plus dictionary for TD learning! '''
  f1 = f1_score(state) * constants['c1']
  f2 = f2_center(state) * constants['c2']
  f3 = f3_corner(state) * constants['c3']
  f4 = f4_side(state) * constants['c4']
  f5 = f5_blocking(state) * constants['c5']
  f6 = f6_potential(state) * constants['c6']
  return [-f1, -f2, -f3, -f4, -f5, -f6]


def f1_score(state):
  '''Calculated by subtracting score of current player
  from score of opponent.
  '''
  # Why MIN - MAX ?
  # Because player who call utility does not change state
  # so the state corresponds to the previous player.
  MIN = state.MIN
  MAX = state.MAX
  return state.score[MIN] - state.score[MAX]

def get_active(state):
  '''Returns all the boards that have not been won yet.
  '''
  active_boards = []
  for line_boards in state.boards:
    for board in line_boards:
      if (not is_win(board)) and (not is_full(board)):
        # copy because i think i might be modifying memory:
        active_boards += [board]
  return active_boards


def f2_center(state):
  '''Relative number of ACTIVE center
  pieces
  '''
  MIN = state.MIN
  MAX = state.MAX
  center = {MIN: 0, MAX: 0,}
  activeBoards = get_active(state)
  for board in activeBoards:
    if board[1][1]['cell'] == int(MIN):
      center[MIN] += 1
    elif board[1][1]['cell'] == int(MAX):
      center[MAX] += 1
  return_value = center[MIN] - center[MAX]
  return return_value

def f3_corner(state):
  '''Relative number of ACTIVE corner
  pieces
  '''
  MIN = state.MIN
  MAX = state.MAX
  cornerCount = {MIN: 0, MAX: 0,}
  activeBoards = get_active(state)
  for board in activeBoards:
    corners = [board[0][0], board[0][2], board[2][0], board[2][2]]
    for corner in corners:
      if corner['cell'] == int(MIN):
        cornerCount[MIN] += 1
      elif corner['cell'] == int(MAX):
        cornerCount[MAX] += 1
  return cornerCount[MIN] - cornerCount[MAX]

def f4_side(state):
  '''Relative number of ACTIVE side
  pieces
  '''
  MIN = state.MIN
  MAX = state.MAX
  sideCount = {MIN: 0, MAX: 0,}
  activeBoards = get_active(state)
  for board in activeBoards:
    sides = [board[1][0], board[0][1], board[1][2], board[2][1]]
    for side in sides:
      if side['cell'] == int(MIN):
        sideCount[MIN] += 1
      elif side['cell'] == int(MAX):
        sideCount[MAX] += 1
  return sideCount[MIN] - sideCount[MAX]

def has_block(listDict):
  '''returns true if 2 is blocked by 1 in a row
  '''
  cells = map((lambda x: x['cell']), listDict)
  cells = sorted(cells)
  if cells == [1, 2, 2]:
    return "1" # Good for player 1
  elif cells == [1, 1, 2]:
    return "2"
  else:
    return None

def hasPotential(listDict):
  '''returns true we have [DIMENSION] in a row
  '''
  cells = map((lambda x: x['cell']), listDict)
  cells = sorted(cells)
  if cells == [0, 2, 2]:
    return "2"  # Good for player 2
  if cells == [0, 1, 1]:
    return "1"
  else:
    return None

def transposeBoards(lBoards):
  '''gets the transpose of each board in a list of boards
  '''
  newList = []
  for board in lBoards:
    newBoard = []
    for i in range(DIMENSION):
      newBoard += [[board[j][i] for j in range(DIMENSION)]]
    newList += [newBoard]
  return newList

def getAllBoards(state):
  '''like get_active but gets all boards instead
  '''
  active_boards = []
  for line_boards in state.boards:
    for board in line_boards:
      active_boards += [board]
  return active_boards

def f5_blocking(inputState):
  '''Counts the relative number of blocking positions.
  '''
  # why this line?
  # b/c i modify state
  state = State()
  state.copyThis(inputState)
  MIN = state.MIN
  MAX = state.MAX
  blocking = {'1': 0, '2': 0, }

  # we count activeBoards as ALLL boards:
  activeBoards = getAllBoards(state)

  activeBoardsTranspose = transposeBoards(activeBoards)
  for board in activeBoards:
    for row in board:
      getblock = has_block(row)
      if getblock == MAX:
        blocking[MAX] += 1
      elif getblock == MIN:
        blocking[MIN] += 1
  for board in activeBoardsTranspose:
    #returns y=-x diagonal (the trace):
    diagonal1 = [board[i][i] for i in range(DIMENSION)]
    #returns y=x diagonal:
    diagonal2 = [board[i][DIMENSION-i-1] for i in range(DIMENSION)]
    # convert type to list so we can add diags...
    board = list(board)
    board += [diagonal1, diagonal2]
    for row in board:
      getBlock = has_block(row)
      if getBlock == MAX:
        blocking[MAX] += 1
      elif getBlock == MIN:
        blocking[MIN] += 1
  return blocking[MIN] - blocking[MAX]

def f6_potential(inputState):
  '''Counts the relative number of potential positions.
  '''
  # why this line?
  # b/c i modify state
  state = State()
  state.copyThis(inputState)
  MIN = state.MIN
  MAX = state.MAX
  potential = {'1': 0, '2': 0, }
  activeBoards = get_active(state)
  activeBoardsTranspose = transposeBoards(activeBoards)
  for board in activeBoards:
    for row in board:
      getpot = hasPotential(row)
      if getpot == MAX:
        potential[MAX] += 1
      elif getpot == MIN:
        potential[MIN] += 1
  for board in activeBoardsTranspose:
    #returns y=-x diagonal (the trace):
    diagonal1 = [board[i][i] for i in range(DIMENSION)]
    #returns y=x diagonal:
    diagonal2 = [board[i][DIMENSION-i-1] for i in range(DIMENSION)]
    # convert type to list so we can add diags...
    board = list(board)
    board += [diagonal1, diagonal2]
    for row in board:
      getPot = hasPotential(row)
      if getPot == MAX:
        potential[MAX] += 1
      elif getPot == MIN:
        potential[MIN] += 1
  return potential[MIN] - potential[MAX]

def min_search(state, depth, depth_limit, alpha, beta, constants):
  '''Finds the best move for MIN player by looking for the lowest
  utility value.
  '''

  value = Util(9001.0, State())
  s = State()
  gen = state.genChildren(s)
  nextS = gen.next()

  if (depth == depth_limit) or (nextS == None):
    return Util(utility(state, constants), state)

  highest_so_far = State()
  while nextS != None:
    highest_so_far.copyThis(nextS)

    # next_state = max_search(state, depth_limit, alpha, beta, constants, MIN, MAX)
    next_value = max_search(highest_so_far, depth + 1, depth_limit, alpha, beta, constants)

    value = min_util([value, next_value])
    assert type(value) == type(alpha)
    if value.value <= alpha.value:
      return Util(-9001.0, State()) # we don't want to choose this!
    beta = min_util([beta, value])
    nextS = gen.next()
  return value

def get_max(copy_to_me, choice1, choice2):
  '''This is horifyingly ugly code, but I had to get rid of the
  copy module in order to allow pyjamas to work.'''
  if choice1[0].value >= choice2[0].value:
    copy_to_me[1].copyThis(choice1[1])
    copy_to_me[0] = choice1[0]
  else:
    copy_to_me[1].copyThis(choice2[1])
    copy_to_me[0] = choice2[0]

def max_util(utils):
  '''Defines a max function for the Util class
  because pyjs max function is broken.
  '''
  max_u = Util(-102323, None)
  for util in utils:
    if util.value > max_u.value:
      max_u = util
  return max_u

def min_util(utils):
  '''Defines a min function for the Util class
  because pyjs min function is broken.
  '''
  max_u =  Util(102323, None)
  for util in utils:
    if util.value < max_u.value:
      max_u = util
  return max_u

def max_search(state, depth, depth_limit, a, b, constants):
  '''called by ab
  The minimax alpha-beta prunning algorithm as described by Norvig p. 170
  '''

  value = Util(-9001.0, State())
  s = State()
  gen = state.genChildren(s)
  nextS = gen.next()

  if (depth == depth_limit):
    return Util(utility(state, constants), state)

  if not nextS:
    return Util(utility(state, constants), state)

  if depth == 0:

    highest_so_far = State()
    highest_so_far.copyThis(nextS)

    min_h = min_search(nextS, depth + 1, depth_limit, a, b, constants)
    value = [min_h, highest_so_far]
    while nextS != None:
      min_h = min_search(nextS, depth + 1, depth_limit, a, b, constants)
      assert type(value) == type([min_h, nextS])
      get_max( value, value, [min_h, nextS] )
      if value[0].value >= b.value:
        return (Util(9001.0, State()), value[1]) # we don't want to select this
      a = max_util([a, value[0]])
      nextS = gen.next()
    return value
  else:
    highest_so_far = State()
    while nextS != None:
      highest_so_far.copyThis(nextS)
      value = max_util([value, min_search(highest_so_far, depth + 1, depth_limit, a, b, constants)])
      assert type(value) == type(b)
      if value.value >= b.value:
        return Util(9001.0, State())
      a = max_util([a, value])
      nextS = gen.next()
    return value

def ab(state, constants, depth_limit=3):
  '''The minimax alpha-beta prunning algorithm as described by Norvig p. 170.
  ab is essentially a wrapper around max_search.
  '''
  alpha = Util(-9005.0, State())
  beta  = Util(9005.0, State())
  state.MAX = str(state.next_piece[2])
  state.MIN = str(turn(state.next_piece[2]))
  next_state = max_search(state, 0, depth_limit, alpha, beta, constants)
  return next_state

def turn(integer):
  """Returns next turn
  (for state.next_piece[2])
  """
  if(integer == 1):
    return 2
  else:
    return 1

class Util:
  def __init__(self, value, state):
    '''Rather than using an integer, we use the util object!  This allows us
    to save the terminal state for temporal difference learning
    '''
    self.value = value
    self.terminal = state
  def __ge__(self, other):
    return self.value >= other.value
  def __le__(self, other):
    return self.value <= other.value
  def __gt__(self, other):
    return self.value > other.value
  def __lt__(self, other):
    return self.value < other.value

def find_last_move(prev_state, current_state):
  """By comparing two two states, we find the exact position moved in current_state compared to prev_state.
  This function used in Meta.py and LearningMeta.py.
  """
  for i in range(3):
    for j in range(3):
      if prev_state.boards[i][j] != current_state.boards[i][j]:
        return {'x_cell': current_state.next_piece[1],
                'y_cell': current_state.next_piece[0],
                'x_board': j,
                'y_board': i}

class State:
# state represents the board, next piece to be played, and other relevant info
  def __init__(self):
    """Construct a new board and other relevant information associated with the state of a game.
    """
    self.boards = [[[[ {"cell": 0, "x": x, "y": y, "x_board": x_board, "y_board": y_board}
               for x in range(DIMENSION)] for y in range(DIMENSION)]
               for x_board in range(DIMENSION)] for y_board in range(DIMENSION)]
    self.next_piece = [1,1,1] # For a given state, this encodes who is playing next and where.
                              # index 0 -> vertical component (top->down)
                              # index 1 -> horizontal component (left->right)
                              # index 2 -> integer value of next piece to be played (1 or 2)
    self.score = {"1": 0, "2": 0} # the score of player 1 and player 2

  def isUnoccupied(self, y, x):
    '''Determine if coordinate entered is on an empty square.
    '''
    return self.boards[self.next_piece[0]][self.next_piece[1]][y][x]['cell'] == 0


  def printer(self):
    '''Prints a state.
    '''
    length = DIMENSION**2*4 + 1
    buf = ['-' for x in range(length)]
    buf = ''.join(buf)
    printRows = ['|' for col in range(DIMENSION*DIMENSION)]
    for (rowBoards, i) in zip(self.boards, range(DIMENSION)):
      for board in rowBoards:
        for (row, j) in zip(board, range(DIMENSION)):
          printRows[(i*DIMENSION)+j] = printRows[(i*DIMENSION)+j] + ' ' + str([x['cell'] for x in row]) + ' |'
    for (i, row) in zip(range(DIMENSION**2), printRows):
      if ( i % DIMENSION == 0 ):
        print buf
      print row
    print buf
    return ""

  def printerComplicated(self):
    '''Used for debugging...
    '''
    length = DIMENSION**2*8 + 3
    buf = ['-' for x in range(length)]
    buf = ''.join(buf)
    printRows = ['|' for col in range(DIMENSION*DIMENSION)]
    for (rowBoards, i) in zip(self.boards, range(DIMENSION)):
      for board in rowBoards:
        for (row, j) in zip(board, range(DIMENSION)):
          printRows[(i*DIMENSION)+j] = printRows[(i*DIMENSION)+j] + ' ' + str(row) + ' |'
    for (i, row) in zip(range(DIMENSION**2), printRows):
      if ( i % DIMENSION == 0 ):
        print buf
      print row
    print buf


  def printInfo(self):
    '''Prints the current state.
    '''
    print "boards are:\n",self.printer(),"You are playing into board column", self.next_piece[1], "row", self.next_piece[0], "\nNext player is ", self.next_piece[2]


  def copyBoards(self, otherState):
    '''Copies otherState board onto self!
    '''
    rangeBoards = range(len(otherState.boards))
    for y_board in rangeBoards:
      for x_board in rangeBoards:
        for y in rangeBoards:
          for x in rangeBoards:
            self.boards[y_board][x_board][y][x]['cell'] = otherState.boards[y_board][x_board][y][x]['cell']
            self.boards[y_board][x_board][y][x]['x'] = otherState.boards[y_board][x_board][y][x]['x']
            self.boards[y_board][x_board][y][x]['y'] = otherState.boards[y_board][x_board][y][x]['y']
            self.boards[y_board][x_board][y][x]['x_board'] = otherState.boards[y_board][x_board][y][x]['x_board']
            self.boards[y_board][x_board][y][x]['y_board'] = otherState.boards[y_board][x_board][y][x]['y_board']

  def copyThis(self, other):
    '''Copies all attrs from other to self
    '''
    self.copyBoards(other)
    self.next_piece = other.next_piece[:3]
    self.score['1'] = other.score['1']
    self.score['2'] = other.score['2']
    self.MAX = other.MAX
    self.MIN = other.MIN

  def genChildren(self, child):
    '''Given a child to copy to, genChildren returns a generator
    that generates all the possible moves after a given state.
    '''
    aL = range(DIMENSION)  # originally I thought I might generalize this to any-dimensional meta
    bL = range(DIMENSION)  # tic-tac-toe, but that never happened...
    cL = range(DIMENSION)
    dL = range(DIMENSION)
    if is_win(self.boards[self.next_piece[0]][self.next_piece[1]]) or is_full(self.boards[self.next_piece[0]][self.next_piece[1]]):
      for a in aL:
        for b in bL:
          if(not is_win(self.boards[a][b])):
            for c in cL:
              for d in dL:
                if(self.boards[a][b][c][d]['cell'] == 0):
                  child.copyThis(self)
                  nP = turn(self.next_piece[2])
                  child.next_piece = [c,d,nP]
                  child.boards[a][b][c][d]['cell'] = self.next_piece[2]
                  if is_win(child.boards[a][b]):
                    child.score[str(self.next_piece[2])] += 1
                  yield child
    else:
      a = self.next_piece[0]
      b = self.next_piece[1]
      for c in cL:
        for d in dL:
          if(self.boards[a][b][c][d]['cell'] == 0):
            child.copyThis(self)
            nP = turn(self.next_piece[2])
            child.next_piece = [c,d,nP]
            child.boards[a][b][c][d]['cell'] = self.next_piece[2]
            if is_win(child.boards[a][b]):
              child.score[str(self.next_piece[2])] += 1
            yield child
    yield None

def td_learning(terminal_state, TD_CONSTS, prev_state):
  '''This function modifies TD_CONSTS according to the temporal difference algorithm.
  prev_state: the current state that the minimax search has just found a next move for.
  terminal_state: the state that the minimax search predicts will occur if both players play ideally.  This state is not the state that the ai choses as its next move, but rather the state that the minimax search predicts will occur in the future if both players play ideally.

  Note: the number of moves between prev_state and terminal_state is equal to the number of ply searched, e.g. the depth_limit parameter passed to the minimax search function, ab.
  '''
  change_total_utility = utility(terminal_state, TD_CONSTS) - utility(prev_state, TD_CONSTS)
  sub1 = sub_utility(terminal_state, TD_CONSTS)
  sub2 = sub_utility(prev_state, TD_CONSTS)
  change_sub_utility = [ (sub1[i] - sub2[i]) for i in range(len(sub1)) ]
  for i in range(len(TD_CONSTS)):
    TD_CONSTS['c' + str(i+1)] += ALPHA * change_total_utility * (change_sub_utility[i]) * (-1)

  # normalize
  TD_CONSTS = normalize(TD_CONSTS)
  return TD_CONSTS

#####################################################################
#                                                                   #
#   Command line interface functions for playing the AI.            #
#                                                                   #
#####################################################################


def playAI():
  """Play successive games until the user decides to stop. """
  print messageWelcome
  TD_CONSTS = {'c3': 0.767944, 'c2': 1.049451, 'c1': 3.074038, 'c6': 0.220823, 'c5': 0.281883, 'c4': 0.605861}
  while True:
    first_player = getFirstPlayer()
    if first_player == 0:
      print messageGoodbye
      return
    playMeta(first_player, TD_CONSTS)

def getFirstPlayer():
  """Get the first player, or an indication to stop. """
  while True:
    response = raw_input(messageChoosePlayer)
    if response == "1":
      return 1
    elif response == "2":
      return 2
    elif response == "0":
      return 0
    else:
      print messageTryAgain

def playMeta(first_player, TD_CONSTS):
  '''Play the game, given first player, or stop.
  '''
  print "Should only happen once"
  state = State()
  if first_player == 1:
    user_turn(state, TD_CONSTS) # starts user which calls ai and then continues to switch back and forth... until over

  elif first_player == 2:
    computer_turn(state, TD_CONSTS)
  else:
    assert False # Should never happen

def user_turn(state, TD_CONSTS):
  '''Simulate one round of play with the user starting.
  '''
  print messageUsersTurn
  print state.printInfo()
  if is_over(state):
    return True

  print "You are playing piece", state.next_piece[2]
  while True:
    if is_win(state.boards[state.next_piece[0]][state.next_piece[1]]):
      print "You must select a board to play into"
      x_board = raw_input("Assign column of meta-board to play into")
      y_board = raw_input("Assign row of meta-board to play into")
      if x_board.isdigit() and y_board.isdigit() and (not is_win(state.boards[int(y_board)][int(x_board)])):
        x_board = int(x_board)
        y_board = int(y_board)
        x = raw_input("Assign column of next piece")
        y = raw_input("Assign row of next piece")

        # adjust piece b/c this is how isUnoccupied[sic] works...
        state.next_piece = [y_board,x_board,state.next_piece[2]]

        if x.isdigit() and y.isdigit() and state.isUnoccupied(int(y), int(x)):
          x = int(x)
          y = int(y)
          state.boards[y_board][x_board][y][x]['cell'] = state.next_piece[2]
          if is_win(state.boards[y_board][x_board]):
            state.score[str(state.next_piece[2])] += 1
          state.next_piece = [y, x, turn(state.next_piece[2])]
          break
      else:
        print messageTryAgain
    else:
      x = raw_input("Assign column of next piece")
      y = raw_input("Assign row of next piece")

      if x.isdigit() and y.isdigit() and state.isUnoccupied(int(y), int(x)):
        x = int(x)
        y = int(y)
        state.boards[state.next_piece[0]][state.next_piece[1]][y][x]['cell'] = state.next_piece[2]
        if is_win(state.boards[state.next_piece[0]][state.next_piece[1]]):
          state.score[str(state.next_piece[2])] += 1
        state.next_piece = (y, x, turn(state.next_piece[2]))
        break
      else:
        print messageTryAgain
  print "Your move was:"
  state.printInfo()
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  return computer_turn(state, TD_CONSTS)


def computer_turn(state, TD_CONSTS):
  '''Plays meta-ttt using learned TD_CONSTS data
  '''
  print messageComputersTurn
  print "AI using following constants:\n", TD_CONSTS
  if is_over(state):
    return True
  print state.printInfo()
  (expectedUtility, nextState) = ab(state, TD_CONSTS)
  print "Expected utility is: ", expectedUtility

  state = copy.deepcopy(nextState)
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  return user_turn(state, TD_CONSTS)

#####################################################################
#                                                                   #
#   Command line interface functions for training the AI.           #
#                                                                   #
#####################################################################


def trainAI(td_consts=
{'c1': 1., 'c2': 1., 'c3': 1., 'c4': 1., 'c5': 1., 'c6': 1.},
            static_consts=
{'c1': 3., 'c2': 1., 'c3': .5, 'c4': .5, 'c5': .5, 'c6': .5},
            depth_limit=3,
            training_iterations=20):
  '''Improves the TD_CONSTS by playing learning_TD_AI against naive_AI repeatedly
  naive_AI has STATIC_CONSTS which are semi good, but are not perfect.
  learning_AI starts off with very bad constants but after 15 to 20 games, should have
  learned sufficiently good constants to reliably beat naive_AI.
  requires matplotlib to graph the result of the training.
  '''
  print "Starting AI training!  Training takes about 15 minutes to run depending on your system."
  TD_CONSTS = td_consts
  STATIC_CONSTS = static_consts
  print "TD_CONSTS is currently:\n", TD_CONSTS
  training_history = [TD_CONSTS] # we record the history of the constants and then graph them.
  victories = []
  for i in range(training_iterations):
    state = State()
    while not is_over(state):
      state, TD_CONSTS = learning_TD_AI(state, copy.copy(TD_CONSTS), depth_limit)
      training_history += [TD_CONSTS]
      if is_over(state):
        break
      state = naive_AI(state, STATIC_CONSTS, depth_limit)
    history_index = len(training_history) - 1
    if state.score['1'] > state.score['2']:
      victories.append({'index': history_index,
                        'message':
'Learning AI won\n' + str(state.score['1']) + ' to ' + str(state.score['2']) + '.'
                       })
    else:
      victories.append({'index': history_index,
                        'message':
'Static AI won\n' + str(state.score['2']) + ' to ' + str(state.score['1']) + '.'
                       })
    state.printInfo()
    print "Learning AI's constants were ", TD_CONSTS
    print "Results were learning: ", state.score['1'], " static ", state.score['2']
  print "Done training."
  plot_results(training_history, victories)
  return training_history, victories

def plot_results(history, victories):
  history_list = map(lambda x: [x['c1'], x['c2'], x['c3'], x['c4'], x['c5'], x['c6']], history)
  numpy_array = array(history_list)
  pyplot.plot(numpy_array)
  pyplot.xlabel('Cumulative move number')
  pyplot.title('Figure 1. Results of Temporal Difference Learning')
  pyplot.ylabel('Constant value')
  pyplot.legend(("c1: relative score",
                 "c2: relative number of center pieces",
                 "c3: relative number of corner pieces",
                 "c4: relative number of side pieces",
                 "c5: relative number of blocking positions",
                 "c6: relative number of potential positions"),
                 4)
  for i, victory in enumerate(victories):
    if i % 2 == 1:
      vertical_offset = history[victory['index']]['c1'] + .23
    else:
      vertical_offset = history[victory['index']]['c1'] + .1
    pyplot.annotate(victory['message'],
                    (victory['index'], history[victory['index']]['c1']),
                    xytext=(victory['index'] - 10, vertical_offset),
                    arrowprops=dict(arrowstyle="->"))
  pyplot.show()

def normalize(TD_CONSTS):
  norm = 6.0
  tot = sum(TD_CONSTS.values())
  for i in range(len(TD_CONSTS)):
    TD_CONSTS['c' + str(i+1)] = TD_CONSTS['c' + str(i+1)] / tot * norm
  return TD_CONSTS

def learning_TD_AI(prev_state, TD_CONSTS, depth_limit):
  (expectedUtility, state) = ab(prev_state, TD_CONSTS, depth_limit=depth_limit)
  terminal_state = expectedUtility.terminal
  TD_CONSTS = td_learning(terminal_state, TD_CONSTS, prev_state)
  return state, TD_CONSTS

def naive_AI(state, CONSTS, depth_limit):
  '''A naive/dumb ai that does not modify the TD_CONSTS
  but still uses them when calling ab()
  '''
  (expectedUtility, state) = ab(state, CONSTS, depth_limit=depth_limit)
  return state

print README
