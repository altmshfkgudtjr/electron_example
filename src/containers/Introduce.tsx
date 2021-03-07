import { useHistory } from 'react-router-dom'
// components
import Section from 'components/home/Section'
import Title from 'components/home/Title'
import Post from 'components/home/Post'
import Btn from 'components/home/Btn'
import LinkWrapper from 'components/common/LinkWrapper'
import Link from 'components/common/Link'
import Version from 'components/common/Version'

const Home = () => {
	const history = useHistory();

	const onMove = (type: "HOME" | "INTRODUCE") => {
		if (type === "HOME") {
			history.push('/');
		} else {
			history.push('/introduce');
		}
	}

  return (
    <Section>
			<Title>Introduce</Title>
			<Post>This is simple <strong>React Typescript Electron</strong> template!</Post>
			<Post>Create new your app using this template.</Post>
			<Version />
			<LinkWrapper>
				<Link text="Go Home Page" onClick={() => onMove("HOME")} />
				<Link text="Go Introduce page" onClick={() => onMove("INTRODUCE")} />
			</LinkWrapper>
			<Btn />
		</Section>
  );
}

export default Home