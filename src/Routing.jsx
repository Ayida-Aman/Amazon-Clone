import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import SignUp from './pages/Auth/SignUp';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/auth' element={<SignUp/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/orders' element={<Orders/>} />
        </Routes>
    </Router>
  )
}

export default Routing 