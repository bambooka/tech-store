import React from 'react';
import {FaTrash, FaChevronCircleUp, FaChevronCircleDown} from "react-icons/fa";


export default function CartItem ({increment, decrement, removeItem, cartItem}) {
    const{id, title, price, count, total, image} = cartItem;
    return(
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-item center">
            <div className="col-10 col-lg-2 mx-auto pb-2">
                <img src={image} width="60" className="image-fluid" alt="product" />
            </div>
            <div className="col-10 col-lg-2 mx-auto pb-2">
                <span className="d-lg-none">product: </span>{title}
            </div>
            <div className="col-10 col-lg-2 mx-auto pb-2">
                <span className="d-lg-none">price: $</span>{price}
            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <FaChevronCircleDown
                        className="cart-icon text-primary"
                        onClick={() => decrement(id)}
                    />
                    <span className="text-title text-muted mx-3">{count}</span>
                    <FaChevronCircleUp
                        className="cart-icon text-primary"
                        onClick={() => increment(id)}
                    />
                </div>
            </div>
            <div className="col-10 col-lg-2">
               <FaTrash className="text-danger cart-icon" onClick={()=>removeItem(id)}/>
            </div>
            <div className="col-10 col-lg-2">
                <strong className="text-muted">item total: ${total}</strong>
            </div>
        </div>
    )

}