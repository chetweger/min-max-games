/* start module: pyjamas.ui.ButtonBase */
$pyjs['loaded_modules']['pyjamas.ui.ButtonBase'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.ButtonBase']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.ButtonBase'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.ButtonBase'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.ButtonBase>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ButtonBase';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['ButtonBase'] = $pyjs['loaded_modules']['pyjamas.ui.ButtonBase'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
	$m['InnerText'] = $p['___import___']('pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', null, false);
	$m['ButtonBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.ButtonBase';
		$method = $pyjs__bind_method2('__init__', function(element) {
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
				element = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				props = arguments[1];
				builderstate = arguments[2];
			}
			var txt;
			if ($p['bool'](props['has_key']('label'))) {
				props['__setitem__']('text', props['__getitem__']('label'));
				props['__delitem__']('label');
			}
			if ($p['bool'](!$p['bool'](props['has_key']('text')))) {
				return null;
			}
			txt = props['__getitem__']('text');
			if ($p['bool'](props['get']('html', false))) {
				self['setHTML'](txt);
			}
			else {
				self['setText'](txt);
			}
			return null;
		}
	, 1, [null,null,['self'],['props'],['builderstate']]);
		$cls_definition['_setWeirdProps'] = $method;
		var $bases = new Array($m['FocusWidget'],$m['InnerHTML'],$m['InnerText']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ButtonBase', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.ButtonBase', 'ButtonBase', $m['ButtonBase']);
	return this;
}; /* end pyjamas.ui.ButtonBase */


/* end module: pyjamas.ui.ButtonBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.InnerText.InnerText', 'pyjamas.ui.InnerText']
*/
