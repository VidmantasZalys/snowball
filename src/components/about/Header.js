import Styled from "styled-components";
import Nav from "../Nav";
import BgImg from "../../img/mountain_1.jpg";
import EmptyCart from "../../img/empty_cart.svg";
import FullCart from "../../img/full_cart.svg";
import { ContainerDiv } from "../../styles/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	//const qnt = 0;
	//const snowBalls = 456;
	let rndDashBoardQnt = Math.floor(Math.random() * Math.floor(345));
	const melted = 1234;
	const ballSent = 1500;
	const constumers = 3000;
	const [dashBoardQnt, setDashBoardQnt] = useState(rndDashBoardQnt);

	setTimeout(() => {
		setDashBoardQnt(dashBoardQnt + Math.floor(Math.random() * Math.floor(10)));
		//return snowBalls;
	}, 5000);

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
			<Line />
			<ContainerDiv>
				<HeaderContent>
					<LeftCol>
						<h1>
							We are <span>SnowBall</span>. We sell the best and stiffest
							snowballs in the world from the mountains snow.
						</h1>
					</LeftCol>
					<RightCol>
						<InfoBox>
							<InfoBoxRow>
								<InfoBoxCell>
									<h1>{dashBoardQnt}</h1>
									<p>snow balls produced</p>
								</InfoBoxCell>
								<InfoBoxCell>
									<h1>{dashBoardQnt}</h1>
									<p>snow balls sent</p>
								</InfoBoxCell>
							</InfoBoxRow>
							<InfoBoxRow>
								<InfoBoxCell>
									<h1>{dashBoardQnt}</h1>
									<p>melted on shipping</p>
								</InfoBoxCell>
								<InfoBoxCell>
									<h1>{dashBoardQnt}</h1>
									<p>costumers</p>
								</InfoBoxCell>
							</InfoBoxRow>
						</InfoBox>
					</RightCol>
				</HeaderContent>
			</ContainerDiv>
		</HeaderDiv>
	);
};

const HeaderDiv = Styled.div`
	background: url(${BgImg});
	width: 100%;
    height: 778px;
    background-repeat: no-repeat;
    position:relative;
    z-index: 0;
`;

const Line = Styled.div`
	border-bottom: 1px solid #929292;
`;

const Cart = Styled.div`
padding: 1em;
img{
    width: 2em;
}
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

const HeaderContent = Styled.div`
display:flex;
`;

const LeftCol = Styled.div`
width: 50%;
margin: 12em 3em 0 5em;
h1{
	span{
		font-family: "Lobster";
}
}
`;

const RightCol = Styled.div`
width: 50%;
display:flex;
justify-content: center;
`;

const InfoBox = Styled.div`
	width: 70%;
	display:flex;
	margin: 8em 3em 0 5em;
`;
const InfoBoxRow = Styled.div`
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const InfoBoxCell = Styled.div`
text-align: center;
	background: #323347;
	color: white;
	font-weight: lighter;
	border: 1px solid #4f4d65;
	position: relative;
	h1{
		padding: 1rem;
	}
	p{
		color: #b8b4cb;
		padding: 1rem;
	}
`;
export default Header;
