"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Dado from "../../images/icon-dice.svg";
import Divisor from "../../images/pattern-divider-desktop.svg";
import Divisor2 from "../../images/pattern-divider-mobile.svg";
import Image from "next/image";

export default function Card() {
  const [advice, setAdvice] = useState({ id: 0, text: "" });

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { slip } = response.data;
      setAdvice({ id: slip.id, text: slip.advice });
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const reloadComponent = () => {
    fetchAdvice();
  };

  return (
    <div className="flex flex-col bg-gray-700 w-[320px] sm:w-[600px] h-[310px]  sm:h-[370px]  justify-start rounded-[15px] sm:rounded-[25px] shadow-lg mt-24 sm:mt-44 relative">
      <div className="flex flex-col items-center mr-5 ml-5 mt-7 ">
        <p className="text-green-300 font-semibold tracking-[.35em] font-manrope text-[12px] sm:text-[14px] mb-4 ">
          ADVICE # {advice.id}
        </p>
        <p className="text-gray-300 font-manrope font-bold text-[21px] sm:text-[28px] text-center ">
          "{advice.text}"
        </p>
        <div className=" flex justify-center absolute inset-x-0 top-full -mt-20  ">
          <Image
            src={Divisor}
            alt="divisor"
            width={444}
            height={16}
            className="hidden sm:block"
          />
          <Image
            src={Divisor2}
            alt="divisorM"
            width={295}
            height={16}
            className=" sm:hidden"
          />
        </div>
      </div>
      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 mb-4 z-10 group w-[75px] h-[75px] ">
        <div className="absolute inset-0 bg-green-300 rounded-full group-hover:blur-xl transition duration-300 ease-in-out"></div>
        <button
          className="bg-green-300 rounded-full p-6 items-center w-[75px] h-[75px] transform transition-transform duration-300  hover:scale-105 hover:shadow-lg "
          onClick={reloadComponent}
        >
          <Image src={Dado} alt="Dado" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}
