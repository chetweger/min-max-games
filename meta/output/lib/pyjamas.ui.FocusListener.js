/* start module: pyjamas.ui.FocusListener */
$pyjs['loaded_modules']['pyjamas.ui.FocusListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FocusListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FocusListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FocusListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FocusListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FocusListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['FocusListener'] = $pyjs['loaded_modules']['pyjamas.ui.FocusListener'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['fireFocusEvent'] = function(listeners, sender, event) {
		var $iter2_nextval,$iter1_nextval,$iter2_iter,$iter1_idx,$iter2_idx,$iter1_iter,listener,$iter1_array,$iter2_type,type,$iter2_array,$iter1_type;
		type = $m['DOM']['eventGetType'](event);
		if ($p['bool']($p['op_eq'](type, 'focus'))) {
			$iter1_iter = listeners;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				listener['onFocus'](sender);
			}
		}
		else if ($p['bool']($p['op_eq'](type, 'blur'))) {
			$iter2_iter = listeners;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				listener = $iter2_nextval['$nextval'];
				listener['onLostFocus'](sender);
			}
		}
		return null;
	};
	$m['fireFocusEvent']['__name__'] = 'fireFocusEvent';

	$m['fireFocusEvent']['__bind_type__'] = 0;
	$m['fireFocusEvent']['__args__'] = [null,null,['listeners'],['sender'],['event']];
	$m['FOCUS_EVENTS'] = $p['list'](['focus', 'blur']);
	$m['FocusHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.FocusListener';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_focusListeners'] = $p['list']([]);
			self['sinkEvents']($p['getattr']($m['Event'], 'FOCUSEVENTS'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onFocus'] = $method;
		$method = $pyjs__bind_method2('onLostFocus', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or1,type,$or2;
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](type, 'blur'))?$or1:$p['op_eq'](type, 'focus')))) {
				$m['fireFocusEvent']($p['getattr'](self, '_focusListeners'), self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addFocusListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_focusListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addFocusListener'] = $method;
		$method = $pyjs__bind_method2('removeFocusListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_focusListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeFocusListener'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FocusHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.FocusListener */


/* end module: pyjamas.ui.FocusListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
