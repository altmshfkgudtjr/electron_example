import { Helmet } from "react-helmet-async"
// containers
import Home from 'containers/Home'

const HomePage = () => {
	return (<>
		<Helmet>
			<title>Electron Example</title>
		</Helmet>

		<Home />
	</>);
}

export default HomePage