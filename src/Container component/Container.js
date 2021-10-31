import React, {useState, useEffect} from "react";
import './Container.css'
import Card from "../Card component/Card";
import useFetch from "../useFetch.js";
import Loader from "../Loader.js";
import '../index.css'


export default function Container() {
    const [products, setProducts] = useState(() => {
        const getProduct = localStorage.getItem('products')
        if(getProduct) {
            return JSON.parse(getProduct)
        } else {
            return []
        }
    })
    const {get, setIsLoading, isLoading} = useFetch('https://fakestoreapi.com')

    useEffect(() => {
        get('/products')
        .then(data => {
            localStorage.setItem('products', JSON.stringify(data))
            setProducts(data)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    
    const listproduct = products?.map(product => {
        return <Card details={product} key={product.id}/>
    })

    return <div className="container">
            <div className="text">
                    <input type="text" className='text__input' placeholder={'Search product'}/>
            
                    <select name="" id="" className='text__select'>
                        <option value="">Select category</option>
                        <option value="">Men Clothing</option>
                        <option value="">Jewelery</option>
                        <option value="">Women Clothing</option>
                        <option value="">Electronics </option>
                    </select>
            </div>
            <div className="loader">{(isLoading) ? <Loader className='spinner'/> : ''}</div>
        <div className="card--container">
            { listproduct }
        </div>
    </div>
}