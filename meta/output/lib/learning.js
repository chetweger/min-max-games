/* start module: learning */
$pyjs['loaded_modules']['learning'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['learning']['__was_initialized__']) return $pyjs['loaded_modules']['learning'];
	var $m = $pyjs['loaded_modules']['learning'];
	$m['__repr__'] = function() { return '<module: learning>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'learning';
	$m['__name__'] = __mod_name__;


	$m['README'] = 'Welcome to meta_tic-tac-toe by Chet Weger\n\nThis program relies on the min-max algorithm with alpha beta\npruning as well as temporal difference learning to learn values\nfor a weighted utility function.\n\nThe weightings/constants for the utility function is stored in a\nfile called "td.txt". If you do not see such a file, you can \ntrain the AI with the command:\ntrainAI()\n\nYou can start a new game of meta_tic-tac-toe with:\nplayAI()';
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['copy'] = $p['___import___']('copy', null);
		$m['os'] = $p['___import___']('os', null);
		$m['CURRENT_DIR'] = $m['os']['getcwd']();
	}
	$m['DIMENSION'] = 3;
	$m['WAIT'] = 5;
	$m['userFirst'] = 1;
	$m['computerFirst'] = 2;
	$m['MIN'] = '1';
	$m['MAX'] = '2';
	$m['ALPHA'] = 0.005;
	$m['CONSTS'] = $p['dict']([['c1', 4.0], ['c2', 1.4], ['c3', 0.9], ['c4', 0.7], ['c5', 0.4], ['c6', 0.2]]);
	$m['TD_CONSTS'] = $p['dict']([['c1', 4.0], ['c2', 1.4], ['c3', 0.9], ['c4', 0.7], ['c5', 0.4], ['c6', 0.2]]);
	$m['messageComputersTurn'] = "Computer's turn.";
	$m['messageChoosePlayer'] = 'Which player goes first? (1 = you, 2 = computer, 0 = stop) ';
	$m['messageGoodbye'] = 'Goodbye. Thanks for playing tic tac toe!.';
	$m['messageTryAgain'] = 'That is invalid. Please try again.';
	$m['messageUsersTurn'] = "User's turn.";
	$m['messageWelcome'] = 'Welcome to meta tic tac toe!';
	$m['messageYouWin'] = 'User wins.';
	$m['messageCompWin'] = 'Computer Wins';
	$m['hasRow'] = function(listDict) {
		var cells,listAnd,$lambda2,$lambda1;
		var 		$lambda1 = function(x) {

			return x['__getitem__']('cell');
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['x']];
		cells = $p['map']($lambda1, listDict);
		var 		$lambda2 = function(x, y) {

			return (x)&(y);
		};
		$lambda2['__name__'] = '$lambda2';

		$lambda2['__bind_type__'] = 0;
		$lambda2['__args__'] = [null,null,['x'],['y']];
		listAnd = $p['reduce']($lambda2, cells);
		return $p['bool'](listAnd);
	};
	$m['hasRow']['__name__'] = 'hasRow';

	$m['hasRow']['__bind_type__'] = 0;
	$m['hasRow']['__args__'] = [null,null,['listDict']];
	$m['isWin'] = function(board) {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,column,diagonal1,length,$iter1_iter,$iter2_idx,diagonal2,$iter1_array,$or2,board_Transpose,$iter2_type,row,$or1,$iter2_array;
		$iter1_iter = board;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			row = $iter1_nextval['$nextval'];
			if ($p['bool']($m['hasRow'](row))) {
				return true;
			}
		}
		board_Transpose = $pyjs_kwargs_call(null, $p['zip'], board, null, [{}]);
		$iter2_iter = board_Transpose;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			column = $iter2_nextval['$nextval'];
			if ($p['bool']($m['hasRow'](column))) {
				return true;
			}
		}
		$pyjs_kwargs_call(null, $p['zip'], board, null, [{}]);
		length = $p['len'](board);
		diagonal1 = function(){
			var $iter3_idx,i,$iter3_nextval,$iter3_type,$collcomp1,$iter3_iter,$iter3_array;
	$collcomp1 = $p['list']();
		$iter3_iter = $p['range'](length);
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			i = $iter3_nextval['$nextval'];
			$collcomp1['append'](board['__getitem__'](i)['__getitem__'](i));
		}

	return $collcomp1;}();
		diagonal2 = function(){
			var i,$iter4_nextval,$collcomp2,$iter4_idx,$sub3,$iter4_type,$iter4_array,$sub2,$sub1,$iter4_iter,$sub4;
	$collcomp2 = $p['list']();
		$iter4_iter = $p['range'](length);
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			i = $iter4_nextval['$nextval'];
			$collcomp2['append'](board['__getitem__'](i)['__getitem__']($p['__op_sub']($sub3=$p['__op_sub']($sub1=length,$sub2=i),$sub4=1)));
		}

	return $collcomp2;}();
		if ($p['bool'](($p['bool']($or1=$m['hasRow'](diagonal1))?$or1:$m['hasRow'](diagonal2)))) {
			return true;
		}
		return false;
	};
	$m['isWin']['__name__'] = 'isWin';

	$m['isWin']['__bind_type__'] = 0;
	$m['isWin']['__args__'] = [null,null,['board']];
	$m['isFull'] = function(board) {
		var $iter5_nextval,$iter6_idx,$iter6_type,$iter5_idx,cell,$iter6_array,$iter5_iter,$iter5_array,$iter5_type,$iter6_iter,$iter6_nextval,row;
		$iter5_iter = board;
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			row = $iter5_nextval['$nextval'];
			$iter6_iter = row;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				cell = $iter6_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](cell['__getitem__']('cell'), 0))) {
					return false;
				}
			}
		}
		return true;
	};
	$m['isFull']['__name__'] = 'isFull';

	$m['isFull']['__bind_type__'] = 0;
	$m['isFull']['__args__'] = [null,null,['board']];
	$m['checkOver'] = function(state) {
		var $add2,$iter8_idx,$and1,$iter7_nextval,$iter7_iter,$iter8_type,$iter7_array,$iter8_array,$iter8_iter,$add1,$iter8_nextval,rowBoards,$iter7_idx,writeTo,$iter7_type,$and2,board;
		$iter7_iter = $p['getattr'](state, 'boards');
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
			rowBoards = $iter7_nextval['$nextval'];
			$iter8_iter = rowBoards;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				board = $iter8_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and1=!$p['bool']($m['isFull'](board)))?!$p['bool']($m['isWin'](board)):$and1))) {
					return null;
				}
			}
		}
		if ($p['bool']($p['op_eq']($p['getattr'](state, 'score')['__getitem__']('1'), $p['getattr'](state, 'score')['__getitem__']('2')))) {
			$p['printFunc'](['Game Over.\nBoth players tied at', $p['getattr'](state, 'score')['__getitem__']('2'), 'points.'], 1);
		}
		else if ($p['bool'](($p['cmp']($p['getattr'](state, 'score')['__getitem__']('1'), $p['getattr'](state, 'score')['__getitem__']('2')) == 1))) {
			$p['printFunc'](['Game Over.\nPlayer 1 won with', $p['getattr'](state, 'score')['__getitem__']('1'), 'points versus', $p['getattr'](state, 'score')['__getitem__']('2'), 'points for player 2!'], 1);
		}
		else if ($p['bool'](($p['cmp']($p['getattr'](state, 'score')['__getitem__']('1'), $p['getattr'](state, 'score')['__getitem__']('2')) == -1))) {
			$p['printFunc'](['Game Over.\nPlayer 2 won with', $p['getattr'](state, 'score')['__getitem__']('2'), 'points versus', $p['getattr'](state, 'score')['__getitem__']('1'), 'points for player 1'], 1);
		}
		$p['printFunc'](['Final board position was:'], 1);
		state['printInfo']();
		writeTo = $p['open']($p['__op_add']($add1=$m['CURRENT_DIR'],$add2='/td.txt'), 'w+');
		writeTo['write']($p['str']($m['TD_CONSTS']));
		writeTo['close']();
		$p['printFunc'](['Game over.'], 1);
		return null;
	};
	$m['checkOver']['__name__'] = 'checkOver';

	$m['checkOver']['__bind_type__'] = 0;
	$m['checkOver']['__args__'] = [null,null,['state']];
	$m['isOver'] = function(state) {
		var $iter10_nextval,$iter9_iter,$and4,$iter10_idx,$and3,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,board,rowBoards,$iter10_type,$iter10_iter,$iter9_array;
		$iter9_iter = $p['getattr'](state, 'boards');
		$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
		while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
			rowBoards = $iter9_nextval['$nextval'];
			$iter10_iter = rowBoards;
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				board = $iter10_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and3=!$p['bool']($m['isFull'](board)))?!$p['bool']($m['isWin'](board)):$and3))) {
					return false;
				}
			}
		}
		if ($p['bool']($p['op_eq']($p['getattr'](state, 'score')['__getitem__']('1'), $p['getattr'](state, 'score')['__getitem__']('2')))) {
			$p['printFunc'](['Game Over.\nBoth players tied at', $p['getattr'](state, 'score')['__getitem__']('2'), 'points.'], 1);
		}
		else if ($p['bool'](($p['cmp']($p['getattr'](state, 'score')['__getitem__']('1'), $p['getattr'](state, 'score')['__getitem__']('2')) == 1))) {
			$p['printFunc'](['Game Over.\nPlayer 1 won with', $p['getattr'](state, 'score')['__getitem__']('1'), 'points versus', $p['getattr'](state, 'score')['__getitem__']('2'), 'points for player 2!'], 1);
		}
		else if ($p['bool'](($p['cmp']($p['getattr'](state, 'score')['__getitem__']('1'), $p['getattr'](state, 'score')['__getitem__']('2')) == -1))) {
			$p['printFunc'](['Game Over.\nPlayer 2 won with', $p['getattr'](state, 'score')['__getitem__']('2'), 'points versus', $p['getattr'](state, 'score')['__getitem__']('1'), 'points for player 1'], 1);
		}
		$p['printFunc'](['Final board position was:'], 1);
		state['printInfo']();
		return true;
	};
	$m['isOver']['__name__'] = 'isOver';

	$m['isOver']['__bind_type__'] = 0;
	$m['isOver']['__args__'] = [null,null,['state']];
	$m['utility'] = function(state, constants, sub) {
		var f1,f2,f3,f4,f5,f6,$add13,$add21,$add18,$add22,$add19,$mul1,$add20,$add12,$add14,$add15,$add16,$add17,$add10,$add11,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul12,$mul11,$mul10,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
		f1 = (typeof ($mul1=(typeof f1_score == "undefined"?$m['f1_score']:f1_score)(state))==typeof ($mul2=constants['__getitem__']('c1')) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2));
		f2 = (typeof ($mul3=(typeof f2_center == "undefined"?$m['f2_center']:f2_center)(state))==typeof ($mul4=constants['__getitem__']('c2')) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4));
		f3 = (typeof ($mul5=(typeof f3_corner == "undefined"?$m['f3_corner']:f3_corner)(state))==typeof ($mul6=constants['__getitem__']('c3')) && typeof $mul5=='number'?
			$mul5*$mul6:
			$p['op_mul']($mul5,$mul6));
		f4 = (typeof ($mul7=(typeof f4_side == "undefined"?$m['f4_side']:f4_side)(state))==typeof ($mul8=constants['__getitem__']('c4')) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8));
		f5 = (typeof ($mul9=(typeof f5_blocking == "undefined"?$m['f5_blocking']:f5_blocking)(state))==typeof ($mul10=constants['__getitem__']('c5')) && typeof $mul9=='number'?
			$mul9*$mul10:
			$p['op_mul']($mul9,$mul10));
		f6 = (typeof ($mul11=(typeof f6_potential == "undefined"?$m['f6_potential']:f6_potential)(state))==typeof ($mul12=constants['__getitem__']('c6')) && typeof $mul11=='number'?
			$mul11*$mul12:
			$p['op_mul']($mul11,$mul12));
		if ($p['bool'](sub)) {
			return (typeof ($usub1=$p['__op_add']($add11=$p['__op_add']($add9=$p['__op_add']($add7=$p['__op_add']($add5=$p['__op_add']($add3=f1,$add4=f2),$add6=f3),$add8=f4),$add10=f5),$add12=f6))=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		else {
			return $p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17=$p['__op_add']($add15=$p['__op_add']($add13=f1,$add14=f2),$add16=f3),$add18=f4),$add20=f5),$add22=f6);
		}
		return null;
	};
	$m['utility']['__name__'] = 'utility';

	$m['utility']['__bind_type__'] = 0;
	$m['utility']['__args__'] = [null,null,['state'],['constants'],['sub']];
	$m['subUtil'] = function(state, constants, sub) {
		var $mul17,f1,$mul15,$mul14,$mul13,f6,$mul16,f5,f2,$mul19,$mul18,f3,$mul20,f4,$mul24,$mul22,$mul23,$mul21;
		f1 = (typeof ($mul13=(typeof f1_score == "undefined"?$m['f1_score']:f1_score)(state))==typeof ($mul14=constants['__getitem__']('c1')) && typeof $mul13=='number'?
			$mul13*$mul14:
			$p['op_mul']($mul13,$mul14));
		f2 = (typeof ($mul15=(typeof f2_center == "undefined"?$m['f2_center']:f2_center)(state))==typeof ($mul16=constants['__getitem__']('c2')) && typeof $mul15=='number'?
			$mul15*$mul16:
			$p['op_mul']($mul15,$mul16));
		f3 = (typeof ($mul17=(typeof f3_corner == "undefined"?$m['f3_corner']:f3_corner)(state))==typeof ($mul18=constants['__getitem__']('c3')) && typeof $mul17=='number'?
			$mul17*$mul18:
			$p['op_mul']($mul17,$mul18));
		f4 = (typeof ($mul19=(typeof f4_side == "undefined"?$m['f4_side']:f4_side)(state))==typeof ($mul20=constants['__getitem__']('c4')) && typeof $mul19=='number'?
			$mul19*$mul20:
			$p['op_mul']($mul19,$mul20));
		f5 = (typeof ($mul21=(typeof f5_blocking == "undefined"?$m['f5_blocking']:f5_blocking)(state))==typeof ($mul22=constants['__getitem__']('c5')) && typeof $mul21=='number'?
			$mul21*$mul22:
			$p['op_mul']($mul21,$mul22));
		f6 = (typeof ($mul23=(typeof f6_potential == "undefined"?$m['f6_potential']:f6_potential)(state))==typeof ($mul24=constants['__getitem__']('c6')) && typeof $mul23=='number'?
			$mul23*$mul24:
			$p['op_mul']($mul23,$mul24));
		if ($p['bool'](sub)) {
			return $p['list']([(typeof ($usub2=f1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)), (typeof ($usub3=f2)=='number'?
				-$usub3:
				$p['op_usub']($usub3)), (typeof ($usub4=f3)=='number'?
				-$usub4:
				$p['op_usub']($usub4)), (typeof ($usub5=f4)=='number'?
				-$usub5:
				$p['op_usub']($usub5)), (typeof ($usub6=f5)=='number'?
				-$usub6:
				$p['op_usub']($usub6)), (typeof ($usub7=f6)=='number'?
				-$usub7:
				$p['op_usub']($usub7))]);
		}
		else {
			return $p['list']([f1, f2, f3, f4, f5, f6]);
		}
		return null;
	};
	$m['subUtil']['__name__'] = 'subUtil';

	$m['subUtil']['__bind_type__'] = 0;
	$m['subUtil']['__args__'] = [null,null,['state'],['constants'],['sub']];
	$m['f1_score'] = function(state) {
		var $sub6,$sub5;
		return $p['__op_sub']($sub5=$p['getattr'](state, 'score')['__getitem__']($m['MIN']),$sub6=$p['getattr'](state, 'score')['__getitem__']($m['MAX']));
	};
	$m['f1_score']['__name__'] = 'f1_score';

	$m['f1_score']['__bind_type__'] = 0;
	$m['f1_score']['__args__'] = [null,null,['state']];
	$m['getActive'] = function(state) {
		var $add23,$iter11_iter,$iter12_type,$iter11_type,$iter12_array,$and5,$and6,$add24,$iter12_iter,active_boards,line_boards,$iter11_array,$iter11_nextval,$iter11_idx,$iter12_idx,$iter12_nextval,board;
		active_boards = $p['list']([]);
		$iter11_iter = $p['getattr'](state, 'boards');
		$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
		while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
			line_boards = $iter11_nextval['$nextval'];
			$iter12_iter = line_boards;
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				board = $iter12_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and5=!$p['bool']($m['isWin'](board)))?!$p['bool']($m['isFull'](board)):$and5))) {
					active_boards = $p['__op_add']($add23=active_boards,$add24=$p['list']([board]));
				}
			}
		}
		return active_boards;
	};
	$m['getActive']['__name__'] = 'getActive';

	$m['getActive']['__bind_type__'] = 0;
	$m['getActive']['__args__'] = [null,null,['state']];
	$m['f2_center'] = function(state) {
		var $add28,$iter13_nextval,center,$iter13_iter,MAX,MIN,$add25,board,$add27,$iter13_array,$sub8,activeBoards,$add26,$sub7,$iter13_type,$iter13_idx;
		MIN = '1';
		MAX = '2';
		center = $p['dict']([[MIN, 0], [MAX, 0]]);
		activeBoards = $m['getActive'](state);
		$iter13_iter = activeBoards;
		$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
		while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
			board = $iter13_nextval['$nextval'];
			if ($p['bool']($p['op_eq'](board['__getitem__'](1)['__getitem__'](1)['__getitem__']('cell'), $p['float_int'](MIN)))) {
				center['__setitem__'](MIN, $p['__op_add']($add25=center['__getitem__'](MIN),$add26=1));
			}
			else if ($p['bool']($p['op_eq'](board['__getitem__'](1)['__getitem__'](1)['__getitem__']('cell'), $p['float_int'](MAX)))) {
				center['__setitem__'](MAX, $p['__op_add']($add27=center['__getitem__'](MAX),$add28=1));
			}
		}
		return $p['__op_sub']($sub7=center['__getitem__'](MIN),$sub8=center['__getitem__'](MAX));
	};
	$m['f2_center']['__name__'] = 'f2_center';

	$m['f2_center']['__bind_type__'] = 0;
	$m['f2_center']['__args__'] = [null,null,['state']];
	$m['f3_corner'] = function(state) {
		var cornerCount,corner,$add29,$iter15_iter,$sub9,board,$iter14_array,$sub10,$iter14_type,$iter15_array,activeBoards,$iter14_iter,$iter14_idx,$iter14_nextval,$add32,corners,$add30,$add31,$iter15_idx,$iter15_nextval,$iter15_type;
		cornerCount = $p['dict']([[$m['MIN'], 0], [$m['MAX'], 0]]);
		activeBoards = $m['getActive'](state);
		$iter14_iter = activeBoards;
		$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
		while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
			board = $iter14_nextval['$nextval'];
			corners = $p['list']([board['__getitem__'](0)['__getitem__'](0), board['__getitem__'](0)['__getitem__'](2), board['__getitem__'](2)['__getitem__'](0), board['__getitem__'](2)['__getitem__'](2)]);
			$iter15_iter = corners;
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				corner = $iter15_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](corner['__getitem__']('cell'), $p['float_int']($m['MIN'])))) {
					cornerCount['__setitem__']($m['MIN'], $p['__op_add']($add29=cornerCount['__getitem__']($m['MIN']),$add30=1));
				}
				else if ($p['bool']($p['op_eq'](corner['__getitem__']('cell'), $p['float_int']($m['MAX'])))) {
					cornerCount['__setitem__']($m['MAX'], $p['__op_add']($add31=cornerCount['__getitem__']($m['MAX']),$add32=1));
				}
			}
		}
		return $p['__op_sub']($sub9=cornerCount['__getitem__']($m['MIN']),$sub10=cornerCount['__getitem__']($m['MAX']));
	};
	$m['f3_corner']['__name__'] = 'f3_corner';

	$m['f3_corner']['__bind_type__'] = 0;
	$m['f3_corner']['__args__'] = [null,null,['state']];
	$m['f4_side'] = function(state) {
		var sideCount,$iter16_idx,$iter17_type,$iter16_iter,$iter17_iter,$iter16_type,board,$iter16_nextval,$iter17_nextval,$sub12,$sub11,$iter17_array,activeBoards,sides,$iter16_array,$add33,$add36,$add34,$add35,$iter17_idx,side;
		sideCount = $p['dict']([[$m['MIN'], 0], [$m['MAX'], 0]]);
		activeBoards = $m['getActive'](state);
		$iter16_iter = activeBoards;
		$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
		while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
			board = $iter16_nextval['$nextval'];
			sides = $p['list']([board['__getitem__'](1)['__getitem__'](0), board['__getitem__'](0)['__getitem__'](1), board['__getitem__'](1)['__getitem__'](2), board['__getitem__'](2)['__getitem__'](1)]);
			$iter17_iter = sides;
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				side = $iter17_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](side['__getitem__']('cell'), $p['float_int']($m['MIN'])))) {
					sideCount['__setitem__']($m['MIN'], $p['__op_add']($add33=sideCount['__getitem__']($m['MIN']),$add34=1));
				}
				else if ($p['bool']($p['op_eq'](side['__getitem__']('cell'), $p['float_int']($m['MAX'])))) {
					sideCount['__setitem__']($m['MAX'], $p['__op_add']($add35=sideCount['__getitem__']($m['MAX']),$add36=1));
				}
			}
		}
		return $p['__op_sub']($sub11=sideCount['__getitem__']($m['MIN']),$sub12=sideCount['__getitem__']($m['MAX']));
	};
	$m['f4_side']['__name__'] = 'f4_side';

	$m['f4_side']['__bind_type__'] = 0;
	$m['f4_side']['__args__'] = [null,null,['state']];
	$m['hasBlock'] = function(listDict) {
		var cells,$lambda3;
		var 		$lambda3 = function(x) {

			return x['__getitem__']('cell');
		};
		$lambda3['__name__'] = '$lambda3';

		$lambda3['__bind_type__'] = 0;
		$lambda3['__args__'] = [null,null,['x']];
		cells = $p['map']($lambda3, listDict);
		cells = $p['sorted'](cells);
		if ($p['bool']($p['op_eq'](cells, $p['list']([1, 2, 2])))) {
			return '1';
		}
		else if ($p['bool']($p['op_eq'](cells, $p['list']([1, 1, 2])))) {
			return '2';
		}
		else {
			return null;
		}
		return null;
	};
	$m['hasBlock']['__name__'] = 'hasBlock';

	$m['hasBlock']['__bind_type__'] = 0;
	$m['hasBlock']['__args__'] = [null,null,['listDict']];
	$m['hasPotential'] = function(listDict) {
		var cells,$lambda4;
		var 		$lambda4 = function(x) {

			return x['__getitem__']('cell');
		};
		$lambda4['__name__'] = '$lambda4';

		$lambda4['__bind_type__'] = 0;
		$lambda4['__args__'] = [null,null,['x']];
		cells = $p['map']($lambda4, listDict);
		cells = $p['sorted'](cells);
		if ($p['bool']($p['op_eq'](cells, $p['list']([0, 2, 2])))) {
			return '2';
		}
		if ($p['bool']($p['op_eq'](cells, $p['list']([0, 1, 1])))) {
			return '1';
		}
		else {
			return null;
		}
		return null;
	};
	$m['hasPotential']['__name__'] = 'hasPotential';

	$m['hasPotential']['__bind_type__'] = 0;
	$m['hasPotential']['__args__'] = [null,null,['listDict']];
	$m['transposeBoards'] = function(lBoards) {
		var $iter18_type,$iter18_iter,$iter19_idx,i,$iter18_array,$add37,newList,$add40,$add39,$iter19_nextval,$iter19_array,$iter19_iter,$iter18_idx,$iter19_type,board,newBoard,$iter18_nextval,$add38;
		newList = $p['list']([]);
		$iter18_iter = lBoards;
		$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
		while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
			board = $iter18_nextval['$nextval'];
			newBoard = $p['list']([]);
			$iter19_iter = $p['range']($m['DIMENSION']);
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				i = $iter19_nextval['$nextval'];
				newBoard = $p['__op_add']($add37=newBoard,$add38=$p['list']([function(){
					var $iter20_iter,$iter20_nextval,$iter20_type,j,$collcomp3,$iter20_idx,$iter20_array;
	$collcomp3 = $p['list']();
				$iter20_iter = $p['range']($m['DIMENSION']);
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
					j = $iter20_nextval['$nextval'];
					$collcomp3['append'](board['__getitem__'](j)['__getitem__'](i));
				}

	return $collcomp3;}()]));
			}
			newList = $p['__op_add']($add39=newList,$add40=$p['list']([newBoard]));
		}
		return newList;
	};
	$m['transposeBoards']['__name__'] = 'transposeBoards';

	$m['transposeBoards']['__bind_type__'] = 0;
	$m['transposeBoards']['__args__'] = [null,null,['lBoards']];
	$m['getAllBoards'] = function(state) {
		var $iter21_idx,board,$iter22_array,$iter22_type,$iter21_nextval,$iter22_nextval,$iter21_iter,$add41,$iter22_idx,$iter21_type,active_boards,line_boards,$iter21_array,$add42,$iter22_iter;
		active_boards = $p['list']([]);
		$iter21_iter = $p['getattr'](state, 'boards');
		$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
		while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
			line_boards = $iter21_nextval['$nextval'];
			$iter22_iter = line_boards;
			$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
			while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
				board = $iter22_nextval['$nextval'];
				active_boards = $p['__op_add']($add41=active_boards,$add42=$p['list']([board]));
			}
		}
		return active_boards;
	};
	$m['getAllBoards']['__name__'] = 'getAllBoards';

	$m['getAllBoards']['__bind_type__'] = 0;
	$m['getAllBoards']['__args__'] = [null,null,['state']];
	$m['f5_blocking'] = function(inputState) {
		var $iter23_type,$iter25_nextval,$iter25_array,$iter28_idx,$iter23_idx,$iter28_iter,row,$add49,$add48,$iter23_iter,$add46,$add45,$add44,$add43,$iter24_type,state,diagonal2,board,diagonal1,$iter24_iter,$iter24_nextval,$sub18,$sub17,$iter23_array,activeBoards,activeBoardsTranspose,$iter28_type,$iter25_type,blocking,getBlock,$add50,$add51,$add52,$iter23_nextval,$iter24_idx,$iter28_nextval,$iter28_array,$iter25_iter,$add47,$iter24_array,$iter25_idx,getblock;
		state = (typeof State == "undefined"?$m['State']:State)();
		state['copyThis'](inputState);
		blocking = $p['dict']([['1', 0], ['2', 0]]);
		activeBoards = $m['getAllBoards'](state);
		activeBoardsTranspose = $m['transposeBoards'](activeBoards);
		$iter23_iter = activeBoards;
		$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
		while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
			board = $iter23_nextval['$nextval'];
			$iter24_iter = board;
			$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
			while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
				row = $iter24_nextval['$nextval'];
				getblock = $m['hasBlock'](row);
				if ($p['bool']($p['op_eq'](getblock, $m['MAX']))) {
					blocking['__setitem__']($m['MAX'], $p['__op_add']($add43=blocking['__getitem__']($m['MAX']),$add44=1));
				}
				else if ($p['bool']($p['op_eq'](getblock, $m['MIN']))) {
					blocking['__setitem__']($m['MIN'], $p['__op_add']($add45=blocking['__getitem__']($m['MIN']),$add46=1));
				}
			}
		}
		$iter25_iter = activeBoardsTranspose;
		$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
		while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
			board = $iter25_nextval['$nextval'];
			diagonal1 = function(){
				var i,$iter26_idx,$iter26_nextval,$collcomp4,$iter26_type,$iter26_array,$iter26_iter;
	$collcomp4 = $p['list']();
			$iter26_iter = $p['range']($m['DIMENSION']);
			$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
			while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
				i = $iter26_nextval['$nextval'];
				$collcomp4['append'](board['__getitem__'](i)['__getitem__'](i));
			}

	return $collcomp4;}();
			diagonal2 = function(){
				var $iter27_nextval,i,$iter27_array,$collcomp5,$sub16,$sub15,$sub14,$iter27_idx,$iter27_iter,$sub13,$iter27_type;
	$collcomp5 = $p['list']();
			$iter27_iter = $p['range']($m['DIMENSION']);
			$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
			while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
				i = $iter27_nextval['$nextval'];
				$collcomp5['append'](board['__getitem__'](i)['__getitem__']($p['__op_sub']($sub15=$p['__op_sub']($sub13=$m['DIMENSION'],$sub14=i),$sub16=1)));
			}

	return $collcomp5;}();
			board = $p['list'](board);
			board = $p['__op_add']($add47=board,$add48=$p['list']([diagonal1, diagonal2]));
			$iter28_iter = board;
			$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
			while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
				row = $iter28_nextval['$nextval'];
				getBlock = $m['hasBlock'](row);
				if ($p['bool']($p['op_eq'](getBlock, $m['MAX']))) {
					blocking['__setitem__']($m['MAX'], $p['__op_add']($add49=blocking['__getitem__']($m['MAX']),$add50=1));
				}
				else if ($p['bool']($p['op_eq'](getBlock, $m['MIN']))) {
					blocking['__setitem__']($m['MIN'], $p['__op_add']($add51=blocking['__getitem__']($m['MIN']),$add52=1));
				}
			}
		}
		return $p['__op_sub']($sub17=blocking['__getitem__']($m['MIN']),$sub18=blocking['__getitem__']($m['MAX']));
	};
	$m['f5_blocking']['__name__'] = 'f5_blocking';

	$m['f5_blocking']['__bind_type__'] = 0;
	$m['f5_blocking']['__args__'] = [null,null,['inputState']];
	$m['f6_potential'] = function(inputState) {
		var $sub23,getPot,$sub24,$iter31_nextval,$iter34_idx,$iter30_array,$iter34_array,row,getpot,$add61,$iter30_nextval,$add62,$iter29_type,$iter31_type,$iter31_idx,state,potential,diagonal2,board,diagonal1,$iter29_array,$iter30_type,$iter31_array,$iter29_nextval,$iter30_idx,activeBoards,activeBoardsTranspose,$add60,$iter34_nextval,$add53,$add54,$add55,$add56,$add57,$iter30_iter,$add59,$iter29_iter,$add58,$iter34_iter,$iter29_idx,$iter34_type,$iter31_iter;
		state = (typeof State == "undefined"?$m['State']:State)();
		state['copyThis'](inputState);
		potential = $p['dict']([['1', 0], ['2', 0]]);
		activeBoards = $m['getActive'](state);
		activeBoardsTranspose = $m['transposeBoards'](activeBoards);
		$iter29_iter = activeBoards;
		$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
		while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
			board = $iter29_nextval['$nextval'];
			$iter30_iter = board;
			$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
			while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
				row = $iter30_nextval['$nextval'];
				getpot = $m['hasPotential'](row);
				if ($p['bool']($p['op_eq'](getpot, $m['MAX']))) {
					potential['__setitem__']($m['MAX'], $p['__op_add']($add53=potential['__getitem__']($m['MAX']),$add54=1));
				}
				else if ($p['bool']($p['op_eq'](getpot, $m['MIN']))) {
					potential['__setitem__']($m['MIN'], $p['__op_add']($add55=potential['__getitem__']($m['MIN']),$add56=1));
				}
			}
		}
		$iter31_iter = activeBoardsTranspose;
		$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
		while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
			board = $iter31_nextval['$nextval'];
			diagonal1 = function(){
				var $iter32_idx,i,$collcomp6,$iter32_nextval,$iter32_type,$iter32_iter,$iter32_array;
	$collcomp6 = $p['list']();
			$iter32_iter = $p['range']($m['DIMENSION']);
			$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
			while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
				i = $iter32_nextval['$nextval'];
				$collcomp6['append'](board['__getitem__'](i)['__getitem__'](i));
			}

	return $collcomp6;}();
			diagonal2 = function(){
				var $sub22,$iter33_iter,$iter33_nextval,$iter33_type,$collcomp7,$sub19,$sub21,i,$sub20,$iter33_idx,$iter33_array;
	$collcomp7 = $p['list']();
			$iter33_iter = $p['range']($m['DIMENSION']);
			$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
			while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
				i = $iter33_nextval['$nextval'];
				$collcomp7['append'](board['__getitem__'](i)['__getitem__']($p['__op_sub']($sub21=$p['__op_sub']($sub19=$m['DIMENSION'],$sub20=i),$sub22=1)));
			}

	return $collcomp7;}();
			board = $p['list'](board);
			board = $p['__op_add']($add57=board,$add58=$p['list']([diagonal1, diagonal2]));
			$iter34_iter = board;
			$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
			while (typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
				row = $iter34_nextval['$nextval'];
				getPot = $m['hasPotential'](row);
				if ($p['bool']($p['op_eq'](getPot, $m['MAX']))) {
					potential['__setitem__']($m['MAX'], $p['__op_add']($add59=potential['__getitem__']($m['MAX']),$add60=1));
				}
				else if ($p['bool']($p['op_eq'](getPot, $m['MIN']))) {
					potential['__setitem__']($m['MIN'], $p['__op_add']($add61=potential['__getitem__']($m['MIN']),$add62=1));
				}
			}
		}
		return $p['__op_sub']($sub23=potential['__getitem__']($m['MIN']),$sub24=potential['__getitem__']($m['MAX']));
	};
	$m['f6_potential']['__name__'] = 'f6_potential';

	$m['f6_potential']['__bind_type__'] = 0;
	$m['f6_potential']['__args__'] = [null,null,['inputState']];
	$m['minH'] = function(state, depth, maxDepth, a, b, constants, sub) {
		var $or4,copy_in,$or3,$add64,s,value,iterations,nextS,gen,$add63;
		value = (typeof Util == "undefined"?$m['Util']:Util)(9001.0, (typeof State == "undefined"?$m['State']:State)());
		s = (typeof State == "undefined"?$m['State']:State)();
		gen = state['genChildren'](s);
		nextS = gen['next']();
		if ($p['bool'](($p['bool']($or3=$p['op_eq'](depth, maxDepth))?$or3:$p['op_eq'](nextS, null)))) {
			return (typeof Util == "undefined"?$m['Util']:Util)($m['utility'](state, constants, sub), state);
		}
		iterations = 0;
		copy_in = (typeof State == "undefined"?$m['State']:State)();
		while ($p['bool'](!$p['op_eq'](nextS, null))) {
			copy_in['copyThis'](nextS);
			value = (typeof min_util == "undefined"?$m['min_util']:min_util)($p['list']([value, (typeof maxH == "undefined"?$m['maxH']:maxH)(copy_in, $p['__op_add']($add63=depth,$add64=1), maxDepth, a, b, constants, sub)]));
			if (!( $p['op_eq']($p['type'](value), $p['type'](a)) )) {
			   throw $p['AssertionError']();
			 }
			if ($p['bool'](($p['cmp']($p['getattr'](value, 'value'), $p['getattr'](a, 'value')) < 1))) {
				return (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub8=9001.0)=='number'?
					-$usub8:
					$p['op_usub']($usub8)), (typeof State == "undefined"?$m['State']:State)());
			}
			b = (typeof min_util == "undefined"?$m['min_util']:min_util)($p['list']([b, value]));
			nextS = gen['next']();
		}
		return value;
	};
	$m['minH']['__name__'] = 'minH';

	$m['minH']['__bind_type__'] = 0;
	$m['minH']['__args__'] = [null,null,['state'],['depth'],['maxDepth'],['a'],['b'],['constants'],['sub']];
	$m['get_max'] = function(copy_to_me, choice1, choice2) {

		$p['printFunc']([$p['getattr'](choice1['__getitem__'](0), 'value')], 1);
		$p['printFunc']([$p['getattr'](choice2['__getitem__'](0), 'value')], 1);
		if ($p['bool'](((($p['cmp']($p['getattr'](choice1['__getitem__'](0), 'value'), $p['getattr'](choice2['__getitem__'](0), 'value')))|1) == 1))) {
			copy_to_me['__getitem__'](1)['copyThis'](choice1['__getitem__'](1));
			copy_to_me['__setitem__'](0, choice1['__getitem__'](0));
		}
		else {
			copy_to_me['__getitem__'](1)['copyThis'](choice2['__getitem__'](1));
			copy_to_me['__setitem__'](0, choice2['__getitem__'](0));
		}
		return null;
	};
	$m['get_max']['__name__'] = 'get_max';

	$m['get_max']['__bind_type__'] = 0;
	$m['get_max']['__args__'] = [null,null,['copy_to_me'],['choice1'],['choice2']];
	$m['max_util'] = function(utils) {
		var $iter35_idx,$iter35_nextval,util,$iter35_type,max_u,$iter35_array,$iter35_iter;
		max_u = (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub9=102323)=='number'?
			-$usub9:
			$p['op_usub']($usub9)), null);
		$iter35_iter = utils;
		$iter35_nextval=$p['__iter_prepare']($iter35_iter,false);
		while (typeof($p['__wrapped_next']($iter35_nextval)['$nextval']) != 'undefined') {
			util = $iter35_nextval['$nextval'];
			$p['printFunc']([$p['getattr'](util, 'value')], 1);
			$p['printFunc']([$p['getattr'](util, 'value')], 1);
			if ($p['bool'](($p['cmp']($p['getattr'](util, 'value'), $p['getattr'](max_u, 'value')) == 1))) {
				max_u = util;
			}
		}
		return max_u;
	};
	$m['max_util']['__name__'] = 'max_util';

	$m['max_util']['__bind_type__'] = 0;
	$m['max_util']['__args__'] = [null,null,['utils']];
	$m['min_util'] = function(utils) {
		var $iter36_nextval,$iter36_iter,util,max_u,$iter36_idx,$iter36_type,$iter36_array;
		max_u = (typeof Util == "undefined"?$m['Util']:Util)(102323, null);
		$iter36_iter = utils;
		$iter36_nextval=$p['__iter_prepare']($iter36_iter,false);
		while (typeof($p['__wrapped_next']($iter36_nextval)['$nextval']) != 'undefined') {
			util = $iter36_nextval['$nextval'];
			$p['printFunc']([$p['getattr'](util, 'value')], 1);
			$p['printFunc']([$p['getattr'](util, 'value')], 1);
			if ($p['bool'](($p['cmp']($p['getattr'](util, 'value'), $p['getattr'](max_u, 'value')) == -1))) {
				max_u = util;
			}
		}
		return max_u;
	};
	$m['min_util']['__name__'] = 'min_util';

	$m['min_util']['__bind_type__'] = 0;
	$m['min_util']['__args__'] = [null,null,['utils']];
	$m['maxH'] = function(state, depth, maxDepth, a, b, constants, sub) {
		var $add68,nextS,$add65,$add67,$add66,$add69,min_h,$add72,gen,copy_in,$add70,$add71,iteration,value,s,highestSoFar;
		value = (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub10=9001.0)=='number'?
			-$usub10:
			$p['op_usub']($usub10)), (typeof State == "undefined"?$m['State']:State)());
		s = (typeof State == "undefined"?$m['State']:State)();
		gen = state['genChildren'](s);
		nextS = gen['next']();
		if ($p['bool']($p['op_eq'](depth, maxDepth))) {
			return (typeof Util == "undefined"?$m['Util']:Util)($m['utility'](state, constants, sub), state);
		}
		if ($p['bool']($p['op_eq'](depth, 0))) {
			iteration = 0;
			highestSoFar = (typeof State == "undefined"?$m['State']:State)();
			highestSoFar['copyThis'](nextS);
			min_h = $m['minH'](nextS, $p['__op_add']($add65=depth,$add66=1), maxDepth, a, b, constants, sub);
			value = $p['list']([min_h, highestSoFar]);
			while ($p['bool'](!$p['op_eq'](nextS, null))) {
				iteration = $p['__op_add']($add67=iteration,$add68=1);
				min_h = $m['minH'](nextS, $p['__op_add']($add69=depth,$add70=1), maxDepth, a, b, constants, sub);
				if (!( $p['op_eq']($p['type'](value), $p['type']($p['list']([min_h, nextS]))) )) {
				   throw $p['AssertionError']();
				 }
				$m['get_max'](value, value, $p['list']([min_h, nextS]));
				if ($p['bool'](((($p['cmp']($p['getattr'](value['__getitem__'](0), 'value'), $p['getattr'](b, 'value')))|1) == 1))) {
					return $p['tuple']([(typeof Util == "undefined"?$m['Util']:Util)(9001.0, (typeof State == "undefined"?$m['State']:State)()), value['__getitem__'](1)]);
				}
				a = $m['max_util']($p['list']([a, value['__getitem__'](0)]));
				nextS = gen['next']();
			}
			return value;
		}
		else {
			copy_in = (typeof State == "undefined"?$m['State']:State)();
			while ($p['bool'](!$p['op_eq'](nextS, null))) {
				copy_in['copyThis'](nextS);
				value = $m['max_util']($p['list']([value, $m['minH'](copy_in, $p['__op_add']($add71=depth,$add72=1), maxDepth, a, b, constants, sub)]));
				if (!( $p['op_eq']($p['type'](value), $p['type'](b)) )) {
				   throw $p['AssertionError']();
				 }
				if ($p['bool'](((($p['cmp']($p['getattr'](value, 'value'), $p['getattr'](b, 'value')))|1) == 1))) {
					return (typeof Util == "undefined"?$m['Util']:Util)(9001.0, (typeof State == "undefined"?$m['State']:State)());
				}
				a = $m['max_util']($p['list']([a, value]));
				nextS = gen['next']();
			}
			return value;
		}
		return null;
	};
	$m['maxH']['__name__'] = 'maxH';

	$m['maxH']['__bind_type__'] = 0;
	$m['maxH']['__args__'] = [null,null,['state'],['depth'],['maxDepth'],['a'],['b'],['constants'],['sub']];
	$m['getWin'] = function(state) {
		var a,cG,nextS;
		a = (typeof State == "undefined"?$m['State']:State)();
		cG = state['genChildren'](a);
		nextS = cG['next']();
		while ($p['bool'](!$p['op_eq'](nextS, null))) {
			if ($p['bool']($m['isWin'](nextS))) {
				return nextS;
			}
			nextS = cG['next']();
		}
		return null;
	};
	$m['getWin']['__name__'] = 'getWin';

	$m['getWin']['__bind_type__'] = 0;
	$m['getWin']['__args__'] = [null,null,['state']];
	$m['ab'] = function(state, constants, sub, optional_args) {
		if (typeof optional_args == 'undefined') optional_args=arguments['callee']['__args__'][5][1];
		var $add74,nextState,duration,$$new,farthestDepth,$add73;
		if ($p['bool'](optional_args)) {
			$m['TD_CONSTS'] = optional_args['__getitem__']('TD_CONSTS');
			$m['MIN'] = optional_args['__getitem__']('MIN');
			$m['MAX'] = optional_args['__getitem__']('MAX');
		}
		farthestDepth = 1;
		duration = 0;
		while ($p['bool'](($p['cmp'](farthestDepth, 3) == -1))) {
			$$new = (typeof State == "undefined"?$m['State']:State)();
			$$new['copyThis'](state);
			nextState = $m['maxH']($$new, 0, farthestDepth, (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub11=9005.0)=='number'?
				-$usub11:
				$p['op_usub']($usub11)), (typeof State == "undefined"?$m['State']:State)()), (typeof Util == "undefined"?$m['Util']:Util)(9005.0, (typeof State == "undefined"?$m['State']:State)()), constants, sub);
			farthestDepth = $p['__op_add']($add73=farthestDepth,$add74=1);
		}
		return nextState;
	};
	$m['ab']['__name__'] = 'ab';

	$m['ab']['__bind_type__'] = 0;
	$m['ab']['__args__'] = [null,null,['state'],['constants'],['sub'],['optional_args', $p['dict']([])]];
	$m['turn'] = function(integer) {

		if ($p['bool']($p['op_eq'](integer, 1))) {
			return 2;
		}
		else {
			return 1;
		}
		return null;
	};
	$m['turn']['__name__'] = 'turn';

	$m['turn']['__bind_type__'] = 0;
	$m['turn']['__args__'] = [null,null,['integer']];
	$m['Util'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'learning';
		$method = $pyjs__bind_method2('__init__', function(value, state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				state = arguments[2];
			}

			self['value'] = value;
			self['terminal'] = state;
			return null;
		}
	, 1, [null,null,['self'],['value'],['state']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__ge__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return ((($p['cmp']($p['getattr'](self, 'value'), $p['getattr'](other, 'value')))|1) == 1);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ge__'] = $method;
		$method = $pyjs__bind_method2('__le__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return ($p['cmp']($p['getattr'](self, 'value'), $p['getattr'](other, 'value')) < 1);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__le__'] = $method;
		$method = $pyjs__bind_method2('__gt__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return ($p['cmp']($p['getattr'](self, 'value'), $p['getattr'](other, 'value')) == 1);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__gt__'] = $method;
		$method = $pyjs__bind_method2('__lt__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return ($p['cmp']($p['getattr'](self, 'value'), $p['getattr'](other, 'value')) == -1);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__lt__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Util', $p['tuple']($bases), $data);
	})();
	$m['State'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'learning';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['boards'] = function(){
				var $iter37_idx,$collcomp8,$iter37_type,$iter37_array,y_board,$iter37_iter,$iter37_nextval;
	$collcomp8 = $p['list']();
			$iter37_iter = $p['range']($m['DIMENSION']);
			$iter37_nextval=$p['__iter_prepare']($iter37_iter,false);
			while (typeof($p['__wrapped_next']($iter37_nextval)['$nextval']) != 'undefined') {
				y_board = $iter37_nextval['$nextval'];
				$collcomp8['append'](function(){
					var $iter38_iter,$collcomp9,$iter38_idx,$iter38_nextval,$iter38_type,$iter38_array,x_board;
	$collcomp9 = $p['list']();
				$iter38_iter = $p['range']($m['DIMENSION']);
				$iter38_nextval=$p['__iter_prepare']($iter38_iter,false);
				while (typeof($p['__wrapped_next']($iter38_nextval)['$nextval']) != 'undefined') {
					x_board = $iter38_nextval['$nextval'];
					$collcomp9['append'](function(){
						var $iter39_idx,$collcomp10,$iter39_array,$iter39_type,$iter39_nextval,$iter39_iter,y;
	$collcomp10 = $p['list']();
					$iter39_iter = $p['range']($m['DIMENSION']);
					$iter39_nextval=$p['__iter_prepare']($iter39_iter,false);
					while (typeof($p['__wrapped_next']($iter39_nextval)['$nextval']) != 'undefined') {
						y = $iter39_nextval['$nextval'];
						$collcomp10['append'](function(){
							var $iter40_type,$iter40_iter,$iter40_array,$collcomp11,x,$iter40_nextval,$iter40_idx;
	$collcomp11 = $p['list']();
						$iter40_iter = $p['range']($m['DIMENSION']);
						$iter40_nextval=$p['__iter_prepare']($iter40_iter,false);
						while (typeof($p['__wrapped_next']($iter40_nextval)['$nextval']) != 'undefined') {
							x = $iter40_nextval['$nextval'];
							$collcomp11['append']($p['dict']([['cell', 0], ['x', x], ['y', y], ['x_board', x_board], ['y_board', y_board]]));
						}

	return $collcomp11;}());
					}

	return $collcomp10;}());
				}

	return $collcomp9;}());
			}

	return $collcomp8;}();
			self['nextPiece'] = $p['list']([1, 1, 1]);
			self['score'] = $p['dict']([['1', 0], ['2', 0]]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isWinExampleBoard', function(board) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				board = arguments[1];
			}
			var a,$iter42_idx,$iter41_array,$iter42_nextval,$iter41_type,$iter42_array,$iter42_iter,length,$iter42_type,$iter41_iter,$iter41_idx,b,$iter41_nextval;
			length = $p['len'](board);
			$iter41_iter = $p['range'](length);
			$iter41_nextval=$p['__iter_prepare']($iter41_iter,false);
			while (typeof($p['__wrapped_next']($iter41_nextval)['$nextval']) != 'undefined') {
				a = $iter41_nextval['$nextval'];
				$iter42_iter = $p['range'](length);
				$iter42_nextval=$p['__iter_prepare']($iter42_iter,false);
				while (typeof($p['__wrapped_next']($iter42_nextval)['$nextval']) != 'undefined') {
					b = $iter42_nextval['$nextval'];
					$p['getattr'](self, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](a)['__getitem__'](b)['__setitem__']('cell', board['__getitem__'](a)['__getitem__'](b));
				}
			}
			return $m['isWin']($p['getattr'](self, 'boards')['__getitem__'](0)['__getitem__'](0));
		}
	, 1, [null,null,['self'],['board']]);
		$cls_definition['isWinExampleBoard'] = $method;
		$method = $pyjs__bind_method2('isUnoccupied', function(y, x) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
				x = arguments[2];
			}

			return $p['op_eq']($p['getattr'](self, 'boards')['__getitem__']($p['getattr'](self, 'nextPiece')['__getitem__'](0))['__getitem__']($p['getattr'](self, 'nextPiece')['__getitem__'](1))['__getitem__'](y)['__getitem__'](x)['__getitem__']('cell'), 0);
		}
	, 1, [null,null,['self'],['y'],['x']]);
		$cls_definition['isUnoccupied'] = $method;
		$method = $pyjs__bind_method2('printer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add83,$add82,$add81,$add80,$iter49_array,$add86,$iter45_type,$add84,$mod1,$add78,$iter46_idx,$iter45_idx,$iter47_iter,printRows,row,$pow3,$pow2,$pow1,$iter47_type,$iter49_iter,board,$mul29,$mul26,$iter47_array,$mul25,$iter49_idx,$iter49_nextval,$iter46_type,$pow4,$iter45_nextval,$iter46_array,$add85,rowBoards,$iter45_array,buf,$add76,$add77,$add75,$iter45_iter,$iter47_idx,$iter49_type,i,j,$mod2,$iter46_iter,$iter46_nextval,$add79,length,$iter47_nextval,$mul31,$mul30,$mul32;
			length = $p['__op_add']($add75=(typeof ($mul25=(typeof ($pow1=$m['DIMENSION'])==typeof ($pow2=2) && typeof $pow1=='number'?
				Math['pow']($pow1,$pow2):
				$p['op_pow']($pow1,$pow2)))==typeof ($mul26=4) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26)),$add76=1);
			buf = function(){
				var $iter43_type,$iter43_iter,$iter43_array,$iter43_idx,$collcomp12,x,$iter43_nextval;
	$collcomp12 = $p['list']();
			$iter43_iter = $p['range'](length);
			$iter43_nextval=$p['__iter_prepare']($iter43_iter,false);
			while (typeof($p['__wrapped_next']($iter43_nextval)['$nextval']) != 'undefined') {
				x = $iter43_nextval['$nextval'];
				$collcomp12['append']('-');
			}

	return $collcomp12;}();
			buf = ''['join'](buf);
			printRows = function(){
				var $iter44_type,$iter44_idx,$iter44_array,$iter44_iter,$collcomp13,$mul28,$iter44_nextval,$mul27,col;
	$collcomp13 = $p['list']();
			$iter44_iter = $p['range']((typeof ($mul27=$m['DIMENSION'])==typeof ($mul28=$m['DIMENSION']) && typeof $mul27=='number'?
				$mul27*$mul28:
				$p['op_mul']($mul27,$mul28)));
			$iter44_nextval=$p['__iter_prepare']($iter44_iter,false);
			while (typeof($p['__wrapped_next']($iter44_nextval)['$nextval']) != 'undefined') {
				col = $iter44_nextval['$nextval'];
				$collcomp13['append']('|');
			}

	return $collcomp13;}();
			$iter45_iter = $p['zip']($p['getattr'](self, 'boards'), $p['range']($m['DIMENSION']));
			$iter45_nextval=$p['__iter_prepare']($iter45_iter,false);
			while (typeof($p['__wrapped_next']($iter45_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter45_nextval['$nextval'], 2, null);
				rowBoards = $tupleassign1[0];
				i = $tupleassign1[1];
				$iter46_iter = rowBoards;
				$iter46_nextval=$p['__iter_prepare']($iter46_iter,false);
				while (typeof($p['__wrapped_next']($iter46_nextval)['$nextval']) != 'undefined') {
					board = $iter46_nextval['$nextval'];
					$iter47_iter = $p['zip'](board, $p['range']($m['DIMENSION']));
					$iter47_nextval=$p['__iter_prepare']($iter47_iter,false);
					while (typeof($p['__wrapped_next']($iter47_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter47_nextval['$nextval'], 2, null);
						row = $tupleassign2[0];
						j = $tupleassign2[1];
						printRows['__setitem__']($p['__op_add']($add85=(typeof ($mul31=i)==typeof ($mul32=$m['DIMENSION']) && typeof $mul31=='number'?
							$mul31*$mul32:
							$p['op_mul']($mul31,$mul32)),$add86=j), $p['__op_add']($add83=$p['__op_add']($add81=$p['__op_add']($add79=printRows['__getitem__']($p['__op_add']($add77=(typeof ($mul29=i)==typeof ($mul30=$m['DIMENSION']) && typeof $mul29=='number'?
							$mul29*$mul30:
							$p['op_mul']($mul29,$mul30)),$add78=j)),$add80=' '),$add82=$p['str'](function(){
							var $iter48_nextval,$iter48_iter,$iter48_type,$collcomp14,$iter48_idx,x,$iter48_array;
	$collcomp14 = $p['list']();
						$iter48_iter = row;
						$iter48_nextval=$p['__iter_prepare']($iter48_iter,false);
						while (typeof($p['__wrapped_next']($iter48_nextval)['$nextval']) != 'undefined') {
							x = $iter48_nextval['$nextval'];
							$collcomp14['append'](x['__getitem__']('cell'));
						}

	return $collcomp14;}())),$add84=' |'));
					}
				}
			}
			$iter49_iter = $p['zip']($p['range']((typeof ($pow3=$m['DIMENSION'])==typeof ($pow4=2) && typeof $pow3=='number'?
				Math['pow']($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))), printRows);
			$iter49_nextval=$p['__iter_prepare']($iter49_iter,false);
			while (typeof($p['__wrapped_next']($iter49_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter49_nextval['$nextval'], 2, null);
				i = $tupleassign3[0];
				row = $tupleassign3[1];
				if ($p['bool']($p['op_eq']((typeof ($mod1=i)==typeof ($mod2=$m['DIMENSION']) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), 0))) {
					$p['printFunc']([buf], 1);
				}
				$p['printFunc']([row], 1);
			}
			$p['printFunc']([buf], 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['printer'] = $method;
		$method = $pyjs__bind_method2('printerComplicated', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter53_idx,$add89,$add88,j,$add87,$iter52_nextval,$mod3,$iter52_array,printRows,$pow7,$pow6,$pow5,row,$iter52_iter,$mul40,$iter55_nextval,$pow8,$iter55_iter,$iter54_idx,board,$add95,$iter53_nextval,$iter54_nextval,$iter54_type,$iter53_type,$iter54_iter,$add98,$add94,$iter53_array,$add96,$add97,$add90,$add91,$iter52_type,$add93,$add92,rowBoards,$iter52_idx,$iter55_array,buf,$iter55_idx,$iter54_array,$mod4,i,$iter53_iter,length,$iter55_type,$mul39,$mul38,$mul34,$mul37,$mul33;
			length = $p['__op_add']($add87=(typeof ($mul33=(typeof ($pow5=$m['DIMENSION'])==typeof ($pow6=2) && typeof $pow5=='number'?
				Math['pow']($pow5,$pow6):
				$p['op_pow']($pow5,$pow6)))==typeof ($mul34=8) && typeof $mul33=='number'?
				$mul33*$mul34:
				$p['op_mul']($mul33,$mul34)),$add88=3);
			buf = function(){
				var $iter50_idx,$iter50_type,$collcomp15,$iter50_nextval,x,$iter50_array,$iter50_iter;
	$collcomp15 = $p['list']();
			$iter50_iter = $p['range'](length);
			$iter50_nextval=$p['__iter_prepare']($iter50_iter,false);
			while (typeof($p['__wrapped_next']($iter50_nextval)['$nextval']) != 'undefined') {
				x = $iter50_nextval['$nextval'];
				$collcomp15['append']('-');
			}

	return $collcomp15;}();
			buf = ''['join'](buf);
			printRows = function(){
				var $iter51_array,$iter51_iter,$iter51_nextval,$collcomp16,$iter51_idx,$mul35,$mul36,col,$iter51_type;
	$collcomp16 = $p['list']();
			$iter51_iter = $p['range']((typeof ($mul35=$m['DIMENSION'])==typeof ($mul36=$m['DIMENSION']) && typeof $mul35=='number'?
				$mul35*$mul36:
				$p['op_mul']($mul35,$mul36)));
			$iter51_nextval=$p['__iter_prepare']($iter51_iter,false);
			while (typeof($p['__wrapped_next']($iter51_nextval)['$nextval']) != 'undefined') {
				col = $iter51_nextval['$nextval'];
				$collcomp16['append']('|');
			}

	return $collcomp16;}();
			$iter52_iter = $p['zip']($p['getattr'](self, 'boards'), $p['range']($m['DIMENSION']));
			$iter52_nextval=$p['__iter_prepare']($iter52_iter,false);
			while (typeof($p['__wrapped_next']($iter52_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter52_nextval['$nextval'], 2, null);
				rowBoards = $tupleassign4[0];
				i = $tupleassign4[1];
				$iter53_iter = rowBoards;
				$iter53_nextval=$p['__iter_prepare']($iter53_iter,false);
				while (typeof($p['__wrapped_next']($iter53_nextval)['$nextval']) != 'undefined') {
					board = $iter53_nextval['$nextval'];
					$iter54_iter = $p['zip'](board, $p['range']($m['DIMENSION']));
					$iter54_nextval=$p['__iter_prepare']($iter54_iter,false);
					while (typeof($p['__wrapped_next']($iter54_nextval)['$nextval']) != 'undefined') {
						var $tupleassign5 = $p['__ass_unpack']($iter54_nextval['$nextval'], 2, null);
						row = $tupleassign5[0];
						j = $tupleassign5[1];
						printRows['__setitem__']($p['__op_add']($add97=(typeof ($mul39=i)==typeof ($mul40=$m['DIMENSION']) && typeof $mul39=='number'?
							$mul39*$mul40:
							$p['op_mul']($mul39,$mul40)),$add98=j), $p['__op_add']($add95=$p['__op_add']($add93=$p['__op_add']($add91=printRows['__getitem__']($p['__op_add']($add89=(typeof ($mul37=i)==typeof ($mul38=$m['DIMENSION']) && typeof $mul37=='number'?
							$mul37*$mul38:
							$p['op_mul']($mul37,$mul38)),$add90=j)),$add92=' '),$add94=$p['str'](row)),$add96=' |'));
					}
				}
			}
			$iter55_iter = $p['zip']($p['range']((typeof ($pow7=$m['DIMENSION'])==typeof ($pow8=2) && typeof $pow7=='number'?
				Math['pow']($pow7,$pow8):
				$p['op_pow']($pow7,$pow8))), printRows);
			$iter55_nextval=$p['__iter_prepare']($iter55_iter,false);
			while (typeof($p['__wrapped_next']($iter55_nextval)['$nextval']) != 'undefined') {
				var $tupleassign6 = $p['__ass_unpack']($iter55_nextval['$nextval'], 2, null);
				i = $tupleassign6[0];
				row = $tupleassign6[1];
				if ($p['bool']($p['op_eq']((typeof ($mod3=i)==typeof ($mod4=$m['DIMENSION']) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 0))) {
					$p['printFunc']([buf], 1);
				}
				$p['printFunc']([row], 1);
			}
			$p['printFunc']([buf], 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['printerComplicated'] = $method;
		$method = $pyjs__bind_method2('printInfo', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['printFunc'](['boards are:\n', self['printer'](), 'You are playing into board column', $p['getattr'](self, 'nextPiece')['__getitem__'](1), 'row', $p['getattr'](self, 'nextPiece')['__getitem__'](0), '\nNext player is ', $p['getattr'](self, 'nextPiece')['__getitem__'](2)], 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['printInfo'] = $method;
		$method = $pyjs__bind_method2('copyBoards', function(otherState) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				otherState = arguments[1];
			}
			var $iter56_array,$iter56_idx,$iter57_idx,$iter59_iter,$iter57_iter,x_board,$iter58_array,$iter58_type,$iter59_array,$iter56_type,$iter56_nextval,$iter58_iter,$iter56_iter,y_board,$iter58_idx,$iter58_nextval,$iter57_type,$iter59_idx,rangeBoards,$iter57_array,$iter59_nextval,$iter59_type,y,x,$iter57_nextval;
			rangeBoards = $p['range']($p['len']($p['getattr'](otherState, 'boards')));
			$iter56_iter = rangeBoards;
			$iter56_nextval=$p['__iter_prepare']($iter56_iter,false);
			while (typeof($p['__wrapped_next']($iter56_nextval)['$nextval']) != 'undefined') {
				y_board = $iter56_nextval['$nextval'];
				$iter57_iter = rangeBoards;
				$iter57_nextval=$p['__iter_prepare']($iter57_iter,false);
				while (typeof($p['__wrapped_next']($iter57_nextval)['$nextval']) != 'undefined') {
					x_board = $iter57_nextval['$nextval'];
					$iter58_iter = rangeBoards;
					$iter58_nextval=$p['__iter_prepare']($iter58_iter,false);
					while (typeof($p['__wrapped_next']($iter58_nextval)['$nextval']) != 'undefined') {
						y = $iter58_nextval['$nextval'];
						$iter59_iter = rangeBoards;
						$iter59_nextval=$p['__iter_prepare']($iter59_iter,false);
						while (typeof($p['__wrapped_next']($iter59_nextval)['$nextval']) != 'undefined') {
							x = $iter59_nextval['$nextval'];
							$p['getattr'](self, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__setitem__']('cell', $p['getattr'](otherState, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__getitem__']('cell'));
							$p['getattr'](self, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__setitem__']('x', $p['getattr'](otherState, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__getitem__']('x'));
							$p['getattr'](self, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__setitem__']('y', $p['getattr'](otherState, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__getitem__']('y'));
							$p['getattr'](self, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__setitem__']('x_board', $p['getattr'](otherState, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__getitem__']('x_board'));
							$p['getattr'](self, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__setitem__']('y_board', $p['getattr'](otherState, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__getitem__']('y_board'));
						}
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['otherState']]);
		$cls_definition['copyBoards'] = $method;
		$method = $pyjs__bind_method2('copyThis', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			self['copyBoards'](other);
			self['nextPiece'] = $p['__getslice']($p['getattr'](other, 'nextPiece'), 0, 3);
			$p['getattr'](self, 'score')['__setitem__']('1', $p['getattr'](other, 'score')['__getitem__']('1'));
			$p['getattr'](self, 'score')['__setitem__']('2', $p['getattr'](other, 'score')['__getitem__']('2'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['copyThis'] = $method;
		$method = $pyjs__bind_method2('genChildren', function(child) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}
			var $iter61_type,$iter64_iter,$iter60_array,$iter61_iter,$iter63_array,$iter66_iter,$iter65_array,$iter67_idx,$augexpr1,$augexpr3,$augexpr2,$augexpr4,$augsub4,$augsub3,$augsub2,$augsub1,$iter71_array,b,$iter70_array,dL,d,$iter65_idx,$iter68_iter,$iter64_idx,$iter66_type,$iter62_nextval,$iter61_idx,$add99,$iter66_nextval,$iter67_iter,$iter60_type,$iter65_type,$iter62_idx,$iter69_array,$iter68_type,$iter71_nextval,$iter65_nextval,$iter63_iter,c,$iter69_idx,bL,$iter70_idx,$iter62_array,$iter68_idx,$iter64_nextval,$iter70_iter,$iter71_iter,$iter70_type,cL,$iter67_type,$iter64_type,$iter60_nextval,$iter70_nextval,$iter67_nextval,$iter66_idx,$iter62_type,$iter68_array,$iter68_nextval,$iter69_nextval,$iter66_array,$iter61_array,$iter67_array,$iter64_array,nP,$iter71_type,$iter69_iter,$iter61_nextval,$iter69_type,aL,$iter60_idx,$add101,$add100,$add103,$add102,$add105,$add104,$add106,$iter63_idx,$iter63_nextval,$iter65_iter,a,$iter62_iter,$iter60_iter,$iter63_type,$iter71_idx;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					aL = $p['range']($m['DIMENSION']);
					bL = $p['range']($m['DIMENSION']);
					cL = $p['range']($m['DIMENSION']);
					dL = $p['range']($m['DIMENSION']);
					$generator_state[2] = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool']($m['isWin']($p['getattr'](self, 'boards')['__getitem__']($p['getattr'](self, 'nextPiece')['__getitem__'](0))['__getitem__']($p['getattr'](self, 'nextPiece')['__getitem__'](1))))))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							$iter66_iter = aL;
							$iter66_nextval=$p['__iter_prepare']($iter66_iter,false);
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state[3] = 0;
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0 || typeof($p['__wrapped_next']($iter66_nextval)['$nextval']) != 'undefined');$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									a = $iter66_nextval['$nextval'];
									$iter67_iter = bL;
									$iter67_nextval=$p['__iter_prepare']($iter67_iter,false);
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									$generator_state[4] = 0;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
									for (;($generator_state[4] > 0 || typeof($p['__wrapped_next']($iter67_nextval)['$nextval']) != 'undefined');$generator_state[4] = 0) {
										if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
											for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
											b = $iter67_nextval['$nextval'];
											$generator_state[6] = 0;
											$generator_state[4]=1;
										}
										if ($generator_state[4] == 1) {
											if(($generator_state[5]==1)||($generator_state[5]<1&&($p['bool'](!$p['bool']($m['isWin']($p['getattr'](self, 'boards')['__getitem__'](a)['__getitem__'](b))))))) {
												$generator_state[5]=1;
												if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
													for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
													$iter68_iter = cL;
													$iter68_nextval=$p['__iter_prepare']($iter68_iter,false);
													$generator_state[6]=1;
												}
												if ($generator_state[6] == 1) {
													$generator_state[7] = 0;
													$generator_state[6]=2;
												}
												if ($generator_state[6] == 2) {
													for (;($generator_state[7] > 0 || typeof($p['__wrapped_next']($iter68_nextval)['$nextval']) != 'undefined');$generator_state[7] = 0) {
														if (typeof $generator_state[7] == 'undefined' || $generator_state[7] === 0) {
															for (var $i = 7 ; $i < ($generator_state['length']<9?9:$generator_state['length']); $i++) $generator_state[$i]=0;
															c = $iter68_nextval['$nextval'];
															$iter69_iter = dL;
															$iter69_nextval=$p['__iter_prepare']($iter69_iter,false);
															$generator_state[7]=1;
														}
														if ($generator_state[7] == 1) {
															$generator_state[8] = 0;
															$generator_state[7]=2;
														}
														if ($generator_state[7] == 2) {
															for (;($generator_state[8] > 0 || typeof($p['__wrapped_next']($iter69_nextval)['$nextval']) != 'undefined');$generator_state[8] = 0) {
																if (typeof $generator_state[8] == 'undefined' || $generator_state[8] === 0) {
																	for (var $i = 8 ; $i < ($generator_state['length']<10?10:$generator_state['length']); $i++) $generator_state[$i]=0;
																	d = $iter69_nextval['$nextval'];
																	$generator_state[10] = 0;
																	$generator_state[8]=1;
																}
																if ($generator_state[8] == 1) {
																	if(($generator_state[9]==1)||($generator_state[9]<1&&($p['bool']($p['op_eq']($p['getattr'](self, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__getitem__']('cell'), 0))))) {
																		$generator_state[9]=1;
																		if (typeof $generator_state[10] == 'undefined' || $generator_state[10] === 0) {
																			for (var $i = 10 ; $i < ($generator_state['length']<12?12:$generator_state['length']); $i++) $generator_state[$i]=0;
																			child['copyThis'](self);
																			nP = $m['turn']($p['getattr'](self, 'nextPiece')['__getitem__'](2));
																			child['nextPiece'] = $p['list']([c, d, nP]);
																			$p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__setitem__']('cell', $p['getattr'](self, 'nextPiece')['__getitem__'](2));
																			if ($p['bool']($m['isWin']($p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)))) {
																				var $augsub3 = $p['str']($p['getattr'](self, 'nextPiece')['__getitem__'](2));
																				var $augexpr3 = $p['getattr'](child, 'score');
																				$augexpr3['__setitem__']($augsub3, $p['__op_add']($add103=$augexpr3['__getitem__']($augsub3),$add104=1));
																			}
																			$p['getattr'](child, 'printer');
																			$yield_value = child;
																			$yielding = true;
																			$generator_state[10] = 1;
																			return $yield_value;
																			$generator_state[10]=1;
																		}
																		if ($generator_state[10] == 1) {
																			if (typeof $exc != 'undefined' && $exc !== null) {
																				$yielding = null;
																				$generator_state[10] = -1;
																				throw $exc;
																			}
																			$generator_state[10]=2;
																		}
																		if ($generator_state[10] == 2) {
																		}
																	}
																	$generator_state[9]=0;
																	$generator_state[8]=2;
																}
																if ($generator_state[8] == 2) {
																}
															}
															$generator_state[7]=3;
														}
														if ($generator_state[7] == 3) {
															$generator_state[7]=4;
														}
														if ($generator_state[7] == 4) {
														}
													}
													$generator_state[6]=3;
												}
												if ($generator_state[6] == 3) {
													$generator_state[6]=4;
												}
												if ($generator_state[6] == 4) {
												}
											}
											$generator_state[5]=0;
											$generator_state[4]=2;
										}
										if ($generator_state[4] == 2) {
										}
									}
									$generator_state[3]=3;
								}
								if ($generator_state[3] == 3) {
									$generator_state[3]=4;
								}
								if ($generator_state[3] == 4) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					else if ($generator_state[1]==0||$generator_state[1]==2) {
						$generator_state[1]=2;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							a = $p['getattr'](self, 'nextPiece')['__getitem__'](0);
							b = $p['getattr'](self, 'nextPiece')['__getitem__'](1);
							$iter70_iter = cL;
							$iter70_nextval=$p['__iter_prepare']($iter70_iter,false);
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state[3] = 0;
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0 || typeof($p['__wrapped_next']($iter70_nextval)['$nextval']) != 'undefined');$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									c = $iter70_nextval['$nextval'];
									$iter71_iter = dL;
									$iter71_nextval=$p['__iter_prepare']($iter71_iter,false);
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									$generator_state[4] = 0;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
									for (;($generator_state[4] > 0 || typeof($p['__wrapped_next']($iter71_nextval)['$nextval']) != 'undefined');$generator_state[4] = 0) {
										if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
											for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
											d = $iter71_nextval['$nextval'];
											$generator_state[6] = 0;
											$generator_state[4]=1;
										}
										if ($generator_state[4] == 1) {
											if(($generator_state[5]==1)||($generator_state[5]<1&&($p['bool']($p['op_eq']($p['getattr'](self, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__getitem__']('cell'), 0))))) {
												$generator_state[5]=1;
												if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
													for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
													child['copyThis'](self);
													nP = $m['turn']($p['getattr'](self, 'nextPiece')['__getitem__'](2));
													child['nextPiece'] = $p['list']([c, d, nP]);
													$p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__setitem__']('cell', $p['getattr'](self, 'nextPiece')['__getitem__'](2));
													if ($p['bool']($m['isWin']($p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)))) {
														var $augsub4 = $p['str']($p['getattr'](self, 'nextPiece')['__getitem__'](2));
														var $augexpr4 = $p['getattr'](child, 'score');
														$augexpr4['__setitem__']($augsub4, $p['__op_add']($add105=$augexpr4['__getitem__']($augsub4),$add106=1));
													}
													$yield_value = child;
													$yielding = true;
													$generator_state[6] = 1;
													return $yield_value;
													$generator_state[6]=1;
												}
												if ($generator_state[6] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[6] = -1;
														throw $exc;
													}
													$generator_state[6]=2;
												}
												if ($generator_state[6] == 2) {
												}
											}
											$generator_state[5]=0;
											$generator_state[4]=2;
										}
										if ($generator_state[4] == 2) {
										}
									}
									$generator_state[3]=3;
								}
								if ($generator_state[3] == 3) {
									$generator_state[3]=4;
								}
								if ($generator_state[3] == 4) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					$generator_state[1]=0;
					$yield_value = null;
					$yielding = true;
					$generator_state[0] = 2;
					return $yield_value;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['genChildren'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('State', $p['tuple']($bases), $data);
	})();
	$m['playAI'] = function() {

		$p['printFunc']([$m['messageWelcome']], 1);
		$m['TD_CONSTS'] = (typeof load_TD_CONSTS == "undefined"?$m['load_TD_CONSTS']:load_TD_CONSTS)();
		(typeof playUntilExit == "undefined"?$m['playUntilExit']:playUntilExit)();
		return null;
	};
	$m['playAI']['__name__'] = 'playAI';

	$m['playAI']['__bind_type__'] = 0;
	$m['playAI']['__args__'] = [null,null];
	$m['playUntilExit'] = function() {
		var firstPlayer;
		while ($p['bool'](true)) {
			firstPlayer = (typeof getFirstPlayer == "undefined"?$m['getFirstPlayer']:getFirstPlayer)();
			if ($p['bool']($p['op_eq'](firstPlayer, 0))) {
				$p['printFunc']([$m['messageGoodbye']], 1);
				return null;
			}
			(typeof playTrio == "undefined"?$m['playTrio']:playTrio)(firstPlayer);
		}
		return null;
	};
	$m['playUntilExit']['__name__'] = 'playUntilExit';

	$m['playUntilExit']['__bind_type__'] = 0;
	$m['playUntilExit']['__args__'] = [null,null];
	$m['getFirstPlayer'] = function() {
		var dim,SUBTRACT,response;
		while ($p['bool'](true)) {
			dim = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Enter the dimension of the game \n');
			if ($p['bool'](dim['isdigit']())) {
				$m['DIMENSION'] = $p['float_int'](dim);
				break;
			}
			else {
				$p['printFunc']([$m['messageTryAgain']], 1);
			}
		}
		while ($p['bool'](true)) {
			response = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)($m['messageChoosePlayer']);
			if ($p['bool']($p['op_eq'](response, '1'))) {
				SUBTRACT = true;
				return 1;
			}
			else if ($p['bool']($p['op_eq'](response, '2'))) {
				SUBTRACT = false;
				return 2;
			}
			else if ($p['bool']($p['op_eq'](response, '0'))) {
				return 0;
			}
			else {
				$p['printFunc']([$m['messageTryAgain']], 1);
			}
		}
		return null;
	};
	$m['getFirstPlayer']['__name__'] = 'getFirstPlayer';

	$m['getFirstPlayer']['__bind_type__'] = 0;
	$m['getFirstPlayer']['__args__'] = [null,null];
	$m['playTrio'] = function(firstPlayer) {
		var state;
		$p['printFunc'](['Should only happen once'], 1);
		state = $m['State']();
		if ($p['bool']($p['op_eq'](firstPlayer, $m['userFirst']))) {
			while ($p['bool'](true)) {
				if ($p['bool']($p['op_eq']((typeof userTurn == "undefined"?$m['userTurn']:userTurn)(state), 0))) {
					break;
				}
				if ($p['bool']($p['op_eq']((typeof computerTurn == "undefined"?$m['computerTurn']:computerTurn)(state), 0))) {
					break;
				}
			}
		}
		else if ($p['bool']($p['op_eq'](firstPlayer, $m['computerFirst']))) {
			$p['getattr'](state, 'nextPiece')['__setitem__'](2, 2);
			while ($p['bool'](true)) {
				if ($p['bool']($p['op_eq']((typeof computerTurn == "undefined"?$m['computerTurn']:computerTurn)(state), 0))) {
					break;
				}
				if ($p['bool']($p['op_eq']((typeof userTurn == "undefined"?$m['userTurn']:userTurn)(state), 0))) {
					break;
				}
			}
		}
		else {
			if (!( 'Should never happen' )) {
			   throw $p['AssertionError']();
			 }
		}
		return null;
	};
	$m['playTrio']['__name__'] = 'playTrio';

	$m['playTrio']['__bind_type__'] = 0;
	$m['playTrio']['__args__'] = [null,null,['firstPlayer']];
	$m['userTurn'] = function(state) {
		var $add110,$add108,x_board,$and8,$and9,$augexpr5,$add107,$augexpr6,$add109,$augsub6,$augsub5,$and7,$and12,$and13,$and10,$and11,$and14,$and15,y_board,y,x;
		$p['printFunc']([$m['messageUsersTurn']], 1);
		$p['printFunc']([state['printInfo']()], 1);
		$m['checkOver'](state);
		$p['printFunc'](['You are playing piece', $p['getattr'](state, 'nextPiece')['__getitem__'](2)], 1);
		while ($p['bool'](true)) {
			if ($p['bool']($m['isWin']($p['getattr'](state, 'boards')['__getitem__']($p['getattr'](state, 'nextPiece')['__getitem__'](0))['__getitem__']($p['getattr'](state, 'nextPiece')['__getitem__'](1))))) {
				$p['printFunc'](['You must select a board to play into'], 1);
				x_board = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign column of meta-board to play into');
				y_board = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign row of meta-board to play into');
				if ($p['bool'](($p['bool']($and7=x_board['isdigit']())?($p['bool']($and8=y_board['isdigit']())?!$p['bool']($m['isWin']($p['getattr'](state, 'boards')['__getitem__']($p['float_int'](y_board))['__getitem__']($p['float_int'](x_board)))):$and8):$and7))) {
					x_board = $p['float_int'](x_board);
					y_board = $p['float_int'](y_board);
					x = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign column of next piece');
					y = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign row of next piece');
					state['nextPiece'] = $p['list']([y_board, x_board, $p['getattr'](state, 'nextPiece')['__getitem__'](2)]);
					if ($p['bool'](($p['bool']($and10=x['isdigit']())?($p['bool']($and11=y['isdigit']())?state['isUnoccupied']($p['float_int'](y), $p['float_int'](x)):$and11):$and10))) {
						x = $p['float_int'](x);
						y = $p['float_int'](y);
						$p['getattr'](state, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__setitem__']('cell', $p['getattr'](state, 'nextPiece')['__getitem__'](2));
						if ($p['bool']($m['isWin']($p['getattr'](state, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)))) {
							var $augsub5 = $p['str']($p['getattr'](state, 'nextPiece')['__getitem__'](2));
							var $augexpr5 = $p['getattr'](state, 'score');
							$augexpr5['__setitem__']($augsub5, $p['__op_add']($add107=$augexpr5['__getitem__']($augsub5),$add108=1));
						}
						state['nextPiece'] = $p['list']([y, x, $m['turn']($p['getattr'](state, 'nextPiece')['__getitem__'](2))]);
						break;
					}
				}
				else {
					$p['printFunc']([$m['messageTryAgain']], 1);
				}
			}
			else {
				x = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign column of next piece');
				y = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign row of next piece');
				if ($p['bool'](($p['bool']($and13=x['isdigit']())?($p['bool']($and14=y['isdigit']())?state['isUnoccupied']($p['float_int'](y), $p['float_int'](x)):$and14):$and13))) {
					x = $p['float_int'](x);
					y = $p['float_int'](y);
					$p['getattr'](state, 'boards')['__getitem__']($p['getattr'](state, 'nextPiece')['__getitem__'](0))['__getitem__']($p['getattr'](state, 'nextPiece')['__getitem__'](1))['__getitem__'](y)['__getitem__'](x)['__setitem__']('cell', $p['getattr'](state, 'nextPiece')['__getitem__'](2));
					if ($p['bool']($m['isWin']($p['getattr'](state, 'boards')['__getitem__']($p['getattr'](state, 'nextPiece')['__getitem__'](0))['__getitem__']($p['getattr'](state, 'nextPiece')['__getitem__'](1))))) {
						var $augsub6 = $p['str']($p['getattr'](state, 'nextPiece')['__getitem__'](2));
						var $augexpr6 = $p['getattr'](state, 'score');
						$augexpr6['__setitem__']($augsub6, $p['__op_add']($add109=$augexpr6['__getitem__']($augsub6),$add110=1));
					}
					state['nextPiece'] = $p['tuple']([y, x, $m['turn']($p['getattr'](state, 'nextPiece')['__getitem__'](2))]);
					break;
				}
				else {
					$p['printFunc']([$m['messageTryAgain']], 1);
				}
			}
		}
		$p['printFunc'](['Your move was:'], 1);
		state['printInfo']();
		$p['printFunc'](['Scores: Player 1: ', $p['getattr'](state, 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr'](state, 'score')['__getitem__']('2')], 1);
		(typeof computerTurn == "undefined"?$m['computerTurn']:computerTurn)(state);
		return null;
	};
	$m['userTurn']['__name__'] = 'userTurn';

	$m['userTurn']['__bind_type__'] = 0;
	$m['userTurn']['__args__'] = [null,null,['state']];
	$m['computerTurn'] = function(state) {
		var nextState,expectedUtility;
		$p['printFunc']([$m['messageComputersTurn']], 1);
		$p['printFunc'](['AI using following constants:\n', $m['TD_CONSTS']], 1);
		$m['checkOver'](state);
		$p['printFunc']([state['printInfo']()], 1);
		var $tupleassign7 = $p['__ass_unpack']($m['ab'](state, $m['TD_CONSTS'], true), 2, null);
		expectedUtility = $tupleassign7[0];
		nextState = $tupleassign7[1];
		$p['printFunc'](['Expected utility is: ', expectedUtility], 1);
		state = $m['copy']['deepcopy'](nextState);
		$p['printFunc'](['Scores: Player 1: ', $p['getattr'](state, 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr'](state, 'score')['__getitem__']('2')], 1);
		$m['userTurn'](state);
		return null;
	};
	$m['computerTurn']['__name__'] = 'computerTurn';

	$m['computerTurn']['__bind_type__'] = 0;
	$m['computerTurn']['__args__'] = [null,null,['state']];
	$m['normalize'] = function(tdConsts) {
		var $lambda6,$lambda5,$add118,$add119,$add116,$add117,$add115,tot,$mul41,$mul42,norm,$iter72_array,$iter72_type,$add122,$add121,$add120,$iter72_iter,$div2,$div1,$iter72_idx,$iter72_nextval,i;
		var 		$lambda5 = function(x, y) {
			var $add112,$add111;
			return $p['__op_add']($add111=x,$add112=y);
		};
		$lambda5['__name__'] = '$lambda5';

		$lambda5['__bind_type__'] = 0;
		$lambda5['__args__'] = [null,null,['x'],['y']];
		norm = $p['reduce']($lambda5, $m['CONSTS']['values']());
		var 		$lambda6 = function(x, y) {
			var $add114,$add113;
			return $p['__op_add']($add113=x,$add114=y);
		};
		$lambda6['__name__'] = '$lambda6';

		$lambda6['__bind_type__'] = 0;
		$lambda6['__args__'] = [null,null,['x'],['y']];
		tot = $p['reduce']($lambda6, tdConsts['values']());
		$iter72_iter = $p['range']($p['len'](tdConsts));
		$iter72_nextval=$p['__iter_prepare']($iter72_iter,false);
		while (typeof($p['__wrapped_next']($iter72_nextval)['$nextval']) != 'undefined') {
			i = $iter72_nextval['$nextval'];
			tdConsts['__setitem__']($p['__op_add']($add121='c',$add122=$p['str']($p['__op_add']($add119=i,$add120=1))), (typeof ($mul41=(typeof ($div1=tdConsts['__getitem__']($p['__op_add']($add117='c',$add118=$p['str']($p['__op_add']($add115=i,$add116=1)))))==typeof ($div2=tot) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))==typeof ($mul42=norm) && typeof $mul41=='number'?
				$mul41*$mul42:
				$p['op_mul']($mul41,$mul42)));
		}
		return tdConsts;
	};
	$m['normalize']['__name__'] = 'normalize';

	$m['normalize']['__bind_type__'] = 0;
	$m['normalize']['__args__'] = [null,null,['tdConsts']];
	$m['load_TD_CONSTS'] = function() {
		var $add127,$add126,$add125,$add124,$add123,f,writeTo,lines,$add128,$pyjs_try_err;
		try {
			f = $p['open']($p['__op_add']($add125=$p['__op_add']($add123=$m['CURRENT_DIR'],$add124='/'),$add126='td.txt'));
			lines = f['readlines']();
			if (!( $p['op_eq']($p['len'](lines), 1) )) {
			   throw $p['AssertionError']();
			 }
			$m['TD_CONSTS'] = (typeof eval == "undefined"?$m['eval']:eval)(lines['__getitem__'](0));
			$p['printFunc'](['Succesfully loaded file "td.txt"'], 1);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				$p['printFunc'](['ERROR FILE MISSING!!\nFile "td.txt" not found.\nYou can run "trainAI()" to create this file.'], 1);
				writeTo = $p['open']($p['__op_add']($add127=$m['CURRENT_DIR'],$add128='/td.txt'), 'w+');
				writeTo['write']($p['str']($m['TD_CONSTS']));
				writeTo['close']();
			}
		}
		return $m['TD_CONSTS'];
	};
	$m['load_TD_CONSTS']['__name__'] = 'load_TD_CONSTS';

	$m['load_TD_CONSTS']['__bind_type__'] = 0;
	$m['load_TD_CONSTS']['__args__'] = [null,null];
	$m['trainAI'] = function() {
		var a,$lambda7,$add131,$add132,writeTo,diffList,change,td,saved,savedConsts;
		$p['printFunc'](['Starting AI training!'], 1);
		$m['TD_CONSTS'] = $m['load_TD_CONSTS']();
		$p['printFunc'](['TD_CONSTS is currently:\n', $m['TD_CONSTS']], 1);
		savedConsts = $m['copy']['copy']($m['TD_CONSTS']);
		a = $m['State']();
		(typeof learning_TD_AI == "undefined"?$m['learning_TD_AI']:learning_TD_AI)(a, a);
		saved = savedConsts['values']();
		td = $m['TD_CONSTS']['values']();
		diffList = function(){
			var $sub26,$iter73_iter,$sub25,i,$iter73_array,$iter73_idx,$collcomp17,$iter73_nextval,$iter73_type;
	$collcomp17 = $p['list']();
		$iter73_iter = $p['range']($p['len']($m['TD_CONSTS']));
		$iter73_nextval=$p['__iter_prepare']($iter73_iter,false);
		while (typeof($p['__wrapped_next']($iter73_nextval)['$nextval']) != 'undefined') {
			i = $iter73_nextval['$nextval'];
			$collcomp17['append']($p['abs']($p['__op_sub']($sub25=saved['__getitem__'](i),$sub26=td['__getitem__'](i))));
		}

	return $collcomp17;}();
		var 		$lambda7 = function(x, y) {
			var $add130,$add129;
			return $p['__op_add']($add129=x,$add130=y);
		};
		$lambda7['__name__'] = '$lambda7';

		$lambda7['__bind_type__'] = 0;
		$lambda7['__args__'] = [null,null,['x'],['y']];
		change = $p['reduce']($lambda7, diffList);
		$p['printFunc'](['TD_CONSTS update to:\n', $m['TD_CONSTS'], '\nNet change was: ', change], 1);
		$p['printFunc'](['Finished training!'], 1);
		writeTo = $p['open']($p['__op_add']($add131=$m['CURRENT_DIR'],$add132='/td.txt'), 'w+');
		writeTo['write']($p['str']($m['TD_CONSTS']));
		writeTo['close']();
		return $m['TD_CONSTS'];
	};
	$m['trainAI']['__name__'] = 'trainAI';

	$m['trainAI']['__bind_type__'] = 0;
	$m['trainAI']['__args__'] = [null,null];
	$m['learning_TD_AI'] = function(prevState, prev_prev_state) {
		var $add134,$add135,$add136,$sub27,$add133,$sub28,$add138,changeTotalUtility,$add137,$iter75_idx,sub2,terminal_state,$mul48,$mul44,SUBTRACT,$mul46,sub1,$mul43,state,changeSubUtil,$iter75_array,$augexpr7,expectedUtility,$augsub7,$mul47,$iter75_nextval,$iter75_iter,i,$iter75_type,$mul45;
		$p['printFunc'](['\n\nTD AI player starting turn. TD AI places the piece:', $p['getattr'](prevState, 'nextPiece')['__getitem__'](2)], 1);
		$p['printFunc'](['TD_CONSTS after being adjusted are: ', $m['TD_CONSTS']], 1);
		if ($p['bool']($m['isOver'](prevState))) {
			return $m['TD_CONSTS'];
		}
		SUBTRACT = false;
		var $tupleassign8 = $p['__ass_unpack']($m['ab'](prevState, $m['TD_CONSTS'], SUBTRACT), 2, null);
		expectedUtility = $tupleassign8[0];
		state = $tupleassign8[1];
		terminal_state = $p['getattr'](expectedUtility, 'terminal');
		$p['printFunc'](['Scores: Player 1: ', $p['getattr'](state, 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr'](state, 'score')['__getitem__']('2')], 1);
		state['printInfo']();
		changeTotalUtility = $p['__op_sub']($sub27=$m['utility'](terminal_state, $m['TD_CONSTS'], SUBTRACT),$sub28=$m['utility'](prev_prev_state, $m['TD_CONSTS'], SUBTRACT));
		sub1 = $m['subUtil'](terminal_state, $m['TD_CONSTS'], SUBTRACT);
		sub2 = $m['subUtil'](prev_prev_state, $m['TD_CONSTS'], SUBTRACT);
		changeSubUtil = function(){
			var $sub30,i,$iter74_type,$sub29,$iter74_array,$iter74_iter,$iter74_idx,$iter74_nextval,$collcomp18;
	$collcomp18 = $p['list']();
		$iter74_iter = $p['range']($p['len'](sub1));
		$iter74_nextval=$p['__iter_prepare']($iter74_iter,false);
		while (typeof($p['__wrapped_next']($iter74_nextval)['$nextval']) != 'undefined') {
			i = $iter74_nextval['$nextval'];
			$collcomp18['append']($p['__op_sub']($sub29=sub1['__getitem__'](i),$sub30=sub2['__getitem__'](i)));
		}

	return $collcomp18;}();
		$iter75_iter = $p['range']($p['len']($m['TD_CONSTS']));
		$iter75_nextval=$p['__iter_prepare']($iter75_iter,false);
		while (typeof($p['__wrapped_next']($iter75_nextval)['$nextval']) != 'undefined') {
			i = $iter75_nextval['$nextval'];
			var $augsub7 = $p['__op_add']($add135='c',$add136=$p['str']($p['__op_add']($add133=i,$add134=1)));
			var $augexpr7 = $m['TD_CONSTS'];
			$augexpr7['__setitem__']($augsub7, $p['__op_add']($add137=$augexpr7['__getitem__']($augsub7),$add138=(typeof ($mul47=(typeof ($mul45=(typeof ($mul43=$m['ALPHA'])==typeof ($mul44=changeTotalUtility) && typeof $mul43=='number'?
				$mul43*$mul44:
				$p['op_mul']($mul43,$mul44)))==typeof ($mul46=changeSubUtil['__getitem__'](i)) && typeof $mul45=='number'?
				$mul45*$mul46:
				$p['op_mul']($mul45,$mul46)))==typeof ($mul48=(typeof ($usub12=1)=='number'?
				-$usub12:
				$p['op_usub']($usub12))) && typeof $mul47=='number'?
				$mul47*$mul48:
				$p['op_mul']($mul47,$mul48))));
		}
		$m['TD_CONSTS'] = $m['normalize']($m['TD_CONSTS']);
		$p['printFunc'](['TD_CONSTS after being adjusted are: ', $m['TD_CONSTS']], 1);
		(typeof naiveAI == "undefined"?$m['naiveAI']:naiveAI)(state, state);
		return null;
	};
	$m['learning_TD_AI']['__name__'] = 'learning_TD_AI';

	$m['learning_TD_AI']['__bind_type__'] = 0;
	$m['learning_TD_AI']['__args__'] = [null,null,['prevState'],['prev_prev_state']];
	$m['naiveAI'] = function(state, prev_state) {
		var SUBTRACT,nextState,expectedUtility;
		if ($p['bool']($m['isOver'](state))) {
			$m['learning_TD_AI'](state, prev_state);
		}
		$p['printFunc'](['\n\nNaive AIs turn which plays the piece: ', $p['getattr'](state, 'nextPiece')['__getitem__'](2)], 1);
		SUBTRACT = true;
		$m['checkOver'](state);
		var $tupleassign9 = $p['__ass_unpack']($m['ab'](state, $m['TD_CONSTS'], SUBTRACT), 2, null);
		expectedUtility = $tupleassign9[0];
		nextState = $tupleassign9[1];
		state = $m['copy']['deepcopy'](nextState);
		$p['printFunc'](['Scores: Player 1: ', $p['getattr'](state, 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr'](state, 'score')['__getitem__']('2')], 1);
		state['printInfo']();
		$m['learning_TD_AI'](state, prev_state);
		return null;
	};
	$m['naiveAI']['__name__'] = 'naiveAI';

	$m['naiveAI']['__bind_type__'] = 0;
	$m['naiveAI']['__args__'] = [null,null,['state'],['prev_state']];
	$p['printFunc']([$m['README']], 1);
	$m['test1'] = function() {
		var a,b,SUBTRACT;
		a = $m['State']();
		$p['getattr'](a, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](0)['__getitem__'](0)['__setitem__']('cell', 1);
		$p['getattr'](a, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](1)['__getitem__'](1)['__setitem__']('cell', 1);
		$p['getattr'](a, 'nextPiece')['__setitem__'](0, 0);
		$p['getattr'](a, 'nextPiece')['__setitem__'](1, 0);
		$p['getattr'](a, 'nextPiece')['__setitem__'](2, 1);
		a['printInfo']();
		$p['getattr'](a, 'nextPiece')['__setitem__'](2, 1);
		SUBTRACT = false;
		b = $m['ab'](a, $m['CONSTS'], SUBTRACT)['__getitem__'](1);
		$p['printFunc']([$m['utility'](b, $m['CONSTS'], SUBTRACT)], 1);
		b['printInfo']();
		return null;
	};
	$m['test1']['__name__'] = 'test1';

	$m['test1']['__bind_type__'] = 0;
	$m['test1']['__args__'] = [null,null];
	$m['test2'] = function() {
		var a,b;
		a = $m['State']();
		$p['getattr'](a, 'nextPiece')['__setitem__'](0, 1);
		$p['getattr'](a, 'nextPiece')['__setitem__'](1, 1);
		a['printInfo']();
		b = $m['ab'](a, $m['CONSTS'])['__getitem__'](1);
		b['printInfo']();
		return null;
	};
	$m['test2']['__name__'] = 'test2';

	$m['test2']['__bind_type__'] = 0;
	$m['test2']['__args__'] = [null,null];
	$m['test3'] = function() {
		var a,b;
		a = $m['State']();
		$p['getattr'](a, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](1)['__getitem__'](0)['__setitem__']('cell', 1);
		$p['getattr'](a, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](0)['__getitem__'](0)['__setitem__']('cell', 2);
		$p['getattr'](a, 'nextPiece')['__setitem__'](0, 0);
		$p['getattr'](a, 'nextPiece')['__setitem__'](1, 0);
		$p['getattr'](a, 'nextPiece')['__setitem__'](2, 2);
		a['printInfo']();
		b = $m['ab'](a, $m['CONSTS'])['__getitem__'](1);
		b['printInfo']();
		return null;
	};
	$m['test3']['__name__'] = 'test3';

	$m['test3']['__bind_type__'] = 0;
	$m['test3']['__args__'] = [null,null];
	$m['getState'] = function() {
		var a;
		a = $m['State']();
		$p['getattr'](a, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](2)['__getitem__'](0)['__setitem__']('cell', 2);
		$p['getattr'](a, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](0)['__getitem__'](2)['__setitem__']('cell', 2);
		$p['getattr'](a, 'boards')['__getitem__'](0)['__getitem__'](0)['__getitem__'](1)['__getitem__'](2)['__setitem__']('cell', 1);
		a['nextPiece'] = $p['list']([0, 0, 1]);
		return null;
	};
	$m['getState']['__name__'] = 'getState';

	$m['getState']['__bind_type__'] = 0;
	$m['getState']['__args__'] = [null,null];
	return this;
}; /* end learning */


/* end module: learning */


/*
PYJS_DEPS: ['copy', 'os']
*/
