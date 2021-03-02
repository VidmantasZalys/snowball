import Styled from "styled-components";
import Nav from "./Nav";
import HeaderAllBg from "../img/headerall_mountain_1.jpg";
import { ContainerDiv } from "../styles/styles";
import EmptyCart from "../img/empty_cart.svg";
import FullCart from "../img/full_cart.svg";
import { Link } from "react-router-dom";

const HeaderAll = () => {
	return (
		<HeaderDiv>
			<ContainerDiv>
				<HeaderMenu>
					<h1>SnowBall</h1>
					<Nav />
					<Cart>
						<Link to="/cartshop">
							<img src={EmptyCart} alt="" />
						</Link>
					</Cart>
				</HeaderMenu>
			</ContainerDiv>
		</HeaderDiv>
	);
};

const HeaderDiv = Styled.div`
	background: url(${HeaderAllBg});
	width: 100%;
    height: 180px;
    background-repeat: no-repeat;
    position:relative;
    z-index: 0;
`;

const HeaderMenu = Styled.div`
width: 100%;
display:flex;
justify-content: space-between;
h1{
	display:flex;
	padding: 1rem;
	font-family: "Lobster";
}
`;
const Cart = Styled.div`
padding: 1em;
img{
    width: 2em;
}
`;

export default HeaderAll;
