import pyjd # this is dummy in pyjs

'''
What to do next: add in functionality to
convert state to grid (done)
convert grid to state (shouldn't be too hard)
 - must keep track of board
 - must keep track of player
 - must keep track of nextPiece
and then integrate full search functionality:
  1. pass optional arguments to ab(), setting global variables.
allow for multiple 
'''

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

from learning import *

class GridWidget(AbsolutePanel):

  def __init__(self):
    AbsolutePanel.__init__(self)


    self.ai_first = Button("AI first.", self)
    self.add(self.ai_first)

    self.g=Grid()
    self.g.resize(3, 3)
    self.g.setBorderWidth(2)
    self.g.setCellPadding(9)
    self.g.setCellSpacing(1)

    self.init()
    self.add(self.g)

    self.state = State()

    self.state.boards[1][0][1][0]['cell'] = 1
    self.state.boards[0][2][0][2]['cell'] = 2
    self.state_to_grid()

  def onClick(self, sender):
    if hasattr(self, 'ai_first') and sender == self.ai_first:
      self.state.max_v = 1
      self.state.min_v = 2
      self.remove(self.ai_first)
      del(self.ai_first) # remove all fucking traces
      print 'button ai_first exists', hasattr(self, 'ai_first') 

      self.state.print_me()
      next_state = ab(self.state)
      self.state_to_grid(next_state)

    else:
      '''
      self.g.setText(0, 1, 'wassup')
      self.g.setText(p['x'], p['y'], str(self.state.min_v))
      '''
      if hasattr(self, 'ai_first'):
        print 'Setting state.max_v'
        self.state.max_v = 2
        self.state.min_v = 1
        self.remove(self.ai_first)
      p = sender.point
      self.g.setText(p['y'], p['x'], str(self.state.min_v))

      self.state = self.grid_to_state()
      self.state.player = next_player(self.state.player)

      self.state.print_me()
      next_state = ab(self.state)
      self.state_to_grid(next_state)


  def state_to_grid(self):
    board = self.state.boards
    for y_board in range(3):
      for x_board in range(3):
        g=Grid()
        g.resize(3, 3)
        g.setBorderWidth(2)
        g.setCellPadding(9)
        g.setCellSpacing(1)
        for y_cell in range(3):
          for x_cell in range(3):

            if board[y_board][x_board][y_cell][x_cell]['cell'] == 0:
              b = Button('Play here.', self)
              b.point = {'x_cell':x_cell, 'y_cell':y_cell, 'y_board': y_board, 'x_board': x_board}
              g.setWidget(y_cell, x_cell, b)

            elif board[y_board][x_board][y_cell][x_cell]['cell'] == 1:
              g.setText(y_cell, x_cell, '1')
            elif board[y_board][x_board][y_cell][x_cell]['cell'] == 2:
              g.setText(y_cell, x_cell, '2')
            else:
              print 'state_to_grid exception'
              #assert False

        self.add(g)
        self.g.setWidget(y_board, x_board, g)

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
    return next_state

  def init(self):
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

def AppInit():
   return GridWidget()

if __name__ == '__main__':
  pyjd.setup("./GridTest.html")
  g = GridWidget()
  RootPanel().add(g)
  pyjd.run()
