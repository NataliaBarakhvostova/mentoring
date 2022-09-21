import {useContext} from "react";
import CartContext from "../context/CartContext";

function Card({data, title}) {
    const { addToCart } = useContext(CartContext);

    const { description, color, price, tag, cover } = data;

    return (
        <div className={'card'}>
            <h3 className={'card-title'}>{title}</h3>
            <img src={cover} alt={title} className={'card-image'}/>
            <div className={'card-checkout'}>
                <h5 className={'card-price'}>{price} $</h5>
                <button onClick={() => addToCart(title, price)} className={'card-button'}>add to cart</button>
            </div>
            <div className={'card-colors'}>
                Color:
                <div style={{width: '20px', height: '20px', backgroundColor: color, border: '1px solid black', marginLeft: '10px'}} />
            </div>
            <p className={'card-description'}>{description}</p>
            {tag && <span className={'card-tag'}>{tag}</span>}
        </div>
    );
}

export default Card;

