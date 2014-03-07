import pyjd # this is dummy in pyjs

"""
additional features:
  ability to show graph of evolution of TD_CONSTS

integration with website:
  mandatory (tonight)
    TD_CONSTANTS can be transfered to and from playAI <--> trainAI
    link from resume page to playAI and trainAI pages
    import resume (base changes off of template)
    prepare email to pagewoo, rubicon, rocketfuel, and
  optional
    2 videos:
      "the power of stocastic matrices"
      "temporal difference learning with meta ttt"
    forward email to chen
    research promoting my project

"""

from pyjamas.ui.Button import Button
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.Grid import Grid
from pyjamas.ui.CellFormatter import CellFormatter
from pyjamas.ui.RowFormatter import RowFormatter
from pyjamas.ui.HTML import HTML
from pyjamas.ui.CheckBox import CheckBox
from pyjamas.ui.AbsolutePanel import AbsolutePanel
from pyjamas import Window
from pyjamas.Timer import Timer

from pyjamas import logging

log = logging.getConsoleLogger()

from learning import State, ab, is_win, is_full, turn, is_over, normalize, td_learning

INCREMENT_AMOUNT = .05

class GridWidget(AbsolutePanel):

  def __init__(self):
    self.state = State()
    self.game_round = 0
    self.TD_CONSTS = {'c3': 1., 'c2': 1., 'c1': 1., 'c6': 1., 'c5': 1., 'c4': 1.}
    self.CONSTS   =  {'c3': 1., 'c2': 1., 'c1': 1., 'c6': 1., 'c5': 1., 'c4': 1.}
    self.BEST_CONSTANTS = {'c3': 0.767944, 'c2': 1.049451, 'c1': 3.074038, 'c6': 0.220823, 'c5': 0.281883, 'c4': 0.605861}
    self.ONES_CONSTS = {'c3': 1., 'c2': 1., 'c1': 1., 'c6': 1., 'c5': 1., 'c4': 1.}
    AbsolutePanel.__init__(self)


    self.depth_limit = 2

    self.new_game = Button("New game", self)
    self.add(self.new_game)

    self.train_td = Button("Begin game.  Learning AI first!", self)
    self.add(self.train_td)

    self.train_dumb = Button("Begin game.  Dumb AI first!", self)
    self.add(self.train_dumb)

    self.increase_depth = Button("Increase ply search depth.", self)
    self.decrease_depth = Button("Decrease ply search depth.", self)
    self.depth_label = Label("Current depth is " + str(self.depth_limit) +".")
    self.score_label = Label("Learning AI: %d | Dumb AI: %d"% (0,0))

    self.depth_grid = Grid()
    self.depth_grid.resize(1, 3)
    self.depth_grid.setBorderWidth(2)
    self.depth_grid.setCellPadding(9)
    self.depth_grid.setCellSpacing(1)
    self.add(self.depth_grid)
    self.depth_grid.setWidget(0, 0, self.decrease_depth)
    self.depth_grid.setWidget(0, 1, self.depth_label)
    self.depth_grid.setWidget(0, 2, self.increase_depth)

    # initialize the board grid:
    self.g=Grid()
    self.g.resize(3, 3)
    self.g.setBorderWidth(2)
    self.g.setCellPadding(9)
    self.g.setCellSpacing(1)
    self.init()
    self.add(self.g)

    # initialize the contstants adjustment grid:
    self.adj_grid = Grid()
    self.adj_grid.resize(7, 4)
    self.adj_grid.setBorderWidth(2)
    self.adj_grid.setCellPadding(9)
    self.adj_grid.setCellSpacing(1)
    self.init_constants_adj_grid()
    self.add(self.adj_grid)

    self.reset_constants = Button("Reset all of Learning AI's constants to 1.", self)
    self.add(self.reset_constants)

    self.state_to_grid()


    explanation = "<div>I can put stuff about temporal difference learning etc. here..</div>"
    explanation = HTML(explanation)
    self.add(explanation)

  def init_constants_adj_grid(self):
    '''Initializes the grid that allows the TD_CONSTS to be adjusted.
    '''
    self.decr_buttons = {}
    self.adj_learning_labels = {}
    self.adj_dumb_labels = {}
    self.incr_buttons = {}
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']

    learning_ai_header = Label("Constant for the learning AI.")
    self.adj_grid.setWidget(0, 0, learning_ai_header)

    dumb_ai_header = Label("Constants for the dumb AI.")
    self.adj_grid.setWidget(0, 2, dumb_ai_header)

    for i, key in enumerate(td_keys):
      j = i + 1 # off by one because of header...
      self.adj_learning_labels[key] = Label("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))
      self.adj_grid.setWidget(j, 0, self.adj_learning_labels[key])

      self.decr_buttons[key] = Button('<', self)
      self.adj_grid.setWidget(j, 1, self.decr_buttons[key])

      self.adj_dumb_labels[key] = Label("Constant %d: %f" % (key[1], self.CONSTS[key]))
      self.adj_grid.setWidget(j, 2, self.adj_dumb_labels[key])

      self.incr_buttons[key] = Button('>', self)
      self.adj_grid.setWidget(j, 3, self.incr_buttons[key])

  def init(self):
    '''Initializes the grid on which the game is played.
    '''
    for y_board in range(3):
      for x_board in range(3):

        g=Grid()
        g.resize(3, 3)
        g.setBorderWidth(2)
        g.setCellPadding(9)
        g.setCellSpacing(1)
        for x_cell in range(3):
          for y_cell in range(3):
            b = Button('AI could play here.', self)
            b.point = {'x_cell':x_cell, 'y_cell':y_cell, 'y_board': y_board, 'x_board': x_board}
            g.setWidget(y_cell, x_cell, b)

        self.add(g)
        self.g.setWidget(y_board, x_board, g)

  def onClick(self, sender):
    self.check_adjusts(sender)
    if sender == self.reset_constants:
      self.TD_CONSTS = self.ONES_CONSTS
      self.sync_consts()

    if sender == self.increase_depth:
      self.depth_limit += 1
      self.depth_label.setText("Current depth is " + str(self.depth_limit) +".")

    if sender == self.decrease_depth:
      self.depth_limit -= 1
      self.depth_label.setText("Current depth is " + str(self.depth_limit) +".")

    if sender == self.new_game:
      AppInit()

    if sender == self.train_td:
      self.state = State()
      print "here!!!!"

      self.dumb_ai_str = '2'
      self.td_ai_str = '1'

      self.state.next_piece = [1, 1, 1]
      Timer(250, notify=self.td_ai_turn)
      print "Done training."

    if sender == self.train_dumb:
      self.state = State()

      self.dumb_ai_str = '1'
      self.td_ai_str = '2'

      self.state.next_piece = [1, 1, 1]
      Timer(250, notify=self.dumb_ai_turn)
      print "Done training."

  def check_adjusts(self, sender):
    print "adjusting constant for ", sender
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    for key in td_keys:
      if self.incr_buttons[key] == sender:
        self.change_td_const(key, '+')
      if self.decr_buttons[key] == sender:
        self.change_td_const(key, '-')
      self.TD_CONSTS = normalize(self.TD_CONSTS)
      self.adj_learning_labels[key].setText("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))
    self.sync_consts()

  def change_td_const(self, key, sign):
    if sign == '+':
      self.CONSTS[key] += INCREMENT_AMOUNT
    elif sign == '-':
      self.CONSTS[key] -= INCREMENT_AMOUNT

  def sync_consts(self):
    """Sync td rates with the current state.
    """
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    for key in td_keys:
      self.adj_learning_labels[key].setText("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))
      self.adj_dumb_labels[key].setText("Constant %d: %f" % (key[1], self.CONSTS[key]))

  def check_is_win(self):
    self.state_to_grid()
    learning_ai_score = self.state.score[self.td_ai_str]
    dumb_ai_score = self.state.score[self.dumb_ai_str]
    print "scores are ", p1_score, p2_score
    self.score_label.setText("Learning AI(%d): %d | Dumb AI(%d): %d" % (self.td_ai_str, learning_ai_score, self.dumb_ai_str, dumb_ai_score))
    self.state.printInfo()
    if is_over(self.state):
      if learning_ai_score > dumb_ai_score:
        msg = "the learning AI won with score %d vs %d." % (learning_ai_score, dumb_ai_score)
      elif learning_ai_score < dumb_ai_score:
        msg = "the dumb AI won with score %d vs %d." % (dumb_ai_score, learning_ai_score)
      elif learning_ai_score == dumb_ai_score:
        msg = "the game ended in a tie."
      self.game_round += 1
      game_over_message = Label("In game round " + str(self.game_round) + ", " + msg)
      self.add(game_over_message)
      return True
    else:
      return False

  def dumb_ai_turn(self):
    print "\n\nNaive AIs turn which plays the piece: ", self.state.next_piece[2]
    print "next piece is ", self.state.next_piece
    print "TD_CONSTS", self.TD_CONSTS
    (expectedUtility, nextState) = ab(self.state,
                                      self.CONSTS,
                                      depth_limit=self.depth_limit)
    self.state = nextState
    print "Scores: Player 1: ", self.state.score['1'], " Player 2: ", self.state.score['2']
    self.state.printInfo()

    over = self.check_is_win()
    print "back in dumb"
    if not over:
      self.pause_update = Timer(250, notify=self.td_ai_turn)
    else:
      return True

  def td_ai_turn(self):
    print "\n\nTD AI player starting turn. TD AI places the piece:", self.state.next_piece[2]
    print "TD_CONSTS after being adjusted are: ", self.TD_CONSTS

    # print, alpha-beta search etc.:
    (expectedUtility, state) = ab(self.state,
                                  self.TD_CONSTS,
                                  depth_limit=self.depth_limit)
    terminal_state = expectedUtility.terminal
    self.TD_CONSTS = td_learning(terminal_state, self.TD_CONSTS, self.state)
    self.sync_consts() # reflect the new TD_CONSTS in the game.

    self.state = state

    print "Scores: Player 1: ", self.state.score['1'], " Player 2: ", self.state.score['2']
    state.printInfo()

    print "TD_CONSTS after being adjusted are: ", self.TD_CONSTS

    over = self.check_is_win()
    print "back in td"
    print "Is over ", over
    if not over:
      return Timer(250, notify=self.dumb_ai_turn)
    else:
      return True

  def will_buttons(self, y_board, x_board):
    # first we determine if the next_piece points to a playable board.
    board = self.state.boards
    piece = list(self.state.next_piece)
    playable = True
    if is_win(board[piece[0]][piece[1]]) or is_full(board[piece[0]][piece[1]]):
      playable = False
    if (not is_win(board[y_board][x_board])) and (not is_full(board[y_board][x_board])):
      if not playable:
        return True
      if playable:
        return (y_board == piece[0]) and (x_board == piece[1])
    return False

  def state_to_grid(self):
    board = self.state.boards
    for y_board in range(3):
      for x_board in range(3):

        # for this mini-grid, do i make buttons or dashes?
        will_make_buttons = self.will_buttons(y_board, x_board)

        g=Grid()
        g.resize(3, 3)
        g.setBorderWidth(2)
        g.setCellPadding(9)
        g.setCellSpacing(1)
        for y_cell in range(3):
          for x_cell in range(3):

            if board[y_board][x_board][y_cell][x_cell]['cell'] == 0:
              if will_make_buttons:
                b = Button('AI could play here.', self)
                b.point = {'x_cell':x_cell, 'y_cell':y_cell, 'y_board': y_board, 'x_board': x_board}
                g.setWidget(y_cell, x_cell, b)
              else:
                g.setText(y_cell, x_cell, '-')

            elif board[y_board][x_board][y_cell][x_cell]['cell'] == 1:
              g.setText(y_cell, x_cell, '1')
            elif board[y_board][x_board][y_cell][x_cell]['cell'] == 2:
              g.setText(y_cell, x_cell, '2')
            else:
              print 'a'
              #assert False

        self.add(g)
        self.g.setWidget(y_board, x_board, g)

def AppInit():
  #GridWidget()
  #pyjd.setup("./GridTest.html")
  r.remove(g)
  try:
    del(g)
  except:
    # try except statement necessary to get around pyjs limitations
    print "wow so hacky"
  g = GridWidget()
  r.add(g)
  pyjd.run()

if __name__ == '__main__':
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  r = RootPanel()
  r.add(g)
  pyjd.run()
