import React, {useEffect, useState} from "react";
import CardItem from "../Card/Card";
import PageHeader from "../PageHeader/PageHeader";
import LoaderWill from "../Loader/Loader";
import { getProducts } from "../../services/getProducts";
import cx from 'classnames';
import theme from './Products.module.css';

function Products() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProductList(products));
    }, []);

    console.log(productList.length);

    return (
        <section className={'page'}>
            <PageHeader title={'Products'} />
            {productList?.length ? (
                <div className={cx(theme.gridListing, 'wrapper')}>
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

