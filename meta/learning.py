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

DIMENSION = 3
WAIT = 5
userFirst = 1
computerFirst = 2
MIN = "1"
MAX = "2"
# standard function constants based on conjecture
# and limited gameplay experience
ALPHA = 0.005
CONSTS = {'c1': 1.0,'c2': 1.0,'c3': 1.0,'c4': 1.0,'c5': 1.0,'c6': 1.0,}
TD_CONSTS = {'c1': 1.0,'c2': 1.0,'c3': 1.0,'c4': 1.0,'c5': 1.0,'c6': 1.0,}

messageComputersTurn   = "Computer's turn."
messageChoosePlayer    = "Which player goes first? (1 = you, 2 = computer, 0 = stop) "
messageGoodbye       = "Goodbye. Thanks for playing tic tac toe!."
messageTryAgain      = "That is invalid. Please try again."
messageUsersTurn     = "User's turn."
messageWelcome       = "Welcome to meta tic tac toe!"
messageYouWin      = "User wins."
messageCompWin       = "Computer Wins"


'''
returns true we have [DIMENSION] in a row
'''
def hasRow(listDict):
  cells = map((lambda x: x['cell']), listDict)
  listAnd = reduce( (lambda x,y: x & y), cells) #should be NON zero if 1's matching exists
  return bool(listAnd)

'''
returns true if a board (DIMENSION X DIMENSION) has been won
'''
def isWin(board):
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

'''
Determines if the current board is full.
'''
def isFull(board):
  for row in board:
    for cell in row:
      if cell['cell'] == 0:
        return False
  return True

'''
Determines if the game is over!
If over, prints message and exits program.
'''
def checkOver(state):
  for rowBoards in state.boards:
    for board in rowBoards:
      if (not isFull(board)) and (not isWin(board)):
        return #
  if state.score['1'] == state.score['2']:
    print "Game Over.\nBoth players tied at", state.score['2'], "points."
  elif state.score['1'] > state.score['2']:
    print "Game Over.\nPlayer 1 won with", state.score['1'], "points versus", state.score['2'], "points for player 2!"
  elif state.score['1'] < state.score['2']:
    print "Game Over.\nPlayer 2 won with", state.score['2'], "points versus", state.score['1'], "points for player 1"
  print "Final board position was:"
  state.printInfo()
  writeTo = open(CURRENT_DIR + '/' "td.txt", 'w+')
  writeTo.write(str(TD_CONSTS))
  writeTo.close()
  print "Game over."

'''
Determines if the game is over!
If over, prints message and returns True else False.
'''
def isOver(state):
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
def utility(state, constants, sub):
  f1 = f1_score(state) * constants['c1']
  f2 = f2_center(state) * constants['c2']
  f3 = f3_corner(state) * constants['c3']
  f4 = f4_side(state) * constants['c4']
  f5 = f5_blocking(state) * constants['c5']
  f6 = f6_potential(state) * constants['c6']
  if sub:
    return -(f1 + f2 + f3 + f4 + f5 + f6)
  else:
    return (f1 + f2 + f3 + f4 + f5 + f6)

''' the utility function plus dictionary for TD learning! '''
def subUtil(state, constants, sub):
  f1 = f1_score(state) * constants['c1']
  f2 = f2_center(state) * constants['c2']
  f3 = f3_corner(state) * constants['c3']
  f4 = f4_side(state) * constants['c4']
  f5 = f5_blocking(state) * constants['c5']
  f6 = f6_potential(state) * constants['c6']
  if sub:
    return [-f1, -f2, -f3, -f4, -f5, -f6]
  else:
    return [f1, f2, f3, f4, f5, f6]


'''
Calculated by subtracting score of current player
from score of opponent.
'''
def f1_score(state):
  # Why MIN - MAX ?
  # Because player who call utility does not change state
  # so the state corresponds to the previous player.
  return state.score[MIN] - state.score[MAX]

'''
Returns all the boards that have not been won yet.
'''
def getActive(state):
  active_boards = []
  for line_boards in state.boards:
    for board in line_boards:
      if (not isWin(board)) and (not isFull(board)):
        # copy because i think i might be modifying memory:
        active_boards += [board]
  return active_boards


'''
Relative number of ACTIVE center
pieces
'''
def f2_center(state):
  center = {MIN: 0, MAX: 0,}
  activeBoards = getActive(state)
  for board in activeBoards:
    if board[1][1]['cell'] == int(MIN):
      center[MIN] += 1
    elif board[1][1]['cell'] == int(MAX):
      center[MAX] += 1
  return center[MIN] - center[MAX]

