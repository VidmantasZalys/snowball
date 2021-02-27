import Styled from "styled-components";

const Services = () => {
	return (
		<ServicesDiv>
			<ul>
				<li>
					<h1>Making Snow Balls</h1>
					<p>We are the best making snow balls fom mountains and etc.</p>
				</li>
				<li>
					<h1>Making Snow Balls</h1>
					<p>We are the best making snow balls fom mountains and etc.</p>
				</li>
				<li>
					<h1>Making Snow Balls</h1>
					<p>We are the best making snow balls fom mountains and etc.</p>
				</li>
			</ul>
		</ServicesDiv>
	);
};

const ServicesDiv = Styled.div`
background: white;
ul{
	display:flex;
	justify-content: center;
	list-style: none;
}
`;

export default Services;
