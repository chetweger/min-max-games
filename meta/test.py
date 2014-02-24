from learning import *

s = State()

s.boards[1][1][1][1]['cell'] = 1
s.boards[1][1][2][1]['cell'] = 1
print 'hi'

ns = ab(s, TD_CONSTS, False)[1]

ns.printInfo()

#-------------------
# Testing functions.
#-------------------

def test1():
  '''Test for f1_score
  '''
  a = State()
  a.boards[0][0][0][0]['cell'] = 1
  a.boards[0][0][1][1]['cell'] = 1
  a.nextPiece[0] = 0
  a.nextPiece[1] = 0
  a.nextPiece[2] = 1
  a.printInfo()
  a.nextPiece[2] = 1
  b = ab(a, CONSTS)[1]
  print utility(b, CONSTS)
  b.printInfo()

def test2():
  '''Test for f2_center
  '''
  a = State()
  a.nextPiece[0] = 1
  a.nextPiece[1] = 1
  a.printInfo()
  b = ab(a, CONSTS)[1]
  b.printInfo()

def test3():
  '''Test for f1_score
  '''
  a = State()
  a.boards[0][0][1][0]['cell'] = 1
  a.boards[0][0][0][0]['cell'] = 2
  #a.boards[0][0][1][1]['cell'] = 1
  a.nextPiece[0] = 0
  a.nextPiece[1] = 0
  a.nextPiece[2] = 2
  a.printInfo()

  b = ab(a, CONSTS)[1]
  b.printInfo()

def getState():
  a = State()
  a.boards[0][0][2][0]['cell'] = 2
  a.boards[0][0][0][2]['cell'] = 2
  a.boards[0][0][1][2]['cell'] = 1
  a.nextPiece = [0,0,1]
