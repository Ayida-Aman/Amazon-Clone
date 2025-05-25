import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import style from "./Products.module.css"
import Loader from '../Loader/Loader'
function Products() {
    const [products, setProducts] = useState()
      const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
            setLoading(true);
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProducts(res.data)
                setLoading(false);

        }).catch((err) => {
            console.log(err);
                setLoading(false);

        })
    }, [])
    
  return (
    <>

    {
        loading? (<Loader/>) : (    <section  className={style.products__container} >
        {
            products?.map((singleProduct) => {
                return (
                    <ProductCard product= {singleProduct} key={singleProduct.id} />
                )
            })
        }
    </section>)
    }
    
    </>

  )
}

export default Products