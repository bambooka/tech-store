import React from 'react';
import Hero from '../component/Hero';
import defaultBg from '../images/defaultBcg.jpeg';
import {Link} from 'react-router-dom';

export default function DefaultPage() {
    return (
        <>
            <Hero img={defaultBg} max="true" title="404">
                <h2 className="text-uppercase">page not found</h2>
                <Link to="/" className="main-link">to home</Link>
            </Hero>
        </>
    )
}