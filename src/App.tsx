import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import IntroducePage from 'pages/IntroducePage'
import NotFound from 'pages/NotFound'
// Containers
import Modal from 'containers/modal'
import Snackbar from 'containers/common/Snackbar'

const App = () => {
	return (<>
		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="/introduce" component={IntroducePage} exact />
			<Route path="*" component={NotFound} />
		</Switch>
		<Modal /> {/* Modal Position */}
		<Snackbar /> {/* Snackbar Position */}
	</>);
}

export default App