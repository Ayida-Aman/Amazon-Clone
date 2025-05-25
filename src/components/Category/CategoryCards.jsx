import React from 'react'
import style from "./CategoryCards.module.css"
import {categoryData} from "./categoryData"
import CategoryCard from './CategoryCard'

function CategoryCards() {
  return (
    <div className={style.category__container}>
        {
            categoryData.map((info) => {
                return <CategoryCard cardData={info}/>
            })
        }
    </div>
  )
}

export default CategoryCards