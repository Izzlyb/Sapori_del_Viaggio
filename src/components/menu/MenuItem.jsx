import React from "react";
import Image from "next/image";

const MenuItem = () => {
  return (
      <div className="bg-[#d5d5d5] p-4 rounded-lg text-center hover:bg-[#fff] hover:shadow-md hover:shadow-[black]/25 transition-all">
        <div className="text-center ">  
          <Image 
              src="/pizza.png" alt="pizza pie" 
              width={100} height={100} 
              className="max-h-auto max-w-auto block mx-auto"/>
        </div>
        <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className=" mt-4 bg-primary text-[#fff] rounded-full px-8 py-2">
          Add To Cart $12
        </button>
      </div>
  );
};

export default MenuItem;
