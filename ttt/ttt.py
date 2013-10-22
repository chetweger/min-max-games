if __name__ == '__main__':
  print __name__
  import copy
  import sys
  import random
elif __name__ == 'ttt':
  1# then we do not need to import these

EXACT = 'exact'
UPPER_BOUND = 'upper_bound'
LOWER_BOUND = 'lower_bound'
DIMENSION = 3

class Util:
  def __init__(self, value):
    self.value = value
  def __le__(self, other):
    return self.value >= other.value
  def __ge__(self, other):
    return self.value <= other.value
  def __gt__(self, other):
    return self.value > other.value
  def __lt__(self, other):
    return self.value < other.value

def is_over(state):
  for row in state.board:
    for piece in row:
      if piece == 0:
        return False
  return True

def utility(state):
  someone_won = is_win(state)
  if someone_won and state.player == state.min_v:
    return +1 # utility is called before state.player has moved, so really we are looking at the previous player
  if someone_won and state.player == state.max_v:
    return -1
  return 0

class TTEntry:
  '''A TranspositionTable entry.
  definen methods to initialize and determine type
  so that entries from the TT table do not conflict with ab
  search.
  '''
  def __init__(self, value, a, b):
    if value > a and value < b:
      self. entry_type = EXACT 
    elif value <= a:
      self.entry_type = UPPER_BOUND
    else:
      self.entry_type = LOWER_BOUND
    self.value = value

class TranspositionTable:
  def __init__(self):
    self.moves_table = {}
    self.entry_type = '' # we can have 'exact', 'upper_bound', or 'lower_bound'
  def call_min(self, state, a, b):
    potential_hit = state.serialize_me()
    if potential_hit in self.moves_table:
      entry = self.moves_table[potential_hit]
      if entry.entry_type == EXACT:
        return entry.value
      elif entry.entry_type == UPPER_BOUND:
        if b > entry.entry_type:
          b = entry.value
      else:
        if a > entry.entry_type:
          a = entry.value
      #assert entry.entry_type != ''
    miss = min_search(state, a, b, self)
    all_rotation_keys = state._serialize_all_rotations()
    for rotation in all_rotation_keys:
      self.moves_table[rotation] = TTEntry(miss, a, b)
    return miss
  def call_max(self, state, a, b):
    potential_hit = state.serialize_me()
    if potential_hit in self.moves_table:
      entry = self.moves_table[potential_hit]
      if entry.entry_type == EXACT:
        return entry.value
      elif entry.entry_type == UPPER_BOUND:
        if b > entry.entry_type:
          b = entry.value
      else:
        if a > entry.entry_type:
          a = entry.value
      #assert entry.entry_type != ''
    miss = max_search(state, a, b, False, self)
    all_rotation_keys = state._serialize_all_rotations()
    for rotation in all_rotation_keys:
      self.moves_table[rotation] = TTEntry(miss, a, b)
    return miss

def min_search(state, a, b, t_table):
  #print state.print_me()
  if is_over(state) or is_win(state):
    #print 'a', state.print_me()
    return utility(state)

  children = state.get_children()
  lowest = 101
  for child in children:
    #child.print_me()
    next_value = t_table.call_max(child, a, b)
    lowest = min(next_value, lowest)
    if next_value < b:
      b = next_value
    if next_value <= a:
      return -101
  return lowest

def max_search(state, a, b, is_root, t_table):
  #print state.print_me()
  if is_over(state) or is_win(state):
    #print 'b', state.print_me()
    return utility(state)

  children = state.get_children()
  child_util_pairs = zip(children, [Util(-100) for i in range(len(children))])
  child_util_pairs = map( list, child_util_pairs )
  highest = -101
  for i in range(len(child_util_pairs)):
    next_value = t_table.call_min(child_util_pairs[i][0], a, b)
    child_util_pairs[i][1].value = next_value
    highest = max(next_value, highest)
    if next_value > a:
      a = next_value
    if next_value >= b:
      return 101
  if is_root:
    print 'length of child_util_pairs is', len(child_util_pairs)
    max_states = [s for s in child_util_pairs if s[1].value == highest]
    #assert max_states # we don't want it to be empty!
    chosen_child = max_states[0]
    print 'length of max_s is ', len(max_states), map( lambda x: x[1].value, max_states )
    return chosen_child
  else:
    return highest

def ab(state):
  print 'ab(state)', state.min_v
  transposition_table = TranspositionTable()
  next_move = max_search(state, -9000, 9000, True, transposition_table)
  return next_move[0]

def next_player(player_int):
  if player_int == 1:
    return 2
  elif player_int == 2:
    return 1
  player_int['fail']

def is_win(state):
  board = state.board
  diagonal_1 = [board[i][i] for i in range(3)]
  diagonal_2 = [board[i][2-i] for i in range(3)]
  copy_board = state.copy_me().board
  for row in copy_board:
    if bool(reduce( (lambda cell_x, cell_y: cell_x & cell_y), row)):
      return True
  transposed_board = zip(*copy_board)
  for column in transposed_board:
    if bool(reduce( (lambda cell_x, cell_y: cell_x & cell_y), column)):
      return True
  if bool(reduce( (lambda cell_x, cell_y: cell_x & cell_y), diagonal_1)) or bool(reduce( (lambda cell_x, cell_y: cell_x & cell_y), diagonal_2)):
    return True
  return False


