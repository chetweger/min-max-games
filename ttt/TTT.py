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

from pyjamas import logging

log = logging.getConsoleLogger()

from ttt import *

margins = """
<!--
.margins_left {
  margin-left: 50px;
}
.margins_both {
  margin-top: 2em;
  margin-left: 50px;
  width: 900px;
}
-->
"""

class GridWidget(AbsolutePanel):
  def __init__(self):
    AbsolutePanel.__init__(self)

    StyleSheetCssText(margins) # initialize css...

    header = """<div><H2 align="center">Welcome to Unbeatable Tic-Tac-Toe!</H2><br>My <a href="https://github.com/chetweger/min-max-games/blob/master/ttt/ttt.py">implementation</a> uses the min-max search algorithm with alpha beta pruning and a transposition table!</div>"""
    header = HTML(header, StyleName='margins_both')
    self.add(header)

    self.ai_first = Button("AI first.", self, StyleName='margins_left')
    self.add(self.ai_first)

    self.new_game = Button("New game", self, StyleName='margins_left')
    self.add(self.new_game)

    self.g=Grid(StyleName='margins_left')
    self.g.resize(3, 3)
    self.g.setBorderWidth(2)
    self.g.setCellPadding(4)
    self.g.setCellSpacing(1)

    self.init()
    self.add(self.g)

    self.state = State()

    self.game_resolution=Label("", StyleName='margins_left')
    self.add(self.game_resolution)


    explanation = """
    <br>
    <br>

    <p>
    <a name="depth_explanation"></a>
    <h3>How the AI Works</h3>
    The AI uses the <a href="http://en.wikipedia.org/wiki/Minimax">minimax</a> search algorithm to find a next move.  Basically the AI looks at all the possible moves that the player MAX can make (player MAX because the current player is trying to maximize the utility of its move), and selects the move with the highest predicted utility.  How does the player MAX calculate the predicted utility of a move or state?  Player MAX makes a recursive call to the minimax algorithm, except,
    this time the next player will be player MIN who is trying to minimize the utility of the positions.  Player MIN, like player MAX looks at all the possible moves, but choses the move with the lowest predicted utility.  How does player MIN calculate the predicted utility of a move?  Well you can already guess: making a recursive call to the minimax algorithm.  However, at some point these recursive calls must stop.  In the case of tic-tac-toe, this occurs, when there no valid moves
    for the next player to make, either because the board has been won or completely filled up with pieces.  When one of these terminal positions is encountered, the utility function is applied to the state:
      <li>The board is a victory for player MAX: return 1</li>
      <li>The board is a tie: return 0</li>
      <li>The board is a defeat for player MAX: return -1</p>
    </p>

    <p>
    <h3>Speeding up Minimax Search with Alpha Beta Pruning and a Transposition Table</h3>
    <img width="600" align="right" src="http://chet-weger.herokuapp.com/media/imgs/alpha_beta.png"></img>
    The minimax search algorithm's efficiency can be dramatically improved with alpha beta pruning and a transposition table. These optimizations provide an exponential decrease in running time while guaranteeing to never return a state with a utility value less than the value of what the vanilla minimax search returns.  The logic behind alpha beta pruning is illustrated in Figure 1.  In chess, a transposition is a sequence of moves that result in a position that can be reached by one or
    more
    alternate sequences of moves.  A transposition table is essentially a hash table of all positions that have been seen in a given minimax search.  A transposition table is therefore essentially a form a <a href="http://en.wikipedia.org/wiki/Memoization">memoization</a>.
    </p>

    <p>
    <h3>Challenges in Combining Alpha Beta Pruning and a Transposition Table</h3>
    During development, one of the most challenging bugs I faced involved naively combining alpha beta pruning and a transposition table. It turns out that naively combining the two optimizations introduces a bug causing the minimax search to return suboptimal states.  A breakthrough occurred when I noticed that my implementation seemed to play perfectly when it <em>only</em> had alpha beta pruning and in addition seemed to play perfectly when it <em>only</em> had a transposition table.
    The suboptimal results only seemed to occur when both optimizations were present.  I realized at this moment that somehow combining both alpha beta pruning with a transposition table must cause a bug.  The problem is that a transposition table depends on the minimax search to return <em>exact</em> values, but when alpha beta pruning is present, whenever a cutoff occurs, the value returned is either an upper bound or a lower bound on the true value. An internet search confirmed my
    suspicions and <a href="http://web.archive.org/web/20070822204120/www.seanet.com/~brucemo/topics/hashing.htm">provided</a> pseudo code for a fix to the problem.  You can find my code on <a href="https://github.com/chetweger/min-max-games/tree/master/ttt">github</a>.
    </p>

    <p>
    <h3>Turning Python into JavaScript with pyjs/pyjamas</h3>
    The AI for this game is programmed in python.  During initial development, the only interface to play the AI was through the python terminal.  When I decided to expand this project into a web app, I had to choose whether the AI would run on the client or the server.  I quickly decided that this computationally intensive task should be put client side which necessitated somehow transforming my python script into javascript.  I realized that I
    could translate my python code into javascript manually, but a superior solution would be finding an adequate python to javascript compiler/translator.  Pyjs/pyjamas seemed adequate for this job, and it also provides a convenient library for creating a user interface.  Indeed, pyjs/pyjamas has been able to do everything I needed it to do, but if I had to start over again, I would probably <em>not</em> use pyjs/pyjamas.  Due to cryptic or non existent error messages, debugging pyjs/pyjamas is an
    arduous process.  Indeed, the most difficult step was the initial translation of my python script into javascript which required a substantial change in my existing implementation to get around a <a href="https://github.com/pyjs/pyjs/issues/817">bug</a>.  In addition to cryptic error messages, the output of the pyjs/pyjamas compiler is extremely slow and inefficient.  However, due to the relative simplicity of tic tac toe and this implementation can solve tic-tac-toe from any
    position in less than 10 seconds on most computers.</p>


    <p align="center">Written by <a href="http://chet-weger.herokuapp.com/">Chet Weger</a>.  Questions, comments, bugs?  Contact me at chetweger [at] gmail.com.</p>
    <p align="center"><a href="http://chet-weger.herokuapp.com/">Return to my home page.</a></p>
    """
    self.add(HTML(explanation, StyleName='margins_both'))

  def start_new_game(self):
    self.state = State()
    self.game_over = False
    self.ai_first.setVisible(True)
    self.state_to_grid(self.state)

  def onClick(self, sender):
    if sender == self.ai_first:
      print 'player is ', self.state.player
      self.state.max_v = 1
      self.state.min_v = 2
      self.ai_first.setVisible(False)
      print 'button ai_first exists', hasattr(self, 'ai_first')

      self.state.print_me()
      next_state = ab(self.state)
      self.state = next_state
      self.state_to_grid(next_state)
      print '[after]player is ', self.state.player

    elif sender == self.new_game:
      self.start_new_game()

    else:
      print 'player is ', self.state.player
      '''
      self.g.setText(0, 1, 'wassup')
      self.g.setText(p['x'], p['y'], str(self.state.min_v))
      '''
      if self.ai_first.isVisible():
        print 'Setting state.max_v'
        self.state.max_v = 2
        self.state.min_v = 1
        self.ai_first.setVisible(False)
      p = sender.point
      self.g.setText(p['y'], p['x'], str(self.state.player))

      self.state = self.grid_to_state()
      self.check_for_tie() # end 1
      if is_win(self.state):
        self.state_to_grid(self.state, game_over=True, over_message='You won! This should not happen. This is a bug. Please email chetweger@gmail.com describing the conditions of the game.')

      self.state.player = next_player(self.state.player)

      self.state.print_me()
      next_state = ab(self.state)
      self.state = next_state
      self.state_to_grid(next_state)
      self.check_for_tie() # end 1
      if is_win(self.state):
        self.state_to_grid(self.state, game_over=True, over_message='You lost! Better luck next time.')

  def check_for_tie(self):
    if is_over(self.state):
      self.state_to_grid(self.state, game_over=True, over_message='The game is a tie.')


  def state_to_grid(self, state, game_over=False, over_message=''):
    if over_message:
      self.game_resolution.setText(over_message)
    board = state.board
    for y in range(3):
      for x in range(3):
        if board[y][x] == 0:
          if not game_over:
            b = Button('Press', self)
            b.point = {'x':x, 'y':y}
            self.g.setWidget(y, x, b)
          else:
            self.g.setText(y, x, '-')
        elif board[y][x] == '1':
          self.g.setText(y, x, '1')
        elif board[y][x] == '2':
          self.g.setText(y, x, '2')
        else:
          print 'state_to_grid exception'
          #assert False

  def grid_to_state(self):
    next_state = State()
    for y in range(3):
      for x in range(3):
        if isinstance(self.g.getWidget(y, x), Button):
          print y, x
          next_state.board[y][x] = 0
        elif self.g.getText(y, x) == '1' or self.g.getText(y, x) == '2':
          next_state.board[y][x] = int(self.g.getText(y,x))
        else:
          print 'grid_to_state exception'
          #assert False
    next_state.min_v = self.state.min_v
    next_state.max_v = self.state.max_v
    next_state.player = self.state.player
    return next_state

  def init(self):
    for y in range(3):
      for x in range(3):
        b = Button('Press', self)
        b.point = {'x':x, 'y':y}
        self.g.setWidget(y, x, b)

def AppInit():
   return GridWidget()

if __name__ == '__main__':
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  RootPanel().add(g)
  pyjd.run()
