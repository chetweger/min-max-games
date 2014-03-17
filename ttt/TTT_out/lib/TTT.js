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
	$m['StyleSheetCssText'] = $p['___import___']('pyjamas.ui.CSS.StyleSheetCssText', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
	$m['log'] = $m['logging']['getConsoleLogger']();
	$p['__import_all__']('ttt', null, $m, null, false);
	$m['margins'] = '\n<!--\n.margins_left {\n  margin-left: 50px;\n}\n.margins_both {\n  margin-top: 2em;\n  margin-left: 50px;\n  width: 900px;\n}\n-->\n';
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
			var header,explanation;
			$m['AbsolutePanel']['__init__'](self);
			$m['StyleSheetCssText']($m['margins']);
			header = '<div><H2 align="center">Welcome to Unbeatable Tic-Tac-Toe!</H2><br>My <a href="https://github.com/chetweger/min-max-games/blob/master/ttt/ttt.py">implementation</a> uses the min-max search algorithm with alpha beta pruning and a transposition table!</div>';
			header = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'margins_both'}, header]);
			self['add'](header);
			self['ai_first'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'StyleName':'margins_left'}, 'AI first.', self]);
			self['add']($p['getattr'](self, 'ai_first'));
			self['new_game'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{'StyleName':'margins_left'}, 'New game', self]);
			self['add']($p['getattr'](self, 'new_game'));
			self['g'] = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{'StyleName':'margins_left'}]);
			self['g']['resize'](3, 3);
			self['g']['setBorderWidth'](2);
			self['g']['setCellPadding'](4);
			self['g']['setCellSpacing'](1);
			self['init']();
			self['add']($p['getattr'](self, 'g'));
			self['state'] = (typeof State == "undefined"?$m['State']:State)();
			self['game_resolution'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'margins_left'}, '']);
			self['add']($p['getattr'](self, 'game_resolution'));
			explanation = '\n    <br>\n    <br>\n\n    <p>\n    <a name="depth_explanation"></a>\n    <h3>How the AI Works</h3>\n    The AI uses the <a href="http://en.wikipedia.org/wiki/Minimax">minimax</a> search algorithm to find a next move.  Basically the AI looks at all the possible moves that the player MAX can make (player MAX because the current player is trying to maximize the utility of its move), and selects the move with the highest predicted utility.  How does the player MAX calculate the predicted utility of a move or state?  Player MAX makes a recursive call to the minimax algorithm, except,\n    this time the next player will be player MIN who is trying to minimize the utility of the positions.  Player MIN, like player MAX looks at all the possible moves, but choses the move with the lowest predicted utility.  How does player MIN calculate the predicted utility of a move?  Well you can already guess: making a recursive call to the minimax algorithm.  However, at some point these recursive calls must stop.  In the case of tic-tac-toe, this occurs, when there no valid moves\n    for the next player to make, either because the board has been won or completely filled up with pieces.  When one of these terminal positions is encountered, the utility function is applied to the state:\n      <li>The board is a victory for player MAX: return 1</li>\n      <li>The board is a tie: return 0</li>\n      <li>The board is a defeat for player MAX: return -1</p>\n    </p>\n\n    <p>\n    <h3>Speeding up Minimax Search with Alpha Beta Pruning and a Transposition Table</h3>\n    <img width="600" align="right" src="http://chet-weger.herokuapp.com/media/imgs/alpha_beta.png"></img>\n    The minimax search algorithm\'s efficiency can be dramatically improved with alpha beta pruning and a transposition table. These optimizations provide an exponential decrease in running time while guaranteeing to never return a state with a utility value less than the value of what the vanilla minimax search returns.  The logic behind alpha beta pruning is illustrated in Figure 1.  In chess, a transposition is a sequence of moves that result in a position that can be reached by one or\n    more\n    alternate sequences of moves.  A transposition table is essentially a hash table of all positions that have been seen in a given minimax search.  A transposition table is therefore essentially a form a <a href="http://en.wikipedia.org/wiki/Memoization">memoization</a>.\n    </p>\n\n    <p>\n    <h3>Challenges in Combining Alpha Beta Pruning and a Transposition Table</h3>\n    During development, one of the most challenging bugs I faced involved naively combining alpha beta pruning and a transposition table. It turns out that naively combining the two optimizations introduces a bug causing the minimax search to return suboptimal states.  A breakthrough occurred when I noticed that my implementation seemed to play perfectly when it <em>only</em> had alpha beta pruning and in addition seemed to play perfectly when it <em>only</em> had a transposition table.\n    The suboptimal results only seemed to occur when both optimizations were present.  I realized at this moment that somehow combining both alpha beta pruning with a transposition table must cause a bug.  The problem is that a transposition table depends on the minimax search to return <em>exact</em> values, but when alpha beta pruning is present, whenever a cutoff occurs, the value returned is either an upper bound or a lower bound on the true value. An internet search confirmed my\n    suspicions and <a href="http://web.archive.org/web/20070822204120/www.seanet.com/~brucemo/topics/hashing.htm">provided</a> pseudo code for a fix to the problem.  You can find my code on <a href="https://github.com/chetweger/min-max-games/tree/master/ttt">github</a>.\n    </p>\n\n    <p>\n    <h3>Turning Python into JavaScript with pyjs/pyjamas</h3>\n    The AI for this game is programmed in python.  During initial development, the only interface to play the AI was through the python terminal.  When I decided to expand this project into a web app, I had to choose whether the AI would run on the client or the server.  I quickly decided that this computationally intensive task should be put client side which necessitated somehow transforming my python script into javascript.  I realized that I\n    could translate my python code into javascript manually, but a superior solution would be finding an adequate python to javascript compiler/translator.  Pyjs/pyjamas seemed adequate for this job, and it also provides a convenient library for creating a user interface.  Indeed, pyjs/pyjamas has been able to do everything I needed it to do, but if I had to start over again, I would probably <em>not</em> use pyjs/pyjamas.  Due to cryptic or non existent error messages, debugging pyjs/pyjamas is an\n    arduous process.  Indeed, the most difficult step was the initial translation of my python script into javascript which required a substantial change in my existing implementation to get around a <a href="https://github.com/pyjs/pyjs/issues/817">bug</a>.  In addition to cryptic error messages, the output of the pyjs/pyjamas compiler is extremely slow and inefficient.  However, due to the relative simplicity of tic tac toe and this implementation can solve tic-tac-toe from any\n    position in less than 10 seconds on most computers.</p>\n\n\n    <p align="center">Written by <a href="http://chet-weger.herokuapp.com/">Chet Weger</a>.  Questions, comments, bugs?  Contact me at chetweger [at] gmail.com.</p>\n    <p align="center"><a href="http://chet-weger.herokuapp.com/">Return to my home page.</a></p>\n    ';
			self['add']($pyjs_kwargs_call(null, $m['HTML'], null, null, [{'StyleName':'margins_both'}, explanation]));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('start_new_game', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['state'] = (typeof State == "undefined"?$m['State']:State)();
			self['game_over'] = false;
			self['ai_first']['setVisible'](true);
			self['state_to_grid']($p['getattr'](self, 'state'));
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
			var p,next_state;
			if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'ai_first')))) {
				$p['printFunc'](['player is ', $p['getattr']($p['getattr'](self, 'state'), 'player')], 1);
				$p['getattr'](self, 'state')['max_v'] = 1;
				$p['getattr'](self, 'state')['min_v'] = 2;
				self['ai_first']['setVisible'](false);
				$p['printFunc'](['button ai_first exists', $p['hasattr'](self, 'ai_first')], 1);
				self['state']['print_me']();
				next_state = (typeof ab == "undefined"?$m['ab']:ab)($p['getattr'](self, 'state'));
				self['state'] = next_state;
				self['state_to_grid'](next_state);
				$p['printFunc'](['[after]player is ', $p['getattr']($p['getattr'](self, 'state'), 'player')], 1);
			}
			else if ($p['bool']($p['op_eq'](sender, $p['getattr'](self, 'new_game')))) {
				self['start_new_game']();
			}
			else {
				$p['printFunc'](['player is ', $p['getattr']($p['getattr'](self, 'state'), 'player')], 1);
				if ($p['bool'](self['ai_first']['isVisible']())) {
					$p['printFunc'](['Setting state.max_v'], 1);
					$p['getattr'](self, 'state')['max_v'] = 2;
					$p['getattr'](self, 'state')['min_v'] = 1;
					self['ai_first']['setVisible'](false);
				}
				p = $p['getattr'](sender, 'point');
				self['g']['setText'](p['__getitem__']('y'), p['__getitem__']('x'), $p['str']($p['getattr']($p['getattr'](self, 'state'), 'player')));
				self['state'] = self['grid_to_state']();
				self['check_for_tie']();
				if ($p['bool']((typeof is_win == "undefined"?$m['is_win']:is_win)($p['getattr'](self, 'state')))) {
					$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'game_over':true, 'over_message':'You won! This should not happen. This is a bug. Please email chetweger@gmail.com describing the conditions of the game.'}, $p['getattr'](self, 'state')]);
				}
				$p['getattr'](self, 'state')['player'] = (typeof next_player == "undefined"?$m['next_player']:next_player)($p['getattr']($p['getattr'](self, 'state'), 'player'));
				self['state']['print_me']();
				next_state = (typeof ab == "undefined"?$m['ab']:ab)($p['getattr'](self, 'state'));
				self['state'] = next_state;
				self['state_to_grid'](next_state);
				self['check_for_tie']();
				if ($p['bool']((typeof is_win == "undefined"?$m['is_win']:is_win)($p['getattr'](self, 'state')))) {
					$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'game_over':true, 'over_message':'You lost! Better luck next time.'}, $p['getattr'](self, 'state')]);
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
				$pyjs_kwargs_call(self, 'state_to_grid', null, null, [{'game_over':true, 'over_message':'The game is a tie.'}, $p['getattr'](self, 'state')]);
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
				self['game_resolution']['setText'](over_message);
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
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.CSS.StyleSheetCssText', 'pyjamas.ui.CSS', 'pyjamas.Window', 'pyjamas.logging', 'ttt']
*/
