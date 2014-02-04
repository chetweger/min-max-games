import pyjd # this is dummy in pyjs

'''
bugs:

Goals for resume tomorrow:
1. fix bugs.
2. then integrate with website immediately
3. fix bug with constants.
4. schedule interview with sam.'''

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

from pyjamas import logging

log = logging.getConsoleLogger()

from learning import State, ab, isWin, isFull, turn, isOver, normalize

INCREMENT_AMOUNT = .05

class GridWidget(AbsolutePanel):

  def __init__(self):
    self.game_over = False
    self.TD_CONSTS = {'c3': 0.95992938236536673, 'c2': 1.3118140945279137, 'c1': 3.842547843349949, 'c6': 0.27602882530408006, 'c5': 0.3523534563973569, 'c4': 0.7573263980553335}
    optional_args = {'TD_CONSTS': self.TD_CONSTS, 'MAX': '1', 'MIN': 2}
    AbsolutePanel.__init__(self)


    self.depthLimit = 3
    self.human_first = True
    self.ai_first = Button("AI first.", self)
    self.add(self.ai_first)

    self.increase_depth = Button("Increase ply search depth.", self)
    self.add(self.increase_depth)

    self.decrease_depth = Button("Decrease ply search depth.", self)
    self.add(self.decrease_depth)

    self.depth_label = Label("Current depth is " + str(self.depthLimit) +".")
    self.add(self.depth_label)

    self.score_label = Label("Human: %d | AI: %d"% (0,0))
    self.add(self.score_label)

    html = "<a href=\"file:///home/chet/projects/pyjs/meta/output/Meta.html\">Start a new game.</a>" # TODO: make this work for the general case
    self.new_game = HTML(html)
    self.add(self.new_game)

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
    self.adj_grid.resize(6, 3)
    self.adj_grid.setBorderWidth(2)
    self.adj_grid.setCellPadding(9)
    self.adj_grid.setCellSpacing(1)
    self.init_contstants_adj_grid()
    self.add(self.adj_grid)

    self.state = State()

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
      self.decr_buttons[key] = Button('<', self)
      self.adj_grid.setWidget(i, 0, self.decr_buttons[key])

      self.incr_buttons[key] = Button('>', self)
      self.adj_grid.setWidget(i, 2, self.incr_buttons[key])

      self.adj_labels[key] = Label("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))
      self.adj_grid.setWidget(i, 1, self.adj_labels[key])

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
            b = Button('Play here.', self)
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

    self.check_adjusts(sender)

    if not self.game_over:
      if hasattr(self, 'ai_first') and sender == self.ai_first:
        self.human_first = False
        self.max_player = '1'
        self.min_player = '2'
        self.remove(self.ai_first)
        del(self.ai_first) # remove all traces

        self.state = ab(self.state, self.TD_CONSTS, False,
          optional_args={'TD_CONSTS': self.TD_CONSTS,
            'MIN': self.min_player, 'MAX': self.max_player,
            'depthLimit': self.depthLimit})[1]
        self.state_to_grid()


      if hasattr(sender, 'point'):
        if hasattr(self, 'ai_first'):
          self.max_player = '2'
          self.min_player = '1'
          self.remove(self.ai_first)
          del(self.ai_first) # remove all fucking traces
        #assert self.min_player == str(self.state.nextPiece[2])
        assert self.state.boards

        point = sender.point


        g = self.g.getWidget(point['y_board'], point['x_board'])
        g.setText(point['y_cell'], point['x_cell'], str(self.min_player))

        self.grid_to_state(point)

        self.check_win()
        self.state.nextPiece[2] = self.max_player
        #self.state.player = next_player(self.state.player)

        self.state = ab(self.state, self.TD_CONSTS, True,
          optional_args={'TD_CONSTS': self.TD_CONSTS,
            'MIN': self.min_player, 'MAX': self.max_player,
            'depthLimit': self.depthLimit})[1]
        self.state_to_grid()
        self.check_win()


  def check_adjusts(self, sender):
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    for key in td_keys:
      if self.incr_buttons[key] == sender:
        self.change_td_const(key, '+')
      if self.decr_buttons[key] == sender:
        self.change_td_const(key, '-')
      self.TD_CONSTS = normalize(self.TD_CONSTS)
      self.adj_labels[key].setText("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))

  def change_td_const(self, key, sign):
    if sign == '+':
      self.TD_CONSTS[key] += INCREMENT_AMOUNT
    elif sign == '-':
      self.TD_CONSTS[key] -= INCREMENT_AMOUNT

  def check_win(self):
    self.state_to_grid()
    if self.human_first:
      human_score = self.state.score['1']
      ai_score = self.state.score['2']
      self.score_label.setText("Human: %d | AI: %d" % (human_score, ai_score))
    else:
      human_score = self.state.score['2']
      ai_score = self.state.score['1']
      self.score_label.setText("Human: %d | AI: %d" % (human_score, ai_score))
    if isOver(self.state):
      if human_score > ai_score:
        msg = "Congratulations, you won! To increase the difficulty, increase the search depth."
      elif human_score < ai_score:
        msg = "You lost! Better luck next time."
      elif human_score == ai_score:
        msg = "Game ends in a tie."
      self.game_over = Label(msg)
      self.add(self.game_over)
      self.game_over = True


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
                b = Button('Play here.', self)
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

  def grid_to_state(self, point):
    board = self.state.boards
    for y_board in range(3):
      for x_board in range(3):
        g = self.g.getWidget(y_board, x_board)
        for y_cell in range(3):
          for x_cell in range(3):
            if isinstance(g.getWidget(y_cell, x_cell), Button):
              assert board[y_board][x_board][y_cell][x_cell]['cell'] == 0
            elif (g.getText(y_cell, x_cell) == '1') or (g.getText(y_cell, x_cell) == '2'):
              if self.state.boards[y_board][x_board][y_cell][x_cell]['cell'] == 0:
                self.state.boards[y_board][x_board][y_cell][x_cell]['cell'] = int(g.getText(y_cell, x_cell))
                piece = self.state.nextPiece
                piece[2] = 1
                #piece[2] = int(piece[2] == 1) + 1 # next player!
                piece[0] = y_cell
                piece[1] = x_cell
            else:
              assert (g.getText(y_cell, x_cell) == '-')
    if isWin(self.state.boards[point['y_board']][point['x_board']]):
      self.state.score[str(piece[2])] += 1

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