'''
Relative number of ACTIVE corner
pieces
'''
def f3_corner(state):
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

'''
Relative number of ACTIVE side
pieces
'''
def f4_side(state):
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

'''
returns true if 2 is blocked by 1 in a row
'''
def hasBlock(listDict):
  cells = map((lambda x: x['cell']), listDict)
  cells = sorted(cells)
  if cells == [1, 2, 2]:
    return "1" # Good for player 1
  elif cells == [1, 1, 2]:
    return "2"
  else:
    return None

'''
returns true we have [DIMENSION] in a row
'''
def hasPotential(listDict):
  cells = map((lambda x: x['cell']), listDict)
  cells = sorted(cells)
  if cells == [0, 2, 2]:
    return "2"  # Good for player 2
  if cells == [0, 1, 1]:
    return "1"
  else:
    return None

'''
gets the transpose of each board in a list of boards
'''
def transposeBoards(lBoards):
  newList = []
  for board in lBoards:
    newBoard = []
    for i in range(DIMENSION):
      newBoard += [[board[j][i] for j in range(DIMENSION)]]
    newList += [newBoard]
  return newList

'''
like getActive but gets all boards instead
'''
def getAllBoards(state):
  active_boards = []
  for line_boards in state.boards:
    for board in line_boards:
      active_boards += [board]
  return active_boards

'''
Counts the relative number of blocking positions.
'''
def f5_blocking(inputState):
  # why this line?
  # b/c i modify state
  state = State()
  state.copyThis(inputState)
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

'''
Counts the relative number of potential positions.
'''
def f6_potential(inputState):
  # why this line?
  # b/c i modify state
  state = State()
  state.copyThis(inputState)
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

'''
alpha-beta helper
'''
def minH(state, depth, maxDepth, a, b, constants, sub):

  value = Util(9001.0, State())
  s = State()
  gen = state.genChildren(s)
  nextS = gen.next()

  if (depth == maxDepth) or (nextS == None):
    return Util(utility(state, constants, sub), state)

  iterations = 0
  copy_in = State()
  while nextS != None:
    copy_in.copyThis(nextS)
    value = min(value, maxH(copy_in, depth+1, maxDepth, a, b, constants, sub))
    assert type(value) == type(a)
    if value <= a:
      return Util(-9001.0, State()) # we don't want to choose this!
    b = min(b, value)
    nextS = gen.next()
  return value

def get_max(copy_to_me, choice1, choice2):
  '''This is horifyingly ugly code, but I had to get rid of the 
  copy module in order to allow pyjamas to work.'''
  if choice1[0] >= choice2[0]:
    copy_to_me[1].copyThis(choice1[1])
    copy_to_me[0] = choice1[0]
  else:
    copy_to_me[1].copyThis(choice2[1])
    copy_to_me[0] = choice2[0]

'''
called by ab
The minmax alpha-beta prunning algorithm as described by Norvig p. 170
'''
def maxH(state, depth, maxDepth, a, b, constants, sub):

  value = Util(-9001.0, State())
  s = State()
  gen = state.genChildren(s)
  nextS = gen.next()

  if (depth == maxDepth):
    return Util(utility(state, constants, sub), state)

  if depth == 0:
    iteration = 0

    highestSoFar = State()
    highestSoFar.copyThis(nextS)

    min_h = minH(nextS, depth+1, maxDepth, a, b, constants, sub)
    value = [min_h, highestSoFar]
    while nextS != None:
      iteration += 1
      min_h = minH(nextS, depth+1, maxDepth, a, b, constants, sub)
      assert type(value) == type([min_h, nextS])
      get_max( value, value, [min_h, nextS] )
      if value >= (b, 'make comparisons work'):
        return (Util(9001.0, State()), value[1]) # we don't want to select this
      a = max(a, value[0])
      nextS = gen.next()
    return value
  else:
    copy_in = State()
    while nextS != None:
      copy_in.copyThis(nextS)
      value = max(value, minH(copy_in, depth+1, maxDepth, a, b, constants, sub))
      assert type(value) == type(b)
      if value >= b:
        return Util(9001.0, State()) # don't want to select this (another option is implied)
      a = max(a, value)
      nextS = gen.next()
    return value

'''
Could the current player force a win?
return move if yes; None if not
'''
def getWin(state):
  a = State()
  cG = state.genChildren(a)
  nextS = cG.next()
  while nextS != None:
    if isWin(nextS):
      return nextS
    nextS = cG.next()
  return None

