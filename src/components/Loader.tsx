import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ff8800"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    <h1 className="font-bold text-sm lg:text-2xl text-orange-500 text-center">
      Buscando su información, <br />
      aguarde un momento
    </h1>
    </div>
  );
};

export default Loader;
