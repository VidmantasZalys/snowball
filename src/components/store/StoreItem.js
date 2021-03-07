import Styled from "styled-components";

const StoreItem = ({ item, setCartItems, cartItems }) => {
	const addItems = () => {
		setCartItems([
			...cartItems,
			{
				itemName: item.itemName,
				itemdesc: item.desc,
			},
		]);

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
    background: white;
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
