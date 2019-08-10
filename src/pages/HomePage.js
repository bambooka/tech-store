import React from 'react';
import Hero from '../component/Hero.js'
import {Link} from 'react-router-dom'

import Services from '../component/HomePage/Services'
import Featured from '../component/HomePage/Featured'

export default function HomePage() {
    return (
        <>
            <Hero title="awesome gadgets" max="true" img={'../images/mainBcg.jpeg'}>
                <Link to="/products" className="main-link">
                    our products
                </Link>
            </Hero>
            <Services />
            <Featured/>
        </>
    )
}