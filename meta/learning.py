README = '''Welcome to meta_tic-tac-toe by Chet Weger

This program relies on the min-max algorithm with alpha beta
pruning as well as temporal difference learning to learn values
for a weighted utility function.

The weightings/constants for the utility function is stored in a
file called \"td.txt\". If you do not see such a file, you can
train the AI with the command:
trainAI()

You can start a new game of meta_tic-tac-toe with:
playAI()'''
if __name__ == '__main__':
  import copy
  import os
  global CURRENT_DIR
  CURRENT_DIR = os.getcwd()
  import sys
  import subprocess

DIMENSION = 3
WAIT = 5
userFirst = 1
computerFirst = 2
#MIN = "1"
#MAX = "2"
# standard function constants based on conjecture
# and limited gameplay experience
ALPHA = 0.005
#CONSTS = {'c1': 1, 'c2': 1, 'c3': 1, 'c4': 1, 'c5': 1, 'c6': 1}
#TD_CONSTS = {'c1': 1, 'c2': 1, 'c3': 1, 'c4': 1, 'c5': 1, 'c6': 1}

messageComputersTurn   = "Computer's turn."
messageChoosePlayer    = "Which player goes first? (1 = you, 2 = computer, 0 = stop) "
messageGoodbye       = "Goodbye. Thanks for playing tic tac toe!."
messageTryAgain      = "That is invalid. Please try again."
messageUsersTurn     = "User's turn."
messageWelcome       = "Welcome to meta tic tac toe!"
messageYouWin      = "User wins."
messageCompWin       = "Computer Wins"

def train():
  """Trains the AI indefinitely.
  """
  while True:
    subprocess.call(['cp', 'td2.txt', 'td.txt'])
    trainAI()

def hasRow(listDict):
  '''returns true we have [DIMENSION] in a row
  '''
  cells = map((lambda x: x['cell']), listDict)
  listAnd = reduce( (lambda x,y: x & y), cells) #should be NON zero if 1's matching exists
  return bool(listAnd)

def isWin(board):
  '''returns true if a board (DIMENSION X DIMENSION) has been won
  '''
  for row in board:
    if hasRow(row):
      return True
  board_Transpose = zip(*board)
  for column in board_Transpose:
    if hasRow(column):
      return True
  zip(*board)
  length = len(board)
  diagonal1 = [board[i][i] for i in range(length)] #returns y=-x diagonal (the trace)
  diagonal2 = [board[i][length-i-1] for i in range(length)] #returns y=x diagonal
  if (hasRow(diagonal1) or hasRow(diagonal2)):
    return True
  return False

def isFull(board):
  '''Determines if the current board is full.
  '''
  for row in board:
    for cell in row:
      if cell['cell'] == 0:
        return False
  return True

def isOver(state):
  '''Determines if the game is over!
  If over, prints message and returns True else False.
  '''
  for rowBoards in state.boards:
    for board in rowBoards:
      if (not isFull(board)) and (not isWin(board)):
        return False
  if state.score['1'] == state.score['2']:
    print "Game Over.\nBoth players tied at", state.score['2'], "points."
  elif state.score['1'] > state.score['2']:
    print "Game Over.\nPlayer 1 won with", state.score['1'], "points versus", state.score['2'], "points for player 2!"
  elif state.score['1'] < state.score['2']:
    print "Game Over.\nPlayer 2 won with", state.score['2'], "points versus", state.score['1'], "points for player 1"
  print "Final board position was:"
  state.printInfo()
  return True

''' the utility function! '''
def utility(state, constants):
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
  return state.score[state.min_player] - state.score[state.max_player]

def getActive(state):
  '''Returns all the boards that have not been won yet.
  '''
  active_boards = []
  for line_boards in state.boards:
    for board in line_boards:
      if (not isWin(board)) and (not isFull(board)):
        # copy because i think i might be modifying memory:
        active_boards += [board]
  return active_boards


def f2_center(state):
  '''Relative number of ACTIVE center
  pieces
  '''
  MIN = state.min_player
  MAX = state.max_player
  center = {MIN: 0, MAX: 0,}
  activeBoards = getActive(state)
  for board in activeBoards:
    if board[1][1]['cell'] == int(MIN):
      center[MIN] += 1
    elif board[1][1]['cell'] == int(MAX):
      center[MAX] += 1
  return center[MIN] - center[MAX]

