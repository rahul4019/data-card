import React from "react";
import { useState } from "react";

import DetailCard from "./DetailCard";

const ListCard = () => {
  const [expandCard, setExpandCard] = useState(false);

  const handleBtn = () => {
    setExpandCard(!expandCard);
  };

  return (
    <div className="flex flex-col w-full max-w-7xl border rounded-lg bg-white shadow-md  duration-300 p-2 my-2">
      <div className="flex flex-col items-center justify-center my-5 w-full md:flex-row md:justify-around md:pl-4 md:h-28 ">
        <div className="my-2 text-xl md:text-lg">Hellomet</div>
        <div className="flex flex-col w-full md:flex-row md:justify-around ">
          <div className="flex justify-evenly my-2 md:flex-col">
            <div className="font-bold text-xl md:text-lg">CONTACT</div>
            <p className="text-xl md:text-lg">Swapnil Warng</p>
          </div>
          <div className="flex justify-evenly my-2 md:flex-col">
            <div className="font-bold text-xl md:text-lg">CITY</div>
            <p className="text-xl md:text-lg">Mumbai</p>
          </div>
          <div className="flex justify-evenly my-2 md:flex-col ">
            <div className="font-bold text-xl md:text-lg">STATE</div>
            <p className="text-xl md:text-lg">Maharastra</p>
          </div>
        </div>
        <div className="flex w-full justify-center my-2 md:w-1/3 md:justify-end">
          <button
            className="w-1/2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 md:w-2/3"
            onClick={() => handleBtn()}
          >
            {expandCard ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
      <div>{expandCard && <DetailCard />}</div>
    </div>
  );
};

export default ListCard;
