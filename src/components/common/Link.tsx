import styled from 'styled-components'
// lib
import { transition } from 'lib/styles/styles'
import palette from 'lib/styles/palette'

const Link = ({ text, onClick }: Props) => {
  return <Btn onClick={onClick}>{text}</Btn>;
}

const Btn = styled.button`
	font-size: 14px;
	line-height: 24px;
	background-color: rgba(0,0,0,0);
	border: 1.8px solid white;
	border-radius: 2rem;
  box-sizing: border-box;
  padding: 2px 1rem;
  margin: 0 .5rem;
	font-weight: 600;
	text-align: center;
	color: #fefefe;
	transition: .2s ${transition}; 

  &:hover {
		background-color: ${palette.orange4};
		border: 1.8px solid ${palette.orange4};
	}
  
  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

interface Props {
  text: string;
  onClick: () => void;
}

export default Link