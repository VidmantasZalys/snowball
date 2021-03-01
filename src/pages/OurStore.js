import StoreItems from "../components/store/StoreItems";
import HeaderAll from "../components/HeaderAll";
import Styled from "styled-components";

const Services = ({ items }) => {
	return (
		<OurStoreDiv>
			<HeaderAll />
			<Line />
			<StoreItems items={items} />
		</OurStoreDiv>
	);
};

const OurStoreDiv = Styled.div`
background: #dde1ec;
`;

const Line = Styled.div`
	border-bottom: 1em solid #323347;
`;

export default Services;
