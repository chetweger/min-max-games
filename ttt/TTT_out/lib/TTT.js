/* start module: TTT */
$pyjs['loaded_modules']['TTT'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['TTT']['__was_initialized__']) return $pyjs['loaded_modules']['TTT'];
	var $m = $pyjs['loaded_modules']['TTT'];
	$m['__repr__'] = function() { return '<module: TTT>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TTT';
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
	$p['__import_all__']('ttt', null, $m, null, false);
	$m['GridWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'TTT';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var header;
			$m['AbsolutePanel']['__init__'](self);
			header = '<div>Welcome to unbeatable tic-tac-toe.  <br>My <a href="https://github.com/chetweger/min-max-games/blob/master/ttt/ttt.py">implementation</a> uses the min-max search algorithm with alpha beta-pruning and a transposition table!</div>';
			header = $m['HTML'](header);
			self['add'](header);
			self['ai_first'] = $m['Button']('AI first.', self);
			self['add']($p['getattr'](self, 'ai_first'));
			self['g'] = $m['Grid']();
			self['g']['resize'](3, 3);
			self['g']['setBorderWidth'](2);
			self['g']['setCellPadding'](4);
			self['g']['setCellSpacing'](1);
			self['init']();
			self['add']($p['getattr'](self, 'g'));
			self['state'] = (typeof State == "undefined"?$m['State']:State)();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $and1,p,$and2,next_state;
			if ($p['bool'](($p['bool']($and1=$p['hasattr'](self, 'ai_first'))?$p['op_eq'](sender, $p['getattr'](self, 'ai_first')):$and1))) {
				$p['printFunc'](['player is ', $p['getattr']($p['getattr'](self, 'state'), 'player')], 1);
				$p['getattr'](self, 'state')['max_v'] = 1;
				$p['getattr'](self, 'state')['min_v'] = 2;
				self['remove']($p['getattr'](self, 'ai_first'));
				$p['delattr'](self, 'ai_first');
				$p['printFunc'](['button ai_first exists', $p['hasattr'](self, 'ai_first')], 1);
				self['state']['print_me']();
				next_state = (typeof ab == "undefined"?$m['ab']:ab)($p['getattr'](self, 'state'));
				self['state'] = next_state;
				self['state_to_grid'](next_state);
				$p['printFunc'](['[after]player is ', $p['getattr']($p['getattr'](self, 'state'), 'player')], 1);
			}
			else {
				$p['printFunc'](['player is ', $p['getattr']($p['getattr'](self, 'state'), 'player')], 1);
				if ($p['bool']($p['hasattr'](self, 'ai_first'))) {
					$p['printFunc'](['Setting state.max_v'], 1);
					$p['getattr'](self, 'state')['max_v'] = 2;
					$p['getattr'](self, 'state')['min_v'] = 1;
					self['remove']($p['getattr'](self, 'ai_first'));
				}
				p = $p['getattr'](sender, 'point');
				self['g']['setText'](p['__getitem__']('y'), p['__getitem__']('x'), $p['str']($p['getattr']($p['getattr'](self, 'state'), 'player')));
				self['state'] = self['grid_to_state']();
				self['check_for_tie']();
				if ($p['bool']((typeof is_win == "undefined"?$m['is_win']:is_win)($p['getattr'](self, 'state')))) {
					$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'game_over':true, 'over_message':'<b>You won! This should not happen. This is a bug. Please email chetweger@gmail.com describing the conditions of the game.</b>'}, $p['getattr'](self, 'state')]);
				}
				$p['getattr'](self, 'state')['player'] = (typeof next_player == "undefined"?$m['next_player']:next_player)($p['getattr']($p['getattr'](self, 'state'), 'player'));
				self['state']['print_me']();
				next_state = (typeof ab == "undefined"?$m['ab']:ab)($p['getattr'](self, 'state'));
				self['state'] = next_state;
				self['state_to_grid'](next_state);
				self['check_for_tie']();
				if ($p['bool']((typeof is_win == "undefined"?$m['is_win']:is_win)($p['getattr'](self, 'state')))) {
					$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'game_over':true, 'over_message':'<b>You lost! Better luck next time.</b>'}, $p['getattr'](self, 'state')]);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('check_for_tie', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']((typeof is_over == "undefined"?$m['is_over']:is_over)($p['getattr'](self, 'state')))) {
				$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'game_over':true, 'over_message':'<b>The game is a tie.</b>'}, $p['getattr'](self, 'state')]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['check_for_tie'] = $method;
		$method = $pyjs__bind_method2('state_to_grid', function(state, game_over, over_message) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
				game_over = arguments[2];
				over_message = arguments[3];
			}
			if (typeof game_over == 'undefined') game_over=arguments['callee']['__args__'][4][1];
			if (typeof over_message == 'undefined') over_message=arguments['callee']['__args__'][5][1];
			var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,$iter1_idx,$iter2_idx,$iter1_iter,b,board,x,y,$iter2_type,$iter2_array,$iter1_array;
			if ($p['bool'](over_message)) {
				self['add']($m['HTML'](over_message));
			}
			board = $p['getattr'](state, 'board');
			$iter1_iter = $p['range'](3);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				y = $iter1_nextval['$nextval'];
				$iter2_iter = $p['range'](3);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](board['__getitem__'](y)['__getitem__'](x), 0))) {
						if ($p['bool'](!$p['bool'](game_over))) {
							b = $m['Button']('Press', self);
							b['point'] = $p['dict']([['x', x], ['y', y]]);
							self['g']['setWidget'](y, x, b);
						}
						else {
							self['g']['setText'](y, x, '-');
						}
					}
					else if ($p['bool']($p['op_eq'](board['__getitem__'](y)['__getitem__'](x), '1'))) {
						self['g']['setText'](y, x, '1');
					}
					else if ($p['bool']($p['op_eq'](board['__getitem__'](y)['__getitem__'](x), '2'))) {
						self['g']['setText'](y, x, '2');
					}
					else {
						$p['printFunc'](['state_to_grid exception'], 1);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['state'],['game_over', false],['over_message', '']]);
		$cls_definition['state_to_grid'] = $method;
		$method = $pyjs__bind_method2('grid_to_state', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$or1,$or2,$iter4_nextval,$iter3_type,$iter4_idx,$iter4_array,$iter3_iter,$iter4_type,$iter3_array,y,x,$iter4_iter,$iter3_nextval,next_state;
			next_state = (typeof State == "undefined"?$m['State']:State)();
			$iter3_iter = $p['range'](3);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				y = $iter3_nextval['$nextval'];
				$iter4_iter = $p['range'](3);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					x = $iter4_nextval['$nextval'];
					if ($p['bool']($p['isinstance'](self['g']['getWidget'](y, x), $m['Button']))) {
						$p['printFunc']([y, x], 1);
						$p['getattr'](next_state, 'board')['__getitem__'](y)['__setitem__'](x, 0);
					}
					else if ($p['bool'](($p['bool']($or1=$p['op_eq'](self['g']['getText'](y, x), '1'))?$or1:$p['op_eq'](self['g']['getText'](y, x), '2')))) {
						$p['getattr'](next_state, 'board')['__getitem__'](y)['__setitem__'](x, $p['float_int'](self['g']['getText'](y, x)));
					}
					else {
						$p['printFunc'](['grid_to_state exception'], 1);
					}
				}
			}
			next_state['min_v'] = $p['getattr']($p['getattr'](self, 'state'), 'min_v');
			next_state['max_v'] = $p['getattr']($p['getattr'](self, 'state'), 'max_v');
			next_state['player'] = $p['getattr']($p['getattr'](self, 'state'), 'player');
			return next_state;
		}
	, 1, [null,null,['self']]);
		$cls_definition['grid_to_state'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,x,b,$iter6_idx,$iter6_type,$iter5_idx,$iter6_array,$iter5_iter,$iter5_array,y,$iter5_type,$iter6_iter,$iter6_nextval;
			$iter5_iter = $p['range'](3);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				y = $iter5_nextval['$nextval'];
				$iter6_iter = $p['range'](3);
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					x = $iter6_nextval['$nextval'];
					b = $m['Button']('Press', self);
					b['point'] = $p['dict']([['x', x], ['y', y]]);
					self['g']['setWidget'](y, x, b);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init'] = $method;
		var $bases = new Array($m['AbsolutePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GridWidget', $p['tuple']($bases), $data);
	})();
	$m['AppInit'] = function() {

		return $m['GridWidget']();
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
}; /* end TTT */


/* end module: TTT */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.Window', 'pyjamas.logging', 'ttt']
*/
