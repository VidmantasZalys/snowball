import Styled from "styled-components";
import { ContainerDiv } from "../../styles/styles";
import StoreItem from "./StoreItem";

import { useEffect } from "react";

const StoreItems = ({ items, setCartItems, cartItems }) => {
	console.log(typeof cartItems);
	useEffect(() => {
		console.log("kazkas pasikeite cartItems");
		console.log(cartItems);
	}, [cartItems]);

	return (
		<>
			<ContainerDiv>
				<ItemsUl>
					{items.map((item) => (
						<li>
							<StoreItem
								item={item}
								key={item.id}
								setCartItems={setCartItems}
								cartItems={cartItems}
							/>
						</li>
					))}
				</ItemsUl>
			</ContainerDiv>
		</>
	);
};

const ItemsUl = Styled.div`
    list-style:none;
    padding: 0;
    margin: 0;
    li{
        padding: 2em;
    }
`;
export default StoreItems;
