import React, {useEffect, useState} from "react";
import useFetch from "../useFetch";
import { useRouteMatch, useParams } from "react-router";
import Loader from "../Loader";
import './ProductDetails.css'

export default function ProductDetails() {
    const {get} = useFetch('https://fakestoreapi.com')
    const {url} = useRouteMatch()
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
        get('/'+url)
        .then(data => {
            localStorage.setItem('product', JSON.stringify(data))
            setProduct(data)
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
                <h2>Price :NGN  {product.price * 1000}</h2>
                <h4>Discount :  </h4> <span>20% off</span>
           </div>
       </div>
    </div>
        
        

}