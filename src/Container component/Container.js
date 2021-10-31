import React, {useState, useEffect} from "react";
import './Container.css'
import Card from "../Card component/Card";
import useFetch from "../useFetch.js";
import Loader from "../Loader.js";


export default function Container() {
    const [products, setProducts] = useState([])
    const {get, setIsLoading, isLoading} = useFetch('https://fakestoreapi.com')

    useEffect(() => {
        get('/products')
        .then(data => {
            // console.log({data})
            setProducts(data)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    console.log(typeof products)

    
    const listproduct = products.map(product => {
        return <Card details={product} key={product.id}/>
    })

    console.log({listproduct})

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
            {(isLoading) ? <Loader /> : ''}
        <div className="card--container">
            { listproduct }
        </div>
    </div>
}