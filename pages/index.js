import fs from 'fs'
import { useContext, useState } from 'react'
import matter from 'gray-matter'
import { DatasetGrid } from '../components/grid'
import SearchAndFilter from '../components/search'
import { SearchContext } from '../components/context/search'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { clearLinks } from "../slices/sidebarStatus";
import { takeFooter } from "../slices/footer";
import Header from "../components/header";
import { useRouter } from "next/router";

export async function getStaticProps() {
    const files = fs.readdirSync('MdFiles')
    const filesData = files.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filepath = `MdFiles/${fileName}`
        const readFile = fs.readFileSync(filepath, 'utf-8')
        const stats = fs.statSync(filepath)
        const { data: frontmatter } = matter(readFile)
        return {
            frontmatter
        }
    })
    //Reading the images paths
    const readFile = fs.readFileSync(`CategoryImages/categoryImages.md`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    const images = frontmatter

    //Reading the heading or description from home.md
    const readHome = fs.readFileSync(`HeadingOrDesc/home.md`, 'utf-8')
    const { data: homeData } = matter(readHome)
    const homeMD = homeData


    return {
        props: {
            filesData,
            images,
            homeMD
        }
    }
}

export default function Home({ filesData, images, homeMD }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearLinks());
        dispatch(takeFooter(homeMD.Footer))

    })
    const [value, setValue] = useState('');

    return (
        <SearchContext.Provider value={{ value, setValue }}>

            <div>
                <div className="mb-14  text-center">
                    <div className='mt- -mb-2'><h2 className="text-2xl font-medium text-greyish">
                    {homeMD.SearchHeading}
                    </h2></div>
                    <SearchAndFilter />
                </div>
                {useRouter().pathname == "/" ? (
                    <header className="mb-8 py-2 justify-center">
                        <Header />
                    </header>
                ) : (
                    false
                )}
                <DatasetGrid filesData={filesData} images={images} />
            </div>
        </SearchContext.Provider>

    )
}
