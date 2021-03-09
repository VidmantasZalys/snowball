import Styled from "styled-components";

const StoreItem = ({ item, setCartItems, cartItems }) => {
	const addItems = () => {
		let qnt = 0;

		cartItems.filter((cartItem, index) => {
			/* 			setCartItems((prevState) => {
				if (prevState[index] === "mhm") {
					prevState[index].vnt = "";
				}
			});
 */
			/* 			setCartItems((prevState) => {
				//console.log(prevState[index].itemId);
				if (prevState[index].itemId === "mhm") {
					prevState[index].vnt++;
				}
				return prevState;
			}); */
			//console.log(cartItem.itemId);
			//if (cartItem.itemId === "mhm") {
			//setCartItems([{ ...cartItem, vnt: qnt++ }, ...cartItems]);
			/* 				setCartItems((prevState) => [
					...prevState,
					{ ...cartItem, vnt: qnt++ },
				]); */
			//console.log(index);
			//}
			//console.log(cartItem);
			/* 		if (cartItem.id !== item.id) {
				setCartItems([...cartItems, { ...cartItem, itemQnt: qnt++ }]);
			} else {
				setCartItems([
					...cartItems,
					{
						itemImg: item.img,
						itemName: item.itemName,
						itemPrice: item.price,
						itemDesc: item.Desc,
						itemQnt: 1,
						itemId: item.id,
					},
				]);
			} */
		});
		//console.log(cartItems.length);

		if (cartItems.length === 0) {
			setCartItems([
				...cartItems,
				{
					itemImg: item.img,
					itemName: item.itemName,
					itemPrice: item.price,
					itemDesc: item.Desc,
					itemQnt: 1,
					itemId: item.id,
				},
			]);
		} else {
			cartItems.filter((cartItem, index) => {
				if (cartItem.itemId === item.id && cartItems.length != 0) {
					setCartItems((prevState) => {
						//console.log(prevState[index].itemId);
						if (prevState[index].itemId === cartItem.itemId) {
							prevState[index].itemQnt++;
						}
						return prevState;
					});
				} else {
				}
				/* 				setCartItems([
					...cartItems,
					{
						itemImg: item.img,
						itemName: item.itemName,
						itemPrice: item.price,
						itemDesc: item.Desc,
						itemQnt: 1,
						itemId: item.id,
					},
				]); */
			});
		}
		setCartItems((state) => {
			console.log(state);
			return state;
		});
		//setCartItems(item.img);
		//console.log(cartItems);
	};
	return (
		<ItemBlock>
			<img src={item.img} alt={item.itemName} />
			<h2>{item.itemName}</h2>
			<p>{item.desc}</p>
			<h3>{item.price} Eur</h3>
			<button onClick={() => addItems()}>Buy</button>
			<button>More Info</button>
		</ItemBlock>
	);
};

const ItemBlock = Styled.div`

    width:300px;
    height: 350px;
    border-radius: 20px;
    border: 1px solid #323347;
    text-align: center;
    img{
        width: 178px;
        height: 178px;
        padding: 1em;
        border-radius: 50%;
        border: 1px solid #323347;
    }
    button{
        border: 1px solid #323347;;
		border-radius: 20px;
		color:  black;
		text-decoration: none;
		padding: .7rem 2rem;
		cursor: pointer;
    }
    p{
        font-size: 10pt;
        padding: 1em;
    }
    h3{
        padding: 0 0 1em 0;
    }
`;

export default StoreItem;
