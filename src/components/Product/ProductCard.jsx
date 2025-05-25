import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import style from "./Products.module.css"
import { Link } from 'react-router-dom';
function ProductCard({product, flex, renderDesc}) {
    let { image, title, id, rating, price, description } = product;
    return (
    <div className={`${style.card__container} ${flex ? style.product__flexed : ""}`} >
        <Link to={`/products/${id}`}>
                <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div className={style.renderDesc} >{description}</div>}
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