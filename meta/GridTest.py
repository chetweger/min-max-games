import pyjd # this is dummy in pyjs

'''
What to do next: add in functionality to
convert state to grid (done)
convert grid to state (done)
 - must keep track of board
 - must keep track of player
 - must keep track of nextPiece
Add onclick functionality!
And then integrate full search functionality:
  1. pass optional arguments to ab(), setting global variables.
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

from learning import State, ab, isWin, isFull, turn

class GridWidget(AbsolutePanel):

  def __init__(self):
    TD_C = {'c3': 0.95992938236536673, 'c2': 1.3118140945279137, 'c1': 3.842547843349949, 'c6': 0.27602882530408006, 'c5': 0.3523534563973569, 'c4': 0.7573263980553335}
    optional_args = {'TD_CONSTS': TD_C, 'MAX': '1', 'MIN': 2}
    ab(State(),  TD_C, False, optional_args=optional_args)[1].printInfo()
    '''
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
<<<<<<< HEAD
    '''
    self.state.boards[1][0][1][0]['cell'] = 1
    self.state.boards[0][2][0][2]['cell'] = 2
    self.state_to_grid()

    g = self.g.getWidget(0, 0)
    g.setText(0, 0, '1')

    self.grid_to_state()
    self.state_to_grid()
    self.max_player = '-1'
    self.min_player = '-1'
=======
    self.TD_CONSTS = {'c3': 0.95992938236536673, 'c2': 1.3118140945279137, 'c1': 3.842547843349949, 'c6': 0.27602882530408006, 'c5': 0.3523534563973569, 'c4': 0.7573263980553335}
    self.state.printInfo()
    self.state = ab(self.state, self.TD_CONSTS, False)[1]
    self.state.printInfo()
    print 'done'
    self.state_to_grid()
>>>>>>> 7cd8656180665661d1d0a48e01f8271a014bdd4e
    '''


  def onClick(self, sender):
    print "Registered."
    if hasattr(self, 'ai_first') and sender == self.ai_first:
      print 'ai_first'
      self.max_player = '1'
      self.min_player = '2'
      self.remove(self.ai_first)
      del(self.ai_first) # remove all fucking traces
      print 'button ai_first exists', hasattr(self, 'ai_first')

      self.state.print_me()
      print 'player is ', self.state.nextPiece
      self.state = ab(self.state, self.TD_CONSTS, False, 
        optional_args={'TD_CONSTS': self.TD_CONSTS, 
          'MIN': self.min_player, 'MAX': self.max_player})
      self.state_to_grid()

    else:
      print 'human'
      '''
      self.g.setText(0, 1, 'wassup')
      self.g.setText(p['x'], p['y'], str(self.state.min_v))
      '''
      if hasattr(self, 'ai_first'):
        print 'Setting state.max_v'
        self.max_player = '2'
        self.min_player = '1'
        self.remove(self.ai_first)
        del(self.ai_first) # remove all fucking traces
      #assert self.min_player == str(self.state.nextPiece[2])
      print self.state.boards
      assert self.state.boards

      point = sender.point
      g = self.g.getWidget(point['y_board'], point['x_board'])
      g.setText(point['y_cell'], point['x_cell'], str(self.min_player))

      self.grid_to_state()
      print 'onClick'
      #self.state.player = next_player(self.state.player)

      self.state.printInfo()
      print 'player is ', self.state.nextPiece
      self.state = ab(self.state, self.TD_CONSTS, False, 
        optional_args={'TD_CONSTS': self.TD_CONSTS, 
          'MIN': self.min_player, 'MAX': self.max_player})[1]
      self.state_to_grid()

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
    print 'state_to_grid'
    self.state.printInfo()
    for y_board in range(3):
      for x_board in range(3):

        # for this mini-grid, do i make butons or dashes?
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
              print 'state_to_grid exception', board[y_board][x_board][y_cell][x_cell]['cell']
              #assert False

        self.add(g)
        self.g.setWidget(y_board, x_board, g)

  def grid_to_state(self):
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
<<<<<<< HEAD
                piece = self.state.nextPiece
=======
                piece = list(self.state.nextPiece)
                print piece
>>>>>>> 7cd8656180665661d1d0a48e01f8271a014bdd4e
                if isWin(self.state.boards[piece[0]][piece[1]]):
                  self.state.score[str(piece[2])] += 1
                print 'a', piece
                piece[2] = 1
                print 'yes'
                #piece[2] = int(piece[2] == 1) + 1 # next player!
                print 'b'
                piece[0] = y_cell
                print 'c'
                piece[1] = x_cell
                print 'd'
            else:
              assert (g.getText(y_cell, x_cell) == '-')

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
