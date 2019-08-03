import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../component/Hero'
import singleProductImg from '../images/singleProductBcg.jpeg';
import {ProductConsumer} from "../context";

export default function SingleProductPage() {
    return (
        <>
            <Hero img={singleProductImg} title="single product"/>
            <ProductConsumer>
                {value => {
                    const {singleProduct, addToCart, loading} = value;

                    if (loading) {
                        return <h1>loading...</h1>
                    }

                    const {company, description, id, price, title, image} = singleProduct;

                    console.log(image);
                    return <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-5 col-sm-8 my-3">
                                    <img
                                        src={`../${image}`}
                                        alt="single product"
                                        className="image-fluid"/>
                                </div>
                                <div className="col-10 mx-auto col-md-5 col-sm-8 my-3">
                                    <h5 className="text-title mb-4">Model: {title}</h5>
                                    <h5 className="text-capitalized text-muted mb-4">company: {company}</h5>
                                    <h5 className="text-main text-capitalize mb-4">Price: ${price}</h5>
                                    <p className="text-capitalize text-title mt-3">some info about product</p>
                                    <p>{description}</p>
                                    <button
                                        type="button"
                                        className="main-link"
                                        style={{margin: "0.75rem"}}
                                        onClick={() => addToCart(id)}
                                    >
                                        add to cart
                                    </button>
                                    <Link to="/products" className="main-link">
                                        back to products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                }}
            </ProductConsumer>
        </>
    )
}