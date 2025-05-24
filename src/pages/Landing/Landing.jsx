import React from 'react'
import Layout from '../../components/Layout/Layout'
import CarouselEffect from '../../components/CarouselEffect/CarouselEffect'
import CategoryCards from '../../components/Category/CategoryCards'
import Products from '../../components/Product/Products'

function Landing() {
  return (
    <div>
        <Layout >
            <CarouselEffect />
            <CategoryCards/>
            <Products/>
        </Layout>
    </div>
  )
}

export default Landing