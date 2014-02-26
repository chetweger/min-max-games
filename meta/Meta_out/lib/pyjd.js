/* start module: pyjd */
$pyjs['loaded_modules']['pyjd'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjd']['__was_initialized__']) return $pyjs['loaded_modules']['pyjd'];
	var $m = $pyjs['loaded_modules']['pyjd'];
	$m['__repr__'] = function() { return '<module: pyjd>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjd';
	$m['__name__'] = __mod_name__;


	$m['is_desktop'] = false;
	$m['setup'] = function(application, appdir, width, height) {
		if (typeof appdir == 'undefined') appdir=arguments['callee']['__args__'][3][1];
		if (typeof width == 'undefined') width=arguments['callee']['__args__'][4][1];
		if (typeof height == 'undefined') height=arguments['callee']['__args__'][5][1];

 		return null;
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null,['application'],['appdir', null],['width', 800],['height', 600]];
	$m['run'] = function(one_event, block) {
		if (typeof one_event == 'undefined') one_event=arguments['callee']['__args__'][2][1];
		if (typeof block == 'undefined') block=arguments['callee']['__args__'][3][1];

 		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null,['one_event', false],['block', true]];
	return this;
}; /* end pyjd */


/* end module: pyjd */


