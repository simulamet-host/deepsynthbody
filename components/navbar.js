import React from 'react'
import { useState, useEffect } from "react";
import {
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from 'next/link'
import { useRouter } from "next/router";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const router = useRouter();

  const navList = (
    <ul className="mb-4 mt-2 text-center flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Link href="/" className="flex items-center">
      <Typography
        as="li"
        variant="paragraph"
        className={router.pathname == "/" ? "cursor-pointer px-2 py-1 font-semibold text-white border-primary bg-primary rounded-md	border-4" : "cursor-pointer p-1 font-semibold text-[#0797B7]"}
        onClick={() => setOpenNav(false)}
      >
          Home
      </Typography>
      </Link>
      <Link href="/news/news" className="flex items-center">
      <Typography
        as="li"
        variant="paragraph"
        className={router.pathname == "/news/news" ? "cursor-pointer px-2 py-1 font-semibold text-white border-primary bg-primary rounded-md	border-4" : "cursor-pointer p-1 font-semibold text-[#0797B7]"}
        onClick={() => setOpenNav(false)}
      >
          News
      </Typography>
      </Link>
      <Link href="/about" className="flex items-center">

      <Typography
        as="li"
        variant="paragraph"
        className={router.pathname == "/about" ? "cursor-pointer px-2 py-1 font-semibold text-white border-primary bg-primary rounded-md	border-4" : "cursor-pointer p-1 font-semibold text-[#0797B7]"}
        onClick={() => setOpenNav(false)}
      >
          About
      </Typography>
      </Link>

      {/* <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-semibold text-[#0797B7]"
      >
        <Link href="/docs" className="flex items-center">
          Docs
        </Link>
      </Typography> */}
        <Link href="/form" className="flex items-center cursor-pointer">
      <Typography
        as="li"
        variant="paragraph"
        className={router.pathname == "/form" ? "cursor-pointer px-2 py-1 font-semibold text-white border-primary bg-primary rounded-md	border-4" : "cursor-pointer p-1 font-semibold text-[#0797B7]"}
        onClick={() => setOpenNav(false)}
      >
          Contact Us
      </Typography>
      </Link>

    </ul>
  );

  return (
    <div className=" bg-white px-2 sm:px-4 py-2.5 shadow-lg">
      <div className="container flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <h1 className="mr-4 cursor-pointer py-1.5 font-bold text-primary">
            DeepSynthBody</h1>
        </Link>

        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="float-right mr-3 h-10 w-10 mb-2 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-7 w-7"
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
              className="h-7 w-7"
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