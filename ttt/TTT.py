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
      self.game_resolution.setVisible(True)
    else:
      self.game_resolution.setVisible(False)
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
