import React from 'react';
import CartSection from '../component/CartPage'
import Hero from '../components/Hero';
import CartBg from '../images/storeBcg.jpeg'

export default function CartPage() {
    return (
        <>
            <Hero img={CartBg} />
            <CartSection/>
        </>
    )
}