def f3_corner(state):
  '''Relative number of ACTIVE corner
  pieces
  '''
  MIN = state.min_player
  MAX = state.max_player
  cornerCount = {MIN: 0, MAX: 0,}
  activeBoards = getActive(state)
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
  MIN = state.min_player
  MAX = state.max_player
  sideCount = {MIN: 0, MAX: 0,}
  activeBoards = getActive(state)
  for board in activeBoards:
    sides = [board[1][0], board[0][1], board[1][2], board[2][1]]
    for side in sides:
      if side['cell'] == int(MIN):
        sideCount[MIN] += 1
      elif side['cell'] == int(MAX):
        sideCount[MAX] += 1
  return sideCount[MIN] - sideCount[MAX]

def hasBlock(listDict):
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
  '''like getActive but gets all boards instead
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
  MIN = state.min_player
  MAX = state.max_player
  blocking = {'1': 0, '2': 0, }

  # we count activeBoards as ALLL boards:
  activeBoards = getAllBoards(state)

  activeBoardsTranspose = transposeBoards(activeBoards)
  for board in activeBoards:
    for row in board:
      getblock = hasBlock(row)
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
      getBlock = hasBlock(row)
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
  MIN = state.min_player
  MAX = state.max_player
  potential = {'1': 0, '2': 0, }
  activeBoards = getActive(state)
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

def minH(state, depth, depth_limit, alpha, beta, constants):
  '''Finds the best move for MIN player by looking for the lowest
  utility value.
  '''

  value = Util(9001.0, State())
  s = State() # min_player=state.min_player, max_player=state.max_player
  gen = state.genChildren(s)
  nextS = gen.next()

  if (depth == depth_limit) or (nextS == None):
    return Util(utility(state, constants), state)

  copy_in = State() # min_player=state.min_player, max_player=state.max_player
  while nextS != None:
    copy_in.copyThis(nextS)

    # next_state = maxH(state, depth_limit, alpha, beta, constants, MIN, MAX)
    next_value = maxH(copy_in, depth + 1, depth_limit, alpha, beta, constants)

    value = min_util([value, next_value])
    assert type(value) == type(alpha)
    if value.value <= alpha.value:
      return Util(-9001.0, State()) # we don't want to choose this!min_player=state.min_player, max_player=state.max_player
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
  max_u =  Util(102323, None)
  for util in utils:
    if util.value < max_u.value:
      max_u = util
  return max_u

def maxH(state, depth, depth_limit, a, b, constants):
  '''called by ab
  The minmax alpha-beta prunning algorithm as described by Norvig p. 170
  '''

  value = Util(-9001.0, State()) # min_player=state.min_player, max_player=state.max_player
  s = State()  #min_player=state.min_player, max_player=state.max_player
  gen = state.genChildren(s)
  nextS = gen.next()

  if (depth == depth_limit):
    return Util(utility(state, constants), state)

  if not nextS:
    return Util(utility(state, constants), state)

  if depth == 0:

    highestSoFar = State() # min_player=state.min_player, max_player=state.max_player
    highestSoFar.copyThis(nextS)

    min_h = minH(nextS, depth + 1, depth_limit, a, b, constants)
    value = [min_h, highestSoFar]
    while nextS != None:
      min_h = minH(nextS, depth + 1, depth_limit, a, b, constants)
      assert type(value) == type([min_h, nextS])
      get_max( value, value, [min_h, nextS] )
      if value[0].value >= b.value:
        return (Util(9001.0, State()), value[1]) # we don't want to select this  min_player=state.min_player, max_player=state.max_player
      a = max_util([a, value[0]])
      nextS = gen.next()
    return value
  else:
    copy_in = State()  #min_player=state.min_player, max_player=state.max_player
    while nextS != None:
      copy_in.copyThis(nextS)
      value = max_util([value, minH(copy_in, depth + 1, depth_limit, a, b, constants)])
      assert type(value) == type(b)
      if value.value >= b.value:
        return Util(9001.0, State()) # don't want to select this (another option is implied)  min_player=state.min_player, max_player=state.max_player
      a = max_util([a, value])
      nextS = gen.next()
    return value

def ab(state, constants, depth_limit=5):
  '''The minmax alpha-beta prunning algorithm as described by Norvig p. 170
  '''
  alpha = Util(-9005.0, State()) #  min_player=state.min_player, max_player=state.max_player
  beta  = Util(9005.0, State())  #  min_player=state.min_player, max_player=state.max_player
  print 'debugging state in ab ', state.min_player
  next_state = maxH(state, 0, depth_limit, alpha, beta, constants)
  return next_state

def turn(integer):
  if(integer == 1): return 2
  else: return 1

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

class State:
# state represents the board, next piece to be played, and other relevant info
  def __init__(self):
    """Construct a new board.
    """
    self.boards = [[[[ {"cell": 0, "x": x, "y": y, "x_board": x_board, "y_board": y_board}
               for x in range(DIMENSION)] for y in range(DIMENSION)]
               for x_board in range(DIMENSION)] for y_board in range(DIMENSION)]
    self.nextPiece = [1,1,1] # next board to be played in {(-1, -1, ?) for any board}
                             # index 0 points to x, index 1 point to y
    self.score = {"1": 0, "2": 0}

  def isWinExampleBoard(self, board):
    length = len(board)
    for a in range(length):
      for b in range(length):
        self.boards[0][0][a][b]['cell'] = board[a][b]
    return isWin (self.boards[0][0])

  def isUnoccupied(self, y, x):
    '''Determine if coordinate entered is on an empty square
    '''
    return self.boards[self.nextPiece[0]][self.nextPiece[1]][y][x]['cell'] == 0


  def printer(self):
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
    print "boards are:\n", self.printer(), "You are playing into board column", self.nextPiece[1], "row", self.nextPiece[0], "\nNext player is ", self.nextPiece[2]


  def copyBoards(self, otherState):
    '''Copies otherState onto self!
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
    self.copyBoards(other)
    self.nextPiece = other.nextPiece[:3]
    self.score['1'] = other.score['1']
    self.score['2'] = other.score['2']
    self.max_player = other.max_player
    self.min_player = other.min_player
    assert other.max_player

  def genChildren(self, child): #list of states
    aL = range(DIMENSION)  # originally I thought I might generalize this to any-dimensional meta
    bL = range(DIMENSION)  # tic-tac-toe, but that never happened...
    cL = range(DIMENSION)
    dL = range(DIMENSION)
    #print "isWin?", isWin(self.boards[self.nextPiece[0]][self.nextPiece[1]])
    if isWin(self.boards[self.nextPiece[0]][self.nextPiece[1]]) or isFull(self.boards[self.nextPiece[0]][self.nextPiece[1]]):
      #print "One"
      for a in aL:
        for b in bL:
          if(not isWin(self.boards[a][b])):
            for c in cL:
              for d in dL:
                if(self.boards[a][b][c][d]['cell'] == 0):
                  child.copyThis(self)
                  nP = turn(self.nextPiece[2])
                  child.nextPiece = [c,d,nP]
                  child.boards[a][b][c][d]['cell'] = self.nextPiece[2]
                  if isWin(child.boards[a][b]):
                    child.score[str(self.nextPiece[2])] += 1
                  yield child
    else:
      #print "Two"
      a = self.nextPiece[0]
      b = self.nextPiece[1]
      for c in cL:
        for d in dL:
          if(self.boards[a][b][c][d]['cell'] == 0):
            child.copyThis(self)
            nP = turn(self.nextPiece[2])
            child.nextPiece = [c,d,nP]
            child.boards[a][b][c][d]['cell'] = self.nextPiece[2]
            if isWin(child.boards[a][b]):
              child.score[str(self.nextPiece[2])] += 1
            yield child
    yield None

