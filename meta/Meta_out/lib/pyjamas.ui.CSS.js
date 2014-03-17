/* start module: pyjamas.ui.CSS */
$pyjs['loaded_modules']['pyjamas.ui.CSS'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.CSS']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.CSS'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.CSS'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.CSS>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CSS';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['CSS'] = $pyjs['loaded_modules']['pyjamas.ui.CSS'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['StyleSheetCssFile'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.CSS';
		$method = $pyjs__bind_method2('__init__', function(cssFile, _doc) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cssFile = arguments[1];
				_doc = arguments[2];
			}
			if (typeof cssFile == 'undefined') cssFile=arguments['callee']['__args__'][3][1];
			if (typeof _doc == 'undefined') _doc=arguments['callee']['__args__'][4][1];

			self['_e'] = $m['DOM']['createElement']('link');
			self['_e']['setAttribute']('rel', 'stylesheet');
			self['_e']['setAttribute']('type', 'text/css');
			self['_e']['setAttribute']('href', cssFile);
			if ($p['bool']((_doc === null))) {
				_doc = $doc;
			}
			_doc['getElementsByTagName']('head')['item'](0)['appendChild']($p['getattr'](self, '_e'));
			return null;
		}
	, 1, [null,null,['self'],['cssFile', ''],['_doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var parent;
			parent = $m['DOM']['getParent']($p['getattr'](self, '_e'));
			$m['DOM']['removeChild'](parent, $p['getattr'](self, '_e'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StyleSheetCssFile', $p['tuple']($bases), $data);
	})();
	$m['setStyleElementText'] = function(el, text) {

		$m['DOM']['appendChild'](el, $doc['createTextNode'](text));
		return null;
	};
	$m['setStyleElementText']['__name__'] = 'setStyleElementText';

	$m['setStyleElementText']['__bind_type__'] = 0;
	$m['setStyleElementText']['__args__'] = [null,null,['el'],['text']];
	$m['StyleSheetCssText'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.CSS';
		$method = $pyjs__bind_method2('__init__', function(text, _doc) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				_doc = arguments[2];
			}
			if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
			if (typeof _doc == 'undefined') _doc=arguments['callee']['__args__'][4][1];

			self['_e'] = $m['DOM']['createElement']('style');
			self['_e']['setAttribute']('type', 'text/css');
			$m['setStyleElementText']($p['getattr'](self, '_e'), text);
			if ($p['bool']((_doc === null))) {
				_doc = $doc;
			}
			_doc['getElementsByTagName']('head')['item'](0)['appendChild']($p['getattr'](self, '_e'));
			return null;
		}
	, 1, [null,null,['self'],['text', ''],['_doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var parent;
			parent = $m['DOM']['getParent']($p['getattr'](self, '_e'));
			$m['DOM']['removeChild'](parent, $p['getattr'](self, '_e'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StyleSheetCssText', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.CSS */


/* end module: pyjamas.ui.CSS */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
