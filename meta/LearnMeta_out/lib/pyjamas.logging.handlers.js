/* start module: pyjamas.logging.handlers */
$pyjs['loaded_modules']['pyjamas.logging.handlers'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.logging.handlers']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.logging.handlers'];
	if(typeof $pyjs['loaded_modules']['pyjamas.logging'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.logging']['__was_initialized__']) $p['___import___']('pyjamas.logging', null);
	var $m = $pyjs['loaded_modules']['pyjamas.logging.handlers'];
	$m['__repr__'] = function() { return '<module: pyjamas.logging.handlers>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.logging.handlers';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.logging']['handlers'] = $pyjs['loaded_modules']['pyjamas.logging.handlers'];


	$m['__author__'] = 'Peter Bittner <peter.bittner@gmx.net>';
	$m['escape'] = $p['___import___']('cgi.escape', 'pyjamas.logging', null, false);
	$m['Handler'] = $p['___import___']('logging.Handler', 'pyjamas.logging', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.logging', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.logging', null, false);
	$m['AlertHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.logging.handlers';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Handler']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('emit', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var msg;
			msg = self['format'](record);
			$m['Window']['alert'](msg);
			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['emit'] = $method;
		var $bases = new Array($m['Handler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AlertHandler', $p['tuple']($bases), $data);
	})();
	$m['AppendHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.logging.handlers';
		$cls_definition['div'] = null;
		$cls_definition['div_id'] = '';
		$cls_definition['output'] = '';
		$method = $pyjs__bind_method2('__init__', function(logger_name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				logger_name = arguments[1];
			}
			var $add2,$add1;
			$m['Handler']['__init__'](self);
			self['div_id'] = self['__getSafeNameFor']($p['__op_add']($add1='logging_',$add2=logger_name));
			return null;
		}
	, 1, [null,null,['self'],['logger_name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getSafeNameFor', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var digits,c,$iter1_nextval,$iter1_idx,$iter1_iter,$add3,$add6,$iter1_array,$add4,$add5,ascii_letters,$iter1_type;
			ascii_letters = $p['___import___']('string.ascii_letters', 'pyjamas.logging', null, false);
			digits = $p['___import___']('string.digits', 'pyjamas.logging', null, false);
			return ''['join'](function(){
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
					$iter1_iter = name;
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
							c = $iter1_nextval['$nextval'];
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']($p['__op_add']($add5=$p['__op_add']($add3=ascii_letters,$add4=digits),$add6='_')['__contains__'](c))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = c;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
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
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__getSafeNameFor'] = $method;
		$method = $pyjs__bind_method2('__addLogElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'div'), null))) {
				self['div'] = $m['DOM']['createDiv']();
				self['div']['setAttribute']('id', $p['getattr'](self, 'div_id'));
				$m['DOM']['appendChild']($p['getattr']($doc, 'body'), $p['getattr'](self, 'div'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__addLogElement'] = $method;
		$method = $pyjs__bind_method2('emit', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var $add10,$add7,msg,$add8,$add9;
			msg = self['format'](record);
			msg = $m['escape'](msg);
			msg = $p['__op_add']($add7=msg['$$replace']('\n', '<br/>\n'),$add8='<br/>\n');
			self['output'] = $p['__op_add']($add9=$p['getattr'](self, 'output'),$add10=msg);
			self['__addLogElement']();
			$m['DOM']['setInnerHTML']($p['getattr'](self, 'div'), $p['getattr'](self, 'output'));
			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['emit'] = $method;
		var $bases = new Array($m['Handler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AppendHandler', $p['tuple']($bases), $data);
	})();
	$m['ConsoleHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.logging.handlers';
		$cls_definition['__consoleFuncForLevel'] = null;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Handler']['__init__'](self);
			self['__consoleFuncForLevel'] = $p['dict']([['DEBUG', $p['getattr'](self, '__debug')], ['INFO', $p['getattr'](self, '__info')], ['WARNING', $p['getattr'](self, '__warn')], ['ERROR', $p['getattr'](self, '__error')], ['CRITICAL', $p['getattr'](self, '__error')]]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('emit', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var msg,$pyjs_try_err,func;
			msg = self['format'](record);
			func = self['__consoleFuncForLevel']['get']($p['getattr'](record, 'levelname'), $p['getattr'](self, '__log'));
			try {
				func(msg);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					$p['printFunc']([msg], 1);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['emit'] = $method;
		$method = $pyjs__bind_method2('__debug', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
			}

 console['debug'](msg); 
		}
	, 1, [null,null,['self'],['msg']]);
		$cls_definition['__debug'] = $method;
		$method = $pyjs__bind_method2('__info', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
			}

 console['info'](msg); 
		}
	, 1, [null,null,['self'],['msg']]);
		$cls_definition['__info'] = $method;
		$method = $pyjs__bind_method2('__warn', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
			}

 console['warn'](msg); 
		}
	, 1, [null,null,['self'],['msg']]);
		$cls_definition['__warn'] = $method;
		$method = $pyjs__bind_method2('__error', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
			}

 console['error'](msg); 
		}
	, 1, [null,null,['self'],['msg']]);
		$cls_definition['__error'] = $method;
		$method = $pyjs__bind_method2('__log', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
			}

 console['log'](msg); 
		}
	, 1, [null,null,['self'],['msg']]);
		$cls_definition['__log'] = $method;
		var $bases = new Array($m['Handler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ConsoleHandler', $p['tuple']($bases), $data);
	})();
	$m['NullHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.logging.handlers';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Handler']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('emit', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['emit'] = $method;
		var $bases = new Array($m['Handler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NullHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.logging.handlers */


/* end module: pyjamas.logging.handlers */


/*
PYJS_DEPS: ['cgi.escape', 'cgi', 'logging.Handler', 'logging', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'string.ascii_letters', 'string', 'string.digits']
*/
