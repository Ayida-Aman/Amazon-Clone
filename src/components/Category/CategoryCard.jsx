import React from 'react'
import style from "./CategoryCards.module.css"
import { Link } from "react-router-dom";

function CategoryCard({cardData}) {
  console.log(cardData);
  return (
    <>
        <div className={style.category} >
          
            <Link to={`/category/${cardData.title}`}>
                <span>
                    <h2>{cardData.title}</h2>
                </span>
                <img src={cardData.imgLink} alt="" />
                <p>Shop Now!</p>
            </Link>
        </div>
    </>
  )
}

export default CategoryCard