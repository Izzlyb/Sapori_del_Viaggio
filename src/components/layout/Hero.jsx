import React from "react";
import Image from "next/image";
import CircleRight from "../icons/CircleRight";


const Hero = () => {
  return (

    <section className="hero">
      <div className="py-12">
        <h1 className="text-6xl font-semibold ">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-lg">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4">
          <button className="justify-center text-[#fff] bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full" >
            Order Now
            <CircleRight />
          </button>
          <button className="justify-center uppercase flex items-center gap-2 px-4 py-2 rounded-full">
            Learn More
            <CircleRight />
          </button>
        </div>
      </div>
      <div className="relative justify-center hidden md:block ">
        <Image 
            className="block mx-auto" 
            src={'/pizza.png'} alt="pizza" 
            width={400} height={400}/>
      </div>
    </section>

  );
};

export default Hero;
