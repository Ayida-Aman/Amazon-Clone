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
import Results from './pages/Results/Results';
import ProductDetail from './pages/ProductDetail/ProductDetail'
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
const stripePromise = loadStripe('pk_test_51RUcHFR6NeYjmE7iX0q9eHjAJpCqLuqznw4xGJHAvzKY1qhWeMOiQV32Hl3zAw1sJsY6ST5XxDmqAibpTIj0jSsU00vMuX29RO');
function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/auth' element={<SignUp/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path="/category/:categoryName" element={<Results/>} /> {/* :categoryName is a variable that holds where the user navigates */}
            <Route path='/products/:productId' element={<ProductDetail/>} />
            <Route path='/payment' element={
              <ProtectedRoute msg={"You must log in to pay"} redirect={"/payment"}>
              <Elements stripe={stripePromise} >
                <Payment/> 
              </Elements>
              </ProtectedRoute>
              } />
            <Route path='/orders' element={
              <ProtectedRoute msg={"You must log in to access orders page"} redirect={"/orders"}>
                <Orders/>
              </ProtectedRoute>
              } />
        </Routes>
    </Router>
  )
}

export default Routing 