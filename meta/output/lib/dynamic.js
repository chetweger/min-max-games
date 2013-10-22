/* start module: dynamic */
$pyjs['loaded_modules']['dynamic'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['dynamic']['__was_initialized__']) return $pyjs['loaded_modules']['dynamic'];
	var $m = $pyjs['loaded_modules']['dynamic'];
	$m['__repr__'] = function() { return '<module: dynamic>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	$m['__name__'] = __mod_name__;


	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	;
	$m['AjaxError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'dynamic';
		var $bases = new Array($p['RuntimeError']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AjaxError', $p['tuple']($bases), $data);
	})();
	$m['createHttpRequest'] = function() {
		var res,$pyjs_try_err;
		if ($p['bool'](typeof $wnd['XMLHttpRequest'] != 'undefined')) {
			return new XMLHttpRequest();
		}
		try {
			res = new ActiveXObject("Msxml2['XMLHTTP']");
			return res;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
			}
		}
		return null;
	};
	$m['createHttpRequest']['__name__'] = 'createHttpRequest';

	$m['createHttpRequest']['__bind_type__'] = 0;
	$m['createHttpRequest']['__args__'] = [null,null];
	$m['load'] = function(url, onreadystatechange, on_load_fn, async) {
		if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments['callee']['__args__'][3][1];
		if (typeof on_load_fn == 'undefined') on_load_fn=arguments['callee']['__args__'][4][1];
		if (typeof async == 'undefined') async=arguments['callee']['__args__'][5][1];
		var $or5,$or4,$and3,$or3,req,$and4,$pyjs_try_err,$add2,$add1,$or6;
		;
		$wnd['status'] = $p['__op_add']($add1='Loading ',$add2=url);
		req = $m['createHttpRequest']();
		if ($p['bool']((onreadystatechange === null))) {
			onreadystatechange = function(evnt) {
				var $or1,$add4,$or2,$and1,$and2,$add3,str;
				if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['getattr'](req, 'readyState'), 4))?($p['bool']($or1=$p['op_eq']($p['getattr'](req, 'status'), 200))?$or1:$p['op_eq']($p['getattr'](req, 'status'), 0)):$and1))) {
					str = $p['getattr'](req, 'responseText');
					$wnd['status'] = $p['__op_add']($add3='Loaded ',$add4=url);
					if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
						on_load_fn(evnt, req);
					}
				}
				return null;
			};
			onreadystatechange['__name__'] = 'onreadystatechange';

			onreadystatechange['__bind_type__'] = 0;
			onreadystatechange['__args__'] = [null,null,['evnt']];
		}
