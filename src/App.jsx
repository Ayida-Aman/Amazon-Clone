// import { useState } from 'react'

import './App.css'
import CarouselEffect from './components/CarouselEffect/CarouselEffect.jsx'
import CategoryCards from './components/Category/CategoryCards.jsx'
import Header from './components/Header/Header.jsx'
import Products from './components/Product/Products.jsx'

function App() {

  return (
    <>
      <Header />
      <CarouselEffect/>
      <CategoryCards/>
      <Products/>
    </>
  )
}

export default App
