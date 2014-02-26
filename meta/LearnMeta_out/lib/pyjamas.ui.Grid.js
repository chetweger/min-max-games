/* start module: pyjamas.ui.Grid */
$pyjs['loaded_modules']['pyjamas.ui.Grid'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Grid']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Grid'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Grid'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Grid>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Grid';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Grid'] = $pyjs['loaded_modules']['pyjamas.ui.Grid'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['HTMLTable'] = $p['___import___']('pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui', null, false);
	$m['CellFormatter'] = $p['___import___']('pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui', null, false);
	$m['RowFormatter'] = $p['___import___']('pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui', null, false);
	$m['Grid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Grid';
		$method = $pyjs__bind_method2('__init__', function(rows, columns) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				rows = arguments[1];
				columns = arguments[2];
				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof columns != 'undefined') {
					if (columns !== null && typeof columns['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = columns;
						columns = arguments[3];
					}
				} else 				if (typeof rows != 'undefined') {
					if (rows !== null && typeof rows['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = rows;
						rows = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof rows == 'undefined') rows=arguments['callee']['__args__'][3][1];
			if (typeof columns == 'undefined') columns=arguments['callee']['__args__'][4][1];
			var $or1,$or2;
			self['numColumns'] = 0;
			self['numRows'] = 0;
			$pyjs_kwargs_call($m['HTMLTable'], '__init__', null, kwargs, [{}, self]);
			if ($p['bool'](($p['bool']($or1=($p['cmp'](rows, 0) == 1))?$or1:($p['cmp'](columns, 0) == 1)))) {
				self['resize'](rows, columns);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['rows', 0],['columns', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('removeRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $sub2,$sub1;
			$m['HTMLTable']['removeRow'](self, row);
			self['numRows'] = $p['__op_sub']($sub1=$p['getattr'](self, 'numRows'),$sub2=1);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['removeRow'] = $method;
		$method = $pyjs__bind_method2('resize', function(rows, columns) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
				columns = arguments[2];
			}

			self['resizeColumns'](columns);
			self['resizeRows'](rows);
			return null;
		}
	, 1, [null,null,['self'],['rows'],['columns']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('resizeColumns', function(columns) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				columns = arguments[1];
			}
			var $iter3_type,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_iter,$sub3,$sub6,$sub5,$iter1_array,$iter1_nextval,$iter2_idx,$iter3_array,$iter2_nextval,$iter1_type,$iter1_idx,i,$iter4_nextval,j,$iter4_idx,$iter4_array,$sub4,$iter3_nextval,$iter2_array;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'numColumns'), columns))) {
				return null;
			}
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'numColumns'), columns) == 1))) {
				$iter1_iter = $p['range'](0, $p['getattr'](self, 'numRows'));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$iter2_iter = $p['range']($p['__op_sub']($sub3=$p['getattr'](self, 'numColumns'),$sub4=1), $p['__op_sub']($sub5=columns,$sub6=1), (typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)));
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						j = $iter2_nextval['$nextval'];
						self['removeCell'](i, j);
					}
				}
			}
			else {
				$iter3_iter = $p['range']($p['getattr'](self, 'numRows'));
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					i = $iter3_nextval['$nextval'];
					$iter4_iter = $p['range']($p['getattr'](self, 'numColumns'), columns);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						j = $iter4_nextval['$nextval'];
						self['insertCell'](i, j);
					}
				}
			}
			self['numColumns'] = columns;
			return null;
		}
	, 1, [null,null,['self'],['columns']]);
		$cls_definition['resizeColumns'] = $method;
		$method = $pyjs__bind_method2('resizeRows', function(rows) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
			}
			var $sub10,$sub9,$sub8,$sub7;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'numRows'), rows))) {
				return null;
			}
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'numRows'), rows) == -1))) {
				self['addRows'](self['getBodyElement'](), $p['__op_sub']($sub7=rows,$sub8=$p['getattr'](self, 'numRows')), $p['getattr'](self, 'numColumns'));
				self['numRows'] = rows;
			}
			else {
				while ($p['bool'](($p['cmp']($p['getattr'](self, 'numRows'), rows) == 1))) {
					self['removeRow']($p['__op_sub']($sub9=$p['getattr'](self, 'numRows'),$sub10=1));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['rows']]);
		$cls_definition['resizeRows'] = $method;
		$method = $pyjs__bind_method2('createCell', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var td;
			td = $m['HTMLTable']['createCell'](self);
			$m['DOM']['setInnerHTML'](td, '&nbsp;');
			return td;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createCell'] = $method;
		$method = $pyjs__bind_method2('clearCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var b,td;
			td = self['cellFormatter']['getElement'](row, column);
			b = $m['HTMLTable']['internalClearCell'](self, td);
			$m['DOM']['setInnerHTML'](td, '&nbsp;');
			return b;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['clearCell'] = $method;
		$method = $pyjs__bind_method2('prepareCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['prepareCell'] = $method;
		$method = $pyjs__bind_method2('prepareRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['prepareRow'] = $method;
		$method = $pyjs__bind_method2('getCellCount', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			return $p['getattr'](self, 'numColumns');
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getCellCount'] = $method;
		$method = $pyjs__bind_method2('getColumnCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'numColumns');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getColumnCount'] = $method;
		$method = $pyjs__bind_method2('getRowCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'numRows');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$method = $pyjs__bind_method2('addRows', function(table, numRows, columns) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				numRows = arguments[2];
				columns = arguments[3];
			}
			var $iter5_nextval,cell,cellNum,$iter5_idx,$iter6_idx,$iter6_type,$iter5_array,rowNum,$iter6_array,$iter5_iter,$iter5_type,td,$iter6_nextval,$iter6_iter,row;
			td = $m['DOM']['createElement']('td');
			$m['DOM']['setInnerHTML'](td, '&nbsp;');
			row = $m['DOM']['createElement']('tr');
			$iter5_iter = $p['range'](columns);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				cellNum = $iter5_nextval['$nextval'];
				cell = td['cloneNode'](true);
				row['appendChild'](cell);
			}
			$iter6_iter = $p['range'](numRows);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				rowNum = $iter6_nextval['$nextval'];
				table['appendChild'](row['cloneNode'](true));
			}
			return null;
		}
	, 1, [null,null,['self'],['table'],['numRows'],['columns']]);
		$cls_definition['addRows'] = $method;
		var $bases = new Array($m['HTMLTable']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Grid', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Grid', 'Grid', $m['Grid']);
	return this;
}; /* end pyjamas.ui.Grid */


/* end module: pyjamas.ui.Grid */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter']
*/
