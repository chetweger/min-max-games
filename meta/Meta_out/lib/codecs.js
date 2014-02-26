/* start module: codecs */
$pyjs['loaded_modules']['codecs'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['codecs']['__was_initialized__']) return $pyjs['loaded_modules']['codecs'];
	var $m = $pyjs['loaded_modules']['codecs'];
	$m['__repr__'] = function() { return '<module: codecs>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'codecs';
	$m['__name__'] = __mod_name__;


	$m['__builtin__'] = $p['___import___']('__builtin__', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['__all__'] = $p['list'](['register', 'lookup', 'open', 'EncodedFile', 'BOM', 'BOM_BE', 'BOM_LE', 'BOM32_BE', 'BOM32_LE', 'BOM64_BE', 'BOM64_LE', 'BOM_UTF8', 'BOM_UTF16', 'BOM_UTF16_LE', 'BOM_UTF16_BE', 'BOM_UTF32', 'BOM_UTF32_LE', 'BOM_UTF32_BE', 'strict_errors', 'ignore_errors', 'replace_errors', 'xmlcharrefreplace_errors', 'register_error', 'lookup_error']);
	$m['BOM_UTF8'] = '\xef\xbb\xbf';
	$m['$assign1'] = '\xff\xfe';
	$m['BOM_LE'] = $m['$assign1'];
	$m['BOM_UTF16_LE'] = $m['$assign1'];
	$m['$assign2'] = '\xfe\xff';
	$m['BOM_BE'] = $m['$assign2'];
	$m['BOM_UTF16_BE'] = $m['$assign2'];
	$m['BOM_UTF32_LE'] = '\xff\xfe\x00\x00';
	$m['BOM_UTF32_BE'] = '\x00\x00\xfe\xff';
	if ($p['bool']($p['op_eq']($p['getattr']($m['sys'], 'byteorder'), 'little'))) {
		$m['$assign3'] = $m['BOM_UTF16_LE'];
		$m['BOM'] = $m['$assign3'];
		$m['BOM_UTF16'] = $m['$assign3'];
		$m['BOM_UTF32'] = $m['BOM_UTF32_LE'];
	}
	else {
		$m['$assign4'] = $m['BOM_UTF16_BE'];
		$m['BOM'] = $m['$assign4'];
		$m['BOM_UTF16'] = $m['$assign4'];
		$m['BOM_UTF32'] = $m['BOM_UTF32_BE'];
	}
	$m['BOM32_LE'] = $m['BOM_UTF16_LE'];
	$m['BOM32_BE'] = $m['BOM_UTF16_BE'];
	$m['BOM64_LE'] = $m['BOM_UTF32_LE'];
	$m['BOM64_BE'] = $m['BOM_UTF32_BE'];
	$m['CodecInfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('__new__', function(cls, encode, decode, streamreader, streamwriter, incrementalencoder, incrementaldecoder, name) {
			if (typeof streamreader == 'undefined') streamreader=arguments['callee']['__args__'][5][1];
			if (typeof streamwriter == 'undefined') streamwriter=arguments['callee']['__args__'][6][1];
			if (typeof incrementalencoder == 'undefined') incrementalencoder=arguments['callee']['__args__'][7][1];
			if (typeof incrementaldecoder == 'undefined') incrementaldecoder=arguments['callee']['__args__'][8][1];
			if (typeof name == 'undefined') name=arguments['callee']['__args__'][9][1];
			var self;
			self = $p['tuple']['__new__'](cls, $p['tuple']([encode, decode, streamreader, streamwriter]));
			self['$$name'] = name;
			self['encode'] = encode;
			self['decode'] = decode;
			self['incrementalencoder'] = incrementalencoder;
			self['incrementaldecoder'] = incrementaldecoder;
			self['streamwriter'] = streamwriter;
			self['streamreader'] = streamreader;
			return self;
		}
	, 3, [null,null,['cls'],['encode'],['decode'],['streamreader', null],['streamwriter', null],['incrementalencoder', null],['incrementaldecoder', null],['name', null]]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('<%s.%s object for encoding %s at 0x%x>', $p['tuple']([$p['getattr']($p['getattr'](self, '__class__'), '__module__'), $p['getattr']($p['getattr'](self, '__class__'), '__name__'), $p['getattr'](self, '$$name'), (typeof id == "undefined"?$m['id']:id)(self)]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array($p['tuple']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CodecInfo', $p['tuple']($bases), $data);
	})();
	$m['Codec'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('encode', function(input, errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				errors = arguments[2];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

			throw ($p['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
		$cls_definition['encode'] = $method;
		$method = $pyjs__bind_method2('decode', function(input, errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				errors = arguments[2];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

			throw ($p['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
		$cls_definition['decode'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Codec', $p['tuple']($bases), $data);
	})();
	$m['IncrementalEncoder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('__init__', function(errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errors = arguments[1];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

			self['errors'] = errors;
			self['buffer'] = '';
			return null;
		}
	, 1, [null,null,['self'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('encode', function(input, $$final) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				$$final = arguments[2];
			}
			if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
			var $$final;
			throw ($p['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
		$cls_definition['encode'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 0;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('IncrementalEncoder', $p['tuple']($bases), $data);
	})();
	$m['BufferedIncrementalEncoder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('__init__', function(errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errors = arguments[1];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

			$m['IncrementalEncoder']['__init__'](self, errors);
			self['buffer'] = '';
			return null;
		}
	, 1, [null,null,['self'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_buffer_encode', function(input, errors, $$final) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				errors = arguments[2];
				$$final = arguments[3];
			}
			var $$final;
			throw ($p['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['input'],['errors'],['$$final']]);
		$cls_definition['_buffer_encode'] = $method;
		$method = $pyjs__bind_method2('encode', function(input, $$final) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				$$final = arguments[2];
			}
			if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
			var $add2,consumed,$add1,result,data,$$final;
			data = $p['__op_add']($add1=$p['getattr'](self, 'buffer'),$add2=input);
			var $tupleassign1 = $p['__ass_unpack'](self['_buffer_encode'](data, $p['getattr'](self, 'errors'), $$final), 2, null);
			result = $tupleassign1[0];
			consumed = $tupleassign1[1];
			self['buffer'] = $p['__getslice'](data, consumed, null);
			return result;
		}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
		$cls_definition['encode'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['IncrementalEncoder']['reset'](self);
			self['buffer'] = '';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2;
			return ($p['bool']($or1=$p['getattr'](self, 'buffer'))?$or1:0);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}
			var $or4,$or3;
			self['buffer'] = ($p['bool']($or3=state)?$or3:'');
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		var $bases = new Array($m['IncrementalEncoder']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BufferedIncrementalEncoder', $p['tuple']($bases), $data);
	})();
	$m['IncrementalDecoder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('__init__', function(errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errors = arguments[1];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

			self['errors'] = errors;
			return null;
		}
	, 1, [null,null,['self'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('decode', function(input, $$final) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				$$final = arguments[2];
			}
			if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
			var $$final;
			throw ($p['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
		$cls_definition['decode'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['tuple'](['', 0]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('IncrementalDecoder', $p['tuple']($bases), $data);
	})();
	$m['BufferedIncrementalDecoder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('__init__', function(errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errors = arguments[1];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][3][1];

			$m['IncrementalDecoder']['__init__'](self, errors);
			self['buffer'] = '';
			return null;
		}
	, 1, [null,null,['self'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_buffer_decode', function(input, errors, $$final) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				errors = arguments[2];
				$$final = arguments[3];
			}
			var $$final;
			throw ($p['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['input'],['errors'],['$$final']]);
		$cls_definition['_buffer_decode'] = $method;
		$method = $pyjs__bind_method2('decode', function(input, $$final) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				$$final = arguments[2];
			}
			if (typeof $$final == 'undefined') $$final=arguments['callee']['__args__'][4][1];
			var consumed,$add3,result,$add4,data,$$final;
			data = $p['__op_add']($add3=$p['getattr'](self, 'buffer'),$add4=input);
			var $tupleassign2 = $p['__ass_unpack'](self['_buffer_decode'](data, $p['getattr'](self, 'errors'), $$final), 2, null);
			result = $tupleassign2[0];
			consumed = $tupleassign2[1];
			self['buffer'] = $p['__getslice'](data, consumed, null);
			return result;
		}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
		$cls_definition['decode'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['IncrementalDecoder']['reset'](self);
			self['buffer'] = '';
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('getstate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['tuple']([$p['getattr'](self, 'buffer'), 0]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getstate'] = $method;
		$method = $pyjs__bind_method2('setstate', function(state) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
			}

			self['buffer'] = state['__getitem__'](0);
			return null;
		}
	, 1, [null,null,['self'],['state']]);
		$cls_definition['setstate'] = $method;
		var $bases = new Array($m['IncrementalDecoder']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BufferedIncrementalDecoder', $p['tuple']($bases), $data);
	})();
	$m['StreamWriter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('__init__', function(stream, errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				stream = arguments[1];
				errors = arguments[2];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

			self['stream'] = stream;
			self['errors'] = errors;
			return null;
		}
	, 1, [null,null,['self'],['stream'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('write', function(object) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				object = arguments[1];
			}
			var data,consumed;
			var $tupleassign3 = $p['__ass_unpack'](self['encode'](object, $p['getattr'](self, 'errors')), 2, null);
			data = $tupleassign3[0];
			consumed = $tupleassign3[1];
			self['stream']['write'](data);
			return null;
		}
	, 1, [null,null,['self'],['object']]);
		$cls_definition['write'] = $method;
		$method = $pyjs__bind_method2('writelines', function(list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				list = arguments[1];
			}

			self['write'](''['join'](list));
			return null;
		}
	, 1, [null,null,['self'],['list']]);
		$cls_definition['writelines'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('seek', function(offset, whence) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				whence = arguments[2];
			}
			if (typeof whence == 'undefined') whence=arguments['callee']['__args__'][4][1];
			var $and1,$and2;
			self['stream']['seek'](offset, whence);
			if ($p['bool'](($p['bool']($and1=$p['op_eq'](whence, 0))?$p['op_eq'](offset, 0):$and1))) {
				self['reset']();
			}
			return null;
		}
	, 1, [null,null,['self'],['offset'],['whence', 0]]);
		$cls_definition['seek'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				getattr = arguments[2];
			}
			if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

			return getattr(getattr(self, 'stream'), name);
		}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__enter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enter__'] = $method;
		$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				value = arguments[2];
				tb = arguments[3];
			}

			self['stream']['close']();
			return null;
		}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
		$cls_definition['__exit__'] = $method;
		var $bases = new Array($m['Codec']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StreamWriter', $p['tuple']($bases), $data);
	})();
	$m['StreamReader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$method = $pyjs__bind_method2('__init__', function(stream, errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				stream = arguments[1];
				errors = arguments[2];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

			self['stream'] = stream;
			self['errors'] = errors;
			self['bytebuffer'] = '';
			self['charbuffer'] = '';
			self['linebuffer'] = null;
			return null;
		}
	, 1, [null,null,['self'],['stream'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('decode', function(input, errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				input = arguments[1];
				errors = arguments[2];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];

			throw ($p['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
		$cls_definition['decode'] = $method;
		$method = $pyjs__bind_method2('read', function(size, chars, firstline) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				chars = arguments[2];
				firstline = arguments[3];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof chars == 'undefined') chars=arguments['callee']['__args__'][4][1];
			if (typeof firstline == 'undefined') firstline=arguments['callee']['__args__'][5][1];
			var result,decodedbytes,lines,$pyjs_try_err,$add6,$add7,$add5,newchars,$add8,exc,data,newdata;
			if ($p['bool']($p['getattr'](self, 'linebuffer'))) {
				self['charbuffer'] = ''['join']($p['getattr'](self, 'linebuffer'));
				self['linebuffer'] = null;
			}
			while ($p['bool'](true)) {
				if ($p['bool'](($p['cmp'](chars, 0) == -1))) {
					if ($p['bool'](($p['cmp'](size, 0) == -1))) {
						if ($p['bool']($p['getattr'](self, 'charbuffer'))) {
							break;
						}
					}
					else if ($p['bool'](((($p['cmp']($p['len']($p['getattr'](self, 'charbuffer')), size))|1) == 1))) {
						break;
					}
				}
				else {
					if ($p['bool'](((($p['cmp']($p['len']($p['getattr'](self, 'charbuffer')), chars))|1) == 1))) {
						break;
					}
				}
				if ($p['bool'](($p['cmp'](size, 0) == -1))) {
					newdata = self['stream']['read']();
				}
				else {
					newdata = self['stream']['read'](size);
				}
				data = $p['__op_add']($add5=$p['getattr'](self, 'bytebuffer'),$add6=newdata);
				try {
					var $tupleassign4 = $p['__ass_unpack'](self['decode'](data, $p['getattr'](self, 'errors')), 2, null);
					newchars = $tupleassign4[0];
					decodedbytes = $tupleassign4[1];
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == (typeof UnicodeDecodeError == "undefined"?$m['UnicodeDecodeError']:UnicodeDecodeError)['__name__'])||$p['_isinstance']($pyjs_try_err,(typeof UnicodeDecodeError == "undefined"?$m['UnicodeDecodeError']:UnicodeDecodeError))) {
						exc = $pyjs_try_err;
						if ($p['bool'](firstline)) {
							var $tupleassign5 = $p['__ass_unpack'](self['decode']($p['__getslice'](data, 0, $p['getattr'](exc, 'start')), $p['getattr'](self, 'errors')), 2, null);
							newchars = $tupleassign5[0];
							decodedbytes = $tupleassign5[1];
							lines = newchars['splitlines'](true);
							if ($p['bool'](($p['cmp']($p['len'](lines), 1) < 1))) {
								throw ($pyjs['__last_exception__']?
									$pyjs['__last_exception__']['error']:
									$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
							}
						}
						else {
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['bytebuffer'] = $p['__getslice'](data, decodedbytes, null);
				self['charbuffer'] = $p['__op_add']($add7=$p['getattr'](self, 'charbuffer'),$add8=newchars);
				if ($p['bool'](!$p['bool'](newdata))) {
					break;
				}
			}
			if ($p['bool'](($p['cmp'](chars, 0) == -1))) {
				result = $p['getattr'](self, 'charbuffer');
				self['charbuffer'] = '';
			}
			else {
				result = $p['__getslice']($p['getattr'](self, 'charbuffer'), 0, chars);
				self['charbuffer'] = $p['__getslice']($p['getattr'](self, 'charbuffer'), chars, null);
			}
			return result;
		}
	, 1, [null,null,['self'],['size', (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))],['chars', (typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2))],['firstline', false]]);
		$cls_definition['read'] = $method;
		$method = $pyjs__bind_method2('readline', function(size, keepends) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				keepends = arguments[2];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof keepends == 'undefined') keepends=arguments['callee']['__args__'][4][1];
			var $augexpr1,readsize,line0withend,$add18,$or5,$or7,$or6,$and3,$and4,$or8,$augsub1,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,line,data,$mul2,$mul1,line0withoutend,lines,$add9;
			if ($p['bool']($p['getattr'](self, 'linebuffer'))) {
				line = $p['getattr'](self, 'linebuffer')['__getitem__'](0);
				$p['getattr'](self, 'linebuffer')['__delitem__'](0);
				if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, 'linebuffer')), 1))) {
					self['charbuffer'] = $p['getattr'](self, 'linebuffer')['__getitem__'](0);
					self['linebuffer'] = null;
				}
				if ($p['bool'](!$p['bool'](keepends))) {
					line = line['splitlines'](false)['__getitem__'](0);
				}
				return line;
			}
			readsize = ($p['bool']($or5=size)?$or5:72);
			line = '';
			while ($p['bool'](true)) {
				data = $pyjs_kwargs_call(self, 'read', null, null, [{'firstline':true}, readsize]);
				if ($p['bool'](data)) {
					if ($p['bool'](data['endswith']('\r'))) {
						data = $p['__op_add']($add9=data,$add10=$pyjs_kwargs_call(self, 'read', null, null, [{'size':1, 'chars':1}]));
					}
				}
				line = $p['__op_add']($add11=line,$add12=data);
				lines = line['splitlines'](true);
				if ($p['bool'](lines)) {
					if ($p['bool'](($p['cmp']($p['len'](lines), 1) == 1))) {
						line = lines['__getitem__'](0);
						lines['__delitem__'](0);
						if ($p['bool'](($p['cmp']($p['len'](lines), 1) == 1))) {
							var $augsub1 = (typeof ($usub3=1)=='number'?
								-$usub3:
								$p['op_usub']($usub3));
							var $augexpr1 = lines;
							$augexpr1['__setitem__']($augsub1, $p['__op_add']($add13=$augexpr1['__getitem__']($augsub1),$add14=$p['getattr'](self, 'charbuffer')));
							self['linebuffer'] = lines;
							self['charbuffer'] = null;
						}
						else {
							self['charbuffer'] = $p['__op_add']($add15=lines['__getitem__'](0),$add16=$p['getattr'](self, 'charbuffer'));
						}
						if ($p['bool'](!$p['bool'](keepends))) {
							line = line['splitlines'](false)['__getitem__'](0);
						}
						break;
					}
					line0withend = lines['__getitem__'](0);
					line0withoutend = lines['__getitem__'](0)['splitlines'](false)['__getitem__'](0);
					if ($p['bool'](!$p['op_eq'](line0withend, line0withoutend))) {
						self['charbuffer'] = $p['__op_add']($add17=''['join']($p['__getslice'](lines, 1, null)),$add18=$p['getattr'](self, 'charbuffer'));
						if ($p['bool'](keepends)) {
							line = line0withend;
						}
						else {
							line = line0withoutend;
						}
						break;
					}
				}
				if ($p['bool'](($p['bool']($or7=!$p['bool'](data))?$or7:(size !== null)))) {
					if ($p['bool'](($p['bool']($and3=line)?!$p['bool'](keepends):$and3))) {
						line = line['splitlines'](false)['__getitem__'](0);
					}
					break;
				}
				if ($p['bool'](($p['cmp'](readsize, 8000) == -1))) {
					readsize = (typeof ($mul1=readsize)==typeof ($mul2=2) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
				}
			}
			return line;
		}
	, 1, [null,null,['self'],['size', null],['keepends', true]]);
		$cls_definition['readline'] = $method;
		$method = $pyjs__bind_method2('readlines', function(sizehint, keepends) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sizehint = arguments[1];
				keepends = arguments[2];
			}
			if (typeof sizehint == 'undefined') sizehint=arguments['callee']['__args__'][3][1];
			if (typeof keepends == 'undefined') keepends=arguments['callee']['__args__'][4][1];
			var data;
			data = self['read']();
			return data['splitlines'](keepends);
		}
	, 1, [null,null,['self'],['sizehint', null],['keepends', true]]);
		$cls_definition['readlines'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['bytebuffer'] = '';
			self['charbuffer'] = '';
			self['linebuffer'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('seek', function(offset, whence) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				whence = arguments[2];
			}
			if (typeof whence == 'undefined') whence=arguments['callee']['__args__'][4][1];

			self['stream']['seek'](offset, whence);
			self['reset']();
			return null;
		}
	, 1, [null,null,['self'],['offset'],['whence', 0]]);
		$cls_definition['seek'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var line;
			line = self['readline']();
			if ($p['bool'](line)) {
				return line;
			}
			throw ($p['StopIteration']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				getattr = arguments[2];
			}
			if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

			return getattr(getattr(self, 'stream'), name);
		}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__enter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enter__'] = $method;
		$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				value = arguments[2];
				tb = arguments[3];
			}

			self['stream']['close']();
			return null;
		}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
		$cls_definition['__exit__'] = $method;
		var $bases = new Array($m['Codec']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StreamReader', $p['tuple']($bases), $data);
	})();
	$m['StreamReaderWriter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$cls_definition['encoding'] = 'unknown';
		$method = $pyjs__bind_method2('__init__', function(stream, Reader, Writer, errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				stream = arguments[1];
				Reader = arguments[2];
				Writer = arguments[3];
				errors = arguments[4];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][6][1];

			self['stream'] = stream;
			self['reader'] = Reader(stream, errors);
			self['writer'] = Writer(stream, errors);
			self['errors'] = errors;
			return null;
		}
	, 1, [null,null,['self'],['stream'],['Reader'],['Writer'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('read', function(size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];

			return self['reader']['read'](size);
		}
	, 1, [null,null,['self'],['size', (typeof ($usub4=1)=='number'?
			-$usub4:
			$p['op_usub']($usub4))]]);
		$cls_definition['read'] = $method;
		$method = $pyjs__bind_method2('readline', function(size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];

			return self['reader']['readline'](size);
		}
	, 1, [null,null,['self'],['size', null]]);
		$cls_definition['readline'] = $method;
		$method = $pyjs__bind_method2('readlines', function(sizehint) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sizehint = arguments[1];
			}
			if (typeof sizehint == 'undefined') sizehint=arguments['callee']['__args__'][3][1];

			return self['reader']['readlines'](sizehint);
		}
	, 1, [null,null,['self'],['sizehint', null]]);
		$cls_definition['readlines'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['reader']['next']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('write', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			return self['writer']['write'](data);
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['write'] = $method;
		$method = $pyjs__bind_method2('writelines', function(list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				list = arguments[1];
			}

			return self['writer']['writelines'](list);
		}
	, 1, [null,null,['self'],['list']]);
		$cls_definition['writelines'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['reader']['reset']();
			self['writer']['reset']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('seek', function(offset, whence) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				whence = arguments[2];
			}
			if (typeof whence == 'undefined') whence=arguments['callee']['__args__'][4][1];
			var $and6,$and5;
			self['stream']['seek'](offset, whence);
			self['reader']['reset']();
			if ($p['bool'](($p['bool']($and5=$p['op_eq'](whence, 0))?$p['op_eq'](offset, 0):$and5))) {
				self['writer']['reset']();
			}
			return null;
		}
	, 1, [null,null,['self'],['offset'],['whence', 0]]);
		$cls_definition['seek'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				getattr = arguments[2];
			}
			if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

			return getattr(getattr(self, 'stream'), name);
		}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__enter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enter__'] = $method;
		$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				value = arguments[2];
				tb = arguments[3];
			}

			self['stream']['close']();
			return null;
		}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
		$cls_definition['__exit__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StreamReaderWriter', $p['tuple']($bases), $data);
	})();
	$m['StreamRecoder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'codecs';
		$cls_definition['data_encoding'] = 'unknown';
		$cls_definition['file_encoding'] = 'unknown';
		$method = $pyjs__bind_method2('__init__', function(stream, encode, decode, Reader, Writer, errors) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				stream = arguments[1];
				encode = arguments[2];
				decode = arguments[3];
				Reader = arguments[4];
				Writer = arguments[5];
				errors = arguments[6];
			}
			if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][8][1];

			self['stream'] = stream;
			self['encode'] = encode;
			self['decode'] = decode;
			self['reader'] = Reader(stream, errors);
			self['writer'] = Writer(stream, errors);
			self['errors'] = errors;
			return null;
		}
	, 1, [null,null,['self'],['stream'],['encode'],['decode'],['Reader'],['Writer'],['errors', 'strict']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('read', function(size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			var bytesencoded,data;
			data = self['reader']['read'](size);
			var $tupleassign6 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
			data = $tupleassign6[0];
			bytesencoded = $tupleassign6[1];
			return data;
		}
	, 1, [null,null,['self'],['size', (typeof ($usub5=1)=='number'?
			-$usub5:
			$p['op_usub']($usub5))]]);
		$cls_definition['read'] = $method;
		$method = $pyjs__bind_method2('readline', function(size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			var bytesencoded,data;
			if ($p['bool']((size === null))) {
				data = self['reader']['readline']();
			}
			else {
				data = self['reader']['readline'](size);
			}
			var $tupleassign7 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
			data = $tupleassign7[0];
			bytesencoded = $tupleassign7[1];
			return data;
		}
	, 1, [null,null,['self'],['size', null]]);
		$cls_definition['readline'] = $method;
		$method = $pyjs__bind_method2('readlines', function(sizehint) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sizehint = arguments[1];
			}
			if (typeof sizehint == 'undefined') sizehint=arguments['callee']['__args__'][3][1];
			var data,bytesencoded;
			data = self['reader']['read']();
			var $tupleassign8 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
			data = $tupleassign8[0];
			bytesencoded = $tupleassign8[1];
			return data['splitlines'](1);
		}
	, 1, [null,null,['self'],['sizehint', null]]);
		$cls_definition['readlines'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var bytesencoded,data;
			data = self['reader']['next']();
			var $tupleassign9 = $p['__ass_unpack'](self['encode'](data, $p['getattr'](self, 'errors')), 2, null);
			data = $tupleassign9[0];
			bytesencoded = $tupleassign9[1];
			return data;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('write', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var bytesdecoded;
			var $tupleassign10 = $p['__ass_unpack'](self['decode'](data, $p['getattr'](self, 'errors')), 2, null);
			data = $tupleassign10[0];
			bytesdecoded = $tupleassign10[1];
			return self['writer']['write'](data);
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['write'] = $method;
		$method = $pyjs__bind_method2('writelines', function(list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				list = arguments[1];
			}
			var data,bytesdecoded;
			data = ''['join'](list);
			var $tupleassign11 = $p['__ass_unpack'](self['decode'](data, $p['getattr'](self, 'errors')), 2, null);
			data = $tupleassign11[0];
			bytesdecoded = $tupleassign11[1];
			return self['writer']['write'](data);
		}
	, 1, [null,null,['self'],['list']]);
		$cls_definition['writelines'] = $method;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['reader']['reset']();
			self['writer']['reset']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				getattr = arguments[2];
			}
			if (typeof getattr == 'undefined') getattr=arguments['callee']['__args__'][4][1];

			return getattr(getattr(self, 'stream'), name);
		}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__enter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enter__'] = $method;
		$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
				value = arguments[2];
				tb = arguments[3];
			}

			self['stream']['close']();
			return null;
		}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
		$cls_definition['__exit__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StreamRecoder', $p['tuple']($bases), $data);
	})();
	$m['open'] = function(filename, mode, encoding, errors, buffering) {
		if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][3][1];
		if (typeof encoding == 'undefined') encoding=arguments['callee']['__args__'][4][1];
		if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][5][1];
		if (typeof buffering == 'undefined') buffering=arguments['callee']['__args__'][6][1];
		var info,$add21,$add20,$add22,file,$add19,srw;
		if ($p['bool']((encoding !== null))) {
			if ($p['bool'](mode['__contains__']('U'))) {
				mode = mode['strip']()['$$replace']('U', '');
				if ($p['bool'](!$p['set']('rwa')['__contains__']($p['__getslice'](mode, 0, 1)))) {
					mode = $p['__op_add']($add19='r',$add20=mode);
				}
			}
			if ($p['bool'](!mode['__contains__']('b'))) {
				mode = $p['__op_add']($add21=mode,$add22='b');
			}
		}
		file = $m['__builtin__']['open'](filename, mode, buffering);
		if ($p['bool']((encoding === null))) {
			return file;
		}
		info = (typeof lookup == "undefined"?$m['lookup']:lookup)(encoding);
		srw = $m['StreamReaderWriter'](file, $p['getattr'](info, 'streamreader'), $p['getattr'](info, 'streamwriter'), errors);
		srw['encoding'] = encoding;
		return srw;
	};
	$m['open']['__name__'] = 'open';

	$m['open']['__bind_type__'] = 0;
	$m['open']['__args__'] = [null,null,['filename'],['mode', 'rb'],['encoding', null],['errors', 'strict'],['buffering', 1]];
	$m['EncodedFile'] = function(file, data_encoding, file_encoding, errors) {
		if (typeof file_encoding == 'undefined') file_encoding=arguments['callee']['__args__'][4][1];
		if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][5][1];
		var sr,file_info,data_info;
		if ($p['bool']((file_encoding === null))) {
			file_encoding = data_encoding;
		}
		data_info = (typeof lookup == "undefined"?$m['lookup']:lookup)(data_encoding);
		file_info = (typeof lookup == "undefined"?$m['lookup']:lookup)(file_encoding);
		sr = $m['StreamRecoder'](file, $p['getattr'](data_info, 'encode'), $p['getattr'](data_info, 'decode'), $p['getattr'](file_info, 'streamreader'), $p['getattr'](file_info, 'streamwriter'), errors);
		sr['data_encoding'] = data_encoding;
		sr['file_encoding'] = file_encoding;
		return sr;
	};
	$m['EncodedFile']['__name__'] = 'EncodedFile';

	$m['EncodedFile']['__bind_type__'] = 0;
	$m['EncodedFile']['__args__'] = [null,null,['file'],['data_encoding'],['file_encoding', null],['errors', 'strict']];
	$m['getencoder'] = function(encoding) {

		return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'encode');
	};
	$m['getencoder']['__name__'] = 'getencoder';

	$m['getencoder']['__bind_type__'] = 0;
	$m['getencoder']['__args__'] = [null,null,['encoding']];
	$m['getdecoder'] = function(encoding) {

		return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'decode');
	};
	$m['getdecoder']['__name__'] = 'getdecoder';

	$m['getdecoder']['__bind_type__'] = 0;
	$m['getdecoder']['__args__'] = [null,null,['encoding']];
	$m['getincrementalencoder'] = function(encoding) {
		var encoder;
		encoder = $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'incrementalencoder');
		if ($p['bool']((encoder === null))) {
			throw ($p['LookupError'](encoding));
		}
		return encoder;
	};
	$m['getincrementalencoder']['__name__'] = 'getincrementalencoder';

	$m['getincrementalencoder']['__bind_type__'] = 0;
	$m['getincrementalencoder']['__args__'] = [null,null,['encoding']];
	$m['getincrementaldecoder'] = function(encoding) {
		var decoder;
		decoder = $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'incrementaldecoder');
		if ($p['bool']((decoder === null))) {
			throw ($p['LookupError'](encoding));
		}
		return decoder;
	};
	$m['getincrementaldecoder']['__name__'] = 'getincrementaldecoder';

	$m['getincrementaldecoder']['__bind_type__'] = 0;
	$m['getincrementaldecoder']['__args__'] = [null,null,['encoding']];
	$m['getreader'] = function(encoding) {

		return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'streamreader');
	};
	$m['getreader']['__name__'] = 'getreader';

	$m['getreader']['__bind_type__'] = 0;
	$m['getreader']['__args__'] = [null,null,['encoding']];
	$m['getwriter'] = function(encoding) {

		return $p['getattr']((typeof lookup == "undefined"?$m['lookup']:lookup)(encoding), 'streamwriter');
	};
	$m['getwriter']['__name__'] = 'getwriter';

	$m['getwriter']['__bind_type__'] = 0;
	$m['getwriter']['__args__'] = [null,null,['encoding']];
	$m['iterencode'] = function(iterator, encoding, errors) {
		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof errors != 'undefined') {
				if (errors !== null && typeof errors['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = errors;
					errors = arguments[3];
				}
			} else 			if (typeof encoding != 'undefined') {
				if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = encoding;
					encoding = arguments[3];
				}
			} else 			if (typeof iterator != 'undefined') {
				if (iterator !== null && typeof iterator['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = iterator;
					iterator = arguments[3];
				}
			} else {
			}
		}
		if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];
		var $iter2_iter,$iter1_nextval,$iter1_type,$iter2_idx,$iter1_iter,$iter2_type,output,$iter2_nextval,$iter1_array,input,encoder,$iter2_array,$iter1_idx;
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
				encoder = $pyjs_kwargs_call(null, $m['getincrementalencoder'](encoding), null, kwargs, [{}, errors]);
				$iter2_iter = iterator;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						input = $iter2_nextval['$nextval'];
						output = encoder['encode'](input);
						$generator_state[3] = 0;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](output)))) {
							$generator_state[2]=1;
							if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
								for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
								$yield_value = output;
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
				output = encoder['encode']('', true);
				$generator_state[2] = 0;
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
				if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool'](output)))) {
					$generator_state[1]=1;
					if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
						for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
						$yield_value = output;
						$yielding = true;
						$generator_state[2] = 1;
						return $yield_value;
						$generator_state[2]=1;
					}
					if ($generator_state[2] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[2] = -1;
							throw $exc;
						}
						$generator_state[2]=2;
					}
					if ($generator_state[2] == 2) {
					}
				}
				$generator_state[1]=0;
				$generator_state[0]=5;
			}
			if ($generator_state[0] == 5) {
			}

			return;
		};
		return $generator;
	};
	$m['iterencode']['__name__'] = 'iterencode';

	$m['iterencode']['__bind_type__'] = 0;
	$m['iterencode']['__args__'] = [null,['kwargs'],['iterator'],['encoding'],['errors', 'strict']];
	$m['iterdecode'] = function(iterator, encoding, errors) {
		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof errors != 'undefined') {
				if (errors !== null && typeof errors['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = errors;
					errors = arguments[3];
				}
			} else 			if (typeof encoding != 'undefined') {
				if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = encoding;
					encoding = arguments[3];
				}
			} else 			if (typeof iterator != 'undefined') {
				if (iterator !== null && typeof iterator['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = iterator;
					iterator = arguments[3];
				}
			} else {
			}
		}
		if (typeof errors == 'undefined') errors=arguments['callee']['__args__'][4][1];
		var $iter3_type,$iter4_nextval,$iter3_nextval,decoder,output,$iter4_idx,$iter3_idx,$iter3_iter,$iter4_type,$iter4_array,input,$iter4_iter,$iter3_array;
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
				decoder = $pyjs_kwargs_call(null, $m['getincrementaldecoder'](encoding), null, kwargs, [{}, errors]);
				$iter4_iter = iterator;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						input = $iter4_nextval['$nextval'];
						output = decoder['decode'](input);
						$generator_state[3] = 0;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](output)))) {
							$generator_state[2]=1;
							if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
								for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
								$yield_value = output;
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
				output = decoder['decode']('', true);
				$generator_state[2] = 0;
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
				if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool'](output)))) {
					$generator_state[1]=1;
					if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
						for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
						$yield_value = output;
						$yielding = true;
						$generator_state[2] = 1;
						return $yield_value;
						$generator_state[2]=1;
					}
					if ($generator_state[2] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[2] = -1;
							throw $exc;
						}
						$generator_state[2]=2;
					}
					if ($generator_state[2] == 2) {
					}
				}
				$generator_state[1]=0;
				$generator_state[0]=5;
			}
			if ($generator_state[0] == 5) {
			}

			return;
		};
		return $generator;
	};
	$m['iterdecode']['__name__'] = 'iterdecode';

	$m['iterdecode']['__bind_type__'] = 0;
	$m['iterdecode']['__args__'] = [null,['kwargs'],['iterator'],['encoding'],['errors', 'strict']];
	$m['make_identity_dict'] = function(rng) {
		var $iter5_nextval,$iter5_idx,i,res,$iter5_iter,$iter5_array,$iter5_type;
		res = $p['dict']([]);
		$iter5_iter = rng;
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			i = $iter5_nextval['$nextval'];
			res['__setitem__'](i, i);
		}
		return res;
	};
	$m['make_identity_dict']['__name__'] = 'make_identity_dict';

	$m['make_identity_dict']['__bind_type__'] = 0;
	$m['make_identity_dict']['__args__'] = [null,null,['rng']];
	$m['make_encoding_map'] = function(decoding_map) {
		var $iter6_idx,$iter6_type,k,m,$iter6_array,v,$iter6_iter,$iter6_nextval;
		m = $p['dict']([]);
		$iter6_iter = decoding_map['items']();
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			var $tupleassign12 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
			k = $tupleassign12[0];
			v = $tupleassign12[1];
			if ($p['bool'](!$p['bool'](m['__contains__'](v)))) {
				m['__setitem__'](v, k);
			}
			else {
				m['__setitem__'](v, null);
			}
		}
		return m;
	};
	$m['make_encoding_map']['__name__'] = 'make_encoding_map';

	$m['make_encoding_map']['__bind_type__'] = 0;
	$m['make_encoding_map']['__args__'] = [null,null,['decoding_map']];
	$m['strict_errors'] = null;
	$m['ignore_errors'] = null;
	$m['replace_errors'] = null;
	$m['xmlcharrefreplace_errors'] = null;
	$m['backslashreplace_errors'] = null;
	$m['_false'] = 0;
	if ($p['bool']($m['_false'])) {
		$m['encodings'] = $p['___import___']('encodings', null);
	}
	return this;
}; /* end codecs */


/* end module: codecs */


/*
PYJS_DEPS: ['__builtin__', 'sys', 'encodings']
*/
