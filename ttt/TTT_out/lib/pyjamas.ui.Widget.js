/* start module: pyjamas.ui.Widget */
$pyjs['loaded_modules']['pyjamas.ui.Widget'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Widget']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Widget'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Widget'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Widget>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Widget';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Widget'] = $pyjs['loaded_modules']['pyjamas.ui.Widget'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	$m['FocusHandler'] = $p['___import___']('pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui', null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['MouseWheelHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui', null, false);
	$m['InputHandler'] = $p['___import___']('pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui', null, false);
	$m['ChangeHandler'] = $p['___import___']('pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui', null, false);
	$m['DragHandler'] = $p['___import___']('pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui', null, false);
	$m['DropHandler'] = $p['___import___']('pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui', null, false);
	$m['Widget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Widget';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			self['attached'] = false;
			self['parent'] = null;
			self['layoutData'] = null;
			self['contextMenu'] = null;
			$pyjs_kwargs_call($m['UIObject'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getLayoutData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'layoutData');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLayoutData'] = $method;
		$method = $pyjs__bind_method2('getParent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'parent');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getParent'] = $method;
		$method = $pyjs__bind_method2('isAttached', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'attached');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isAttached'] = $method;
		$method = $pyjs__bind_method2('setContextMenu', function(menu) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				menu = arguments[1];
			}

			self['contextMenu'] = menu;
			if ($p['bool']((menu !== null))) {
				self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
			}
			else {
				self['unsinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
			}
			return null;
		}
	, 1, [null,null,['self'],['menu']]);
		$cls_definition['setContextMenu'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var type;
			if ($p['bool']($p['hasattr'](self, '_clickListeners'))) {
				$m['ClickHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_keyboardListeners'))) {
				$m['KeyboardHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_mouseListeners'))) {
				$m['MouseHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_mouseWheelListeners'))) {
				$m['MouseWheelHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_focusListeners'))) {
				$m['FocusHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_dragListeners'))) {
				$m['DragHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_changeListeners'))) {
				$m['ChangeHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_inputListeners'))) {
				$m['InputHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_dropListeners'))) {
				$m['DropHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool'](($p['getattr'](self, 'contextMenu') === null))) {
				return true;
			}
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'contextmenu'))) {
				$m['DOM']['eventCancelBubble'](event, true);
				$m['DOM']['eventPreventDefault'](event);
				self['contextMenu']['onContextMenu'](self);
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('doDetachChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](self['isAttached']())) {
				return null;
			}
			self['attached'] = true;
			$m['DOM']['setEventListener'](self['getElement'](), self);
			self['doAttachChildren']();
			self['onLoad']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool'](self['isAttached']()))) {
				return null;
			}
			self['doDetachChildren']();
			self['attached'] = false;
			$m['DOM']['setEventListener'](self['getElement'](), null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method2('setLayoutData', function(layoutData) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layoutData = arguments[1];
			}

			self['layoutData'] = layoutData;
			return null;
		}
	, 1, [null,null,['self'],['layoutData']]);
		$cls_definition['setLayoutData'] = $method;
		$method = $pyjs__bind_method2('setParent', function(parent) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
			}
			var $and1,$and2,oldparent;
			oldparent = $p['getattr'](self, 'parent');
			self['parent'] = parent;
			if ($p['bool']((parent === null))) {
				if ($p['bool'](($p['bool']($and1=(oldparent !== null))?$p['getattr'](oldparent, 'attached'):$and1))) {
					self['onDetach']();
				}
			}
			else if ($p['bool']($p['getattr'](parent, 'attached'))) {
				self['onAttach']();
			}
			return null;
		}
	, 1, [null,null,['self'],['parent']]);
		$cls_definition['setParent'] = $method;
		$method = $pyjs__bind_method2('removeFromParent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['hasattr']($p['getattr'](self, 'parent'), 'remove'))) {
				self['parent']['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeFromParent'] = $method;
		$method = $pyjs__bind_method2('getID', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'id');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getID'] = $method;
		$method = $pyjs__bind_method2('setID', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'id', id);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['setID'] = $method;
		var $bases = new Array($m['UIObject']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Widget', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Widget', 'Widget', $m['Widget']);
	return this;
}; /* end pyjamas.ui.Widget */


/* end module: pyjamas.ui.Widget */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', 'pyjamas.ui.UIObject', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui.FocusListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui.InputListener', 'pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui.ChangeListener', 'pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui.DragHandler', 'pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui.DropHandler']
*/
