import {useContext, useEffect, useState} from "react";
import CartContext from "../context/CartContext";

function Checkout() {

    const { products } = useContext(CartContext);
    const [summ, setSumm] = useState(0);

    useEffect(() => {
        let prices = [];
        let pricing;
        products.map(product => {
            return prices.push(product.price);
        })
        pricing = prices.reduce((a, b) => a + b, 0);
        setSumm(pricing);
    }, [products])

    return (
        <section className={'page'}>
            <div className={'wrapper title'}>
                <h3>Checkout</h3>
            </div>
            <div className={'wrapper checkout-listing'}>
                <table className={'card'}>
                    <thead align={'left'}>
                        <th>Product name</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr>
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

