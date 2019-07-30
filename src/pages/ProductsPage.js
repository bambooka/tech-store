import React from 'react';
import Products from '../component/ProductsPage/Products';
import Hero from '../component/Hero';
import productBg from '../images/productsBcg.jpeg';

export default function ProductsPage() {
    return (
        <>
            <Hero img={productBg} />
            <Products />
        </>
    )
}