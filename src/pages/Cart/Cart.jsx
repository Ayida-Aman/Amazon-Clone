import React, { useContext } from 'react'
import classes from "./Cart.module.css"
import Layout from '../../components/Layout/Layout'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Type } from '../../utility/action.type'
function Cart() {
  const [{basket, user}, dispatch]= useContext(DataContext)
  const total = basket.reduce((amount,item)=>{ //amount is the previous value item is the new value
    return item.price * item.amount + amount
  }, 0) //0 is the initial amount value
  console.log(basket);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    })
  }
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    })
      console.log(id);
  }
  return (

    <Layout>
    <section className={classes.container}>
      <div className={classes.cart__container}>
        <h2 style={{padding: '10px 0'}}>Hello</h2>
        <h3>Your shopping list</h3>
        <hr />
        {
          basket?.length==0? (<p>Oops! Your cart is empty.</p>):(
            basket?.map((item,i)=>{
              return (<section className={classes.cart__product}>
                 <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
              <div className={classes.button__container}>
                    <button className={classes.btn} onClick={() => increment(item)}>
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
              </section>)
            })
          )
        }
      </div>
      {
        basket?.length !==0&&(
          <div className={classes.subtotal}>
             <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount = {total}/>
             </div>
             <div>
              <input type="checkbox" />
              <small>This order contains a gift</small>
             </div>
             <Link to="/payment">Continue to checkout</Link>
          </div>
        ) 
      }
      
    </section>
    </Layout>
  )
}

export default Cart