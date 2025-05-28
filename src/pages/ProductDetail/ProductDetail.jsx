import React, { useEffect, useState } from 'react'
// import classes from "./ProductDetail.module.css"
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../API/EndPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';
function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    axios.get(`${productUrl}/products/${productId}`).then((res)=>{
      setProduct(res.data)
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
      console.log(
        err
      );
    })
  }, [productId])
  return (
  <Layout>
    {loading ? <Loader/> : <ProductCard product={product} flex={true} renderDesc = {true} renderAdd={true} />  }
  </Layout>
);
}

export default ProductDetail