def playAI():
  '''Face the AI in meta-ttt '''
  print messageWelcome
  global TD_CONSTS
  TD_CONSTS = load_TD_CONSTS()
  playUntilExit()

def playUntilExit():
  """Play successive games until the user decides to stop. """
  while True:
    firstPlayer = getFirstPlayer()
    if firstPlayer == 0:
      print messageGoodbye
      return
    playMeta(firstPlayer)

def getFirstPlayer():
  """ Get the first player, or an indication to stop. """
  dim = 3
  while True:
    response = raw_input(messageChoosePlayer)
    if response == "1":
      return userFirst
    elif response == "2":
      return 2
    elif response == "0":
      return 0
    else:
      print messageTryAgain

def playMeta(firstPlayer):
  '''Play the game, given first player, or stop.
  '''
  print "Should only happen once"
  state = State()
  if firstPlayer == userFirst:
    user_turn(state) # starts user which calls ai and then continues to switch back and forth... until over

  elif firstPlayer == computerFirst:
    computer_turn(state)
  else:
    assert False # Should never happen

def user_turn(state, user_first):
  '''Simulate one round of play with the user starting.
  '''
  print messageUsersTurn
  print state.printInfo()
  checkOver(state)

  print "You are playing piece", state.nextPiece[2]
  while True:
    if isWin(state.boards[state.nextPiece[0]][state.nextPiece[1]]):
      print "You must select a board to play into"
      x_board = raw_input("Assign column of meta-board to play into")
      y_board = raw_input("Assign row of meta-board to play into")
      if x_board.isdigit() and y_board.isdigit() and (not isWin(state.boards[int(y_board)][int(x_board)])):
        x_board = int(x_board)
        y_board = int(y_board)
        x = raw_input("Assign column of next piece")
        y = raw_input("Assign row of next piece")

        # adjust piece b/c this is how isUnoccupied[sic] works...
        state.nextPiece = [y_board,x_board,state.nextPiece[2]]

        if x.isdigit() and y.isdigit() and state.isUnoccupied(int(y), int(x)):
          x = int(x)
          y = int(y)
          state.boards[y_board][x_board][y][x]['cell'] = state.nextPiece[2]
          if isWin(state.boards[y_board][x_board]):
            state.score[str(state.nextPiece[2])] += 1
          state.nextPiece = [y, x, turn(state.nextPiece[2])]
          break
      else:
        print messageTryAgain
    else:
      x = raw_input("Assign column of next piece")
      y = raw_input("Assign row of next piece")

      if x.isdigit() and y.isdigit() and state.isUnoccupied(int(y), int(x)):
        x = int(x)
        y = int(y)
        state.boards[state.nextPiece[0]][state.nextPiece[1]][y][x]['cell'] = state.nextPiece[2]
        if isWin(state.boards[state.nextPiece[0]][state.nextPiece[1]]):
          state.score[str(state.nextPiece[2])] += 1
        state.nextPiece = (y, x, turn(state.nextPiece[2]))
        break
      else:
        print messageTryAgain
  print "Your move was:"
  state.printInfo()
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  computer_turn(state)


