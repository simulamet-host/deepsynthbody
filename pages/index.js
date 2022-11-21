import fs from 'fs'
import { useContext, useState } from 'react'
import matter from 'gray-matter'
import { DatasetGrid } from '../components/grid'
import SearchAndFilter from '../components/search'
import { SearchContext } from '../components/context/search'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { clearLinks } from "../slices/sidebarStatus";
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
    return {
        props: {
            filesData
        }
    }
}

export default function Home({ filesData }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearLinks())
    })

    const [value, setValue] = useState('');
    return (
        <SearchContext.Provider value={{ value, setValue }}>

            <div>
                <div className="mb-14  text-center">
                    <div className='mt- -mb-2'><h2 className="text-2xl font-medium text-greyish">
                        Choose Your Desired Model Category
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
                <DatasetGrid filesData={filesData} />
            </div>
        </SearchContext.Provider>

    )
}
