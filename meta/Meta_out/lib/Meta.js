/* start module: Meta */
$pyjs['loaded_modules']['Meta'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['Meta']['__was_initialized__']) return $pyjs['loaded_modules']['Meta'];
	var $m = $pyjs['loaded_modules']['Meta'];
	$m['__repr__'] = function() { return '<module: Meta>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Meta';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['CellFormatter'] = $p['___import___']('pyjamas.ui.CellFormatter.CellFormatter', null, null, false);
	$m['RowFormatter'] = $p['___import___']('pyjamas.ui.RowFormatter.RowFormatter', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
	$m['log'] = $m['logging']['getConsoleLogger']();
	$m['State'] = $p['___import___']('learning.State', null, null, false);
	$m['ab'] = $p['___import___']('learning.ab', null, null, false);
	$m['is_win'] = $p['___import___']('learning.is_win', null, null, false);
	$m['is_full'] = $p['___import___']('learning.is_full', null, null, false);
	$m['turn'] = $p['___import___']('learning.turn', null, null, false);
	$m['is_over'] = $p['___import___']('learning.is_over', null, null, false);
	$m['normalize'] = $p['___import___']('learning.normalize', null, null, false);
	$m['INCREMENT_AMOUNT'] = 0.05;
	$m['GridWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'Meta';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var html,$add2,$add3,$add1,optional_args,$add4;
			self['game_over'] = false;
			self['TD_CONSTS'] = $p['dict']([['c3', 0.767944], ['c2', 1.049451], ['c1', 3.074038], ['c6', 0.220823], ['c5', 0.281883], ['c4', 0.605861]]);
			optional_args = $p['dict']([['TD_CONSTS', $p['getattr'](self, 'TD_CONSTS')], ['MAX', '1'], ['MIN', 2]]);
			$m['AbsolutePanel']['__init__'](self);
			self['depthLimit'] = 3;
			self['human_first'] = true;
			self['ai_first'] = $m['Button']('AI first.', self);
			self['add']($p['getattr'](self, 'ai_first'));
			self['increase_depth'] = $m['Button']('Increase ply search depth.', self);
			self['add']($p['getattr'](self, 'increase_depth'));
			self['decrease_depth'] = $m['Button']('Decrease ply search depth.', self);
			self['add']($p['getattr'](self, 'decrease_depth'));
			self['depth_label'] = $m['Label']($p['__op_add']($add3=$p['__op_add']($add1='Current depth is ',$add2=$p['str']($p['getattr'](self, 'depthLimit'))),$add4='.'));
			self['add']($p['getattr'](self, 'depth_label'));
			self['score_label'] = $m['Label']($p['sprintf']('Human: %d | AI: %d', $p['tuple']([0, 0])));
			self['add']($p['getattr'](self, 'score_label'));
			html = '<a href="file:///home/chet/projects/pyjs/meta/output/Meta.html">Start a new game.</a>';
			self['new_game'] = $m['HTML'](html);
			self['add']($p['getattr'](self, 'new_game'));
			self['g'] = $m['Grid']();
			self['g']['resize'](3, 3);
			self['g']['setBorderWidth'](2);
			self['g']['setCellPadding'](9);
			self['g']['setCellSpacing'](1);
			self['init']();
			self['add']($p['getattr'](self, 'g'));
			self['adj_grid'] = $m['Grid']();
			self['adj_grid']['resize'](6, 3);
			self['adj_grid']['setBorderWidth'](2);
			self['adj_grid']['setCellPadding'](9);
			self['adj_grid']['setCellSpacing'](1);
			self['init_constants_adj_grid']();
			self['add']($p['getattr'](self, 'adj_grid'));
			self['state'] = $m['State']();
			self['state_to_grid']();
			self['max_player'] = '-1';
			self['min_player'] = '-1';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('init_constants_adj_grid', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,td_keys,$iter1_iter,i,$iter1_array,key,$iter1_idx;
			self['decr_buttons'] = $p['dict']([]);
			self['adj_labels'] = $p['dict']([]);
			self['incr_buttons'] = $p['dict']([]);
			td_keys = $p['list'](['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);
			$iter1_iter = $p['enumerate'](td_keys);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				key = $tupleassign1[1];
				$p['getattr'](self, 'decr_buttons')['__setitem__'](key, $m['Button']('<', self));
				self['adj_grid']['setWidget'](i, 0, $p['getattr'](self, 'decr_buttons')['__getitem__'](key));
				$p['getattr'](self, 'incr_buttons')['__setitem__'](key, $m['Button']('>', self));
				self['adj_grid']['setWidget'](i, 2, $p['getattr'](self, 'incr_buttons')['__getitem__'](key));
				$p['getattr'](self, 'adj_labels')['__setitem__'](key, $m['Label']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'TD_CONSTS')['__getitem__'](key)]))));
				self['adj_grid']['setWidget'](i, 1, $p['getattr'](self, 'adj_labels')['__getitem__'](key));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init_constants_adj_grid'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,y_cell,$iter5_array,$iter3_type,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_iter,$iter5_idx,x_board,$iter2_type,$iter2_idx,b,$iter3_array,y_board,$iter2_nextval,g,$iter4_nextval,$iter4_idx,x_cell,$iter4_array,$iter3_nextval,$iter2_array;
			$iter2_iter = $p['range'](3);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				y_board = $iter2_nextval['$nextval'];
				$iter3_iter = $p['range'](3);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					x_board = $iter3_nextval['$nextval'];
					g = $m['Grid']();
					g['resize'](3, 3);
					g['setBorderWidth'](2);
					g['setCellPadding'](9);
					g['setCellSpacing'](1);
					$iter4_iter = $p['range'](3);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						x_cell = $iter4_nextval['$nextval'];
						$iter5_iter = $p['range'](3);
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							y_cell = $iter5_nextval['$nextval'];
							b = $m['Button']('Play here.', self);
							b['point'] = $p['dict']([['x_cell', x_cell], ['y_cell', y_cell], ['y_board', y_board], ['x_board', x_board]]);
							g['setWidget'](y_cell, x_cell, b);
						}
					}
					self['add'](g);
					self['g']['setWidget'](y_board, x_board, g);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $and2,g,point,$and1,$add13,$add14,$sub2,$add6,$add7,$add12,$add5,$add10,$add8,$add9,$sub1,$add11;
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'increase_depth')))) {
				self['depthLimit'] = $p['__op_add']($add5=$p['getattr'](self, 'depthLimit'),$add6=1);
				self['depth_label']['setText']($p['__op_add']($add9=$p['__op_add']($add7='Current depth is ',$add8=$p['str']($p['getattr'](self, 'depthLimit'))),$add10='.'));
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'decrease_depth')))) {
				self['depthLimit'] = $p['__op_sub']($sub1=$p['getattr'](self, 'depthLimit'),$sub2=1);
				self['depth_label']['setText']($p['__op_add']($add13=$p['__op_add']($add11='Current depth is ',$add12=$p['str']($p['getattr'](self, 'depthLimit'))),$add14='.'));
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'new_game')))) {
				(typeof AppInit == "undefined"?$m['AppInit']:AppInit)();
			}
			self['check_adjusts'](sender);
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'game_over')))) {
				if ($p['bool'](($p['bool']($and1=$p['hasattr'](self, 'ai_first'))?$p['op_eq'](sender, $p['getattr'](self, 'ai_first')):$and1))) {
					self['human_first'] = false;
					self['max_player'] = '1';
					self['min_player'] = '2';
					self['remove']($p['getattr'](self, 'ai_first'));
					$p['delattr'](self, 'ai_first');
					self['state'] = $pyjs_kwargs_call(null, $m['ab'], null, null, [{'depth_limit':$p['getattr'](self, 'depthLimit')}, $p['getattr'](self, 'state'), $p['getattr'](self, 'TD_CONSTS')])['__getitem__'](1);
					self['state_to_grid']();
				}
				if ($p['bool']($p['hasattr'](sender, 'point'))) {
					if ($p['bool']($p['hasattr'](self, 'ai_first'))) {
						self['max_player'] = '2';
						self['min_player'] = '1';
						self['remove']($p['getattr'](self, 'ai_first'));
						$p['delattr'](self, 'ai_first');
					}
					if (!( $p['getattr']($p['getattr'](self, 'state'), 'boards') )) {
					   throw $p['AssertionError']();
					 }
					point = $p['getattr'](sender, 'point');
					g = self['g']['getWidget'](point['__getitem__']('y_board'), point['__getitem__']('x_board'));
					g['setText'](point['__getitem__']('y_cell'), point['__getitem__']('x_cell'), $p['str']($p['getattr'](self, 'min_player')));
					self['grid_to_state'](point);
					self['check_win']();
					$p['getattr']($p['getattr'](self, 'state'), 'next_piece')['__setitem__'](2, $p['getattr'](self, 'max_player'));
					self['state'] = $pyjs_kwargs_call(null, $m['ab'], null, null, [{'depth_limit':$p['getattr'](self, 'depthLimit')}, $p['getattr'](self, 'state'), $p['getattr'](self, 'TD_CONSTS')])['__getitem__'](1);
					self['state_to_grid']();
					self['check_win']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('check_adjusts', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter6_idx,td_keys,$iter6_type,$iter6_array,key,$iter6_iter,$iter6_nextval;
			td_keys = $p['list'](['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);
			$iter6_iter = td_keys;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				key = $iter6_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'incr_buttons')['__getitem__'](key), sender))) {
					self['change_td_const'](key, '+');
				}
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'decr_buttons')['__getitem__'](key), sender))) {
					self['change_td_const'](key, '-');
				}
				$p['getattr'](self, 'adj_labels')['__getitem__'](key)['setText']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'TD_CONSTS')['__getitem__'](key)])));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['check_adjusts'] = $method;
		$method = $pyjs__bind_method2('change_td_const', function(key, sign) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				sign = arguments[2];
			}
			var $augexpr1,$augexpr2,$augsub2,$augsub1,$add15,$add16,$sub3,$sub4;
			if ($p['bool']($p['op_eq'](sign, '+'))) {
				var $augsub1 = key;
				var $augexpr1 = $p['getattr'](self, 'TD_CONSTS');
				$augexpr1['__setitem__']($augsub1, $p['__op_add']($add15=$augexpr1['__getitem__']($augsub1),$add16=$m['INCREMENT_AMOUNT']));
			}
			else if ($p['bool']($p['op_eq'](sign, '-'))) {
				var $augsub2 = key;
				var $augexpr2 = $p['getattr'](self, 'TD_CONSTS');
				$augexpr2['__setitem__']($augsub2, $p['__op_sub']($sub3=$augexpr2['__getitem__']($augsub2),$sub4=$m['INCREMENT_AMOUNT']));
			}
			return null;
		}
	, 1, [null,null,['self'],['key'],['sign']]);
		$cls_definition['change_td_const'] = $method;
		$method = $pyjs__bind_method2('check_win', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var msg,human_score,game_over_msg,ai_score;
			self['state_to_grid']();
			if ($p['bool']($p['getattr'](self, 'human_first'))) {
				human_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('1');
				ai_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('2');
				self['score_label']['setText']($p['sprintf']('Human: %d | AI: %d', $p['tuple']([human_score, ai_score])));
			}
			else {
				human_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('2');
				ai_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('1');
				self['score_label']['setText']($p['sprintf']('Human: %d | AI: %d', $p['tuple']([human_score, ai_score])));
			}
			if ($p['bool']($m['is_over']($p['getattr'](self, 'state')))) {
				if ($p['bool'](($p['cmp'](human_score, ai_score) == 1))) {
					msg = 'Congratulations, you won! To increase the difficulty, increase the search depth.';
				}
				else if ($p['bool'](($p['cmp'](human_score, ai_score) == -1))) {
					msg = 'You lost! Better luck next time.';
				}
				else if ($p['bool']($p['op_eq'](human_score, ai_score))) {
					msg = 'Game ends in a tie.';
				}
				game_over_msg = $m['Label'](msg);
				self['add'](game_over_msg);
				self['game_over'] = true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['check_win'] = $method;
		$method = $pyjs__bind_method2('will_buttons', function(y_board, x_board) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y_board = arguments[1];
				x_board = arguments[2];
			}
			var piece,$or1,$or2,$and3,$and4,$and5,$and6,board,playable;
			board = $p['getattr']($p['getattr'](self, 'state'), 'boards');
			piece = $p['list']($p['getattr']($p['getattr'](self, 'state'), 'next_piece'));
			playable = true;
			if ($p['bool'](($p['bool']($or1=$m['is_win'](board['__getitem__'](piece['__getitem__'](0))['__getitem__'](piece['__getitem__'](1))))?$or1:$m['is_full'](board['__getitem__'](piece['__getitem__'](0))['__getitem__'](piece['__getitem__'](1)))))) {
				playable = false;
			}
			if ($p['bool'](($p['bool']($and3=!$p['bool']($m['is_win'](board['__getitem__'](y_board)['__getitem__'](x_board))))?!$p['bool']($m['is_full'](board['__getitem__'](y_board)['__getitem__'](x_board))):$and3))) {
				if ($p['bool'](!$p['bool'](playable))) {
					return true;
				}
				if ($p['bool'](playable)) {
					return ($p['bool']($and5=$p['op_eq'](y_board, piece['__getitem__'](0)))?$p['op_eq'](x_board, piece['__getitem__'](1)):$and5);
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['y_board'],['x_board']]);
		$cls_definition['will_buttons'] = $method;
		$method = $pyjs__bind_method2('state_to_grid', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var will_make_buttons,$iter10_nextval,y_cell,$iter8_iter,$iter10_iter,$iter9_iter,$iter9_nextval,$iter9_idx,board,$iter7_type,$iter9_type,x_board,$iter8_idx,$iter7_iter,$iter8_type,$iter10_idx,$iter8_nextval,$iter7_idx,y_board,b,$iter7_nextval,g,$iter7_array,$iter8_array,$iter10_array,x_cell,$iter10_type,$iter9_array;
			board = $p['getattr']($p['getattr'](self, 'state'), 'boards');
			$iter7_iter = $p['range'](3);
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				y_board = $iter7_nextval['$nextval'];
				$iter8_iter = $p['range'](3);
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					x_board = $iter8_nextval['$nextval'];
					will_make_buttons = self['will_buttons'](y_board, x_board);
					g = $m['Grid']();
					g['resize'](3, 3);
					g['setBorderWidth'](2);
					g['setCellPadding'](9);
					g['setCellSpacing'](1);
					$iter9_iter = $p['range'](3);
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						y_cell = $iter9_nextval['$nextval'];
						$iter10_iter = $p['range'](3);
						$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
						while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
							x_cell = $iter10_nextval['$nextval'];
							if ($p['bool']($p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 0))) {
								if ($p['bool'](will_make_buttons)) {
									b = $m['Button']('Play here.', self);
									b['point'] = $p['dict']([['x_cell', x_cell], ['y_cell', y_cell], ['y_board', y_board], ['x_board', x_board]]);
									g['setWidget'](y_cell, x_cell, b);
								}
								else {
									g['setText'](y_cell, x_cell, '-');
								}
							}
							else if ($p['bool']($p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 1))) {
								g['setText'](y_cell, x_cell, '1');
							}
							else if ($p['bool']($p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 2))) {
								g['setText'](y_cell, x_cell, '2');
							}
							else {
								$p['printFunc'](['a'], 1);
							}
						}
					}
					self['add'](g);
					self['g']['setWidget'](y_board, x_board, g);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['state_to_grid'] = $method;
		$method = $pyjs__bind_method2('grid_to_state', function(point) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				point = arguments[1];
			}
			var y_cell,$augexpr3,$augsub3,$iter13_idx,board,$iter11_idx,$iter13_array,x_board,$or4,$iter14_array,$iter14_type,$or3,$iter11_iter,$iter12_array,$add17,$iter14_iter,$iter11_array,$iter11_nextval,y_board,$add18,$iter14_idx,$iter14_nextval,$iter13_nextval,g,$iter13_iter,$iter12_type,$iter11_type,$iter13_type,$iter12_iter,x_cell,piece,$iter12_idx,$iter12_nextval;
			board = $p['getattr']($p['getattr'](self, 'state'), 'boards');
			$iter11_iter = $p['range'](3);
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				y_board = $iter11_nextval['$nextval'];
				$iter12_iter = $p['range'](3);
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					x_board = $iter12_nextval['$nextval'];
					g = self['g']['getWidget'](y_board, x_board);
					$iter13_iter = $p['range'](3);
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						y_cell = $iter13_nextval['$nextval'];
						$iter14_iter = $p['range'](3);
						$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
						while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
							x_cell = $iter14_nextval['$nextval'];
							if ($p['bool']($p['isinstance'](g['getWidget'](y_cell, x_cell), $m['Button']))) {
								if (!( $p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 0) )) {
								   throw $p['AssertionError']();
								 }
							}
							else if ($p['bool'](($p['bool']($or3=$p['op_eq'](g['getText'](y_cell, x_cell), '1'))?$or3:$p['op_eq'](g['getText'](y_cell, x_cell), '2')))) {
								if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'state'), 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 0))) {
									$p['getattr']($p['getattr'](self, 'state'), 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__setitem__']('cell', $p['float_int'](g['getText'](y_cell, x_cell)));
									piece = $p['getattr']($p['getattr'](self, 'state'), 'next_piece');
									piece['__setitem__'](2, 1);
									piece['__setitem__'](0, y_cell);
									piece['__setitem__'](1, x_cell);
								}
							}
							else {
								if (!( $p['op_eq'](g['getText'](y_cell, x_cell), '-') )) {
								   throw $p['AssertionError']();
								 }
							}
						}
					}
				}
			}
			if ($p['bool']($m['is_win']($p['getattr']($p['getattr'](self, 'state'), 'boards')['__getitem__'](point['__getitem__']('y_board'))['__getitem__'](point['__getitem__']('x_board'))))) {
				var $augsub3 = $p['str'](piece['__getitem__'](2));
				var $augexpr3 = $p['getattr']($p['getattr'](self, 'state'), 'score');
				$augexpr3['__setitem__']($augsub3, $p['__op_add']($add17=$augexpr3['__getitem__']($augsub3),$add18=1));
			}
			return null;
		}
	, 1, [null,null,['self'],['point']]);
		$cls_definition['grid_to_state'] = $method;
		var $bases = new Array($m['AbsolutePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GridWidget', $p['tuple']($bases), $data);
	})();
	$m['AppInit'] = function() {
		var g;
		$m['pyjd']['setup']('./GridTest.html');
		g = $m['GridWidget']();
		$m['RootPanel']()['add'](g);
		$m['pyjd']['run']();
		return null;
	};
	$m['AppInit']['__name__'] = 'AppInit';

	$m['AppInit']['__bind_type__'] = 0;
	$m['AppInit']['__args__'] = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('./GridTest.html');
		$m['g'] = $m['GridWidget']();
		$m['RootPanel']()['add']($m['g']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end Meta */


/* end module: Meta */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.Window', 'pyjamas.logging', 'learning.State', 'learning', 'learning.ab', 'learning.is_win', 'learning.is_full', 'learning.turn', 'learning.is_over', 'learning.normalize']
*/
