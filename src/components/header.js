import Styled from "styled-components";
import Nav from "./Nav";
import BgImg from "../img/mountain_1.jpg";

const Header = () => {
	return (
		<HeaderDiv>
			<Nav />
			<h1>We are SnowBall. We selling bet snowballs in the world.</h1>
		</HeaderDiv>
	);
};

const HeaderDiv = Styled.div`
	background-image: url(${BgImg});
	width: 100%;
    height: 778px;
    background-repeat: no-repeat;
    background-attachment:fixed;
    position:relative;
    z-index: 0;
    h1{
        display:flex;
        ustify-content: center;
        text-align: center;
    }
`;

export default Header;
