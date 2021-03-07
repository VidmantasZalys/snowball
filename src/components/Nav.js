import Styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<NavDiv>
			<ul>
				<li>
					<Link to="/">About</Link>
				</li>
				{/* 				<li>
					<Link to="/services">Services</Link>
				</li> */}
				<li>
					<Link to="/ourstore">Our Store</Link>
				</li>
				<li>
					<Link to="/contactus">Contact Us</Link>
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
