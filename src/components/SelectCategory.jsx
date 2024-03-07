import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SelectCategory = () => {
  // Extract location to get query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dress = queryParams.get('dress');
  const [SelectedOptions,setSelectedOptions]= useState("")
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    setSelectedOptions(event.target.value)
  }
 const handleNextButtonClick = () =>{
    navigate('/product?SelectedOptions=${SelectedOptions}')
 }
  return (
    <div className='bg-black h-screen md:h-auto'>
      <div className='flex'>
        <div className='flex md:items-center md:w-[50%] mt-28 md:mt-0'>
          <div className='text-white mx-auto md:px-20 px-12'>
            <p className='text-4xl md:text-7xl font-bold leading-[4rem] md:leading-[5.5rem] mb-8 md:mb-0'>
              <span className='text-black bg-[white] p-2 rounded-xl mr-4'>Choose</span><span className='mt-6'>{dress}</span>
            </p>
            <select
              name="Type of dress"
              required
              id=""
              className='w-full md:w-auto input-field text-xl bg-black md:text-3xl mt-2 border border-gray-700 px-3 py-4 md:py-2 focus:outline-none'
            onChange={handleSelectChange}
            >
              <option className='text-xl' disabled defaultValue>Type of dress</option>
              {dress === 'Uniform' ? (
                <>
                  <option className='text-xl'>Shirts</option>
                  <option className='text-xl'>Pants</option>
                  <option className='text-xl'>Skirts</option>
                  <option className='text-xl'>Shoes</option>
                </>
              ) : dress === 'House Dress' ? (
                <>
                  <option className='text-xl'>House Shirts</option>
                  <option className='text-xl'>Trousers</option>
                  <option className='text-xl'>TrackSuits</option>
                </>
              ) : null}
            </select>
            <br />
            <button className='py-2 md:py-3 px-7 md:px-8 bg-white text-black rounded-xl text-xl font-semibold mt-12' onClick={handleNextButtonClick}>Next</button>
          </div>
        </div>
        <div className='h-screen'>
          <img src='/public/images/StudentsinUniform.jpg' className='hidden sm:block h-screen ml-[5.7rem] w-[90%] object-cover' />
          <div className='hidden md:block h-screen absolute top-0 right-0 bg-black bg-opacity-50 z-[999] w-[55%] text-gray-100 text-opacity-20'></div>
        </div>
      </div>
    </div>  
  );
}

export default SelectCategory;
