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
import Navbar from './../components/layout'

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
    // Reading the images paths
    const readFile = fs.readFileSync(`CategoryImages/categoryImages.md`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    const images = frontmatter

    // Reading the heading or description from home.md
    const readHome = fs.readFileSync(`HeadingOrDesc/home.md`, 'utf-8')
    const { data: homeData } = matter(readHome)
    const homeMD = homeData
    // For the slider
    const sliderFiles = fs.readdirSync('sliderFiles')
    const sliderData = sliderFiles.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filepath = `sliderFiles/${fileName}`
        const readFile = fs.readFileSync(filepath, 'utf-8')
        const { data: frontmatter } = matter(readFile)
        return {
            frontmatter
        }
    })
    return {
        props: {
            filesData,
            images,
            homeMD,
            sliderData
        }
    }
}

export default function Home({ filesData, images, homeMD, sliderData }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearLinks());
        dispatch(takeFooter(homeMD.Footer))

    })
    const [value, setValue] = useState('');

    return (

        <SearchContext.Provider value={{ value, setValue }}>
                {useRouter().pathname == "/" ? (
                        <Header sliderData={sliderData} />
                       
                ) : (
                    false
                )}
                 <div className="mb-12 mt-4 px-1 text-center">
                    <div className='-mb-2'><h2 className="text-2xl font-medium text-greyish">
                    {homeMD.SearchHeading}
                    </h2></div>
                    <SearchAndFilter />
                </div>
                <DatasetGrid filesData={filesData} images={images} />
        </SearchContext.Provider>

    )
}
