/* start module: cgi */
$pyjs['loaded_modules']['cgi'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['cgi']['__was_initialized__']) return $pyjs['loaded_modules']['cgi'];
	var $m = $pyjs['loaded_modules']['cgi'];
	$m['__repr__'] = function() { return '<module: cgi>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'cgi';
	$m['__name__'] = __mod_name__;


	$m['escape'] = function(s, quote) {
		if (typeof quote == 'undefined') quote=arguments['callee']['__args__'][3][1];

		s = s['$$replace']('&', '&amp;');
		s = s['$$replace']('<', '&lt;');
		s = s['$$replace']('>', '&gt;');
		if ($p['bool'](quote)) {
			s = s['$$replace']('"', '&quot;');
		}
		return s;
	};
	$m['escape']['__name__'] = 'escape';

	$m['escape']['__bind_type__'] = 0;
	$m['escape']['__args__'] = [null,null,['s'],['quote', null]];
	return this;
}; /* end cgi */


/* end module: cgi */


