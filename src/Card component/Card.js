import React, {useState} from "react";
import './Card.css'
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails.js";


export default function Card(props) {
    const [quantity, setQuantity] = useState(0)

    function handleIncreaseCount(e) {
        console.log('Increase')
        setQuantity(prev => prev + 1)
    }

    function handleDecreaseCount(e) {
        console.log("Decrease")
        setQuantity(prev => prev - 1)
    }

    return(
        <>
            <div className="card">

                <div className="card__img">
                    <Link to={`/products/${props.details.id}`}>
                        <img src={props.details.image} alt="" />
                    </Link>
                </div>

                <div className="card__details">
                    <Link to={`/products/${props.details.id}`}>
                        <p className={'cart__details_dec'}>
                            {props.details.title}
                        </p>
                        <p>NGN {props.details.price * 1000}</p>
                    </Link>
                    <div className="cart__details--quantity">
                        <div className="quantity">
                            <p className='quantity__q'>Quantity : {quantity} </p>
                            <button onClick={handleDecreaseCount} disabled={quantity === 0}>-</button>
                            <button onClick={handleIncreaseCount}>+</button>
                        </div>
                    </div>
                    <button className='cart'>ADD TO CART</button>
                </div>
            </div>

            {/* <div className="productdetailProp">
                <ProductDetails toHandleIncrease={handleIncreaseCount} 
                toHandleDecrease={handleDecreaseCount} quantity={quantity}/>
            </div> */}
        </>
    )
}