class State:
  def __init__(self):
    self.board = [[0 for i in range(3)] for i in range(3)]
    self.player = 1
    self.min_v = -1
    self.max_v = -1
    #self.future = None # the state that this state will become in minmax search
  def get_children(self):
    children = []
    for row_index in range(3):
      for column_index in range(3):
        if self.board[row_index][column_index] == 0:
          child_state = self.copy_me()
          child_state.board[row_index][column_index] = self.player
          child_state.player = next_player(self.player)
          children += [child_state]
    return children

  def serialize_me(self):
    return _serialize_board(self.board)

  def print_me(self):
    print 'current player to play: ', self.player, ' is win ', str(is_win(self)), '\nboard:'
    for row in self.board:
      print row
    print

  def _serialize_all_rotations(self):
    '''All the rotations:

       111     111     000     000
       001     100     001     100
       000(r0) 000(r1) 111(r2) 111(r3)

       100     001     110     011
       100     001     100     001
       110(r4) 011(r5) 100(r6) 001(r7)
    '''
    r0 = self.board[:3] # make copy
    r1 = map( lambda row: reverse(row), r0 )
    r1 = map( list, r1 )
    r2 = reverse(r0)
    r3 = map( lambda row: reverse(row), r2 )

    r4 = zip(*r0)
    r4 = map( list, r4 )
    r5 = map( lambda row: reverse(row), r4 )
    r5 = map( list, r5 )
    r6 = reverse(r4)
    r7 = map( lambda row: reverse(row), r6 )

    #return r0, r1, r2, r3, r4, r5, r6, r7

    all_boards_serialized = map( _serialize_board, (r0, r1, r2, r3, r4, r5, r6, r7) )
    all_boards_serialized = list(set(all_boards_serialized)) # make unique
    return all_boards_serialized
  
  def copy_me(self):
    a = State()
    for r in range(DIMENSION):
      for c in range(DIMENSION):
        a.board[r][c] = self.board[r][c]
    a.player = self.player
    a.min_v = self.min_v
    a.max_v = self.max_v
    return a
    
  
def _unserialize_board(string_board):
  list_board = []
  row_0 = map( int, list(string_board[:3]) )
  row_1 = map( int, list(string_board[3:6]) )
  row_2 = map( int, list(string_board[6:]) )
  list_board = [row_0, row_1, row_2]
  return list_board

def unhash(string_board):
  a = State()
  a.board = _unserialize_board(string_board)
  return a

def reverse(board):
  board = board[:len(board)] # make copy
  board.reverse()
  return board

def _serialize_board(board):
  str_board = ''
  for row in board:
    #str_board += '|'
    for piece in row:
      str_board += (str(piece))
  return str_board #* 2

def test():
  a = State()
  a.board = [[0,1,0],[0,1,0],[0,1,1]]
  assert is_win(a) == True
  b = State()
  b.board = [[1,0,0],[0,1,0],[0,0,1]]
  assert is_win(b) == True
  c = State()
  c.board = [[0,0,1],[0,0,1],[0,0,1]]
  assert is_win(c) == True
  e = State()
  e.board = [[0,0,1],[0,1,0],[1,0,0]]
  assert is_win(e) == True
  print 'tests passed'

def main():
  while True:
    one_or_2 = raw_input('Enter 2 if you want the computer to play first; enter 1 if you want to go first')
    if one_or_2 == '2':
      computer_first()
    if one_or_2 == '1':
      human_first()
    print 'Try again.'

def computer_first():
  MAX = 1
  MIN = 2
  start_game_board = State()
  start_game_board.player = MAX
  start_game_board.max_v = MAX
  start_game_board.min_v = MIN
  ai(start_game_board)

def human_first():
  MAX = 2
  MIN = 1
  start_game_board = State()
  start_game_board.player = MIN
  start_game_board.max_v = MAX
  start_game_board.min_v = MIN
  human(start_game_board, starting = True)

def check_tie(state):
  if is_over(state):
    print 'Game is a tie.\n'
    sys.exit()

def ai(state):
  next_state = ab(state)
  print next_state
  if is_win(next_state):
    'Game over, the computer won.'
    sys.exit()
  check_tie(next_state)
  print 'next player is ', next_state.player, 'MIN is ', state.min_v, ' max is: ', state.max_v
  assert type(next_state) == type(State())
  next_state.print_me()
  human(next_state)

def human(state, starting=False):
  print state.serialize_me()
  same = State()
  #same.board = _unserialize_board(state.serialize_me())
  #assert state.serialize_me() == same.serialize_me()
  while True:
    x_input =  raw_input('Enter x value ')
    y_input =  raw_input('Enter y value ')
    if x_input.isdigit() and y_input.isdigit():
      x = int(x_input)
      y = int(y_input)
      if state.board[y][x] == 0:
        state.board[y][x] = state.player
        state.player = next_player(state.player)
        if is_win(state):
          print 'You won!\nThis should never happen.\nThis is a bug.\nPlease sent an email to Chet @ chetweger@gmail.com describing the order of moves.'
          sys.exit()
        check_tie(state)
        ai(state)
  print 'Try again.'

def sertest():
  a = State()
  a.board[0][0] = 1
  a.board[0][1] = 1
  a.board[0][2] = 1
  a.board[1][2] = 1
  return a._serialize_all_rotations()
