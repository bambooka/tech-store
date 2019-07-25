import React from 'react';
import styled from 'styled-components'
import {ProductConsumer} from "../context";

export default function Sidecart(){
    return (
        <ProductConsumer>
            {value => {
                const {cartOpen, handleCart, closeCart, cart} = value;
                return (
                    <CartWrapper show={cartOpen} onClick={handleCart}>
                        <p>item</p>
                    </CartWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const CartWrapper = styled.div `
    position: fixed;
    top: 60px;
    right: 0;
    background: var(--mainGrey);
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: var(--mainTransition);
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
    border-left: 4px solid var(--primaryColor);
    
    
    @media (min-width: 576px) {
        width: 20rem;
    }

`;