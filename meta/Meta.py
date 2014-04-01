import pyjd # this is dummy in pyjs

from pyjamas.ui.Button import Button
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.Grid import Grid
from pyjamas.ui.CellFormatter import CellFormatter
from pyjamas.ui.RowFormatter import RowFormatter
from pyjamas.ui.HTML import HTML
from pyjamas.ui.CheckBox import CheckBox
from pyjamas.ui.AbsolutePanel import AbsolutePanel
from pyjamas.ui.CSS import StyleSheetCssText
from pyjamas import Window

from learning import State, ab, is_win, is_full, turn, is_over, normalize, find_last_move

INCREMENT_AMOUNT = .05

margins = """
<!--
.margins_left {
  margin-left: 50px;
}
.margins_both {
  margin-top: 1em;
  margin-left: 50px;
  width: 900px;
}
-->
"""

class GridWidget(AbsolutePanel):
  def __init__(self):
    self.state = State()
    self.game_over = False
    self.TD_CONSTS = {'c3': 0.767944, 'c2': 1.049451, 'c1': 3.074038, 'c6': 0.220823, 'c5': 0.281883, 'c4': 0.605861}
    AbsolutePanel.__init__(self)

    StyleSheetCssText(margins) # initialize css...

    self.welcome_label = HTML('<H2 align="center">Welcome to Meta-Tic-Tac-Toe!</H2><p>Play first by clicking on one of the positions in the middle board or let the AI go first by clicking on "AI first".  To change the difficulty click on "Increase/Decrease search depth".  Note: if there is a pop-up saying that the script is taking a long time to complete, this is not a bug - the AI is just taking a while to find the next move.  Select the option to continue the script.</p>', StyleName='margins_both')
    self.add(self.welcome_label)

    self.depthLimit = 3
    self.human_first = True
    self.ai_first = Button("AI first.", self, StyleName='margins_left')
    self.add(self.ai_first)

    self.increase_depth = Button("Increase search depth", self)
    self.decrease_depth = Button("Decrease search depth", self)
    self.depth_label = HTML("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")

    self.depth_grid = Grid(StyleName='margins_left')
    self.depth_grid.resize(1, 3)
    self.depth_grid.setBorderWidth(2)
    self.depth_grid.setCellPadding(9)
    self.depth_grid.setCellSpacing(1)
    self.add(self.depth_grid)
    self.depth_grid.setWidget(0, 0, self.decrease_depth)
    self.depth_grid.setWidget(0, 1, self.depth_label)
    self.depth_grid.setWidget(0, 2, self.increase_depth)

    self.new_game = Button("New game", self, StyleName='margins_left')
    self.add(self.new_game)

    self.score_label = Label("CURRENT SCORE: Human: %d | AI: %d"% (0,0), StyleName='margins_left')
    self.add(self.score_label)

    self.game_over_msg = HTML("", StyleName='margins_left')
    self.add(self.game_over_msg)

    # initialize the board grid:
    self.g=Grid(StyleName='margins_left')
    self.g.resize(3, 3)
    self.g.setBorderWidth(2)
    self.g.setCellPadding(9)
    self.g.setCellSpacing(1)
    self.init()
    self.add(self.g)

    # initialize the contstants adjustment grid:
    self.adj_grid = Grid(StyleName='margins_left')
    self.adj_grid.resize(7, 3)
    self.adj_grid.setBorderWidth(2)
    self.adj_grid.setCellPadding(9)
    self.adj_grid.setCellSpacing(1)
    self.init_constants_adj_grid()
    self.add(self.adj_grid)


    self.max_player = '-1'
    self.min_player = '-1'
    self.state_to_grid()

  def init_constants_adj_grid(self):
    '''Initializes the grid that allows the TD_CONSTS to be adjusted.
    '''
    self.decr_buttons = {}
    self.adj_labels = {}
    self.incr_buttons = {}
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    self.adj_grid.setWidget(0, 1, HTML('''Adjust the <a href="#utility_function">constants</a> to change<br>the AI's behavior.'''))
    for i, key in enumerate(td_keys):
      j = i + 1
      self.decr_buttons[key] = Button('<', self)
      self.adj_grid.setWidget(j, 0, self.decr_buttons[key])

      self.incr_buttons[key] = Button('>', self)
      self.adj_grid.setWidget(j, 2, self.incr_buttons[key])

      self.adj_labels[key] = Label("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))
      self.adj_grid.setWidget(j, 1, self.adj_labels[key])

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

  def start_new_game(self):
    #g.__init__() nope, can't use this :(
    self.state = State()
    self.game_over = False

    self.depthLimit = 3
    self.human_first = True

    self.ai_first.setVisible(True)  # new game, so we make this button visible

    self.check_win()

    self.max_player = '-1'
    self.min_player = '-1'
    self.state_to_grid()

  def onClick(self, sender):
    if sender == self.increase_depth:
      self.depthLimit += 1
      self.depth_label.setHTML("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")

    if sender == self.decrease_depth:
      self.depthLimit -= 1
      self.depth_label.setHTML("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")

    if sender == self.new_game:
      self.start_new_game()

    self.check_adjusts(sender)

    if not self.game_over:
      if sender == self.ai_first and self.min_player == -1: # we only set min_player and max_player when they are not yet initialized
        self.human_first = False
        self.max_player = '1'
        self.min_player = '2'
        self.state.next_piece[2] = self.max_player

        self.ai_first.setVisible(False) # can't go first any more so we make it invisible...

        new_state = ab(self.state, self.TD_CONSTS, depth_limit=self.depthLimit)[1]
        last_position = find_last_move(self.state, new_state)
        self.state = new_state

        self.state_to_grid(prev_x_board=last_position['x_board'],
                           prev_y_board=last_position['y_board'],
                           prev_x_cell=last_position['x_cell'],
                           prev_y_cell=last_position['y_cell'],)


      if hasattr(sender, 'point'):
        if self.min_player == -1: # we only set min_player and max_player when they are not yet initialized
          self.max_player = '2'
          self.min_player = '1'
          self.ai_first.setVisible(False) # can't go first any more so we make it invisible...


        point = sender.point


        g = self.g.getWidget(point['y_board'], point['x_board'])
        g.setText(point['y_cell'], point['x_cell'], str(self.min_player))

        self.grid_to_state(point)

        self.check_win()

        self.state.next_piece[2] = self.max_player

        new_state = ab(self.state, self.TD_CONSTS, depth_limit=self.depthLimit)[1]
        last_position = find_last_move(self.state, new_state)
        self.state = new_state

        self.state_to_grid(prev_x_board=last_position['x_board'],
                           prev_y_board=last_position['y_board'],
                           prev_x_cell=last_position['x_cell'],
                           prev_y_cell=last_position['y_cell'],)


        self.check_win()


  def check_adjusts(self, sender):
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    for key in td_keys:
      if self.incr_buttons[key] == sender:
        self.change_td_const(key, '+')
      if self.decr_buttons[key] == sender:
        self.change_td_const(key, '-')
      self.adj_labels[key].setText("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))

  def change_td_const(self, key, sign):
    if sign == '+':
      self.TD_CONSTS[key] += INCREMENT_AMOUNT
    elif sign == '-':
      self.TD_CONSTS[key] -= INCREMENT_AMOUNT

  def check_win(self):
    self.depth_label.setHTML("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")
    self.check_adjusts(None)
    human_score = self.state.score[str(self.min_player)]
    ai_score = self.state.score[str(self.max_player)]
    self.score_label.setText("CURRENT SCORE: Human(%d): %d | AI(%d): %d" % (self.min_player, human_score, self.max_player, ai_score))
    if is_over(self.state):
      if human_score > ai_score:
        msg = "Congratulations, you won! To increase the difficulty, increase the search depth."
      elif human_score < ai_score:
        msg = "You lost! Better luck next time."
      elif human_score == ai_score:
        msg = "Game ends in a tie."
      self.game_over_msg.setHTML("<H3>" + msg + "</H3>")
      self.game_over = True
    if self.game_over:
      self.game_over_msg.setVisible(True)
    else:
      self.game_over_msg.setVisible(False)

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

  def state_to_grid(self, prev_x_board=-1, prev_y_board=-1, prev_x_cell=-1, prev_y_cell=-1):
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
                if self.min_player == -1:
                  b = Button('Play 1 here.', self)
                else:
                  b = Button('Play %d here.' % (self.state.next_piece[2]), self)
                b.point = {'x_cell':x_cell, 'y_cell':y_cell, 'y_board': y_board, 'x_board': x_board}
              else:
                b = HTML('-')

            elif board[y_board][x_board][y_cell][x_cell]['cell'] == 1:
              if (prev_x_cell == x_cell and
                  prev_y_cell == y_cell and
                  prev_y_board == y_board and
                  prev_x_board == x_board):
                b = HTML('<p style="color:red">1</p>')
              else:
                b = HTML('1')
            elif board[y_board][x_board][y_cell][x_cell]['cell'] == 2:
              if (prev_x_cell == x_cell and
                  prev_y_cell == y_cell and
                  prev_y_board == y_board and
                  prev_x_board == x_board):
                b = HTML('<p style="color:red">2</p>')
              else:
                b = HTML('2')
            g.setWidget(y_cell, x_cell, b)

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
                piece = self.state.next_piece
                piece[0] = y_cell
                piece[1] = x_cell
            else:
              assert (g.getText(y_cell, x_cell) == '-')
    if is_win(self.state.boards[point['y_board']][point['x_board']]):
      self.state.score[str(self.min_player)] += 1


if __name__ == '__main__':
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  r = RootPanel()
  r.add(g)
  pyjd.run()
