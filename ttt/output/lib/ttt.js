/* start module: ttt */
$pyjs['loaded_modules']['ttt'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['ttt']['__was_initialized__']) return $pyjs['loaded_modules']['ttt'];
	var $m = $pyjs['loaded_modules']['ttt'];
	$m['__repr__'] = function() { return '<module: ttt>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ttt';
	$m['__name__'] = __mod_name__;


	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$p['printFunc']([(typeof __name__ == "undefined"?$m['__name__']:__name__)], 1);
		$m['copy'] = $p['___import___']('copy', null);
		$m['sys'] = $p['___import___']('sys', null);
		$m['random'] = $p['___import___']('random', null);
	}
	else if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), 'ttt'))) {
	}
	$m['EXACT'] = 'exact';
	$m['UPPER_BOUND'] = 'upper_bound';
	$m['LOWER_BOUND'] = 'lower_bound';
	$m['DIMENSION'] = 3;
	$m['Util'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'ttt';
		$method = $pyjs__bind_method2('__init__', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['value'] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__le__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return ((($p['cmp']($p['getattr'](self, 'value'), $p['getattr'](other, 'value')))|1) == 1);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__le__'] = $method;
		$method = $pyjs__bind_method2('__ge__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return ($p['cmp']($p['getattr'](self, 'value'), $p['getattr'](other, 'value')) < 1);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ge__'] = $method;
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
	$m['is_over'] = function(state) {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,piece,$iter2_idx,$iter1_iter,$iter1_array,$iter2_type,row,$iter2_array,$iter1_idx;
		$iter1_iter = $p['getattr'](state, 'board');
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			row = $iter1_nextval['$nextval'];
			$iter2_iter = row;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				piece = $iter2_nextval['$nextval'];
				if ($p['bool']($p['op_eq'](piece, 0))) {
					return false;
				}
			}
		}
		return true;
	};
	$m['is_over']['__name__'] = 'is_over';

	$m['is_over']['__bind_type__'] = 0;
	$m['is_over']['__args__'] = [null,null,['state']];
	$m['utility'] = function(state) {
		var $and1,$and2,$and3,$and4,someone_won;
		someone_won = (typeof is_win == "undefined"?$m['is_win']:is_win)(state);
		if ($p['bool'](($p['bool']($and1=someone_won)?$p['op_eq']($p['getattr'](state, 'player'), $p['getattr'](state, 'min_v')):$and1))) {
			return (typeof ($uadd1=1)=='number'?
				$uadd1:
				$p['op_uadd']($uadd1));
		}
		if ($p['bool'](($p['bool']($and3=someone_won)?$p['op_eq']($p['getattr'](state, 'player'), $p['getattr'](state, 'max_v')):$and3))) {
			return (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		return 0;
	};
	$m['utility']['__name__'] = 'utility';

	$m['utility']['__bind_type__'] = 0;
	$m['utility']['__args__'] = [null,null,['state']];
	$m['TTEntry'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'ttt';
		$method = $pyjs__bind_method2('__init__', function(value, a, b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				a = arguments[2];
				b = arguments[3];
			}
			var $and5,$and6;
			if ($p['bool'](($p['bool']($and5=($p['cmp'](value, a) == 1))?($p['cmp'](value, b) == -1):$and5))) {
				self['entry_type'] = $m['EXACT'];
			}
			else if ($p['bool'](($p['cmp'](value, a) < 1))) {
				self['entry_type'] = $m['UPPER_BOUND'];
			}
			else {
				self['entry_type'] = $m['LOWER_BOUND'];
			}
			self['value'] = value;
			return null;
		}
	, 1, [null,null,['self'],['value'],['a'],['b']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TTEntry', $p['tuple']($bases), $data);
	})();
	$m['TranspositionTable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'ttt';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['moves_table'] = $p['dict']([]);
			self['entry_type'] = '';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('call_min', function(state, a, b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
				a = arguments[2];
				b = arguments[3];
			}
			var all_rotation_keys,$iter3_array,potential_hit,$iter3_idx,$iter3_iter,$iter3_type,entry,rotation,miss,$iter3_nextval;
			potential_hit = state['serialize_me']();
			if ($p['bool']($p['getattr'](self, 'moves_table')['__contains__'](potential_hit))) {
				entry = $p['getattr'](self, 'moves_table')['__getitem__'](potential_hit);
				if ($p['bool']($p['op_eq']($p['getattr'](entry, 'entry_type'), $m['EXACT']))) {
					return $p['getattr'](entry, 'value');
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](entry, 'entry_type'), $m['UPPER_BOUND']))) {
					if ($p['bool'](($p['cmp'](b, $p['getattr'](entry, 'entry_type')) == 1))) {
						b = $p['getattr'](entry, 'value');
					}
				}
				else {
					if ($p['bool'](($p['cmp'](a, $p['getattr'](entry, 'entry_type')) == 1))) {
						a = $p['getattr'](entry, 'value');
					}
				}
			}
			miss = (typeof min_search == "undefined"?$m['min_search']:min_search)(state, a, b, self);
			all_rotation_keys = state['_serialize_all_rotations']();
			$iter3_iter = all_rotation_keys;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				rotation = $iter3_nextval['$nextval'];
				$p['getattr'](self, 'moves_table')['__setitem__'](rotation, $m['TTEntry'](miss, a, b));
			}
			return miss;
		}
	, 1, [null,null,['self'],['state'],['a'],['b']]);
		$cls_definition['call_min'] = $method;
		$method = $pyjs__bind_method2('call_max', function(state, a, b) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
				a = arguments[2];
				b = arguments[3];
			}
			var $iter4_type,all_rotation_keys,$iter4_idx,potential_hit,$iter4_iter,$iter4_nextval,$iter4_array,entry,rotation,miss;
			potential_hit = state['serialize_me']();
			if ($p['bool']($p['getattr'](self, 'moves_table')['__contains__'](potential_hit))) {
				entry = $p['getattr'](self, 'moves_table')['__getitem__'](potential_hit);
				if ($p['bool']($p['op_eq']($p['getattr'](entry, 'entry_type'), $m['EXACT']))) {
					return $p['getattr'](entry, 'value');
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](entry, 'entry_type'), $m['UPPER_BOUND']))) {
					if ($p['bool'](($p['cmp'](b, $p['getattr'](entry, 'entry_type')) == 1))) {
						b = $p['getattr'](entry, 'value');
					}
				}
				else {
					if ($p['bool'](($p['cmp'](a, $p['getattr'](entry, 'entry_type')) == 1))) {
						a = $p['getattr'](entry, 'value');
					}
				}
			}
			miss = (typeof max_search == "undefined"?$m['max_search']:max_search)(state, a, b, false, self);
			all_rotation_keys = state['_serialize_all_rotations']();
			$iter4_iter = all_rotation_keys;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				rotation = $iter4_nextval['$nextval'];
				$p['getattr'](self, 'moves_table')['__setitem__'](rotation, $m['TTEntry'](miss, a, b));
			}
			return miss;
		}
	, 1, [null,null,['self'],['state'],['a'],['b']]);
		$cls_definition['call_max'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TranspositionTable', $p['tuple']($bases), $data);
	})();
	$m['min_search'] = function(state, a, b, t_table) {
		var lowest,$or1,$or2,$iter5_array,$iter5_nextval,child,$iter5_iter,$iter5_idx,$iter5_type,next_value,children;
		if ($p['bool'](($p['bool']($or1=$m['is_over'](state))?$or1:(typeof is_win == "undefined"?$m['is_win']:is_win)(state)))) {
			return $m['utility'](state);
		}
		children = state['get_children']();
		lowest = 101;
		$iter5_iter = children;
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			child = $iter5_nextval['$nextval'];
			next_value = t_table['call_max'](child, a, b);
			lowest = $p['min'](next_value, lowest);
			if ($p['bool'](($p['cmp'](next_value, b) == -1))) {
				b = next_value;
			}
			if ($p['bool'](($p['cmp'](next_value, a) < 1))) {
				return (typeof ($usub2=101)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
			}
		}
		return lowest;
	};
	$m['min_search']['__name__'] = 'min_search';

	$m['min_search']['__bind_type__'] = 0;
	$m['min_search']['__args__'] = [null,null,['state'],['a'],['b'],['t_table']];
	$m['max_search'] = function(state, a, b, is_root, t_table) {
		var $or4,$or3,i,$iter7_iter,$iter7_array,max_states,$iter7_type,$iter7_idx,child_util_pairs,$lambda1,chosen_child,next_value,highest,$iter7_nextval,children;
		if ($p['bool'](($p['bool']($or3=$m['is_over'](state))?$or3:(typeof is_win == "undefined"?$m['is_win']:is_win)(state)))) {
			return $m['utility'](state);
		}
		children = state['get_children']();
		child_util_pairs = $p['zip'](children, function(){
			var $iter6_idx,$iter6_type,$collcomp1,i,$iter6_array,$iter6_iter,$iter6_nextval;
	$collcomp1 = $p['list']();
		$iter6_iter = $p['range']($p['len'](children));
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			i = $iter6_nextval['$nextval'];
			$collcomp1['append']($m['Util']((typeof ($usub3=100)=='number'?
				-$usub3:
				$p['op_usub']($usub3))));
		}

	return $collcomp1;}());
		child_util_pairs = $p['map']($p['list'], child_util_pairs);
		highest = (typeof ($usub4=101)=='number'?
			-$usub4:
			$p['op_usub']($usub4));
		$iter7_iter = $p['range']($p['len'](child_util_pairs));
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
			i = $iter7_nextval['$nextval'];
			next_value = t_table['call_min'](child_util_pairs['__getitem__'](i)['__getitem__'](0), a, b);
			child_util_pairs['__getitem__'](i)['__getitem__'](1)['value'] = next_value;
			highest = $p['max'](next_value, highest);
			if ($p['bool'](($p['cmp'](next_value, a) == 1))) {
				a = next_value;
			}
			if ($p['bool'](((($p['cmp'](next_value, b))|1) == 1))) {
				return 101;
			}
		}
		if ($p['bool'](is_root)) {
			$p['printFunc'](['length of child_util_pairs is', $p['len'](child_util_pairs)], 1);
			max_states = function(){
				var $iter8_idx,$iter8_type,$iter8_array,$collcomp2,$iter8_iter,s,$iter8_nextval;
	$collcomp2 = $p['list']();
			$iter8_iter = child_util_pairs;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				s = $iter8_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](s['__getitem__'](1), 'value'), highest))) {
					$collcomp2['append'](s);
				}
			}

	return $collcomp2;}();
			chosen_child = max_states['__getitem__'](0);
			var 			$lambda1 = function(x) {

				return $p['getattr'](x['__getitem__'](1), 'value');
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['x']];
			$p['printFunc'](['length of max_s is ', $p['len'](max_states), $p['map']($lambda1, max_states)], 1);
			return chosen_child;
		}
		else {
			return highest;
		}
		return null;
	};
	$m['max_search']['__name__'] = 'max_search';

	$m['max_search']['__bind_type__'] = 0;
	$m['max_search']['__args__'] = [null,null,['state'],['a'],['b'],['is_root'],['t_table']];
	$m['ab'] = function(state) {
		var next_move,transposition_table;
		$p['printFunc'](['ab(state)', $p['getattr'](state, 'min_v')], 1);
		transposition_table = $m['TranspositionTable']();
		next_move = $m['max_search'](state, (typeof ($usub5=9000)=='number'?
			-$usub5:
			$p['op_usub']($usub5)), 9000, true, transposition_table);
		return next_move['__getitem__'](0);
	};
	$m['ab']['__name__'] = 'ab';

	$m['ab']['__bind_type__'] = 0;
	$m['ab']['__args__'] = [null,null,['state']];
	$m['next_player'] = function(player_int) {

		if ($p['bool']($p['op_eq'](player_int, 1))) {
			return 2;
		}
		else if ($p['bool']($p['op_eq'](player_int, 2))) {
			return 1;
		}
		if (!( false )) {
		   throw $p['AssertionError']();
		 }
		return null;
	};
	$m['next_player']['__name__'] = 'next_player';

	$m['next_player']['__bind_type__'] = 0;
	$m['next_player']['__args__'] = [null,null,['player_int']];
	$m['is_win'] = function(state) {
		var $lambda5,$lambda4,$lambda3,$lambda2,row,copy_board,board,$iter11_idx,transposed_board,$or5,$or6,diagonal_2,$iter11_iter,diagonal_1,$iter12_array,$iter11_array,$iter11_nextval,column,$iter12_type,$iter11_type,$iter12_iter,$iter12_idx,$iter12_nextval;
		board = $p['getattr'](state, 'board');
		diagonal_1 = function(){
			var $iter9_iter,i,$collcomp3,$iter9_nextval,$iter9_idx,$iter9_type,$iter9_array;
	$collcomp3 = $p['list']();
		$iter9_iter = $p['range'](3);
		$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
		while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
			i = $iter9_nextval['$nextval'];
			$collcomp3['append'](board['__getitem__'](i)['__getitem__'](i));
		}

	return $collcomp3;}();
		diagonal_2 = function(){
			var $iter10_nextval,i,$iter10_idx,$collcomp4,$iter10_array,$iter10_type,$sub2,$iter10_iter,$sub1;
	$collcomp4 = $p['list']();
		$iter10_iter = $p['range'](3);
		$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
		while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
			i = $iter10_nextval['$nextval'];
			$collcomp4['append'](board['__getitem__'](i)['__getitem__']($p['__op_sub']($sub1=2,$sub2=i)));
		}

	return $collcomp4;}();
		copy_board = $p['getattr'](state['copy_me'](), 'board');
		$iter11_iter = copy_board;
		$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
		while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
			row = $iter11_nextval['$nextval'];
			var 			$lambda2 = function(cell_x, cell_y) {

				return (cell_x)&(cell_y);
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['cell_x'],['cell_y']];
			if ($p['bool']($p['bool']($p['reduce']($lambda2, row)))) {
				return true;
			}
		}
		transposed_board = $pyjs_kwargs_call(null, $p['zip'], copy_board, null, [{}]);
		$iter12_iter = transposed_board;
		$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
		while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
			column = $iter12_nextval['$nextval'];
			var 			$lambda3 = function(cell_x, cell_y) {

				return (cell_x)&(cell_y);
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = [null,null,['cell_x'],['cell_y']];
			if ($p['bool']($p['bool']($p['reduce']($lambda3, column)))) {
				return true;
			}
		}
		var 		$lambda4 = function(cell_x, cell_y) {

			return (cell_x)&(cell_y);
		};
		$lambda4['__name__'] = '$lambda4';

		$lambda4['__bind_type__'] = 0;
		$lambda4['__args__'] = [null,null,['cell_x'],['cell_y']];
		var 		$lambda5 = function(cell_x, cell_y) {

			return (cell_x)&(cell_y);
		};
		$lambda5['__name__'] = '$lambda5';

		$lambda5['__bind_type__'] = 0;
		$lambda5['__args__'] = [null,null,['cell_x'],['cell_y']];
		if ($p['bool'](($p['bool']($or5=$p['bool']($p['reduce']($lambda4, diagonal_1)))?$or5:$p['bool']($p['reduce']($lambda5, diagonal_2))))) {
			return true;
		}
		return false;
	};
	$m['is_win']['__name__'] = 'is_win';

	$m['is_win']['__bind_type__'] = 0;
	$m['is_win']['__args__'] = [null,null,['state']];
	$m['State'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'ttt';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['board'] = function(){
				var $iter13_nextval,$iter13_iter,i,$collcomp5,$iter13_type,$iter13_idx,$iter13_array;
	$collcomp5 = $p['list']();
			$iter13_iter = $p['range'](3);
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				i = $iter13_nextval['$nextval'];
				$collcomp5['append'](function(){
					var $iter14_array,$iter14_type,i,$collcomp6,$iter14_iter,$iter14_idx,$iter14_nextval;
	$collcomp6 = $p['list']();
				$iter14_iter = $p['range'](3);
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					i = $iter14_nextval['$nextval'];
					$collcomp6['append'](0);
				}

	return $collcomp6;}());
			}

	return $collcomp5;}();
			self['player'] = 1;
			self['min_v'] = (typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6));
			self['max_v'] = (typeof ($usub7=1)=='number'?
				-$usub7:
				$p['op_usub']($usub7));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_children', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter16_array,$add2,$iter15_iter,$iter16_type,$iter15_array,$iter15_idx,$iter16_idx,$add1,row_index,$iter15_nextval,$iter15_type,$iter16_nextval,column_index,$iter16_iter,children,child_state;
			children = $p['list']([]);
			$iter15_iter = $p['range'](3);
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				row_index = $iter15_nextval['$nextval'];
				$iter16_iter = $p['range'](3);
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					column_index = $iter16_nextval['$nextval'];
					if ($p['bool']($p['op_eq']($p['getattr'](self, 'board')['__getitem__'](row_index)['__getitem__'](column_index), 0))) {
						child_state = self['copy_me']();
						$p['getattr'](child_state, 'board')['__getitem__'](row_index)['__setitem__'](column_index, $p['getattr'](self, 'player'));
						child_state['player'] = $m['next_player']($p['getattr'](self, 'player'));
						children = $p['__op_add']($add1=children,$add2=$p['list']([child_state]));
					}
				}
			}
			return children;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_children'] = $method;
		$method = $pyjs__bind_method2('serialize_me', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return (typeof _serialize_board == "undefined"?$m['_serialize_board']:_serialize_board)($p['getattr'](self, 'board'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['serialize_me'] = $method;
		$method = $pyjs__bind_method2('print_me', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter17_nextval,$iter17_iter,$iter17_array,$iter17_idx,$iter17_type,row;
			$p['printFunc'](['current player to play: ', $p['getattr'](self, 'player'), ' is win ', $p['str']($m['is_win'](self)), '\nboard:'], 1);
			$iter17_iter = $p['getattr'](self, 'board');
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				row = $iter17_nextval['$nextval'];
				$p['printFunc']([row], 1);
			}
			$p['printFunc']([], 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['print_me'] = $method;
		$method = $pyjs__bind_method2('_serialize_all_rotations', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda7,$lambda6,r6,r7,r0,r1,r2,r3,$lambda9,$lambda8,r5,r4,all_boards_serialized;
			r0 = $p['__getslice']($p['getattr'](self, 'board'), 0, 3);
			var 			$lambda6 = function(row) {

				return (typeof reverse == "undefined"?$m['reverse']:reverse)(row);
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = [null,null,['row']];
			r1 = $p['map']($lambda6, r0);
			r1 = $p['map']($p['list'], r1);
			r2 = (typeof reverse == "undefined"?$m['reverse']:reverse)(r0);
			var 			$lambda7 = function(row) {

				return (typeof reverse == "undefined"?$m['reverse']:reverse)(row);
			};
			$lambda7['__name__'] = '$lambda7';

			$lambda7['__bind_type__'] = 0;
			$lambda7['__args__'] = [null,null,['row']];
			r3 = $p['map']($lambda7, r2);
			r4 = $pyjs_kwargs_call(null, $p['zip'], r0, null, [{}]);
			r4 = $p['map']($p['list'], r4);
			var 			$lambda8 = function(row) {

				return (typeof reverse == "undefined"?$m['reverse']:reverse)(row);
			};
			$lambda8['__name__'] = '$lambda8';

			$lambda8['__bind_type__'] = 0;
			$lambda8['__args__'] = [null,null,['row']];
			r5 = $p['map']($lambda8, r4);
			r5 = $p['map']($p['list'], r5);
			r6 = (typeof reverse == "undefined"?$m['reverse']:reverse)(r4);
			var 			$lambda9 = function(row) {

				return (typeof reverse == "undefined"?$m['reverse']:reverse)(row);
			};
			$lambda9['__name__'] = '$lambda9';

			$lambda9['__bind_type__'] = 0;
			$lambda9['__args__'] = [null,null,['row']];
			r7 = $p['map']($lambda9, r6);
			all_boards_serialized = $p['map']((typeof _serialize_board == "undefined"?$m['_serialize_board']:_serialize_board), $p['tuple']([r0, r1, r2, r3, r4, r5, r6, r7]));
			all_boards_serialized = $p['list']($p['set'](all_boards_serialized));
			return all_boards_serialized;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_serialize_all_rotations'] = $method;
		$method = $pyjs__bind_method2('copy_me', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a,$iter18_type,$iter18_iter,$iter19_idx,$iter18_array,$iter19_type,c,$iter19_nextval,$iter19_array,$iter19_iter,$iter18_idx,r,$iter18_nextval;
			a = $m['State']();
			$iter18_iter = $p['range']($m['DIMENSION']);
			$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
			while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
				r = $iter18_nextval['$nextval'];
				$iter19_iter = $p['range']($m['DIMENSION']);
				$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
				while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
					c = $iter19_nextval['$nextval'];
					$p['getattr'](a, 'board')['__getitem__'](r)['__setitem__'](c, $p['getattr'](self, 'board')['__getitem__'](r)['__getitem__'](c));
				}
			}
			a['player'] = $p['getattr'](self, 'player');
			a['min_v'] = $p['getattr'](self, 'min_v');
			a['max_v'] = $p['getattr'](self, 'max_v');
			return a;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy_me'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('State', $p['tuple']($bases), $data);
	})();
	$m['_unserialize_board'] = function(string_board) {
		var list_board,row_0,row_1,row_2;
		list_board = $p['list']([]);
		row_0 = $p['map']($p['float_int'], $p['list']($p['__getslice'](string_board, 0, 3)));
		row_1 = $p['map']($p['float_int'], $p['list']($p['__getslice'](string_board, 3, 6)));
		row_2 = $p['map']($p['float_int'], $p['list']($p['__getslice'](string_board, 6, null)));
		list_board = $p['list']([row_0, row_1, row_2]);
		return list_board;
	};
	$m['_unserialize_board']['__name__'] = '_unserialize_board';

	$m['_unserialize_board']['__bind_type__'] = 0;
	$m['_unserialize_board']['__args__'] = [null,null,['string_board']];
	$m['unhash'] = function(string_board) {
		var a;
		a = $m['State']();
		a['board'] = $m['_unserialize_board'](string_board);
		return a;
	};
	$m['unhash']['__name__'] = 'unhash';

	$m['unhash']['__bind_type__'] = 0;
	$m['unhash']['__args__'] = [null,null,['string_board']];
	$m['reverse'] = function(board) {

		board = $p['__getslice'](board, 0, $p['len'](board));
		board['reverse']();
		return board;
	};
	$m['reverse']['__name__'] = 'reverse';

	$m['reverse']['__bind_type__'] = 0;
	$m['reverse']['__args__'] = [null,null,['board']];
	$m['_serialize_board'] = function(board) {
		var $iter20_iter,$iter20_nextval,$iter20_type,$add4,piece,$iter21_nextval,$iter21_idx,$iter21_type,$add3,$iter21_iter,$iter20_idx,$iter21_array,str_board,row,$iter20_array;
		str_board = '';
		$iter20_iter = board;
		$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
		while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
			row = $iter20_nextval['$nextval'];
			$iter21_iter = row;
			$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
			while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
				piece = $iter21_nextval['$nextval'];
				str_board = $p['__op_add']($add3=str_board,$add4=$p['str'](piece));
			}
		}
		return str_board;
	};
	$m['_serialize_board']['__name__'] = '_serialize_board';

	$m['_serialize_board']['__bind_type__'] = 0;
	$m['_serialize_board']['__args__'] = [null,null,['board']];
	$m['test'] = function() {
		var a,c,b,e;
		a = $m['State']();
		a['board'] = $p['list']([$p['list']([0, 1, 0]), $p['list']([0, 1, 0]), $p['list']([0, 1, 1])]);
		if (!( $p['op_eq']($m['is_win'](a), true) )) {
		   throw $p['AssertionError']();
		 }
		b = $m['State']();
		b['board'] = $p['list']([$p['list']([1, 0, 0]), $p['list']([0, 1, 0]), $p['list']([0, 0, 1])]);
		if (!( $p['op_eq']($m['is_win'](b), true) )) {
		   throw $p['AssertionError']();
		 }
		c = $m['State']();
		c['board'] = $p['list']([$p['list']([0, 0, 1]), $p['list']([0, 0, 1]), $p['list']([0, 0, 1])]);
		if (!( $p['op_eq']($m['is_win'](c), true) )) {
		   throw $p['AssertionError']();
		 }
		e = $m['State']();
		e['board'] = $p['list']([$p['list']([0, 0, 1]), $p['list']([0, 1, 0]), $p['list']([1, 0, 0])]);
		if (!( $p['op_eq']($m['is_win'](e), true) )) {
		   throw $p['AssertionError']();
		 }
		$p['printFunc'](['tests passed'], 1);
		return null;
	};
	$m['test']['__name__'] = 'test';

	$m['test']['__bind_type__'] = 0;
	$m['test']['__args__'] = [null,null];
	$m['main'] = function() {
		var one_or_2;
		while ($p['bool'](true)) {
			one_or_2 = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Enter 2 if you want the computer to play first; enter 1 if you want to go first');
			if ($p['bool']($p['op_eq'](one_or_2, '2'))) {
				(typeof computer_first == "undefined"?$m['computer_first']:computer_first)();
			}
			if ($p['bool']($p['op_eq'](one_or_2, '1'))) {
				(typeof human_first == "undefined"?$m['human_first']:human_first)();
			}
			$p['printFunc'](['Try again.'], 1);
		}
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	$m['computer_first'] = function() {
		var MAX,start_game_board,MIN;
		MAX = 1;
		MIN = 2;
		start_game_board = $m['State']();
		start_game_board['player'] = MAX;
		start_game_board['max_v'] = MAX;
		start_game_board['min_v'] = MIN;
		(typeof ai == "undefined"?$m['ai']:ai)(start_game_board);
		return null;
	};
	$m['computer_first']['__name__'] = 'computer_first';

	$m['computer_first']['__bind_type__'] = 0;
	$m['computer_first']['__args__'] = [null,null];
	$m['human_first'] = function() {
		var MAX,start_game_board,MIN;
		MAX = 2;
		MIN = 1;
		start_game_board = $m['State']();
		start_game_board['player'] = MIN;
		start_game_board['max_v'] = MAX;
		start_game_board['min_v'] = MIN;
		$pyjs_kwargs_call(null, (typeof human == "undefined"?$m['human']:human), null, null, [{'starting':true}, start_game_board]);
		return null;
	};
	$m['human_first']['__name__'] = 'human_first';

	$m['human_first']['__bind_type__'] = 0;
	$m['human_first']['__args__'] = [null,null];
	$m['check_tie'] = function(state) {

		if ($p['bool']($m['is_over'](state))) {
			$p['printFunc'](['Game is a tie.\n'], 1);
			$m['sys']['exit']();
		}
		return null;
	};
	$m['check_tie']['__name__'] = 'check_tie';

	$m['check_tie']['__bind_type__'] = 0;
	$m['check_tie']['__args__'] = [null,null,['state']];
	$m['ai'] = function(state) {
		var next_state;
		next_state = $m['ab'](state);
		$p['printFunc']([next_state], 1);
		if ($p['bool']($m['is_win'](next_state))) {
			$m['sys']['exit']();
		}
		$m['check_tie'](next_state);
		$p['printFunc'](['next player is ', $p['getattr'](next_state, 'player'), 'MIN is ', $p['getattr'](state, 'min_v'), ' max is: ', $p['getattr'](state, 'max_v')], 1);
		if (!( $p['op_eq']($p['type'](next_state), $p['type']($m['State']())) )) {
		   throw $p['AssertionError']();
		 }
		next_state['print_me']();
		(typeof human == "undefined"?$m['human']:human)(next_state);
		return null;
	};
	$m['ai']['__name__'] = 'ai';

	$m['ai']['__bind_type__'] = 0;
	$m['ai']['__args__'] = [null,null,['state']];
	$m['human'] = function(state, starting) {
		if (typeof starting == 'undefined') starting=arguments['callee']['__args__'][3][1];
		var $and8,y_input,x_input,$and7,same,y,x;
		$p['printFunc']([state['serialize_me']()], 1);
		same = $m['State']();
		while ($p['bool'](true)) {
			x_input = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Enter x value ');
			y_input = (typeof raw_input == "undefined"?$m['raw_input']:raw_input)('Enter y value ');
			if ($p['bool'](($p['bool']($and7=x_input['isdigit']())?y_input['isdigit']():$and7))) {
				x = $p['float_int'](x_input);
				y = $p['float_int'](y_input);
				if ($p['bool']($p['op_eq']($p['getattr'](state, 'board')['__getitem__'](y)['__getitem__'](x), 0))) {
					$p['getattr'](state, 'board')['__getitem__'](y)['__setitem__'](x, $p['getattr'](state, 'player'));
					state['player'] = $m['next_player']($p['getattr'](state, 'player'));
					if ($p['bool']($m['is_win'](state))) {
						$p['printFunc'](['You won!\nThis should never happen.\nThis is a bug.\nPlease sent an email to Chet @ chetweger@gmail.com describing the order of moves.'], 1);
						$m['sys']['exit']();
					}
					$m['check_tie'](state);
					$m['ai'](state);
				}
			}
		}
		$p['printFunc'](['Try again.'], 1);
		return null;
	};
	$m['human']['__name__'] = 'human';

	$m['human']['__bind_type__'] = 0;
	$m['human']['__args__'] = [null,null,['state'],['starting', false]];
	$m['sertest'] = function() {
		var a;
		a = $m['State']();
		$p['getattr'](a, 'board')['__getitem__'](0)['__setitem__'](0, 1);
		$p['getattr'](a, 'board')['__getitem__'](0)['__setitem__'](1, 1);
		$p['getattr'](a, 'board')['__getitem__'](0)['__setitem__'](2, 1);
		$p['getattr'](a, 'board')['__getitem__'](1)['__setitem__'](2, 1);
		return a['_serialize_all_rotations']();
	};
	$m['sertest']['__name__'] = 'sertest';

	$m['sertest']['__bind_type__'] = 0;
	$m['sertest']['__args__'] = [null,null];
	return this;
}; /* end ttt */


/* end module: ttt */


/*
PYJS_DEPS: ['copy', 'sys', 'random']
*/
