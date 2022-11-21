import React from 'react'
import { useState, useEffect } from "react";
import {
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from 'next/link'

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-semibold text-[#0797B7]"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-semibold text-[#0797B7]"
      >
        <Link href="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-semibold text-[#0797B7]"
      >
        <Link href="/docs" className="flex items-center">
          Docs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-semibold text-[#0797B7]"
      >
        <Link href="/news" className="flex items-center">
          News
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-semibold text-[#0797B7]"
      >
        <Link href="/form" className="flex items-center">
          Form
        </Link>
      </Typography>

    </ul>
  );

  return (
    <div className=" bg-white px-2 sm:px-4 py-2.5 shadow-lg">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 font-bold text-primary"
        >
          <span>DeepSynthBody</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </div>
  );
}

export default NavBar