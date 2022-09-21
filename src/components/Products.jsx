import {useEffect, useState} from "react";
import Card from "./Card";

function Products() {

    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        let response = await fetch('https://mockend.com/NataliaBarakhvostova/mentoring/Product?createdAt_order=desc');
        let products = await response.json();
        return products;
    };

    useEffect(() => {
        getProducts().then((products) => setProductList(products));
    }, []);

    return (
        <section className={'page'}>
            <div className={'wrapper title'}>
                <h3>Products</h3>
            </div>
            <div className={'wrapper grid-listing'}>
                {productList?.map((product) => (
                    <Card key={product.id} title={product.title} data={product} />
                ))}
            </div>
        </section>
    );
}

export default Products;

