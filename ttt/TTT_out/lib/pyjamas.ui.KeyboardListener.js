/* start module: pyjamas.ui.KeyboardListener */
$pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.KeyboardListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.KeyboardListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.KeyboardListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['KeyboardListener'] = $pyjs['loaded_modules']['pyjamas.ui.KeyboardListener'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['KEY_ALT'] = 18;
	$m['KEY_BACKSPACE'] = 8;
	$m['KEY_CTRL'] = 17;
	$m['KEY_DELETE'] = 46;
	$m['KEY_DOWN'] = 40;
	$m['KEY_END'] = 35;
	$m['KEY_ENTER'] = 13;
	$m['KEY_ESCAPE'] = 27;
	$m['KEY_HOME'] = 36;
	$m['KEY_LEFT'] = 37;
	$m['KEY_PAGEDOWN'] = 34;
	$m['KEY_PAGEUP'] = 33;
	$m['KEY_RIGHT'] = 39;
	$m['KEY_SHIFT'] = 16;
	$m['KEY_TAB'] = 9;
	$m['KEY_UP'] = 38;
	$m['KEYS'] = $p['list']([$m['KEY_ALT'], $m['KEY_BACKSPACE'], $m['KEY_CTRL'], $m['KEY_DELETE'], $m['KEY_DOWN'], $m['KEY_END'], $m['KEY_ENTER'], $m['KEY_ESCAPE'], $m['KEY_HOME'], $m['KEY_LEFT'], $m['KEY_PAGEDOWN'], $m['KEY_PAGEUP'], $m['KEY_RIGHT'], $m['KEY_SHIFT'], $m['KEY_TAB'], $m['KEY_UP']]);
	$m['MODIFIER_ALT'] = 4;
	$m['MODIFIER_CTRL'] = 2;
	$m['MODIFIER_SHIFT'] = 1;
	$m['getKeyboardModifiers'] = function(event) {
		var shift,alt,ctrl;
		shift = 0;
		ctrl = 0;
		alt = 0;
		if ($p['bool']($m['DOM']['eventGetShiftKey'](event))) {
			shift = $m['MODIFIER_SHIFT'];
		}
		if ($p['bool']($m['DOM']['eventGetCtrlKey'](event))) {
			ctrl = $m['MODIFIER_CTRL'];
		}
		if ($p['bool']($m['DOM']['eventGetAltKey'](event))) {
			alt = $m['MODIFIER_ALT'];
		}
		return (shift)|(ctrl)|(alt);
	};
	$m['getKeyboardModifiers']['__name__'] = 'getKeyboardModifiers';

	$m['getKeyboardModifiers']['__bind_type__'] = 0;
	$m['getKeyboardModifiers']['__args__'] = [null,null,['event']];
	$m['fireKeyboardEvent'] = function(listeners, sender, event) {
		var $iter3_type,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,type,$iter1_array,$iter1_nextval,listener,$iter2_idx,$iter2_nextval,$iter3_array,keycode,$iter1_type,modifiers,$iter1_idx,$iter2_array;
		modifiers = $m['getKeyboardModifiers'](event);
		keycode = $m['DOM']['eventGetKeyCode'](event);
		type = $m['DOM']['eventGetType'](event);
		if ($p['bool']($p['op_eq'](type, 'keydown'))) {
			$iter1_iter = listeners;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				listener['onKeyDown'](sender, keycode, modifiers);
			}
		}
		else if ($p['bool']($p['op_eq'](type, 'keyup'))) {
			$iter2_iter = listeners;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				listener['onKeyUp'](sender, keycode, modifiers);
			}
		}
		else if ($p['bool']($p['op_eq'](type, 'keypress'))) {
			$iter3_iter = listeners;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				listener = $iter3_nextval['$nextval'];
				listener['onKeyPress'](sender, keycode, modifiers);
			}
		}
		return null;
	};
	$m['fireKeyboardEvent']['__name__'] = 'fireKeyboardEvent';

	$m['fireKeyboardEvent']['__bind_type__'] = 0;
	$m['fireKeyboardEvent']['__args__'] = [null,null,['listeners'],['sender'],['event']];
	$m['KEYBOARD_EVENTS'] = $p['list'](['keydown', 'keyup', 'keypress']);
	$m['KeyboardHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.KeyboardListener';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_keyboardListeners'] = $p['list']([]);
			self['sinkEvents']($p['getattr']($m['Event'], 'KEYEVENTS'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var type;
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['list'](['keydown', 'keyup', 'keypress'])['__contains__'](type))) {
				$m['fireKeyboardEvent']($p['getattr'](self, '_keyboardListeners'), self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addKeyboardListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_keyboardListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addKeyboardListener'] = $method;
		$method = $pyjs__bind_method2('removeKeyboardListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_keyboardListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeKeyboardListener'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('KeyboardHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.KeyboardListener */


/* end module: pyjamas.ui.KeyboardListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
