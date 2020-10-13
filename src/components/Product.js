import React from "react";
import "../css/Product.css";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useStateValue} from "../contexts/StateProvider";

function Product({id, title, image, price, rating}) {
    const [{},dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}><StarIcon/></p>
                    ))}
                    {Array(5 - rating).fill().map((_, i) => (
                        <p key={i}><StarBorderIcon/></p>
                    ))}
                </div>
            </div>
            <img
                className=""
                src={image}
                alt=""
            />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;