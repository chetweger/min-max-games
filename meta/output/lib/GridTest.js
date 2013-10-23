/* start module: GridTest */
$pyjs['loaded_modules']['GridTest'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['GridTest']['__was_initialized__']) return $pyjs['loaded_modules']['GridTest'];
	var $m = $pyjs['loaded_modules']['GridTest'];
	$m['__repr__'] = function() { return '<module: GridTest>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GridTest';
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
	$p['__import_all__']('learning', null, $m, null, false);
	$m['GridWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'GridTest';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var g;
			$m['AbsolutePanel']['__init__'](self);
			self['ai_first'] = $m['Button']('AI first.', self);
			self['add']($p['getattr'](self, 'ai_first'));
			self['g'] = $m['Grid']();
			self['g']['resize'](3, 3);
			self['g']['setBorderWidth'](2);
			self['g']['setCellPadding'](9);
			self['g']['setCellSpacing'](1);
			self['init']();
			self['add']($p['getattr'](self, 'g'));
			self['state'] = (typeof State == "undefined"?$m['State']:State)();
			g = self['g']['getWidget'](0, 0);
			g['setText'](0, 0, '1');
			self['grid_to_state']();
			self['state_to_grid']();
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
				$p['getattr'](self, 'state')['max_v'] = 1;
				$p['getattr'](self, 'state')['min_v'] = 2;
				self['remove']($p['getattr'](self, 'ai_first'));
				$p['delattr'](self, 'ai_first');
				$p['printFunc'](['button ai_first exists', $p['hasattr'](self, 'ai_first')], 1);
				self['state']['print_me']();
				next_state = (typeof ab == "undefined"?$m['ab']:ab)($p['getattr'](self, 'state'));
				self['state_to_grid'](next_state);
			}
			else {
				if ($p['bool']($p['hasattr'](self, 'ai_first'))) {
					$p['printFunc'](['Setting state.max_v'], 1);
					$p['getattr'](self, 'state')['max_v'] = 2;
					$p['getattr'](self, 'state')['min_v'] = 1;
					self['remove']($p['getattr'](self, 'ai_first'));
				}
				p = $p['getattr'](sender, 'point');
				self['g']['setText'](p['__getitem__']('y'), p['__getitem__']('x'), $p['str']($p['getattr']($p['getattr'](self, 'state'), 'min_v')));
				self['state'] = self['grid_to_state']();
				$p['getattr'](self, 'state')['player'] = (typeof next_player == "undefined"?$m['next_player']:next_player)($p['getattr']($p['getattr'](self, 'state'), 'player'));
				self['state']['print_me']();
				next_state = (typeof ab == "undefined"?$m['ab']:ab)($p['getattr'](self, 'state'));
				self['state_to_grid'](next_state);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
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
			piece = $p['getattr']($p['getattr'](self, 'state'), 'nextPiece');
			playable = true;
			if ($p['bool'](($p['bool']($or1=(typeof isWin == "undefined"?$m['isWin']:isWin)(board['__getitem__'](piece['__getitem__'](0))['__getitem__'](piece['__getitem__'](1))))?$or1:(typeof isFull == "undefined"?$m['isFull']:isFull)(board['__getitem__'](piece['__getitem__'](0))['__getitem__'](piece['__getitem__'](1)))))) {
				playable = false;
			}
			if ($p['bool'](($p['bool']($and3=!$p['bool']((typeof isWin == "undefined"?$m['isWin']:isWin)(board['__getitem__'](y_board)['__getitem__'](x_board))))?!$p['bool']((typeof isFull == "undefined"?$m['isFull']:isFull)(board['__getitem__'](y_board)['__getitem__'](x_board))):$and3))) {
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
			var will_make_buttons,y_cell,$iter3_type,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_iter,x_board,$iter1_array,$iter1_nextval,$iter2_idx,b,$iter3_array,y_board,$iter2_nextval,$iter1_type,g,$iter4_nextval,board,$iter4_idx,x_cell,$iter1_idx,$iter4_array,$iter3_nextval,$iter2_array;
			board = $p['getattr']($p['getattr'](self, 'state'), 'boards');
			$iter1_iter = $p['range'](3);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				y_board = $iter1_nextval['$nextval'];
				$iter2_iter = $p['range'](3);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x_board = $iter2_nextval['$nextval'];
					will_make_buttons = self['will_buttons'](y_board, x_board);
					g = $m['Grid']();
					g['resize'](3, 3);
					g['setBorderWidth'](2);
					g['setCellPadding'](9);
					g['setCellSpacing'](1);
					$iter3_iter = $p['range'](3);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						y_cell = $iter3_nextval['$nextval'];
						$iter4_iter = $p['range'](3);
						$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
						while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
							x_cell = $iter4_nextval['$nextval'];
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
								$p['printFunc'](['state_to_grid exception'], 1);
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
		$method = $pyjs__bind_method2('grid_to_state', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,y_cell,$iter6_type,$iter5_array,$iter8_iter,$iter5_iter,$iter5_type,$iter6_iter,$iter6_nextval,$or3,$add3,board,$iter5_idx,$iter7_type,x_board,$augexpr1,$or4,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$augsub1,$iter6_array,$iter8_nextval,$iter7_idx,y_board,$iter7_nextval,g,$iter7_array,$iter8_array,$add2,x_cell,$add1,$add4,piece;
			board = $p['getattr']($p['getattr'](self, 'state'), 'boards');
			$iter5_iter = $p['range'](3);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				y_board = $iter5_nextval['$nextval'];
				$iter6_iter = $p['range'](3);
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					x_board = $iter6_nextval['$nextval'];
					g = self['g']['getWidget'](y_board, x_board);
					$iter7_iter = $p['range'](3);
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						y_cell = $iter7_nextval['$nextval'];
						$iter8_iter = $p['range'](3);
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							x_cell = $iter8_nextval['$nextval'];
							if ($p['bool']($p['isinstance'](g['getWidget'](y_cell, x_cell), $m['Button']))) {
								if (!( $p['op_eq'](board['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 0) )) {
								   throw $p['AssertionError']();
								 }
							}
							else if ($p['bool'](($p['bool']($or3=$p['op_eq'](g['getText'](y_cell, x_cell), '1'))?$or3:$p['op_eq'](g['getText'](y_cell, x_cell), '2')))) {
								if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'state'), 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__getitem__']('cell'), 0))) {
									$p['getattr']($p['getattr'](self, 'state'), 'boards')['__getitem__'](y_board)['__getitem__'](x_board)['__getitem__'](y_cell)['__getitem__'](x_cell)['__setitem__']('cell', $p['str'](g['getText'](y_cell, x_cell)));
									piece = $p['getattr']($p['getattr'](self, 'state'), 'nextPiece');
									if ($p['bool']((typeof isWin == "undefined"?$m['isWin']:isWin)($p['getattr']($p['getattr'](self, 'state'), 'boards')['__getitem__'](piece['__getitem__'](0))['__getitem__'](piece['__getitem__'](1))))) {
										var $augsub1 = $p['str'](piece['__getitem__'](2));
										var $augexpr1 = $p['getattr']($p['getattr'](self, 'state'), 'score');
										$augexpr1['__setitem__']($augsub1, $p['__op_add']($add1=$augexpr1['__getitem__']($augsub1),$add2=1));
									}
									piece['__setitem__'](2, $p['__op_add']($add3=piece['__getitem__'](2),$add4=(typeof turn == "undefined"?$m['turn']:turn)(piece['__getitem__'](2))));
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
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['grid_to_state'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,y_cell,$iter10_iter,$iter9_array,$iter9_iter,$iter9_nextval,$iter9_idx,$iter11_idx,$iter9_type,x_board,$iter11_iter,$iter12_array,$iter11_array,$iter11_nextval,y_board,b,g,$iter12_type,$iter11_type,$iter10_array,$iter12_nextval,$iter12_iter,x_cell,$iter10_type,$iter12_idx,$iter10_idx;
			$iter9_iter = $p['range'](3);
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				y_board = $iter9_nextval['$nextval'];
				$iter10_iter = $p['range'](3);
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					x_board = $iter10_nextval['$nextval'];
					g = $m['Grid']();
					g['resize'](3, 3);
					g['setBorderWidth'](2);
					g['setCellPadding'](9);
					g['setCellSpacing'](1);
					$iter11_iter = $p['range'](3);
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						x_cell = $iter11_nextval['$nextval'];
						$iter12_iter = $p['range'](3);
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							y_cell = $iter12_nextval['$nextval'];
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
}; /* end GridTest */


/* end module: GridTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.Window', 'pyjamas.logging', 'learning']
*/
