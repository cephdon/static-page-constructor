export class File {
	static IMAGES = ['png', 'svg', 'jpg', 'gif'];

	static VIDEOS = [
		'webm','mkv','flv','vob', 'ogv', 'ogg','drc','avi','mov','qt','wmv','yuv','rm','rmvb','asf','amv',
		'mp4','m4p','m4v','mpg','mp2','mpeg','mpe','mpv','mpg','mpeg','m2v','m4v','svi','3gp','3g2','mxf',
		'roq','nsv','flv', 'f4v','f4p','f4a', 'f4b'
	];

	static AUDIOS = [
		'3gp', 'aa', 'aac', 'aax', 'act', 'aiff', 'amr', 'ape', 'au', 'awb', 'dct', 'dss', 'dvf', 'flac', 'gsm',
		 'iklax', 'ivs' ,'m4a', 'm4b', 'm4p', 'mmf', 'mp3', 'mpc', 'msv', 'ogg', 'oga', 'mogg', 'opus', 'ra', 
		 'rm', 'raw', 'sln', 'tta', 'vox', 'wav', 'wma', 'wv', 'webm', '8svx'];

	static DOCUMENTS = [
		'txt', 'rtf', 'pdf', 'odt', 'ott', 'odm', 'html', 'oth', 'ods', 'ots', 'odg', 'otg', 'odp', 'otp', 'odf', 
		'odb', 'oxt','doc', 'dot', 'docx', 'docm','dotx', 'dotm', 'docb', 'xls', 'xlt', 'xlm', 'xlsx', 'xlsm', 
		'xltx', 'xltm', 'ppt', 'pot', 'pps', 'pptx', 'pptm', 'potx', 'potm', 'ppam', 'ppsx', 'ppsm', 'sldx', 'sldm'
	];

	static ALL = [].concat(
		File.IMAGES,
		File.VIDEOS,
		File.AUDIOS,
		File.DOCUMENTS
	);

	name: string;
	url: string;
	lastModified: Date;

	public isImage() {
		return File.IMAGES.indexOf(this.name.split('.').pop()) !== -1;
	}

	public isVideo() {
		return File.VIDEOS.indexOf(this.name.split('.').pop()) !== -1;
	}

	public isAudio() {
		return File.AUDIOS.indexOf(this.name.split('.').pop()) !== -1;
	}

	public isDocument() {
		return File.DOCUMENTS.indexOf(this.name.split('.').pop()) !== -1;
	}
};