/* start module: pyjamas.ui.Panel */
$pyjs['loaded_modules']['pyjamas.ui.Panel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Panel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Panel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Panel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Panel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Panel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Panel'] = $pyjs['loaded_modules']['pyjamas.ui.Panel'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['PanelBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Panel';
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,$iter2_idx,$iter1_array,child,$iter2_type,children,$iter2_array,$iter1_idx;
			children = $p['list']([]);
			$iter1_iter = self['__iter__']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				child = $iter1_nextval['$nextval'];
				children['append'](child);
			}
			$iter2_iter = children;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				child = $iter2_nextval['$nextval'];
				self['remove'](child);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var child,$iter3_idx,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = self;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				child = $iter3_nextval['$nextval'];
				child['onAttach']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method2('doDetachChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter4_nextval,$iter4_idx,$iter4_type,child,$iter4_array,$iter4_iter;
			$iter4_iter = self;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				child = $iter4_nextval['$nextval'];
				child['onDetach']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method2('getWidgetCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len'](self['getChildren']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidgetCount'] = $method;
		$method = $pyjs__bind_method2('getWidget', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['getChildren']()['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method2('getIndexedChild', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['getWidget'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getIndexedChild'] = $method;
		$method = $pyjs__bind_method2('addIndexedItem', function(index, child) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				child = arguments[2];
			}

			self['add'](child);
			return null;
		}
	, 1, [null,null,['self'],['index'],['child']]);
		$cls_definition['addIndexedItem'] = $method;
		$method = $pyjs__bind_method2('getWidgetIndex', function(child) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}

			return self['getChildren']()['index'](child);
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method2('getChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'children');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChildren'] = $method;
		$method = $pyjs__bind_method2('setWidget', function(index, widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				widget = arguments[2];
			}
			var existing;
			existing = self['getWidget'](index);
			if ($p['bool']((existing !== null))) {
				self['remove'](existing);
			}
			self['insert'](widget, index);
			return null;
		}
	, 1, [null,null,['self'],['index'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method2('append', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			return self['add'](widget);
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				widget = arguments[2];
			}

			return self['setWidget'](index, widget);
		}
	, 1, [null,null,['self'],['index'],['widget']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['getWidget'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len'](self['getChildren']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return (self !== null);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getChildren']()['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PanelBase', $p['tuple']($bases), $data);
	})();
	$m['Panel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Panel';
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

			self['children'] = $p['list']([]);
			$m['PanelBase']['__init__'](self);
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('disown', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var parentElement,element;
			if ($p['bool']((widget['getParent']() !== self))) {
				throw ($p['Exception']($p['sprintf']('widget %s is not a child of this panel %s', $p['tuple']([$p['str'](widget), $p['str'](self)]))));
			}
			element = widget['getElement']();
			widget['setParent'](null);
			parentElement = $m['DOM']['getParent'](element);
			if ($p['bool']((parentElement !== null))) {
				$m['DOM']['removeChild'](parentElement, element);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['disown'] = $method;
		$method = $pyjs__bind_method2('adopt', function(widget, container) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
			}

			if ($p['bool']((container !== null))) {
				widget['removeFromParent']();
				$m['DOM']['appendChild'](container, widget['getElement']());
			}
			widget['setParent'](self);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container']]);
		$cls_definition['adopt'] = $method;
		var $bases = new Array($m['PanelBase'],$m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Panel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Panel', 'Panel', $m['Panel']);
	return this;
}; /* end pyjamas.ui.Panel */


/* end module: pyjamas.ui.Panel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget']
*/
