def import_libs():
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
  from pyjamas import Window
  from pyjamas.ui.CSS import StyleSheetCssFile
  from pyjamas.ui.CSS import StyleSheetCssText

  from pyjamas import logging

  log = logging.getConsoleLogger()

  from learning import State, ab, is_win, is_full, turn, is_over, normalize
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
from pyjamas import Window
from pyjamas.ui.CSS import StyleSheetCssFile
from pyjamas.ui.CSS import StyleSheetCssText

from pyjamas import logging

log = logging.getConsoleLogger()

from learning import State, ab, is_win, is_full, turn, is_over, normalize

INCREMENT_AMOUNT = .05

class GridWidget(AbsolutePanel):

  def __init__(self):

    self.state = State()
    self.game_over = False
    self.TD_CONSTS = {'c3': 0.767944, 'c2': 1.049451, 'c1': 3.074038, 'c6': 0.220823, 'c5': 0.281883, 'c4': 0.605861}
    optional_args = {'TD_CONSTS': self.TD_CONSTS, 'MAX': '1', 'MIN': 2}
    AbsolutePanel.__init__(self)

    self.game_over_msg = HTML("")
    self.add(self.game_over_msg)


    self.depthLimit = 3
    self.human_first = True
    self.ai_first = Button("AI first.", self)
    self.add(self.ai_first)

    self.increase_depth = Button("Increase search depth.", self)
    self.decrease_depth = Button("Decrease search depth.", self)
    self.depth_label = HTML("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")

    self.depth_grid = Grid()
    self.depth_grid.resize(1, 3)
    self.depth_grid.setBorderWidth(2)
    self.depth_grid.setCellPadding(9)
    self.depth_grid.setCellSpacing(1)
    self.add(self.depth_grid)
    self.depth_grid.setWidget(0, 0, self.decrease_depth)
    self.depth_grid.setWidget(0, 1, self.depth_label)
    self.depth_grid.setWidget(0, 2, self.increase_depth)

    self.new_game = Button("New game", self)
    self.add(self.new_game)

    self.score_label = Label("Human: %d | AI: %d"% (0,0))
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
    self.adj_grid.resize(7, 3)
    self.adj_grid.setBorderWidth(2)
    self.adj_grid.setCellPadding(9)
    self.adj_grid.setCellSpacing(1)
    self.init_constants_adj_grid()
    self.add(self.adj_grid)


    self.max_player = '-1'
    self.min_player = '-1'
    self.state_to_grid()

    explanation = """
<div style="margin-top: 1em;width: 90%;margin-left: 5%;">

<p>
<h3>Rules of the Game</h3>
Meta-tic-tac-toe is played on a board consisting of 9 different tic-tac-toe boards, each of which can be won independently.  Boards are won in an identical fashion to tic-tac-toe, and like tic-tac-toe, turns alternate between player one <em>(1's)</em> and player two <em>(2's)</em>.  Once a board has been won or is full of pieces, neither player can play into it.  The nine boards are arranged in a three by three grid pattern with the coordinate of the previous move
determining which board the next player can play into. (Example: a place into the <em>center</em> position of any of the nine tic-tac-toe boards means that the next player must play into the <em>central</em> tic-tac-toe board.)  The first player to move must play into the center board.  If a player is supposed to play into a board which has already been won or is completely full of pieces, he/she instead chooses which of the remaining boards to play into and plays in an empty position in
it.  Play is stopped when all individual boards have been won or are completely full of pieces.  At this point, the agent with the most points wins.
</p>

<p>
<h3>Turning Python into JavaScript with pyjs/pyjamas</h3>
The AI for this game is programmed in python.  During initial development, the only interface to play the AI was through the python terminal.  When I decided to expand this project into a web app, I had to choose whether the AI would run on the client or the server.  I quickly decided that this computationally intensive task should be put client side which necessitated somehow transforming my python script into javascript.  I realized that I
could translate my python code into javascript manually, but a superior solution would be finding an adequate python to javascript compiler/translator.  Pyjs/pyjamas seemed adequate for this job, and it also provides a convenient library for creating a user interface.  Indeed, pyjs/pyjamas has been able to do everything I needed it to do, but if I had to start over again, I would probably <em>not</em> use pyjs/pyjamas.  Due to cryptic or non existent error messages, debugging pyjs/pyjamas is an
arduous process.  Indeed, the most difficult step was the initial translation of my python script into javascript which required a substantial change in my existing implementation to get around a <a href="https://github.com/pyjs/pyjs/issues/817">bug</a>.  In addition to cryptic error messages, the output of the pyjs/pyjamas compiler is extremely slow and innefficient. While the python CLI AI can perform a minimax search to a depth of 6 ply, the pyjs/pyjamas AI in the same time can only search to a depth
of 3.  As a result, the AI for this web app has an inferior skill relative to the command line interface AI.
</p>

<p>
<a name="depth_explanation"></a>
<h3>How the AI Works</h3>
The AI uses the <a href="http://en.wikipedia.org/wiki/Minimax">minimax</a> search algorithm to find a next move.  Basically the AI looks at all the possible moves that the player MAX can make (player MAX because the current player is trying to maximize the utility of its move), and selects the move with the highest predicted utility.  How does the player MAX calculate the predicted utility of a move or state?  Player MAX makes a recursive call to the minimax algorithm, except,
this time the next player will be player MIN who is trying to minimize the utility of the positions.  Player MIN, like player MAX looks at all the possible moves, but choses the move with the lowest predicted utility.  How does player MIN calculate the predicted utility of a move?  Well you can already guess: making a recursive call to the minimax algorithm.  However, at some point these recursive calls must stop, so an additional parameter is passed into the minimax algorithm that
keeps track of depth.  When the maximum depth has been reached, the minimax algorithm, rather than making a recursive call to itself, makes a call to a utility function that assigns a rough estimate of the value of the state.
</p>

<p>
<a name="utility_function"></a>
<h3>The Utility Function</h3>
The utility function looks at a given state and using some heuristics assigns an approximate value to the state.  Oftentimes a utility function is composed of a number of basis functions.  The return value of each basis function is then multiplied by some constant and then the whole thing is added together:
<Pre style="white-space: pre-wrap;">
def utility(state):
  v1 = basis_1(state) * c1
  v2 = basis_2(state) * c2
  .
  .
  .

  vn = basis_n(state) * cn
  return v1 + v2 + ...  + vn
</Pre>
For a more familiar game like chess, one can imagine these basis functions being based on a number of things including the relative number of pieces that each player has.  For instance, if relative number of pawns basis function is multiplied by a constant equal to 1, then the relative number of rooks basis function should be multiplied by a constant equal to 5 according to <a href="http://en.wikipedia.org/wiki/Chess_strategy#Basic_concepts_of_board_evaluation">chess strategy</a>.  In
the case of meta tic-tac-toe, my utility function is based on six different basis functions:
<li>
f1_score - the relative "score" of each player.  This is calculated by subtracting the score of player MIN from the score of player MAX.
</li>
<li>
f2_center - the relative number of center pieces.  This is calculated by subtracting the number of center pieces that MIN has from the number of center pieces that MAX has.
</li>
<li>
f3_corner - the relative number of corner pieces (e.g. top right).
</li>
<li>
f4_side - the relative number of side pieces (e.g. top middle).
</li>
<li>
f5_blocking - the relative number of blocking positions.  For example any time there are three pieces in a row/column/diagonal that are not all of the same type, that is considered a blocking position.
</li>
<li>
f6_potential - the relative number of potential positions.  Any position that could lead to a three in a row, at the next opportunity is considered a potential position.
</li>
These six basis functions are components of the utility function, but they should not be weighted equally.
f1_score, is clearly much more important than f4_side.  In fact, in my implementation, f1_score is 3.07:0.61 times more important than f4_side.  One can experiment with how changing these constants will change the behavior of the AI.  However, without a lengthy analysis, the precise weighting is difficult to determine.  To determine these constants analytically, I used temporal difference learning.
</p>

<p>
<h3>Learning Utility Function Constants Using Temporal Difference Learning</h3>
<a href="http://en.wikipedia.org/wiki/Temporal_difference_learning">Temporal difference learning</a> works by comparing two evaluations of the utility of a state: one evaluation that is not very ideal and the other evaluation that is somehow closer to the true value.  Then the constants are updated so that if the less ideal evaluation were computed again, it would return a value closer to what the more idea evaluation had returned.  In my case, one evaluation is simply the utility function applied to the current state, and the other evaluation that is somehow
more "ideal" is what the minimax search predicts
will occur -- in other words, it is the utility function of the state that the minimax search predicts will be played.  (In a sense, temporal difference learning is vaguely analogous to supervised learning except rather than having labeled/training instances, we have these more "ideal" predictions based on using the minimax search.)  My implementation of temporal difference learning is expressed in only a few lines of python code:
<Pre style="white-space: pre-wrap;">
def td_learning(terminal_state, TD_CONSTS, prev_state):
  '''This function modifies TD_CONSTS according to the temporal difference algorithm.
  TD_CONSTS: the constants multiplied by the basis functions to compute the utility function.
  prev_state: the current state that the minimax search has just found a next move for.
  terminal_state: the state that the minimax search predicts will occur
  if both players play ideally.
  This state is not the state that the AI choses as its next move, but rather the state that the minimax search predicts will
  occur in the future if both players play ideally.

  Note: the number of moves between prev_state and terminal_state is equal to the number of ply searched,
  e.g. the depth_limit parameter passed to the minimax search function, ab.
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
</Pre>
The <a href="http://chet-weger.herokuapp.com/learn_meta_ttt/">training regime</a> for temporal difference learning proceeds by playing a game where the AI makes moves for both sides.  After only a few games of training, one can see dramatic improvements in the relative value of the constants.
</p>
</div>

<br>
</div>

<p align="center">Written by <a href="http://chet-weger.herokuapp.com/">Chet Weger</a>.  Questions, comments, bugs?  Contact me at chetweger [at] gmail.com.</p>
<p align="center"><a href="http://chet-weger.herokuapp.com/">Return to my home page.</a></p>
    """
    explanation = HTML(explanation)
    self.add(explanation)

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
    g.state = State()
    g.game_over = False

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
      self.depth_label.setText("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")

    if sender == self.decrease_depth:
      self.depthLimit -= 1
      self.depth_label.setText("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")

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

        self.state = ab(self.state, self.TD_CONSTS, depth_limit=self.depthLimit)[1]

        self.state_to_grid()


      if hasattr(sender, 'point'):
        if self.min_player == -1: # we only set min_player and max_player when they are not yet initialized
          self.max_player = '2'
          self.min_player = '1'
          self.ai_first.setVisible(False) # can't go first any more so we make it invisible...

        assert self.state.boards

        point = sender.point


        g = self.g.getWidget(point['y_board'], point['x_board'])
        if self.human_first:
          g.setText(point['y_cell'], point['x_cell'], str(self.min_player))
        else:
          g.setText(point['y_cell'], point['x_cell'], str(self.max_player))

        self.grid_to_state(point)

        self.check_win()

        if self.human_first:
          self.state.next_piece[2] = self.max_player
        else:
          self.state.next_piece[2] = self.min_player

        #self.state.player = next_player(self.state.player)

        self.state = ab(self.state, self.TD_CONSTS, depth_limit=self.depthLimit)[1]

        self.state_to_grid()
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
    self.state_to_grid()
    self.depth_label.setText("""AI will search to a <a href="#depth_explanation">depth</a> of """ + str(self.depthLimit) +".")
    self.check_adjusts(None)
    if self.human_first:
      print "Human went first"
      human_score = self.state.score['1']
      ai_score = self.state.score['2']
      self.score_label.setText("Human: %d | AI: %d" % (human_score, ai_score))
    else:
      print "AI went first"
      human_score = self.state.score['1']
      ai_score = self.state.score['2']
      self.score_label.setText("Human: %d | AI: %d" % (human_score, ai_score))
    if is_over(self.state):
      if human_score > ai_score:
        msg = "Congratulations, you won! To increase the difficulty, increase the search depth."
      elif human_score < ai_score:
        msg = "You lost! Better luck next time."
      elif human_score == ai_score:
        msg = "Game ends in a tie."
      self.game_over_msg.setText(msg)
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
                if self.min_player == -1:
                  b = Button('Play 1 here.', self)
                else:
                  b = Button('Play %d here.' % (self.state.next_piece[2]), self)
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
                piece = self.state.next_piece
                piece[2] = 1
                #piece[2] = int(piece[2] == 1) + 1 # next player!
                piece[0] = y_cell
                piece[1] = x_cell
            else:
              assert (g.getText(y_cell, x_cell) == '-')
    if is_win(self.state.boards[point['y_board']][point['x_board']]):
      self.state.score[str(piece[2])] += 1


if __name__ == '__main__':
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  r = RootPanel()
  r.add(g)
  pyjd.run()
