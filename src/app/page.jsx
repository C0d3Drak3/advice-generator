//import Image from "next/image";

import Card from "./components/card.js";

export default function Home() {
  const darkBlueColorStyle = {
    backgroundColor: "hsl(218, 23%, 16%)",
  };

  return (
    <div className="flex h-screen " style={darkBlueColorStyle}>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center">
          <Card />
        </div>

        <div className="mt-auto mb-4 text-white text-[13px] sm:text-[16px] w-[340px] sm:w-[440px]">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Martín Otero
          </a>
          .
        </div>
      </div>
    </div>
  );
}
