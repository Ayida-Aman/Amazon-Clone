import React from 'react'

function ProductCard({cardInfo}) {
  return (
    <div>
        <a href="">
            <img src="" alt="" />
        </a>
        <div>
            <h3>{cardInfo.title}</h3>
            <div>
                {/* description */}
                {/* rating */}
            </div>
            <div>
                {/* price */}
            </div>
        </div>
    </div>
  )
}

export default ProductCard