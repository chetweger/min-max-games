/* start module: pyjamas.Window */
$pyjs['loaded_modules']['pyjamas.Window'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Window']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Window'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Window'];
	$m['__repr__'] = function() { return '<module: pyjamas.Window>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Window';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['Window'] = $pyjs['loaded_modules']['pyjamas.Window'];


	$m['closingListeners'] = $p['list']([]);
	$m['resizeListeners'] = $p['list']([]);
	$m['Location'] = $p['___import___']('pyjamas.Location', 'pyjamas', null, false);
	$m['init_listeners'] = function() {

		if ($p['bool'](!$p['bool']($m['closingListeners']))) {
			$m['closingListeners'] = $p['list']([]);
		}
		if ($p['bool'](!$p['bool']($m['resizeListeners']))) {
			$m['resizeListeners'] = $p['list']([]);
		}
		return null;
	};
	$m['init_listeners']['__name__'] = 'init_listeners';

	$m['init_listeners']['__bind_type__'] = 0;
	$m['init_listeners']['__args__'] = [null,null];
	$m['addWindowCloseListener'] = function(listener) {

		$m['closingListeners']['append'](listener);
		return null;
	};
	$m['addWindowCloseListener']['__name__'] = 'addWindowCloseListener';

	$m['addWindowCloseListener']['__bind_type__'] = 0;
	$m['addWindowCloseListener']['__args__'] = [null,null,['listener']];
	$m['addWindowResizeListener'] = function(listener) {

		$m['resizeListeners']['append'](listener);
		return null;
	};
	$m['addWindowResizeListener']['__name__'] = 'addWindowResizeListener';

	$m['addWindowResizeListener']['__bind_type__'] = 0;
	$m['addWindowResizeListener']['__args__'] = [null,null,['listener']];
	$m['removeWindowCloseListener'] = function(listener) {

		$m['closingListeners']['remove'](listener);
		return null;
	};
	$m['removeWindowCloseListener']['__name__'] = 'removeWindowCloseListener';

	$m['removeWindowCloseListener']['__bind_type__'] = 0;
	$m['removeWindowCloseListener']['__args__'] = [null,null,['listener']];
	$m['removeWindowResizeListener'] = function(listener) {

		$m['resizeListeners']['remove'](listener);
		return null;
	};
	$m['removeWindowResizeListener']['__name__'] = 'removeWindowResizeListener';

	$m['removeWindowResizeListener']['__bind_type__'] = 0;
	$m['removeWindowResizeListener']['__args__'] = [null,null,['listener']];
	$m['alert'] = function(msg) {

		$wnd['alert'](msg);
		return null;
	};
	$m['alert']['__name__'] = 'alert';

	$m['alert']['__bind_type__'] = 0;
	$m['alert']['__args__'] = [null,null,['msg']];
	$m['confirm'] = function(msg) {

		return $wnd['confirm'](msg);
	};
	$m['confirm']['__name__'] = 'confirm';

	$m['confirm']['__bind_type__'] = 0;
	$m['confirm']['__args__'] = [null,null,['msg']];
	$m['prompt'] = function(msg, defaultReply) {
		if (typeof defaultReply == 'undefined') defaultReply=arguments['callee']['__args__'][3][1];

		return $wnd['prompt'](msg, defaultReply);
	};
	$m['prompt']['__name__'] = 'prompt';

	$m['prompt']['__bind_type__'] = 0;
	$m['prompt']['__args__'] = [null,null,['msg'],['defaultReply', '']];
	$m['enableScrolling'] = function(enable) {
		var $and1,$and2,$or1,$or2;
		$p['getattr']($p['getattr']($doc, 'body'), 'style')['overflow'] = ($p['bool']($or1=($p['bool']($and1=enable)?'auto':$and1))?$or1:'hidden');
		return null;
	};
	$m['enableScrolling']['__name__'] = 'enableScrolling';

	$m['enableScrolling']['__bind_type__'] = 0;
	$m['enableScrolling']['__args__'] = [null,null,['enable']];
	$m['scrollBy'] = function(x, y) {

		$wnd['scrollBy'](x, y);
		return null;
	};
	$m['scrollBy']['__name__'] = 'scrollBy';

	$m['scrollBy']['__bind_type__'] = 0;
	$m['scrollBy']['__args__'] = [null,null,['x'],['y']];
	$m['scroll'] = function(x, y) {

		$wnd['scroll'](x, y);
		return null;
	};
	$m['scroll']['__name__'] = 'scroll';

	$m['scroll']['__bind_type__'] = 0;
	$m['scroll']['__args__'] = [null,null,['x'],['y']];
	$m['getClientHeight'] = function() {

		return $wnd["innerHeight"];
	};
	$m['getClientHeight']['__name__'] = 'getClientHeight';

	$m['getClientHeight']['__bind_type__'] = 0;
	$m['getClientHeight']['__args__'] = [null,null];
	$m['getClientWidth'] = function() {

		return $wnd["innerWidth"];
	};
	$m['getClientWidth']['__name__'] = 'getClientWidth';

	$m['getClientWidth']['__bind_type__'] = 0;
	$m['getClientWidth']['__args__'] = [null,null];
	$m['getScrollLeft'] = function() {

		return $p['getattr']((typeof getDocumentRoot == "undefined"?$m['getDocumentRoot']:getDocumentRoot)(), 'scrollLeft');
		return null;
	};
	$m['getScrollLeft']['__name__'] = 'getScrollLeft';

	$m['getScrollLeft']['__bind_type__'] = 0;
	$m['getScrollLeft']['__args__'] = [null,null];
	$m['getScrollTop'] = function() {

		return $p['getattr']((typeof getDocumentRoot == "undefined"?$m['getDocumentRoot']:getDocumentRoot)(), 'scrollTop');
		return null;
	};
	$m['getScrollTop']['__name__'] = 'getScrollTop';

	$m['getScrollTop']['__bind_type__'] = 0;
	$m['getScrollTop']['__args__'] = [null,null];
	$m['getDocumentRoot'] = function() {

		if ($p['bool']($p['op_eq']($p['getattr']($doc, 'compatMode'), 'CSS1Compat'))) {
			return $p['getattr']($doc, 'documentElement');
		}
		return $p['getattr']($doc, 'body');
	};
	$m['getDocumentRoot']['__name__'] = 'getDocumentRoot';

	$m['getDocumentRoot']['__bind_type__'] = 0;
	$m['getDocumentRoot']['__args__'] = [null,null];
	$m['setLocation'] = function(url) {
		var w;
		w = $wnd;
		w['location'] = url;
		return null;
	};
	$m['setLocation']['__name__'] = 'setLocation';

	$m['setLocation']['__bind_type__'] = 0;
	$m['setLocation']['__args__'] = [null,null,['url']];
	$m['location'] = null;
	$m['getLocation'] = function() {
		var l;
		if ($p['bool'](!$p['bool']($m['location']))) {
			l = $wnd["location"];
			$m['location'] = $m['Location']['Location'](l);
		}
		return $m['location'];
	};
	$m['getLocation']['__name__'] = 'getLocation';

	$m['getLocation']['__bind_type__'] = 0;
	$m['getLocation']['__args__'] = [null,null];
	$m['getTitle'] = function() {

		return $doc["title"];
	};
	$m['getTitle']['__name__'] = 'getTitle';

	$m['getTitle']['__bind_type__'] = 0;
	$m['getTitle']['__args__'] = [null,null];
	$m['open'] = function(url, name, features) {

		return $wnd['open'](url, name, features);
	};
	$m['open']['__name__'] = 'open';

	$m['open']['__bind_type__'] = 0;
	$m['open']['__args__'] = [null,null,['url'],['name'],['features']];
	$m['setMargin'] = function(size) {

		$p['getattr']($p['getattr']($doc, 'body'), 'style')['margin'] = size;
		return null;
	};
	$m['setMargin']['__name__'] = 'setMargin';

	$m['setMargin']['__bind_type__'] = 0;
	$m['setMargin']['__args__'] = [null,null,['size']];
	$m['setTitle'] = function(title) {
		var d;
		d = $doc;
		d['title'] = title;
		return null;
	};
	$m['setTitle']['__name__'] = 'setTitle';

	$m['setTitle']['__bind_type__'] = 0;
	$m['setTitle']['__args__'] = [null,null,['title']];
	$m['setOnError'] = function(onError) {

		if ($p['bool'](!$p['bool']($p['callable'](onError)))) {
			throw ($p['TypeError']('object is not callable'));
		}
    $wnd['onerror']=function(msg, url, linenumber){
        return onError(msg, url, linenumber);
    }
    
	};
	$m['setOnError']['__name__'] = 'setOnError';

	$m['setOnError']['__bind_type__'] = 0;
	$m['setOnError']['__args__'] = [null,null,['onError']];
	$m['onError'] = function(msg, url, linenumber) {
		var tracestr,dialog;
		dialog = $doc['createElement']('div');
		dialog['className'] = 'errordialog';
		tracestr = $m['sys']['trackstackstr']($pyjs['trackstack']['slice'](0,-1));
		tracestr = tracestr['$$replace']('\n', '<br />\n&nbsp;&nbsp;&nbsp;');
		dialog['innerHTML'] = $p['sprintf']('&nbsp;<b style="color:red">JavaScript Error: </b>\n%s at line number %d. Please inform webmaster.\n<br />&nbsp;&nbsp;&nbsp;%s\n', $p['tuple']([msg, linenumber, tracestr]));
		$doc['body']['appendChild'](dialog);
		return true;
	};
	$m['onError']['__name__'] = 'onError';

	$m['onError']['__bind_type__'] = 0;
	$m['onError']['__args__'] = [null,null,['msg'],['url'],['linenumber']];
	$m['onClosed'] = function() {

		(typeof fireClosedImpl == "undefined"?$m['fireClosedImpl']:fireClosedImpl)();
		return null;
	};
	$m['onClosed']['__name__'] = 'onClosed';

	$m['onClosed']['__bind_type__'] = 0;
	$m['onClosed']['__args__'] = [null,null];
	$m['onClosing'] = function() {

		return (typeof fireClosingImpl == "undefined"?$m['fireClosingImpl']:fireClosingImpl)();
	};
	$m['onClosing']['__name__'] = 'onClosing';

	$m['onClosing']['__bind_type__'] = 0;
	$m['onClosing']['__args__'] = [null,null];
	$m['onResize'] = function() {

		(typeof fireResizedImpl == "undefined"?$m['fireResizedImpl']:fireResizedImpl)();
		return null;
	};
	$m['onResize']['__name__'] = 'onResize';

	$m['onResize']['__bind_type__'] = 0;
	$m['onResize']['__args__'] = [null,null];
	$m['fireClosedAndCatch'] = function(handler) {

 		return null;
	};
	$m['fireClosedAndCatch']['__name__'] = 'fireClosedAndCatch';

	$m['fireClosedAndCatch']['__bind_type__'] = 0;
	$m['fireClosedAndCatch']['__args__'] = [null,null,['handler']];
	$m['fireClosedImpl'] = function() {
		var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
		$iter1_iter = $m['closingListeners'];
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			listener = $iter1_nextval['$nextval'];
			listener['onWindowClosed']();
		}
		return null;
	};
	$m['fireClosedImpl']['__name__'] = 'fireClosedImpl';

	$m['fireClosedImpl']['__bind_type__'] = 0;
	$m['fireClosedImpl']['__args__'] = [null,null];
	$m['fireClosingAndCatch'] = function(handler) {

 		return null;
	};
	$m['fireClosingAndCatch']['__name__'] = 'fireClosingAndCatch';

	$m['fireClosingAndCatch']['__bind_type__'] = 0;
	$m['fireClosingAndCatch']['__args__'] = [null,null,['handler']];
	$m['resize'] = function(width, height) {

		$wnd['resizeTo'](width, height);
		return null;
	};
	$m['resize']['__name__'] = 'resize';

	$m['resize']['__bind_type__'] = 0;
	$m['resize']['__args__'] = [null,null,['width'],['height']];
	$m['resizeBy'] = function(width, height) {

		$wnd['resizeBy'](width, height);
		return null;
	};
	$m['resizeBy']['__name__'] = 'resizeBy';

	$m['resizeBy']['__bind_type__'] = 0;
	$m['resizeBy']['__args__'] = [null,null,['width'],['height']];
	$m['fireClosingImpl'] = function() {
		var $iter2_nextval,$iter2_type,$iter2_iter,ret,listener,$iter2_idx,msg,$iter2_array;
		ret = null;
		$iter2_iter = $m['closingListeners'];
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			listener = $iter2_nextval['$nextval'];
			msg = listener['onWindowClosing']();
			if ($p['bool']((ret === null))) {
				ret = msg;
			}
		}
		return ret;
	};
	$m['fireClosingImpl']['__name__'] = 'fireClosingImpl';

	$m['fireClosingImpl']['__bind_type__'] = 0;
	$m['fireClosingImpl']['__args__'] = [null,null];
	$m['fireResizedAndCatch'] = function(handler) {

 		return null;
	};
	$m['fireResizedAndCatch']['__name__'] = 'fireResizedAndCatch';

	$m['fireResizedAndCatch']['__bind_type__'] = 0;
	$m['fireResizedAndCatch']['__args__'] = [null,null,['handler']];
	$m['fireResizedImpl'] = function() {
		var $iter3_idx,$iter3_nextval,$iter3_type,listener,$iter3_iter,$iter3_array;
		$iter3_iter = $m['resizeListeners'];
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			listener = $iter3_nextval['$nextval'];
			listener['onWindowResized']($m['getClientWidth'](), $m['getClientHeight']());
		}
		return null;
	};
	$m['fireResizedImpl']['__name__'] = 'fireResizedImpl';

	$m['fireResizedImpl']['__bind_type__'] = 0;
	$m['fireResizedImpl']['__args__'] = [null,null];
	$m['init'] = function() {

		$m['sys'] = $p['___import___']('sys', 'pyjamas');
		$m['init_listeners']();

    $wnd['__pygwt_initHandlers'](
        function() {
            $m['onResize']();
        },
        function() {
            return $m['onClosing']();
        },
        function() {
            $m['onClosed']();
            /*$wnd['onresize'] = null;
            $wnd['onbeforeclose'] = null;
            $wnd['onclose'] = null;*/
        }
    );
    
		$m['setOnError']($m['onError']);
		return null;
	};
	$m['init']['__name__'] = 'init';

	$m['init']['__bind_type__'] = 0;
	$m['init']['__args__'] = [null,null];
	$m['init']();
	return this;
}; /* end pyjamas.Window */


/* end module: pyjamas.Window */


/*
PYJS_DEPS: ['pyjamas.Location', 'pyjamas', 'sys']
*/
