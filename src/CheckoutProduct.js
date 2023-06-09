import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({id,image,title,price,rating}) {
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image}/>
      <div className='checkoutProduct_info'>
         <p className='checkoutProducr_title'>{title}
         <small>₹</small>
         <strong>{price}</strong>
         </p> 
         <div className='checkoutProduct_rating'>
            {Array(rating)
            .fill()
            .map((_,i)=>(
                <p>*</p>
            ))}

         </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
