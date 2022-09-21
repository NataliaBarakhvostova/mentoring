import {Link} from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi"
import {useContext} from "react";
import CartContext from "../context/CartContext";

function Navigation() {
    const { products } = useContext(CartContext);
    return (
        <section className={'wrapper navigation'}>
            <Link to={'/products'}>
                <h2>Clothes store</h2>
            </Link>
            <Link to={'/checkout'}>
                <div className={'cart'}>
                    <HiShoppingCart/>
                    <span>{products.length}</span>
                </div>
            </Link>
        </section>
    );
}

export default Navigation;

