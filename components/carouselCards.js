/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/router';

export default function Card(props) {
    const router = useRouter();
    return (
        <div style={{ height: "27rem"}} className='mb-10 px-4 -mt-10 shadow-md'>
        <div
            key={props.title}
            className="m-6 text-center flex "
        >
            {/* <Link href={goTo}> */}
                <div className='m-auto'>
                    <h2 >Here it will be some description about the models and everything else.</h2>
                    <button onClick={()=>router.push(`${props.category}`)} className="mt-14 text-2xl p-3 -mb-14 text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
               {props.category}
           </button>
                </div>
                <div className="flex cursor-pointer flex-col ">
                    <div className="relative p-4 overflow-hidden">
                        <img
                            alt={props.title}
                            src={`${props.thumbnail}`}
                            className="min-h-2/3 ml-6 object-fill cursor-default aspect-square rounded-full w-2/3"
                        />
                    </div>
                 
                </div>
            {/* </Link> */}

        </div>
           {/* <div className="">
           
       </div> */}
       </div>
    )
}
