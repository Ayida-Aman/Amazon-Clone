import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import style from "./Products.module.css"
function ProductCard({cardInfo}) {
      let { image, title, id, rating, price, description } = cardInfo;

  return (
    <div className={style.card__container} >
        <a href="">
            <img src={image} alt="" />
        </a>
        <div>
            <h3>{title}</h3>
            <div>
                {/* rating */}
                <Rating  className={style.rating} value= {rating.rate} precision = {0.1} />
                <small>{rating.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price} />
                <button className={style.button}>
                    add to cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard