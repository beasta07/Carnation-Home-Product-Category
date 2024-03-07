import  { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import {Link} from "react-router-dom"

const SelectClothes = () => {
    const [count, setCount] = useState(1);

    function AddHandleClick() {
        setCount(count + 1);
    }

    function SubHandleClick() {
        setCount(count - 1);
    }

    const [selectedSize, setSelectedSize] = useState(null);

    // Function to handle click on a size
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const images = [
        "images/uniformdemo.jpg",
        "images/uniformdemo2.jpg",
        "images/uniformdemo3.jpg",
        "images/uniformdemo4.jpg",
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeImage = (index) => {
        setCurrentImageIndex(index);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="container w-[100%] mx-auto mt-[2rem]">
            <div className="sm:flex gap-[8rem] px-5 sm:px-0">
                <div>
                    <div className="relative">
                        <img
                            src={images[currentImageIndex]}
                            className="w-[120rem] sm:h-[35rem] h-[20rem] object-cover object-top mb-4 sm:rounded-xl"
                        />
                        <button onClick={previousImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                            <HiOutlineChevronLeft className="text-gray-700" />
                        </button>
                        <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                            <HiOutlineChevronRight className="text-gray-700" />
                        </button>
                    </div>
                    <div className="flex gap-6 mt-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className="w-16 sm:rounded-xl cursor-pointer"
                                onClick={() => changeImage(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="font-semibold mt-[5rem]">
                    <h1 className="pb-[2rem]">HOME / THE SHOP</h1>
                    <p className="text-2xl pb-2">Full Sleeve White Shirt</p>
                    <p className="text-2xl  pb-[1.5rem]">$99</p>
                    <p className="font-normal text-[0.85rem] justify-normal leading-[1.5rem] pb-[2rem]">
                        Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                        elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies
                        tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna
                        posuere eget.
                    </p>
                    <div className="flex pb-[3rem]">
                        <span className="mr-[3rem] text-[1.2rem]">SIZES</span>
                        <div
                            className={`border font-normal border-gray-300 px-[0.5rem] w-[3rem] text-center hover:border-black mr-2 ${
                                selectedSize === "XS" ? "border-black" : ""
                            }`}
                            onClick={() => handleSizeClick("XS")}
                        >
                            XS
                        </div>
                        <div
                            className={`border font-normal border-gray-300 px-[0.5rem] w-[3rem] text-center hover:border-black mr-2 ${
                                selectedSize === "S" ? "border-black" : ""
                            }`}
                            onClick={() => handleSizeClick("S")}
                        >
                            S
                        </div>
                        <div
                            className={`border font-normal border-gray-300 px-[0.5rem] text-center w-[3rem] hover:border-black mr-2 ${
                                selectedSize === "M" ? "border-black" : ""
                            }`}
                            onClick={() => handleSizeClick("M")}
                        >
                            M
                        </div>
                        <div
                            className={`border font-normal border-gray-300 px-[0.5rem] w-[3rem] text-center hover:border-black mr-2 ${
                                selectedSize === "L" ? "border-black" : ""
                            }`}
                            onClick={() => handleSizeClick("L")}
                        >
                            L
                        </div>
                        <div
                            className={`border font-normal border-gray-300 px-[0.5rem] w-[3rem] text-center hover:border-black mr-2 ${
                                selectedSize === "XL" ? "border-black" : ""
                            }`}
                            onClick={() => handleSizeClick("XL")}
                        >
                            XL
                        </div>
                    </div>
                    <div className="flex sm:mb-0 mb-2">
                        <div className="border font-normal border-gray-300 p-5 flex mr-4  rounded-xl">
                            <div onClick={SubHandleClick} className="mr-5 cursor-pointer">
                                -
                            </div>
                            <div>{count}</div>
                            <div onClick={AddHandleClick} className="ml-5 cursor-pointer">
                                +
                            </div>
                        </div>
                        <Link to="/Checkout">
                        <button type="submit" className="bg-[black] text-[white] w-[15.3rem] h-[4rem] text-[1.25rem] rounded-xl">
                            Checkout
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectClothes;

