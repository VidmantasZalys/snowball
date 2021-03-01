import HeaderAll from "../HeaderAll";
import Styled from "styled-components";
import { ContainerDiv } from "../../styles/styles";
import snowBalls from "../../img/snowballs.jpg";

const ServicesPage = () => {
	return (
		<>
			<HeaderAll />
			<MakingSnowBalls>
				<ContainerDiv>
					<MakingSnowBallsDesc>
						<h1>Making Snow Balls</h1>
						<p>
							<span>Is</span> simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<img src={snowBalls} alt="Snow Balls" />
					</MakingSnowBallsDesc>
				</ContainerDiv>
			</MakingSnowBalls>
		</>
	);
};

const MakingSnowBalls = Styled.div`
    background: #323347;
    color: white;
`;
const MakingSnowBallsDesc = Styled.div`
width: 50%;
padding: 4rem 0 6rem 0;
h1{
    padding: 1rem 0rem;
}
p{
    span{
        margin-left: 2rem;
    }
    text-align: justify;
}
img{
    border-radius: 50%;
}
}
`;

export default ServicesPage;
