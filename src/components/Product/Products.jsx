import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import style from "./Products.module.css"
function Products() {
    const [products, setProducts] = useState()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    
  return (
    <section  className={style.products__container} >
        {
            products?.map((singleProduct) => {
                return (
                    <ProductCard cardInfo= {singleProduct} key={singleProduct.id} />
                )
            })
        }
    </section>
  )
}

export default Products