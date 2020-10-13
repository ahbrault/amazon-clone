import React from "react";
import "../css/CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {useStateValue} from "../contexts/StateProvider";

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
         })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}><StarIcon/></p>
                    ))}
                    {Array(5 - rating).fill().map((_, i) => (
                        <p key={i}><StarBorderIcon/></p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;