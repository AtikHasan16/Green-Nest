import React from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const GoTop = () => {
    return (
      <div>
        <a href="#top" aria-label="Go to top">
          <div className="h-13 bg-green-800 w-13  rounded-full fixed bottom-3 right-3 cursor-pointer flex justify-center items-center  transition-all duration-300">
            <BiArrowFromBottom
              size={30}
              className=" animate-bounce pt-1"
              color="white"
            ></BiArrowFromBottom>
          </div>
        </a>
      </div>
    );
};

export default GoTop;