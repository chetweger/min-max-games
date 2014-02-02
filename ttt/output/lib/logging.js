/* start module: logging */
$pyjs['loaded_modules']['logging'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['logging']['__was_initialized__']) return $pyjs['loaded_modules']['logging'];
	var $m = $pyjs['loaded_modules']['logging'];
	$m['__repr__'] = function() { return '<module: logging>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'logging';
	$m['__name__'] = __mod_name__;
	var $lambda1,$pyjs_try_err;

	$m['sys'] = $p['___import___']('sys', 'logging');
	$m['os'] = $p['___import___']('os', 'logging');
	$m['time'] = $p['___import___']('time', 'logging');
	try {
		$m['codecs'] = $p['___import___']('codecs', 'logging');
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
		$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
		if (($pyjs_try_err_name == $p['ImportError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			$m['codecs'] = null;
		} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
	}
	$m['__author__'] = 'Vinay Sajip <vinay_sajip@red-dove.com>';
	$m['__status__'] = 'production';
	$m['__version__'] = '0.5.0.2';
	$m['__date__'] = '16 February 2007';
	$m['_srcfile'] = '/home/chet/libraries/pyjs/pyjs/src/pyjs/lib/logging/__init__.py';
	$m['currentframe'] = function() {
		var $pyjs_try_err;
		try {
			throw ($p['Exception']);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				return $p['getattr']($p['getattr']($p['getattr']($m['sys'], 'exc_traceback'), 'tb_frame'), 'f_back');
			}
		}
		return null;
	};
	$m['currentframe']['__name__'] = 'currentframe';

	$m['currentframe']['__bind_type__'] = 0;
	$m['currentframe']['__args__'] = [null,null];
	if ($p['bool']($p['hasattr']($m['sys'], '_getframe'))) {
		var 		$lambda1 = function() {

			return $m['sys']['_getframe'](3);
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null];
		$m['currentframe'] = $lambda1;
	}
	$m['_startTime'] = $m['time']['time']();
	$m['raiseExceptions'] = 1;
	$m['logThreads'] = 1;
	$m['logProcesses'] = 1;
	$m['CRITICAL'] = 50;
	$m['FATAL'] = $m['CRITICAL'];
	$m['ERROR'] = 40;
	$m['WARNING'] = 30;
	$m['WARN'] = $m['WARNING'];
	$m['INFO'] = 20;
	$m['DEBUG'] = 10;
	$m['NOTSET'] = 0;
	$m['_levelNames'] = $p['dict']([[$m['CRITICAL'], 'CRITICAL'], [$m['ERROR'], 'ERROR'], [$m['WARNING'], 'WARNING'], [$m['INFO'], 'INFO'], [$m['DEBUG'], 'DEBUG'], [$m['NOTSET'], 'NOTSET'], ['CRITICAL', $m['CRITICAL']], ['ERROR', $m['ERROR']], ['WARN', $m['WARNING']], ['WARNING', $m['WARNING']], ['INFO', $m['INFO']], ['DEBUG', $m['DEBUG']], ['NOTSET', $m['NOTSET']]]);
	$m['getLevelName'] = function(level) {

		return $m['_levelNames']['get'](level, $p['sprintf']('Level %s', level));
	};
	$m['getLevelName']['__name__'] = 'getLevelName';

	$m['getLevelName']['__bind_type__'] = 0;
	$m['getLevelName']['__args__'] = [null,null,['level']];
	$m['addLevelName'] = function(level, levelName) {

		$m['_levelNames']['__setitem__'](level, levelName);
		$m['_levelNames']['__setitem__'](levelName, level);
		return null;
	};
	$m['addLevelName']['__name__'] = 'addLevelName';

	$m['addLevelName']['__bind_type__'] = 0;
	$m['addLevelName']['__args__'] = [null,null,['level'],['levelName']];
	$m['LogRecord'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(name, level, pathname, lineno, msg, args, exc_info, func) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				level = arguments[2];
				pathname = arguments[3];
				lineno = arguments[4];
				msg = arguments[5];
				args = arguments[6];
				exc_info = arguments[7];
				func = arguments[8];
			}
			if (typeof func == 'undefined') func=arguments['callee']['__args__'][10][1];
			var ct,$sub3,$sub2,$sub1,$sub4,$and1,$and2,$and3,$and4,$mul4,$mul3,$mul2,$mul1;
			ct = $m['time']['time']();
			self['$$name'] = name;
			self['msg'] = msg;
			if ($p['bool'](($p['bool']($and1=args)?($p['bool']($and2=$p['op_eq']($p['len'](args), 1))?($p['bool']($and3=args['__getitem__'](0))?$p['isinstance'](args['__getitem__'](0), $p['dict']):$and3):$and2):$and1))) {
				args = args['__getitem__'](0);
			}
			self['args'] = args;
			self['levelname'] = $m['getLevelName'](level);
			self['levelno'] = level;
			self['pathname'] = pathname;
			self['filename'] = $p['sprintf']('%s.py', pathname);
			self['module'] = pathname;
			self['exc_info'] = exc_info;
			self['exc_text'] = null;
			self['lineno'] = lineno;
			self['funcName'] = func;
			self['created'] = ct;
			self['msecs'] = (typeof ($mul1=$p['__op_sub']($sub1=ct,$sub2=$p['float_int'](ct)))==typeof ($mul2=1000) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			self['relativeCreated'] = (typeof ($mul3=$p['__op_sub']($sub3=$p['getattr'](self, 'created'),$sub4=$m['_startTime']))==typeof ($mul4=1000) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4));
			self['thread'] = null;
			self['threadName'] = null;
			self['process'] = null;
			return null;
		}
	, 1, [null,null,['self'],['name'],['level'],['pathname'],['lineno'],['msg'],['args'],['exc_info'],['func', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('<LogRecord: %s, %s, %s, %s, "%s">', $p['tuple']([$p['getattr'](self, '$$name'), $p['getattr'](self, 'levelno'), $p['getattr'](self, 'pathname'), $p['getattr'](self, 'lineno'), $p['getattr'](self, 'msg')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('getMessage', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var msg,$mod1,$mod2;
			msg = $p['str']($p['getattr'](self, 'msg'));
			if ($p['bool']($p['getattr'](self, 'args'))) {
				msg = (typeof ($mod1=msg)==typeof ($mod2=$p['getattr'](self, 'args')) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
			}
			return msg;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMessage'] = $method;
		$method = $pyjs__bind_method2('update', function() {
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
			var $iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,k,$iter1_idx;
			$iter1_iter = kwargs;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				k = $iter1_nextval['$nextval'];
				$p['setattr'](self, k, kwargs['__getitem__'](k));
			}
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('toDict', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,_toDict,v,k,$iter2_array;
			_toDict = $p['dict']([]);
			$iter2_iter = $p['dir'](self);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				k = $iter2_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['__getslice'](k, 0, 2), '__'))) {
					continue;
				}
				v = $p['getattr'](self, k);
				if ($p['bool'](!$p['bool']($p['callable'](v)))) {
					if ($p['bool']($p['op_eq']($p['__getslice'](k, 0, 2), '$$'))) {
						_toDict['__setitem__']($p['__getslice'](k, 2, null), v);
					}
					else {
						_toDict['__setitem__'](k, v);
					}
				}
			}
			return _toDict;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toDict'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LogRecord', $p['tuple']($bases), $data);
	})();
	$m['makeLogRecord'] = function(dict) {
		var rv;
		rv = $m['LogRecord'](null, null, '', 0, '', $p['tuple']([]), null, null);
		rv['update'](dict);
		return rv;
	};
	$m['makeLogRecord']['__name__'] = 'makeLogRecord';

	$m['makeLogRecord']['__bind_type__'] = 0;
	$m['makeLogRecord']['__args__'] = [null,null,['dict']];
	$m['Formatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$cls_definition['converter'] = $p['getattr']($m['time'], 'localtime');
		$method = $pyjs__bind_method2('__init__', function(fmt, datefmt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fmt = arguments[1];
				datefmt = arguments[2];
			}
			if (typeof fmt == 'undefined') fmt=arguments['callee']['__args__'][3][1];
			if (typeof datefmt == 'undefined') datefmt=arguments['callee']['__args__'][4][1];

			if ($p['bool'](fmt)) {
				self['_fmt'] = fmt;
			}
			else {
				self['_fmt'] = '%(message)s';
			}
			self['datefmt'] = datefmt;
			return null;
		}
	, 1, [null,null,['self'],['fmt', null],['datefmt', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('formatTime', function(record, datefmt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
				datefmt = arguments[2];
			}
			if (typeof datefmt == 'undefined') datefmt=arguments['callee']['__args__'][4][1];
			var s,t,ct;
			ct = self['converter']($p['getattr'](record, 'created'));
			if ($p['bool'](datefmt)) {
				s = $m['time']['strftime'](datefmt, ct);
			}
			else {
				t = $m['time']['strftime']('%Y-%m-%d %H:%M:%S', ct);
				s = $p['sprintf']('%s,%03d', $p['tuple']([t, $p['getattr'](record, 'msecs')]));
			}
			return s;
		}
	, 1, [null,null,['self'],['record'],['datefmt', null]]);
		$cls_definition['formatTime'] = $method;
		$method = $pyjs__bind_method2('formatException', function(ei) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ei = arguments[1];
			}
			var cStringIO,traceback,$add2,s,$add1,sio;
			if ($p['bool']($p['hasattr']($m['sys'], 'trackstackstr'))) {
				s = $p['str'](ei);
				s = $p['__op_add']($add1=s,$add2=$m['sys']['trackstackstr']());
			}
			else {
				cStringIO = $p['___import___']('cStringIO', 'logging');
				traceback = $p['___import___']('traceback', 'logging');
				sio = cStringIO['StringIO']();
				traceback['print_exception'](ei['__getitem__'](0), ei['__getitem__'](1), ei['__getitem__'](2), null, sio);
				s = sio['getvalue']();
				sio['close']();
			}
			if ($p['bool']($p['op_eq']($p['__getslice'](s, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), null), '\n'))) {
				s = $p['__getslice'](s, 0, (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
			}
			return s;
		}
	, 1, [null,null,['self'],['ei']]);
		$cls_definition['formatException'] = $method;
		$method = $pyjs__bind_method2('format', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var $add4,$add3,s,$add6,$mod3,$add5,$mod4;
			record['message'] = record['getMessage']();
			if ($p['bool'](((($p['cmp'](self['_fmt']['find']('%(asctime)'), 0))|1) == 1))) {
				record['asctime'] = self['formatTime'](record, $p['getattr'](self, 'datefmt'));
			}
			s = (typeof ($mod3=$p['getattr'](self, '_fmt'))==typeof ($mod4=record['toDict']()) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4));
			if ($p['bool']($p['getattr'](record, 'exc_info'))) {
				if ($p['bool'](!$p['bool']($p['getattr'](record, 'exc_text')))) {
					record['exc_text'] = self['formatException']($p['getattr'](record, 'exc_info'));
				}
			}
			if ($p['bool']($p['getattr'](record, 'exc_text'))) {
				if ($p['bool'](!$p['op_eq']($p['__getslice'](s, (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)), null), '\n'))) {
					s = $p['__op_add']($add3=s,$add4='\n');
				}
				s = $p['__op_add']($add5=s,$add6=$p['getattr'](record, 'exc_text'));
			}
			return s;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['format'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Formatter', $p['tuple']($bases), $data);
	})();
	$m['_defaultFormatter'] = $m['Formatter']();
	$m['BufferingFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(linefmt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				linefmt = arguments[1];
			}
			if (typeof linefmt == 'undefined') linefmt=arguments['callee']['__args__'][3][1];

			if ($p['bool'](linefmt)) {
				self['linefmt'] = linefmt;
			}
			else {
				self['linefmt'] = $m['_defaultFormatter'];
			}
			return null;
		}
	, 1, [null,null,['self'],['linefmt', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('formatHeader', function(records) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				records = arguments[1];
			}

			return '';
		}
	, 1, [null,null,['self'],['records']]);
		$cls_definition['formatHeader'] = $method;
		$method = $pyjs__bind_method2('formatFooter', function(records) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				records = arguments[1];
			}

			return '';
		}
	, 1, [null,null,['self'],['records']]);
		$cls_definition['formatFooter'] = $method;
		$method = $pyjs__bind_method2('format', function(records) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				records = arguments[1];
			}
			var rv,$iter3_idx,$add11,record,$iter3_array,$add10,$iter3_iter,$add12,$iter3_type,$add8,$add9,$iter3_nextval,$add7;
			rv = '';
			if ($p['bool'](($p['cmp']($p['len'](records), 0) == 1))) {
				rv = $p['__op_add']($add7=rv,$add8=self['formatHeader'](records));
				$iter3_iter = records;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					record = $iter3_nextval['$nextval'];
					rv = $p['__op_add']($add9=rv,$add10=self['linefmt']['format'](record));
				}
				rv = $p['__op_add']($add11=rv,$add12=self['formatFooter'](records));
			}
			return rv;
		}
	, 1, [null,null,['self'],['records']]);
		$cls_definition['format'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BufferingFormatter', $p['tuple']($bases), $data);
	})();
	$m['Filter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][3][1];

			self['$$name'] = name;
			self['nlen'] = $p['len'](name);
			return null;
		}
	, 1, [null,null,['self'],['name', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('filter', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'nlen'), 0))) {
				return 1;
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, '$$name'), $p['getattr'](record, '$$name')))) {
				return 1;
			}
			else if ($p['bool'](!$p['op_eq'](record['$$name']['find']($p['getattr'](self, '$$name'), 0, $p['getattr'](self, 'nlen')), 0))) {
				return 0;
			}
			return $p['op_eq']($p['getattr'](record, '$$name')['__getitem__']($p['getattr'](self, 'nlen')), '.');
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['filter'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Filter', $p['tuple']($bases), $data);
	})();
	$m['Filterer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['filters'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'filters')['__contains__'](filter)))) {
				self['filters']['append'](filter);
			}
			return null;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['addFilter'] = $method;
		$method = $pyjs__bind_method2('removeFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, 'filters')['__contains__'](filter))) {
				self['filters']['remove'](filter);
			}
			return null;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['removeFilter'] = $method;
		$method = $pyjs__bind_method2('filter', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var rv,f,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			rv = 1;
			$iter4_iter = $p['getattr'](self, 'filters');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				f = $iter4_nextval['$nextval'];
				if ($p['bool'](!$p['bool'](f['filter'](record)))) {
					rv = 0;
					break;
				}
			}
			return rv;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['filter'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Filterer', $p['tuple']($bases), $data);
	})();
	$m['_handlers'] = $p['dict']([]);
	$m['_handlerList'] = $p['list']([]);
	$m['Handler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];

			$m['Filterer']['__init__'](self);
			self['level'] = level;
			self['formatter'] = null;
			$m['_handlers']['__setitem__'](self, 1);
			$m['_handlerList']['insert'](0, self);
			return null;
		}
	, 1, [null,null,['self'],['level', $m['NOTSET']]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createLock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createLock'] = $method;
		$method = $pyjs__bind_method2('acquire', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['acquire'] = $method;
		$method = $pyjs__bind_method2('release', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['release'] = $method;
		$method = $pyjs__bind_method2('setLevel', function(level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}

			self['level'] = level;
			return null;
		}
	, 1, [null,null,['self'],['level']]);
		$cls_definition['setLevel'] = $method;
		$method = $pyjs__bind_method2('format', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var fmt;
			if ($p['bool']($p['getattr'](self, 'formatter'))) {
				fmt = $p['getattr'](self, 'formatter');
			}
			else {
				fmt = $m['_defaultFormatter'];
			}
			return fmt['format'](record);
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['format'] = $method;
		$method = $pyjs__bind_method2('emit', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}


			var $pyjs__raise_expr1 = $p['NotImplementedError'];
			var $pyjs__raise_expr2 = 'emit must be implemented by Handler subclasses';
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
	, 1, [null,null,['self'],['record']]);
		$cls_definition['emit'] = $method;
		$method = $pyjs__bind_method2('handle', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var rv;
			rv = self['filter'](record);
			if ($p['bool'](rv)) {
				self['emit'](record);
			}
			return rv;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['handle'] = $method;
		$method = $pyjs__bind_method2('setFormatter', function(fmt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fmt = arguments[1];
			}

			self['formatter'] = fmt;
			return null;
		}
	, 1, [null,null,['self'],['fmt']]);
		$cls_definition['setFormatter'] = $method;
		$method = $pyjs__bind_method2('flush', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flush'] = $method;
		$method = $pyjs__bind_method2('close', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['_handlers']['__delitem__'](self);
			$m['_handlerList']['remove'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['close'] = $method;
		$method = $pyjs__bind_method2('handleError', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}

			if ($p['bool']($m['raiseExceptions'])) {
				throw ($pyjs['__last_exception__']?
					$pyjs['__last_exception__']['error']:
					$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
			}
			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['handleError'] = $method;
		var $bases = new Array($m['Filterer']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Handler', $p['tuple']($bases), $data);
	})();
	$m['DefaultStream'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('write', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				msg = arguments[1];
			}

			$p['printFunc']([msg], 1);
			return null;
		}
	, 1, [null,null,['self'],['msg']]);
		$cls_definition['write'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DefaultStream', $p['tuple']($bases), $data);
	})();
	$m['defaultStream'] = $m['DefaultStream']();
	$m['StreamHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(strm) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				strm = arguments[1];
			}
			if (typeof strm == 'undefined') strm=arguments['callee']['__args__'][3][1];

			$m['Handler']['__init__'](self);
			if ($p['bool']((strm === null))) {
				strm = $m['defaultStream'];
			}
			self['stream'] = strm;
			self['formatter'] = null;
			return null;
		}
	, 1, [null,null,['self'],['strm', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('flush', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['hasattr']($p['getattr'](self, 'stream'), 'flush'))) {
				self['stream']['flush']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flush'] = $method;
		$method = $pyjs__bind_method2('emit', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var fs,$pyjs_try_err,$mod5,$mod6,msg;
			try {
				msg = self['format'](record);
				fs = '%s\n';
				self['stream']['write']((typeof ($mod5=fs)==typeof ($mod6=msg) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)));
				self['flush']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					self['handleError'](record);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['emit'] = $method;
		var $bases = new Array($m['Handler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StreamHandler', $p['tuple']($bases), $data);
	})();
	$m['PlaceHolder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(alogger) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alogger = arguments[1];
			}

			self['loggerMap'] = $p['dict']([[alogger, null]]);
			return null;
		}
	, 1, [null,null,['self'],['alogger']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('append', function(alogger) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alogger = arguments[1];
			}

			if ($p['bool'](!$p['bool'](self['loggerMap']['has_key'](alogger)))) {
				$p['getattr'](self, 'loggerMap')['__setitem__'](alogger, null);
			}
			return null;
		}
	, 1, [null,null,['self'],['alogger']]);
		$cls_definition['append'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PlaceHolder', $p['tuple']($bases), $data);
	})();
	$m['_loggerClass'] = null;
	$m['setLoggerClass'] = function(klass) {
		var $add14,$add13;
		if ($p['bool'](!$p['op_eq'](klass, (typeof Logger == "undefined"?$m['Logger']:Logger)))) {
			if ($p['bool'](!$p['bool']($p['issubclass'](klass, (typeof Logger == "undefined"?$m['Logger']:Logger))))) {

				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = $p['__op_add']($add13='logger not derived from logging.Logger: ',$add14=$p['getattr'](klass, '__name__'));
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		$m['_loggerClass'] = klass;
		return null;
	};
	$m['setLoggerClass']['__name__'] = 'setLoggerClass';

	$m['setLoggerClass']['__bind_type__'] = 0;
	$m['setLoggerClass']['__args__'] = [null,null,['klass']];
	$m['getLoggerClass'] = function() {

		return $m['_loggerClass'];
	};
	$m['getLoggerClass']['__name__'] = 'getLoggerClass';

	$m['getLoggerClass']['__bind_type__'] = 0;
	$m['getLoggerClass']['__args__'] = [null,null];
	$m['Manager'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(rootnode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rootnode = arguments[1];
			}

			self['root'] = rootnode;
			self['disable'] = 0;
			self['emittedNoHandlerWarning'] = 0;
			self['loggerDict'] = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self'],['rootnode']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getLogger', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var ph,rv;
			rv = null;
			if ($p['bool'](self['loggerDict']['has_key'](name))) {
				rv = $p['getattr'](self, 'loggerDict')['__getitem__'](name);
				if ($p['bool']($p['isinstance'](rv, $m['PlaceHolder']))) {
					ph = rv;
					rv = $m['_loggerClass'](name);
					rv['manager'] = self;
					$p['getattr'](self, 'loggerDict')['__setitem__'](name, rv);
					self['_fixupChildren'](ph, rv);
					self['_fixupParents'](rv);
				}
			}
			else {
				rv = $m['_loggerClass'](name);
				rv['manager'] = self;
				$p['getattr'](self, 'loggerDict')['__setitem__'](name, rv);
				self['_fixupParents'](rv);
			}
			return rv;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['getLogger'] = $method;
		$method = $pyjs__bind_method2('_fixupParents', function(alogger) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alogger = arguments[1];
			}
			var rv,obj,name,i,$and5,substr,$and6,$sub6,$sub5;
			name = $p['getattr'](alogger, '$$name');
			i = name['find']('.');
			rv = null;
			while ($p['bool'](($p['bool']($and5=($p['cmp'](i, 0) == 1))?!$p['bool'](rv):$and5))) {
				substr = $p['__getslice'](name, 0, i);
				if ($p['bool'](!$p['bool'](self['loggerDict']['has_key'](substr)))) {
					$p['getattr'](self, 'loggerDict')['__setitem__'](substr, $m['PlaceHolder'](alogger));
				}
				else {
					obj = $p['getattr'](self, 'loggerDict')['__getitem__'](substr);
					if ($p['bool']($p['isinstance'](obj, (typeof Logger == "undefined"?$m['Logger']:Logger)))) {
						rv = obj;
					}
					else {
						if (!( $p['isinstance'](obj, $m['PlaceHolder']) )) {
						   throw $p['AssertionError']();
						 }
						obj['append'](alogger);
					}
				}
				i = name['rfind']('.', 0, $p['__op_sub']($sub5=i,$sub6=1));
			}
			if ($p['bool'](!$p['bool'](rv))) {
				rv = $p['getattr'](self, 'root');
			}
			alogger['parent'] = rv;
			return null;
		}
	, 1, [null,null,['self'],['alogger']]);
		$cls_definition['_fixupParents'] = $method;
		$method = $pyjs__bind_method2('_fixupChildren', function(ph, alogger) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ph = arguments[1];
				alogger = arguments[2];
			}
			var $iter5_nextval,c,name,$iter5_array,namelen,$iter5_iter,$iter5_idx,$iter5_type;
			name = $p['getattr'](alogger, '$$name');
			namelen = $p['len'](name);
			$iter5_iter = ph['loggerMap']['keys']();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				c = $iter5_nextval['$nextval'];
				if ($p['bool'](!$p['op_eq']($p['__getslice']($p['getattr']($p['getattr'](c, 'parent'), '$$name'), 0, namelen), name))) {
					alogger['parent'] = $p['getattr'](c, 'parent');
					c['parent'] = alogger;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['ph'],['alogger']]);
		$cls_definition['_fixupChildren'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Manager', $p['tuple']($bases), $data);
	})();
	$m['Logger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(name, level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				level = arguments[2];
			}
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][4][1];

			$m['Filterer']['__init__'](self);
			self['$$name'] = name;
			self['level'] = level;
			self['parent'] = null;
			self['propagate'] = 1;
			self['handlers'] = $p['list']([]);
			self['disabled'] = 0;
			return null;
		}
	, 1, [null,null,['self'],['name'],['level', $m['NOTSET']]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setLevel', function(level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}

			self['level'] = level;
			return null;
		}
	, 1, [null,null,['self'],['level']]);
		$cls_definition['setLevel'] = $method;
		$method = $pyjs__bind_method2('debug', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			if ($p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['DEBUG']))|1) == 1))) {
				return null;
			}
			if ($p['bool'](((($p['cmp']($m['DEBUG'], self['getEffectiveLevel']()))|1) == 1))) {
				$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['DEBUG'], msg, args]);
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['msg']]);
		$cls_definition['debug'] = $method;
		$method = $pyjs__bind_method2('info', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			if ($p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['INFO']))|1) == 1))) {
				return null;
			}
			if ($p['bool'](((($p['cmp']($m['INFO'], self['getEffectiveLevel']()))|1) == 1))) {
				$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['INFO'], msg, args]);
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['msg']]);
		$cls_definition['info'] = $method;
		$method = $pyjs__bind_method2('warning', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			if ($p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['WARNING']))|1) == 1))) {
				return null;
			}
			if ($p['bool'](self['isEnabledFor']($m['WARNING']))) {
				$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['WARNING'], msg, args]);
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['msg']]);
		$cls_definition['warning'] = $method;
		$cls_definition['warn'] = $p['staticmethod']($cls_definition['warning']);
		$method = $pyjs__bind_method2('error', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			if ($p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['ERROR']))|1) == 1))) {
				return null;
			}
			if ($p['bool'](self['isEnabledFor']($m['ERROR']))) {
				$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['ERROR'], msg, args]);
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['msg']]);
		$cls_definition['error'] = $method;
		$method = $pyjs__bind_method2('exception', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var $add15,$add16;
			self['error']($p['__op_add']($add15=$p['tuple']([msg]),$add16=args), $p['dict']([['exc_info', 1]]));
			return null;
		}
	, 1, ['args',null,['self'],['msg']]);
		$cls_definition['exception'] = $method;
		$method = $pyjs__bind_method2('critical', function(msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				msg = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			if ($p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['CRITICAL']))|1) == 1))) {
				return null;
			}
			if ($p['bool'](((($p['cmp']($m['CRITICAL'], self['getEffectiveLevel']()))|1) == 1))) {
				$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['CRITICAL'], msg, args]);
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['msg']]);
		$cls_definition['critical'] = $method;
		$cls_definition['fatal'] = $p['staticmethod']($cls_definition['critical']);
		$method = $pyjs__bind_method2('log', function(level, msg) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				level = arguments[1];
				msg = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[3];
					}
				} else 				if (typeof level != 'undefined') {
					if (level !== null && typeof level['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = level;
						level = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](level, $p['float_int'])))) {
				if ($p['bool']($m['raiseExceptions'])) {

					var $pyjs__raise_expr1 = $p['TypeError'];
					var $pyjs__raise_expr2 = 'level must be an integer';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				else {
					return null;
				}
			}
			if ($p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), level))|1) == 1))) {
				return null;
			}
			if ($p['bool'](self['isEnabledFor'](level))) {
				$pyjs_kwargs_call(self, '_log', null, kwargs, [{}, level, msg, args]);
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['level'],['msg']]);
		$cls_definition['log'] = $method;
		$method = $pyjs__bind_method2('findCaller', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj,$iter6_idx,$iter6_type,ts,$iter6_array,lineno,fname,$iter6_iter,stack,$iter6_nextval;
			stack = $p['list']($pyjs['trackstack']);
			fname = '(unknown file)';
			lineno = 0;
			$iter6_iter = stack;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				obj = $iter6_nextval['$nextval'];
				ts = $p['dict'](obj);
				if ($p['bool'](!$p['op_eq'](ts['__getitem__']('module'), (typeof __name__ == "undefined"?$m['__name__']:__name__)))) {
					fname = ts['get']('module', '(unknown file)');
					lineno = ts['get']('lineno', 0);
				}
			}
			return $p['tuple']([fname, lineno, '(unknown function)']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['findCaller'] = $method;
		$method = $pyjs__bind_method2('makeRecord', function(name, level, fn, lno, msg, args, exc_info, func, extra) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				level = arguments[2];
				fn = arguments[3];
				lno = arguments[4];
				msg = arguments[5];
				args = arguments[6];
				exc_info = arguments[7];
				func = arguments[8];
				extra = arguments[9];
			}
			if (typeof func == 'undefined') func=arguments['callee']['__args__'][10][1];
			if (typeof extra == 'undefined') extra=arguments['callee']['__args__'][11][1];
			var rv,$iter7_array,$or1,$iter7_nextval,$iter7_iter,key,$iter7_idx,$iter7_type,$or2;
			rv = $m['LogRecord'](name, level, fn, lno, msg, args, exc_info, func);
			if ($p['bool'](extra)) {
				$iter7_iter = extra;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					key = $iter7_nextval['$nextval'];
					if ($p['bool'](($p['bool']($or1=$p['list'](['message', 'asctime'])['__contains__'](key))?$or1:rv['toDict']()['__contains__'](key)))) {
						throw ($p['KeyError']($p['sprintf']('Attempt to overwrite %r in LogRecord', key)));
					}
					$pyjs_kwargs_call(rv, 'update', null, null, [{'key':extra['__getitem__'](key)}]);
				}
			}
			return rv;
		}
	, 1, [null,null,['self'],['name'],['level'],['fn'],['lno'],['msg'],['args'],['exc_info'],['func', null],['extra', null]]);
		$cls_definition['makeRecord'] = $method;
		$method = $pyjs__bind_method2('_log', function(level, msg, args, exc_info, extra) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
				msg = arguments[2];
				args = arguments[3];
				exc_info = arguments[4];
				extra = arguments[5];
			}
			if (typeof exc_info == 'undefined') exc_info=arguments['callee']['__args__'][6][1];
			if (typeof extra == 'undefined') extra=arguments['callee']['__args__'][7][1];
			var record,lno,func,fn;
			if ($p['bool']($m['_srcfile'])) {
				var $tupleassign1 = $p['__ass_unpack'](self['findCaller'](), 3, null);
				fn = $tupleassign1[0];
				lno = $tupleassign1[1];
				func = $tupleassign1[2];
			}
			else {
				var $tupleassign2 = $p['__ass_unpack']($p['tuple'](['(unknown file)', 0, '(unknown function)']), 3, null);
				fn = $tupleassign2[0];
				lno = $tupleassign2[1];
				func = $tupleassign2[2];
			}
			if ($p['bool'](exc_info)) {
				if ($p['bool'](!$p['bool']($p['isinstance'](exc_info, $p['tuple'])))) {
					exc_info = $m['sys']['exc_info']();
				}
			}
			record = self['makeRecord']($p['getattr'](self, '$$name'), level, fn, lno, msg, args, exc_info, func, extra);
			self['handle'](record);
			return null;
		}
	, 1, [null,null,['self'],['level'],['msg'],['args'],['exc_info', null],['extra', null]]);
		$cls_definition['_log'] = $method;
		$method = $pyjs__bind_method2('handle', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var $and8,$and7;
			if ($p['bool'](($p['bool']($and7=!$p['bool']($p['getattr'](self, 'disabled')))?self['filter'](record):$and7))) {
				self['callHandlers'](record);
			}
			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['handle'] = $method;
		$method = $pyjs__bind_method2('addHandler', function(hdlr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hdlr = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'handlers')['__contains__'](hdlr)))) {
				self['handlers']['append'](hdlr);
			}
			return null;
		}
	, 1, [null,null,['self'],['hdlr']]);
		$cls_definition['addHandler'] = $method;
		$method = $pyjs__bind_method2('removeHandler', function(hdlr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hdlr = arguments[1];
			}
			var $pyjs_try_err;
			if ($p['bool']($p['getattr'](self, 'handlers')['__contains__'](hdlr))) {
				hdlr['acquire']();
				try {
					self['handlers']['remove'](hdlr);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				} finally {
					hdlr['release']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['hdlr']]);
		$cls_definition['removeHandler'] = $method;
		$method = $pyjs__bind_method2('callHandlers', function(record) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				record = arguments[1];
			}
			var $and9,c,$iter8_idx,$iter8_array,$iter8_iter,$and10,$add17,$iter8_nextval,found,$and11,$add18,$iter8_type,hdlr;
			c = self;
			found = 0;
			while ($p['bool'](c)) {
				$iter8_iter = $p['getattr'](c, 'handlers');
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					hdlr = $iter8_nextval['$nextval'];
					found = $p['__op_add']($add17=found,$add18=1);
					if ($p['bool'](((($p['cmp']($p['getattr'](record, 'levelno'), $p['getattr'](hdlr, 'level')))|1) == 1))) {
						hdlr['handle'](record);
					}
				}
				if ($p['bool'](!$p['bool']($p['getattr'](c, 'propagate')))) {
					c = null;
				}
				else {
					c = $p['getattr'](c, 'parent');
				}
			}
			if ($p['bool'](($p['bool']($and9=$p['op_eq'](found, 0))?($p['bool']($and10=$m['raiseExceptions'])?!$p['bool']($p['getattr']($p['getattr'](self, 'manager'), 'emittedNoHandlerWarning')):$and10):$and9))) {
				$m['sys']['stderr']['write']($p['sprintf']('No handlers could be found for logger "%s"\n', $p['getattr'](self, '$$name')));
				$p['getattr'](self, 'manager')['emittedNoHandlerWarning'] = 1;
			}
			return null;
		}
	, 1, [null,null,['self'],['record']]);
		$cls_definition['callHandlers'] = $method;
		$method = $pyjs__bind_method2('getEffectiveLevel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var logger;
			logger = self;
			while ($p['bool'](logger)) {
				if ($p['bool']($p['getattr'](logger, 'level'))) {
					return $p['getattr'](logger, 'level');
				}
				logger = $p['getattr'](logger, 'parent');
			}
			return $m['NOTSET'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEffectiveLevel'] = $method;
		$method = $pyjs__bind_method2('isEnabledFor', function(level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}

			if ($p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), level))|1) == 1))) {
				return 0;
			}
			return ((($p['cmp'](level, self['getEffectiveLevel']()))|1) == 1);
		}
	, 1, [null,null,['self'],['level']]);
		$cls_definition['isEnabledFor'] = $method;
		var $bases = new Array($m['Filterer']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Logger', $p['tuple']($bases), $data);
	})();
	$m['RootLogger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'logging';
		$method = $pyjs__bind_method2('__init__', function(level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}

			$m['Logger']['__init__'](self, 'root', level);
			return null;
		}
	, 1, [null,null,['self'],['level']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Logger']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RootLogger', $p['tuple']($bases), $data);
	})();
	$m['_loggerClass'] = $m['Logger'];
	$m['root'] = $m['RootLogger']($m['WARNING']);
	$m['Logger']['root'] = $m['root'];
	$m['$assign1'] = $m['Manager']($p['getattr']($m['Logger'], 'root'));
	$m['root']['manager'] = $m['$assign1'];
	$m['Logger']['manager'] = $m['$assign1'];
	$m['BASIC_FORMAT'] = '%(levelname)s:%(name)s:%(message)s';
	$m['basicConfig'] = function() {
		var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
{
			}
		}
		var fs,stream,level,fmt,dfs,filename,hdlr;
		if ($p['bool']($p['op_eq']($p['len']($p['getattr']($m['root'], 'handlers')), 0))) {
			filename = kwargs['get']('filename');
			if ($p['bool'](filename)) {
				throw ($p['NotImplementedError']('Files not supported in javascript'));
			}
			else {
				stream = kwargs['get']('stream');
				hdlr = $m['StreamHandler'](stream);
			}
			fs = kwargs['get']('format', $m['BASIC_FORMAT']);
			dfs = kwargs['get']('datefmt', null);
			fmt = $m['Formatter'](fs, dfs);
			hdlr['setFormatter'](fmt);
			$m['root']['addHandler'](hdlr);
			level = kwargs['get']('level');
			if ($p['bool'](level)) {
				$m['root']['setLevel'](level);
			}
		}
		return null;
	};
	$m['basicConfig']['__name__'] = 'basicConfig';

	$m['basicConfig']['__bind_type__'] = 0;
	$m['basicConfig']['__args__'] = [null,['kwargs']];
	$m['getLogger'] = function(name) {
		if (typeof name == 'undefined') name=arguments['callee']['__args__'][2][1];

		if ($p['bool'](name)) {
			return $m['Logger']['manager']['getLogger'](name);
		}
		else {
			return $m['root'];
		}
		return null;
	};
	$m['getLogger']['__name__'] = 'getLogger';

	$m['getLogger']['__bind_type__'] = 0;
	$m['getLogger']['__args__'] = [null,null,['name', null]];
	$m['critical'] = function(msg) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

		var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof msg != 'undefined') {
				if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = msg;
					msg = arguments[1];
				}
			} else {
			}
		}
		var $add20,$add19;
		if ($p['bool']($p['op_eq']($p['len']($p['getattr']($m['root'], 'handlers')), 0))) {
			$m['basicConfig']();
		}
		$pyjs_kwargs_call($m['root'], 'critical', null, kwargs, [{}, $p['__op_add']($add19=$p['tuple']([msg]),$add20=args)]);
		return null;
	};
	$m['critical']['__name__'] = 'critical';

	$m['critical']['__bind_type__'] = 0;
	$m['critical']['__args__'] = ['args',['kwargs'],['msg']];
	$m['fatal'] = $m['critical'];
	$m['error'] = function(msg) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

		var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof msg != 'undefined') {
				if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = msg;
					msg = arguments[1];
				}
			} else {
			}
		}
		var $add21,$add22;
		if ($p['bool']($p['op_eq']($p['len']($p['getattr']($m['root'], 'handlers')), 0))) {
			$m['basicConfig']();
		}
		$pyjs_kwargs_call($m['root'], 'error', null, kwargs, [{}, $p['__op_add']($add21=$p['tuple']([msg]),$add22=args)]);
		return null;
	};
	$m['error']['__name__'] = 'error';

	$m['error']['__bind_type__'] = 0;
	$m['error']['__args__'] = ['args',['kwargs'],['msg']];
	$m['exception'] = function(msg) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

		var $add23,$add24;
		$m['error']($p['__op_add']($add23=$p['tuple']([msg]),$add24=args), $p['dict']([['exc_info', 1]]));
		return null;
	};
	$m['exception']['__name__'] = 'exception';

	$m['exception']['__bind_type__'] = 0;
	$m['exception']['__args__'] = ['args',null,['msg']];
	$m['warning'] = function(msg) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

		var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof msg != 'undefined') {
				if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = msg;
					msg = arguments[1];
				}
			} else {
			}
		}
		var $add25,$add26;
		if ($p['bool']($p['op_eq']($p['len']($p['getattr']($m['root'], 'handlers')), 0))) {
			$m['basicConfig']();
		}
		$pyjs_kwargs_call($m['root'], 'warning', null, kwargs, [{}, $p['__op_add']($add25=$p['tuple']([msg]),$add26=args)]);
		return null;
	};
	$m['warning']['__name__'] = 'warning';

	$m['warning']['__bind_type__'] = 0;
	$m['warning']['__args__'] = ['args',['kwargs'],['msg']];
	$m['warn'] = $m['warning'];
	$m['info'] = function(msg) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

		var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof msg != 'undefined') {
				if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = msg;
					msg = arguments[1];
				}
			} else {
			}
		}
		var $add28,$add27;
		if ($p['bool']($p['op_eq']($p['len']($p['getattr']($m['root'], 'handlers')), 0))) {
			$m['basicConfig']();
		}
		$pyjs_kwargs_call($m['root'], 'info', null, kwargs, [{}, $p['__op_add']($add27=$p['tuple']([msg]),$add28=args)]);
		return null;
	};
	$m['info']['__name__'] = 'info';

	$m['info']['__bind_type__'] = 0;
	$m['info']['__args__'] = ['args',['kwargs'],['msg']];
	$m['debug'] = function(msg) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

		var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof msg != 'undefined') {
				if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = msg;
					msg = arguments[1];
				}
			} else {
			}
		}
		var $add29,$add30;
		if ($p['bool']($p['op_eq']($p['len']($p['getattr']($m['root'], 'handlers')), 0))) {
			$m['basicConfig']();
		}
		$pyjs_kwargs_call($m['root'], 'debug', null, kwargs, [{}, $p['__op_add']($add29=$p['tuple']([msg]),$add30=args)]);
		return null;
	};
	$m['debug']['__name__'] = 'debug';

	$m['debug']['__bind_type__'] = 0;
	$m['debug']['__args__'] = ['args',['kwargs'],['msg']];
	$m['log'] = function(level, msg) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

		var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof msg != 'undefined') {
				if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = msg;
					msg = arguments[2];
				}
			} else 			if (typeof level != 'undefined') {
				if (level !== null && typeof level['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = level;
					level = arguments[2];
				}
			} else {
			}
		}
		var $add31,$add32;
		if ($p['bool']($p['op_eq']($p['len']($p['getattr']($m['root'], 'handlers')), 0))) {
			$m['basicConfig']();
		}
		$pyjs_kwargs_call($m['root'], 'log', null, kwargs, [{}, $p['__op_add']($add31=$p['tuple']([level, msg]),$add32=args)]);
		return null;
	};
	$m['log']['__name__'] = 'log';

	$m['log']['__bind_type__'] = 0;
	$m['log']['__args__'] = ['args',['kwargs'],['level'],['msg']];
	$m['disable'] = function(level) {

		$p['getattr']($m['root'], 'manager')['disable'] = level;
		return null;
	};
	$m['disable']['__name__'] = 'disable';

	$m['disable']['__bind_type__'] = 0;
	$m['disable']['__args__'] = [null,null,['level']];
	$m['shutdown'] = function(handlerList) {
		if (typeof handlerList == 'undefined') handlerList=arguments['callee']['__args__'][2][1];
		var $iter9_iter,h,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs_try_err,$iter9_array;
		$iter9_iter = $p['__getslice'](handlerList, 0, null);
		$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
		while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
			h = $iter9_nextval['$nextval'];
			try {
				h['flush']();
				h['close']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					if ($p['bool']($m['raiseExceptions'])) {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
			}
		}
		return null;
	};
	$m['shutdown']['__name__'] = 'shutdown';

	$m['shutdown']['__bind_type__'] = 0;
	$m['shutdown']['__args__'] = [null,null,['handlerList', $m['_handlerList']]];
	return this;
}; /* end logging */


/* end module: logging */


/*
PYJS_DEPS: ['sys', 'os', 'time', 'codecs', 'cStringIO', 'traceback']
*/
