import { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import SelectClothes from './SelectClothes';
const Products = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState("");

  useEffect(() => {
    // Function to extract selectedOption from URL parameters
    const params = new URLSearchParams(location.search);
    const option = params.get('selectedOption');
    if (option) {
      setSelectedOptions(option);
    }
  }, []);


  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };
const renderContent = () =>{
  switch(selectedOptions){
    case "Shirts":
      return(
        <>
  <div className=''>
          <h1 className='text-center mt-[4rem] font-bold text-[3rem] mb-[2rem]'>{selectedOptions}</h1>
        </div>
        <div className='flex gap-[3rem] justify-center'>
          <div>    <img src='/images/Shirts/WhiteShirt.jpg' alt='White Shirt' /> <span className="ml-[2rem] font-semibold">White Shirt</span>  </div>
          <div><img src='/images/Shirts/LongSleeve.jpg' alt='Long Sleeve Shirt' /> <span className="ml-[1rem] font-semibold">Long Sleeve Shirt</span></div>
          <div><img src='/images/Shirts/BlueShirts.jpg' alt='Blue Shirt' /> <span className="ml-[3rem] font-semibold">Blue Shirt</span></div>
          <div><img src='/images/Shirts/ShortSleeve.jpg' alt='Short Sleeve Shirt' /> <span className="ml-[1rem] font-semibold">Short Sleeve Shirt</span></div>
        </div>
        </>
      );
      case "Pants":
        return(
          <>
    <div className=''>
            <h1 className='text-center mt-[4rem] font-bold text-[3rem] mb-[2rem]'>{selectedOptions}</h1>
          </div>
          <div className='flex gap-[3rem] justify-center'>
            <div>    <img src='/public/images/Pants/Black.jpg' alt='Black Pants' /> <span className="ml-[2rem] font-semibold">Black Pants</span>  </div>
            <div><img src='/public/images/Pants/Grey.jpg' alt='Long Sleeve Shirt' /> <span className="ml-[1rem] font-semibold">Grey Pants</span></div>
            <div><img src='/public/images/Pants/Navy.jpg' alt='Blue Shirt' /> <span className="ml-[3rem] font-semibold">Navy Pants</span></div>
          </div>
          </>
        );
        case "Skirts":
          return(
            <>
      <div className=''>
              <h1 className='text-center mt-[4rem] font-bold text-[3rem] mb-[2rem]'>{selectedOptions}</h1>
            </div>
            <div className='flex gap-[3rem] justify-center'>
              <div>    <img src='/public/images/Skirts/Black.jpg' alt='Black Skirts' /> <span className="ml-[2rem] font-semibold">Black Skirt</span>  </div>
              <div><img src='/public/images/Skirts/Grey.jpg' alt='Grey Skirts' /> <span className="ml-[1rem] font-semibold">Grey Skirts</span></div>
              <div><img src='/public/images/Skirts/Navy.jpg' alt='Blue Skirts' /> <span className="ml-[3rem] font-semibold">Blue Skirts</span></div>
            </div>
            </>
          );
          case "House Shirts":
            return(
              <>
        <div className=''>
                <h1 className='text-center mt-[4rem] font-bold text-[3rem] mb-[2rem]'>{selectedOptions}</h1>
              </div>
              <div className='flex gap-[3rem] justify-center'>
                <div>    <img src='/public/images/House Shirts/Whitea.jpg' alt='White House Shirt' /> <span className="ml-[2rem] font-semibold">White House Shirt</span>  </div>
                <div><img src='/public/images/House Shirts/Navy.jpg' alt='Navy House Shirt' /> <span className="ml-[1rem] font-semibold">Navy House Shirt</span></div>
                <div><img src='/public/images/House Shirts/Red.jpg' alt='Red House Shirt' /> <span className="ml-[3rem] font-semibold">Red House Shirt</span></div>
              </div>
              </>
            );
          
        

  }
}

  return (
    <>
      <div className='container w-[100%] mx-auto '>
      {renderContent()}
      </div>
      <hr className='border mt-8 border-gray-300 ' />
      <div className='container w-[100%] mx-auto grid md:grid-cols-3 grid-cols-1 gap-12'>
        <div className=' overflow-hidden' >
        <div className='mt-16 border mx-2 md:mx-0 border-black shadow-lg rounded-lg hover:-95 duration-300 ml-5'>
          <img src='/images/Shirts/Products.jpg' className='rounded-lg shadow mb-2 w-full h-[20rem] object-cover object-top' />
          <h1 className='px-4 py-2 font-semibold'>Blue Shirt</h1>
          <p className="px-4">
            The blue formal cotton uniform shirt, a staple for students, offers both style and comfort
          </p>
          <Link to="/selectClothes">

          <button onClick={toggleTextVisibility} className='py-2 px-4 bg-black text-white rounded-xl font-semibold mx-4 my-3'>
           View Product
          </button>
          </Link>

        </div>
      </div>
      <div className=' overflow-hidden' >
        <div className='mt-16 border mx-2 md:mx-0 border-black shadow-lg rounded-lg hover:-95 duration-300 ml-5'>
          <img src='/images/Shirts/DemoShirt.jpg' className='rounded-lg shadow mb-2 w-full h-[20rem] object-cover object-top' />
          <h1 className='px-4 py-2 font-semibold'>Blue Shirt</h1>
          <p className="px-4">
            The blue formal cotton uniform shirt, a staple for students, offers both style and comfort
          </p>
          <Link to="/selectClothes">

          <button onClick={toggleTextVisibility} className='py-2 px-4 bg-black text-white rounded-xl font-semibold mx-4 my-3'>
           View Product
          </button>
          </Link>

        </div>
      </div>


      <div className=' overflow-hidden' >
        <div className='mt-16 border mx-2 md:mx-0 border-black shadow-lg rounded-lg hover:-95 duration-300 ml-5'>
          <img src='/images/Shirts/DemoShirt.jpg' className='rounded-lg shadow mb-2 w-full h-[20rem] object-cover object-top' />
          <h1 className='px-4 py-2 font-semibold'>Blue Shirt</h1>
          <p className="px-4">
            The blue formal cotton uniform shirt, a staple for students, offers both style and comfort
          </p>
          <Link to="/selectClothes">

          <button onClick={toggleTextVisibility} className='py-2 px-4 bg-black text-white rounded-xl font-semibold mx-4 my-3'>
           View Product
          </button>
          </Link>

        </div>
      </div>
      </div>
    </>
  );
}

export default Products;
