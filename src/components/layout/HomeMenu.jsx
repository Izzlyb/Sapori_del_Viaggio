import React from "react";
import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

const HomeMenu = () => {
  return (
    <section >
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
            <Image src={"/salad1.png"} width={109} height={189} alt="salad1" />
        </div>
        <div className="absolute -top-36 right-0 -z-10">
            <Image src={"/salad2.png"} width={107} height={195} alt="salad1" />
        </div>
      </div>
      <div className="text-center">
        <SectionHeaders 
              subHeader={"Check Out"}
              mainHeader={"Menu"}/>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-5 mt-8" >
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>

    </section>
  );
};

export default HomeMenu;
