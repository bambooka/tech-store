import React from 'react';
import Hero from '../component/Hero';
import contactBg from '../images/contactBcg.jpeg';
import Contact from '../component/ContactPage/Contact'


export default function ContactPage() {
    return (
        <>
            <Hero img={contactBg}/>
            <Contact/>
        </> 
    )
}