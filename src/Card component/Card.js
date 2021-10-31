import React, {useState} from "react";
import './Card.css'

export default function Card(props) {
    const [quantity, setQuantity] = useState(0)

    function handleIncreaseCount(e) {
        setQuantity(prev => prev + 1)
    }

    function handleDecreaseCount(e) {
        setQuantity(prev => prev - 1)
    }

    return(
        <div className="card">
            <div className="card__img">
                <img src={props.details.image} alt="" srcset="" />
            </div>
            <div className="card__details">
                
                <p className={'cart__details_dec'}>
                    {props.details.title}
                    <p>NGN {props.details.price * 1000}</p>
                </p>

                <div className="cart__details--quantity">
                    <p>Add to cart</p>
                    <div className="quantity">
                        <p className='quantity__q'>Quantity : {quantity} </p>
                        <button onClick={handleDecreaseCount} disabled={quantity === 0}>-</button>
                        <button onClick={handleIncreaseCount}>+</button>
                    </div>
                </div>

            </div>
        </div>
    )
}