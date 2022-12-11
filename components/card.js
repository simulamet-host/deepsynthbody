/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/router';

export default function Card(props) {
    const router = useRouter();
    let goTo;
    if (router.pathname == "/") { goTo = `${props.category}` }
    // else if(router.pathname == `/[subcategory]`){goTo=`details/${props.slug}`}
    else if (router.pathname == `/[subcategory]`) { goTo = `subsubcategory/${props.subcategory}` }
    else if (router.pathname == `/subsubcategory/[subsubcategory]`) { goTo = `3rdSubcategory/${props.subsubcategory}` }
    else if (router.pathname == `/subsubcategory/3rdSubcategory/[subsubsubcategory]`) { goTo = `details/${props.slug}` }
    return (
        <div
            key={props.title}
            className="m-6 flex text-center flex-col"
        >
            <Link href={goTo}>
                <div className="flex cursor-pointer flex-col ">


                    {router.pathname == "/" ?
                        <> <div className="relative overflow-hidden">
                            <img
                                alt={props.title}
                                src={`${props.thumbnail}`}
                                // className="min-h-5/6 m-6 p-14 object-fill border-2 border-cyan-500 aspect-square rounded-full w-5/6"
                                className="min-h-5/6 object-fill border-2 border-cyan-500 rounded-full w-5/6"

                            />
                        </div>
                            <div className="text-center">
                                <h1 className="mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight">
                                    {props.category}
                                </h1>
                            </div></>
                        :
                        false}
                    {router.pathname == "/[subcategory]" ?
                        <>
                            <div className="relative overflow-hidden">
                                <img
                                    alt={props.title}
                                    src={`${props.thumbnail}`}
                                    className="min-h-5/6 ml-6 object-fill  aspect-square rounded-full w-5/6"
                                />
                            </div>
                            <h1 className="mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight">
                                {props.subcategory}
                                
                            </h1>
                        </>
                        :
                        false}
                    {router.pathname == `/subsubcategory/[subsubcategory]` ?
                        <>
                            <div className="relative overflow-hidden">
                                <img
                                    alt={props.title}
                                    src={`${props.thumbnail}`}
                                    className="min-h-5/6 ml-6 object-fill  aspect-square rounded-full w-5/6"
                                />
                            </div>
                            <h1 className="mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight">
                                {props.subsubcategory}
                            </h1>
                        </>
                        :
                        false}
                    {router.pathname == `/subsubcategory/3rdSubcategory/[subsubsubcategory]` ?
                        <>
                            <div className="relative overflow-hidden">
                                <img
                                    alt={props.title}
                                    src={`${props.thumbnail}`}
                                    className="min-h-5/6 ml-6 object-fill  aspect-square rounded-full w-5/6"
                                />
                            </div>
                            <div className="text-center">
                                <h1 className="mt-1 px-4 py-1 -my-1 text-2xl font-medium leading-tight">
                                    {props.title}
                                </h1>
                            </div>
                            <div className="pt-1 mb-2 text-center  line-clamp-2">
                                Category: {props.category}
                            </div>
                            <div className="pt-1 mb-2 -mt-3 text-center text-slate-600 ">
                                {props.desc}
                            </div>
                        </>
                        :
                        false}
                </div>
            </Link>

        </div>
    )
}
