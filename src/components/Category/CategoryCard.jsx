import React from 'react'
import style from "./CategoryCards.module.css"
function CategoryCard({cardData}) {
  return (
    <>
        <div className={style.category} >
            <a href="">
                <span>
                    <h2>{cardData.title}</h2>
                </span>
                <img src={cardData.imgLink} alt="" />
                <p>Shop Now!</p>
            </a>
        </div>
    </>
  )
}

export default CategoryCard