def computer_turn(state, user_first):
  '''Plays meta-ttt using learned TD_CONSTS data
  '''
  global TD_CONSTS
  print messageComputersTurn
  print "AI using following constants:\n", TD_CONSTS
  checkOver(state)
  print state.printInfo()
  (expectedUtility, nextState) = ab(state, TD_CONSTS)
  print "Expected utility is: ", expectedUtility

  state = copy.deepcopy(nextState)
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  user_turn(state, user_first)

def load_TD_CONSTS():
  global TD_CONSTS
  try:
    f = open(CURRENT_DIR + '/' + "td.txt")
    lines = f.readlines()
    assert len(lines) == 1
    TD_CONSTS = eval(lines[0])
    print "Succesfully loaded file \"td.txt\""
  except:
    print "ERROR FILE MISSING!!\nFile \"td.txt\" not found.\nYou can run \"trainAI()\" to create this file."
    # if td.txt does not exist, create it!
    writeTo = open(CURRENT_DIR + '/' "td.txt", 'w+')
    writeTo.write(str(TD_CONSTS))
    writeTo.close()

  return TD_CONSTS

def trainAI():
  '''Improves the TD_CONSTS by playing learning_TD_AI against naive_AI
  '''
  print "Starting AI training!"
  TD_CONSTS = load_TD_CONSTS()
  print "TD_CONSTS is currently:\n", TD_CONSTS
  savedConsts = copy.copy(TD_CONSTS)
  starting_state = State()
  learning_TD_AI(starting_state, TD_CONSTS)
  # figure out how much TD_CONSTS has been update
  # (should learning continue?)
  saved = savedConsts.values()
  td = TD_CONSTS.values()
  diff_list = [ abs(saved[i] - td[i]) for i in range(len(TD_CONSTS))]
  change = reduce( (lambda x, y: x+y), diff_list )
  print "TD_CONSTS update to:\n", TD_CONSTS, "\nNet change was: ", change
  print "Finished training!"
  writeTo = open(CURRENT_DIR + '/' "td.txt", 'w+')
  writeTo.write(str(TD_CONSTS))
  writeTo.close()
  return TD_CONSTS

