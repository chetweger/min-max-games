/* start module: pyjamas.ui.InputListener */
$pyjs['loaded_modules']['pyjamas.ui.InputListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.InputListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.InputListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.InputListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.InputListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.InputListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['InputListener'] = $pyjs['loaded_modules']['pyjamas.ui.InputListener'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['fireInputEvent'] = function(listeners, sender, event) {
		var $iter1_nextval,$iter1_idx,$iter1_iter,listener,$iter1_array,etype,$iter1_type;
		etype = $m['DOM']['eventGetType'](event);
		if ($p['bool'](!$p['op_eq'](etype, 'input'))) {
			return null;
		}
		$iter1_iter = listeners;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			listener = $iter1_nextval['$nextval'];
			if ($p['bool']($p['hasattr'](listener, 'onInput'))) {
				listener['onInput'](sender);
			}
			else {
				listener(sender);
			}
		}
		return null;
	};
	$m['fireInputEvent']['__name__'] = 'fireInputEvent';

	$m['fireInputEvent']['__bind_type__'] = 0;
	$m['fireInputEvent']['__args__'] = [null,null,['listeners'],['sender'],['event']];
	$m['InputHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.InputListener';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_inputListeners'] = $p['list']([]);
			self['sinkEvents']($p['getattr']($m['Event'], 'ONINPUT'));
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
			var etype;
			etype = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](etype, 'input'))) {
				$m['fireInputEvent']($p['getattr'](self, '_inputListeners'), self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addInputListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_inputListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addInputListener'] = $method;
		$method = $pyjs__bind_method2('removeInputListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_inputListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeInputListener'] = $method;
		$method = $pyjs__bind_method2('onInput', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onInput'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('InputHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.InputListener */


/* end module: pyjamas.ui.InputListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
