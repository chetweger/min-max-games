/* start module: pyjamas.ui.HTMLTable */
$pyjs['loaded_modules']['pyjamas.ui.HTMLTable'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.HTMLTable']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.HTMLTable'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.HTMLTable'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.HTMLTable>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTMLTable';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['HTMLTable'] = $pyjs['loaded_modules']['pyjamas.ui.HTMLTable'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['CellFormatter'] = $p['___import___']('pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui', null, false);
	$m['RowFormatter'] = $p['___import___']('pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui', null, false);
	$m['widgethash'] = $p['dict']([]);
	$m['HTMLTable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.HTMLTable';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['border', 'Border width', 'BorderWidth', $p['float_int']]), $p['tuple'](['spacing', 'Spacing', 'CellSpacing', null]), $p['tuple'](['padding', 'Padding', 'CellPadding', null])]);
		$method = $pyjs__bind_method2('__init__', function() {
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
			var fc;
			if ($p['bool'](!$p['bool'](kwargs['has_key']('CellFormatter')))) {
				kwargs['__setitem__']('CellFormatter', $m['CellFormatter'](self));
			}
			if ($p['bool'](!$p['bool'](kwargs['has_key']('RowFormatter')))) {
				kwargs['__setitem__']('RowFormatter', $m['RowFormatter'](self));
			}
			self['tableListeners'] = $p['list']([]);
			self['dbltableListeners'] = $p['list']([]);
			self['widgetMap'] = $p['dict']([]);
			if ($p['bool'](kwargs['has_key']('Element'))) {
				self['tableElem'] = kwargs['pop']('Element');
				fc = $m['DOM']['getFirstChild']($p['getattr'](self, 'tableElem'));
				if ($p['bool'](fc)) {
					self['bodyElem'] = fc;
				}
				else {
					self['bodyElem'] = $m['DOM']['createTBody']();
					$m['DOM']['appendChild']($p['getattr'](self, 'tableElem'), $p['getattr'](self, 'bodyElem'));
				}
			}
			else {
				self['tableElem'] = $m['DOM']['createTable']();
				self['bodyElem'] = $m['DOM']['createTBody']();
				$m['DOM']['appendChild']($p['getattr'](self, 'tableElem'), $p['getattr'](self, 'bodyElem'));
			}
			self['setElement']($p['getattr'](self, 'tableElem'));
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'ONDBLCLICK')));
			$pyjs_kwargs_call($m['Panel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['Panel']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('addDblTableListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['dbltableListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addDblTableListener'] = $method;
		$method = $pyjs__bind_method2('addTableListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tableListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addTableListener'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,$iter2_idx,$iter1_array,child,$iter2_type,row,col,$iter2_array,$iter1_idx;
			$iter1_iter = $p['range'](self['getRowCount']());
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				row = $iter1_nextval['$nextval'];
				$iter2_iter = $p['range'](self['getCellCount'](row));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					col = $iter2_nextval['$nextval'];
					child = self['getWidget'](row, col);
					if ($p['bool']((child !== null))) {
						self['removeWidget'](child);
					}
					else {
						self['clearCell'](row, col);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('clearCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var td;
			td = self['cellFormatter']['getElement'](row, column);
			return self['internalClearCell'](td);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['clearCell'] = $method;
		$method = $pyjs__bind_method2('getCellCount', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			return 0;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getCellCount'] = $method;
		$method = $pyjs__bind_method2('getCellFormatter', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'cellFormatter');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCellFormatter'] = $method;
		$method = $pyjs__bind_method2('getCellPadding', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute']($p['getattr'](self, 'tableElem'), 'cellPadding');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCellPadding'] = $method;
		$method = $pyjs__bind_method2('getCellSpacing', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute']($p['getattr'](self, 'tableElem'), 'cellSpacing');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCellSpacing'] = $method;
		$method = $pyjs__bind_method2('getHTML', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var element;
			element = self['cellFormatter']['getElement'](row, column);
			return $m['DOM']['getInnerHTML'](element);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getRowCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 0;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$method = $pyjs__bind_method2('getRowFormatter', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'rowFormatter');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowFormatter'] = $method;
		$method = $pyjs__bind_method2('getText', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var element;
			self['checkCellBounds'](row, column);
			element = self['cellFormatter']['getElement'](row, column);
			return $m['DOM']['getInnerText'](element);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('getWidget', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			if (typeof column == 'undefined') column=arguments['callee']['__args__'][4][1];
			var key;
			if ($p['bool']((column === null))) {
				key = self['computeKeyForElement'](row);
			}
			else {
				self['checkCellBounds'](row, column);
				key = self['computeKey'](row, column);
			}
			if ($p['bool']((key === null))) {
				return null;
			}
			return $p['getattr'](self, 'widgetMap')['__getitem__'](key);
		}
	, 1, [null,null,['self'],['row'],['column', null]]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method2('getIndex', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $iter3_idx,$iter4_nextval,$iter3_type,col,$iter4_idx,$iter3_iter,$iter4_type,$iter3_array,$iter4_array,$iter4_iter,$iter3_nextval,row;
			$iter3_iter = $p['xrange'](self['getDOMRowCount']());
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				row = $iter3_nextval['$nextval'];
				$iter4_iter = $p['xrange'](self['getDOMCellCount'](row));
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					col = $iter4_nextval['$nextval'];
					if ($p['bool']((self['getWidget'](row, col) === widget))) {
						return $p['tuple']([row, col]);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getIndex'] = $method;
		$method = $pyjs__bind_method2('getIndexedChild', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['getWidget'](index['__getitem__'](0), index['__getitem__'](1));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getIndexedChild'] = $method;
		$method = $pyjs__bind_method2('addIndexedItem', function(index, item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				item = arguments[2];
			}
			var row,col;
			var $tupleassign1 = $p['__ass_unpack'](index, 2, null);
			row = $tupleassign1[0];
			col = $tupleassign1[1];
			while ($p['bool'](((($p['cmp'](row, self['getDOMRowCount']()))|1) == 1))) {
				self['insertRow'](self['getDOMRowCount']());
			}
			while ($p['bool'](((($p['cmp'](col, self['getDOMCellCount'](row)))|1) == 1))) {
				self['insertCells'](row, self['getDOMCellCount'](row), 1);
			}
			self['setWidget'](row, col, item);
			return null;
		}
	, 1, [null,null,['self'],['index'],['item']]);
		$cls_definition['addIndexedItem'] = $method;
		$method = $pyjs__bind_method2('add', function(item, row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}

			self['addIndexedItem']($p['tuple']([row, col]), item);
			return null;
		}
	, 1, [null,null,['self'],['item'],['row'],['col']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('isCellPresent', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var $or4,$or1,$or3,$or2;
			if ($p['bool'](($p['bool']($or1=((($p['cmp'](row, self['getRowCount']()))|1) == 1))?$or1:($p['cmp'](row, 0) == -1)))) {
				return false;
			}
			if ($p['bool'](($p['bool']($or3=($p['cmp'](column, 0) == -1))?$or3:((($p['cmp'](column, self['getCellCount'](row)))|1) == 1)))) {
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['isCellPresent'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['widgetMap']['itervalues']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('_onBrowserEvent', function(event, event_type) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				event_type = arguments[2];
			}
			var body,$iter5_nextval,column,$iter5_array,$and3,tr,$and4,lists,listener,$iter5_iter,$and2,$and1,$iter5_idx,$iter5_type,td,row;
			td = self['getEventTargetCell'](event);
			if ($p['bool']((td === null))) {
				return null;
			}
			tr = $m['DOM']['getParent'](td);
			body = $m['DOM']['getParent'](tr);
			row = $m['DOM']['getChildIndex'](body, tr);
			column = $m['DOM']['getChildIndex'](tr, td);
			if ($p['bool']($p['op_eq'](event_type, 'dblclick'))) {
				lists = $p['getattr'](self, 'dbltableListeners');
			}
			else {
				lists = $p['getattr'](self, 'tableListeners');
			}
			$iter5_iter = lists;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				listener = $iter5_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and1=$p['op_eq'](event_type, 'click'))?$p['hasattr'](listener, 'onCellClicked'):$and1))) {
					listener['onCellClicked'](self, row, column);
				}
				else if ($p['bool'](($p['bool']($and3=$p['op_eq'](event_type, 'dblclick'))?$p['hasattr'](listener, 'onCellDoubleClicked'):$and3))) {
					listener['onCellDoubleClicked'](self, row, column);
				}
				else {
					listener(self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event'],['event_type']]);
		$cls_definition['_onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and6,$and5,event_type;
			event_type = $m['DOM']['eventGetType'](event);
			if ($p['bool'](($p['bool']($and5=!$p['op_eq'](event_type, 'dblclick'))?!$p['op_eq'](event_type, 'click'):$and5))) {
				return null;
			}
			self['_onBrowserEvent'](event, event_type);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			self['removeWidget'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('removeDblClickTableListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['dbltableListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeDblClickTableListener'] = $method;
		$method = $pyjs__bind_method2('removeTableListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tableListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeTableListener'] = $method;
		$method = $pyjs__bind_method2('setBorderWidth', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			if ($p['bool']((width === null))) {
				$m['DOM']['removeAttribute']($p['getattr'](self, 'tableElem'), 'border');
			}
			else {
				$m['DOM']['setAttribute']($p['getattr'](self, 'tableElem'), 'border', $p['str'](width));
			}
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setBorderWidth'] = $method;
		$method = $pyjs__bind_method2('setCellPadding', function(padding) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				padding = arguments[1];
			}

			$m['DOM']['setAttribute']($p['getattr'](self, 'tableElem'), 'cellPadding', $p['str'](padding));
			return null;
		}
	, 1, [null,null,['self'],['padding']]);
		$cls_definition['setCellPadding'] = $method;
		$method = $pyjs__bind_method2('setCellSpacing', function(spacing) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spacing = arguments[1];
			}

			$m['DOM']['setAttribute']($p['getattr'](self, 'tableElem'), 'cellSpacing', $p['str'](spacing));
			return null;
		}
	, 1, [null,null,['self'],['spacing']]);
		$cls_definition['setCellSpacing'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(row, column, html) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				html = arguments[3];
			}
			var td;
			self['prepareCell'](row, column);
			td = self['cleanCell'](row, column);
			if ($p['bool']((html !== null))) {
				$m['DOM']['setInnerHTML'](td, html);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setText', function(row, column, text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				text = arguments[3];
			}
			var td;
			self['prepareCell'](row, column);
			td = self['cleanCell'](row, column);
			if ($p['bool']((text !== null))) {
				$m['DOM']['setInnerText'](td, text);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('setWidget', function(row, column, widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				widget = arguments[3];
			}
			var td;
			self['prepareCell'](row, column);
			if ($p['bool']((widget === null))) {
				return null;
			}
			widget['removeFromParent']();
			td = self['cleanCell'](row, column);
			self['_mapWidget'](widget);
			self['adopt'](widget, td);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method2('_mapWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var widget_hash,element;
			widget_hash = widget;
			element = widget['getElement']();
			$m['widgethash']['__setitem__'](element, widget_hash);
			$p['getattr'](self, 'widgetMap')['__setitem__'](widget_hash, widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['_mapWidget'] = $method;
		$method = $pyjs__bind_method2('cleanCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var td;
			td = self['cellFormatter']['getRawElement'](row, column);
			self['internalClearCell'](td);
			return td;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['cleanCell'] = $method;
		$method = $pyjs__bind_method2('computeKey', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var element,child;
			element = self['cellFormatter']['getRawElement'](row, column);
			child = $m['DOM']['getFirstChild'](element);
			if ($p['bool']((child === null))) {
				return null;
			}
			return self['computeKeyForElement'](child);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['computeKey'] = $method;
		$method = $pyjs__bind_method2('computeKeyForElement', function(widgetElement) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widgetElement = arguments[1];
			}

			return $m['widgethash']['get'](widgetElement);
		}
	, 1, [null,null,['self'],['widgetElement']]);
		$cls_definition['computeKeyForElement'] = $method;
		$method = $pyjs__bind_method2('removeWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['disown'](widget);
			self['_unmapWidget'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['removeWidget'] = $method;
		$method = $pyjs__bind_method2('_unmapWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var element;
			element = widget['getElement']();
			$p['getattr'](self, 'widgetMap')['__delitem__'](self['computeKeyForElement'](element));
			$m['widgethash']['__delitem__'](element);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['_unmapWidget'] = $method;
		$method = $pyjs__bind_method2('checkCellBounds', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var cellSize;
			self['checkRowBounds'](row);
			cellSize = self['getCellCount'](row);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['checkCellBounds'] = $method;
		$method = $pyjs__bind_method2('checkRowBounds', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var rowSize;
			rowSize = self['getRowCount']();
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['checkRowBounds'] = $method;
		$method = $pyjs__bind_method2('createCell', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['createTD']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createCell'] = $method;
		$method = $pyjs__bind_method2('getBodyElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'bodyElem');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBodyElement'] = $method;
		$method = $pyjs__bind_method2('getDOMCellCount', function(element, row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				row = arguments[2];
			}
			if (typeof row == 'undefined') row=arguments['callee']['__args__'][4][1];

			if ($p['bool']((row === null))) {
				return self['getDOMCellCountImpl']($p['getattr'](self, 'bodyElem'), element);
			}
			return self['getDOMCellCountImpl'](element, row);
		}
	, 1, [null,null,['self'],['element'],['row', null]]);
		$cls_definition['getDOMCellCount'] = $method;
		$method = $pyjs__bind_method2('getDOMCellCountImpl', function(element, row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				row = arguments[2];
			}

			return $p['getattr']($p['getattr'](element['rows']['item'](row), 'cells'), 'length');
		}
	, 1, [null,null,['self'],['element'],['row']]);
		$cls_definition['getDOMCellCountImpl'] = $method;
		$method = $pyjs__bind_method2('getDOMRowCount', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments['callee']['__args__'][3][1];

			if ($p['bool']((element === null))) {
				element = $p['getattr'](self, 'bodyElem');
			}
			return self['getDOMRowCountImpl'](element);
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['getDOMRowCount'] = $method;
		$method = $pyjs__bind_method2('getDOMRowCountImpl', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			return $p['getattr']($p['getattr'](element, 'rows'), 'length');
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['getDOMRowCountImpl'] = $method;
		$method = $pyjs__bind_method2('getEventTargetCell', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and8,body,tr,$and7,tagName,td;
			td = $m['DOM']['eventGetTarget'](event);
			while ($p['bool']((td !== null))) {
				tagName = $m['DOM']['getAttribute'](td, 'tagName');
				if ($p['bool'](($p['bool']($and7=(tagName !== null))?$p['op_eq'](tagName['lower'](), 'td'):$and7))) {
					tr = $m['DOM']['getParent'](td);
					body = $m['DOM']['getParent'](tr);
					if ($p['bool']($m['DOM']['compare'](body, $p['getattr'](self, 'bodyElem')))) {
						return td;
					}
				}
				if ($p['bool']($m['DOM']['compare'](td, $p['getattr'](self, 'bodyElem')))) {
					return null;
				}
				td = $m['DOM']['getParent'](td);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['getEventTargetCell'] = $method;
		$method = $pyjs__bind_method2('insertCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var tr,td;
			tr = self['rowFormatter']['getRow']($p['getattr'](self, 'bodyElem'), row);
			td = self['createCell']();
			$m['DOM']['insertChild'](tr, td, column);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['insertCell'] = $method;
		$method = $pyjs__bind_method2('insertCells', function(row, column, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				count = arguments[3];
			}
			var i,$iter6_idx,$add3,tr,$iter6_type,$iter6_array,$add4,$iter6_iter,$iter6_nextval,td;
			tr = self['rowFormatter']['getRow']($p['getattr'](self, 'bodyElem'), row);
			$iter6_iter = $p['range'](column, $p['__op_add']($add3=column,$add4=count));
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				i = $iter6_nextval['$nextval'];
				td = self['createCell']();
				$m['DOM']['insertChild'](tr, td, i);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['count']]);
		$cls_definition['insertCells'] = $method;
		$method = $pyjs__bind_method2('insertRow', function(beforeRow) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				beforeRow = arguments[1];
			}
			var tr;
			if ($p['bool'](!$p['op_eq'](beforeRow, self['getRowCount']()))) {
				self['checkRowBounds'](beforeRow);
			}
			tr = $m['DOM']['createTR']();
			$m['DOM']['insertChild']($p['getattr'](self, 'bodyElem'), tr, beforeRow);
			return beforeRow;
		}
	, 1, [null,null,['self'],['beforeRow']]);
		$cls_definition['insertRow'] = $method;
		$method = $pyjs__bind_method2('internalClearCell', function(td) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				td = arguments[1];
			}
			var widget,maybeChild;
			maybeChild = $m['DOM']['getFirstChild'](td);
			widget = null;
			if ($p['bool']((maybeChild !== null))) {
				widget = self['getWidget'](maybeChild);
			}
			if ($p['bool']((widget !== null))) {
				self['removeWidget'](widget);
				return true;
			}
			$m['DOM']['setInnerHTML'](td, '');
			return false;
		}
	, 1, [null,null,['self'],['td']]);
		$cls_definition['internalClearCell'] = $method;
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
		$method = $pyjs__bind_method2('removeCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var tr,td;
			self['checkCellBounds'](row, column);
			td = self['cleanCell'](row, column);
			tr = self['rowFormatter']['getRow']($p['getattr'](self, 'bodyElem'), row);
			$m['DOM']['removeChild'](tr, td);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['removeCell'] = $method;
		$method = $pyjs__bind_method2('removeRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $iter7_nextval,column,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
			$iter7_iter = $p['range'](self['getCellCount'](row));
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				column = $iter7_nextval['$nextval'];
				self['cleanCell'](row, column);
			}
			$m['DOM']['removeChild']($p['getattr'](self, 'bodyElem'), self['rowFormatter']['getRow']($p['getattr'](self, 'bodyElem'), row));
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['removeRow'] = $method;
		$method = $pyjs__bind_method2('setCellFormatter', function(cellFormatter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cellFormatter = arguments[1];
			}

			self['cellFormatter'] = cellFormatter;
			return null;
		}
	, 1, [null,null,['self'],['cellFormatter']]);
		$cls_definition['setCellFormatter'] = $method;
		$method = $pyjs__bind_method2('setRowFormatter', function(rowFormatter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rowFormatter = arguments[1];
			}

			self['rowFormatter'] = rowFormatter;
			return null;
		}
	, 1, [null,null,['self'],['rowFormatter']]);
		$cls_definition['setRowFormatter'] = $method;
		var $bases = new Array($m['Panel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HTMLTable', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HTMLTable', 'HTMLTable', $m['HTMLTable']);
	return this;
}; /* end pyjamas.ui.HTMLTable */


/* end module: pyjamas.ui.HTMLTable */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel', 'pyjamas.ui.Event', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter']
*/
