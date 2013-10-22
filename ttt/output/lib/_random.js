/* start module: _random */
$pyjs['loaded_modules']['_random'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['_random']['__was_initialized__']) return $pyjs['loaded_modules']['_random'];
	var $m = $pyjs['loaded_modules']['_random'];
	$m['__repr__'] = function() { return '<module: _random>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = '_random';
	$m['__name__'] = __mod_name__;


	$m['one'] = $p['float_int'](1);
	$m['Random'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = '_random';
		$cls_definition['seed'] = null;
		$method = $pyjs__bind_method2('getrandbits', function(k) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var s,mask,rand;
			s = '';

        var table = new Array();
        for (var i = 0 ; i < k/32; i++) {
            table[i] = (Math['random']() * 4294967296)['toString'](32);
        }
        s = table['join']("");

			rand = $p['float_int'](s, 32);
			mask = $m['one']['__lshift__'](k)['__sub__']($m['one']);
			return rand['__and__'](mask);
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['getrandbits'] = $method;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($p['NotImplementedError']('getstate'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$method = $pyjs__bind_method2('jumpahead', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}


        for (var i = 0 ; i < n % 100; i++) Math['random']();

		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['jumpahead'] = $method;
		$method = $pyjs__bind_method2('random', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var seed;
			if ($p['bool'](($p['getattr'](self, 'seed') === null))) {
				return Math['random']();
			}
			seed = $p['getattr'](self, 'seed');
			self['seed'] = null;
			return Math['random'](seed);
		}
	, 1, [null,null,['self']]);
		$cls_definition['random'] = $method;
		$method = $pyjs__bind_method2('seed', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			if (typeof n == 'undefined') n=arguments['callee']['__args__'][3][1];

			self['seed'] = n;
			return null;
		}
	, 1, [null,null,['self'],['n', null]]);
		$cls_definition['seed'] = $method;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

			throw ($p['NotImplementedError']('setstate'));
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Random', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end _random */


/* end module: _random */


