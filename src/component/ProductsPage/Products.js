import React from 'react';
import {ProductConsumer} from "../../context";
import Title from '../Title';
import Product from '../Product'
import ProductFilter from './ProductFilter'

export default function Products () {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProducts} = value;
                return(
                    <section className="py-5">
                        <div className="container">
                            <Title title="our prod1uct" center/>
                            <ProductFilter />
                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <h6 className="text-title">
                                        total products: {filteredProducts.length}
                                    </h6>
                                </div>
                            </div>
                            <div className="row py-5">
                                {filteredProducts === 0 ? (
                                    <div className="col text-title text-center">
                                        sorry, no items matched your search
                                    </div>
                                ): (filteredProducts.map(product => {
                                    return <Product
                                        key={product.id}
                                        product={product}
                                    />                                }))
                                }


                            </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    )
}