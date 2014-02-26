/* start module: pyjamas.Location */
$pyjs['loaded_modules']['pyjamas.Location'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Location']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Location'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Location'];
	$m['__repr__'] = function() { return '<module: pyjamas.Location>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Location';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Location'] = $pyjs['loaded_modules']['pyjamas.Location'];


	$m['makeUrlDict'] = function(urlstring) {
		var pairs,$iter1_nextval,$iter1_type,$iter1_iter,dict,$iter1_array,pair,kv,$iter1_idx;
		dict = $p['dict']([]);
		pairs = urlstring['$$split']('&');
		$iter1_iter = pairs;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			pair = $iter1_nextval['$nextval'];
			if ($p['bool'](($p['cmp']($p['len'](pair), 3) == -1))) {
				continue;
			}
			kv = pair['$$split']('=', 1);
			dict['__setitem__'](kv['__getitem__'](0), kv['__getitem__'](1));
		}
		return dict;
	};
	$m['makeUrlDict']['__name__'] = 'makeUrlDict';

	$m['makeUrlDict']['__bind_type__'] = 0;
	$m['makeUrlDict']['__args__'] = [null,null,['urlstring']];
	$m['makeUrlStringFromDict'] = function(d) {
		var pairs,$iter2_nextval,$iter2_type,$iter2_iter,k,$add2,$add3,$iter2_idx,$add1,$add4,v,$iter2_array;
		pairs = $p['list']([]);
		$iter2_iter = d['iteritems']();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
			k = $tupleassign1[0];
			v = $tupleassign1[1];
			pairs['append']($p['__op_add']($add3=$p['__op_add']($add1=k,$add2='='),$add4=v));
		}
		return '&'['join'](pairs);
	};
	$m['makeUrlStringFromDict']['__name__'] = 'makeUrlStringFromDict';

	$m['makeUrlStringFromDict']['__bind_type__'] = 0;
	$m['makeUrlStringFromDict']['__args__'] = [null,null,['d']];
	$m['Location'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Location';
		$method = $pyjs__bind_method2('__init__', function(location) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			self['location'] = location;
			self['searchDict'] = null;
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getHash', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return unescape(self["location"]["hash"]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHash'] = $method;
		$method = $pyjs__bind_method2('getHashDict', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2;
			if ($p['bool'](($p['bool']($or1=!$p['bool']($p['getattr'](self, 'hashDict')))?$or1:!$p['op_eq']($p['getattr'](self, 'hashDictHash'), self['getHash']())))) {
				self['hashDictHash'] = self['getHash']();
				self['hashDict'] = $m['makeUrlDict']($p['__getslice'](self['getHash'](), 1, null));
			}
			return $p['getattr'](self, 'hashDict');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHashDict'] = $method;
		$method = $pyjs__bind_method2('getHost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'location'), 'host');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHost'] = $method;
		$method = $pyjs__bind_method2('getHostname', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'location'), 'hostname');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHostname'] = $method;
		$method = $pyjs__bind_method2('getHref', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'location'), 'href');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHref'] = $method;
		$method = $pyjs__bind_method2('getPageHref', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var href;
			href = $p['getattr']($p['getattr'](self, 'location'), 'href');
			if ($p['bool'](href['find']('?'))) {
				href = href['$$split']('?')['__getitem__'](0);
			}
			if ($p['bool'](href['find']('#'))) {
				href = href['$$split']('#')['__getitem__'](0);
			}
			return href;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPageHref'] = $method;
		$method = $pyjs__bind_method2('getPathname', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'location'), 'pathname');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPathname'] = $method;
		$method = $pyjs__bind_method2('getPort', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'location'), 'port');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPort'] = $method;
		$method = $pyjs__bind_method2('getProtocol', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'location'), 'protocol');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getProtocol'] = $method;
		$method = $pyjs__bind_method2('getSearch', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return unescape(self["location"]["search"]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearch'] = $method;
		$method = $pyjs__bind_method2('getSearchDict', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var search;
			if ($p['bool'](($p['getattr'](self, 'searchDict') === null))) {
				search = $p['__getslice'](self['getSearch'](), 1, null);
				self['searchDict'] = $m['makeUrlDict'](search);
			}
			return $p['getattr'](self, 'searchDict');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSearchDict'] = $method;
		$method = $pyjs__bind_method2('getSearchVar', function(key, $$default) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				$$default = arguments[2];
			}
			if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][4][1];
			var $$default;
			return self['getSearchDict']()['get'](key, $$default);
		}
	, 1, [null,null,['self'],['key'],['$$default', null]]);
		$cls_definition['getSearchVar'] = $method;
		$method = $pyjs__bind_method2('reload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['location']['reload']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reload'] = $method;
		$method = $pyjs__bind_method2('setHref', function(href) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				href = arguments[1];
			}

			$p['getattr'](self, 'location')['href'] = href;
			return null;
		}
	, 1, [null,null,['self'],['href']]);
		$cls_definition['setHref'] = $method;
		$method = $pyjs__bind_method2('setSearch', function(search) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				search = arguments[1];
			}

			$p['getattr'](self, 'location')['search'] = search;
			return null;
		}
	, 1, [null,null,['self'],['search']]);
		$cls_definition['setSearch'] = $method;
		$method = $pyjs__bind_method2('setSearchDict', function(searchDict) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				searchDict = arguments[1];
			}

			self['setSearch']($m['makeUrlStringFromDict'](searchDict));
			return null;
		}
	, 1, [null,null,['self'],['searchDict']]);
		$cls_definition['setSearchDict'] = $method;
		$method = $pyjs__bind_method2('setHash', function(hash) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hash = arguments[1];
			}

			$p['getattr'](self, 'location')['hash'] = hash;
			return null;
		}
	, 1, [null,null,['self'],['hash']]);
		$cls_definition['setHash'] = $method;
		$method = $pyjs__bind_method2('setHashDict', function(hashDict) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hashDict = arguments[1];
			}

			self['setHash']($m['makeUrlStringFromDict'](hashDict));
			return null;
		}
	, 1, [null,null,['self'],['hashDict']]);
		$cls_definition['setHashDict'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Location', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Location */


/* end module: pyjamas.Location */


