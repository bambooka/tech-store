import React from 'react';
import Info from '../component/AboutPage/Info';
import Hero from '../component/Hero';
import AboutBg from '../images/aboutBcg.jpeg'

export default function AboutPage () {
    return(
        <>
            <Hero img={AboutBg} />
            <Info />
        </>
    )
}