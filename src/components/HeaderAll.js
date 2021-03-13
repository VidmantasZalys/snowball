import Styled from "styled-components";
import Nav from "./Nav";
import HeaderAllBg from "../img/headerall_mountain_1.jpg";
import { ContainerDiv } from "../styles/styles";
import EmptyCart from "../img/empty_cart.svg";
import FullCart from "../img/full_cart.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderAll = ({ cartItems, cartItemSize }) => {
	//console.log(cartItems);
	const [cartImg, setCartImg] = useState(EmptyCart);
	const [cartSize, setCartSize] = useState(cartItems.length);

	/* 	const cartCheck = (icon) => {
		console.log("cart is not emty");
		return icon;
	}; */

	useEffect(() => {
		if (cartItems.length != 0) {
			setCartImg(FullCart);
			setCartSize(cartItems.length);
		}

		//console.log("cxcxc");
	}, [cartItems]);

	return (
		<HeaderDiv>
			<ContainerDiv>
				<HeaderMenu>
					<h1>SnowBall</h1>
					<Nav />
					<Cart>
						<Link to="/cartshop">
							<img src={cartImg} alt="" />
							<span>{cartSize}</span>
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
	z-index: 0;
}
span{
	width:25px;
	height: 25px;
	z-index: 1;
	position: absolute;
	background: black;
	color: white;
	padding: 3px;
	border-radius: 50%;
	text-align: center;
	}
`;

export default HeaderAll;