def normalize(TD_CONSTS):
  norm = reduce((lambda x,y: x+y), TD_CONSTS.values())
  tot = reduce((lambda x,y: x+y), TD_CONSTS.values())
  for i in range(len(TD_CONSTS)):
    TD_CONSTS['c' + str(i+1)] = TD_CONSTS['c' + str(i+1)] / tot * norm
  return TD_CONSTS

def td_learning(terminal_state, TD_CONSTS, prev_state):
  '''This function modifies TD_CONSTS according to the temporal difference algorithm.
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

def learning_TD_AI(prev_state, TD_CONSTS):
  # if over, return to trainer:
  if isOver(prev_state):
    return True
  print "\n\nTD AI player starting turn. TD AI places the piece:", prev_state.nextPiece[2]
  print "TD_CONSTS after being adjusted are: ", TD_CONSTS


  prev_state.min_player = '2' # because learning_TD_AI goes first, min is '2', and
  prev_state.max_player = '1' #                                    max is '1'
  (expectedUtility, state) = ab(prev_state, TD_CONSTS)
  terminal_state = expectedUtility.terminal

  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  state.printInfo()

  TD_CONSTS = td_learning(terminal_state, TD_CONSTS, prev_state)

  print "TD_CONSTS after being adjusted are: ", TD_CONSTS
  return naive_AI(state, TD_CONSTS)

def naive_AI(state, TD_CONSTS):
  '''A naive/dumb ai that does not modify the TD_CONSTS
  but still uses them when calling ab()
  '''
  #global CONSTS
  if isOver(state):
    return True
  print "\n\nNaive AIs turn which plays the piece: ", state.nextPiece[2]

  state.min_player = '1' # because naive_AI goes second, min is '1', and
  state.max_player = '2' #                               max is '2'
  (expectedUtility, nextState) = ab(state, TD_CONSTS)
  state = copy.deepcopy(nextState)
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  state.printInfo()
  return learning_TD_AI(state, TD_CONSTS)

print README

def test1():
  '''Test for f1_score
  '''
  a = State()
  a.boards[0][0][0][0]['cell'] = 1
  a.boards[0][0][1][1]['cell'] = 1
  a.nextPiece[0] = 0
  a.nextPiece[1] = 0
  a.nextPiece[2] = 1
  a.printInfo()
  a.nextPiece[2] = 1
  b = ab(a, CONSTS)[1]
  print utility(b, CONSTS)
  b.printInfo()

def test2():
  '''Test for f2_center
  '''
  a = State()
  a.nextPiece[0] = 1
  a.nextPiece[1] = 1
  a.printInfo()
  b = ab(a, CONSTS)[1]
  b.printInfo()

def test3():
  '''Test for f1_score
  '''
  a = State()
  a.boards[0][0][1][0]['cell'] = 1
  a.boards[0][0][0][0]['cell'] = 2
  #a.boards[0][0][1][1]['cell'] = 1
  a.nextPiece[0] = 0
  a.nextPiece[1] = 0
  a.nextPiece[2] = 2
  a.printInfo()

  b = ab(a, CONSTS)[1]
  b.printInfo()

def getState():
  a = State()
  a.boards[0][0][2][0]['cell'] = 2
  a.boards[0][0][0][2]['cell'] = 2
  a.boards[0][0][1][2]['cell'] = 1
  a.nextPiece = [0,0,1]
