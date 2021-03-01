import Styled from "styled-components";
import { ContainerDiv } from "../../styles/styles";
import StoreItem from "./StoreItem";

const StoreItems = ({ items }) => {
	return (
		<>
			<ContainerDiv>
				<ul>
					{items.map((item) => (
						<li>
							<StoreItem item={item} key={item.id} />
						</li>
					))}
				</ul>
			</ContainerDiv>
		</>
	);
};

export default StoreItems;
