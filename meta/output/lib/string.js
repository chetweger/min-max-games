/* start module: string */
$pyjs['loaded_modules']['string'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['string']['__was_initialized__']) return $pyjs['loaded_modules']['string'];
	var $m = $pyjs['loaded_modules']['string'];
	$m['__repr__'] = function() { return '<module: string>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'string';
	$m['__name__'] = __mod_name__;
	var $add14,$add11,$add12,$add13,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9;

	$m['whitespace'] = ' \t\n\r\x0b\x0c';
	$m['lowercase'] = 'abcdefghijklmnopqrstuvwxyz';
	$m['uppercase'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$m['letters'] = $p['__op_add']($add1=$m['lowercase'],$add2=$m['uppercase']);
	$m['ascii_lowercase'] = $m['lowercase'];
	$m['ascii_uppercase'] = $m['uppercase'];
	$m['ascii_letters'] = $p['__op_add']($add3=$m['ascii_lowercase'],$add4=$m['ascii_uppercase']);
	$m['digits'] = '0123456789';
	$m['hexdigits'] = $p['__op_add']($add7=$p['__op_add']($add5=$m['digits'],$add6='abcdef'),$add8='ABCDEF');
	$m['octdigits'] = '01234567';
	$m['punctuation'] = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
	$m['printable'] = $p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9=$m['digits'],$add10=$m['letters']),$add12=$m['punctuation']),$add14=$m['whitespace']);
	$m['l'] = $p['map']($p['chr'], $p['xrange'](256));
	$m['_idmap'] = $p['str']('')['join']($m['l']);
	delete $m['l'];
	$m['capwords'] = function(s, sep) {
		if (typeof sep == 'undefined') sep=arguments['callee']['__args__'][3][1];
		var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,x,$iter1_idx;
		if ($p['bool']((sep === null))) {
			sep = ' ';
		}
		return sep['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$iter1_iter = s['$$split'](sep);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						x = $iter1_nextval['$nextval'];
						$yield_value = x['capitalize']();
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

				return;
			};
			return $generator;
		}()
);
	};
	$m['capwords']['__name__'] = 'capwords';

	$m['capwords']['__bind_type__'] = 0;
	$m['capwords']['__args__'] = [null,null,['s'],['sep', null]];
	$m['_idmapL'] = null;
	$m['maketrans'] = function(fromstr, tostr) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,L,$iter2_array;
		if ($p['bool'](!$p['op_eq']($p['len'](fromstr), $p['len'](tostr)))) {

			var $pyjs__raise_expr1 = $p['ValueError'];
			var $pyjs__raise_expr2 = 'maketrans arguments must have same length';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if ($p['bool'](!$p['bool']($m['_idmapL']))) {
			$m['_idmapL'] = $p['list']($m['_idmap']);
		}
		L = $p['__getslice']($m['_idmapL'], 0, null);
		fromstr = $p['map']($p['ord'], fromstr);
		$iter2_iter = $p['range']($p['len'](fromstr));
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			L['__setitem__'](fromstr['__getitem__'](i), tostr['__getitem__'](i));
		}
		return ''['join'](L);
	};
	$m['maketrans']['__name__'] = 'maketrans';

	$m['maketrans']['__bind_type__'] = 0;
	$m['maketrans']['__args__'] = [null,null,['fromstr'],['tostr']];
	$m['_re'] = $p['___import___']('re', null, null, false);
	$m['_multimap'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'string';
		$method = $pyjs__bind_method2('__init__', function(primary, secondary) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				primary = arguments[1];
				secondary = arguments[2];
			}

			self['_primary'] = primary;
			self['_secondary'] = secondary;
			return null;
		}
	, 1, [null,null,['self'],['primary'],['secondary']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $pyjs_try_err;
			try {
				return $p['getattr'](self, '_primary')['__getitem__'](key);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					return $p['getattr'](self, '_secondary')['__getitem__'](key);
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_multimap', $p['tuple']($bases), $data);
	})();
	$m['Template'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'string';
		$cls_definition['delimiter'] = '$';
		$cls_definition['idpattern'] = '[_a-z][_a-z0-9]*';
		$cls_definition['regexp'] = '%(delim)s(?:(%(delim)s)|(%(id)s)|{(%(id)s)}|())';
		$method = $pyjs__bind_method2('__init__', function(template) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				template = arguments[1];
			}

			self['_definePattern']();
			self['template'] = template;
			return null;
		}
	, 1, [null,null,['self'],['template']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_definePattern', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add15,$add16,$mod1,$mod2,regexp;
			regexp = (typeof ($mod1=$p['getattr'](self, 'regexp'))==typeof ($mod2=$p['dict']([['delim', $p['__op_add']($add15='\\',$add16=$p['getattr'](self, 'delimiter'))], ['id', $p['getattr'](self, 'idpattern')]])) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
			self['pattern'] = $m['_re']['compile'](regexp, $p['getattr']($m['_re'], 'IGNORECASE'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_definePattern'] = $method;
		$method = $pyjs__bind_method2('_invalid', function(mo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mo = arguments[1];
			}
			var i,$add20,j,$add19,$add17,$add18;
			i = mo['start']();
			j = $p['min']($p['__op_add']($add17=i,$add18=10), $p['len']($p['getattr'](self, 'template')));
			throw ($p['ValueError']($p['__op_add']($add19='Invalid placeholder in string: ',$add20=$p['__getslice']($p['getattr'](self, 'template'), i, j))));
			return null;
		}
	, 1, [null,null,['self'],['mo']]);
		$cls_definition['_invalid'] = $method;
		$method = $pyjs__bind_method2('substitute', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kws = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					var kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kws = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			}
			if (typeof kws == 'undefined') {
				kws = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kws = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var convert,mapping;
			if ($p['bool'](($p['cmp']($p['len'](args), 1) == 1))) {
				throw ($p['TypeError']('Too many positional arguments'));
			}
			if ($p['bool'](!$p['bool'](args))) {
				mapping = kws;
			}
			else if ($p['bool'](kws)) {
				mapping = $m['_multimap'](kws, args['__getitem__'](0));
			}
			else {
				mapping = args['__getitem__'](0);
			}
			convert = function(mo) {
				var $or1,named,val,$or2;
				named = ($p['bool']($or1=mo['group'](2))?$or1:mo['group'](3));
				if ($p['bool']((named !== null))) {
					val = mapping['__getitem__'](named);
					return $p['sprintf']('%s', $p['tuple']([val]));
				}
				if ($p['bool']((mo['group'](1) !== null))) {
					return $p['getattr'](self, 'delimiter');
				}
				if ($p['bool']((mo['group'](4) !== null))) {
					self['_invalid'](mo);
				}
				throw ($p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern')));
				return null;
			};
			convert['__name__'] = 'convert';

			convert['__bind_type__'] = 0;
			convert['__args__'] = [null,null,['mo']];
			return self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
		}
	, 1, ['args',['kws'],['self']]);
		$cls_definition['substitute'] = $method;
		$method = $pyjs__bind_method2('safe_substitute', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kws = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					var kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kws = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kws === null || typeof kws != 'object' || kws['__name__'] != 'dict' || typeof kws['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kws != 'undefined') args['__array']['push'](kws);
					kws = arguments[arguments['length']+1];
				} else {
					delete kws['$pyjs_is_kwarg'];
				}
			}
			if (typeof kws == 'undefined') {
				kws = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kws = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var convert,mapping;
			if ($p['bool'](($p['cmp']($p['len'](args), 1) == 1))) {
				throw ($p['TypeError']('Too many positional arguments'));
			}
			if ($p['bool'](!$p['bool'](args))) {
				mapping = kws;
			}
			else if ($p['bool'](kws)) {
				mapping = $m['_multimap'](kws, args['__getitem__'](0));
			}
			else {
				mapping = args['__getitem__'](0);
			}
			convert = function(mo) {
				var $add28,named,$add21,braced,$add22,$add25,$add24,$add27,$add26,$pyjs_try_err,$add23;
				named = mo['group'](2);
				if ($p['bool']((named !== null))) {
					try {
						return $p['sprintf']('%s', $p['tuple']([mapping['__getitem__'](named)]));
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							return $p['__op_add']($add21=$p['getattr'](self, 'delimiter'),$add22=named);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				braced = mo['group'](3);
				if ($p['bool']((braced !== null))) {
					try {
						return $p['sprintf']('%s', $p['tuple']([mapping['__getitem__'](braced)]));
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							return $p['__op_add']($add27=$p['__op_add']($add25=$p['__op_add']($add23=$p['getattr'](self, 'delimiter'),$add24='{'),$add26=braced),$add28='}');
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($p['bool']((mo['group'](1) !== null))) {
					return $p['getattr'](self, 'delimiter');
				}
				if ($p['bool']((mo['group'](4) !== null))) {
					return $p['getattr'](self, 'delimiter');
				}
				throw ($p['ValueError']('Unrecognized named group in pattern', $p['getattr'](self, 'pattern')));
				return null;
			};
			convert['__name__'] = 'convert';

			convert['__bind_type__'] = 0;
			convert['__args__'] = [null,null,['mo']];
			return self['pattern']['sub'](convert, $p['getattr'](self, 'template'));
		}
	, 1, ['args',['kws'],['self']]);
		$cls_definition['safe_substitute'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Template', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end string */


/* end module: string */


/*
PYJS_DEPS: ['re']
*/
