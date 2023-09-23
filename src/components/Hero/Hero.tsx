import React from "react";
import Image from "next/image";
import Ilustration from "../../../public/images/main-illustration.png";
import { Doubt } from "../Doubt";

export const Hero = (props: any) => {
  return (
    <>
      <div className="bg-[#212126] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="mt-[100px] mb-[150px]">
              <h1 className="text-[40px] font-black uppercase text-[#C09D44]">
                Your Project <br /> Is Full Steam <br /> Ahead!
              </h1>
              <p className="mt-3 text-[#C8C8C4]">
                If you lead a product team, no doubt youve already charted your
                projects next course. Lets make sure we have smooth sailing to
                our destination!
              </p>
            </div>
            <div>
              <Image src={Ilustration} alt="main page illustration" />
            </div>
          </div>
          <Doubt />
        </div>
      </div>
      <div className="divide-y-[3px] h-5 bg-[#C09D44] border-b-4 border-black"></div>
      <div className="divide-y-[3px] h-5 bg-[#C09D44]"></div>
    </>
  );
};
