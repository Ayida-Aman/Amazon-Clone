import React, { useEffect, useState } from 'react'
import classes from "./Results.module.css"
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../API/EndPoints'
import axios from 'axios'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'

function Results() {
  let {categoryName} = useParams();
      const lowercaseCategory = categoryName.toLowerCase();

  console.log(categoryName);
  let [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios.get(`${productUrl}/products/category/${lowercaseCategory}`).then((res)=>{
      console.log("Api response: ", res.data);
      setLoading(false);
      setResults(res.data)
    }).catch((err)=>{
      setLoading(false)
      console.log(err);
    })

  }, [lowercaseCategory])
  console.log(results);
  return (
    <Layout>
    {
      loading? (<Loader/>) : (<div>
      <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
          <hr />
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
    </div>)
    }
    </Layout>
  )
}

export default Results