import Styled from "styled-components";
import SnowBallThr from "../../img/snow_ball_trh.png";
import Conveyor from "../../img/conveyor.png";
import Excavator from "../../img/excavator.png";
import ServicesBg from "../../img/services_bg.png";
import { ContainerDiv } from "../../styles/styles";
const Services = () => {
	return (
		<ServicesDiv>
			<ContainerDiv>
				<ul>
					<li>
						<img src={Conveyor} alt="Snow Ball Throw" />
						<h1>Making Snow Balls</h1>
						<p>We are the best making snow balls fom mountains and etc.</p>
					</li>
					<li>
						<img src={SnowBallThr} alt="Snow Ball Throw" />
						<h1>Coaching</h1>
						<p>
							We have the best coaches to make you throw snowball stronger and
							farther.
						</p>
					</li>
					<li>
						<img src={Excavator} alt="Snow Ball Throw" />
						<h1>Snow digging</h1>
						<p>We supply any type of snow excavator in any country. </p>
					</li>
				</ul>
			</ContainerDiv>
		</ServicesDiv>
	);
};

const ServicesDiv = Styled.div`
	background: white;
	padding: 8em 2em;
	background: url(${ServicesBg});
	ul{
		display:flex;
		justify-content: space-between;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li{
		width: 30%;
		background: #323347;
		margin: 0 1em;
		text-align: center;


	}
	img{
		margin-top: -4.5em;
		background:white;
		border-radius: 50%;
		padding: 1em;
		border: 2px solid #323347;
	}
		h1{
			color: white;
			padding: 1em;
		}
		p{
			color: #b8b4cb;
			padding: 0 3em 3em 3em; 
		}
	}
}
`;

export default Services;
