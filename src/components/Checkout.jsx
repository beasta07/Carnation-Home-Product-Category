import React from 'react'

const Checkout = () => {
  return (
<div className='container w-[100%] mx-auto'>
  <div className='text-center mt-[2rem]'>
  <h1 className='text-[3rem] font-bold'>Checkout</h1>
  <p className='text-[1.5rem]'>Choose how you want your clothes.</p>
  </div>
  <div className='flex'>
    <div className='shadow-lg w-[50%] mt-[2rem] rounded-xl'>
      <img src='/public/images/Delivery.jpg' className='' />
      <div className='pl-8 mb-[2rem]'>
      <h1  className='text-[1.25rem] font-semibold'>Delivery</h1>
    <p>Indulge in the convenience of doorstep delivery, where we ensure your order reaches you directly, sparing you the hassle and ensuring a seamless shopping experience. </p>
    <button type="submit" className="bg-[black] text-[white]  text-[1.25rem] rounded-xl" > Delivery </button>

    </div>
    </div>
  </div>
</div>
  )
}

export default Checkout
