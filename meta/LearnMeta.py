import pyjd # this is dummy in pyjs
"""
bugs:
  score not updated
  crashes in learn.py due to only a few possible positions being left on the board:
    it is therefore possible to move, and game is not over, but a search of the ply depth more than a depth of one
    will terminate.
  ai moving first loses badly (why?) <-- understand (don't want to kill other three)
  fix bug where available positions are not shown correctly (everything shows up as "ai could player here")
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

from learning import State, ab, isWin, isFull, turn, isOver, normalize, td_learning

INCREMENT_AMOUNT = .05

class GridWidget(AbsolutePanel):

  def __init__(self):
    self.state = State()
    self.game_over = False
    # {'c3': 0.767944, 'c2': 1.049451, 'c1': 3.074038, 'c6': 0.220823, 'c5': 0.281883, 'c4': 0.605861}
    self.TD_CONSTS ={'c3': 0.767944, 'c2': 1.049451, 'c1': 3.074038, 'c6': 0.220823, 'c5': 0.281883, 'c4': 0.605861} #{'c3': 1., 'c2': 1., 'c1': 1., 'c6': 1., 'c5': 1., 'c4': 1.}
    self.CONSTS = {'c3': 1., 'c2': 1., 'c1': 1., 'c6': 1., 'c5': 1., 'c4': 1.}
    optional_args = {'TD_CONSTS': self.TD_CONSTS, 'MAX': '1', 'MIN': 2}
    AbsolutePanel.__init__(self)


    self.depthLimit = 3
    html = "<a href=\"file:///home/chet/projects/pyjs/meta/output/LearnMeta.html\">Start a new game.</a>" # TODO: make this work for the general case
    self.new_game = HTML(html)
    self.add(self.new_game)

    self.train_td = Button("Begin game.  Learning AI first!", self)
    self.add(self.train_td)

    self.train_dumb = Button("Begin game.  Dumb AI first!", self)
    self.add(self.train_dumb)

    self.increase_depth = Button("Increase ply search depth.", self)
    self.add(self.increase_depth)

    self.decrease_depth = Button("Decrease ply search depth.", self)
    self.add(self.decrease_depth)

    self.depth_label = Label("Current depth is " + str(self.depthLimit) +".")
    self.add(self.depth_label)

    self.score_label = Label("Learning AI: %d | Dumb AI: %d"% (0,0))
    self.add(self.score_label)

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
    self.adj_grid.resize(6, 1)
    self.adj_grid.setBorderWidth(2)
    self.adj_grid.setCellPadding(9)
    self.adj_grid.setCellSpacing(1)
    self.init_contstants_adj_grid()
    self.add(self.adj_grid)


    self.state_to_grid()
    self.max_player = '-1'
    self.min_player = '-1'

  def init_contstants_adj_grid(self):
    '''Initializes the grid that allows the TD_CONSTS to be adjusted.
    '''
    self.decr_buttons = {}
    self.adj_labels = {}
    self.incr_buttons = {}
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    for i, key in enumerate(td_keys):
      self.adj_labels[key] = Label("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))
      self.adj_grid.setWidget(i, 0, self.adj_labels[key])

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
    if sender == self.increase_depth:
      self.depthLimit += 1
      self.depth_label.setText("Current depth is " + str(self.depthLimit) +".")

    if sender == self.decrease_depth:
      self.depthLimit -= 1
      self.depth_label.setText("Current depth is " + str(self.depthLimit) +".")

    if sender == self.new_game:
      AppInit()

    if sender == self.train_td:

      self.remove(self.decrease_depth)
      self.remove(self.increase_depth)
      self.remove(self.train_td)
      self.remove(self.train_dumb)
      print "here!!!!"

      self.dumb_ai_int = 2
      self.td_ai_int = 1

      self.state.nextPiece = [1, 1, 1]
      Timer(250, notify=self.td_ai_turn)
      print "Done training."

    if sender == self.train_dumb:

      self.remove(self.decrease_depth)
      self.remove(self.increase_depth)
      self.remove(self.train_td)
      self.remove(self.train_dumb)
      print "here!!!!"

      self.dumb_ai_int = 1
      self.td_ai_int = 2

      self.state.nextPiece = [1, 1, 1]
      Timer(250, notify=self.dumb_ai_turn)
      print "Done training."

  def sync_td_consts(self):
    """Sync td rates with the current state.
    """
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    for key in td_keys:
      self.adj_labels[key].setText("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))

  def check_win(self):
    self.state_to_grid()
    p1_score = self.state.score['1']
    p2_score = self.state.score['2']
    print "scores are ", p1_score, p2_score
    self.score_label.setText("Learning AI: %d | Dumb AI: %d" % (p1_score, p2_score))
    if isOver(self.state):
      if p1_score > p2_score:
        msg = "AI 1 won the game."
      elif human_score < ai_score:
        msg = "AI 2 won the game."
      elif human_score == ai_score:
        msg = "Game ends in a tie."
      game_over_message = Label(msg)
      self.add(game_over_message)
      self.game_over = True

  def dumb_ai_turn(self):
    print "\n\nNaive AIs turn which plays the piece: ", self.state.nextPiece[2]
    print "next piece is ", self.state.nextPiece
    (expectedUtility, nextState) = ab(self.state,
                                      self.TD_CONSTS,
                                      False,
                                      optional_args={'TD_CONSTS': self.TD_CONSTS,
                                                     'MIN': self.td_ai_int,
                                                     'MAX': self.dumb_ai_int,
                                                     'depthLimit': self.depthLimit},
                                     )
    self.state = nextState
    print "Scores: Player 1: ", self.state.score['1'], " Player 2: ", self.state.score['2']
    self.state.printInfo()
    self.check_win()
    self.pause_update = Timer(250, notify=self.td_ai_turn)
    #return isOver(self.state)

  def td_ai_turn(self):
    print "\n\nTD AI player starting turn. TD AI places the piece:", self.state.nextPiece[2]
    print "TD_CONSTS after being adjusted are: ", self.TD_CONSTS

    # print, alpha-beta search etc.:
    (expectedUtility, state) = ab(self.state,
                                  self.TD_CONSTS,
                                  False,
                                  optional_args={'TD_CONSTS': self.TD_CONSTS,
                                                 'MIN': self.dumb_ai_int,
                                                 'MAX': self.td_ai_int,
                                                 'depthLimit': self.depthLimit},
                                 )
    terminal_state = expectedUtility.terminal
    self.TD_CONSTS = td_learning(terminal_state, self.TD_CONSTS, False, self.state)
    self.sync_td_consts() # reflect the new TD_CONSTS in the game.

    self.state = state

    print "Scores: Player 1: ", self.state.score['1'], " Player 2: ", self.state.score['2']
    state.printInfo()

    print "TD_CONSTS after being adjusted are: ", self.TD_CONSTS
    self.check_win() # check if game is over and take appropriate action.
    self.pause_update = Timer(250, notify=self.dumb_ai_turn)
    #return isOver(self.state)

  def will_buttons(self, y_board, x_board):
    # first we determine if the nextPiece points to a playable board.
    board = self.state.boards
    piece = list(self.state.nextPiece)
    playable = True
    if isWin(board[piece[0]][piece[1]]) or isFull(board[piece[0]][piece[1]]):
      playable = False
    if (not isWin(board[y_board][x_board])) and (not isFull(board[y_board][x_board])):
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
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  RootPanel().add(g)
  pyjd.run()

if __name__ == '__main__':
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  RootPanel().add(g)
  pyjd.run()
