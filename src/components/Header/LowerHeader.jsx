import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import css from "./Header.module.css"

function LowerHeader() {
  return (
    <>
        <div className={css.lower__container}>
            <ul>
                <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
            </ul>
        </div>
    </>
  )
}

export default LowerHeader