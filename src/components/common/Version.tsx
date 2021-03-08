import styled from 'styled-components'
// lib
import { transition } from 'lib/styles/styles'

const Version = () => {
  return <Content>v1.0.3</Content>;
}

const Content = styled.div`
  position: relative;
	width: 90%;
	font-size: .8rem;
	font-weight: 600;
  margin-top: .5rem;
	margin-left: 5vw;
	color: white;
	word-break: keep-all;
	transition: .4s ${transition};
`;

export default Version