'''
Checks if a win exists
Then calls helper
'''
def ab(state, constants, sub, optional_args={}):
  if option_args:
    global TD_CONSTS
    global MIN
    global MAX
    TD_CONSTS = optional_args['TD_CONSTS']
    MIN = optional_args['MIN']
    MAX = optional_args['MAX']

  farthestDepth = 1
  duration = 0
  while (farthestDepth < 3): # duration < WAIT and 
    new = State()
    new.copyThis(state)
    nextState = maxH(new, 0, farthestDepth, Util(-9005.0, State()), Util(9005.0, State()), constants, sub)
    '''
    print "\n*"
    print state.printInfo()
    print "\n*"
    '''
    farthestDepth += 1
  return nextState

def turn(integer):
  if(integer == 1): return 2
  else: return 1

class Util:
  def __init__(self, value, state):
    '''Rather than using an integer, we use the util object!'''
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
    """ Construct a new board. """
    self.boards = [[[[ {"cell": 0, "x": x, "y": y, "x_board": x_board, "y_board": y_board}
               for x in range(DIMENSION)] for y in range(DIMENSION)]
               for x_board in range(DIMENSION)] for y_board in range(DIMENSION)]
    self.nextPiece = [1,1,1] # next board to be played in {(-1, -1, ?) for any board}
    self.score = {"1": 0, "2": 0}

  def isWinExampleBoard(self, board):
    length = len(board)
    for a in range(length):
      for b in range(length):
        self.boards[0][0][a][b]['cell'] = board[a][b]
    return isWin (self.boards[0][0])

  '''
  Determine if coordinate entered is on an empty square
  '''
  def isUnoccupied(self, y, x):
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
    print "boards are:\n", self.printer(), "You are playing into board column", self.nextPiece[1], "row", self.nextPiece[0], "\nScore is:", self.score#, "Complicated info:\n", self.printerComplicated()


  def copyBoards(self, otherState):
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

  def genChildren(self, child): #list of states
    aL = range(DIMENSION)
    bL = range(DIMENSION)
    cL = range(DIMENSION)
    dL = range(DIMENSION)
    #print "isWin?", isWin(self.boards[self.nextPiece[0]][self.nextPiece[1]])
    if isWin(self.boards[self.nextPiece[0]][self.nextPiece[1]]):
      #print "One"
      for a in aL:
        for b in bL:
          if(not isWin(self.boards[a][b])):
            for c in cL:
              for d in dL:
                if(self.boards[a][b][c][d]['cell'] == 0):
                  child.copyThis(self)
                  nP = turn(self.nextPiece[2])
                  child.nextPiece = (c,d,nP)
                  child.boards[a][b][c][d]['cell'] = self.nextPiece[2]
                  if isWin(child.boards[a][b]):
                    child.score[str(self.nextPiece[2])] += 1
                  child.printer
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
            child.nextPiece = (c,d,nP)
            child.boards[a][b][c][d]['cell'] = self.nextPiece[2]
            if isWin(child.boards[a][b]):
              child.score[str(self.nextPiece[2])] += 1
            yield child
    yield None

''' Face the AI in meta-ttt '''
def playAI():
  print messageWelcome
  global TD_CONSTS
  TD_CONSTS = load_TD_CONSTS()
  playUntilExit()

def playUntilExit():
  """ Play successive games until the user decides to stop. """
  while True:
    firstPlayer = getFirstPlayer()
    if firstPlayer == 0:
      print messageGoodbye
      return
    playTrio(firstPlayer)

def getFirstPlayer():
  """ Get the first player, or an indication to stop. """
  while True:
    dim = raw_input("Enter the dimension of the game \n")
    if dim.isdigit():
      global DIMENSION
      DIMENSION = int(dim)
      break
    else:
      print messageTryAgain
  while True:
    response = raw_input(messageChoosePlayer)
    if response == "1":
      SUBTRACT = True
      return 1
    elif response == "2":
      SUBTRACT = False
      return 2
    elif response == "0":
      return 0
    else:
      print messageTryAgain

'''
Play the game, given first player, or stop.
'''
def playTrio(firstPlayer):
  print "Should only happen once"
  state = State()
  if firstPlayer == userFirst:

    while True:
      if userTurn(state) == 0:
        break
      if computerTurn(state) == 0:
        break

  elif firstPlayer == computerFirst:

    state.nextPiece[2] = 2

    while True:
      if computerTurn(state) == 0:
        break
      if userTurn(state) == 0:
        break

  else:
    assert "Should never happen"

'''
Simulate one round of play with the user starting.
'''
def userTurn(state):
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
  computerTurn(state)


