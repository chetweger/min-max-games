/* start module: LearnMeta */
$pyjs['loaded_modules']['LearnMeta'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['LearnMeta']['__was_initialized__']) return $pyjs['loaded_modules']['LearnMeta'];
	var $m = $pyjs['loaded_modules']['LearnMeta'];
	$m['__repr__'] = function() { return '<module: LearnMeta>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LearnMeta';
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
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
	$m['log'] = $m['logging']['getConsoleLogger']();
	$m['State'] = $p['___import___']('learning.State', null, null, false);
	$m['ab'] = $p['___import___']('learning.ab', null, null, false);
	$m['is_win'] = $p['___import___']('learning.is_win', null, null, false);
	$m['is_full'] = $p['___import___']('learning.is_full', null, null, false);
	$m['turn'] = $p['___import___']('learning.turn', null, null, false);
	$m['is_over'] = $p['___import___']('learning.is_over', null, null, false);
	$m['normalize'] = $p['___import___']('learning.normalize', null, null, false);
	$m['td_learning'] = $p['___import___']('learning.td_learning', null, null, false);
	$m['INCREMENT_AMOUNT'] = 0.05;
	$m['GridWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'LearnMeta';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add3,html,$add4,$add1,explanation;
			self['state'] = $m['State']();
			self['game_round'] = 0;
			self['TD_CONSTS'] = $p['dict']([['c3', 1.0], ['c2', 1.0], ['c1', 1.0], ['c6', 1.0], ['c5', 1.0], ['c4', 1.0]]);
			self['CONSTS'] = $p['dict']([['c3', 1.0], ['c2', 1.0], ['c1', 1.0], ['c6', 1.0], ['c5', 1.0], ['c4', 1.0]]);
			self['BEST_CONSTANTS'] = $p['dict']([['c3', 0.767944], ['c2', 1.049451], ['c1', 3.074038], ['c6', 0.220823], ['c5', 0.281883], ['c4', 0.605861]]);
			self['ONES_CONSTS'] = $p['dict']([['c3', 1.0], ['c2', 1.0], ['c1', 1.0], ['c6', 1.0], ['c5', 1.0], ['c4', 1.0]]);
			$m['AbsolutePanel']['__init__'](self);
			self['depth_limit'] = 2;
			html = '<a href="file:///home/chet/projects/pyjs/meta/output/LearnMeta.html">Reload game.  Reset everything.</a>';
			self['new_game'] = $m['HTML'](html);
			self['add']($p['getattr'](self, 'new_game'));
			self['train_td'] = $m['Button']('Begin game.  Learning AI first!', self);
			self['add']($p['getattr'](self, 'train_td'));
			self['train_dumb'] = $m['Button']('Begin game.  Dumb AI first!', self);
			self['add']($p['getattr'](self, 'train_dumb'));
			self['increase_depth'] = $m['Button']('Increase ply search depth.', self);
			self['add']($p['getattr'](self, 'increase_depth'));
			self['decrease_depth'] = $m['Button']('Decrease ply search depth.', self);
			self['add']($p['getattr'](self, 'decrease_depth'));
			self['depth_label'] = $m['Label']($p['__op_add']($add3=$p['__op_add']($add1='Current depth is ',$add2=$p['str']($p['getattr'](self, 'depth_limit'))),$add4='.'));
			self['add']($p['getattr'](self, 'depth_label'));
			self['score_label'] = $m['Label']($p['sprintf']('Learning AI: %d | Dumb AI: %d', $p['tuple']([0, 0])));
			self['add']($p['getattr'](self, 'score_label'));
			self['g'] = $m['Grid']();
			self['g']['resize'](3, 3);
			self['g']['setBorderWidth'](2);
			self['g']['setCellPadding'](9);
			self['g']['setCellSpacing'](1);
			self['init']();
			self['add']($p['getattr'](self, 'g'));
			self['adj_grid'] = $m['Grid']();
			self['adj_grid']['resize'](7, 4);
			self['adj_grid']['setBorderWidth'](2);
			self['adj_grid']['setCellPadding'](9);
			self['adj_grid']['setCellSpacing'](1);
			self['init_constants_adj_grid']();
			self['add']($p['getattr'](self, 'adj_grid'));
			self['reset_constants'] = $m['Button']("Reset all of Learning AI's constants to 1.", self);
			self['add']($p['getattr'](self, 'reset_constants'));
			self['state_to_grid']();
			explanation = '<div>I can put stuff about temporal difference learning etc. here..</div>';
			explanation = $m['HTML'](explanation);
			self['add'](explanation);
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
			var j,$iter1_nextval,$iter1_type,td_keys,i,learning_ai_header,$iter1_iter,dumb_ai_header,$add6,$iter1_array,key,$add5,$iter1_idx;
			self['decr_buttons'] = $p['dict']([]);
			self['adj_learning_labels'] = $p['dict']([]);
			self['adj_dumb_labels'] = $p['dict']([]);
			self['incr_buttons'] = $p['dict']([]);
			td_keys = $p['list'](['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);
			learning_ai_header = $m['Label']('Constant for the learning AI.');
			self['adj_grid']['setWidget'](0, 0, learning_ai_header);
			dumb_ai_header = $m['Label']('Constants for the dumb AI.');
			self['adj_grid']['setWidget'](0, 2, dumb_ai_header);
			$iter1_iter = $p['enumerate'](td_keys);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				key = $tupleassign1[1];
				j = $p['__op_add']($add5=i,$add6=1);
				$p['getattr'](self, 'adj_learning_labels')['__setitem__'](key, $m['Label']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'TD_CONSTS')['__getitem__'](key)]))));
				self['adj_grid']['setWidget'](j, 0, $p['getattr'](self, 'adj_learning_labels')['__getitem__'](key));
				$p['getattr'](self, 'decr_buttons')['__setitem__'](key, $m['Button']('<', self));
				self['adj_grid']['setWidget'](j, 1, $p['getattr'](self, 'decr_buttons')['__getitem__'](key));
				$p['getattr'](self, 'adj_dumb_labels')['__setitem__'](key, $m['Label']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'CONSTS')['__getitem__'](key)]))));
				self['adj_grid']['setWidget'](j, 2, $p['getattr'](self, 'adj_dumb_labels')['__getitem__'](key));
				$p['getattr'](self, 'incr_buttons')['__setitem__'](key, $m['Button']('>', self));
				self['adj_grid']['setWidget'](j, 3, $p['getattr'](self, 'incr_buttons')['__getitem__'](key));
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
							b = $m['Button']('AI could play here.', self);
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
			var $add14,$add15,$add16,$add10,$add7,$add12,$add13,$sub2,$add8,$add9,$sub1,$add11;
			self['check_adjusts'](sender);
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'reset_constants')))) {
				self['TD_CONSTS'] = $p['getattr'](self, 'ONES_CONSTS');
				self['sync_consts']();
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'increase_depth')))) {
				self['depth_limit'] = $p['__op_add']($add7=$p['getattr'](self, 'depth_limit'),$add8=1);
				self['depth_label']['setText']($p['__op_add']($add11=$p['__op_add']($add9='Current depth is ',$add10=$p['str']($p['getattr'](self, 'depth_limit'))),$add12='.'));
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'decrease_depth')))) {
				self['depth_limit'] = $p['__op_sub']($sub1=$p['getattr'](self, 'depth_limit'),$sub2=1);
				self['depth_label']['setText']($p['__op_add']($add15=$p['__op_add']($add13='Current depth is ',$add14=$p['str']($p['getattr'](self, 'depth_limit'))),$add16='.'));
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'new_game')))) {
				(typeof AppInit == "undefined"?$m['AppInit']:AppInit)();
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'train_td')))) {
				self['state'] = $m['State']();
				$p['printFunc'](['here!!!!'], 1);
				self['dumb_ai_str'] = '2';
				self['td_ai_str'] = '1';
				$p['getattr'](self, 'state')['next_piece'] = $p['list']([1, 1, 1]);
				$pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'td_ai_turn')}, 250]);
				$p['printFunc'](['Done training.'], 1);
			}
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'train_dumb')))) {
				self['state'] = $m['State']();
				self['dumb_ai_str'] = '1';
				self['td_ai_str'] = '2';
				$p['getattr'](self, 'state')['next_piece'] = $p['list']([1, 1, 1]);
				$pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'dumb_ai_turn')}, 250]);
				$p['printFunc'](['Done training.'], 1);
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
			$p['printFunc'](['adjusting constant for ', sender], 1);
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
				self['TD_CONSTS'] = $m['normalize']($p['getattr'](self, 'TD_CONSTS'));
				$p['getattr'](self, 'adj_learning_labels')['__getitem__'](key)['setText']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'TD_CONSTS')['__getitem__'](key)])));
			}
			self['sync_consts']();
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
				var $augexpr1 = $p['getattr'](self, 'CONSTS');
				$augexpr1['__setitem__']($augsub1, $p['__op_add']($add17=$augexpr1['__getitem__']($augsub1),$add18=$m['INCREMENT_AMOUNT']));
			}
			else if ($p['bool']($p['op_eq'](sign, '-'))) {
				var $augsub2 = key;
				var $augexpr2 = $p['getattr'](self, 'CONSTS');
				$augexpr2['__setitem__']($augsub2, $p['__op_sub']($sub3=$augexpr2['__getitem__']($augsub2),$sub4=$m['INCREMENT_AMOUNT']));
			}
			return null;
		}
	, 1, [null,null,['self'],['key'],['sign']]);
		$cls_definition['change_td_const'] = $method;
		$method = $pyjs__bind_method2('sync_consts', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter7_nextval,td_keys,$iter7_iter,$iter7_array,key,$iter7_idx,$iter7_type;
			td_keys = $p['list'](['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);
			$iter7_iter = td_keys;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				key = $iter7_nextval['$nextval'];
				$p['getattr'](self, 'adj_learning_labels')['__getitem__'](key)['setText']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'TD_CONSTS')['__getitem__'](key)])));
				$p['getattr'](self, 'adj_dumb_labels')['__getitem__'](key)['setText']($p['sprintf']('Constant %d: %f', $p['tuple']([key['__getitem__'](1), $p['getattr'](self, 'CONSTS')['__getitem__'](key)])));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['sync_consts'] = $method;
		$method = $pyjs__bind_method2('check_is_win', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dumb_ai_score,$add21,$add20,$add22,$add25,$add24,$add26,game_over_message,msg,learning_ai_score,$add19,$add23;
			self['state_to_grid']();
			learning_ai_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']($p['getattr'](self, 'td_ai_str'));
			dumb_ai_score = $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']($p['getattr'](self, 'dumb_ai_str'));
			$p['printFunc'](['scores are ', (typeof p1_score == "undefined"?$m['p1_score']:p1_score), (typeof p2_score == "undefined"?$m['p2_score']:p2_score)], 1);
			self['score_label']['setText']($p['sprintf']('Learning AI(%d): %d | Dumb AI(%d): %d', $p['tuple']([$p['getattr'](self, 'td_ai_str'), learning_ai_score, $p['getattr'](self, 'dumb_ai_str'), dumb_ai_score])));
			self['state']['printInfo']();
			if ($p['bool']($m['is_over']($p['getattr'](self, 'state')))) {
				if ($p['bool'](($p['cmp'](learning_ai_score, dumb_ai_score) == 1))) {
					msg = $p['sprintf']('the learning AI won with score %d vs %d.', $p['tuple']([learning_ai_score, dumb_ai_score]));
				}
				else if ($p['bool'](($p['cmp'](learning_ai_score, dumb_ai_score) == -1))) {
					msg = $p['sprintf']('the dumb AI won with score %d vs %d.', $p['tuple']([dumb_ai_score, learning_ai_score]));
				}
				else if ($p['bool']($p['op_eq'](learning_ai_score, dumb_ai_score))) {
					msg = 'the game ended in a tie.';
				}
				self['game_round'] = $p['__op_add']($add19=$p['getattr'](self, 'game_round'),$add20=1);
				game_over_message = $m['Label']($p['__op_add']($add25=$p['__op_add']($add23=$p['__op_add']($add21='In game round ',$add22=$p['str']($p['getattr'](self, 'game_round'))),$add24=', '),$add26=msg));
				self['add'](game_over_message);
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['check_is_win'] = $method;
		$method = $pyjs__bind_method2('dumb_ai_turn', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var nextState,over,expectedUtility;
			$p['printFunc'](['\n\nNaive AIs turn which plays the piece: ', $p['getattr']($p['getattr'](self, 'state'), 'next_piece')['__getitem__'](2)], 1);
			$p['printFunc'](['next piece is ', $p['getattr']($p['getattr'](self, 'state'), 'next_piece')], 1);
			$p['printFunc'](['TD_CONSTS', $p['getattr'](self, 'TD_CONSTS')], 1);
			var $tupleassign2 = $p['__ass_unpack']($pyjs_kwargs_call(null, $m['ab'], null, null, [{'depth_limit':$p['getattr'](self, 'depth_limit')}, $p['getattr'](self, 'state'), $p['getattr'](self, 'CONSTS')]), 2, null);
			expectedUtility = $tupleassign2[0];
			nextState = $tupleassign2[1];
			self['state'] = nextState;
			$p['printFunc'](['Scores: Player 1: ', $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('2')], 1);
			self['state']['printInfo']();
			over = self['check_is_win']();
			$p['printFunc'](['back in dumb'], 1);
			if ($p['bool'](!$p['bool'](over))) {
				self['pause_update'] = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'td_ai_turn')}, 250]);
			}
			else {
				return true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['dumb_ai_turn'] = $method;
		$method = $pyjs__bind_method2('td_ai_turn', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var over,terminal_state,state,expectedUtility;
			$p['printFunc'](['\n\nTD AI player starting turn. TD AI places the piece:', $p['getattr']($p['getattr'](self, 'state'), 'next_piece')['__getitem__'](2)], 1);
			$p['printFunc'](['TD_CONSTS after being adjusted are: ', $p['getattr'](self, 'TD_CONSTS')], 1);
			var $tupleassign3 = $p['__ass_unpack']($pyjs_kwargs_call(null, $m['ab'], null, null, [{'depth_limit':$p['getattr'](self, 'depth_limit')}, $p['getattr'](self, 'state'), $p['getattr'](self, 'TD_CONSTS')]), 2, null);
			expectedUtility = $tupleassign3[0];
			state = $tupleassign3[1];
			terminal_state = $p['getattr'](expectedUtility, 'terminal');
			self['TD_CONSTS'] = $m['td_learning'](terminal_state, $p['getattr'](self, 'TD_CONSTS'), $p['getattr'](self, 'state'));
			self['sync_consts']();
			self['state'] = state;
			$p['printFunc'](['Scores: Player 1: ', $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('1'), ' Player 2: ', $p['getattr']($p['getattr'](self, 'state'), 'score')['__getitem__']('2')], 1);
			state['printInfo']();
			$p['printFunc'](['TD_CONSTS after being adjusted are: ', $p['getattr'](self, 'TD_CONSTS')], 1);
			over = self['check_is_win']();
			$p['printFunc'](['back in td'], 1);
			$p['printFunc'](['Is over ', over], 1);
			if ($p['bool'](!$p['bool'](over))) {
				return $pyjs_kwargs_call(null, $m['Timer'], null, null, [{'notify':$p['getattr'](self, 'dumb_ai_turn')}, 250]);
			}
			else {
				return true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['td_ai_turn'] = $method;
		$method = $pyjs__bind_method2('will_buttons', function(y_board, x_board) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y_board = arguments[1];
				x_board = arguments[2];
			}
			var piece,$or1,$or2,$and1,$and3,$and4,board,playable,$and2;
			board = $p['getattr']($p['getattr'](self, 'state'), 'boards');
			piece = $p['list']($p['getattr']($p['getattr'](self, 'state'), 'next_piece'));
			playable = true;
			if ($p['bool'](($p['bool']($or1=$m['is_win'](board['__getitem__'](piece['__getitem__'](0))['__getitem__'](piece['__getitem__'](1))))?$or1:$m['is_full'](board['__getitem__'](piece['__getitem__'](0))['__getitem__'](piece['__getitem__'](1)))))) {
				playable = false;
			}
			if ($p['bool'](($p['bool']($and1=!$p['bool']($m['is_win'](board['__getitem__'](y_board)['__getitem__'](x_board))))?!$p['bool']($m['is_full'](board['__getitem__'](y_board)['__getitem__'](x_board))):$and1))) {
				if ($p['bool'](!$p['bool'](playable))) {
					return true;
				}
				if ($p['bool'](playable)) {
					return ($p['bool']($and3=$p['op_eq'](y_board, piece['__getitem__'](0)))?$p['op_eq'](x_board, piece['__getitem__'](1)):$and3);
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
			var will_make_buttons,$iter10_nextval,y_cell,$iter8_iter,$iter10_iter,$iter9_iter,$iter9_nextval,$iter9_idx,board,$iter11_idx,$iter9_type,x_board,$iter8_idx,$iter11_iter,$iter8_type,$iter10_idx,$iter8_nextval,$iter11_array,$iter11_nextval,y_board,b,g,$iter11_type,$iter8_array,$iter10_array,x_cell,$iter10_type,$iter9_array;
			board = $p['getattr']($p['getattr'](self, 'state'), 'boards');
			$iter8_iter = $p['range'](3);
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				y_board = $iter8_nextval['$nextval'];
				$iter9_iter = $p['range'](3);
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					x_board = $iter9_nextval['$nextval'];
					will_make_buttons = self['will_buttons'](y_board, x_board);
					g = $m['Grid']();
					g['resize'](3, 3);
					g['setBorderWidth'](2);
					g['setCellPadding'](9);
					g['setCellSpacing'](1);
					$iter10_iter = $p['range'](3);
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						y_cell = $iter10_nextval['$nextval'];
						$iter11_iter = $p['range'](3);
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							x_cell = $iter11_nextval['$nextval'];
							if ($p['bool']($p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 0))) {
								if ($p['bool'](will_make_buttons)) {
									b = $m['Button']('AI could play here.', self);
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
}; /* end LearnMeta */


/* end module: LearnMeta */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.Window', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.logging', 'learning.State', 'learning', 'learning.ab', 'learning.is_win', 'learning.is_full', 'learning.turn', 'learning.is_over', 'learning.normalize', 'learning.td_learning']
*/
