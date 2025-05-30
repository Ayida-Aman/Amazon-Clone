// import { useState } from 'react'

import { useContext, useEffect } from 'react'
import './App.css'
// import CarouselEffect from './components/CarouselEffect/CarouselEffect.jsx'
// import CategoryCards from './components/Category/CategoryCards.jsx'
// import Header from './components/Header/Header.jsx'
// import Products from './components/Product/Products.jsx'
import Routing from './Routing.jsx'
import { DataContext } from './components/DataProvider/DataProvider.jsx'
import { auth } from './utility/firebase.jsx'
import { Type } from './utility/action.type.js'

function App() {
  const [{user}, dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        })
      } else{
        dispatch({
          type: Type.SET_USER,
          user: null,
        })
      }
    })
  },[])
  return (
    <>
      <Routing/>
    </>
  )
}

export default App
