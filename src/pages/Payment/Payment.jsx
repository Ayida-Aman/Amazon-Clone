import React, { useContext, useState } from 'react'
import classes from "./Payment.module.css"
import Layout from '../../components/Layout/Layout'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from "../../components/Product/ProductCard"
import {useCheckout, PaymentElement} from '@stripe/react-stripe-js';
import { ClipLoader } from "react-spinners";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../API/axios'
import { db } from '../../utility/firebase'
import { useNavigate } from 'react-router-dom'
import { Type } from '../../utility/action.type'

function Payment() {
  const [{user, basket}, dispatch] = useContext(DataContext)
    const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
    const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
    const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState(null);
  const navigate = useNavigate()
  const handleChange = (e) => {
    // console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const handlePayment = async (e)=>{
    e.preventDefault();
    try {
      setProcessing(true)
      const response = await axiosInstance({
        method: "POST", // Fixed "method"
        url: `/payments/create?total=${total * 100}`,
        // Correctly use template literal
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      await db
              .collection("users")
              .doc(user.uid)
              .collection("orders")
              .doc(paymentIntent.id)
              .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
              });
              // empty the basket
              dispatch({type: Type.EMPTY_BASKET})
      console.log(paymentIntent);
      navigate("/orders", { state: { msg: "You have placed new order " } });
      setProcessing(false)
    } catch (error) {
      setProcessing(false)
      console.log(error);
    }
  }
  return (
    <Layout>
      {/* payment header */}
    <div className={classes.payment__header}>Check out ({totalItem}) items</div>
    <hr />

    {/* payment methods */}
    <section className={classes.Payment}>
      {/* address */}
      <div className={classes.flex}>
        <h3>Delivery Address </h3>
          <div>
            <div>{user?.email}</div>
            <div>123, React, Lane</div>
            <div>Chicago</div>
          </div>
      </div>
      <hr />

      {/* products */}
      <div className={classes.flex}>
        <h3>Review items and delivery</h3>
        <div>
            {basket?.map((item) => (
              <ProductCard product={item} key={item.id} flex={true} />
            ))}
          </div>
      </div>
      <hr />

      {/* card form */}
      <div className={classes.flex}>
        <h3>Payment methods</h3>
        <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange}/>
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p> Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type='submit'>
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} /> <p>Please Wait</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Payment