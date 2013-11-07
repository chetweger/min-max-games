from no_yield_learning import State, ab, isWin, isFull, turn, utility, maxH, Util, define_constants



define_constants()

TD_C = {'c3': 0, 'c2': 0, 'c1': 1, 'c6': 0, 'c5': 0, 'c4': 0}
optional_args = {'TD_CONSTS': TD_C, 'MAX': '2', 'MIN': '1'}
s = State()
s.boards[1][1][1][2]['cell'] = 1
s.boards[1][1][1][1]['cell'] = 1

next_s = ab(s, TD_C, False, optional_args)

next_s[1].printInfo()

sn = maxH(s, 0, 2, Util(-9005.0, State()), Util(9005.0, State()), TD_C, False)[1]
sn.printInfo()
