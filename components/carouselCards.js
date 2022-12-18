/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Card(props) {
    const router = useRouter();
    const [isSmallScreen, setSmallScreen] = useState(false);
    useEffect(() => {

        window.addEventListener(
            "resize",
            () => {if (window.matchMedia("(max-width: 430px)").matches) {
            setSmallScreen(false)
        } else { setSmallScreen(true); }
}

          );
          if (window.matchMedia("(max-width: 430px)").matches) {
            setSmallScreen(false)
        } else { setSmallScreen(true); }

        

    }, [isSmallScreen]);
    return (
        <div className=' mb-10 mx-auto -mt-2 shadow-xl'>
            <div
                key={props.link}
                className="m-6 text-center flex"
            >
                <div className='sm:m-auto sm:ml-5 mt-8'>
                    <h2 >{props.description}</h2>
                    <button onClick={() => router.push(`${props.link}`)} className="mt-[5rem] sm:mt-14 mb-8 text-2xl p-3 text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        {props.buttonName}
                    </button>
                </div>
                {isSmallScreen ?
                    <>
                        {/* <div className="flex cursor-pointer flex-col ">
                    <div className="pb-2 overflow-hidden"> */}
                        <img
                            alt={props.buttonName}
                            src={`${props.thumbnail}`}
                            className="h-7/12 mx-auto overflow-hidden mb-4 object-fill cursor-default aspect-square rounded-full w-[20rem]"
                        />
                        {/* </div>
                </div> */}
                    </> : false}
            </div>
        </div>
    )
}
