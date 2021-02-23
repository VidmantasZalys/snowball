import Styled from "styled-components";

const Nav = () => {
	return (
		<NavDiv>
			<h1>SnowBall</h1>
			<NavUl>
				<li>About</li>
				<li>Our Store</li>
				<li>Contact Us</li>
			</NavUl>
		</NavDiv>
	);
};

const NavDiv = Styled.div`
top: 5rem;
color: white;
`;

const NavUl = Styled.ul`
list-style:none;
display: flex;
padding: 2rem 5rem;
`;

export default Nav;
