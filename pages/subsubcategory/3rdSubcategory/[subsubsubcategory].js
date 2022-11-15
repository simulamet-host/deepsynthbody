/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Card from '../../../components/card'
import ModelCard from '../../../components/modelCard'
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../../../components/context/search'
import SearchAndFilter from '../../../components/search'
import { useDispatch, useSelector } from "react-redux";
import { Subcategory, Subsubcategory, BacktoModels, levelThreeName } from "../../../slices/sidebarStatus";


const searchTitle = (item, toBeChecked) => {
    return (
        searchByTitle(item.frontmatter.title, toBeChecked))
}
const searchByTitle = (title, toBeChecked) => {
    return title.toLowerCase().includes(toBeChecked)
}

export async function getStaticPaths() {
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
    const subsubcategoryExists = filesData.filter(item => item.frontmatter.subsubcategory)

    const paths = subsubcategoryExists.map(fileName => ({
        params: {
            subsubsubcategory: fileName.frontmatter.subsubcategory,
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { subsubsubcategory } }) {
    const files = fs.readdirSync('MdFiles')
    const filesData = files.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filepath = `MdFiles/${fileName}`
        const readFile = fs.readFileSync(filepath, 'utf-8')
        const stats = fs.statSync(filepath)
        const { data: frontmatter } = matter(readFile)
        frontmatter.mtime = stats.mtime.toLocaleDateString()
        return {
            slug,
            frontmatter,
        }
    })
    return {
        props: {
            filesData,
            subsubsubcategory
        }
    }
}

export default function SubsubsubCategoryPage({ filesData, subsubsubcategory }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(levelThreeName(subsubsubcategory))
        dispatch(BacktoModels())
    })

    const [value, setValue] = useState('');
    const router = useRouter();
    //Start Filtering out records and avoiding one category to appear more time   
    const newCategoryArr = new Set();
    const unique = filesData.filter(item => item.frontmatter.show == true).filter(element => {
        const isDuplicate = newCategoryArr.has(element.frontmatter.subsubsubcategory);
        newCategoryArr.add(element.frontmatter.subsubsubcategory);
        if (!isDuplicate) {
            return true;
        }
        return false;
    });
    //Finish Filtering out records and avoiding one category to appear more time  
    let subsubsubcategoryExists = false;
    let subsubsubcategoryModelsExists = false;
    return (

        <SearchContext.Provider value={{ value, setValue }}>
            <div>

                {/* <h1 className=" font-semibold text-center mb-3 -mt-3 text-4xl">{useRouter().query.subsubsubcategory}</h1> */}
            </div>
            <div className="mb-12  text-center">
                <div className='-mb-2'><h2 className="text-2xl font-medium text-greyish">
                    Choose Your Desired Model
                </h2></div>
                <SearchAndFilter />

            </div>
            {/* Start Conditional Rendering of Subcategories heading */}
            {unique.filter(item => item.frontmatter.show == true)
                .filter(props => props.frontmatter.subsubcategory == subsubsubcategory)
                .filter(item => searchTitle(item, value)).map(props => {
                    if (props.frontmatter.subsubsubcategory) {
                        subsubsubcategoryExists = true
                    }
                })}
            {subsubsubcategoryExists ? <div className="text-center">
                <h1 className=" font-semibold text-center mb-3  text-4xl">
                    Models of {useRouter().query.subsubsubcategory}
                </h1>
            </div> : false}
            {/* Ending Conditional Rendering of Subcategories heading */}
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">

                {unique.filter(item => item.frontmatter.show == true)
                    .filter(props => props.frontmatter.subsubcategory == subsubsubcategory)
                    .filter(item => searchTitle(item, value)).map(props => {
                        if (props.frontmatter.subsubsubcategory) {
                            return (
                                <Card
                                    key={props.slug}
                                    slug={props.slug}
                                    title={props.frontmatter.title}
                                    category={props.frontmatter.category}
                                    subcategory={props.frontmatter.subcategory}
                                    subsubcategory={props.frontmatter.subsubcategory}
                                    subsubsubcategory={props.frontmatter.subsubsubcategory}
                                    thumbnail={props.frontmatter.thumbnail}
                                    desc={props.frontmatter.desc}
                                />
                            )
                        }
                    })}
            </div>

            {/* Start Conditional Rendering of models heading in Subcategories */}
            {filesData.filter(item => item.frontmatter.show == true)
                .filter(props => props.frontmatter.subsubcategory == subsubsubcategory)
                .filter(item => searchTitle(item, value)).map(props => {
                    if (!props.frontmatter.subsubsubcategory) {
                        subsubsubcategoryModelsExists = true
                    }
                })}
            {subsubsubcategoryModelsExists ? <div className="text-center">
                <h1 className=" font-semibold text-center mb-3 mt-3 text-4xl">
                    Models of {useRouter().query.subsubsubcategory}

                </h1>
            </div> : false}
            {/* Ending Conditional Rendering of models heading in Subcategories */}

            <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">
                {filesData.filter(item => item.frontmatter.show == true)
                    .filter(props => props.frontmatter.subsubcategory == subsubsubcategory)
                    .filter(item => searchTitle(item, value)).map(props => {
                        if (!props.frontmatter.subsubsubcategory) {
                            return (
                                <ModelCard
                                    key={props.slug}
                                    slug={props.slug}
                                    title={props.frontmatter.title}
                                    category={props.frontmatter.category}
                                    subcategory={props.frontmatter.subcategory}
                                    thumbnail={props.frontmatter.thumbnail}
                                    desc={props.frontmatter.desc}
                                />
                            )
                        }
                    })}
            </div>
        </SearchContext.Provider>
    )
}