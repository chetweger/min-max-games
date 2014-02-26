/* start module: pyjamas.Timer */
$pyjs['loaded_modules']['pyjamas.Timer'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Timer']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Timer'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Timer'];
	$m['__repr__'] = function() { return '<module: pyjamas.Timer>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Timer';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Timer'] = $pyjs['loaded_modules']['pyjamas.Timer'];


	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas', null, false);
	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
	$m['print_exc'] = $p['___import___']('traceback.print_exc', 'pyjamas', null, false);
	$m['Timer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Timer';
		$cls_definition['__timers'] = $p['set']();
		$cls_definition['__WindowCloseListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Timer';
			$method = $pyjs__bind_method2('onWindowClosed', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
				}
				var $iter1_nextval,$iter1_type,timer,$iter1_iter,$iter1_array,$iter1_idx;
				$iter1_iter = $p['list']($p['getattr']($m['Timer'], '__timers'));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					timer = $iter1_nextval['$nextval'];
					timer['cancel']();
				}
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onWindowClosed'] = $method;
			$method = $pyjs__bind_method2('onWindowClosing', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
				} else {
					var self = arguments[0];
				}

 				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onWindowClosing'] = $method;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('__WindowCloseListener', $p['tuple']($bases), $data);
		})();
		$method = $pyjs__bind_method2('__init__', function(delayMillis, notify) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delayMillis = arguments[1];
				notify = arguments[2];
			}
			if (typeof delayMillis == 'undefined') delayMillis=arguments['callee']['__args__'][3][1];
			if (typeof notify == 'undefined') notify=arguments['callee']['__args__'][4][1];
			var run,$lambda2,$lambda1;
			self['__tid'] = null;
			var 			$lambda1 = function() {

				return self['run']();
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null];
			self['__onTimer'] = $lambda1;
			$m['Window']['addWindowCloseListener']($m['Timer']['__WindowCloseListener']());
			if ($p['bool']((notify !== null))) {
				run = $p['getattr'](notify, 'onTimer', notify);
				if ($p['bool'](!$p['bool']($p['callable'](run)))) {

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'Programming error: notify must be callable';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				var 				$lambda2 = function() {

					return run(self);
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null];
				self['__onTimer'] = $lambda2;
			}
			self['__impl_init_hook']();
			if ($p['bool'](!$p['op_eq'](delayMillis, 0))) {
				self['schedule'](delayMillis);
			}
			return null;
		}
	, 1, [null,null,['self'],['delayMillis', 0],['notify', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__impl_init_hook', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__impl_init_hook'] = $method;
		$method = $pyjs__bind_method2('cancel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, '__tid') === null))) {
				return null;
			}
			if ($p['bool']($p['getattr'](self, '__is_repeating'))) {
				self['__clearInterval']($p['getattr'](self, '__tid'));
			}
			else {
				self['__clearTimeout']($p['getattr'](self, '__tid'));
			}
			self['__tid'] = null;
			$m['Timer']['__timers']['discard'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cancel'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


			var $pyjs__raise_expr1 = $p['NotImplementedError'];
			var $pyjs__raise_expr2 = 'Timer.run() must be overridden or Timer\n                                       must be instantiated with notify keyword\n                                       argument';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method2('schedule', function(delayMillis) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delayMillis = arguments[1];
			}

			if ($p['bool'](($p['cmp'](delayMillis, 0) < 1))) {

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'delay must be positive';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['cancel']();
			self['__is_repeating'] = false;
			self['__tid'] = self['__setTimeout'](delayMillis);
			$m['Timer']['__timers']['add'](self);
			return null;
		}
	, 1, [null,null,['self'],['delayMillis']]);
		$cls_definition['schedule'] = $method;
		$method = $pyjs__bind_method2('scheduleRepeating', function(periodMillis) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				periodMillis = arguments[1];
			}

			if ($p['bool'](($p['cmp'](periodMillis, 0) < 1))) {

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'period must be positive';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['cancel']();
			self['__is_repeating'] = true;
			self['__tid'] = self['__setInterval'](periodMillis);
			$m['Timer']['__timers']['add'](self);
			return null;
		}
	, 1, [null,null,['self'],['periodMillis']]);
		$cls_definition['scheduleRepeating'] = $method;
		$method = $pyjs__bind_method2('__fire', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwds = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwds != 'undefined') args['__array']['push'](kwds);
					var kwds = arguments[arguments['length']+1];
				} else {
					delete kwds['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwds = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwds != 'undefined') args['__array']['push'](kwds);
					kwds = arguments[arguments['length']+1];
				} else {
					delete kwds['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwds == 'undefined') {
				kwds = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwds = self;
						self = arguments[1];
					}
				} else {
				}
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, '__is_repeating')))) {
				$m['Timer']['__timers']['discard'](self);
			}
			self['__onTimer']();
			return null;
		}
	, 1, ['args',['kwds'],['self']]);
		$cls_definition['__fire'] = $method;
		$method = $pyjs__bind_method2('__setTimeout', function(delayMillis) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delayMillis = arguments[1];
			}
			var fire;
			fire = $p['getattr'](self, '__fire');

        return $wnd['setTimeout'](function() {
           fire();
          }, delayMillis);
        
		}
	, 1, [null,null,['self'],['delayMillis']]);
		$cls_definition['__setTimeout'] = $method;
		$method = $pyjs__bind_method2('__clearTimeout', function(tid) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tid = arguments[1];
			}


        $wnd['clearTimeout'](tid);
        
		}
	, 1, [null,null,['self'],['tid']]);
		$cls_definition['__clearTimeout'] = $method;
		$method = $pyjs__bind_method2('__setInterval', function(periodMillis) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				periodMillis = arguments[1];
			}
			var fire;
			fire = $p['getattr'](self, '__fire');

        return $wnd['setInterval'](function() {
           fire();
          }, periodMillis);
        
		}
	, 1, [null,null,['self'],['periodMillis']]);
		$cls_definition['__setInterval'] = $method;
		$method = $pyjs__bind_method2('__clearInterval', function(tid) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tid = arguments[1];
			}


        $wnd['clearInterval'](tid);
        
		}
	, 1, [null,null,['self'],['tid']]);
		$cls_definition['__clearInterval'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Timer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Timer */


/* end module: pyjamas.Timer */


/*
PYJS_DEPS: ['pyjamas.Window', 'pyjamas', 'pyjd', 'traceback.print_exc', 'traceback']
*/
