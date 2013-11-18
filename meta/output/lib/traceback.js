/* start module: traceback */
$pyjs['loaded_modules']['traceback'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['traceback']['__was_initialized__']) return $pyjs['loaded_modules']['traceback'];
	var $m = $pyjs['loaded_modules']['traceback'];
	$m['__repr__'] = function() { return '<module: traceback>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'traceback';
	$m['__name__'] = __mod_name__;


	$m['sys'] = $p['___import___']('sys', null);
	$m['format_exception'] = function(etype, value, tb, limit) {
		if (typeof limit == 'undefined') limit=arguments['callee']['__args__'][5][1];

		return $pyjs_kwargs_call($m['sys'], '_get_traceback_list', null, null, [{'limit':limit}, value, tb]);
	};
	$m['format_exception']['__name__'] = 'format_exception';

	$m['format_exception']['__bind_type__'] = 0;
	$m['format_exception']['__args__'] = [null,null,['etype'],['value'],['tb'],['limit', null]];
	$m['print_exc'] = function() {

		$p['printFunc']([$m['sys']['_get_traceback_list']((typeof value == "undefined"?$m['value']:value), (typeof tb == "undefined"?$m['tb']:tb), null)], 1);
		return null;
	};
	$m['print_exc']['__name__'] = 'print_exc';

	$m['print_exc']['__bind_type__'] = 0;
	$m['print_exc']['__args__'] = [null,null];
	return this;
}; /* end traceback */


/* end module: traceback */


/*
PYJS_DEPS: ['sys']
*/
