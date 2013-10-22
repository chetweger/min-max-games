/* start module: binascii */
$pyjs['loaded_modules']['binascii'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['binascii']['__was_initialized__']) return $pyjs['loaded_modules']['binascii'];
	var $m = $pyjs['loaded_modules']['binascii'];
	$m['__repr__'] = function() { return '<module: binascii>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'binascii';
	$m['__name__'] = __mod_name__;


	$m['Error'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Error', $p['tuple']($bases), $data);
	})();
	$m['Done'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Done', $p['tuple']($bases), $data);
	})();
	$m['Incomplete'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Incomplete', $p['tuple']($bases), $data);
	})();
	$m['a2b_uu'] = function(s) {
		var trailingdata,$sub15,$sub16,quadruplets_gen,$add3,length,$pyjs_try_err,$mod1,result,$add4,$mod2,$sub2,$sub1,$mul2,$mul1;
		if ($p['bool'](!$p['bool'](s))) {
			return '';
		}
		length = (typeof ($mod1=$p['__op_sub']($sub1=$p['ord'](s['__getitem__'](0)),$sub2=32))==typeof ($mod2=64) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2));
		quadruplets_gen = function(s) {
			var $add2,$pyjs_try_err,iterlist,$add1;
			iterlist = $p['list']([]);
			while ($p['bool'](s)) {
				try {
					iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1)), $p['ord'](s['__getitem__'](2)), $p['ord'](s['__getitem__'](3))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						s = $p['__op_add']($add1=s,$add2='   ');
						iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1)), $p['ord'](s['__getitem__'](2)), $p['ord'](s['__getitem__'](3))]));
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 4, null);
			}
			return iterlist;
		};
		quadruplets_gen['__name__'] = 'quadruplets_gen';

		quadruplets_gen['__bind_type__'] = 0;
		quadruplets_gen['__args__'] = [null,null,['s']];
		try {
			result = function(){
				var $collcomp1,$iter1_iter,$sub9,$sub8,$iter1_array,$sub3,$sub7,$sub6,$sub5,$sub4,A,C,B,$iter1_nextval,D,$sub13,$sub12,$sub11,$sub10,$sub14,$iter1_type,$iter1_idx;
	$collcomp1 = $p['list']();
			$iter1_iter = quadruplets_gen($p['__getslice'](s, 1, null)['rstrip']());
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 4, null);
				A = $tupleassign1[0];
				B = $tupleassign1[1];
				C = $tupleassign1[2];
				D = $tupleassign1[3];
				$collcomp1['append'](''['join']($p['list']([$p['chr']((($p['__op_sub']($sub3=A,$sub4=32))<<(2))|((($p['__op_sub']($sub5=B,$sub6=32))>>(4))&(3))), $p['chr'](((($p['__op_sub']($sub7=B,$sub8=32))&(15))<<(4))|((($p['__op_sub']($sub9=C,$sub10=32))>>(2))&(15))), $p['chr'](((($p['__op_sub']($sub11=C,$sub12=32))&(3))<<(6))|(($p['__op_sub']($sub13=D,$sub14=32))&(63)))])));
			}

	return $collcomp1;}();
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
				throw ($m['Error']('Illegal char'));
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		result = ''['join'](result);
		trailingdata = $p['__getslice'](result, length, null);
		if ($p['bool'](trailingdata['strip']('\x00'))) {
			throw ($m['Error']('Trailing garbage'));
		}
		result = $p['__getslice'](result, 0, length);
		if ($p['bool'](($p['cmp']($p['len'](result), length) == -1))) {
			result = $p['__op_add']($add3=result,$add4=(typeof ($mul1=$p['__op_sub']($sub15=length,$sub16=$p['len'](result)))==typeof ($mul2='\x00') && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
		}
		return result;
	};
	$m['a2b_uu']['__name__'] = 'a2b_uu';

	$m['a2b_uu']['__bind_type__'] = 0;
	$m['a2b_uu']['__args__'] = [null,null,['s']];
	$m['b2a_uu'] = function(s) {
		var $add20,$add15,$add16,$add17,result,length,triples_gen,$add18,$add19;
		length = $p['len'](s);
		if ($p['bool'](($p['cmp'](length, 45) == 1))) {
			throw ($m['Error']('At most 45 bytes at once'));
		}
		triples_gen = function(s) {
			var $pyjs_try_err,$add6,iterlist,$add5;
			iterlist = $p['list']([]);
			while ($p['bool'](s)) {
				try {
					iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1)), $p['ord'](s['__getitem__'](2))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						s = $p['__op_add']($add5=s,$add6='\x00\x00');
						iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1)), $p['ord'](s['__getitem__'](2))]));
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		result = function(){
			var A,C,$iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$add14,$iter2_idx,B,$add10,$add7,$add12,$add13,$add8,$add9,$iter2_array,$add11;
	$collcomp2 = $p['list']();
		$iter2_iter = triples_gen(s);
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 3, null);
			A = $tupleassign2[0];
			B = $tupleassign2[1];
			C = $tupleassign2[2];
			$collcomp2['append'](''['join']($p['list']([$p['chr']($p['__op_add']($add7=32,$add8=((A)>>(2))&(63))), $p['chr']($p['__op_add']($add9=32,$add10=(((A)<<(4))|(((B)>>(4))&(15)))&(63))), $p['chr']($p['__op_add']($add11=32,$add12=(((B)<<(2))|(((C)>>(6))&(3)))&(63))), $p['chr']($p['__op_add']($add13=32,$add14=(C)&(63)))])));
		}

	return $collcomp2;}();
		return $p['__op_add']($add19=$p['__op_add']($add17=$p['chr']($p['__op_add']($add15=$p['ord'](' '),$add16=(length)&(63))),$add18=''['join'](result)),$add20='\n');
	};
	$m['b2a_uu']['__name__'] = 'b2a_uu';

	$m['b2a_uu']['__bind_type__'] = 0;
	$m['b2a_uu']['__args__'] = [null,null,['s']];
	$m['table_a2b_base64'] = $p['dict']([['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4], ['F', 5], ['G', 6], ['H', 7], ['I', 8], ['J', 9], ['K', 10], ['L', 11], ['M', 12], ['N', 13], ['O', 14], ['P', 15], ['Q', 16], ['R', 17], ['S', 18], ['T', 19], ['U', 20], ['V', 21], ['W', 22], ['X', 23], ['Y', 24], ['Z', 25], ['a', 26], ['b', 27], ['c', 28], ['d', 29], ['e', 30], ['f', 31], ['g', 32], ['h', 33], ['i', 34], ['j', 35], ['k', 36], ['l', 37], ['m', 38], ['n', 39], ['o', 40], ['p', 41], ['q', 42], ['r', 43], ['s', 44], ['t', 45], ['u', 46], ['v', 47], ['w', 48], ['x', 49], ['y', 50], ['z', 51], ['0', 52], ['1', 53], ['2', 54], ['3', 55], ['4', 56], ['5', 57], ['6', 58], ['7', 59], ['8', 60], ['9', 61], ['+', 62], ['/', 63], ['=', 0]]);
	$m['a2b_base64'] = function(s) {
		var $sub20,leftchar,$sub18,$iter4_type,$or1,$iter4_iter,res,$add23,$add25,$add24,$add26,quad_pos,next_c,$or5,$or4,$sub19,$or6,next_valid_char,$or3,$or2,$and1,$and2,$sub17,c,i,$iter4_nextval,$iter4_idx,leftbits,$iter4_array;
		if ($p['bool'](!$p['bool']($p['isinstance'](s, $p['str'])))) {
			throw ($p['TypeError']($p['sprintf']('expected string or unicode, got %r', $p['tuple']([s]))));
		}
		s = s['rstrip']();
		next_valid_char = function(s, pos) {
			var c,$iter3_idx,i,$iter3_nextval,$iter3_type,$add21,$iter3_iter,$iter3_array,$add22;
			$iter3_iter = $p['range']($p['__op_add']($add21=pos,$add22=1), $p['len'](s));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				c = s['__getitem__'](i);
				if ($p['bool'](($p['cmp'](c, '\x7f') == -1))) {
					if ($p['bool']($m['table_a2b_base64']['has_key'](c))) {
						return c;
					}
				}
			}
			return null;
		};
		next_valid_char['__name__'] = 'next_valid_char';

		next_valid_char['__bind_type__'] = 0;
		next_valid_char['__args__'] = [null,null,['s'],['pos']];
		quad_pos = 0;
		leftbits = 0;
		leftchar = 0;
		res = $p['list']([]);
		$iter4_iter = $p['enumerate'](s);
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			var $tupleassign3 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
			i = $tupleassign3[0];
			c = $tupleassign3[1];
			if ($p['bool'](($p['bool']($or1=($p['cmp'](c, '\x7f') == 1))?$or1:($p['bool']($or2=$p['op_eq'](c, '\n'))?$or2:($p['bool']($or3=$p['op_eq'](c, '\r'))?$or3:$p['op_eq'](c, ' ')))))) {
				continue;
			}
			if ($p['bool']($p['op_eq'](c, '='))) {
				if ($p['bool'](($p['bool']($or5=($p['cmp'](quad_pos, 2) == -1))?$or5:($p['bool']($and1=$p['op_eq'](quad_pos, 2))?!$p['op_eq'](next_valid_char(s, i), '='):$and1)))) {
					continue;
				}
				else {
					leftbits = 0;
					break;
				}
			}
			if ($p['bool'](!$p['bool']($m['table_a2b_base64']['has_key'](c)))) {
				continue;
			}
			next_c = $m['table_a2b_base64']['__getitem__'](c);
			quad_pos = ($p['__op_add']($add23=quad_pos,$add24=1))&(3);
			leftchar = ((leftchar)<<(6))|(next_c);
			leftbits = $p['__op_add']($add25=leftbits,$add26=6);
			if ($p['bool'](((($p['cmp'](leftbits, 8))|1) == 1))) {
				leftbits = $p['__op_sub']($sub17=leftbits,$sub18=8);
				res['append'](((leftchar)>>(leftbits))&(255));
				leftchar &= $p['__op_sub']($sub19=(1)<<(leftbits),$sub20=1);
			}
		}
		if ($p['bool'](!$p['op_eq'](leftbits, 0))) {
			throw ($m['Error']('Incorrect padding'));
		}
		return ''['join'](function(){
			var $iter5_nextval,i,$iter5_idx,$collcomp3,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
		$iter5_iter = res;
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			i = $iter5_nextval['$nextval'];
			$collcomp3['append']($p['chr'](i));
		}

	return $collcomp3;}());
	};
	$m['a2b_base64']['__name__'] = 'a2b_base64';

	$m['a2b_base64']['__bind_type__'] = 0;
	$m['a2b_base64']['__args__'] = [null,null,['s']];
	$m['table_b2a_base64'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	$m['b2a_base64'] = function(s) {
		var $sub22,$sub23,$sub21,$sub24,$add42,$mod4,result,$mod3,$add29,$add41,$add40,snippet,$$final,final_length,$add39,a,$add38,b,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,length,triples_gen;
		length = $p['len'](s);
		final_length = (typeof ($mod3=length)==typeof ($mod4=3) && typeof $mod3=='number'?
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
			$p['op_mod']($mod3,$mod4));
		triples_gen = function(s) {
			var $add28,$pyjs_try_err,$add27,iterlist;
			iterlist = $p['list']([]);
			while ($p['bool'](s)) {
				try {
					iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1)), $p['ord'](s['__getitem__'](2))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						s = $p['__op_add']($add27=s,$add28='\x00\x00');
						iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1)), $p['ord'](s['__getitem__'](2))]));
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		a = triples_gen($p['__getslice'](s, 0, $p['__op_sub']($sub21=length,$sub22=final_length)));
		result = function(){
			var A,C,B,$iter6_idx,$iter6_type,$collcomp4,$iter6_array,$iter6_iter,$iter6_nextval;
	$collcomp4 = $p['list']();
		$iter6_iter = a;
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			var $tupleassign4 = $p['__ass_unpack']($iter6_nextval['$nextval'], 3, null);
			A = $tupleassign4[0];
			B = $tupleassign4[1];
			C = $tupleassign4[2];
			$collcomp4['append'](''['join']($p['list']([$m['table_b2a_base64']['__getitem__'](((A)>>(2))&(63)), $m['table_b2a_base64']['__getitem__']((((A)<<(4))|(((B)>>(4))&(15)))&(63)), $m['table_b2a_base64']['__getitem__']((((B)<<(2))|(((C)>>(6))&(3)))&(63)), $m['table_b2a_base64']['__getitem__']((C)&(63))])));
		}

	return $collcomp4;}();
		$$final = $p['__getslice'](s, $p['__op_sub']($sub23=length,$sub24=final_length), null);
		if ($p['bool']($p['op_eq'](final_length, 0))) {
			snippet = '';
		}
		else if ($p['bool']($p['op_eq'](final_length, 1))) {
			a = $p['ord']($$final['__getitem__'](0));
			snippet = $p['__op_add']($add31=$p['__op_add']($add29=$m['table_b2a_base64']['__getitem__'](((a)>>(2))&(63)),$add30=$m['table_b2a_base64']['__getitem__'](((a)<<(4))&(63))),$add32='==');
		}
		else {
			a = $p['ord']($$final['__getitem__'](0));
			b = $p['ord']($$final['__getitem__'](1));
			snippet = $p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33=$m['table_b2a_base64']['__getitem__'](((a)>>(2))&(63)),$add34=$m['table_b2a_base64']['__getitem__']((((a)<<(4))|(((b)>>(4))&(15)))&(63))),$add36=$m['table_b2a_base64']['__getitem__'](((b)<<(2))&(63))),$add38='=');
		}
		return $p['__op_add']($add41=$p['__op_add']($add39=''['join'](result),$add40=snippet),$add42='\n');
	};
	$m['b2a_base64']['__name__'] = 'b2a_base64';

	$m['b2a_base64']['__bind_type__'] = 0;
	$m['b2a_base64']['__args__'] = [null,null,['s']];
	$m['a2b_qp'] = function(s, header) {
		if (typeof header == 'undefined') header=arguments['callee']['__args__'][3][1];
		var ch,inp,$add60,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$and8,$or7,odata,$and3,$and4,$or8,$and6,$and5,$and7,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59;
		inp = 0;
		odata = $p['list']([]);
		while ($p['bool'](($p['cmp'](inp, $p['len'](s)) == -1))) {
			if ($p['bool']($p['op_eq'](s['__getitem__'](inp), '='))) {
				inp = $p['__op_add']($add43=inp,$add44=1);
				if ($p['bool'](((($p['cmp'](inp, $p['len'](s)))|1) == 1))) {
					break;
				}
				if ($p['bool'](($p['bool']($or7=$p['op_eq'](s['__getitem__'](inp), '\n'))?$or7:$p['op_eq'](s['__getitem__'](inp), '\r')))) {
					if ($p['bool'](!$p['op_eq'](s['__getitem__'](inp), '\n'))) {
						while ($p['bool'](($p['bool']($and3=($p['cmp'](inp, $p['len'](s)) == -1))?!$p['op_eq'](s['__getitem__'](inp), '\n'):$and3))) {
							inp = $p['__op_add']($add45=inp,$add46=1);
						}
					}
					if ($p['bool'](($p['cmp'](inp, $p['len'](s)) == -1))) {
						inp = $p['__op_add']($add47=inp,$add48=1);
					}
				}
				else if ($p['bool']($p['op_eq'](s['__getitem__'](inp), '='))) {
					odata['append']('=');
					inp = $p['__op_add']($add49=inp,$add50=1);
				}
				else if ($p['bool'](($p['bool']($and5=(typeof hex_numbers == "undefined"?$m['hex_numbers']:hex_numbers)['__contains__'](s['__getitem__'](inp)))?(typeof hex_numbers == "undefined"?$m['hex_numbers']:hex_numbers)['__contains__'](s['__getitem__']($p['__op_add']($add51=inp,$add52=1))):$and5))) {
					ch = $p['chr']($p['float_int']($p['__getslice'](s, inp, $p['__op_add']($add53=inp,$add54=2)), 16));
					inp = $p['__op_add']($add55=inp,$add56=2);
					odata['append'](ch);
				}
				else {
					odata['append']('=');
				}
			}
			else if ($p['bool'](($p['bool']($and7=header)?$p['op_eq'](s['__getitem__'](inp), '_'):$and7))) {
				odata['append'](' ');
				inp = $p['__op_add']($add57=inp,$add58=1);
			}
			else {
				odata['append'](s['__getitem__'](inp));
				inp = $p['__op_add']($add59=inp,$add60=1);
			}
		}
		return ''['join'](odata);
	};
	$m['a2b_qp']['__name__'] = 'a2b_qp';

	$m['a2b_qp']['__bind_type__'] = 0;
	$m['a2b_qp']['__args__'] = [null,null,['s'],['header', false]];
	$m['b2a_qp'] = function(data, quotetabs, istext, header) {
		if (typeof quotetabs == 'undefined') quotetabs=arguments['callee']['__args__'][3][1];
		if (typeof istext == 'undefined') istext=arguments['callee']['__args__'][4][1];
		if (typeof header == 'undefined') header=arguments['callee']['__args__'][5][1];
		var $add89,$add88,$sub26,$sub25,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,lf,$or28,$or24,$or25,$or26,$or27,$or20,$or21,$or22,$or23,$and9,$and38,$and39,$and34,$and35,$and36,$and37,$and30,$and31,$and32,$and33,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$and29,$and28,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,$add65,$add64,$add67,$add66,$add61,$add63,$add62,$add69,$add68,linelen,$add90,crlf,c,$and11,ch,odata,$or15,$or14,$or17,$or16,$or11,$or10,$or13,$or12,$or19,$or18,inp,MAXLINESIZE,$or9,$and12,$and13,$and10,$and16,$and17,$and14,$and15,$and18,$and19;
		MAXLINESIZE = 76;
		lf = data['find']('\n');
		crlf = ($p['bool']($and9=($p['cmp'](lf, 0) == 1))?$p['op_eq'](data['__getitem__']($p['__op_sub']($sub25=lf,$sub26=1)), '\r'):$and9);
		inp = 0;
		linelen = 0;
		odata = $p['list']([]);
		while ($p['bool'](($p['cmp'](inp, $p['len'](data)) == -1))) {
			c = data['__getitem__'](inp);
			if ($p['bool'](($p['bool']($or16=($p['cmp'](c, '~') == 1))?$or16:($p['bool']($or17=$p['op_eq'](c, '='))?$or17:($p['bool']($or18=($p['bool']($and11=header)?$p['op_eq'](c, '_'):$and11))?$or18:($p['bool']($or19=($p['bool']($and13=$p['op_eq'](c, '.'))?($p['bool']($and14=$p['op_eq'](linelen, 0))?($p['bool']($or9=$p['op_eq'](inp, $p['len'](data)))?$or9:($p['bool']($or10=$p['op_eq'](data['__getitem__']($p['__op_add']($add61=inp,$add62=1)), '\n'))?$or10:$p['op_eq'](data['__getitem__']($p['__op_add']($add63=inp,$add64=1)), '\r'))):$and14):$and13))?$or19:($p['bool']($or20=($p['bool']($and16=!$p['bool'](istext))?($p['bool']($or12=$p['op_eq'](c, '\r'))?$or12:$p['op_eq'](c, '\n')):$and16))?$or20:($p['bool']($or21=($p['bool']($and18=($p['bool']($or14=$p['op_eq'](c, '\t'))?$or14:$p['op_eq'](c, ' ')))?$p['op_eq']($p['__op_add']($add65=inp,$add66=1), $p['len'](data)):$and18))?$or21:($p['bool']($and20=($p['cmp'](c, ' ') < 1))?($p['bool']($and21=!$p['op_eq'](c, '\r'))?($p['bool']($and22=!$p['op_eq'](c, '\n'))?($p['bool']($or23=quotetabs)?$or23:($p['bool']($and24=!$p['bool'](quotetabs))?($p['bool']($and26=!$p['op_eq'](c, '\t'))?!$p['op_eq'](c, ' '):$and26):$and24)):$and22):$and21):$and20))))))))) {
				linelen = $p['__op_add']($add67=linelen,$add68=3);
				if ($p['bool'](((($p['cmp'](linelen, MAXLINESIZE))|1) == 1))) {
					odata['append']('=');
					if ($p['bool'](crlf)) {
						odata['append']('\r');
					}
					odata['append']('\n');
					linelen = 3;
				}
				odata['append']($p['__op_add']($add69='=',$add70=(typeof two_hex_digits == "undefined"?$m['two_hex_digits']:two_hex_digits)($p['ord'](c))));
				inp = $p['__op_add']($add71=inp,$add72=1);
			}
			else {
				if ($p['bool'](($p['bool']($and28=istext)?($p['bool']($or25=$p['op_eq'](c, '\n'))?$or25:($p['bool']($and30=($p['cmp']($p['__op_add']($add73=inp,$add74=1), $p['len'](data)) == -1))?($p['bool']($and31=$p['op_eq'](c, '\r'))?$p['op_eq'](data['__getitem__']($p['__op_add']($add75=inp,$add76=1)), '\n'):$and31):$and30)):$and28))) {
					linelen = 0;
					if ($p['bool'](($p['bool']($and33=($p['cmp']($p['len'](odata), 0) == 1))?($p['bool']($or27=$p['op_eq'](odata['__getitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))), ' '))?$or27:$p['op_eq'](odata['__getitem__']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2))), '\t')):$and33))) {
						ch = $p['ord'](odata['__getitem__']((typeof ($usub3=1)=='number'?
							-$usub3:
							$p['op_usub']($usub3))));
						odata['__setitem__']((typeof ($usub4=1)=='number'?
							-$usub4:
							$p['op_usub']($usub4)), '=');
						odata['append']((typeof two_hex_digits == "undefined"?$m['two_hex_digits']:two_hex_digits)(ch));
					}
					if ($p['bool'](crlf)) {
						odata['append']('\r');
					}
					odata['append']('\n');
					if ($p['bool']($p['op_eq'](c, '\r'))) {
						inp = $p['__op_add']($add77=inp,$add78=2);
					}
					else {
						inp = $p['__op_add']($add79=inp,$add80=1);
					}
				}
				else {
					if ($p['bool'](($p['bool']($and35=($p['cmp']($p['__op_add']($add81=inp,$add82=1), $p['len'](data)) == -1))?($p['bool']($and36=!$p['op_eq'](data['__getitem__']($p['__op_add']($add83=inp,$add84=1)), '\n'))?((($p['cmp']($p['__op_add']($add85=linelen,$add86=1), MAXLINESIZE))|1) == 1):$and36):$and35))) {
						odata['append']('=');
						if ($p['bool'](crlf)) {
							odata['append']('\r');
						}
						odata['append']('\n');
						linelen = 0;
					}
					linelen = $p['__op_add']($add87=linelen,$add88=1);
					if ($p['bool'](($p['bool']($and38=header)?$p['op_eq'](c, ' '):$and38))) {
						c = '_';
					}
					odata['append'](c);
					inp = $p['__op_add']($add89=inp,$add90=1);
				}
			}
		}
		return ''['join'](odata);
	};
	$m['b2a_qp']['__name__'] = 'b2a_qp';

	$m['b2a_qp']['__bind_type__'] = 0;
	$m['b2a_qp']['__args__'] = [null,null,['data'],['quotetabs', false],['istext', true],['header', false]];
	$m['hex_numbers'] = '0123456789ABCDEF';
	$m['hex'] = function(n) {
		var arr,$iter7_type,$iter7_nextval,$add94,$iter7_iter,hex_gen,nibble,$add91,$add92,sign,$add93,$iter7_idx,$iter7_array;
		if ($p['bool']($p['op_eq'](n, 0))) {
			return '0';
		}
		if ($p['bool'](($p['cmp'](n, 0) == -1))) {
			n = (typeof ($usub5=n)=='number'?
				-$usub5:
				$p['op_usub']($usub5));
			sign = '-';
		}
		else {
			sign = '';
		}
		arr = $p['list']([]);
		hex_gen = function(n) {
			var $mod5,$mod6,iterlist,$div2,$div1;
			iterlist = $p['list']([]);
			while ($p['bool'](n)) {
				iterlist['append']((typeof ($mod5=n)==typeof ($mod6=16) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)));
				n = (typeof ($div1=n)==typeof ($div2=16) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
			}
			return iterlist;
		};
		hex_gen['__name__'] = 'hex_gen';

		hex_gen['__bind_type__'] = 0;
		hex_gen['__args__'] = [null,null,['n']];
		$iter7_iter = hex_gen(n);
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
			nibble = $iter7_nextval['$nextval'];
			arr = $p['__op_add']($add91=$p['list']([$m['hex_numbers']['__getitem__'](nibble)]),$add92=arr);
		}
		return $p['__op_add']($add93=sign,$add94=''['join'](arr));
	};
	$m['hex']['__name__'] = 'hex';

	$m['hex']['__bind_type__'] = 0;
	$m['hex']['__args__'] = [null,null,['n']];
	$m['two_hex_digits'] = function(n) {
		var $add95,$add96,$mod7,$div3,$mod8,$div4;
		return $p['__op_add']($add95=$m['hex_numbers']['__getitem__']((typeof ($div3=n)==typeof ($div4=16) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4))),$add96=$m['hex_numbers']['__getitem__']((typeof ($mod7=n)==typeof ($mod8=16) && typeof $mod7=='number'?
			(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
			$p['op_mod']($mod7,$mod8))));
	};
	$m['two_hex_digits']['__name__'] = 'two_hex_digits';

	$m['two_hex_digits']['__bind_type__'] = 0;
	$m['two_hex_digits']['__args__'] = [null,null,['n']];
	$m['strhex_to_int'] = function(s) {
		var c,$iter8_idx,i,$iter8_type,$add97,$iter8_array,$iter8_iter,$iter8_nextval,$add98,$mul4,$mul3;
		i = 0;
		$iter8_iter = s;
		$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
		while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
			c = $iter8_nextval['$nextval'];
			i = $p['__op_add']($add97=(typeof ($mul3=i)==typeof ($mul4=16) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)),$add98=$m['hex_numbers']['index'](c));
		}
		return i;
	};
	$m['strhex_to_int']['__name__'] = 'strhex_to_int';

	$m['strhex_to_int']['__bind_type__'] = 0;
	$m['strhex_to_int']['__args__'] = [null,null,['s']];
	$m['hqx_encoding'] = '!"#$%&\'()*+,-012345689@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr';
	$m['DONE'] = 127;
	$m['SKIP'] = 126;
	$m['FAIL'] = 125;
	$m['table_a2b_hqx'] = $p['list']([$m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, $m['FAIL'], $m['FAIL'], 13, 14, 15, 16, 17, 18, 19, $m['FAIL'], 20, 21, $m['DONE'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, $m['FAIL'], 37, 38, 39, 40, 41, 42, 43, $m['FAIL'], 44, 45, 46, 47, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 48, 49, 50, 51, 52, 53, 54, $m['FAIL'], 55, 56, 57, 58, 59, 60, $m['FAIL'], $m['FAIL'], 61, 62, 63, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL']]);
	$m['a2b_hqx'] = function(s) {
		var $iter10_nextval,$iter10_idx,length,$iter10_array,quadruples_gen,snippet,$pyjs_try_err,done,result,iterlist,$iter10_type,$iter10_iter;
		result = $p['list']([]);
		quadruples_gen = function(s) {
			var c,$iter9_iter,res,$iter9_nextval,$iter9_idx,$iter9_array,t,iterlist,$iter9_type;
			t = $p['list']([]);
			iterlist = $p['list']([]);
			$iter9_iter = s;
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				c = $iter9_nextval['$nextval'];
				res = $m['table_a2b_hqx']['__getitem__']($p['ord'](c));
				if ($p['bool']($p['op_eq'](res, $m['SKIP']))) {
					continue;
				}
				else if ($p['bool']($p['op_eq'](res, $m['FAIL']))) {
					throw ($m['Error']('Illegal character'));
				}
				else if ($p['bool']($p['op_eq'](res, $m['DONE']))) {
					iterlist['append'](t);
					return $p['tuple']([iterlist, true]);
				}
				else {
					t['append'](res);
				}
				if ($p['bool']($p['op_eq']($p['len'](t), 4))) {
					iterlist['append'](t);
					t = $p['list']([]);
				}
			}
			iterlist['append'](t);
			return $p['tuple']([iterlist, false]);
		};
		quadruples_gen['__name__'] = 'quadruples_gen';

		quadruples_gen['__bind_type__'] = 0;
		quadruples_gen['__args__'] = [null,null,['s']];
		done = 0;
		try {
			var $tupleassign5 = $p['__ass_unpack'](quadruples_gen(s), 2, null);
			iterlist = $tupleassign5[0];
			done = $tupleassign5[1];
			$iter10_iter = iterlist;
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				snippet = $iter10_nextval['$nextval'];
				length = $p['len'](snippet);
				if ($p['bool']($p['op_eq'](length, 4))) {
					result['append']($p['chr']((((snippet['__getitem__'](0))&(63))<<(2))|((snippet['__getitem__'](1))>>(4))));
					result['append']($p['chr']((((snippet['__getitem__'](1))&(15))<<(4))|((snippet['__getitem__'](2))>>(2))));
					result['append']($p['chr']((((snippet['__getitem__'](2))&(3))<<(6))|(snippet['__getitem__'](3))));
				}
				else if ($p['bool']($p['op_eq'](length, 3))) {
					result['append']($p['chr']((((snippet['__getitem__'](0))&(63))<<(2))|((snippet['__getitem__'](1))>>(4))));
					result['append']($p['chr']((((snippet['__getitem__'](1))&(15))<<(4))|((snippet['__getitem__'](2))>>(2))));
				}
				else if ($p['bool']($p['op_eq'](length, 2))) {
					result['append']($p['chr']((((snippet['__getitem__'](0))&(63))<<(2))|((snippet['__getitem__'](1))>>(4))));
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $m['Done']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Done'])) {
				done = 1;
			} else if (($pyjs_try_err_name == $m['Error']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Error'])) {
				throw ($pyjs['__last_exception__']?
					$pyjs['__last_exception__']['error']:
					$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return $p['tuple']([''['join'](result), done]);
	};
	$m['a2b_hqx']['__name__'] = 'a2b_hqx';

	$m['a2b_hqx']['__bind_type__'] = 0;
	$m['a2b_hqx']['__args__'] = [null,null,['s']];
	$m['b2a_hqx'] = function(s) {
		var $iter11_idx,$iter11_iter,$iter11_type,length,snippet,result,$iter11_array,$iter11_nextval,triples_gen;
		result = $p['list']([]);
		triples_gen = function(s) {
			var $pyjs_try_err,iterlist;
			iterlist = $p['list']([]);
			while ($p['bool'](s)) {
				try {
					iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1)), $p['ord'](s['__getitem__'](2))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						try {
							iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0)), $p['ord'](s['__getitem__'](1))]));
						} catch($pyjs_try_err) {
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
								iterlist['append']($p['tuple']([$p['ord'](s['__getitem__'](0))]));
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		$iter11_iter = triples_gen(s);
		$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
		while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
			snippet = $iter11_nextval['$nextval'];
			length = $p['len'](snippet);
			if ($p['bool']($p['op_eq'](length, 3))) {
				result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(252))>>(2)));
				result['append']($m['hqx_encoding']['__getitem__']((((snippet['__getitem__'](0))&(3))<<(4))|(((snippet['__getitem__'](1))&(240))>>(4))));
				result['append']($m['hqx_encoding']['__getitem__']((((snippet['__getitem__'](1))&(15))<<(2))|(((snippet['__getitem__'](2))&(192))>>(6))));
				result['append']($m['hqx_encoding']['__getitem__']((snippet['__getitem__'](2))&(63)));
			}
			else if ($p['bool']($p['op_eq'](length, 2))) {
				result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(252))>>(2)));
				result['append']($m['hqx_encoding']['__getitem__']((((snippet['__getitem__'](0))&(3))<<(4))|(((snippet['__getitem__'](1))&(240))>>(4))));
				result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](1))&(15))<<(2)));
			}
			else if ($p['bool']($p['op_eq'](length, 1))) {
				result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(252))>>(2)));
				result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(3))<<(4)));
			}
		}
		return ''['join'](result);
	};
	$m['b2a_hqx']['__name__'] = 'b2a_hqx';

	$m['b2a_hqx']['__bind_type__'] = 0;
	$m['b2a_hqx']['__args__'] = [null,null,['s']];
	$m['crctab_hqx'] = $p['list']([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);
	$m['crc_hqx'] = function(s, crc) {
		var c,$iter12_type,$iter12_array,$iter12_iter,$iter12_idx,$iter12_nextval;
		$iter12_iter = s;
		$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
		while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
			c = $iter12_nextval['$nextval'];
			crc = (((crc)<<(8))&(65280))^($m['crctab_hqx']['__getitem__']((((crc)>>(8))&(255))^($p['ord'](c))));
		}
		return crc;
	};
	$m['crc_hqx']['__name__'] = 'crc_hqx';

	$m['crc_hqx']['__bind_type__'] = 0;
	$m['crc_hqx']['__args__'] = [null,null,['s'],['crc']];
	$m['rlecode_hqx'] = function(s) {
		var result,$add104,$and41,$and40,prev,$iter13_array,$add101,$add100,$add103,$add102,$add99,$mul8,$mul7,$mul6,$mul5,count,c,$iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx;
		if ($p['bool'](!$p['bool'](s))) {
			return '';
		}
		result = $p['list']([]);
		prev = s['__getitem__'](0);
		count = 1;
		if ($p['bool']($p['op_eq'](s['__getitem__']((typeof ($usub6=1)=='number'?
			-$usub6:
			$p['op_usub']($usub6))), '!'))) {
			s = $p['__op_add']($add99=$p['__getslice'](s, 1, null),$add100='?');
		}
		else {
			s = $p['__op_add']($add101=$p['__getslice'](s, 1, null),$add102='!');
		}
		$iter13_iter = s;
		$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
		while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
			c = $iter13_nextval['$nextval'];
			if ($p['bool'](($p['bool']($and40=$p['op_eq'](c, prev))?($p['cmp'](count, 255) == -1):$and40))) {
				count = $p['__op_add']($add103=count,$add104=1);
			}
			else {
				if ($p['bool']($p['op_eq'](count, 1))) {
					if ($p['bool'](!$p['op_eq'](prev, '\x90'))) {
						result['append'](prev);
					}
					else {
						result['extend']($p['list'](['\x90', '\x00']));
					}
				}
				else if ($p['bool'](($p['cmp'](count, 4) == -1))) {
					if ($p['bool'](!$p['op_eq'](prev, '\x90'))) {
						result['extend']((typeof ($mul5=$p['list']([prev]))==typeof ($mul6=count) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)));
					}
					else {
						result['extend']((typeof ($mul7=$p['list'](['\x90', '\x00']))==typeof ($mul8=count) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
					}
				}
				else {
					if ($p['bool'](!$p['op_eq'](prev, '\x90'))) {
						result['extend']($p['list']([prev, '\x90', $p['chr'](count)]));
					}
					else {
						result['extend']($p['list'](['\x90', '\x00', '\x90', $p['chr'](count)]));
					}
				}
				count = 1;
				prev = c;
			}
		}
		return ''['join'](result);
	};
	$m['rlecode_hqx']['__name__'] = 'rlecode_hqx';

	$m['rlecode_hqx']['__bind_type__'] = 0;
	$m['rlecode_hqx']['__args__'] = [null,null,['s']];
	$m['rledecode_hqx'] = function(s) {
		var count,$iter14_array,$iter14_type,$sub27,$mul10,$mul9,$sub28,snippet,result,$iter14_iter,prev,$iter14_idx,$iter14_nextval;
		s = s['$$split']('\x90');
		result = $p['list']([s['__getitem__'](0)]);
		prev = s['__getitem__'](0);
		$iter14_iter = $p['__getslice'](s, 1, null);
		$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
		while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
			snippet = $iter14_nextval['$nextval'];
			count = $p['ord'](snippet['__getitem__'](0));
			if ($p['bool'](($p['cmp'](count, 0) == 1))) {
				result['append']((typeof ($mul9=prev['__getitem__']((typeof ($usub7=1)=='number'?
					-$usub7:
					$p['op_usub']($usub7))))==typeof ($mul10=$p['__op_sub']($sub27=count,$sub28=1)) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
				prev = snippet;
			}
			else {
				result['append']('\x90');
				prev = '\x90';
			}
			result['append']($p['__getslice'](snippet, 1, null));
		}
		return ''['join'](result);
	};
	$m['rledecode_hqx']['__name__'] = 'rledecode_hqx';

	$m['rledecode_hqx']['__bind_type__'] = 0;
	$m['rledecode_hqx']['__args__'] = [null,null,['s']];
	$m['crc_32_tab'] = $p['list']([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
	$m['crc32'] = function(s, crc) {
		if (typeof crc == 'undefined') crc=arguments['callee']['__args__'][3][1];
		var $sub29,result,$mod9,$pow7,$pow6,$pow5,$pow4,$pow3,$iter15_iter,$pow1,$pow8,$sub30,$add105,$mod10,$add106,$iter15_array,$pow2,c,$iter15_idx,$iter15_nextval,$iter15_type;
		result = 0;
		crc = (~($p['float_int'](crc)))&(4294967295);
		$iter15_iter = s;
		$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
		while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
			c = $iter15_nextval['$nextval'];
			crc = ($m['crc_32_tab']['__getitem__'](((crc)^($p['float_int']($p['ord'](c))))&(255)))^((crc)>>(8));
			result = (crc)^(4294967295);
		}
		if ($p['bool'](($p['cmp'](result, (typeof ($pow1=2)==typeof ($pow2=31) && typeof $pow1=='number'?
			Math['pow']($pow1,$pow2):
			$p['op_pow']($pow1,$pow2))) == 1))) {
			result = $p['__op_sub']($sub29=(typeof ($mod9=$p['__op_add']($add105=result,$add106=(typeof ($pow3=2)==typeof ($pow4=31) && typeof $pow3=='number'?
				Math['pow']($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))))==typeof ($mod10=(typeof ($pow5=2)==typeof ($pow6=32) && typeof $pow5=='number'?
				Math['pow']($pow5,$pow6):
				$p['op_pow']($pow5,$pow6))) && typeof $mod9=='number'?
				(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
				$p['op_mod']($mod9,$mod10)),$sub30=(typeof ($pow7=2)==typeof ($pow8=31) && typeof $pow7=='number'?
				Math['pow']($pow7,$pow8):
				$p['op_pow']($pow7,$pow8)));
		}
		return result;
	};
	$m['crc32']['__name__'] = 'crc32';

	$m['crc32']['__bind_type__'] = 0;
	$m['crc32']['__args__'] = [null,null,['s'],['crc', 0]];
	$m['b2a_hex'] = function(s) {
		var $iter16_array,$$char,c,$sub32,$add107,$iter16_type,$sub31,$add108,$add114,$add112,$sub33,$add110,$add111,$iter16_idx,$add109,$add113,result,$iter16_nextval,$iter16_iter,$sub34;
		result = $p['list']([]);
		$iter16_iter = s;
		$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
		while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
			$$char = $iter16_nextval['$nextval'];
			c = (($p['ord']($$char))>>(4))&(15);
			if ($p['bool'](($p['cmp'](c, 9) == 1))) {
				c = $p['__op_sub']($sub31=$p['__op_add']($add107=c,$add108=$p['ord']('a')),$sub32=10);
			}
			else {
				c = $p['__op_add']($add109=c,$add110=$p['ord']('0'));
			}
			result['append']($p['chr'](c));
			c = ($p['ord']($$char))&(15);
			if ($p['bool'](($p['cmp'](c, 9) == 1))) {
				c = $p['__op_sub']($sub33=$p['__op_add']($add111=c,$add112=$p['ord']('a')),$sub34=10);
			}
			else {
				c = $p['__op_add']($add113=c,$add114=$p['ord']('0'));
			}
			result['append']($p['chr'](c));
		}
		return ''['join'](result);
	};
	$m['b2a_hex']['__name__'] = 'b2a_hex';

	$m['b2a_hex']['__bind_type__'] = 0;
	$m['b2a_hex']['__args__'] = [null,null,['s']];
	$m['hexlify'] = $m['b2a_hex'];
	$m['table_hex'] = $p['list']([(typeof ($usub8=1)=='number'?
		-$usub8:
		$p['op_usub']($usub8)), (typeof ($usub9=1)=='number'?
		-$usub9:
		$p['op_usub']($usub9)), (typeof ($usub10=1)=='number'?
		-$usub10:
		$p['op_usub']($usub10)), (typeof ($usub11=1)=='number'?
		-$usub11:
		$p['op_usub']($usub11)), (typeof ($usub12=1)=='number'?
		-$usub12:
		$p['op_usub']($usub12)), (typeof ($usub13=1)=='number'?
		-$usub13:
		$p['op_usub']($usub13)), (typeof ($usub14=1)=='number'?
		-$usub14:
		$p['op_usub']($usub14)), (typeof ($usub15=1)=='number'?
		-$usub15:
		$p['op_usub']($usub15)), (typeof ($usub16=1)=='number'?
		-$usub16:
		$p['op_usub']($usub16)), (typeof ($usub17=1)=='number'?
		-$usub17:
		$p['op_usub']($usub17)), (typeof ($usub18=1)=='number'?
		-$usub18:
		$p['op_usub']($usub18)), (typeof ($usub19=1)=='number'?
		-$usub19:
		$p['op_usub']($usub19)), (typeof ($usub20=1)=='number'?
		-$usub20:
		$p['op_usub']($usub20)), (typeof ($usub21=1)=='number'?
		-$usub21:
		$p['op_usub']($usub21)), (typeof ($usub22=1)=='number'?
		-$usub22:
		$p['op_usub']($usub22)), (typeof ($usub23=1)=='number'?
		-$usub23:
		$p['op_usub']($usub23)), (typeof ($usub24=1)=='number'?
		-$usub24:
		$p['op_usub']($usub24)), (typeof ($usub25=1)=='number'?
		-$usub25:
		$p['op_usub']($usub25)), (typeof ($usub26=1)=='number'?
		-$usub26:
		$p['op_usub']($usub26)), (typeof ($usub27=1)=='number'?
		-$usub27:
		$p['op_usub']($usub27)), (typeof ($usub28=1)=='number'?
		-$usub28:
		$p['op_usub']($usub28)), (typeof ($usub29=1)=='number'?
		-$usub29:
		$p['op_usub']($usub29)), (typeof ($usub30=1)=='number'?
		-$usub30:
		$p['op_usub']($usub30)), (typeof ($usub31=1)=='number'?
		-$usub31:
		$p['op_usub']($usub31)), (typeof ($usub32=1)=='number'?
		-$usub32:
		$p['op_usub']($usub32)), (typeof ($usub33=1)=='number'?
		-$usub33:
		$p['op_usub']($usub33)), (typeof ($usub34=1)=='number'?
		-$usub34:
		$p['op_usub']($usub34)), (typeof ($usub35=1)=='number'?
		-$usub35:
		$p['op_usub']($usub35)), (typeof ($usub36=1)=='number'?
		-$usub36:
		$p['op_usub']($usub36)), (typeof ($usub37=1)=='number'?
		-$usub37:
		$p['op_usub']($usub37)), (typeof ($usub38=1)=='number'?
		-$usub38:
		$p['op_usub']($usub38)), (typeof ($usub39=1)=='number'?
		-$usub39:
		$p['op_usub']($usub39)), (typeof ($usub40=1)=='number'?
		-$usub40:
		$p['op_usub']($usub40)), (typeof ($usub41=1)=='number'?
		-$usub41:
		$p['op_usub']($usub41)), (typeof ($usub42=1)=='number'?
		-$usub42:
		$p['op_usub']($usub42)), (typeof ($usub43=1)=='number'?
		-$usub43:
		$p['op_usub']($usub43)), (typeof ($usub44=1)=='number'?
		-$usub44:
		$p['op_usub']($usub44)), (typeof ($usub45=1)=='number'?
		-$usub45:
		$p['op_usub']($usub45)), (typeof ($usub46=1)=='number'?
		-$usub46:
		$p['op_usub']($usub46)), (typeof ($usub47=1)=='number'?
		-$usub47:
		$p['op_usub']($usub47)), (typeof ($usub48=1)=='number'?
		-$usub48:
		$p['op_usub']($usub48)), (typeof ($usub49=1)=='number'?
		-$usub49:
		$p['op_usub']($usub49)), (typeof ($usub50=1)=='number'?
		-$usub50:
		$p['op_usub']($usub50)), (typeof ($usub51=1)=='number'?
		-$usub51:
		$p['op_usub']($usub51)), (typeof ($usub52=1)=='number'?
		-$usub52:
		$p['op_usub']($usub52)), (typeof ($usub53=1)=='number'?
		-$usub53:
		$p['op_usub']($usub53)), (typeof ($usub54=1)=='number'?
		-$usub54:
		$p['op_usub']($usub54)), (typeof ($usub55=1)=='number'?
		-$usub55:
		$p['op_usub']($usub55)), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, (typeof ($usub56=1)=='number'?
		-$usub56:
		$p['op_usub']($usub56)), (typeof ($usub57=1)=='number'?
		-$usub57:
		$p['op_usub']($usub57)), (typeof ($usub58=1)=='number'?
		-$usub58:
		$p['op_usub']($usub58)), (typeof ($usub59=1)=='number'?
		-$usub59:
		$p['op_usub']($usub59)), (typeof ($usub60=1)=='number'?
		-$usub60:
		$p['op_usub']($usub60)), (typeof ($usub61=1)=='number'?
		-$usub61:
		$p['op_usub']($usub61)), (typeof ($usub62=1)=='number'?
		-$usub62:
		$p['op_usub']($usub62)), 10, 11, 12, 13, 14, 15, (typeof ($usub63=1)=='number'?
		-$usub63:
		$p['op_usub']($usub63)), (typeof ($usub64=1)=='number'?
		-$usub64:
		$p['op_usub']($usub64)), (typeof ($usub65=1)=='number'?
		-$usub65:
		$p['op_usub']($usub65)), (typeof ($usub66=1)=='number'?
		-$usub66:
		$p['op_usub']($usub66)), (typeof ($usub67=1)=='number'?
		-$usub67:
		$p['op_usub']($usub67)), (typeof ($usub68=1)=='number'?
		-$usub68:
		$p['op_usub']($usub68)), (typeof ($usub69=1)=='number'?
		-$usub69:
		$p['op_usub']($usub69)), (typeof ($usub70=1)=='number'?
		-$usub70:
		$p['op_usub']($usub70)), (typeof ($usub71=1)=='number'?
		-$usub71:
		$p['op_usub']($usub71)), (typeof ($usub72=1)=='number'?
		-$usub72:
		$p['op_usub']($usub72)), (typeof ($usub73=1)=='number'?
		-$usub73:
		$p['op_usub']($usub73)), (typeof ($usub74=1)=='number'?
		-$usub74:
		$p['op_usub']($usub74)), (typeof ($usub75=1)=='number'?
		-$usub75:
		$p['op_usub']($usub75)), (typeof ($usub76=1)=='number'?
		-$usub76:
		$p['op_usub']($usub76)), (typeof ($usub77=1)=='number'?
		-$usub77:
		$p['op_usub']($usub77)), (typeof ($usub78=1)=='number'?
		-$usub78:
		$p['op_usub']($usub78)), (typeof ($usub79=1)=='number'?
		-$usub79:
		$p['op_usub']($usub79)), (typeof ($usub80=1)=='number'?
		-$usub80:
		$p['op_usub']($usub80)), (typeof ($usub81=1)=='number'?
		-$usub81:
		$p['op_usub']($usub81)), (typeof ($usub82=1)=='number'?
		-$usub82:
		$p['op_usub']($usub82)), (typeof ($usub83=1)=='number'?
		-$usub83:
		$p['op_usub']($usub83)), (typeof ($usub84=1)=='number'?
		-$usub84:
		$p['op_usub']($usub84)), (typeof ($usub85=1)=='number'?
		-$usub85:
		$p['op_usub']($usub85)), (typeof ($usub86=1)=='number'?
		-$usub86:
		$p['op_usub']($usub86)), (typeof ($usub87=1)=='number'?
		-$usub87:
		$p['op_usub']($usub87)), (typeof ($usub88=1)=='number'?
		-$usub88:
		$p['op_usub']($usub88)), 10, 11, 12, 13, 14, 15, (typeof ($usub89=1)=='number'?
		-$usub89:
		$p['op_usub']($usub89)), (typeof ($usub90=1)=='number'?
		-$usub90:
		$p['op_usub']($usub90)), (typeof ($usub91=1)=='number'?
		-$usub91:
		$p['op_usub']($usub91)), (typeof ($usub92=1)=='number'?
		-$usub92:
		$p['op_usub']($usub92)), (typeof ($usub93=1)=='number'?
		-$usub93:
		$p['op_usub']($usub93)), (typeof ($usub94=1)=='number'?
		-$usub94:
		$p['op_usub']($usub94)), (typeof ($usub95=1)=='number'?
		-$usub95:
		$p['op_usub']($usub95)), (typeof ($usub96=1)=='number'?
		-$usub96:
		$p['op_usub']($usub96)), (typeof ($usub97=1)=='number'?
		-$usub97:
		$p['op_usub']($usub97)), (typeof ($usub98=1)=='number'?
		-$usub98:
		$p['op_usub']($usub98)), (typeof ($usub99=1)=='number'?
		-$usub99:
		$p['op_usub']($usub99)), (typeof ($usub100=1)=='number'?
		-$usub100:
		$p['op_usub']($usub100)), (typeof ($usub101=1)=='number'?
		-$usub101:
		$p['op_usub']($usub101)), (typeof ($usub102=1)=='number'?
		-$usub102:
		$p['op_usub']($usub102)), (typeof ($usub103=1)=='number'?
		-$usub103:
		$p['op_usub']($usub103)), (typeof ($usub104=1)=='number'?
		-$usub104:
		$p['op_usub']($usub104)), (typeof ($usub105=1)=='number'?
		-$usub105:
		$p['op_usub']($usub105)), (typeof ($usub106=1)=='number'?
		-$usub106:
		$p['op_usub']($usub106)), (typeof ($usub107=1)=='number'?
		-$usub107:
		$p['op_usub']($usub107)), (typeof ($usub108=1)=='number'?
		-$usub108:
		$p['op_usub']($usub108)), (typeof ($usub109=1)=='number'?
		-$usub109:
		$p['op_usub']($usub109)), (typeof ($usub110=1)=='number'?
		-$usub110:
		$p['op_usub']($usub110)), (typeof ($usub111=1)=='number'?
		-$usub111:
		$p['op_usub']($usub111)), (typeof ($usub112=1)=='number'?
		-$usub112:
		$p['op_usub']($usub112)), (typeof ($usub113=1)=='number'?
		-$usub113:
		$p['op_usub']($usub113))]);
	$m['a2b_hex'] = function(t) {
		var $iter17_nextval,a,$or29,$iter17_iter,$add116,$or30,pairs_gen,$iter17_array,b,$iter17_idx,$iter17_type,$add115,result;
		result = $p['list']([]);
		pairs_gen = function(s) {
			var $pyjs_try_err,iterlist;
			iterlist = $p['list']([]);
			while ($p['bool'](s)) {
				try {
					iterlist['append']($p['tuple']([$m['table_hex']['__getitem__']($p['ord'](s['__getitem__'](0))), $m['table_hex']['__getitem__']($p['ord'](s['__getitem__'](1)))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						if ($p['bool']($p['len'](s))) {
							throw ($p['TypeError']('Odd-length string'));
						}
						return iterlist;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				s = $p['__getslice'](s, 2, null);
			}
			return iterlist;
		};
		pairs_gen['__name__'] = 'pairs_gen';

		pairs_gen['__bind_type__'] = 0;
		pairs_gen['__args__'] = [null,null,['s']];
		$iter17_iter = pairs_gen(t);
		$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
		while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
			var $tupleassign6 = $p['__ass_unpack']($iter17_nextval['$nextval'], 2, null);
			a = $tupleassign6[0];
			b = $tupleassign6[1];
			if ($p['bool'](($p['bool']($or29=($p['cmp'](a, 0) == -1))?$or29:($p['cmp'](b, 0) == -1)))) {
				throw ($p['TypeError']('Non-hexadecimal digit found'));
			}
			result['append']($p['chr']($p['__op_add']($add115=(a)<<(4),$add116=b)));
		}
		return ''['join'](result);
	};
	$m['a2b_hex']['__name__'] = 'a2b_hex';

	$m['a2b_hex']['__bind_type__'] = 0;
	$m['a2b_hex']['__args__'] = [null,null,['t']];
	$m['unhexlify'] = $m['a2b_hex'];
	return this;
}; /* end binascii */


/* end module: binascii */


