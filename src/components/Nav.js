import Styled from "styled-components";

const Nav = () => {
	return (
		<NavDiv>
			<h1>SnowBall</h1>
			<ul>
				<li>About</li>
				<li>Our Store</li>
				<li>Contact Us</li>
			</ul>
		</NavDiv>
	);
};

const NavDiv = Styled.div`
	display: flex;
	padding: 2rem 5rem;
	width: 100%;

	ul{
	list-style:none;
	li{
		list-decoration: none;
	}
	}
`;

export default Nav;