req['onreadystatechange'] = onreadystatechange;
		req['open']('GET', url, async);
		try {
			req['send'](null);
			if ($p['bool'](async)) {
				return null;
			}
			while ($p['bool'](true)) {
				if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](req, 'status'), 200))?$or3:($p['bool']($and3=$p['op_eq']($p['getattr'](req, 'status'), 0))?$p['getattr'](req, 'responseText'):$and3)))) {
					if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
						on_load_fn(null, req);
					}
					return req;
				}
				if ($p['bool'](($p['bool']($or5=!$p['op_eq']($p['getattr'](req, 'status'), 0))?$or5:!$p['op_eq']($p['getattr'](req, 'responseText'), '')))) {
					break;
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
			}
		}
		throw ($m['AjaxError']('Synchronous error', $p['getattr'](req, 'status')));
		return null;
	};
	$m['load']['__name__'] = 'load';

	$m['load']['__bind_type__'] = 0;
	$m['load']['__args__'] = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
	$m['inject'] = function(values, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments['callee']['__args__'][3][1];
		if (typeof names == 'undefined') names=arguments['callee']['__args__'][4][1];
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,k,$iter1_iter,$iter2_idx,v,$iter2_type,$iter2_array,$iter1_array;
		if ($p['bool']((namespace === null))) {
			namespace = $pyjs['global_namespace'];
		}
		values = $p['dict'](values);
		if ($p['bool']((names === null))) {
			$iter1_iter = values;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				k = $iter1_nextval['$nextval'];
				v = values['__getitem__'](k);
namespace[k] = v;
			}
		}
		else {
			$iter2_iter = names;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				k = $iter2_nextval['$nextval'];
				v = values['__getitem__'](k);
namespace[k] = v;
			}
		}
		return null;
	};
	$m['inject']['__name__'] = 'inject';

	$m['inject']['__bind_type__'] = 0;
	$m['inject']['__args__'] = [null,null,['values'],['namespace', null],['names', null]];
	$m['activate_css'] = function(targetnode) {
		var $iter3_idx,LC,$iter3_type,$iter3_nextval,scriptnodes,$iter3_iter,$iter3_array,fileref,sn;
		scriptnodes = $p['list'](targetnode['getElementsByTagName']('link'));
		$iter3_iter = $p['range']($p['len'](scriptnodes));
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			LC = $iter3_nextval['$nextval'];
			sn = scriptnodes['__getitem__'](LC);
			sn['parentNode']['removeChild'](sn);
			fileref = $m['DOM']['createElement']('link');
			if ($p['bool']((typeof hassattr == "undefined"?$m['hassattr']:hassattr)(sn, 'href'))) {
				fileref['href'] = $p['getattr'](sn, 'href');
			}
			else {
				fileref['text'] = $p['getattr'](sn, 'text');
			}
			fileref['rel'] = 'stylesheet';
			fileref['type'] = 'text/css';
			$doc['getElementsByTagName']('head')['item'](0)['appendChild'](fileref);
		}
		return null;
	};
	$m['activate_css']['__name__'] = 'activate_css';

	$m['activate_css']['__bind_type__'] = 0;
	$m['activate_css']['__args__'] = [null,null,['targetnode']];
	$m['activate_javascript'] = function(txt) {
		var fileref;
		fileref = $m['DOM']['createElement']('script');
		fileref['text'] = txt;
		fileref['type'] = 'text/javascript';
		fileref['language'] = 'javascript';
		fileref = fileref['cloneNode'](true);
		$doc['getElementsByTagName']('head')['item'](0)['appendChild'](fileref);
		return null;
	};
	$m['activate_javascript']['__name__'] = 'activate_javascript';

	$m['activate_javascript']['__bind_type__'] = 0;
	$m['activate_javascript']['__args__'] = [null,null,['txt']];
	$m['eval'] = function(str) {

		return eval(str);
	};
	$m['eval']['__name__'] = 'eval';

	$m['eval']['__bind_type__'] = 0;
	$m['eval']['__args__'] = [null,null,['str']];
	$m['ajax_eval'] = function(url, on_load_fn, async) {
		var onready;
		;
		onready = function(evnt, req) {
			var str;
			str = $p['getattr'](req, 'responseText');
			$m['activate_javascript'](str);
			if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
				on_load_fn();
			}
			return null;
		};
		onready['__name__'] = 'onready';

		onready['__bind_type__'] = 0;
		onready['__args__'] = [null,null,['evnt'],['req']];
		$m['load'](url, null, onready, async);
		return null;
	};
	$m['ajax_eval']['__name__'] = 'ajax_eval';

	$m['ajax_eval']['__bind_type__'] = 0;
	$m['ajax_eval']['__args__'] = [null,null,['url'],['on_load_fn'],['async']];
	$m['__imported__'] = $p['dict']([]);
	$m['ajax_import'] = function(url, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments['callee']['__args__'][3][1];
		if (typeof names == 'undefined') names=arguments['callee']['__args__'][4][1];
		var e,name,script,$iter4_nextval,req,module,$iter4_idx,name_getter,$pyjs_try_err,$iter4_type,$iter4_array,$iter4_iter;
		;
		if ($p['bool']($m['__imported__']['has_key'](url))) {
			module = $m['__imported__']['__getitem__'](url);
		}
		else {
			req = $m['load'](url, null, null, false);
			module = null;
			name_getter = $p['list']([]);
			if ($p['bool']((names === null))) {
				names = $p['list']([]);
			}
			$iter4_iter = names;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				name = $iter4_nextval['$nextval'];
				name_getter['append']($p['sprintf']("$pyjs$moduleObject['%s'] = %s;", $p['tuple']([name, name])));
			}
			script = $p['sprintf']('(function ( ) {\n$pyjs$moduleObject={};\n%s;\n%s\nreturn $pyjs$moduleObject;\n})();', $p['tuple']([$p['getattr'](req, 'responseText'), '\n'['join'](name_getter)]));
			try {
				module = $m['eval'](script);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					e = $m['sys']['exc_info']();
					throw ($m['AjaxError']($p['sprintf']('Error in %s: %s', $p['tuple']([url, $p['getattr'](e, 'message')]))));
				}
			}
			$m['__imported__']['__setitem__'](url, module);
		}
		$m['inject'](module, namespace, names);
		return null;
	};
	$m['ajax_import']['__name__'] = 'ajax_import';

	$m['ajax_import']['__bind_type__'] = 0;
	$m['ajax_import']['__args__'] = [null,null,['url'],['namespace', null],['names', null]];
	$m['load_script'] = function(url, onload, async) {
		var e,onload_fn,$add6,$add5;
		$wnd['status'] = $p['__op_add']($add5='Loading ',$add6=url);
		onload_fn = function() {
			var $add8,$add7;
			$wnd['status'] = $p['__op_add']($add7='Loaded ',$add8=url);
			if ($p['bool'](!$p['bool']((onload === null)))) {
				$m['eval'](onload);
			}
			return true;
		};
		onload_fn['__name__'] = 'onload_fn';

		onload_fn['__bind_type__'] = 0;
		onload_fn['__args__'] = [null,null];
		e = $m['DOM']['createElement']('script');
		e['src'] = url;
		e['type'] = 'text/javascript';
		e['language'] = 'javascript';
		e['defer'] = async;
		e['onload'] = onload_fn;
		$doc['getElementsByTagName']('head')['__getitem__'](0)['appendChild'](e);
		return null;
	};
	$m['load_script']['__name__'] = 'load_script';

	$m['load_script']['__bind_type__'] = 0;
	$m['load_script']['__args__'] = [null,null,['url'],['onload'],['async']];
	$m['running_timeout'] = 0;
	$m['timeout_idname'] = null;
	$m['timeout_url'] = null;
	$m['timeout_on_load_fn'] = null;
	$m['redo_timeout'] = null;
	$m['timeout_id'] = null;
	$m['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {

		$m['timeout_idname'] = idname;
		$m['timeout_url'] = url;
		$m['timeout_on_load_fn'] = on_load_fn;
		$m['redo_timeout'] = timeout;
		if ($p['bool'](($p['cmp']($m['running_timeout'], 0) == 1))) {
			return null;
		}
		$m['timeout_id'] = setTimeout((typeof do_ajax_dlink_refresh == "undefined"?$m['do_ajax_dlink_refresh']:do_ajax_dlink_refresh), timeout);
		$m['running_timeout'] = 1;
		return null;
	};
	$m['ajax_dlink_refresh']['__name__'] = 'ajax_dlink_refresh';

	$m['ajax_dlink_refresh']['__bind_type__'] = 0;
	$m['ajax_dlink_refresh']['__args__'] = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
	$m['do_ajax_dlink_refresh'] = function() {

		if ($p['bool']($p['op_eq']((typeof ajax_dlink == "undefined"?$m['ajax_dlink']:ajax_dlink)($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn']), 0))) {
			$m['timeout_id'] = null;
			$m['running_timeout'] = 0;
			return null;
		}
		$m['timeout_id'] = null;
		$m['running_timeout'] = 0;
		$m['ajax_dlink_refresh']($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn'], $m['redo_timeout']);
		return null;
	};
	$m['do_ajax_dlink_refresh']['__name__'] = 'do_ajax_dlink_refresh';

	$m['do_ajax_dlink_refresh']['__bind_type__'] = 0;
	$m['do_ajax_dlink_refresh']['__args__'] = [null,null];
	$m['ajax_dlink'] = function(idname, url, on_load_fn) {
		var body,xhtoj,onreadystatechange;
		body = $p['getattr']($doc, 'body');
		if ($p['bool']($m['timeout_id'])) {
			clearTimeout($m['timeout_id']);
		}
		onreadystatechange = function() {
			var txt,jsnode;
			if ($p['bool']($p['op_eq']($p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'readyState'), 4))) {
				jsnode = 0;
				if ($p['bool']($p['op_eq']($p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'status'), 200))) {
					txt = $p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'responseText');
					jsnode = null;
					if ($p['bool'](idname)) {
						jsnode = $m['DOM']['getElementById'](idname);
					}
					if ($p['bool']((jsnode === null))) {
						jsnode = $m['DOM']['createElement']('script');
					}
					$m['activate_javascript'](txt);
					if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
						$wnd['alert'](on_load_fn);
						(typeof test_fn == "undefined"?$m['test_fn']:test_fn)();
					}
					return 1;
				}
				else {
					jsnode = $m['DOM']['getElementById'](idname);
					if ($p['bool'](!$p['bool']((jsnode === null)))) {
						jsnode['innerHTML'] = $p['getattr']((typeof xhtoj == "undefined"?$m['xhtoj']:xhtoj), 'status');
					}
				}
			}
			return null;
		};
		onreadystatechange['__name__'] = 'onreadystatechange';

		onreadystatechange['__bind_type__'] = 0;
		onreadystatechange['__args__'] = [null,null];
		xhtoj = $m['createHttpRequest']();
		xhtoj['onreadystatechange'] = onreadystatechange;
		xhtoj['open']('GET', url, true);
		xhtoj['send']('');
		return 0;
	};
	$m['ajax_dlink']['__name__'] = 'ajax_dlink';

	$m['ajax_dlink']['__bind_type__'] = 0;
	$m['ajax_dlink']['__args__'] = [null,null,['idname'],['url'],['on_load_fn']];
	return this;
}; /* end dynamic */


/* end module: dynamic */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'sys']
*/
