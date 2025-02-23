import React from "react";
import { useAuth } from "./context/AuthProvider";
import { DropDown } from "./DropDown";

const NavBar: React.FC = () => {
  const { name, picture } = useAuth();

  return (
    <nav className="relative px-10 bg-gray-800 text-white h-fit py-2 flex justify-between items-center font-sans">
      <div className="flex flex-col items-center space-x-2">
        <h1 className="text-orange-500 text-3xl">agioletto</h1>
        <div className="text-center font-light">management system</div>
      </div>
      <div className="hidden sm:block">
        <h2 className="text-sm mt-1 border rounded-full px-7 py-1 bg-orange-600 shadow-black shadow-md text-white sm:text-xl">Hola, {name}</h2>
      </div>
      <DropDown>
        <img
          src={picture ?? ""}
          alt={"pfp pic"}
          className="w-12 h-12  rounded-full cursor-pointer hover:scale-125 transform transition-all"
        />
      </DropDown>
    </nav>
  );
};

export default NavBar;
