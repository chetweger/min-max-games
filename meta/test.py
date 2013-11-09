from learning import *

s = State()

s.boards[1][1][1][1]['cell'] = 1
s.boards[1][1][2][1]['cell'] = 1

ns = ab(s, TD_CONSTS, False)[1]

ns.printInfo()
