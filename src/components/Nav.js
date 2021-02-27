import Styled from "styled-components";

const Nav = () => {
	return (
		<NavDiv>
			<h2>SnowBall</h2>
			<ul>
				<li>
					<a href="#">About</a>
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
	text-align: center;
	h2{
		padding: 1em;
	}
	ul{
		display: flex;
	list-style:none;
	justify-content: center;
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
	}
	a:hover{
		background:  black;
		color: white;
	}
	}
`;

export default Nav;
