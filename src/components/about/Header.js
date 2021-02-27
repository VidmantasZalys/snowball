import Styled from "styled-components";
import Nav from "../Nav";
import BgImg from "../../img/mountain_1.jpg";
import EmptyCart from "../../img/empty_cart.svg";
import FullCart from "../../img/full_cart.svg";

const Header = () => {
	return (
		<HeaderDiv>
			<ContainerDiv>
				<Nav />
				<Cart>
					<img src={EmptyCart} alt="" />
				</Cart>
			</ContainerDiv>
			<Line />
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

const ContainerDiv = Styled.div`
width: 1200px;
margin: 0 auto;
display:flex;
justify-content: space-between;
`;
const Line = Styled.div`
	color: #929292;
	border-bottom: 1px solid #929292;
`;

const Cart = Styled.div`
padding: 2rem 5rem;
img{
    width: 2em;
}
`;

export default Header;
