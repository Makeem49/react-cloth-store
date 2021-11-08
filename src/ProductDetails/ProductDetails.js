import React, {useEffect, useState} from "react";
import useFetch from "../useFetch";
import { useRouteMatch } from "react-router";
import Loader from "../Loader";
import './ProductDetails.css'

export default function ProductDetails() {
    const {get} = useFetch('https://fakestoreapi.com')
    const {url} = useRouteMatch()
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState({})

    const amount = product.price * 0.2
    const discount = product.price - amount
    const amountOff = product.price * 0.8
    const discountPer = product.price - amountOff

    useEffect(() => {
        get('/'+url)
        .then(data => {
            localStorage.setItem('product', JSON.stringify(data))
            setProduct(data)
            setIsLoading(false)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    return <div className="product-container">
        <div className="loader">{(isLoading) ? <Loader/> : ''}</div>
       <div className="product-details">
           <div className="col product-details__image">
                <img src={product.image} alt="" />
           </div>
           <div className="col product-details__decription">
                <div className="details-title">
                    <h3>Product description : </h3>
                    <p className="description-product"> 
                        {product.description}
                    </p>
                </div>
                <h2>Price :NGN {discount.toFixed(2) * 100}</h2>
                <h4>Discount :NGN { discountPer.toFixed(2) * 100 }  </h4> <span>20% off</span>
                <div className="category">
                    <p> Category :  {product.category}</p>
                </div>
                <div className="rating">
                    {/* <p><strong>rating</strong> : {product?.rating.rate}</p> */}
                </div>


                {/* <div className="cart__details--quantity">
                        <div className="quantity">
                            <p className='quantity__q'>Quantity : {quantity} </p>
                            <button onClick={toHandleDecrease} disabled={quantity === 0}>-</button>
                            <button onClick={toHandleIncrease}>+</button>
                        </div>
                </div>
                <button className='cart'>ADD TO CART</button> */}




           </div>
       </div>


        <div className="reviews">
            <h2>Product reviews : </h2>

            <div className="user">
                <h3>John Kyle </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel at minus aperiam blanditiis officia non eveniet error facilis obcaecati pariatur.</p>
            </div>

            <div className="user">
                <h3>Kyle Loris</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel at minus aperiam blanditiis officia non eveniet error facilis obcaecati pariatur.</p>
            </div>

            <div className="user">
                <h3>Doe Kevin.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel at minus aperiam blanditiis officia non eveniet error facilis obcaecati pariatur.</p>
            </div>
        </div>

    </div>
        
        

}