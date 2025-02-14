import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../contexts/StateProvider";
import {getBasketTotal} from "../contexts/reducer";
import {useHistory} from "react-router";

function Subtotal() {
    const history = useHistory();
    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contain a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"€"}
            />
            <button onClick={e => history.push('/payment')}>Process to Checkout</button>
        </div>
    )
}

export default Subtotal;