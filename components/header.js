import React from "react";
// import header from "../assets/deepbody.svg";
// import img from "../assets/image 1.png";
// import img2 from "../assets/image3.png";
// import img4 from "../assets/image4.png";
import img5 from "../assets/heroimage.png";
import Link from 'next/link'
import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto px-20 mt-10">
      <div className="grid grid-cols-2 gap-6">
        <div className="ml-9 shadow-lg bg-[#f5f5f5] max-w-md max-h-52">
          <div className="mt-9 flex justify-center ">
            <header className="text-[#07849F] text-xl font-bold inline-block px-7 py-3">
              DeepSynthBody: the beginning of the end for data deficiency in
              medicine
            </header>
          </div>
          <br />
          <div class="flex justify-center">
            <button
              type="button"
              class="inline-block px-7 py-3 bg-[#15CEF9] text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <Link href="/docs">Documentation</Link>
            </button>
          </div>
        </div>
        <div className="ml-20">
          <Image src={img5} alt="body image"
           width={400} height={350}
           />
        </div>
      </div>
    </div>
  );
};

export default Header;
