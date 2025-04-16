import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

interface SetOrderProps {
    isAscending: boolean;
    toggleOrder: () => void;
  }
  
  const SetOrder: React.FC<SetOrderProps> = ({ isAscending, toggleOrder }) => {
    return (
      <button onClick={toggleOrder} className="text-4xl md:text-3xl pr-10 text-orange-600">
        <IoIosArrowDropdown
          className={`transform transition-transform duration-300 ${isAscending ? "rotate-0" : "rotate-180"}`}
        />
      </button>
    );
  };
  
  export default SetOrder;
  

