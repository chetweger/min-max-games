/* start module: pyjamas.ui.CheckBox */
$pyjs['loaded_modules']['pyjamas.ui.CheckBox'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.CheckBox']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.CheckBox'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.CheckBox'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.CheckBox>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CheckBox';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['CheckBox'] = $pyjs['loaded_modules']['pyjamas.ui.CheckBox'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['ButtonBase'] = $p['___import___']('pyjamas.ui.ButtonBase.ButtonBase', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
	$m['_CheckBox_unique_id'] = 0;
	$m['CheckBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.CheckBox';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['name', 'Name', 'Name', null])]);
		$method = $pyjs__bind_method2('__init__', function($$label, asHTML) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var ka = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					var ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				$$label = arguments[1];
				asHTML = arguments[2];
				var ka = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof asHTML != 'undefined') {
					if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
						ka = asHTML;
						asHTML = arguments[3];
					}
				} else 				if (typeof $$label != 'undefined') {
					if ($$label !== null && typeof $$label['$pyjs_is_kwarg'] != 'undefined') {
						ka = $$label;
						$$label = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof $$label == 'undefined') $$label=arguments['callee']['__args__'][3][1];
			if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][4][1];
			var $or1,$or2,$$label,element;
			ka['__setitem__']('StyleName', ka['get']('StyleName', 'gwt-CheckBox'));
			if ($p['bool']($$label)) {
				if ($p['bool'](asHTML)) {
					ka['__setitem__']('HTML', $$label);
				}
				else {
					ka['__setitem__']('Text', $$label);
				}
			}
			element = ($p['bool']($or1=ka['pop']('Element', null))?$or1:$m['DOM']['createInputCheck']());
			$pyjs_kwargs_call(self, 'initElement', null, ka, [{}, element]);
			return null;
		}
	, 1, [null,['ka'],['self'],['$$label', null],['asHTML', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['ButtonBase']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('sinkEvents', function(eventBitsToAdd) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToAdd = arguments[1];
			}

			eventBitsToAdd |= $m['DOM']['getEventsSunk']($p['getattr'](self, 'inputElem'));
			$m['DOM']['sinkEvents']($p['getattr'](self, 'inputElem'), eventBitsToAdd);
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
		$cls_definition['sinkEvents'] = $method;
		$method = $pyjs__bind_method2('initElement', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var ka = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					var ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				element = arguments[1];
				var ka = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						ka = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $or4,uid,$or3;
			self['inputElem'] = element;
			self['labelElem'] = $m['DOM']['createLabel']();
			element = ($p['bool']($or3=ka['pop']('Element', null))?$or3:$m['DOM']['createSpan']());
			$pyjs_kwargs_call($m['ButtonBase'], '__init__', null, ka, [{}, self, element]);
			self['sinkEvents'](($p['getattr']($m['Event'], 'FOCUSEVENTS'))|($p['getattr']($m['Event'], 'ONCLICK')));
			$m['DOM']['appendChild'](self['getElement'](), $p['getattr'](self, 'inputElem'));
			$m['DOM']['appendChild'](self['getElement'](), $p['getattr'](self, 'labelElem'));
			uid = $p['sprintf']('check%d', self['getUniqueID']());
			$m['DOM']['setAttribute']($p['getattr'](self, 'inputElem'), 'id', uid);
			$m['DOM']['setAttribute']($p['getattr'](self, 'labelElem'), 'htmlFor', uid);
			return null;
		}
	, 1, [null,['ka'],['self'],['element']]);
		$cls_definition['initElement'] = $method;
		$method = $pyjs__bind_method2('getUniqueID', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add4,$add3;
			$m['_CheckBox_unique_id'] = $p['__op_add']($add3=$m['_CheckBox_unique_id'],$add4=1);
			return $m['_CheckBox_unique_id'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUniqueID'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerHTML']($p['getattr'](self, 'labelElem'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute']($p['getattr'](self, 'inputElem'), 'name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerText']($p['getattr'](self, 'labelElem'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('setChecked', function(checked) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				checked = arguments[1];
			}

			$m['DOM']['setBooleanAttribute']($p['getattr'](self, 'inputElem'), 'checked', checked);
			$m['DOM']['setBooleanAttribute']($p['getattr'](self, 'inputElem'), 'defaultChecked', checked);
			return null;
		}
	, 1, [null,null,['self'],['checked']]);
		$cls_definition['setChecked'] = $method;
		$method = $pyjs__bind_method2('isChecked', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getChecked']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['isChecked'] = $method;
		$method = $pyjs__bind_method2('getChecked', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var propName;
			if ($p['bool'](self['isAttached']())) {
				propName = 'checked';
			}
			else {
				propName = 'defaultChecked';
			}
			return $m['DOM']['getBooleanAttribute']($p['getattr'](self, 'inputElem'), propName);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChecked'] = $method;
		$method = $pyjs__bind_method2('isEnabled', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getEnabled']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEnabled'] = $method;
		$method = $pyjs__bind_method2('getEnabled', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return !$p['bool']($m['DOM']['getBooleanAttribute']($p['getattr'](self, 'inputElem'), 'disabled'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEnabled'] = $method;
		$method = $pyjs__bind_method2('setEnabled', function(enabled) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}

			$m['DOM']['setBooleanAttribute']($p['getattr'](self, 'inputElem'), 'disabled', !$p['bool'](enabled));
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setEnabled'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}

			if ($p['bool'](focused)) {
				$m['Focus']['focus']($p['getattr'](self, 'inputElem'));
			}
			else {
				$m['Focus']['blur']($p['getattr'](self, 'inputElem'));
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			$m['DOM']['setInnerHTML']($p['getattr'](self, 'labelElem'), html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setName', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$m['DOM']['setAttribute']($p['getattr'](self, 'inputElem'), 'name', name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method2('setTabIndex', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['Focus']['setTabIndex']($p['getattr'](self, 'inputElem'), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setInnerText']($p['getattr'](self, 'labelElem'), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setChecked'](self['isChecked']());
			$m['ButtonBase']['onDetach'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		var $bases = new Array($m['ButtonBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CheckBox', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.CheckBox', 'CheckBox', $m['CheckBox']);
	return this;
}; /* end pyjamas.ui.CheckBox */


/* end module: pyjamas.ui.CheckBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ButtonBase.ButtonBase', 'pyjamas.ui', 'pyjamas.ui.ButtonBase', 'pyjamas.ui.Event', 'pyjamas.ui.Focus']
*/
