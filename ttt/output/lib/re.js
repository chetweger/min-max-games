/* start module: re */
$pyjs['loaded_modules']['re'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['re']['__was_initialized__']) return $pyjs['loaded_modules']['re'];
	var $m = $pyjs['loaded_modules']['re'];
	$m['__repr__'] = function() { return '<module: re>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 're';
	$m['__name__'] = __mod_name__;
	var $iter1_iter,$iter1_array,$iter1_nextval,$iter1_type,$iter1_idx;

	$m['$assign1'] = 1;
	$m['I'] = $m['$assign1'];
	$m['IGNORECASE'] = $m['$assign1'];
	$m['$assign2'] = 2;
	$m['L'] = $m['$assign2'];
	$m['LOCALE'] = $m['$assign2'];
	$m['$assign3'] = 4;
	$m['U'] = $m['$assign3'];
	$m['UNICODE'] = $m['$assign3'];
	$m['$assign4'] = 8;
	$m['M'] = $m['$assign4'];
	$m['MULTILINE'] = $m['$assign4'];
	$m['$assign5'] = 16;
	$m['S'] = $m['$assign5'];
	$m['DOTALL'] = $m['$assign5'];
	$m['$assign6'] = 32;
	$m['X'] = $m['$assign6'];
	$m['VERBOSE'] = $m['$assign6'];
	$m['match'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		return $m['compile'](pattern, flags)['match'](string);
	};
	$m['match']['__name__'] = 'match';

	$m['match']['__bind_type__'] = 0;
	$m['match']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$m['search'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		return $m['compile'](pattern, flags)['search'](string);
	};
	$m['search']['__name__'] = 'search';

	$m['search']['__bind_type__'] = 0;
	$m['search']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$m['sub'] = function(pattern, repl, string, count) {
		if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

		return $m['compile'](pattern, 0)['sub'](repl, string, count);
	};
	$m['sub']['__name__'] = 'sub';

	$m['sub']['__bind_type__'] = 0;
	$m['sub']['__args__'] = [null,null,['pattern'],['repl'],['string'],['count', 0]];
	$m['subn'] = function(pattern, repl, string, count) {
		if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

		return $m['compile'](pattern, 0)['subn'](repl, string, count);
	};
	$m['subn']['__name__'] = 'subn';

	$m['subn']['__bind_type__'] = 0;
	$m['subn']['__args__'] = [null,null,['pattern'],['repl'],['string'],['count', 0]];
	$m['$$split'] = function(pattern, string, maxsplit) {
		if (typeof maxsplit == 'undefined') maxsplit=arguments['callee']['__args__'][4][1];

		return $m['compile'](pattern, 0)['$$split'](string, maxsplit);
	};
	$m['$$split']['__name__'] = 'split';

	$m['$$split']['__bind_type__'] = 0;
	$m['$$split']['__args__'] = [null,null,['pattern'],['string'],['maxsplit', 0]];
	$m['findall'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		return $m['compile'](pattern, flags)['findall'](string);
	};
	$m['findall']['__name__'] = 'findall';

	$m['findall']['__bind_type__'] = 0;
	$m['findall']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$m['finditer'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		return $m['compile'](pattern, flags)['finditer'](string);
	};
	$m['finditer']['__name__'] = 'finditer';

	$m['finditer']['__bind_type__'] = 0;
	$m['finditer']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$m['compile'] = function(pattern, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];

		return (typeof SRE_Pattern == "undefined"?$m['SRE_Pattern']:SRE_Pattern)(pattern, flags, (typeof _compile == "undefined"?$m['_compile']:_compile)(pattern, flags));
	};
	$m['compile']['__name__'] = 'compile';

	$m['compile']['__bind_type__'] = 0;
	$m['compile']['__args__'] = [null,null,['pattern'],['flags', 0]];
	$m['purge'] = function() {

		$m['_cache']['clear']();
		$m['_cache_repl']['clear']();
		return null;
	};
	$m['purge']['__name__'] = 'purge';

	$m['purge']['__bind_type__'] = 0;
	$m['purge']['__args__'] = [null,null];
	$m['template'] = function(pattern, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];

		throw ($p['NotImplementedError']('re.template'));
		return null;
	};
	$m['template']['__name__'] = 'template';

	$m['template']['__bind_type__'] = 0;
	$m['template']['__args__'] = [null,null,['pattern'],['flags', 0]];
	$m['_alphanum'] = $p['dict']([]);
	$iter1_iter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';
	$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
	while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
		$m['c'] = $iter1_nextval['$nextval'];
		$m['_alphanum']['__setitem__']($m['c'], 1);
	}
	delete $m['c'];
	$m['escape'] = function(pattern) {
		var c,$iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$add2,s,$add1,alphanum,$iter2_array;
		s = $p['list'](pattern);
		alphanum = $m['_alphanum'];
		$iter2_iter = $p['range']($p['len'](pattern));
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			c = pattern['__getitem__'](i);
			if ($p['bool'](!alphanum['__contains__'](c))) {
				if ($p['bool']($p['op_eq'](c, '\x00'))) {
					s['__setitem__'](i, '\\000');
				}
				else {
					s['__setitem__'](i, $p['__op_add']($add1='\\',$add2=c));
				}
			}
		}
		return $p['__getslice'](pattern, 0, 0)['join'](s);
	};
	$m['escape']['__name__'] = 'escape';

	$m['escape']['__bind_type__'] = 0;
	$m['escape']['__args__'] = [null,null,['pattern']];
	$m['__inline_flags_re__'] = new RegExp("[(][?][iLmsux]+[)]");
	$m['_cache'] = $p['dict']([]);
	$m['_cache_repl'] = $p['dict']([]);
	$m['_MAXCACHE'] = 100;
	$m['_compile'] = function(pat, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];
		var $iter5_nextval,$iter5_array,$iter3_type,backslash,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$add3,$iter3_nextval,brack,$iter3_iter,$iter5_idx,$sub3,$sub2,$sub1,spat,$sub4,flgs,$and1,$and2,$add6,$add10,$add11,$add12,$iter3_array,c,cachekey,i,$iter4_nextval,m,$iter4_idx,p,$add7,$add4,$add5,$iter4_array,$add8,$add9;
		cachekey = $p['tuple']([pat, flags]);
		p = $m['_cache']['get'](cachekey);
		if ($p['bool']((p !== null))) {
			return p;
		}
		flgs = '';
		while ($p['bool'](true)) {
			m = $m['__inline_flags_re__']['Exec'](pat);
			if ($p['bool'](m === null)) {
				m = null;
				break;
			}
			pat = pat['$$replace']($m['__inline_flags_re__'], '');
			$iter3_iter = $p['list'](m);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				m = $iter3_nextval['$nextval'];
				if ($p['bool'](m === null)) {
					continue;
				}
				$iter4_iter = $p['str'](m);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					c = $iter4_nextval['$nextval'];
					if ($p['bool']($p['list'](['(', '?', ')'])['__contains__'](c))) {
					}
					else if ($p['bool']($p['op_eq'](c, 'i'))) {
						flags |= $m['IGNORECASE'];
					}
					else if ($p['bool']($p['op_eq'](c, 'L'))) {
						flags |= $m['LOCALE'];
					}
					else if ($p['bool']($p['op_eq'](c, 'm'))) {
						flags |= $m['MULTILINE'];
					}
					else if ($p['bool']($p['op_eq'](c, 's'))) {
						flags |= $m['DOTALL'];
					}
					else if ($p['bool']($p['op_eq'](c, 'u'))) {
						flags |= $m['UNICODE'];
					}
					else if ($p['bool']($p['op_eq'](c, 'x'))) {
						flags |= $m['VERBOSE'];
					}
				}
			}
		}
		if ($p['bool'](flags)) {
			if ($p['bool']((flags)&($m['LOCALE']))) {
				throw ($p['NotImplementedError']('L/LOCALE flag is not implemented'));
			}
			if ($p['bool']((flags)&($m['UNICODE']))) {
				throw ($p['NotImplementedError']('U/UNICODE flag is not implemented'));
			}
			if ($p['bool']((flags)&($m['VERBOSE']))) {
				throw ($p['NotImplementedError']('X/VERBOSE flag is not implemented'));
			}
			if ($p['bool']((flags)&($m['DOTALL']))) {
				p = '';
				brack = (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
				backslash = (typeof ($usub2=2)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
				$iter5_iter = $p['enumerate'](pat);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
					i = $tupleassign1[0];
					c = $tupleassign1[1];
					if ($p['bool'](!$p['op_eq'](backslash, $p['__op_sub']($sub1=i,$sub2=1)))) {
						if ($p['bool'](($p['cmp'](brack, 0) == -1))) {
							if ($p['bool']($p['op_eq'](c, '['))) {
								brack = i;
							}
							else if ($p['bool']($p['op_eq'](c, '.'))) {
								c = '[\\s\\S]';
							}
							else if ($p['bool']($p['op_eq'](c, '\\'))) {
								backslash = i;
							}
						}
						else {
							if ($p['bool'](($p['bool']($and1=$p['op_eq'](c, ']'))?!$p['op_eq'](brack, $p['__op_sub']($sub3=i,$sub4=1)):$and1))) {
								brack = (typeof ($usub3=1)=='number'?
									-$usub3:
									$p['op_usub']($usub3));
							}
						}
					}
					p = $p['__op_add']($add3=p,$add4=c);
				}
				pat = p;
			}
			if ($p['bool']((flags)&($m['IGNORECASE']))) {
				flgs = $p['__op_add']($add5=flgs,$add6='i');
			}
			if ($p['bool']((flags)&($m['MULTILINE']))) {
				flgs = $p['__op_add']($add7=flgs,$add8='m');
			}
		}
		spat = $p['__op_add']($add11=$p['__op_add']($add9='([\\s\\S]*?)(',$add10=pat),$add12=')[\\s\\S]*');
		p = $p['tuple']([new RegExp(pat, flgs), new RegExp(spat, flgs), new RegExp(pat, "g"+flgs)]);
		if ($p['bool'](((($p['cmp']($p['len']($m['_cache']), $m['_MAXCACHE']))|1) == 1))) {
			$m['_cache']['clear']();
		}
		$m['_cache']['__setitem__'](cachekey, p);
		return p;
	};
	$m['_compile']['__name__'] = '_compile';

	$m['_compile']['__bind_type__'] = 0;
	$m['_compile']['__args__'] = [null,null,['pat'],['flags', 0]];
	$m['SRE_Match'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 're';
		$method = $pyjs__bind_method2('__init__', function(re, string, pos, endpos, groups, start, lastindex, lastgroup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				re = arguments[1];
				string = arguments[2];
				pos = arguments[3];
				endpos = arguments[4];
				groups = arguments[5];
				start = arguments[6];
				lastindex = arguments[7];
				lastgroup = arguments[8];
			}
			var $add14,$add13;
			self['_groups'] = groups;
			self['_start'] = start;
			self['_end'] = $p['__op_add']($add13=start,$add14=$p['len'](groups['__getitem__'](0)));
			self['re'] = re;
			self['string'] = string;
			self['pos'] = pos;
			self['endpos'] = endpos;
			self['lastindex'] = lastindex;
			self['lastgroup'] = lastgroup;
			return null;
		}
	, 1, [null,null,['self'],['re'],['string'],['pos'],['endpos'],['groups'],['start'],['lastindex'],['lastgroup']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('start', function(group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
			var substr,idx;
			if ($p['bool'](!$p['op_eq'](group, 0))) {
				substr = self['group'](group);
				if ($p['bool'](substr)) {
					idx = self['string']['index'](substr, $p['getattr'](self, '_start'));
					return idx;
				}
				throw ($p['NotImplementedError']('group argument not supported'));
			}
			return $p['getattr'](self, '_start');
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method2('end', function(group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
			var idx,$add15,substr,$add16;
			if ($p['bool'](!$p['op_eq'](group, 0))) {
				substr = self['group'](group);
				if ($p['bool'](substr)) {
					idx = self['string']['index'](substr, $p['getattr'](self, '_start'));
					return $p['__op_add']($add15=idx,$add16=$p['len'](substr));
				}
				throw ($p['NotImplementedError']('group argument not supported'));
			}
			return $p['getattr'](self, '_end');
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['end'] = $method;
		$method = $pyjs__bind_method2('span', function(group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];

			return $p['tuple']([self['start'](group), self['end'](group)]);
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['span'] = $method;
		$method = $pyjs__bind_method2('expand', function(template) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				template = arguments[1];
			}

			throw ($p['NotImplementedError']('expand'));
			return null;
		}
	, 1, [null,null,['self'],['template']]);
		$cls_definition['expand'] = $method;
		$method = $pyjs__bind_method2('groups', function($$default) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
			}
			if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][3][1];
			var $$default;
			return $p['tuple'](function(){
				var $iter6_idx,$iter6_type,$collcomp1,$iter6_array,x,$iter6_iter,$iter6_nextval;
	$collcomp1 = $p['list']();
			$iter6_iter = $p['__getslice']($p['getattr'](self, '_groups'), 1, null);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				x = $iter6_nextval['$nextval'];
				$collcomp1['append'](($p['bool']((x !== null))? (x) : ($$default)));
			}

	return $collcomp1;}());
		}
	, 1, [null,null,['self'],['$$default', null]]);
		$cls_definition['groups'] = $method;
		$method = $pyjs__bind_method2('groupdict', function($$default) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
			}
			if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][3][1];
			var $$default;
			throw ($p['NotImplementedError']('groupdict'));
			return null;
		}
	, 1, [null,null,['self'],['$$default', null]]);
		$cls_definition['groupdict'] = $method;
		$method = $pyjs__bind_method2('group', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var grouplist,$iter7_array,group,$iter7_nextval,$iter7_iter,$iter7_idx,$iter7_type;
			if ($p['bool']($p['op_eq']($p['len'](args), 0))) {
				args = $p['tuple']([0]);
			}
			grouplist = $p['list']([]);
			$iter7_iter = args;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				group = $iter7_nextval['$nextval'];
				grouplist['append']($p['getattr'](self, '_groups')['__getitem__'](group));
			}
			if ($p['bool']($p['op_eq']($p['len'](grouplist), 1))) {
				return grouplist['__getitem__'](0);
			}
			else {
				return $p['tuple'](grouplist);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['group'] = $method;
		$method = $pyjs__bind_method2('__copy__', function() {
			if (this['__is_instance__'] === true) {
			} else {
			}


			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
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
	, 1, [null,null]);
		$cls_definition['__copy__'] = $method;
		$method = $pyjs__bind_method2('__deepcopy__', function() {
			if (this['__is_instance__'] === true) {
			} else {
			}


			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
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
	, 1, [null,null]);
		$cls_definition['__deepcopy__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SRE_Match', $p['tuple']($bases), $data);
	})();
	$m['SRE_Pattern'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 're';
		$method = $pyjs__bind_method2('__init__', function(pat, flags, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pat = arguments[1];
				flags = arguments[2];
				code = arguments[3];
			}

			self['pat'] = pat;
			self['flags'] = flags;
			self['match_code'] = code['__getitem__'](0);
			self['search_code'] = code['__getitem__'](1);
			self['findall_code'] = code['__getitem__'](2);
			return null;
		}
	, 1, [null,null,['self'],['pat'],['flags'],['code']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('match', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
			var _groups,$iter9_array,$iter8_idx,$iter9_iter,i,$iter9_nextval,$iter8_array,$iter9_type,$iter8_iter,groups,$iter8_type,$iter9_idx,$iter8_nextval;
			if ($p['bool'](!$p['bool']((endpos === null)))) {
				string = $p['__getslice'](string, 0, endpos);
			}
			else {
				endpos = $p['len'](string);
			}
			if ($p['bool']($p['op_eq'](pos, 0))) {
				groups = self['match_code']['Exec'](string);
				if ($p['bool'](groups === null)) {
					return null;
				}
				_groups = $p['list']([]);
				$iter8_iter = $p['list'](groups);
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					i = $iter8_nextval['$nextval'];
					if ($p['bool'](i === null)) {
						_groups['append'](null);
					}
					else {
						_groups['append']($p['str'](i));
					}
				}
				groups = _groups;
			}
			else if ($p['bool'](((($p['cmp'](pos, $p['len'](string)))|1) == 1))) {
				return null;
			}
			else {
				groups = self['match_code']['Exec']($p['__getslice'](string, pos, null));
				if ($p['bool'](groups === null)) {
					return null;
				}
				if ($p['bool'](!$p['op_eq']($p['getattr'](groups, 'index'), 0))) {
					return null;
				}
				_groups = $p['list']([]);
				$iter9_iter = $p['list'](groups);
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					i = $iter9_nextval['$nextval'];
					if ($p['bool'](i === null)) {
						_groups['append'](null);
					}
					else {
						_groups['append']($p['str'](i));
					}
				}
				groups = _groups;
			}
			return $m['SRE_Match'](self, string, pos, endpos, groups, pos, null, null);
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['match'] = $method;
		$method = $pyjs__bind_method2('search', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
			var _groups,$iter10_nextval,i,$iter11_iter,$iter11_type,$add18,$iter10_array,$add17,groups,$iter11_array,$iter10_type,$iter10_iter,$iter11_idx,$iter11_nextval,$iter10_idx;
			if ($p['bool'](!$p['bool']((endpos === null)))) {
				string = $p['__getslice'](string, 0, endpos);
			}
			if ($p['bool']($p['op_eq'](pos, 0))) {
				groups = self['search_code']['Exec'](string);
				if ($p['bool'](groups === null)) {
					return null;
				}
				_groups = $p['list']([]);
				$iter10_iter = $p['list'](groups);
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					i = $iter10_nextval['$nextval'];
					if ($p['bool'](i === null)) {
						_groups['append'](null);
					}
					else {
						_groups['append']($p['str'](i));
					}
				}
				groups = _groups;
			}
			else if ($p['bool'](((($p['cmp'](pos, $p['len'](string)))|1) == 1))) {
				return null;
			}
			else {
				groups = self['search_code']['Exec']($p['__getslice'](string, pos, null));
				if ($p['bool'](groups === null)) {
					return null;
				}
				_groups = $p['list']([]);
				$iter11_iter = $p['list'](groups);
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					i = $iter11_nextval['$nextval'];
					if ($p['bool'](i === null)) {
						_groups['append'](null);
					}
					else {
						_groups['append']($p['str'](i));
					}
				}
				groups = _groups;
			}
			return $m['SRE_Match'](self, string, pos, endpos, $p['__getslice'](groups, 2, null), $p['__op_add']($add17=pos,$add18=$p['len'](groups['__getitem__'](1))), null, null);
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['search'] = $method;
		$method = $pyjs__bind_method2('findall', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
			var all,span,m;
			if ($p['bool'](!$p['bool']((endpos === null)))) {
				string = $p['__getslice'](string, 0, endpos);
			}
			all = $p['list']([]);
			while ($p['bool'](true)) {
				m = self['search'](string, pos);
				if ($p['bool']((m === null))) {
					break;
				}
				span = m['span']();
				if ($p['bool'](!$p['bool'](m['groups']()))) {
					all['append']($p['__getslice'](string, span['__getitem__'](0), span['__getitem__'](1)));
				}
				else {
					all['append']($p['tuple'](function(){
						var group,$or2,$iter12_type,$iter12_array,$collcomp2,$iter12_iter,$or1,$iter12_idx,$iter12_nextval;
	$collcomp2 = $p['list']();
					$iter12_iter = m['groups']();
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						group = $iter12_nextval['$nextval'];
						$collcomp2['append'](($p['bool']($or1=group)?$or1:''));
					}

	return $collcomp2;}()));
				}
				pos = span['__getitem__'](1);
			}
			return all;
			return $p['list']($p['__getslice'](string, pos, null)['match']($p['getattr'](self, 'findall_code')));
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['findall'] = $method;
		$method = $pyjs__bind_method2('sub', function(repl, string, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				repl = arguments[1];
				string = arguments[2];
				count = arguments[3];
			}
			if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

			return self['subn'](repl, string, count)['__getitem__'](0);
		}
	, 1, [null,null,['self'],['repl'],['string'],['count', 0]]);
		$cls_definition['sub'] = $method;
		$method = $pyjs__bind_method2('subn', function(repl, string, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				repl = arguments[1];
				string = arguments[2];
				count = arguments[3];
			}
			if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];
			var span,$sub6,$add21,res,$add22,m,pos,n,subst,$add26,$add20,$add24,$add25,$add19,$sub5,$add23;
			res = '';
			n = 0;
			subst = repl;
			pos = 0;
			while ($p['bool'](((($p['cmp'](count, 0))|1) == 1))) {
				m = self['search'](string, pos);
				if ($p['bool']((m === null))) {
					break;
				}
				span = m['span']();
				if ($p['bool']($p['callable'](repl))) {
					subst = repl(m);
				}
				res = $p['__op_add']($add19=res,$add20=$p['__getslice'](string, pos, span['__getitem__'](0)));
				res = $p['__op_add']($add21=res,$add22=subst);
				pos = span['__getitem__'](1);
				n = $p['__op_add']($add23=n,$add24=1);
				if ($p['bool'](count)) {
					if ($p['bool']($p['op_eq'](count, 1))) {
						break;
					}
					count = $p['__op_sub']($sub5=count,$sub6=1);
				}
			}
			return $p['tuple']([$p['__op_add']($add25=res,$add26=$p['__getslice'](string, pos, null)), n]);
		}
	, 1, [null,null,['self'],['repl'],['string'],['count', 0]]);
		$cls_definition['subn'] = $method;
		$method = $pyjs__bind_method2('$$split', function(string, maxsplit) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				maxsplit = arguments[2];
			}
			if (typeof maxsplit == 'undefined') maxsplit=arguments['callee']['__args__'][4][1];
			var span,m,pos,splitted;
			splitted = $p['list']([]);
			pos = 0;
			while ($p['bool'](((($p['cmp'](maxsplit, 0))|1) == 1))) {
				m = self['search'](string, pos);
				if ($p['bool']((m === null))) {
					break;
				}
				span = m['span']();
				splitted['append']($p['__getslice'](string, pos, span['__getitem__'](0)));
				pos = span['__getitem__'](1);
			}
			if ($p['bool'](($p['cmp'](pos, $p['len'](string)) == -1))) {
				splitted['append']($p['__getslice'](string, pos, null));
			}
			return splitted;
		}
	, 1, [null,null,['self'],['string'],['maxsplit', 0]]);
		$cls_definition['$$split'] = $method;
		$method = $pyjs__bind_method2('finditer', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];

			return self['findall'](string, pos, endpos)['__iter__']();
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['finditer'] = $method;
		$method = $pyjs__bind_method2('scanner', function(string, start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				start = arguments[2];
				end = arguments[3];
			}
			if (typeof start == 'undefined') start=arguments['callee']['__args__'][4][1];
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][5][1];

			throw ($p['NotImplementedError']('scanner'));
			return null;
		}
	, 1, [null,null,['self'],['string'],['start', 0],['end', null]]);
		$cls_definition['scanner'] = $method;
		$method = $pyjs__bind_method2('__copy__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
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
		$cls_definition['__copy__'] = $method;
		$method = $pyjs__bind_method2('__deepcopy__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
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
		$cls_definition['__deepcopy__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SRE_Pattern', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end re */


/* end module: re */


