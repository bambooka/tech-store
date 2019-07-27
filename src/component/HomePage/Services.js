import React from 'react';
import {FaDollarSign, FaDolly, FaRedo} from "react-icons/fa";
import styled from 'styled-components';

export default class Services extends React.Component {

    state = [
        {
            id: 1,
            icon: <FaDolly/>,
            title: 'Free shipping',
            text: 'here is some text about free shipping. Dont pay attention for it'
        },
        {
            id: 2,
            icon: <FaRedo/>,
            title: '30 days return policy',
            text: 'here is some text about policy. Dont pay attention for it'
        },
        {
            id: 3,
            icon: <FaDollarSign/>,
            title: 'secured payment',
            text: 'here is some text about secure payment. Dont pay attention for it'
        },

    ];
    render(){
        return(
            <ServiceWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.map(item => {
                            return <div className="col-10 col-sm-6 col-md-4 mx-auto my-3" key={item.id}>
                                <div className="service-icon">{item.icon}</div>
                                <div className="mt-3 text-capitalize">{item.title}</div>
                                <div className="mt-3">{item.text}</div>
                            </div>
                        })}
                    </div>
                </div>
            </ServiceWrapper>
        )
    }

}

const ServiceWrapper = styled.section`
    background: rgba(95, 183, 234, 0.5);
    text-align: center;
    .service-icon {
        color: var(--primaryColor);
        font-size: 2.5rem;
    }
    p {
        color: var(--darkGrey);
    }
`;
