import React, {useEffect, useState} from "react";
import CardItem from "./Card/Card";
import PageHeader from "./PageHeader/PageHeader";
import LoaderWill from "./Loader/Loader";

function Products() {

    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        let response = await fetch('https://mockend.com/NataliaBarakhvostova/mentoring/Product?createdAt_order=desc', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return await response.json();
    };

    useEffect(() => {
        getProducts().then((products) => setProductList(products));
    }, []);

    return (
        <section className={'page'}>
            <PageHeader title={'Products'} />
            {productList?.length ? (
                <div className={'wrapper grid-listing'}>
                    {productList?.map((product) => (
                        <CardItem key={product.id} title={product.title} data={product} />
                    ))}
                </div>
            ) : (
              <LoaderWill />
            )}

        </section>
    );
}

export default Products;

