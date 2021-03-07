import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, HashRouter } from 'react-router-dom'
// provider
import AppProvider from 'modules'

/** 
 * Router
 * - development mode: node.js 서버를 이용해서 개발
 * - production mode: 정적 파일을 이용해서 배포 
 */
const Router = ({ children }: { children: any }) => {
	if (process.env.NODE_ENV === 'development') {
		return <BrowserRouter>{children}</BrowserRouter>;
	}
	return <HashRouter>{children}</HashRouter>;
}

ReactDOM.render(
	<StrictMode>
		<Router>
			<AppProvider>
				<App />
			</AppProvider>
		</Router>
	</StrictMode>, 
	document.getElementById('root')
);

serviceWorker.unregister();