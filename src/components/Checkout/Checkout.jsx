import React, {useContext, useEffect, useState} from "react";
import CartContext from "../../context/CartContext";
import PageHeader from "../PageHeader/PageHeader";
import theme from './Checkout.module.css';
import cx from 'classnames';
import Login from '../Login/Login';

function Checkout() {
    const [token, setToken] = useState();
    const [summ, setSumm] = useState(0);
    const { products } = useContext(CartContext);

    useEffect(() => {
        let prices = [];
        let pricing;
        products.map(product => {
            return prices.push(product.price);
        })
        pricing = prices.reduce((a, b) => a + b, 0);
        setSumm(pricing);
    }, [products])

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <section className={'page'}>
            <PageHeader title={'Checkout'} />
            <div className={cx(theme.checkoutListing, 'wrapper')}>
                <table>
                    <thead align={'left'}>
                        <th>Product name</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}.&nbsp;{product.title}</td>
                            <td>{product.price} $ </td>
                        </tr>
                        )
                    )}
                    </tbody>
                    <tfoot align={'right'}>
                        <td colSpan={2}>Summ: {summ} $</td>
                    </tfoot>
                </table>
            </div>
        </section>
    );
}

export default Checkout;

