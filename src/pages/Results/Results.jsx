import React, { useEffect, useState } from 'react'
import classes from "./Results.module.css"
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../API/EndPoints'
import axios from 'axios'
import ProductCard from '../../components/Product/ProductCard'

function Results() {
  let {categoryName} = useParams();
      const lowercaseCategory = categoryName.toLowerCase();

  console.log(categoryName);
  let [results, setResults] = useState([]);
  useEffect(()=>{
    axios.get(`${productUrl}/products/category/${lowercaseCategory}`).then((res)=>{
      console.log("Api response: ", res.data);
      setResults(res.data)
    }).catch((err)=>{
      console.log(err);
    })

  }, [lowercaseCategory])
  console.log(results);
  return (
    <Layout>
    <div>
      <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
          <hr />
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
    </div>
    </Layout>
  )
}

export default Results