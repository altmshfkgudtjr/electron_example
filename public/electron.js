const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require("electron-updater");
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

/** 메인 창 생성 */
function createWindow() {
	
	/** 기본 데스크톱 앱 사이즈 설정 */
	const win = new BrowserWindow({
			width:1080,
			height:720,
			frame: true,
	});

	// 개발모드일 경우 개발자도구 자동 열기
	if (isDev) {
		win.webContents.openDevTools();
	}

	/** 시작 URL 또는 파일 */
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '/../build/index.html'),
		protocol: 'file:',
		slashes: true
	});
	// const startUrl = url.format({
	// 	pathname: path.join(__dirname, '/../build/index.html'),
	// 	protocol: 'file:',
	// 	slashes: true
	// });
	
	/** 시작 포인트 실행 */
	win.loadURL(startUrl);
}

/** 메세지 전송 함수 */
function sendStatusToWindow(text) {
	console.log(text);
  // win.webContents.send('message', text);
}

/* Updater ======================================================*/

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('업데이트 확인 중...');
});
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('업데이트가 가능합니다.');
});
autoUpdater.on('update-not-available', (info) => {
  sendStatusToWindow('현재 최신버전입니다.');
});
autoUpdater.on('error', (err) => {
  sendStatusToWindow('에러가 발생하였습니다. 에러내용 : ' + err);
});
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "다운로드 속도: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - 현재 ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  sendStatusToWindow(log_message);
})
autoUpdater.on('update-downloaded', (info) => {
  sendStatusToWindow('업데이트가 완료되었습니다.');
});

/* Electron =====================================================*/

/** 초기화가 끝나게 되면 실행 */
app.on('ready', () => {
	// 메인 창 생성
	createWindow();

	// 자동 업데이트 등록
	// autoUpdater.checkForUpdates();
	autoUpdater.checkForUpdatesAndNotify();
});

/** [생명주기] 모든 창이 닫히면 자동으로 앱 종료 */
app.on('window-all-closed', () => {
	app.quit();
});