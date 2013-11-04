from learning import State, ab, isWin, isFull, turn, utility

TD_C = {'c3': 0, 'c2': 0, 'c1': 1, 'c6': 0, 'c5': 0, 'c4': 0}
optional_args = {'TD_CONSTS': TD_C, 'MAX': '2', 'MIN': '1'}
s = State()
s.boards[1][1][0][0]['cell'] = 1
s.boards[1][1][1][1]['cell'] = 1
s.printInfo()
#s.boards[1][1][2][2]['cell'] = 1
c = ab(s,  TD_C, False, optional_args=optional_args)[1]#.printInfo()
print utility(c, TD_C, False)
