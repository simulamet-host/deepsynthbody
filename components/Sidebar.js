import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLinks } from "../slices/sidebarStatus";
import { NewsPage } from "../slices/sidebarStatus";
import { Subcategory, Subsubcategory, BacktoModels } from "../slices/sidebarStatus";
import whiteLogo from "./icons/whiteLogo.png";
import Image from 'next/image'
import {
  CollapsIcon,
} from "./icons";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.status.value);
  const [toggleCollapse, setToggleCollapse] = useState(true);
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (window.matchMedia("(max-width: 430px)").matches) {
      setSmallScreen(false); setToggleCollapse(true)
    } else { setSmallScreen(true); setToggleCollapse(false) }
    if (router.pathname == "/about" || router.pathname == "/form") {
      dispatch(clearLinks())
    }
  }, [dispatch, isSmallScreen, router.pathname]);
  //on window resize
  function handleResize() {
    if (window.matchMedia("(max-width: 430px)").matches) {
      setSmallScreen(false); setToggleCollapse(true)
    } else { setSmallScreen(true); setToggleCollapse(false) }
  }
  if (typeof window !== "undefined") {
    window.addEventListener('resize', handleResize)
  }


  const wrapperClasses = classNames(
    "-my-8 pl-2 bg-light min-h-screen flex justify-between flex-col",
    {
      ["w-[15rem]"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "pl- rounded bg-light-lighter right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s", backgroundColor: "#07849f" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center mx-auto pt-5 gap-4">
            <div className="pr-"><Image src={whiteLogo} width={110}
              height={110} alt="Navigation" /></div>
          </div>
          <div>
            {isSmallScreen && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <CollapsIcon />
              </button>
            )}
          </div>

        </div>

        <div className="flex flex-col items-start mt-20">
          {menuItems.filter(item => item.link != "").map(({ icon: Icon, ...menu }) => {
            return (
              <div key={menu.label} >
                <Link href={menu.link}>
                  <a className={"flex py-6  px-3 items-center w-full h-full"}  onClick={menu.onClick}>
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