'''
Plays meta-ttt using learned TD_CONSTS data
'''
def computerTurn(state):
  global TD_CONSTS
  print messageComputersTurn
  print "AI using following constants:\n", TD_CONSTS
  checkOver(state)
  print state.printInfo()
  (expectedUtility, nextState) = ab(state, TD_CONSTS, True)
  print "Expected utility is: ", expectedUtility
  nextState.printInfo()
  state = copy.deepcopy(nextState)
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  userTurn(state)

def normalize (tdConsts):
  norm = reduce( (lambda x,y: x+y), CONSTS.values())
  tot = reduce( (lambda x,y: x+y), tdConsts.values())
  for i in range(len(tdConsts)):
    tdConsts['c' + str(i+1)] = tdConsts['c' + str(i+1)] / tot * norm
  return tdConsts

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

'''
Learns TD data by playing learning_TD_AI against naiveAI
'''
def trainAI():
  print "Starting AI training!"
  global TD_CONSTS
  TD_CONSTS = load_TD_CONSTS()
  print "TD_CONSTS is currently:\n", TD_CONSTS
  savedConsts = copy.copy(TD_CONSTS)
  a = State()
  learning_TD_AI(a, a)
  # figure out how much TD_CONSTS has been update 
  # (should learning continue?)
  saved = savedConsts.values()
  td = TD_CONSTS.values()
  diffList = [ abs(saved[i] - td[i]) for i in range(len(TD_CONSTS))]
  change = reduce( (lambda x, y: x+y), diffList )
  print "TD_CONSTS update to:\n", TD_CONSTS, "\nNet change was: ", change
  print "Finished training!"
  writeTo = open(CURRENT_DIR + '/' "td.txt", 'w+')
  writeTo.write(str(TD_CONSTS))
  writeTo.close()
  return TD_CONSTS


def learning_TD_AI(prevState, prev_prev_state):
  global TD_CONSTS
  print "\n\nTD AI player starting turn. TD AI places the piece:", prevState.nextPiece[2]
  print "TD_CONSTS after being adjusted are: ", TD_CONSTS

  # if over, return to trainer:
  if isOver(prevState):
    return TD_CONSTS

  # print, alpha-beta search etc.:
  SUBTRACT = False
  (expectedUtility, state) = ab(prevState, TD_CONSTS, SUBTRACT)
  terminal_state = expectedUtility.terminal
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  state.printInfo()

  # modify temporal difference:
  changeTotalUtility = utility(terminal_state, TD_CONSTS, SUBTRACT) - utility(prev_prev_state, TD_CONSTS, SUBTRACT)
  sub1 = subUtil(terminal_state, TD_CONSTS, SUBTRACT)
  sub2 = subUtil(prev_prev_state, TD_CONSTS, SUBTRACT)
  changeSubUtil = [ (sub1[i] - sub2[i]) for i in range(len(sub1)) ]
  for i in range(len(TD_CONSTS)):
    TD_CONSTS['c' + str(i+1)] += ALPHA * changeTotalUtility * (changeSubUtil[i]) * (-1)

  # normalize
  TD_CONSTS = normalize(TD_CONSTS)

  print "TD_CONSTS after being adjusted are: ", TD_CONSTS
  naiveAI(state, state)

def naiveAI(state, prev_state):
  #global CONSTS
  if isOver(state):
    learning_TD_AI(state, prev_state)
  print "\n\nNaive AIs turn which plays the piece: ", state.nextPiece[2]
  SUBTRACT = True
  checkOver(state)
  (expectedUtility, nextState) = ab(state, TD_CONSTS, SUBTRACT)
  state = copy.deepcopy(nextState)
  print "Scores: Player 1: ", state.score['1'], " Player 2: ", state.score['2']
  state.printInfo()
  learning_TD_AI(state, prev_state)

print README

'''
Test for f1_score
'''
def test1():
  a = State()
  a.boards[0][0][0][0]['cell'] = 1
  a.boards[0][0][1][1]['cell'] = 1
  a.nextPiece[0] = 0
  a.nextPiece[1] = 0
  a.nextPiece[2] = 1
  a.printInfo()
  a.nextPiece[2] = 1
  SUBTRACT = False
  b = ab(a, CONSTS, SUBTRACT)[1]
  print utility(b, CONSTS, SUBTRACT)
  b.printInfo()

'''
Test for f2_center
'''
def test2():
  a = State()
  a.nextPiece[0] = 1
  a.nextPiece[1] = 1
  a.printInfo()
  b = ab(a, CONSTS)[1]
  b.printInfo()

'''
Test for f1_score
'''
def test3():
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
