import StoreItems from "../components/store/StoreItems";
import HeaderAll from "../components/HeaderAll";
import Styled from "styled-components";

const Services = ({ items }) => {
	return (
		<>
			<HeaderAll />
			<Line />
			<StoreItems items={items} />
		</>
	);
};

const Line = Styled.div`
	border-bottom: 1em solid #323347;
`;

export default Services;
