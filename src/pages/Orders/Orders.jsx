/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { db } from "../../utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider"; 
import css from "./Orders.module.css";
import ProductCard from "../../components/Product/ProductCard";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Layout>
      <section className={css.container}>
        <div className={css.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div
              style={{
                padding: "20Px",
              }}
            >
              You don't have orders yet
            </div>
          )}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order Id: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
