/* start module: pyjamas.ui.RowFormatter */
$pyjs['loaded_modules']['pyjamas.ui.RowFormatter'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.RowFormatter']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.RowFormatter'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.RowFormatter'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.RowFormatter>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RowFormatter';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['RowFormatter'] = $pyjs['loaded_modules']['pyjamas.ui.RowFormatter'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Applier'] = $p['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
	$m['RowFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.RowFormatter';
		$method = $pyjs__bind_method2('__init__', function(outer) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				outer = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof outer != 'undefined') {
					if (outer !== null && typeof outer['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = outer;
						outer = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self['outer'] = outer;
			$pyjs_kwargs_call($m['Applier'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['outer']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addStyleName', function(row, styleName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				styleName = arguments[2];
			}

			self['outer']['setStyleName'](self['ensureElement'](row), styleName, true);
			return null;
		}
	, 1, [null,null,['self'],['row'],['styleName']]);
		$cls_definition['addStyleName'] = $method;
		$method = $pyjs__bind_method2('getElement', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['outer']['checkRowBounds'](row);
			return self['getRow']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method2('getStyleName', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			return $m['DOM']['getAttribute'](self['getElement'](row), 'className');
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method2('isVisible', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var element;
			element = self['getElement'](row);
			return self['outer']['isVisible'](element);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['isVisible'] = $method;
		$method = $pyjs__bind_method2('removeStyleName', function(row, styleName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				styleName = arguments[2];
			}

			self['outer']['setStyleName'](self['getElement'](row), styleName, false);
			return null;
		}
	, 1, [null,null,['self'],['row'],['styleName']]);
		$cls_definition['removeStyleName'] = $method;
		$method = $pyjs__bind_method2('setStyleName', function(row, styleName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				styleName = arguments[2];
			}
			var elem;
			elem = self['ensureElement'](row);
			$m['DOM']['setAttribute'](elem, 'className', styleName);
			return null;
		}
	, 1, [null,null,['self'],['row'],['styleName']]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method2('setVerticalAlign', function(row, align) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				align = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](self['ensureElement'](row), 'verticalAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['row'],['align']]);
		$cls_definition['setVerticalAlign'] = $method;
		$method = $pyjs__bind_method2('setVisible', function(row, visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				visible = arguments[2];
			}
			var element;
			element = self['ensureElement'](row);
			self['outer']['setVisible'](element, visible);
			return null;
		}
	, 1, [null,null,['self'],['row'],['visible']]);
		$cls_definition['setVisible'] = $method;
		$method = $pyjs__bind_method2('ensureElement', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['outer']['prepareRow'](row);
			return self['getRow']($p['getattr']($p['getattr'](self, 'outer'), 'bodyElem'), row);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['ensureElement'] = $method;
		$method = $pyjs__bind_method2('getRow', function(element, row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				row = arguments[2];
			}

			return element['rows']['item'](row);
		}
	, 1, [null,null,['self'],['element'],['row']]);
		$cls_definition['getRow'] = $method;
		$method = $pyjs__bind_method2('setStyleAttr', function(row, attrName, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				attrName = arguments[2];
				value = arguments[3];
			}
			var element;
			element = self['ensureElement'](row);
			$m['DOM']['setStyleAttribute'](element, attrName, value);
			return null;
		}
	, 1, [null,null,['self'],['row'],['attrName'],['value']]);
		$cls_definition['setStyleAttr'] = $method;
		$method = $pyjs__bind_method2('setAttr', function(row, attrName, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				attrName = arguments[2];
				value = arguments[3];
			}
			var element;
			element = self['ensureElement'](row);
			$m['DOM']['setAttribute'](element, attrName, value);
			return null;
		}
	, 1, [null,null,['self'],['row'],['attrName'],['value']]);
		$cls_definition['setAttr'] = $method;
		var $bases = new Array($m['Applier']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RowFormatter', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.RowFormatter */


/* end module: pyjamas.ui.RowFormatter */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
