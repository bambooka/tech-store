import React from 'react';
import Hero from '../component/Hero.js'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <Hero title="awesome gadgets" max="true">
                <Link to="/products">
                    our products
                </Link>
            </Hero>
        </>
    )
}