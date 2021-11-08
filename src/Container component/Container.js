import React, {useState, useEffect} from "react";
import './Container.css'
import Card from "../Card component/Card";
import useFetch from "../useFetch.js";
import Loader from "../Loader.js";
import '../index.css'
import ProductDetails from "../ProductDetails/ProductDetails";


export default function Container() {
    const [products, setProducts] = useState(() => {
        const getProduct = localStorage.getItem('products')
        if (getProduct) {
            return JSON.parse(getProduct)
        } else {
            return []
        }
    })
    const [isLoading , setIsLoading ] = useState(() => {
        const load = localStorage.getItem('load')
        if (load) {
            return false 
        }
        return true
    })

    const {get} = useFetch('https://fakestoreapi.com')

    useEffect(() => {
        get(`/products`, {
            mode : 'no-cors'
        })
        .then(data => {
            localStorage.setItem('products', JSON.stringify(data))
            setIsLoading(false)
            localStorage.setItem('load', isLoading)
            setProducts(data)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])


    function handleSelect(e) {
        let filterItem = e.target.value
        console.log(filterItem)
        get(`/products/category/${filterItem}`, {
            mode : 'no-cors'
        })
        .then(data => {
            localStorage.setItem('products', JSON.stringify(data))
            setIsLoading(false)
            localStorage.setItem('load', isLoading)
            console.log(data)
            setProducts(data)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    
    const listproduct = products?.map(product => {
        return <Card details={product} key={product.id}/>
    })

    return <div className="container">
            <div className="text">
                    <input type="text" className='text__input' placeholder={'Search product'}/>
            
                    <select name="" id="" className='text__select' onChange={handleSelect}>
                        <option value="">Select category</option>
                        <option value="men's clothing">Men Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="women's clothing">Women Clothing</option>
                        <option value="electronics">Electronics </option>
                    </select>
            </div>
            <div className="loader">{(isLoading) ? <Loader className='spinner'/> : ''}</div>
        <div className="card--container">
            { listproduct }
        </div>
    </div>
}