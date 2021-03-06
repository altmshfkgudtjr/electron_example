import { Helmet } from "react-helmet-async"
// containers
import Home from 'containers/Home'

const HomePage = () => {
	return (<>
		<Helmet>
			<title>NB 데스크톱</title>
		</Helmet>

		<Home />
	</>);
}

export default HomePage