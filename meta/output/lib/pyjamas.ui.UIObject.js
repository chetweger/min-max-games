/* start module: pyjamas.ui.UIObject */
$pyjs['loaded_modules']['pyjamas.ui.UIObject'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.UIObject']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.UIObject'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.UIObject'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.UIObject>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.UIObject';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['UIObject'] = $pyjs['loaded_modules']['pyjamas.ui.UIObject'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	$m['Applier'] = $p['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
	$m['findStyleName'] = function(element, style) {
		var $or4,$or1,last,idx,$or2,lastPos,oldStyle,$add2,$add3,$add1,$add4,$and1,$or3,$sub2,$sub1,$and2;
		oldStyle = $m['DOM']['getAttribute'](element, 'className');
		if ($p['bool']((oldStyle === null))) {
			return (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		idx = oldStyle['find'](style);
		lastPos = $p['len'](oldStyle);
		while ($p['bool'](!$p['op_eq'](idx, (typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2))))) {
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](idx, 0))?$or1:$p['op_eq'](oldStyle['__getitem__']($p['__op_sub']($sub1=idx,$sub2=1)), ' ')))) {
				last = $p['__op_add']($add1=idx,$add2=$p['len'](style));
				if ($p['bool'](($p['bool']($or3=$p['op_eq'](last, lastPos))?$or3:($p['bool']($and1=($p['cmp'](last, lastPos) == -1))?$p['op_eq'](oldStyle['__getitem__'](last), ' '):$and1)))) {
					break;
				}
			}
			idx = oldStyle['find'](style, $p['__op_add']($add3=idx,$add4=1));
		}
		return idx;
	};
	$m['findStyleName']['__name__'] = 'findStyleName';

	$m['findStyleName']['__bind_type__'] = 0;
	$m['findStyleName']['__args__'] = [null,null,['element'],['style']];
	$m['setStyleName'] = function(element, style, add) {
		var end,idx,oldStyle,begin,$add6,$add7,$add12,$add5,$sub3,$add10,$add8,$add9,$add11,$sub4;
		oldStyle = $m['DOM']['getAttribute'](element, 'className');
		if ($p['bool']((oldStyle === null))) {
			oldStyle = '';
		}
		idx = $m['findStyleName'](element, style);
		if ($p['bool'](add)) {
			if ($p['bool']($p['op_eq'](idx, (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))))) {
				$m['DOM']['setAttribute'](element, 'className', $p['__op_add']($add7=$p['__op_add']($add5=oldStyle,$add6=' '),$add8=style));
			}
			return null;
		}
		if ($p['bool']($p['op_eq'](idx, (typeof ($usub4=1)=='number'?
			-$usub4:
			$p['op_usub']($usub4))))) {
			return null;
		}
		if ($p['bool']($p['op_eq'](idx, 0))) {
			begin = '';
		}
		else {
			begin = $p['__getslice'](oldStyle, 0, $p['__op_sub']($sub3=idx,$sub4=1));
		}
		end = $p['__getslice'](oldStyle, $p['__op_add']($add9=idx,$add10=$p['len'](style)), null);
		$m['DOM']['setAttribute'](element, 'className', $p['__op_add']($add11=begin,$add12=end));
		return null;
	};
	$m['setStyleName']['__name__'] = 'setStyleName';

	$m['setStyleName']['__bind_type__'] = 0;
	$m['setStyleName']['__args__'] = [null,null,['element'],['style'],['add']];
	$m['UIObject'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.UIObject';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['visible', 'Visibility', 'Visible', null]), $p['tuple'](['element', 'Element', 'Element', null]), $p['tuple'](['stylename', 'Style name', 'StyleName', null]), $p['tuple'](['width', 'Width', 'Width', null]), $p['tuple'](['height', 'Height', 'Height', null]), $p['tuple'](['size', 'Size', 'Size', null]), $p['tuple'](['title', 'Title', 'Title', null]), $p['tuple'](['zindex', 'Z Index', 'zIndex', null])]);
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add14,$add13;
			return $p['__op_add']($add13=$m['Applier']['_getProps'](),$add14=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
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

			$pyjs_kwargs_call($m['Applier'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAbsoluteLeft'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAbsoluteTop'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('getClientHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'clientHeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getClientHeight'] = $method;
		$method = $pyjs__bind_method2('getClientWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'clientWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getClientWidth'] = $method;
		$method = $pyjs__bind_method2('getElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'element');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method2('getOffsetHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute']($p['getattr'](self, 'element'), 'offsetHeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetHeight'] = $method;
		$method = $pyjs__bind_method2('getOffsetWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute']($p['getattr'](self, 'element'), 'offsetWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetWidth'] = $method;
		$method = $pyjs__bind_method2('getStyleName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute']($p['getattr'](self, 'element'), 'className');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method2('getStylePrimaryName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var fullClassName;
			fullClassName = self['getStyleName']();
			if ($p['bool'](fullClassName)) {
				return fullClassName['$$split']()['__getitem__'](0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStylePrimaryName'] = $method;
		$method = $pyjs__bind_method2('getStyleAttribute', function(attribute) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attribute = arguments[1];
			}
			var el,$iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,result,attr,$iter1_array;
			if ($p['bool']($p['isinstance'](attribute, $p['basestring']))) {
				return $m['DOM']['getStyleAttribute'](self['getElement'](), attribute);
			}
			el = self['getElement']();
			result = $p['dict']([]);
			$iter1_iter = attribute;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				attr = $iter1_nextval['$nextval'];
				result['__setitem__'](attr, $m['DOM']['getStyleAttribute'](el, attr));
			}
			return result;
		}
	, 1, [null,null,['self'],['attribute']]);
		$cls_definition['getStyleAttribute'] = $method;
		$method = $pyjs__bind_method2('getTitle', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute']($p['getattr'](self, 'element'), 'title');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTitle'] = $method;
		$method = $pyjs__bind_method2('setElement', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self['element'] = element;
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['setElement'] = $method;
		$method = $pyjs__bind_method2('setHeight', function(height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			if ($p['bool']((height === null))) {
				height = '';
			}
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'element'), 'height', $p['str'](height));
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getStyleAttribute']($p['getattr'](self, 'element'), 'height');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('setPixelSize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			if ($p['bool'](((($p['cmp'](width, 0))|1) == 1))) {
				self['setWidth']($p['sprintf']('%dpx', width));
			}
			if ($p['bool'](((($p['cmp'](height, 0))|1) == 1))) {
				self['setHeight']($p['sprintf']('%dpx', height));
			}
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setPixelSize'] = $method;
		$method = $pyjs__bind_method2('setSize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setWidth'](width);
			self['setHeight'](height);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setSize'] = $method;
		$method = $pyjs__bind_method2('addStyleName', function(style) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}

			self['setStyleName']($p['getattr'](self, 'element'), style, true);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['addStyleName'] = $method;
		$method = $pyjs__bind_method2('addStyleDependentName', function(styleSuffix) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add15,$add16,$add17,$add18;
			self['addStyleName']($p['__op_add']($add17=$p['__op_add']($add15=self['getStylePrimaryName'](),$add16='-'),$add18=styleSuffix));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['addStyleDependentName'] = $method;
		$method = $pyjs__bind_method2('removeStyleName', function(style) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}

			self['setStyleName']($p['getattr'](self, 'element'), style, false);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['removeStyleName'] = $method;
		$method = $pyjs__bind_method2('removeStyleDependentName', function(styleSuffix) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add21,$add20,$add22,$add19;
			self['removeStyleName']($p['__op_add']($add21=$p['__op_add']($add19=self['getStylePrimaryName'](),$add20='-'),$add22=styleSuffix));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['removeStyleDependentName'] = $method;
		$method = $pyjs__bind_method2('setStyleName', function(element, style, add) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				style = arguments[2];
				add = arguments[3];
			}
			if (typeof style == 'undefined') style=arguments['callee']['__args__'][4][1];
			if (typeof add == 'undefined') add=arguments['callee']['__args__'][5][1];

			if ($p['bool']((style !== null))) {
				$m['setStyleName'](element, style, add);
				return null;
			}
			style = element;
			$m['DOM']['setAttribute']($p['getattr'](self, 'element'), 'className', style);
			return null;
		}
	, 1, [null,null,['self'],['element'],['style', null],['add', true]]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method2('setStyleAttribute', function(attribute, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attribute = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
			var el,$iter2_nextval,$iter2_type,attr,$iter2_iter,$iter2_idx,val,$iter2_array;
			if ($p['bool']((value !== null))) {
				$m['DOM']['setStyleAttribute'](self['getElement'](), attribute, value);
				return null;
			}
			el = self['getElement']();
			$iter2_iter = attribute['items']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
				attr = $tupleassign1[0];
				val = $tupleassign1[1];
				$m['DOM']['setStyleAttribute'](el, attr, val);
			}
			return null;
		}
	, 1, [null,null,['self'],['attribute'],['value', null]]);
		$cls_definition['setStyleAttribute'] = $method;
		$method = $pyjs__bind_method2('setTitle', function(title) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}

			$m['DOM']['setAttribute']($p['getattr'](self, 'element'), 'title', title);
			return null;
		}
	, 1, [null,null,['self'],['title']]);
		$cls_definition['setTitle'] = $method;
		$method = $pyjs__bind_method2('setWidth', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			if ($p['bool']((width === null))) {
				width = '';
			}
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'element'), 'width', $p['str'](width));
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getStyleAttribute']($p['getattr'](self, 'element'), 'width');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('sinkEvents', function(eventBitsToAdd) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToAdd = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, 'element'))) {
				$m['DOM']['sinkEvents'](self['getElement'](), (eventBitsToAdd)|($m['DOM']['getEventsSunk'](self['getElement']())));
			}
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
		$cls_definition['sinkEvents'] = $method;
		$method = $pyjs__bind_method2('setzIndex', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'element'), 'zIndex', index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setzIndex'] = $method;
		$method = $pyjs__bind_method2('isVisible', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments['callee']['__args__'][3][1];

			return self['getVisible'](element);
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['isVisible'] = $method;
		$method = $pyjs__bind_method2('getVisible', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments['callee']['__args__'][3][1];
			var $pyjs_try_err;
			if ($p['bool'](!$p['bool'](element))) {
				element = $p['getattr'](self, 'element');
			}
			try {
				return !$p['op_eq']($p['getattr']($p['getattr'](element, 'style'), 'display'), 'none');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return true;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['getVisible'] = $method;
		$method = $pyjs__bind_method2('setVisible', function(element, visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				visible = arguments[2];
			}
			if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][4][1];

			if ($p['bool']((visible === null))) {
				visible = element;
				element = $p['getattr'](self, 'element');
			}
			if ($p['bool'](visible)) {
				$m['DOM']['setStyleAttribute'](element, 'display', '');
			}
			else {
				$m['DOM']['setStyleAttribute'](element, 'display', 'none');
			}
			return null;
		}
	, 1, [null,null,['self'],['element'],['visible', null]]);
		$cls_definition['setVisible'] = $method;
		$method = $pyjs__bind_method2('unsinkEvents', function(eventBitsToRemove) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToRemove = arguments[1];
			}

			$m['DOM']['sinkEvents'](self['getElement'](), (~(eventBitsToRemove))&($m['DOM']['getEventsSunk'](self['getElement']())));
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToRemove']]);
		$cls_definition['unsinkEvents'] = $method;
		var $bases = new Array($m['Applier']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UIObject', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.UIObject', 'UIObject', $m['UIObject']);
	return this;
}; /* end pyjamas.ui.UIObject */


/* end module: pyjamas.ui.UIObject */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
