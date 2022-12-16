import { SearchContext } from './context/search'
import { useContext, useState } from 'react'
import React, { useRef, useEffect } from "react";
import { useRouter } from 'next/router';

export default function SearchAndFilter() {
    const router = useRouter();
    const inputElement = useRef(null);
    useEffect(() => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            if (inputElement.current) {
                inputElement.current.focus();
            }
        }
    }, []);



    const { value, setValue } = useContext(SearchContext)
    let newsRoute;
    router.pathname == "/news" ? newsRoute = true : false
    return (
        <div className="mt-6">
            <div className="relative mx-auto flex sm:w-30 px-2 md:w-96 lg:50 items-center">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="none" stroke="gray"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                {newsRoute ? <input className="p-4 -ml-1 pl-10 w-full h-12 text-gray-900
                                  rounded-3xl border-2 border-gray-600
                dark:placeholder-gray-400 border focus-visible:outline-none focus-visible:border-[#07849f] grow"
                    placeholder="Search by Author, Title, Desc..."
                    onChange={val => setValue(val.target.value)}
                    value={value}
                    ref={inputElement}
                /> :
                    <input className="p-4 -ml-1 pl-10 w-full h-12 text-gray-900
                                  rounded-3xl border-2 border-gray-600
                dark:placeholder-gray-400 border focus-visible:outline-none focus-visible:border-[#07849f] grow"
                        placeholder="Search ..."
                        onChange={val => setValue(val.target.value)}
                        value={value}
                        ref={inputElement}
                    />
                }


            </div>
        </div>
    )
}
