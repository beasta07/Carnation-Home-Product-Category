import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectSchool = () => {
  const [SelectedSchool, setSelectedSchool] = useState("");
  const [SelectedDress, setSelectedDress] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();

  const handleNextButtonClick = () => {
    if (!SelectedSchool && !SelectedDress) {
      setErrorMessage("Please select a school and type of dress.");
    } else if (!SelectedSchool) {
      setErrorMessage("Please select a school.");
    } else if (!SelectedDress) {
      setErrorMessage("Please select a type of dress.");
    } else {
      const url = `/SelectCategory?school=${encodeURIComponent(
        SelectedSchool
      )}&dress=${encodeURIComponent(SelectedDress)}`;
      Navigate(url);
    }
  };

  return (
    <div className=" bg-black h-screen md:h-auto ">
      <div className="flex ">
        <div className="flex items-center md:w-[50%] mt-28 md:mt-0">
          <div className="text-white  mx-auto md:px-20 px-12">
            <p className="text-4xl md:text-7xl font-bold leading-[4rem] md:leading-[5.5rem] mb-8 md:mb-0">
              <span className="text-black bg-[white] p-2 rounded-xl mb-0 md:mb-[2rem]">
                Choose
              </span>{" "}
              Your School
            </p>

            <select
              name="Choose School"
              required
              id=""
              value={SelectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="w-full md:w-auto mb-3  input-field bg-black text-xl  md:text-3xl md:mt-2 focus:outline-none mr-12 border border-gray-700 rounded-md px-3 py-4 md:py-2 "
            >
              <option className='text-xl' value="" disabled>
                Choose School
              </option>
              <option className='text-xl' value="GEMS School">GEMS School</option>
              <option className='text-xl' value="Lumbini School">Lumbini School</option>
              <option className='text-xl' value="Love School">Love School</option>
            </select>
            <select
              name="Type of Dress"
              required
              id=""
              value={SelectedDress}
              onChange={(e) => setSelectedDress(e.target.value)}
              className="w-full md:w-auto input-field text-xl  bg-black md:text-3xl mt-2  border border-gray-700  px-3 py-4 md:py-2 focus:outline-none "
            >
              <option className='text-xl' value="" disabled>
                Type of Dress
              </option>
              <option className='text-xl' value="Uniform">Uniform</option>
              <option className='text-xl' value="House Dress">House Dress</option>
            </select>
            {ErrorMessage && <p className="text-red-500">{ErrorMessage}</p>}

            <br />
            <button
              onClick={handleNextButtonClick}
              className="py-2 md:py-3 px-7 md:px-8 bg-white text-black rounded-xl text-xl font-semibold mt-12"
            >
              Next
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="overflow h-screen overflow-y-hidden hidden md:block bg-[url('images/School.jpg')]">
              <img
                src="images/School.jpg"
                className="hidden sm:block  w-[100%] object-cover h-screen"
              />
              <div className="hidden md:block h-screen absolute top-0 right-0 bg-black bg-opacity-50 z-[999] w-[50%] text-gray-100 text-opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSchool;
