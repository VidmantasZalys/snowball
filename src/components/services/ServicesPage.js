import HeaderAll from "../HeaderAll";
import Styled from "styled-components";
import { ContainerDiv } from "../../styles/styles";
const ServicesPage = () => {
	return (
		<div>
			<HeaderAll />
			<ContainerDiv>
				<MakingSnowBalls>
					<LeftCol></LeftCol>
				</MakingSnowBalls>
			</ContainerDiv>
		</div>
	);
};

const MakingSnowBalls = Styled.div`

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

export default ServicesPage;
