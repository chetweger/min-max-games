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
	$m['StyleSheetCssText'] = $p['___import___']('pyjamas.ui.CSS.StyleSheetCssText', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['State'] = $p['___import___']('learning.State', null, null, false);
	$m['ab'] = $p['___import___']('learning.ab', null, null, false);
	$m['is_win'] = $p['___import___']('learning.is_win', null, null, false);
	$m['is_full'] = $p['___import___']('learning.is_full', null, null, false);
	$m['turn'] = $p['___import___']('learning.turn', null, null, false);
	$m['is_over'] = $p['___import___']('learning.is_over', null, null, false);
	$m['normalize'] = $p['___import___']('learning.normalize', null, null, false);
	$m['find_last_move'] = $p['___import___']('learning.find_last_move', null, null, false);
	$m['INCREMENT_AMOUNT'] = 0.05;
	$m['margins'] = '\n<!--\n.margins_left {\n  margin-left: 50px;\n}\n.margins_both {\n  margin-top: 1em;\n  margin-left: 50px;\n  width: 900px;\n}\n-->\n';
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
			var $add2,$add3,$add1,$add4;
			self['state'] = $m['State']();
			self['game_over'] = false;
			self['TD_CONSTS'] = $p['dict']([['c3', 0.767944], ['c2', 1.049451], ['c1', 3.074038], ['c6', 0.220823], ['c5', 0.281883], ['c4', 0.605861]]);
			$m['AbsolutePanel']['__init__'](self);
			$m['StyleSheetCssText']($m['margins']);
			self['welcome_label'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'margins_both'}, '<H2 align="center">Welcome to Meta-Tic-Tac-Toe!</H2><p>Play first by clicking on one of the positions in the middle board or let the AI go first by clicking on "AI first".  To change the difficulty click on "Increase/Decrease search depth".  Note: if there is a pop-up saying that the script is taking a long time to complete, this is not a bug - the AI is just taking a while to find the next move.  Select the option to continue the script.</p>']);
			self['add']($p['getattr'](self, 'welcome_label'));
			self['depthLimit'] = 3;
			self['human_first'] = true;
			self['ai_first'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'StyleName':'margins_left'}, 'AI first.', self]);
			self['add']($p['getattr'](self, 'ai_first'));
			self['increase_depth'] = $m['Button']('Increase search depth', self);
			self['decrease_depth'] = $m['Button']('Decrease search depth', self);
			self['depth_label'] = $m['HTML']($p['__op_add']($add3=$p['__op_add']($add1='AI will search to a <a href="#depth_explanation">depth</a> of ',$add2=$p['str']($p['getattr'](self, 'depthLimit'))),$add4='.'));
			self['depth_grid'] = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'StyleName':'margins_left'}]);
			self['depth_grid']['resize'](1, 3);
			self['depth_grid']['setBorderWidth'](2);
			self['depth_grid']['setCellPadding'](9);
			self['depth_grid']['setCellSpacing'](1);
			self['add']($p['getattr'](self, 'depth_grid'));
			self['depth_grid']['setWidget'](0, 0, $p['getattr'](self, 'decrease_depth'));
			self['depth_grid']['setWidget'](0, 1, $p['getattr'](self, 'depth_label'));
			self['depth_grid']['setWidget'](0, 2, $p['getattr'](self, 'increase_depth'));
			self['new_game'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'StyleName':'margins_left'}, 'New game', self]);
			self['add']($p['getattr'](self, 'new_game'));
			self['score_label'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'margins_left'}, $p['sprintf']('CURRENT SCORE: Human: %d | AI: %d', $p['tuple']([0, 0]))]);
			self['add']($p['getattr'](self, 'score_label'));
			self['game_over_msg'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'margins_left'}, '']);
			self['add']($p['getattr'](self, 'game_over_msg'));
			self['g'] = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'StyleName':'margins_left'}]);
			self['g']['resize'](3, 3);
			self['g']['setBorderWidth'](2);
			self['g']['setCellPadding'](9);
			self['g']['setCellSpacing'](1);
			self['init']();
			self['add']($p['getattr'](self, 'g'));
			self['adj_grid'] = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'StyleName':'margins_left'}]);
			self['adj_grid']['resize'](7, 3);
			self['adj_grid']['setBorderWidth'](2);
			self['adj_grid']['setCellPadding'](9);
			self['adj_grid']['setCellSpacing'](1);
			self['init_constants_adj_grid']();
			self['add']($p['getattr'](self, 'adj_grid'));
			self['max_player'] = '-1';
			self['min_player'] = '-1';
			self['state_to_grid']();
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
			var $iter1_nextval,$iter1_type,td_keys,j,$iter1_iter,i,$add6,$iter1_array,key,$add5,$iter1_idx;
			self['decr_buttons'] = $p['dict']([]);
			self['adj_labels'] = $p['dict']([]);
			self['incr_buttons'] = $p['dict']([]);
			td_keys = $p['list'](['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);
			self['adj_grid']['setWidget'](0, 1, $m['HTML']('Adjust the <a href="#utility_function">constants</a> to change<br>the AI\'s behavior.'));
			$iter1_iter = $p['enumerate'](td_keys);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				key = $tupleassign1[1];
				j = $p['__op_add']($add5=i,$add6=1);
				$p['getattr'](self, 'decr_buttons')['__setitem__'](key, $m['Button']('<', self));
				self['adj_grid']['setWidget'](j, 0, $p['getattr'](self, 'decr_buttons')['__getitem__'](key));
				$p['getattr'](self, 'incr_buttons')['__setitem__'](key, $m['Button']('>', self));
				self['adj_grid']['setWidget'](j, 2, $p['getattr'](self, 'incr_buttons')['__getitem__'](key));
				$p['getattr'](self, 'adj_labels')['__setitem__'](key, $m['Label']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'TD_CONSTS')['__getitem__'](key)]))));
				self['adj_grid']['setWidget'](j, 1, $p['getattr'](self, 'adj_labels')['__getitem__'](key));
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
		$method = $pyjs__bind_method2('start_new_game', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['state'] = $m['State']();
			self['game_over'] = false;
			self['depthLimit'] = 3;
			self['human_first'] = true;
			self['ai_first']['setVisible'](true);
			self['check_win']();
			self['max_player'] = '-1';
			self['min_player'] = '-1';
			self['state_to_grid']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start_new_game'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $and2,last_position,g,point,new_state,$and1,$add14,$add15,$add16,$add10,$add7,$add12,$add13,$sub2,$add8,$add9,$sub1,$add11;
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'increase_depth')))) {
				self['depthLimit'] = $p['__op_add']($add7=$p['getattr'](self, 'depthLimit'),$add8=1);
				self['depth_label']['setHTML']($p['__op_add']($add11=$p['__op_add']($add9='AI will search to a <a href="#depth_explanation">depth</a> of ',$add10=$p['str']($p['getattr'](self, 'depthLimit'))),$add12='.'));
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'decrease_depth')))) {
				self['depthLimit'] = $p['__op_sub']($sub1=$p['getattr'](self, 'depthLimit'),$sub2=1);
				self['depth_label']['setHTML']($p['__op_add']($add15=$p['__op_add']($add13='AI will search to a <a href="#depth_explanation">depth</a> of ',$add14=$p['str']($p['getattr'](self, 'depthLimit'))),$add16='.'));
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'new_game')))) {
				self['start_new_game']();
			}
			self['check_adjusts'](sender);
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'game_over')))) {
				if ($p['bool'](($p['bool']($and1=$p['op_eq'](sender, $p['getattr'](self, 'ai_first')))?$p['op_eq']($p['getattr'](self, 'min_player'), (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))):$and1))) {
					self['human_first'] = false;
					self['max_player'] = '1';
					self['min_player'] = '2';
					$p['getattr']($p['getattr'](self, 'state'), 'next_piece')['__setitem__'](2, $p['getattr'](self, 'max_player'));
					self['ai_first']['setVisible'](false);
					new_state = $pyjs_kwargs_call(null, $m['ab'], null, null, [{'depth_limit':$p['getattr'](self, 'depthLimit')}, $p['getattr'](self, 'state'), $p['getattr'](self, 'TD_CONSTS')])['__getitem__'](1);
					last_position = $m['find_last_move']($p['getattr'](self, 'state'), new_state);
					self['state'] = new_state;
					$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'prev_x_board':last_position['__getitem__']('x_board'), 'prev_y_board':last_position['__getitem__']('y_board'), 'prev_x_cell':last_position['__getitem__']('x_cell'), 'prev_y_cell':last_position['__getitem__']('y_cell')}]);
				}
				if ($p['bool']($p['hasattr'](sender, 'point'))) {
					if ($p['bool']($p['op_eq']($p['getattr'](self, 'min_player'), (typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2))))) {
						self['max_player'] = '2';
						self['min_player'] = '1';
						self['ai_first']['setVisible'](false);
					}
					point = $p['getattr'](sender, 'point');
					g = self['g']['getWidget'](point['__getitem__']('y_board'), point['__getitem__']('x_board'));
					g['setText'](point['__getitem__']('y_cell'), point['__getitem__']('x_cell'), $p['str']($p['getattr'](self, 'min_player')));
					self['grid_to_state'](point);
					self['check_win']();
					$p['getattr']($p['getattr'](self, 'state'), 'next_piece')['__setitem__'](2, $p['getattr'](self, 'max_player'));
					new_state = $pyjs_kwargs_call(null, $m['ab'], null, null, [{'depth_limit':$p['getattr'](self, 'depthLimit')}, $p['getattr'](self, 'state'), $p['getattr'](self, 'TD_CONSTS')])['__getitem__'](1);
					last_position = $m['find_last_move']($p['getattr'](self, 'state'), new_state);
					self['state'] = new_state;
					$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'prev_x_board':last_position['__getitem__']('x_board'), 'prev_y_board':last_position['__getitem__']('y_board'), 'prev_x_cell':last_position['__getitem__']('x_cell'), 'prev_y_cell':last_position['__getitem__']('y_cell')}]);
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
			var $augexpr1,$augexpr2,$augsub2,$augsub1,$add17,$sub3,$add18,$sub4;
			if ($p['bool']($p['op_eq'](sign, '+'))) {
				var $augsub1 = key;
				var $augexpr1 = $p['getattr'](self, 'TD_CONSTS');
				$augexpr1['__setitem__']($augsub1, $p['__op_add']($add17=$augexpr1['__getitem__']($augsub1),$add18=$m['INCREMENT_AMOUNT']));
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
			var $add21,$add20,$add22,$add25,$add24,ai_score,human_score,msg,$add26,$add19,$add23;
			self['depth_label']['setHTML']($p['__op_add']($add21=$p['__op_add']($add19='AI will search to a <a href="#depth_explanation">depth</a> of ',$add20=$p['str']($p['getattr'](self, 'depthLimit'))),$add22='.'));
			self['check_adjusts'](null);
			human_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']($p['str']($p['getattr'](self, 'min_player')));
			ai_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']($p['str']($p['getattr'](self, 'max_player')));
			self['score_label']['setText']($p['sprintf']('CURRENT SCORE: Human(%d): %d | AI(%d): %d', $p['tuple']([$p['getattr'](self, 'min_player'), human_score, $p['getattr'](self, 'max_player'), ai_score])));
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
				self['game_over_msg']['setHTML']($p['__op_add']($add25=$p['__op_add']($add23='<H3>',$add24=msg),$add26='</H3>'));
				self['game_over'] = true;
			}
			if ($p['bool']($p['getattr'](self, 'game_over'))) {
				self['game_over_msg']['setVisible'](true);
			}
			else {
				self['game_over_msg']['setVisible'](false);
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
		$method = $pyjs__bind_method2('state_to_grid', function(prev_x_board, prev_y_board, prev_x_cell, prev_y_cell) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				prev_x_board = arguments[1];
				prev_y_board = arguments[2];
				prev_x_cell = arguments[3];
				prev_y_cell = arguments[4];
			}
			if (typeof prev_x_board == 'undefined') prev_x_board=arguments['callee']['__args__'][3][1];
			if (typeof prev_y_board == 'undefined') prev_y_board=arguments['callee']['__args__'][4][1];
			if (typeof prev_x_cell == 'undefined') prev_x_cell=arguments['callee']['__args__'][5][1];
			if (typeof prev_y_cell == 'undefined') prev_y_cell=arguments['callee']['__args__'][6][1];
			var will_make_buttons,$iter10_nextval,y_cell,$iter8_iter,$iter10_iter,$iter9_iter,$iter9_nextval,$iter9_idx,board,$iter7_type,$iter9_type,x_board,$and8,$and9,$iter8_idx,x_cell,$iter7_iter,$iter8_type,$iter10_idx,$and7,$and12,$and13,$and10,$and11,$iter8_nextval,$and14,$iter7_idx,y_board,b,$iter7_nextval,g,$iter7_array,$iter8_array,$iter10_array,$iter10_type,$iter9_array;
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
									if ($p['bool']($p['op_eq']($p['getattr'](self, 'min_player'), (typeof ($usub3=1)=='number'?
										-$usub3:
										$p['op_usub']($usub3))))) {
										b = $m['Button']('Play 1 here.', self);
									}
									else {
										b = $m['Button']($p['sprintf']('Play %d here.', $p['getattr']($p['getattr'](self, 'state'), 'next_piece')['__getitem__'](2)), self);
									}
									b['point'] = $p['dict']([['x_cell', x_cell], ['y_cell', y_cell], ['y_board', y_board], ['x_board', x_board]]);
								}
								else {
									b = $m['HTML']('-');
								}
							}
							else if ($p['bool']($p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 1))) {
								if ($p['bool'](($p['bool']($and7=$p['op_eq'](prev_x_cell, x_cell))?($p['bool']($and8=$p['op_eq'](prev_y_cell, y_cell))?($p['bool']($and9=$p['op_eq'](prev_y_board, y_board))?$p['op_eq'](prev_x_board, x_board):$and9):$and8):$and7))) {
									b = $m['HTML']('<p style="color:red">1</p>');
								}
								else {
									b = $m['HTML']('1');
								}
							}
							else if ($p['bool']($p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 2))) {
								if ($p['bool'](($p['bool']($and11=$p['op_eq'](prev_x_cell, x_cell))?($p['bool']($and12=$p['op_eq'](prev_y_cell, y_cell))?($p['bool']($and13=$p['op_eq'](prev_y_board, y_board))?$p['op_eq'](prev_x_board, x_board):$and13):$and12):$and11))) {
									b = $m['HTML']('<p style="color:red">2</p>');
								}
								else {
									b = $m['HTML']('2');
								}
							}
							g['setWidget'](y_cell, x_cell, b);
						}
					}
					self['add'](g);
					self['g']['setWidget'](y_board, x_board, g);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['prev_x_board', (typeof ($usub4=1)=='number'?
			-$usub4:
			$p['op_usub']($usub4))],['prev_y_board', (typeof ($usub5=1)=='number'?
			-$usub5:
			$p['op_usub']($usub5))],['prev_x_cell', (typeof ($usub6=1)=='number'?
			-$usub6:
			$p['op_usub']($usub6))],['prev_y_cell', (typeof ($usub7=1)=='number'?
			-$usub7:
			$p['op_usub']($usub7))]]);
		$cls_definition['state_to_grid'] = $method;
		$method = $pyjs__bind_method2('grid_to_state', function(point) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				point = arguments[1];
			}
			var y_cell,$augexpr3,$augsub3,$iter13_idx,$add28,$add27,board,$iter11_idx,$iter13_array,x_board,$or4,$iter14_array,$iter14_type,$or3,$iter11_iter,$iter12_array,$iter14_iter,$iter11_array,$iter11_nextval,y_board,$iter14_idx,$iter14_nextval,$iter13_nextval,g,$iter13_iter,$iter12_type,$iter11_type,$iter13_type,$iter12_iter,x_cell,piece,$iter12_idx,$iter12_nextval;
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
				var $augsub3 = $p['str']($p['getattr'](self, 'min_player'));
				var $augexpr3 = $p['getattr']($p['getattr'](self, 'state'), 'score');
				$augexpr3['__setitem__']($augsub3, $p['__op_add']($add27=$augexpr3['__getitem__']($augsub3),$add28=1));
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
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('./GridTest.html');
		$m['g'] = $m['GridWidget']();
		$m['r'] = $m['RootPanel']();
		$m['r']['add']($m['g']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end Meta */


/* end module: Meta */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.CSS.StyleSheetCssText', 'pyjamas.ui.CSS', 'pyjamas.Window', 'learning.State', 'learning', 'learning.ab', 'learning.is_win', 'learning.is_full', 'learning.turn', 'learning.is_over', 'learning.normalize', 'learning.find_last_move']
*/
