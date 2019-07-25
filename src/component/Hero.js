import React from 'react'
import styled from 'styled-components'
import mainBg from '../images/mainBcg.jpeg'

export default function Hero({img, title, max, children}) {
    return (
        <HeroWrapper max={max} img={img}>
            <h1 className="title">{title}</h1>
            <div className="banner">
                {children}
            </div>
        </HeroWrapper>
    );
}

const HeroWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: ${props => props.max ? '100vh' : '60vh'};
    color: var(--mainWhite);
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props => props.img}) center/cover no-repeat;
    
    .title {
        font-size: 3.5rem;
        padding-top: 2rem;
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing); 
    }
    
    .main-link {
        padding: 0.5rem;
        display: inline-block;
        background: var(--primaryColor);
        outline: 4px solid var(--primaryColor);
        outline-offset: 4px;
        color: var(--mainWhite);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing);
        transition: var(--mainTransition);
        margin: 2rem;
    }
    
    .main-link:hover {
        background: var(--darkGrey);
        outline-color: var(--darkGrey);
        color: var(--primaryColor);
        text-decoration: none;
    }
`;

Hero.defaultProps = {
    img: {mainBg}
};