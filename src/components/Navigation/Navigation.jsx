import React from "react";
import {Link} from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi"
import {useContext} from "react";
import CartContext from "../../context/CartContext";
import cx from 'classnames';
import theme from './Navigation.module.css'

function Navigation() {
    const { products } = useContext(CartContext);
    return (
        <section className={cx(theme.navigation, 'wrapper')}>
            <Link to={'/mentoring/products/'}>
                <h2>Clothes store</h2>
            </Link>
            <Link to={'/mentoring/checkout/'}>
                <div className={theme.cart}>
                    <HiShoppingCart/>
                    <span>{products.length}</span>
                </div>
            </Link>
        </section>
    );
}

export default Navigation;

