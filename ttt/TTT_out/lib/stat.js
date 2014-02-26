/* start module: stat */
$pyjs['loaded_modules']['stat'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['stat']['__was_initialized__']) return $pyjs['loaded_modules']['stat'];
	var $m = $pyjs['loaded_modules']['stat'];
	$m['__repr__'] = function() { return '<module: stat>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'stat';
	$m['__name__'] = __mod_name__;


	$m['ST_MODE'] = 0;
	$m['ST_INO'] = 1;
	$m['ST_DEV'] = 2;
	$m['ST_NLINK'] = 3;
	$m['ST_UID'] = 4;
	$m['ST_GID'] = 5;
	$m['ST_SIZE'] = 6;
	$m['ST_ATIME'] = 7;
	$m['ST_MTIME'] = 8;
	$m['ST_CTIME'] = 9;
	$m['S_IMODE'] = function(mode) {

		return (mode)&(4095);
	};
	$m['S_IMODE']['__name__'] = 'S_IMODE';

	$m['S_IMODE']['__bind_type__'] = 0;
	$m['S_IMODE']['__args__'] = [null,null,['mode']];
	$m['S_IFMT'] = function(mode) {

		return (mode)&(61440);
	};
	$m['S_IFMT']['__name__'] = 'S_IFMT';

	$m['S_IFMT']['__bind_type__'] = 0;
	$m['S_IFMT']['__args__'] = [null,null,['mode']];
	$m['S_IFDIR'] = 16384;
	$m['S_IFCHR'] = 8192;
	$m['S_IFBLK'] = 24576;
	$m['S_IFREG'] = 32768;
	$m['S_IFIFO'] = 4096;
	$m['S_IFLNK'] = 40960;
	$m['S_IFSOCK'] = 49152;
	$m['S_ISDIR'] = function(mode) {

		return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFDIR']);
	};
	$m['S_ISDIR']['__name__'] = 'S_ISDIR';

	$m['S_ISDIR']['__bind_type__'] = 0;
	$m['S_ISDIR']['__args__'] = [null,null,['mode']];
	$m['S_ISCHR'] = function(mode) {

		return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFCHR']);
	};
	$m['S_ISCHR']['__name__'] = 'S_ISCHR';

	$m['S_ISCHR']['__bind_type__'] = 0;
	$m['S_ISCHR']['__args__'] = [null,null,['mode']];
	$m['S_ISBLK'] = function(mode) {

		return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFBLK']);
	};
	$m['S_ISBLK']['__name__'] = 'S_ISBLK';

	$m['S_ISBLK']['__bind_type__'] = 0;
	$m['S_ISBLK']['__args__'] = [null,null,['mode']];
	$m['S_ISREG'] = function(mode) {

		return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFREG']);
	};
	$m['S_ISREG']['__name__'] = 'S_ISREG';

	$m['S_ISREG']['__bind_type__'] = 0;
	$m['S_ISREG']['__args__'] = [null,null,['mode']];
	$m['S_ISFIFO'] = function(mode) {

		return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFIFO']);
	};
	$m['S_ISFIFO']['__name__'] = 'S_ISFIFO';

	$m['S_ISFIFO']['__bind_type__'] = 0;
	$m['S_ISFIFO']['__args__'] = [null,null,['mode']];
	$m['S_ISLNK'] = function(mode) {

		return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFLNK']);
	};
	$m['S_ISLNK']['__name__'] = 'S_ISLNK';

	$m['S_ISLNK']['__bind_type__'] = 0;
	$m['S_ISLNK']['__args__'] = [null,null,['mode']];
	$m['S_ISSOCK'] = function(mode) {

		return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFSOCK']);
	};
	$m['S_ISSOCK']['__name__'] = 'S_ISSOCK';

	$m['S_ISSOCK']['__bind_type__'] = 0;
	$m['S_ISSOCK']['__args__'] = [null,null,['mode']];
	$m['S_ISUID'] = 2048;
	$m['S_ISGID'] = 1024;
	$m['S_ENFMT'] = $m['S_ISGID'];
	$m['S_ISVTX'] = 512;
	$m['S_IREAD'] = 256;
	$m['S_IWRITE'] = 128;
	$m['S_IEXEC'] = 64;
	$m['S_IRWXU'] = 448;
	$m['S_IRUSR'] = 256;
	$m['S_IWUSR'] = 128;
	$m['S_IXUSR'] = 64;
	$m['S_IRWXG'] = 56;
	$m['S_IRGRP'] = 32;
	$m['S_IWGRP'] = 16;
	$m['S_IXGRP'] = 8;
	$m['S_IRWXO'] = 7;
	$m['S_IROTH'] = 4;
	$m['S_IWOTH'] = 2;
	$m['S_IXOTH'] = 1;
	$m['UF_NODUMP'] = 1;
	$m['UF_IMMUTABLE'] = 2;
	$m['UF_APPEND'] = 4;
	$m['UF_OPAQUE'] = 8;
	$m['UF_NOUNLINK'] = 16;
	$m['SF_ARCHIVED'] = 65536;
	$m['SF_IMMUTABLE'] = 131072;
	$m['SF_APPEND'] = 262144;
	$m['SF_NOUNLINK'] = 1048576;
	$m['SF_SNAPSHOT'] = 2097152;
	return this;
}; /* end stat */


/* end module: stat */


