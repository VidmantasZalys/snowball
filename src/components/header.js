import Styled from "styled-components";
import Nav from "./Nav";
import BgImg from "../img/mountain_1.jpg";

const Header = () => {
	return (
		<HeaderDiv>
			<Nav />
			<h1>header</h1>
		</HeaderDiv>
	);
};

const HeaderDiv = Styled.div`
	background-image: url(${BgImg});
	width: 100%;
    height: 40rem;
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment:fixed;
    position:relative;
    z-index: 0;
`;

export default Header;
