import pyjd # this is dummy in pyjs

from pyjamas.ui.Button import Button
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.Grid import Grid
from pyjamas.ui.HTML import HTML
from pyjamas.ui.AbsolutePanel import AbsolutePanel
from pyjamas.Timer import Timer
from pyjamas.ui.CSS import StyleSheetCssText
from pyjamas import Window

from learning import State, ab, is_win, is_full, turn, is_over, normalize, td_learning, find_last_move

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
    self.game_round = 0
    self.TD_CONSTS = {'c3': 1., 'c2': 1., 'c1': 1., 'c6': 1., 'c5': 1., 'c4': 1.}
    self.CONSTS   =  {'c3': .5, 'c2': 1., 'c1': 3., 'c6': .5, 'c5': .5, 'c4': .5}
    self.BEST_CONSTANTS = {'c3': 0.767944, 'c2': 1.049451, 'c1': 3.074038, 'c6': 0.220823, 'c5': 0.281883, 'c4': 0.605861}
    self.ONES_CONSTS = {'c3': 1., 'c2': 1., 'c1': 1., 'c6': 1., 'c5': 1., 'c4': 1.}
    AbsolutePanel.__init__(self)

    self.welcome_label = HTML('<H2 align="center">Welcome to Meta-Tic-Tac-Toe!</H2>To watch the AI play itself, press either "begin game" button.  Note: if there is a pop-up saying that the script is taking a long time to complete, this is not a bug - the AI is just taking a while to find the next move.  Select the option to continue the script.', StyleName='margins_both')
    self.add(self.welcome_label)

    self.depth_limit = 2

    self.train_td = Button("Begin game.  Learning AI first!", self, StyleName='margins_left')
    self.add(self.train_td)

    self.train_static = Button("Begin game.  Static AI first!", self, StyleName='margins_left')
    self.add(self.train_static)

    self.score_label = Label("CURRENT SCORE: Learning AI: %d | Static AI: %d"% (0,0), StyleName='margins_left')
    self.add(self.score_label)

    self.game_over_message = Label("", StyleName='margins_left')
    self.add(self.game_over_message)

    StyleSheetCssText(margins)

    self.increase_depth = Button("Increase ply search depth.", self)
    self.decrease_depth = Button("Decrease ply search depth.", self)
    self.depth_label = Label("Current depth is " + str(self.depth_limit) +".")
    self.depth_grid = Grid(StyleName='margins_left')
    self.depth_grid.resize(1, 3)
    self.depth_grid.setBorderWidth(2)
    self.depth_grid.setCellPadding(9)
    self.depth_grid.setCellSpacing(1)
    self.add(self.depth_grid)
    self.depth_grid.setWidget(0, 0, self.decrease_depth)
    self.depth_grid.setWidget(0, 1, self.depth_label)
    self.depth_grid.setWidget(0, 2, self.increase_depth)

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
    self.adj_grid.resize(7, 4)
    self.adj_grid.setBorderWidth(2)
    self.adj_grid.setCellPadding(9)
    self.adj_grid.setCellSpacing(1)
    self.init_constants_adj_grid()
    self.add(self.adj_grid)

    self.reset_constants = Button("Reset all of Learning AI's constants to 1.", self, StyleName='margins_left')
    self.add(self.reset_constants)

    self.state_to_grid()

    explanation = """
    <br>
    <br>
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
    arduous process.  Indeed, the most difficult step was the initial translation of my python script into javascript which required a substantial change in my existing implementation to get around a <a href="https://github.com/pyjs/pyjs/issues/817">bug</a>.  In addition to cryptic error messages, the output of the pyjs/pyjamas compiler is extremely slow and innefficient. While the python CLI AI can perform a minimax search to a depth of 5 ply, the pyjs/pyjamas AI in the same time can only search to a depth
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
    <em>f1_score</em> (multiplied by Constant 1) - the relative "score" of each player.  This is calculated by subtracting the score of player MIN from the score of player MAX.
    </li>
    <li>
    <em>f2_center</em> (multiplied by Constant 2) - the relative number of center pieces.  This is calculated by subtracting the number of center pieces that MIN has from the number of center pieces that MAX has.
    </li>
    <li>
    <em>f3_corner</em> (multiplied by Constant 3) - the relative number of corner pieces (e.g. top right).
    </li>
    <li>
    <em>f4_side</em> (multiplied by Constant 4) - the relative number of side pieces (e.g. top middle).
    </li>
    <li>
    <em>f5_blocking</em> (multiplied by Constant 5) - the relative number of blocking positions.  For example any time there are three pieces in a row/column/diagonal that are not all of the same type, that is considered a blocking position.
    </li>
    <li>
    <em>f6_potential</em> (multiplied by Constant 6) - the relative number of potential positions.  Any position that could lead to a three in a row, at the next opportunity is considered a potential position.
    </li>
    These six basis functions are components of the utility function, but they should not be weighted equally.
    <em>f1_score</em>, is clearly much more important than <em>f4_side</em>.  In fact, in my implementation, <em>f1_score</em> is 3.07:0.61 times more important than <em>f4_side</em>.  One can experiment with how changing these constants will change the behavior of the AI.  However, without a lengthy analysis, the precise weighting is difficult to determine.  To determine these constants analytically, I used temporal difference learning.
    </p>

    <p>
    <h3>Learning Utility Function Constants Using Temporal Difference Learning</h3>
    <a href="http://en.wikipedia.org/wiki/Temporal_difference_learning">Temporal difference learning</a> works by comparing two evaluations of the utility of a state: one evaluation that is not very ideal and the other evaluation that is somehow closer to the true value.  Then the constants are updated so that if the less ideal evaluation were computed again, it would return a value closer to what the more idea evaluation had returned.  In my case, one evaluation is simply the utility function applied to the current state, and the other evaluation that is somehow
    more "ideal" is what the minimax search predicts
    will occur -- in other words, it is the utility function evaluation of the state that the minimax search predicts will be played.  (In a sense, temporal difference learning is vaguely analogous to supervised learning except rather than having labeled/training instances, we have these more "ideal" predictions based on using the minimax search.)  My implementation of temporal difference learning is expressed in only a few lines of python code:
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
    The <a href="http://chet-weger.herokuapp.com/learn_meta_ttt/">training regime</a> proceeds by playing a game where the AI makes moves for both sides.  After only a few games of training, one can see dramatic improvements in the relative value of the constants.  After about 15-20 training games, the learning AI is typically capable of beating the static AI.  Figure 1 shows how the static AI's constants improve over a series of twenty training games.  In this
    series of games, both AIs search to a depth of 3 ply, and the static AI's constants are the same as the default values in this application (i.e. they are {'c1':3, 'c2':2, 'c3':0.5, 'c4':0.5, 'c5':0.5, 'c6':0.5}). Notice that the static AI
    starts by consistently beating the learning AI, but the last 5 games are all won by the learning AI.  Other patterns are also noticeable from the graph.  The ending moves of a game tend to produce the most change in the constants.  This makes sense because most of the points in a game are typically won in the last quarter of a game.  When points are being won rapidly, then the difference between the predicted utility and the actual utility will be at its highest.
    </p>

    <p>
    <img width="1700" align="left" src="http://chet-weger.herokuapp.com/media/imgs/temporal_difference_learning_in_meta_ttt.png"></img>
    </p>

    <br>

    <p style="clear:both" align="center">Written by <a href="http://chet-weger.herokuapp.com/">Chet Weger</a>.  Questions, comments, bugs?  Contact me at chetweger [at] gmail.com.</p>
    <p align="center"><a href="http://chet-weger.herokuapp.com/">Return to my home page.</a></p>
    """
    self.add(HTML(explanation, StyleName='margins_both'))

  def init_constants_adj_grid(self):
    '''Initializes the grid that allows the TD_CONSTS to be adjusted.
    '''
    self.decr_buttons = {}
    self.adj_learning_labels = {}
    self.adj_static_labels = {}
    self.incr_buttons = {}
    td_keys = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']

    learning_ai_header = Label("Constant for the learning AI.")
    self.adj_grid.setWidget(0, 0, learning_ai_header)

    static_ai_header = Label("Constants for the static AI.")
    self.adj_grid.setWidget(0, 2, static_ai_header)

    for i, key in enumerate(td_keys):
      j = i + 1 # off by one because of header...
      self.adj_learning_labels[key] = Label("Constant %d: %f" % (key[1], self.TD_CONSTS[key]))
      self.adj_grid.setWidget(j, 0, self.adj_learning_labels[key])

      self.decr_buttons[key] = Button('<', self)
      self.adj_grid.setWidget(j, 1, self.decr_buttons[key])

      self.adj_static_labels[key] = Label("Constant %d: %f" % (key[1], self.CONSTS[key]))
      self.adj_grid.setWidget(j, 2, self.adj_static_labels[key])

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

  def start_new_game(self):
    #g.__init__() nope, can't use this :(
    g.state = State()
    g.game_over = False

    self.depthLimit = 2
    self.human_first = True

    self.check_is_win()

    self.max_player = '-1'
    self.min_player = '-1'
    self.state_to_grid()


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

    if sender == self.train_td:
      self.state = State()

      self.static_ai_str = '2'
      self.td_ai_str = '1'

      self.state.next_piece = [1, 1, 1]
      Timer(250, notify=self.td_ai_turn)

    if sender == self.train_static:
      self.state = State()

      self.static_ai_str = '1'
      self.td_ai_str = '2'

      self.state.next_piece = [1, 1, 1]
      Timer(250, notify=self.static_ai_turn)

  def check_adjusts(self, sender):
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
      self.adj_static_labels[key].setText("Constant %d: %f" % (key[1], self.CONSTS[key]))

  def check_is_win(self, last_position={}):
    self.state_to_grid(prev_x_board=last_position['x_board'],
                       prev_y_board=last_position['y_board'],
                       prev_x_cell=last_position['x_cell'],
                       prev_y_cell=last_position['y_cell'],)

    learning_ai_score = self.state.score[self.td_ai_str]
    static_ai_score = self.state.score[self.static_ai_str]
    self.score_label.setText("CURRENT SCORE: Learning AI(%d): %d | Static AI(%d): %d" % (self.td_ai_str, learning_ai_score, self.static_ai_str, static_ai_score))
    self.state.printInfo()
    if is_over(self.state):
      if learning_ai_score > static_ai_score:
        msg = "the learning AI won with score %d vs %d." % (learning_ai_score, static_ai_score)
      elif learning_ai_score < static_ai_score:
        msg = "the static AI won with score %d vs %d." % (static_ai_score, learning_ai_score)
      elif learning_ai_score == static_ai_score:
        msg = "the game ended in a tie."
      self.game_round += 1
      game_over_message.setText("In game round " + str(self.game_round) + ", " + msg)
      return True
    else:
      return False

  def static_ai_turn(self):
    print "\n\nNaive AIs turn which plays the piece: ", self.state.next_piece[2]
    print "next piece is ", self.state.next_piece
    print "TD_CONSTS", self.TD_CONSTS
    (expectedUtility, next_state) = ab(self.state,
                                      self.CONSTS,
                                      depth_limit=self.depth_limit)

    last_position = find_last_move(self.state, next_state)

    self.state = next_state
    self.state.printInfo()

    over = self.check_is_win(last_position)
    print "back in static"
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

    last_position = find_last_move(self.state, state)

    self.state = state

    state.printInfo()

    print "TD_CONSTS after being adjusted are: ", self.TD_CONSTS

    over = self.check_is_win(last_position)
    print "back in td"
    print "Is over ", over
    if not over:
      return Timer(250, notify=self.static_ai_turn)
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
                b = HTML('<p style="color:blue">AI %d could<br>play here.</p>' % (self.state.next_piece[2]), self)
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

if __name__ == '__main__':
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  r = RootPanel()
  r.add(g)
  pyjd.run()
