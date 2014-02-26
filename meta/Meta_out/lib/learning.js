/* start module: learning */
$pyjs['loaded_modules']['learning'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['learning']['__was_initialized__']) return $pyjs['loaded_modules']['learning'];
	var $m = $pyjs['loaded_modules']['learning'];
	$m['__repr__'] = function() { return '<module: learning>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'learning';
	$m['__name__'] = __mod_name__;


	$m['README'] = 'Welcome to meta_tic-tac-toe by Chet Weger\n\nThis program relies on the min-max algorithm with alpha beta\npruning as well as temporal difference learning to learn values\nfor a weighted utility function.\n\nThe weightings/constants for the utility function is stored in a\nfile called "td.txt". If you do not see such a file, you can\ntrain the AI with the command:\ntrainAI()\n\nYou can start a new game of meta_tic-tac-toe with:\nplayAI()';
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['copy'] = $p['___import___']('copy', null);
		$m['os'] = $p['___import___']('os', null);
		$m['CWD'] = $m['os']['getcwd']();
		$m['sys'] = $p['___import___']('sys', null);
		$m['subprocess'] = $p['___import___']('subprocess', null);
	}
	$m['DIMENSION'] = 3;
	$m['WAIT'] = 5;
	$m['userFirst'] = 1;
	$m['computerFirst'] = 2;
	$m['ALPHA'] = 0.005;
	$m['messageComputersTurn'] = "Computer's turn.";
	$m['messageChoosePlayer'] = 'Which player goes first? (1 = you, 2 = computer, 0 = stop) ';
	$m['messageGoodbye'] = 'Goodbye. Thanks for playing tic tac toe!.';
	$m['messageTryAgain'] = 'That is invalid. Please try again.';
	$m['messageUsersTurn'] = "User's turn.";
	$m['messageWelcome'] = 'Welcome to meta tic tac toe!';
	$m['messageYouWin'] = 'User wins.';
	$m['messageCompWin'] = 'Computer Wins';
	$m['train'] = function() {

		while ($p['bool'](true)) {
			(typeof trainAI == "undefined"?$m['trainAI']:trainAI)();
		}
		return null;
	};
	$m['train']['__name__'] = 'train';

	$m['train']['__bind_type__'] = 0;
	$m['train']['__args__'] = [null,null];
	$m['has_row'] = function(listDict) {
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
	$m['has_row']['__name__'] = 'has_row';

	$m['has_row']['__bind_type__'] = 0;
	$m['has_row']['__args__'] = [null,null,['listDict']];
	$m['is_win'] = function(board) {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,column,diagonal1,length,$iter1_iter,$iter2_idx,diagonal2,$iter1_array,$or2,board_Transpose,$iter2_type,row,$or1,$iter2_array;
		$iter1_iter = board;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			row = $iter1_nextval['$nextval'];
			if ($p['bool']($m['has_row'](row))) {
				return true;
			}
		}
		board_Transpose = $pyjs_kwargs_call(null, $p['zip'], board, null, [{}]);
		$iter2_iter = board_Transpose;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			column = $iter2_nextval['$nextval'];
			if ($p['bool']($m['has_row'](column))) {
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
		if ($p['bool'](($p['bool']($or1=$m['has_row'](diagonal1))?$or1:$m['has_row'](diagonal2)))) {
			return true;
		}
		return false;
	};
	$m['is_win']['__name__'] = 'is_win';

	$m['is_win']['__bind_type__'] = 0;
	$m['is_win']['__args__'] = [null,null,['board']];
	$m['is_full'] = function(board) {
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
	$m['is_full']['__name__'] = 'is_full';

	$m['is_full']['__bind_type__'] = 0;
	$m['is_full']['__args__'] = [null,null,['board']];
	$m['is_over'] = function(state) {
		var $iter8_idx,$and1,$iter7_nextval,$iter7_iter,$iter8_type,$iter7_array,$iter8_array,$iter8_iter,$iter8_nextval,rowBoards,$iter7_idx,$iter7_type,$and2,board;
		$iter7_iter = $p['getattr'](state, 'boards');
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
			rowBoards = $iter7_nextval['$nextval'];
			$iter8_iter = rowBoards;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				board = $iter8_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and1=!$p['bool']($m['is_win'](board)))?!$p['bool']($m['is_full'](board)):$and1))) {
					return false;
				}
			}
		}
		return 'asdf';
	};
	$m['is_over']['__name__'] = 'is_over';

	$m['is_over']['__bind_type__'] = 0;
	$m['is_over']['__args__'] = [null,null,['state']];
	$m['utility'] = function(state, constants) {
		var f1,f2,f3,f4,f5,f6,return_value,$mul1,$add10,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul12,$mul11,$mul10,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9;
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
		return_value = $p['__op_add']($add9=$p['__op_add']($add7=$p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=f1,$add2=f2),$add4=f3),$add6=f4),$add8=f5),$add10=f6);
		return (typeof ($usub1=return_value)=='number'?
			-$usub1:
			$p['op_usub']($usub1));
	};
	$m['utility']['__name__'] = 'utility';

	$m['utility']['__bind_type__'] = 0;
	$m['utility']['__args__'] = [null,null,['state'],['constants']];
	$m['sub_utility'] = function(state, constants) {
		var $mul17,f1,$mul15,$mul14,$mul13,f5,f6,$mul16,f2,$mul19,$mul18,f3,$mul20,f4,$mul24,$mul22,$mul23,$mul21;
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
	};
	$m['sub_utility']['__name__'] = 'sub_utility';

	$m['sub_utility']['__bind_type__'] = 0;
	$m['sub_utility']['__args__'] = [null,null,['state'],['constants']];
	$m['f1_score'] = function(state) {
		var MAX,$sub6,$sub5,MIN;
		MIN = $p['getattr'](state, 'MIN');
		MAX = $p['getattr'](state, 'MAX');
		return $p['__op_sub']($sub5=$p['getattr'](state, 'score')['__getitem__'](MIN),$sub6=$p['getattr'](state, 'score')['__getitem__'](MAX));
	};
	$m['f1_score']['__name__'] = 'f1_score';

	$m['f1_score']['__bind_type__'] = 0;
	$m['f1_score']['__args__'] = [null,null,['state']];
	$m['get_active'] = function(state) {
		var $iter10_nextval,$add11,$iter9_iter,$and4,$iter10_idx,$and3,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,active_boards,line_boards,$add12,$iter10_type,$iter10_iter,$iter9_array,board;
		active_boards = $p['list']([]);
		$iter9_iter = $p['getattr'](state, 'boards');
		$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
		while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
			line_boards = $iter9_nextval['$nextval'];
			$iter10_iter = line_boards;
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				board = $iter10_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and3=!$p['bool']($m['is_win'](board)))?!$p['bool']($m['is_full'](board)):$and3))) {
					active_boards = $p['__op_add']($add11=active_boards,$add12=$p['list']([board]));
				}
			}
		}
		return active_boards;
	};
	$m['get_active']['__name__'] = 'get_active';

	$m['get_active']['__bind_type__'] = 0;
	$m['get_active']['__args__'] = [null,null,['state']];
	$m['f2_center'] = function(state) {
		var center,MIN,$iter11_iter,$iter11_array,$iter11_type,$add16,$add14,$add15,$sub8,return_value,activeBoards,$add13,MAX,$iter11_nextval,$iter11_idx,$sub7,board;
		MIN = $p['getattr'](state, 'MIN');
		MAX = $p['getattr'](state, 'MAX');
		center = $p['dict']([[MIN, 0], [MAX, 0]]);
		activeBoards = $m['get_active'](state);
		$iter11_iter = activeBoards;
		$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
		while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
			board = $iter11_nextval['$nextval'];
			if ($p['bool']($p['op_eq'](board['__getitem__'](1)['__getitem__'](1)['__getitem__']('cell'), $p['float_int'](MIN)))) {
				center['__setitem__'](MIN, $p['__op_add']($add13=center['__getitem__'](MIN),$add14=1));
			}
			else if ($p['bool']($p['op_eq'](board['__getitem__'](1)['__getitem__'](1)['__getitem__']('cell'), $p['float_int'](MAX)))) {
				center['__setitem__'](MAX, $p['__op_add']($add15=center['__getitem__'](MAX),$add16=1));
			}
		}
		return_value = $p['__op_sub']($sub7=center['__getitem__'](MIN),$sub8=center['__getitem__'](MAX));
		return return_value;
	};
	$m['f2_center']['__name__'] = 'f2_center';

	$m['f2_center']['__bind_type__'] = 0;
	$m['f2_center']['__args__'] = [null,null,['state']];
	$m['f3_corner'] = function(state) {
		var MIN,cornerCount,$iter13_idx,corner,$add20,$sub9,board,$iter13_array,$sub10,$iter12_array,$add17,activeBoards,$add18,$add19,$iter13_nextval,$iter13_iter,MAX,$iter12_type,$iter13_type,$iter12_iter,corners,$iter12_idx,$iter12_nextval;
		MIN = $p['getattr'](state, 'MIN');
		MAX = $p['getattr'](state, 'MAX');
		cornerCount = $p['dict']([[MIN, 0], [MAX, 0]]);
		activeBoards = $m['get_active'](state);
		$iter12_iter = activeBoards;
		$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
		while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
			board = $iter12_nextval['$nextval'];
			corners = $p['list']([board['__getitem__'](0)['__getitem__'](0), board['__getitem__'](0)['__getitem__'](2), board['__getitem__'](2)['__getitem__'](0), board['__getitem__'](2)['__getitem__'](2)]);
			$iter13_iter = corners;
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				corner = $iter13_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](corner['__getitem__']('cell'), $p['float_int'](MIN)))) {
					cornerCount['__setitem__'](MIN, $p['__op_add']($add17=cornerCount['__getitem__'](MIN),$add18=1));
				}
				else if ($p['bool']($p['op_eq'](corner['__getitem__']('cell'), $p['float_int'](MAX)))) {
					cornerCount['__setitem__'](MAX, $p['__op_add']($add19=cornerCount['__getitem__'](MAX),$add20=1));
				}
			}
		}
		return $p['__op_sub']($sub9=cornerCount['__getitem__'](MIN),$sub10=cornerCount['__getitem__'](MAX));
	};
	$m['f3_corner']['__name__'] = 'f3_corner';

	$m['f3_corner']['__bind_type__'] = 0;
	$m['f3_corner']['__args__'] = [null,null,['state']];
	$m['f4_side'] = function(state) {
		var $add22,sideCount,$iter15_iter,$add21,$add23,MIN,$add24,board,$iter14_array,$iter14_type,$sub12,$sub11,$iter15_array,activeBoards,$iter14_iter,sides,$iter14_idx,$iter14_nextval,MAX,$iter15_idx,$iter15_nextval,$iter15_type,side;
		MIN = $p['getattr'](state, 'MIN');
		MAX = $p['getattr'](state, 'MAX');
		sideCount = $p['dict']([[MIN, 0], [MAX, 0]]);
		activeBoards = $m['get_active'](state);
		$iter14_iter = activeBoards;
		$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
		while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
			board = $iter14_nextval['$nextval'];
			sides = $p['list']([board['__getitem__'](1)['__getitem__'](0), board['__getitem__'](0)['__getitem__'](1), board['__getitem__'](1)['__getitem__'](2), board['__getitem__'](2)['__getitem__'](1)]);
			$iter15_iter = sides;
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				side = $iter15_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](side['__getitem__']('cell'), $p['float_int'](MIN)))) {
					sideCount['__setitem__'](MIN, $p['__op_add']($add21=sideCount['__getitem__'](MIN),$add22=1));
				}
				else if ($p['bool']($p['op_eq'](side['__getitem__']('cell'), $p['float_int'](MAX)))) {
					sideCount['__setitem__'](MAX, $p['__op_add']($add23=sideCount['__getitem__'](MAX),$add24=1));
				}
			}
		}
		return $p['__op_sub']($sub11=sideCount['__getitem__'](MIN),$sub12=sideCount['__getitem__'](MAX));
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
		var $iter16_array,$iter17_nextval,$iter17_iter,i,$iter16_type,$add28,newList,$add25,$add27,$add26,$iter16_idx,$iter17_array,board,$iter17_type,$iter16_nextval,newBoard,$iter16_iter,$iter17_idx;
		newList = $p['list']([]);
		$iter16_iter = lBoards;
		$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
		while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
			board = $iter16_nextval['$nextval'];
			newBoard = $p['list']([]);
			$iter17_iter = $p['range']($m['DIMENSION']);
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				i = $iter17_nextval['$nextval'];
				newBoard = $p['__op_add']($add25=newBoard,$add26=$p['list']([function(){
					var $iter18_type,$iter18_iter,$iter18_array,j,$collcomp3,$iter18_idx,$iter18_nextval;
	$collcomp3 = $p['list']();
				$iter18_iter = $p['range']($m['DIMENSION']);
				$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
				while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
					j = $iter18_nextval['$nextval'];
					$collcomp3['append'](board['__getitem__'](j)['__getitem__'](i));
				}

	return $collcomp3;}()]));
			}
			newList = $p['__op_add']($add27=newList,$add28=$p['list']([newBoard]));
		}
		return newList;
	};
	$m['transposeBoards']['__name__'] = 'transposeBoards';

	$m['transposeBoards']['__bind_type__'] = 0;
	$m['transposeBoards']['__args__'] = [null,null,['lBoards']];
	$m['getAllBoards'] = function(state) {
		var $add29,$iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$iter19_type,$add30,board,$iter19_nextval,$iter19_array,$iter19_iter,active_boards,line_boards,$iter20_type,$iter20_array;
		active_boards = $p['list']([]);
		$iter19_iter = $p['getattr'](state, 'boards');
		$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
		while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
			line_boards = $iter19_nextval['$nextval'];
			$iter20_iter = line_boards;
			$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
			while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
				board = $iter20_nextval['$nextval'];
				active_boards = $p['__op_add']($add29=active_boards,$add30=$p['list']([board]));
			}
		}
		return active_boards;
	};
	$m['getAllBoards']['__name__'] = 'getAllBoards';

	$m['getAllBoards']['__bind_type__'] = 0;
	$m['getAllBoards']['__args__'] = [null,null,['state']];
	$m['f5_blocking'] = function(inputState) {
		var $iter23_type,$iter22_array,MIN,$iter26_nextval,$add37,$iter26_idx,$iter23_idx,$iter22_type,$iter26_array,row,$iter23_iter,$add40,$iter26_type,state,diagonal2,board,diagonal1,$iter26_iter,$iter22_iter,$iter21_idx,$sub18,$sub17,$iter21_nextval,$iter22_nextval,$iter21_iter,$iter23_array,activeBoards,activeBoardsTranspose,blocking,getBlock,$add38,$add39,$iter23_nextval,$add32,MAX,$add31,$add36,$iter22_idx,$add34,$add35,$iter21_type,$iter21_array,$add33,getblock;
		state = (typeof State == "undefined"?$m['State']:State)();
		state['copyThis'](inputState);
		MIN = $p['getattr'](state, 'MIN');
		MAX = $p['getattr'](state, 'MAX');
		blocking = $p['dict']([['1', 0], ['2', 0]]);
		activeBoards = $m['getAllBoards'](state);
		activeBoardsTranspose = $m['transposeBoards'](activeBoards);
		$iter21_iter = activeBoards;
		$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
		while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
			board = $iter21_nextval['$nextval'];
			$iter22_iter = board;
			$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
			while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
				row = $iter22_nextval['$nextval'];
				getblock = $m['hasBlock'](row);
				if ($p['bool']($p['op_eq'](getblock, MAX))) {
					blocking['__setitem__'](MAX, $p['__op_add']($add31=blocking['__getitem__'](MAX),$add32=1));
				}
				else if ($p['bool']($p['op_eq'](getblock, MIN))) {
					blocking['__setitem__'](MIN, $p['__op_add']($add33=blocking['__getitem__'](MIN),$add34=1));
				}
			}
		}
		$iter23_iter = activeBoardsTranspose;
		$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
		while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
			board = $iter23_nextval['$nextval'];
			diagonal1 = function(){
				var $iter24_idx,i,$collcomp4,$iter24_type,$iter24_array,$iter24_iter,$iter24_nextval;
	$collcomp4 = $p['list']();
			$iter24_iter = $p['range']($m['DIMENSION']);
			$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
			while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
				i = $iter24_nextval['$nextval'];
				$collcomp4['append'](board['__getitem__'](i)['__getitem__'](i));
			}

	return $collcomp4;}();
			diagonal2 = function(){
				var $iter25_nextval,i,$collcomp5,$sub16,$iter25_iter,$sub14,$sub13,$sub15,$iter25_idx,$iter25_type,$iter25_array;
	$collcomp5 = $p['list']();
			$iter25_iter = $p['range']($m['DIMENSION']);
			$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
			while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
				i = $iter25_nextval['$nextval'];
				$collcomp5['append'](board['__getitem__'](i)['__getitem__']($p['__op_sub']($sub15=$p['__op_sub']($sub13=$m['DIMENSION'],$sub14=i),$sub16=1)));
			}

	return $collcomp5;}();
			board = $p['list'](board);
			board = $p['__op_add']($add35=board,$add36=$p['list']([diagonal1, diagonal2]));
			$iter26_iter = board;
			$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
			while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
				row = $iter26_nextval['$nextval'];
				getBlock = $m['hasBlock'](row);
				if ($p['bool']($p['op_eq'](getBlock, MAX))) {
					blocking['__setitem__'](MAX, $p['__op_add']($add37=blocking['__getitem__'](MAX),$add38=1));
				}
				else if ($p['bool']($p['op_eq'](getBlock, MIN))) {
					blocking['__setitem__'](MIN, $p['__op_add']($add39=blocking['__getitem__'](MIN),$add40=1));
				}
			}
		}
		return $p['__op_sub']($sub17=blocking['__getitem__'](MIN),$sub18=blocking['__getitem__'](MAX));
	};
	$m['f5_blocking']['__name__'] = 'f5_blocking';

	$m['f5_blocking']['__bind_type__'] = 0;
	$m['f5_blocking']['__args__'] = [null,null,['inputState']];
	$m['f6_potential'] = function(inputState) {
		var $sub23,$iter32_idx,getPot,$sub24,MIN,$iter28_idx,$iter32_iter,$iter29_type,row,$iter27_nextval,getpot,$add49,$add48,$iter27_array,$add46,$add45,$add44,$add43,$add42,$add41,$iter32_type,state,potential,$iter27_iter,board,$iter32_array,diagonal1,diagonal2,$iter27_type,$add47,$iter32_nextval,$iter29_nextval,activeBoards,activeBoardsTranspose,$iter28_iter,$iter28_type,$add50,$iter28_array,MAX,$iter28_nextval,$iter27_idx,$iter29_array,$iter29_idx,$iter29_iter;
		state = (typeof State == "undefined"?$m['State']:State)();
		state['copyThis'](inputState);
		MIN = $p['getattr'](state, 'MIN');
		MAX = $p['getattr'](state, 'MAX');
		potential = $p['dict']([['1', 0], ['2', 0]]);
		activeBoards = $m['get_active'](state);
		activeBoardsTranspose = $m['transposeBoards'](activeBoards);
		$iter27_iter = activeBoards;
		$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
		while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
			board = $iter27_nextval['$nextval'];
			$iter28_iter = board;
			$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
			while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
				row = $iter28_nextval['$nextval'];
				getpot = $m['hasPotential'](row);
				if ($p['bool']($p['op_eq'](getpot, MAX))) {
					potential['__setitem__'](MAX, $p['__op_add']($add41=potential['__getitem__'](MAX),$add42=1));
				}
				else if ($p['bool']($p['op_eq'](getpot, MIN))) {
					potential['__setitem__'](MIN, $p['__op_add']($add43=potential['__getitem__'](MIN),$add44=1));
				}
			}
		}
		$iter29_iter = activeBoardsTranspose;
		$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
		while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
			board = $iter29_nextval['$nextval'];
			diagonal1 = function(){
				var $iter30_type,$iter30_nextval,$iter30_iter,$collcomp6,i,$iter30_array,$iter30_idx;
	$collcomp6 = $p['list']();
			$iter30_iter = $p['range']($m['DIMENSION']);
			$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
			while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
				i = $iter30_nextval['$nextval'];
				$collcomp6['append'](board['__getitem__'](i)['__getitem__'](i));
			}

	return $collcomp6;}();
			diagonal2 = function(){
				var $sub22,$sub19,$sub21,$iter31_array,$collcomp7,$iter31_nextval,$iter31_idx,i,$sub20,$iter31_type,$iter31_iter;
	$collcomp7 = $p['list']();
			$iter31_iter = $p['range']($m['DIMENSION']);
			$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
			while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
				i = $iter31_nextval['$nextval'];
				$collcomp7['append'](board['__getitem__'](i)['__getitem__']($p['__op_sub']($sub21=$p['__op_sub']($sub19=$m['DIMENSION'],$sub20=i),$sub22=1)));
			}

	return $collcomp7;}();
			board = $p['list'](board);
			board = $p['__op_add']($add45=board,$add46=$p['list']([diagonal1, diagonal2]));
			$iter32_iter = board;
			$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
			while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
				row = $iter32_nextval['$nextval'];
				getPot = $m['hasPotential'](row);
				if ($p['bool']($p['op_eq'](getPot, MAX))) {
					potential['__setitem__'](MAX, $p['__op_add']($add47=potential['__getitem__'](MAX),$add48=1));
				}
				else if ($p['bool']($p['op_eq'](getPot, MIN))) {
					potential['__setitem__'](MIN, $p['__op_add']($add49=potential['__getitem__'](MIN),$add50=1));
				}
			}
		}
		return $p['__op_sub']($sub23=potential['__getitem__'](MIN),$sub24=potential['__getitem__'](MAX));
	};
	$m['f6_potential']['__name__'] = 'f6_potential';

	$m['f6_potential']['__bind_type__'] = 0;
	$m['f6_potential']['__args__'] = [null,null,['inputState']];
	$m['min_search'] = function(state, depth, depth_limit, alpha, beta, constants) {
		var $add52,next_value,$or3,$or4,s,value,highest_so_far,nextS,$add51,gen;
		value = (typeof Util == "undefined"?$m['Util']:Util)(9001.0, (typeof State == "undefined"?$m['State']:State)());
		s = (typeof State == "undefined"?$m['State']:State)();
		gen = state['genChildren'](s);
		nextS = gen['next']();
		if ($p['bool'](($p['bool']($or3=$p['op_eq'](depth, depth_limit))?$or3:$p['op_eq'](nextS, null)))) {
			return (typeof Util == "undefined"?$m['Util']:Util)($m['utility'](state, constants), state);
		}
		highest_so_far = (typeof State == "undefined"?$m['State']:State)();
		while ($p['bool'](!$p['op_eq'](nextS, null))) {
			highest_so_far['copyThis'](nextS);
			next_value = (typeof max_search == "undefined"?$m['max_search']:max_search)(highest_so_far, $p['__op_add']($add51=depth,$add52=1), depth_limit, alpha, beta, constants);
			value = (typeof min_util == "undefined"?$m['min_util']:min_util)($p['list']([value, next_value]));
			if (!( $p['op_eq']($p['type'](value), $p['type'](alpha)) )) {
			   throw $p['AssertionError']();
			 }
			if ($p['bool'](($p['cmp']($p['getattr'](value, 'value'), $p['getattr'](alpha, 'value')) < 1))) {
				return (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub8=9001.0)=='number'?
					-$usub8:
					$p['op_usub']($usub8)), (typeof State == "undefined"?$m['State']:State)());
			}
			beta = (typeof min_util == "undefined"?$m['min_util']:min_util)($p['list']([beta, value]));
			nextS = gen['next']();
		}
		return value;
	};
	$m['min_search']['__name__'] = 'min_search';

	$m['min_search']['__bind_type__'] = 0;
	$m['min_search']['__args__'] = [null,null,['state'],['depth'],['depth_limit'],['alpha'],['beta'],['constants']];
	$m['get_max'] = function(copy_to_me, choice1, choice2) {

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
		var $iter33_iter,$iter33_nextval,$iter33_type,util,max_u,$iter33_idx,$iter33_array;
		max_u = (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub9=102323)=='number'?
			-$usub9:
			$p['op_usub']($usub9)), null);
		$iter33_iter = utils;
		$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
		while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
			util = $iter33_nextval['$nextval'];
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
		var $iter34_nextval,$iter34_array,util,$iter34_idx,max_u,$iter34_iter,$iter34_type;
		max_u = (typeof Util == "undefined"?$m['Util']:Util)(102323, null);
		$iter34_iter = utils;
		$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
		while (typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
			util = $iter34_nextval['$nextval'];
			if ($p['bool'](($p['cmp']($p['getattr'](util, 'value'), $p['getattr'](max_u, 'value')) == -1))) {
				max_u = util;
			}
		}
		return max_u;
	};
	$m['min_util']['__name__'] = 'min_util';

	$m['min_util']['__bind_type__'] = 0;
	$m['min_util']['__args__'] = [null,null,['utils']];
	$m['max_search'] = function(state, depth, depth_limit, a, b, constants) {
		var $add55,$add56,$add57,$add58,s,value,highest_so_far,$add53,min_h,nextS,$add54,gen;
		value = (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub10=9001.0)=='number'?
			-$usub10:
			$p['op_usub']($usub10)), (typeof State == "undefined"?$m['State']:State)());
		s = (typeof State == "undefined"?$m['State']:State)();
		gen = state['genChildren'](s);
		nextS = gen['next']();
		if ($p['bool']($p['op_eq'](depth, depth_limit))) {
			return (typeof Util == "undefined"?$m['Util']:Util)($m['utility'](state, constants), state);
		}
		if ($p['bool'](!$p['bool'](nextS))) {
			return (typeof Util == "undefined"?$m['Util']:Util)($m['utility'](state, constants), state);
		}
		if ($p['bool']($p['op_eq'](depth, 0))) {
			highest_so_far = (typeof State == "undefined"?$m['State']:State)();
			highest_so_far['copyThis'](nextS);
			min_h = $m['min_search'](nextS, $p['__op_add']($add53=depth,$add54=1), depth_limit, a, b, constants);
			value = $p['list']([min_h, highest_so_far]);
			while ($p['bool'](!$p['op_eq'](nextS, null))) {
				min_h = $m['min_search'](nextS, $p['__op_add']($add55=depth,$add56=1), depth_limit, a, b, constants);
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
			highest_so_far = (typeof State == "undefined"?$m['State']:State)();
			while ($p['bool'](!$p['op_eq'](nextS, null))) {
				highest_so_far['copyThis'](nextS);
				value = $m['max_util']($p['list']([value, $m['min_search'](highest_so_far, $p['__op_add']($add57=depth,$add58=1), depth_limit, a, b, constants)]));
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
	$m['max_search']['__name__'] = 'max_search';

	$m['max_search']['__bind_type__'] = 0;
	$m['max_search']['__args__'] = [null,null,['state'],['depth'],['depth_limit'],['a'],['b'],['constants']];
	$m['ab'] = function(state, constants, depth_limit) {
		if (typeof depth_limit == 'undefined') depth_limit=arguments['callee']['__args__'][4][1];
		var beta,alpha,next_state;
		alpha = (typeof Util == "undefined"?$m['Util']:Util)((typeof ($usub11=9005.0)=='number'?
			-$usub11:
			$p['op_usub']($usub11)), (typeof State == "undefined"?$m['State']:State)());
		beta = (typeof Util == "undefined"?$m['Util']:Util)(9005.0, (typeof State == "undefined"?$m['State']:State)());
		state['MAX'] = $p['str']($p['getattr'](state, 'next_piece')['__getitem__'](2));
		state['MIN'] = $p['str']((typeof turn == "undefined"?$m['turn']:turn)($p['getattr'](state, 'next_piece')['__getitem__'](2)));
		next_state = $m['max_search'](state, 0, depth_limit, alpha, beta, constants);
		return next_state;
	};
	$m['ab']['__name__'] = 'ab';

	$m['ab']['__bind_type__'] = 0;
	$m['ab']['__args__'] = [null,null,['state'],['constants'],['depth_limit', 6]];
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
				var y_board,$iter35_idx,$iter35_nextval,$collcomp8,$iter35_type,$iter35_array,$iter35_iter;
	$collcomp8 = $p['list']();
			$iter35_iter = $p['range']($m['DIMENSION']);
			$iter35_nextval=$p['__iter_prepare']($iter35_iter,false);
			while (typeof($p['__wrapped_next']($iter35_nextval)['$nextval']) != 'undefined') {
				y_board = $iter35_nextval['$nextval'];
				$collcomp8['append'](function(){
					var $collcomp9,$iter36_nextval,$iter36_array,$iter36_iter,$iter36_idx,$iter36_type,x_board;
	$collcomp9 = $p['list']();
				$iter36_iter = $p['range']($m['DIMENSION']);
				$iter36_nextval=$p['__iter_prepare']($iter36_iter,false);
				while (typeof($p['__wrapped_next']($iter36_nextval)['$nextval']) != 'undefined') {
					x_board = $iter36_nextval['$nextval'];
					$collcomp9['append'](function(){
						var $iter37_idx,$iter37_type,$iter37_array,$collcomp10,y,$iter37_iter,$iter37_nextval;
	$collcomp10 = $p['list']();
					$iter37_iter = $p['range']($m['DIMENSION']);
					$iter37_nextval=$p['__iter_prepare']($iter37_iter,false);
					while (typeof($p['__wrapped_next']($iter37_nextval)['$nextval']) != 'undefined') {
						y = $iter37_nextval['$nextval'];
						$collcomp10['append'](function(){
							var $iter38_iter,$iter38_idx,$iter38_nextval,$collcomp11,x,$iter38_type,$iter38_array;
	$collcomp11 = $p['list']();
						$iter38_iter = $p['range']($m['DIMENSION']);
						$iter38_nextval=$p['__iter_prepare']($iter38_iter,false);
						while (typeof($p['__wrapped_next']($iter38_nextval)['$nextval']) != 'undefined') {
							x = $iter38_nextval['$nextval'];
							$collcomp11['append']($p['dict']([['cell', 0], ['x', x], ['y', y], ['x_board', x_board], ['y_board', y_board]]));
						}

	return $collcomp11;}());
					}

	return $collcomp10;}());
				}

	return $collcomp9;}());
			}

	return $collcomp8;}();
			self['next_piece'] = $p['list']([1, 1, 1]);
			self['score'] = $p['dict']([['1', 0], ['2', 0]]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isUnoccupied', function(y, x) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
				x = arguments[2];
			}

			return $p['op_eq']($p['getattr'](self, 'boards')['__getitem__']($p['getattr'](self, 'next_piece')['__getitem__'](0))['__getitem__']($p['getattr'](self, 'next_piece')['__getitem__'](1))['__getitem__'](y)['__getitem__'](x)['__getitem__']('cell'), 0);
		}
	, 1, [null,null,['self'],['y'],['x']]);
		$cls_definition['isUnoccupied'] = $method;
		$method = $pyjs__bind_method2('printer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter43_type,$iter43_iter,$iter41_idx,$iter45_type,$iter42_array,$iter45_idx,$iter41_type,$mod1,$iter41_nextval,$mod2,$iter41_iter,printRows,$add65,$add64,$iter43_idx,$iter42_idx,$add61,$pow2,$pow1,$add62,$add69,$iter42_nextval,$add68,$iter42_type,board,$mul29,$mul26,$mul25,$iter41_array,$pow4,$add63,$add67,row,$iter45_nextval,$add66,rowBoards,$iter45_array,$pow3,buf,$add60,$iter45_iter,$iter43_array,$add70,i,$add59,j,$iter42_iter,length,$iter43_nextval,$mul31,$mul30,$mul32;
			length = $p['__op_add']($add59=(typeof ($mul25=(typeof ($pow1=$m['DIMENSION'])==typeof ($pow2=2) && typeof $pow1=='number'?
				Math['pow']($pow1,$pow2):
				$p['op_pow']($pow1,$pow2)))==typeof ($mul26=4) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26)),$add60=1);
			buf = function(){
				var $iter39_idx,$iter39_type,$iter39_array,$iter39_nextval,$collcomp12,$iter39_iter,x;
	$collcomp12 = $p['list']();
			$iter39_iter = $p['range'](length);
			$iter39_nextval=$p['__iter_prepare']($iter39_iter,false);
			while (typeof($p['__wrapped_next']($iter39_nextval)['$nextval']) != 'undefined') {
				x = $iter39_nextval['$nextval'];
				$collcomp12['append']('-');
			}

	return $collcomp12;}();
			buf = ''['join'](buf);
			printRows = function(){
				var $iter40_type,$iter40_iter,col,$collcomp13,$iter40_array,$mul28,$mul27,$iter40_nextval,$iter40_idx;
	$collcomp13 = $p['list']();
			$iter40_iter = $p['range']((typeof ($mul27=$m['DIMENSION'])==typeof ($mul28=$m['DIMENSION']) && typeof $mul27=='number'?
				$mul27*$mul28:
				$p['op_mul']($mul27,$mul28)));
			$iter40_nextval=$p['__iter_prepare']($iter40_iter,false);
			while (typeof($p['__wrapped_next']($iter40_nextval)['$nextval']) != 'undefined') {
				col = $iter40_nextval['$nextval'];
				$collcomp13['append']('|');
			}

	return $collcomp13;}();
			$iter41_iter = $p['zip']($p['getattr'](self, 'boards'), $p['range']($m['DIMENSION']));
			$iter41_nextval=$p['__iter_prepare']($iter41_iter,false);
			while (typeof($p['__wrapped_next']($iter41_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter41_nextval['$nextval'], 2, null);
				rowBoards = $tupleassign1[0];
				i = $tupleassign1[1];
				$iter42_iter = rowBoards;
				$iter42_nextval=$p['__iter_prepare']($iter42_iter,false);
				while (typeof($p['__wrapped_next']($iter42_nextval)['$nextval']) != 'undefined') {
					board = $iter42_nextval['$nextval'];
					$iter43_iter = $p['zip'](board, $p['range']($m['DIMENSION']));
					$iter43_nextval=$p['__iter_prepare']($iter43_iter,false);
					while (typeof($p['__wrapped_next']($iter43_nextval)['$nextval']) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter43_nextval['$nextval'], 2, null);
						row = $tupleassign2[0];
						j = $tupleassign2[1];
						printRows['__setitem__']($p['__op_add']($add69=(typeof ($mul31=i)==typeof ($mul32=$m['DIMENSION']) && typeof $mul31=='number'?
							$mul31*$mul32:
							$p['op_mul']($mul31,$mul32)),$add70=j), $p['__op_add']($add67=$p['__op_add']($add65=$p['__op_add']($add63=printRows['__getitem__']($p['__op_add']($add61=(typeof ($mul29=i)==typeof ($mul30=$m['DIMENSION']) && typeof $mul29=='number'?
							$mul29*$mul30:
							$p['op_mul']($mul29,$mul30)),$add62=j)),$add64=' '),$add66=$p['str'](function(){
							var $iter44_idx,$iter44_type,$iter44_array,$iter44_iter,$collcomp14,$iter44_nextval,x;
	$collcomp14 = $p['list']();
						$iter44_iter = row;
						$iter44_nextval=$p['__iter_prepare']($iter44_iter,false);
						while (typeof($p['__wrapped_next']($iter44_nextval)['$nextval']) != 'undefined') {
							x = $iter44_nextval['$nextval'];
							$collcomp14['append'](x['__getitem__']('cell'));
						}

	return $collcomp14;}())),$add68=' |'));
					}
				}
			}
			$iter45_iter = $p['zip']($p['range']((typeof ($pow3=$m['DIMENSION'])==typeof ($pow4=2) && typeof $pow3=='number'?
				Math['pow']($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))), printRows);
			$iter45_nextval=$p['__iter_prepare']($iter45_iter,false);
			while (typeof($p['__wrapped_next']($iter45_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter45_nextval['$nextval'], 2, null);
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
			return '';
		}
	, 1, [null,null,['self']]);
		$cls_definition['printer'] = $method;
		$method = $pyjs__bind_method2('printerComplicated', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add82,$add81,$add80,$iter49_array,$mod4,$mod3,$add79,printRows,$pow7,$pow6,$pow5,$iter51_array,$iter48_nextval,$iter50_idx,$iter48_iter,$mul40,$iter51_iter,$iter51_nextval,$pow8,$iter49_iter,board,$iter50_nextval,row,$iter49_idx,$iter49_nextval,$iter48_type,$iter48_idx,rowBoards,$iter51_idx,buf,$mul37,$iter50_iter,$add76,$add77,$add74,$add75,$add72,$add73,$add71,i,j,$iter50_type,$add78,$iter48_array,length,$mul39,$mul38,$mul34,$iter50_array,$iter49_type,$mul33,$iter51_type;
			length = $p['__op_add']($add71=(typeof ($mul33=(typeof ($pow5=$m['DIMENSION'])==typeof ($pow6=2) && typeof $pow5=='number'?
				Math['pow']($pow5,$pow6):
				$p['op_pow']($pow5,$pow6)))==typeof ($mul34=8) && typeof $mul33=='number'?
				$mul33*$mul34:
				$p['op_mul']($mul33,$mul34)),$add72=3);
			buf = function(){
				var $iter46_array,$iter46_iter,$iter46_nextval,$collcomp15,$iter46_idx,x,$iter46_type;
	$collcomp15 = $p['list']();
			$iter46_iter = $p['range'](length);
			$iter46_nextval=$p['__iter_prepare']($iter46_iter,false);
			while (typeof($p['__wrapped_next']($iter46_nextval)['$nextval']) != 'undefined') {
				x = $iter46_nextval['$nextval'];
				$collcomp15['append']('-');
			}

	return $collcomp15;}();
			buf = ''['join'](buf);
			printRows = function(){
				var $iter47_idx,$iter47_type,$collcomp16,$iter47_nextval,$mul35,$iter47_array,$mul36,col,$iter47_iter;
	$collcomp16 = $p['list']();
			$iter47_iter = $p['range']((typeof ($mul35=$m['DIMENSION'])==typeof ($mul36=$m['DIMENSION']) && typeof $mul35=='number'?
				$mul35*$mul36:
				$p['op_mul']($mul35,$mul36)));
			$iter47_nextval=$p['__iter_prepare']($iter47_iter,false);
			while (typeof($p['__wrapped_next']($iter47_nextval)['$nextval']) != 'undefined') {
				col = $iter47_nextval['$nextval'];
				$collcomp16['append']('|');
			}

	return $collcomp16;}();
			$iter48_iter = $p['zip']($p['getattr'](self, 'boards'), $p['range']($m['DIMENSION']));
			$iter48_nextval=$p['__iter_prepare']($iter48_iter,false);
			while (typeof($p['__wrapped_next']($iter48_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter48_nextval['$nextval'], 2, null);
				rowBoards = $tupleassign4[0];
				i = $tupleassign4[1];
				$iter49_iter = rowBoards;
				$iter49_nextval=$p['__iter_prepare']($iter49_iter,false);
				while (typeof($p['__wrapped_next']($iter49_nextval)['$nextval']) != 'undefined') {
					board = $iter49_nextval['$nextval'];
					$iter50_iter = $p['zip'](board, $p['range']($m['DIMENSION']));
					$iter50_nextval=$p['__iter_prepare']($iter50_iter,false);
					while (typeof($p['__wrapped_next']($iter50_nextval)['$nextval']) != 'undefined') {
						var $tupleassign5 = $p['__ass_unpack']($iter50_nextval['$nextval'], 2, null);
						row = $tupleassign5[0];
						j = $tupleassign5[1];
						printRows['__setitem__']($p['__op_add']($add81=(typeof ($mul39=i)==typeof ($mul40=$m['DIMENSION']) && typeof $mul39=='number'?
							$mul39*$mul40:
							$p['op_mul']($mul39,$mul40)),$add82=j), $p['__op_add']($add79=$p['__op_add']($add77=$p['__op_add']($add75=printRows['__getitem__']($p['__op_add']($add73=(typeof ($mul37=i)==typeof ($mul38=$m['DIMENSION']) && typeof $mul37=='number'?
							$mul37*$mul38:
							$p['op_mul']($mul37,$mul38)),$add74=j)),$add76=' '),$add78=$p['str'](row)),$add80=' |'));
					}
				}
			}
			$iter51_iter = $p['zip']($p['range']((typeof ($pow7=$m['DIMENSION'])==typeof ($pow8=2) && typeof $pow7=='number'?
				Math['pow']($pow7,$pow8):
				$p['op_pow']($pow7,$pow8))), printRows);
			$iter51_nextval=$p['__iter_prepare']($iter51_iter,false);
			while (typeof($p['__wrapped_next']($iter51_nextval)['$nextval']) != 'undefined') {
				var $tupleassign6 = $p['__ass_unpack']($iter51_nextval['$nextval'], 2, null);
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

			$p['printFunc'](['boards are:\n', self['printer'](), 'You are playing into board column', $p['getattr'](self, 'next_piece')['__getitem__'](1), 'row', $p['getattr'](self, 'next_piece')['__getitem__'](0), '\nNext player is ', $p['getattr'](self, 'next_piece')['__getitem__'](2)], 1);
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
			var $iter53_idx,$iter52_nextval,$iter52_array,$iter52_iter,$iter55_nextval,$iter55_iter,$iter54_idx,$iter55_type,$iter53_nextval,$iter54_nextval,x_board,$iter54_type,$iter53_type,$iter54_iter,$iter53_array,$iter52_type,$iter55_array,$iter52_idx,y_board,$iter55_idx,$iter54_array,$iter53_iter,rangeBoards,y,x;
			rangeBoards = $p['range']($p['len']($p['getattr'](otherState, 'boards')));
			$iter52_iter = rangeBoards;
			$iter52_nextval=$p['__iter_prepare']($iter52_iter,false);
			while (typeof($p['__wrapped_next']($iter52_nextval)['$nextval']) != 'undefined') {
				y_board = $iter52_nextval['$nextval'];
				$iter53_iter = rangeBoards;
				$iter53_nextval=$p['__iter_prepare']($iter53_iter,false);
				while (typeof($p['__wrapped_next']($iter53_nextval)['$nextval']) != 'undefined') {
					x_board = $iter53_nextval['$nextval'];
					$iter54_iter = rangeBoards;
					$iter54_nextval=$p['__iter_prepare']($iter54_iter,false);
					while (typeof($p['__wrapped_next']($iter54_nextval)['$nextval']) != 'undefined') {
						y = $iter54_nextval['$nextval'];
						$iter55_iter = rangeBoards;
						$iter55_nextval=$p['__iter_prepare']($iter55_iter,false);
						while (typeof($p['__wrapped_next']($iter55_nextval)['$nextval']) != 'undefined') {
							x = $iter55_nextval['$nextval'];
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
			self['next_piece'] = $p['__getslice']($p['getattr'](other, 'next_piece'), 0, 3);
			$p['getattr'](self, 'score')['__setitem__']('1', $p['getattr'](other, 'score')['__getitem__']('1'));
			$p['getattr'](self, 'score')['__setitem__']('2', $p['getattr'](other, 'score')['__getitem__']('2'));
			self['MAX'] = $p['getattr'](other, 'MAX');
			self['MIN'] = $p['getattr'](other, 'MIN');
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
			var $add89,$add88,$iter61_type,$add83,$iter64_iter,$iter60_array,$add87,$add86,$add85,$add84,$iter61_iter,$iter63_array,$iter66_iter,$iter65_array,$iter67_idx,$augexpr1,$augexpr3,$augexpr2,$augexpr4,$augsub4,$augsub3,$augsub2,$augsub1,$iter56_iter,$iter58_idx,$iter58_nextval,dL,d,$iter65_idx,$iter59_type,$iter64_idx,$iter66_type,$iter62_nextval,$iter56_idx,$iter61_idx,$iter66_nextval,$iter57_iter,$iter67_iter,$iter60_type,$iter65_type,$iter62_idx,$iter65_nextval,$iter59_array,$iter56_nextval,$iter58_iter,$iter63_iter,c,bL,$iter59_nextval,$iter56_array,$iter62_array,$iter64_nextval,$iter57_idx,cL,$iter67_type,$iter64_type,$iter60_nextval,$iter67_nextval,$iter58_array,$iter56_type,$iter66_idx,$iter62_type,b,$iter57_type,$iter59_idx,$iter57_nextval,$iter66_array,$iter61_array,$iter67_array,$iter64_array,nP,$iter61_nextval,$iter59_iter,aL,$iter60_idx,$or5,$or7,$or6,$iter58_type,$add90,$or8,$iter63_idx,$iter65_iter,a,$iter62_iter,$iter60_iter,$iter63_type,$iter57_array,$iter63_nextval;
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
					if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool'](($p['bool']($or7=$m['is_win']($p['getattr'](self, 'boards')['__getitem__']($p['getattr'](self, 'next_piece')['__getitem__'](0))['__getitem__']($p['getattr'](self, 'next_piece')['__getitem__'](1))))?$or7:$m['is_full']($p['getattr'](self, 'boards')['__getitem__']($p['getattr'](self, 'next_piece')['__getitem__'](0))['__getitem__']($p['getattr'](self, 'next_piece')['__getitem__'](1)))))))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							$iter62_iter = aL;
							$iter62_nextval=$p['__iter_prepare']($iter62_iter,false);
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state[3] = 0;
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0 || typeof($p['__wrapped_next']($iter62_nextval)['$nextval']) != 'undefined');$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									a = $iter62_nextval['$nextval'];
									$iter63_iter = bL;
									$iter63_nextval=$p['__iter_prepare']($iter63_iter,false);
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									$generator_state[4] = 0;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
									for (;($generator_state[4] > 0 || typeof($p['__wrapped_next']($iter63_nextval)['$nextval']) != 'undefined');$generator_state[4] = 0) {
										if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
											for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
											b = $iter63_nextval['$nextval'];
											$generator_state[6] = 0;
											$generator_state[4]=1;
										}
										if ($generator_state[4] == 1) {
											if(($generator_state[5]==1)||($generator_state[5]<1&&($p['bool'](!$p['bool']($m['is_win']($p['getattr'](self, 'boards')['__getitem__'](a)['__getitem__'](b))))))) {
												$generator_state[5]=1;
												if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
													for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
													$iter64_iter = cL;
													$iter64_nextval=$p['__iter_prepare']($iter64_iter,false);
													$generator_state[6]=1;
												}
												if ($generator_state[6] == 1) {
													$generator_state[7] = 0;
													$generator_state[6]=2;
												}
												if ($generator_state[6] == 2) {
													for (;($generator_state[7] > 0 || typeof($p['__wrapped_next']($iter64_nextval)['$nextval']) != 'undefined');$generator_state[7] = 0) {
														if (typeof $generator_state[7] == 'undefined' || $generator_state[7] === 0) {
															for (var $i = 7 ; $i < ($generator_state['length']<9?9:$generator_state['length']); $i++) $generator_state[$i]=0;
															c = $iter64_nextval['$nextval'];
															$iter65_iter = dL;
															$iter65_nextval=$p['__iter_prepare']($iter65_iter,false);
															$generator_state[7]=1;
														}
														if ($generator_state[7] == 1) {
															$generator_state[8] = 0;
															$generator_state[7]=2;
														}
														if ($generator_state[7] == 2) {
															for (;($generator_state[8] > 0 || typeof($p['__wrapped_next']($iter65_nextval)['$nextval']) != 'undefined');$generator_state[8] = 0) {
																if (typeof $generator_state[8] == 'undefined' || $generator_state[8] === 0) {
																	for (var $i = 8 ; $i < ($generator_state['length']<10?10:$generator_state['length']); $i++) $generator_state[$i]=0;
																	d = $iter65_nextval['$nextval'];
																	$generator_state[10] = 0;
																	$generator_state[8]=1;
																}
																if ($generator_state[8] == 1) {
																	if(($generator_state[9]==1)||($generator_state[9]<1&&($p['bool']($p['op_eq']($p['getattr'](self, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__getitem__']('cell'), 0))))) {
																		$generator_state[9]=1;
																		if (typeof $generator_state[10] == 'undefined' || $generator_state[10] === 0) {
																			for (var $i = 10 ; $i < ($generator_state['length']<12?12:$generator_state['length']); $i++) $generator_state[$i]=0;
																			child['copyThis'](self);
																			nP = $m['turn']($p['getattr'](self, 'next_piece')['__getitem__'](2));
																			child['next_piece'] = $p['list']([c, d, nP]);
																			$p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__setitem__']('cell', $p['getattr'](self, 'next_piece')['__getitem__'](2));
																			if ($p['bool']($m['is_win']($p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)))) {
																				var $augsub3 = $p['str']($p['getattr'](self, 'next_piece')['__getitem__'](2));
																				var $augexpr3 = $p['getattr'](child, 'score');
																				$augexpr3['__setitem__']($augsub3, $p['__op_add']($add87=$augexpr3['__getitem__']($augsub3),$add88=1));
																			}
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
							a = $p['getattr'](self, 'next_piece')['__getitem__'](0);
							b = $p['getattr'](self, 'next_piece')['__getitem__'](1);
							$iter66_iter = cL;
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
									c = $iter66_nextval['$nextval'];
									$iter67_iter = dL;
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
											d = $iter67_nextval['$nextval'];
											$generator_state[6] = 0;
											$generator_state[4]=1;
										}
										if ($generator_state[4] == 1) {
											if(($generator_state[5]==1)||($generator_state[5]<1&&($p['bool']($p['op_eq']($p['getattr'](self, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__getitem__']('cell'), 0))))) {
												$generator_state[5]=1;
												if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
													for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
													child['copyThis'](self);
													nP = $m['turn']($p['getattr'](self, 'next_piece')['__getitem__'](2));
													child['next_piece'] = $p['list']([c, d, nP]);
													$p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)['__getitem__'](c)['__getitem__'](d)['__setitem__']('cell', $p['getattr'](self, 'next_piece')['__getitem__'](2));
													if ($p['bool']($m['is_win']($p['getattr'](child, 'boards')['__getitem__'](a)['__getitem__'](b)))) {
														var $augsub4 = $p['str']($p['getattr'](self, 'next_piece')['__getitem__'](2));
														var $augexpr4 = $p['getattr'](child, 'score');
														$augexpr4['__setitem__']($augsub4, $p['__op_add']($add89=$augexpr4['__getitem__']($augsub4),$add90=1));
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
		var first_player,TD_CONSTS;
		$p['printFunc']([$m['messageWelcome']], 1);
		TD_CONSTS = (typeof load_TD_CONSTS == "undefined"?$m['load_TD_CONSTS']:load_TD_CONSTS)();
		while ($p['bool'](true)) {
			first_player = (typeof getFirstPlayer == "undefined"?$m['getFirstPlayer']:getFirstPlayer)();
			if ($p['bool']($p['op_eq'](first_player, 0))) {
				$p['printFunc']([$m['messageGoodbye']], 1);
				return null;
			}
			(typeof playMeta == "undefined"?$m['playMeta']:playMeta)(first_player, TD_CONSTS);
		}
		return null;
	};
	$m['playAI']['__name__'] = 'playAI';

	$m['playAI']['__bind_type__'] = 0;
	$m['playAI']['__args__'] = [null,null];
	$m['getFirstPlayer'] = function() {
		var response;
		while ($p['bool'](true)) {
			response = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)($m['messageChoosePlayer']);
			if ($p['bool']($p['op_eq'](response, '1'))) {
				return $m['userFirst'];
			}
			else if ($p['bool']($p['op_eq'](response, '2'))) {
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
	$m['playMeta'] = function(first_player, TD_CONSTS) {
		var state;
		$p['printFunc'](['Should only happen once'], 1);
		state = $m['State']();
		if ($p['bool']($p['op_eq'](first_player, $m['userFirst']))) {
			(typeof user_turn == "undefined"?$m['user_turn']:user_turn)(state, TD_CONSTS);
		}
		else if ($p['bool']($p['op_eq'](first_player, $m['computerFirst']))) {
			(typeof computer_turn == "undefined"?$m['computer_turn']:computer_turn)(state, TD_CONSTS);
		}
		else {
			if (!( false )) {
			   throw $p['AssertionError']();
			 }
		}
		return null;
	};
	$m['playMeta']['__name__'] = 'playMeta';

	$m['playMeta']['__bind_type__'] = 0;
	$m['playMeta']['__args__'] = [null,null,['first_player'],['TD_CONSTS']];
	$m['user_turn'] = function(state, TD_CONSTS) {
		var y_board,x_board,$and8,$and9,$augexpr5,$augexpr6,$add94,$augsub6,$augsub5,$and5,$and6,$and7,$and12,$and13,$and10,$and11,$add92,$add91,$add93,y,x;
		$p['printFunc']([$m['messageUsersTurn']], 1);
		$p['printFunc']([state['printInfo']()], 1);
		if ($p['bool']($m['is_over'](state))) {
			return true;
		}
		$p['printFunc'](['You are playing piece', $p['getattr'](state, 'next_piece')['__getitem__'](2)], 1);
		while ($p['bool'](true)) {
			if ($p['bool']($m['is_win']($p['getattr'](state, 'boards')['__getitem__']($p['getattr'](state, 'next_piece')['__getitem__'](0))['__getitem__']($p['getattr'](state, 'next_piece')['__getitem__'](1))))) {
				$p['printFunc'](['You must select a board to play into'], 1);
				x_board = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign column of meta-board to play into');
				y_board = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign row of meta-board to play into');
				if ($p['bool'](($p['bool']($and5=x_board['isdigit']())?($p['bool']($and6=y_board['isdigit']())?!$p['bool']($m['is_win']($p['getattr'](state, 'boards')['__getitem__']($p['float_int'](y_board))['__getitem__']($p['float_int'](x_board)))):$and6):$and5))) {
					x_board = $p['float_int'](x_board);
					y_board = $p['float_int'](y_board);
					x = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign column of next piece');
					y = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Assign row of next piece');
					state['next_piece'] = $p['list']([y_board, x_board, $p['getattr'](state, 'next_piece')['__getitem__'](2)]);
					if ($p['bool'](($p['bool']($and8=x['isdigit']())?($p['bool']($and9=y['isdigit']())?state['isUnoccupied']($p['float_int'](y), $p['float_int'](x)):$and9):$and8))) {
						x = $p['float_int'](x);
						y = $p['float_int'](y);
						$p['getattr'](state, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y)['__getitem__'](x)['__setitem__']('cell', $p['getattr'](state, 'next_piece')['__getitem__'](2));
						if ($p['bool']($m['is_win']($p['getattr'](state, 'boards')['__getitem__'](y_board)['__getitem__'](x_board)))) {
							var $augsub5 = $p['str']($p['getattr'](state, 'next_piece')['__getitem__'](2));
							var $augexpr5 = $p['getattr'](state, 'score');
							$augexpr5['__setitem__']($augsub5, $p['__op_add']($add91=$augexpr5['__getitem__']($augsub5),$add92=1));
						}
						state['next_piece'] = $p['list']([y, x, $m['turn']($p['getattr'](state, 'next_piece')['__getitem__'](2))]);
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
				if ($p['bool'](($p['bool']($and11=x['isdigit']())?($p['bool']($and12=y['isdigit']())?state['isUnoccupied']($p['float_int'](y), $p['float_int'](x)):$and12):$and11))) {
					x = $p['float_int'](x);
					y = $p['float_int'](y);
					$p['getattr'](state, 'boards')['__getitem__']($p['getattr'](state, 'next_piece')['__getitem__'](0))['__getitem__']($p['getattr'](state, 'next_piece')['__getitem__'](1))['__getitem__'](y)['__getitem__'](x)['__setitem__']('cell', $p['getattr'](state, 'next_piece')['__getitem__'](2));
					if ($p['bool']($m['is_win']($p['getattr'](state, 'boards')['__getitem__']($p['getattr'](state, 'next_piece')['__getitem__'](0))['__getitem__']($p['getattr'](state, 'next_piece')['__getitem__'](1))))) {
						var $augsub6 = $p['str']($p['getattr'](state, 'next_piece')['__getitem__'](2));
						var $augexpr6 = $p['getattr'](state, 'score');
						$augexpr6['__setitem__']($augsub6, $p['__op_add']($add93=$augexpr6['__getitem__']($augsub6),$add94=1));
					}
					state['next_piece'] = $p['tuple']([y, x, $m['turn']($p['getattr'](state, 'next_piece')['__getitem__'](2))]);
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
		return (typeof computer_turn == "undefined"?$m['computer_turn']:computer_turn)(state, TD_CONSTS);
	};
	$m['user_turn']['__name__'] = 'user_turn';

	$m['user_turn']['__bind_type__'] = 0;
	$m['user_turn']['__args__'] = [null,null,['state'],['TD_CONSTS']];
	$m['computer_turn'] = function(state, TD_CONSTS) {
		var nextState,expectedUtility;
		$p['printFunc']([$m['messageComputersTurn']], 1);
		$p['printFunc'](['AI using following constants:\n', TD_CONSTS], 1);
		if ($p['bool']($m['is_over'](state))) {
			return true;
		}
		$p['printFunc']([state['printInfo']()], 1);
		var $tupleassign7 = $p['__ass_unpack']($m['ab'](state, TD_CONSTS), 2, null);
		expectedUtility = $tupleassign7[0];
		nextState = $tupleassign7[1];
		$p['printFunc'](['Expected utility is: ', expectedUtility], 1);
		state = $m['copy']['deepcopy'](nextState);
		$p['printFunc'](['Scores: Player 1: ', $p['getattr'](state, 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr'](state, 'score')['__getitem__']('2')], 1);
		return $m['user_turn'](state, TD_CONSTS);
	};
	$m['computer_turn']['__name__'] = 'computer_turn';

	$m['computer_turn']['__bind_type__'] = 0;
	$m['computer_turn']['__args__'] = [null,null,['state'],['TD_CONSTS']];
	$m['load_TD_CONSTS'] = function() {
		var $add100,$add98,$add99,f,$add95,$add96,$add97,TD_CONSTS,content,$pyjs_try_err,writeTo;
		try {
			f = $p['open']($p['__op_add']($add97=$p['__op_add']($add95=$m['CWD'],$add96='/'),$add98='td.txt'));
			content = f['read']();
			TD_CONSTS = (typeof eval == "undefined"?$m['eval']:eval)(content);
			$p['printFunc'](['Succesfully loaded file "td.txt"'], 1);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				$p['printFunc'](['ERROR FILE MISSING!!\nFile "td.txt" not found.\nYou can run "trainAI()" to create this file.'], 1);
				writeTo = $p['open']($p['__op_add']($add99=$m['CWD'],$add100='/td.txt'), 'w+');
				writeTo['write']($p['str']($p['dict']([['c1', 1], ['c2', 1], ['c3', 1], ['c4', 1], ['c5', 1], ['c6', 1]])));
				writeTo['close']();
			}
		}
		return TD_CONSTS;
	};
	$m['load_TD_CONSTS']['__name__'] = 'load_TD_CONSTS';

	$m['load_TD_CONSTS']['__bind_type__'] = 0;
	$m['load_TD_CONSTS']['__args__'] = [null,null];
	$m['trainAI'] = function() {
		var starting_state,$lambda5,$add104,writeTo,$add103,TD_CONSTS,change,diff_list,td,saved,savedConsts;
		$p['printFunc'](['Starting AI training!'], 1);
		TD_CONSTS = $m['load_TD_CONSTS']();
		$p['printFunc'](['TD_CONSTS is currently:\n', TD_CONSTS], 1);
		savedConsts = $m['copy']['copy'](TD_CONSTS);
		starting_state = $m['State']();
		(typeof learning_TD_AI == "undefined"?$m['learning_TD_AI']:learning_TD_AI)(starting_state, TD_CONSTS);
		saved = savedConsts['values']();
		td = TD_CONSTS['values']();
		diff_list = function(){
			var $iter68_array,$sub26,$sub25,i,$iter68_iter,$iter68_nextval,$collcomp17,$iter68_idx,$iter68_type;
	$collcomp17 = $p['list']();
		$iter68_iter = $p['range']($p['len'](TD_CONSTS));
		$iter68_nextval=$p['__iter_prepare']($iter68_iter,false);
		while (typeof($p['__wrapped_next']($iter68_nextval)['$nextval']) != 'undefined') {
			i = $iter68_nextval['$nextval'];
			$collcomp17['append']($p['abs']($p['__op_sub']($sub25=saved['__getitem__'](i),$sub26=td['__getitem__'](i))));
		}

	return $collcomp17;}();
		var 		$lambda5 = function(x, y) {
			var $add102,$add101;
			return $p['__op_add']($add101=x,$add102=y);
		};
		$lambda5['__name__'] = '$lambda5';

		$lambda5['__bind_type__'] = 0;
		$lambda5['__args__'] = [null,null,['x'],['y']];
		change = $p['reduce']($lambda5, diff_list);
		$p['printFunc'](['TD_CONSTS update to:\n', TD_CONSTS, '\nNet change was: ', change], 1);
		$p['printFunc'](['Finished training!'], 1);
		writeTo = $p['open']($p['__op_add']($add103=$m['CWD'],$add104='/td.txt'), 'w+');
		writeTo['write']($p['str'](TD_CONSTS));
		writeTo['close']();
		return TD_CONSTS;
	};
	$m['trainAI']['__name__'] = 'trainAI';

	$m['trainAI']['__bind_type__'] = 0;
	$m['trainAI']['__args__'] = [null,null];
	$m['normalize'] = function(TD_CONSTS) {
		var $mul42,$add105,$iter69_idx,$iter69_iter,$add106,i,$add108,$iter69_type,$mul41,tot,$add111,$div2,$add112,$add109,$iter69_nextval,$add107,$iter69_array,$div1,norm,$add110;
		norm = 6.0;
		tot = $p['sum'](TD_CONSTS['values']());
		$iter69_iter = $p['range']($p['len'](TD_CONSTS));
		$iter69_nextval=$p['__iter_prepare']($iter69_iter,false);
		while (typeof($p['__wrapped_next']($iter69_nextval)['$nextval']) != 'undefined') {
			i = $iter69_nextval['$nextval'];
			TD_CONSTS['__setitem__']($p['__op_add']($add111='c',$add112=$p['str']($p['__op_add']($add109=i,$add110=1))), (typeof ($mul41=(typeof ($div1=TD_CONSTS['__getitem__']($p['__op_add']($add107='c',$add108=$p['str']($p['__op_add']($add105=i,$add106=1)))))==typeof ($div2=tot) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))==typeof ($mul42=norm) && typeof $mul41=='number'?
				$mul41*$mul42:
				$p['op_mul']($mul41,$mul42)));
		}
		return TD_CONSTS;
	};
	$m['normalize']['__name__'] = 'normalize';

	$m['normalize']['__bind_type__'] = 0;
	$m['normalize']['__args__'] = [null,null,['TD_CONSTS']];
	$m['td_learning'] = function(terminal_state, TD_CONSTS, prev_state) {
		var $sub27,$add118,$add116,$add117,$sub28,$add115,$add113,$iter71_type,$iter71_iter,$mul48,$mul44,$mul45,$mul46,$mul47,$mul43,change_sub_utility,$add114,$iter71_nextval,sub2,$augexpr7,sub1,$augsub7,$iter71_array,i,change_total_utility,$iter71_idx;
		change_total_utility = $p['__op_sub']($sub27=$m['utility'](terminal_state, TD_CONSTS),$sub28=$m['utility'](prev_state, TD_CONSTS));
		sub1 = $m['sub_utility'](terminal_state, TD_CONSTS);
		sub2 = $m['sub_utility'](prev_state, TD_CONSTS);
		change_sub_utility = function(){
			var $iter70_array,$sub30,$iter70_type,i,$sub29,$iter70_idx,$iter70_nextval,$iter70_iter,$collcomp18;
	$collcomp18 = $p['list']();
		$iter70_iter = $p['range']($p['len'](sub1));
		$iter70_nextval=$p['__iter_prepare']($iter70_iter,false);
		while (typeof($p['__wrapped_next']($iter70_nextval)['$nextval']) != 'undefined') {
			i = $iter70_nextval['$nextval'];
			$collcomp18['append']($p['__op_sub']($sub29=sub1['__getitem__'](i),$sub30=sub2['__getitem__'](i)));
		}

	return $collcomp18;}();
		$iter71_iter = $p['range']($p['len'](TD_CONSTS));
		$iter71_nextval=$p['__iter_prepare']($iter71_iter,false);
		while (typeof($p['__wrapped_next']($iter71_nextval)['$nextval']) != 'undefined') {
			i = $iter71_nextval['$nextval'];
			var $augsub7 = $p['__op_add']($add115='c',$add116=$p['str']($p['__op_add']($add113=i,$add114=1)));
			var $augexpr7 = TD_CONSTS;
			$augexpr7['__setitem__']($augsub7, $p['__op_add']($add117=$augexpr7['__getitem__']($augsub7),$add118=(typeof ($mul47=(typeof ($mul45=(typeof ($mul43=$m['ALPHA'])==typeof ($mul44=change_total_utility) && typeof $mul43=='number'?
				$mul43*$mul44:
				$p['op_mul']($mul43,$mul44)))==typeof ($mul46=change_sub_utility['__getitem__'](i)) && typeof $mul45=='number'?
				$mul45*$mul46:
				$p['op_mul']($mul45,$mul46)))==typeof ($mul48=(typeof ($usub12=1)=='number'?
				-$usub12:
				$p['op_usub']($usub12))) && typeof $mul47=='number'?
				$mul47*$mul48:
				$p['op_mul']($mul47,$mul48))));
		}
		TD_CONSTS = $m['normalize'](TD_CONSTS);
		return TD_CONSTS;
	};
	$m['td_learning']['__name__'] = 'td_learning';

	$m['td_learning']['__bind_type__'] = 0;
	$m['td_learning']['__args__'] = [null,null,['terminal_state'],['TD_CONSTS'],['prev_state']];
	$m['learning_TD_AI'] = function(prev_state, TD_CONSTS) {
		var state,terminal_state,expectedUtility;
		if ($p['bool']($m['is_over'](prev_state))) {
			return true;
		}
		$p['printFunc'](['\n\nTD AI player starting turn. TD AI places the piece:', $p['getattr'](prev_state, 'next_piece')['__getitem__'](2)], 1);
		$p['printFunc'](['TD_CONSTS after being adjusted are: ', TD_CONSTS], 1);
		var $tupleassign8 = $p['__ass_unpack']($m['ab'](prev_state, TD_CONSTS), 2, null);
		expectedUtility = $tupleassign8[0];
		state = $tupleassign8[1];
		terminal_state = $p['getattr'](expectedUtility, 'terminal');
		$p['printFunc'](['Scores: Player 1: ', $p['getattr'](state, 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr'](state, 'score')['__getitem__']('2')], 1);
		state['printInfo']();
		TD_CONSTS = $m['td_learning'](terminal_state, TD_CONSTS, prev_state);
		$p['printFunc'](['TD_CONSTS after being adjusted are: ', TD_CONSTS], 1);
		return (typeof naive_AI == "undefined"?$m['naive_AI']:naive_AI)(state, TD_CONSTS);
	};
	$m['learning_TD_AI']['__name__'] = 'learning_TD_AI';

	$m['learning_TD_AI']['__bind_type__'] = 0;
	$m['learning_TD_AI']['__args__'] = [null,null,['prev_state'],['TD_CONSTS']];
	$m['naive_AI'] = function(state, TD_CONSTS) {
		var nextState,expectedUtility;
		if ($p['bool']($m['is_over'](state))) {
			return true;
		}
		$p['printFunc'](['\n\nNaive AIs turn which plays the piece: ', $p['getattr'](state, 'next_piece')['__getitem__'](2)], 1);
		var $tupleassign9 = $p['__ass_unpack']($m['ab'](state, TD_CONSTS), 2, null);
		expectedUtility = $tupleassign9[0];
		nextState = $tupleassign9[1];
		state = $m['copy']['deepcopy'](nextState);
		$p['printFunc'](['Scores: Player 1: ', $p['getattr'](state, 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr'](state, 'score')['__getitem__']('2')], 1);
		state['printInfo']();
		return $m['learning_TD_AI'](state, TD_CONSTS);
	};
	$m['naive_AI']['__name__'] = 'naive_AI';

	$m['naive_AI']['__bind_type__'] = 0;
	$m['naive_AI']['__args__'] = [null,null,['state'],['TD_CONSTS']];
	$p['printFunc']([$m['README']], 1);
	return this;
}; /* end learning */


/* end module: learning */


/*
PYJS_DEPS: ['copy', 'os', 'sys', 'subprocess']
*/
