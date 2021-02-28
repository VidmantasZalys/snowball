import Styled from "styled-components";

const Nav = () => {
	return (
		<NavDiv>
			<ul>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Our Store</a>
				</li>
				<li>
					<a href="#">Contact Us</a>
				</li>
			</ul>
		</NavDiv>
	);
};

const NavDiv = Styled.div`
	overflow: hidden;
	position: relative;
	display:flex;
	width: 100%;
	justify-content: center;
	ul{
		display: flex;
		list-style:none;
	li{
		display: flex;
		list-decoration: none;
		padding: 1em;
	}
	a{
		border: 1px solid black;
		border-radius: 20px;
		color:  black;
		text-decoration: none;
		padding: .7rem 2rem;
		cursor: pointer;
	}
	a:hover{
		background: black;
		color: white;
		cursor: pointer;
	}
	}
`;

export default Nav;
