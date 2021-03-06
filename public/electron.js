const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
	
	/** 기본 데스크톱 앱 사이즈 설정 */
	const win = new BrowserWindow({
			width:1920,
			height:1080
	});

	/** 시작 URL 또는 파일 */
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '/../build/index.html'),
		protocol: 'file:',
		slashes: true
	});
	
	/** 시작 포인트 실행 */
	win.loadURL(startUrl);

	/** development 모드일 경우, 개발자도구 자동으로 열기 */
	if (process.env.NODE_ENV === 'development') {
		win.webContents.openDevTools();
	}
}

/** Electron 초기화가 끝나게 되면 실행 */
app.on('ready', createWindow);

/** MacOS 와 같은 경우, 모든 창이 닫히면 자동으로 앱 종료 */
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

