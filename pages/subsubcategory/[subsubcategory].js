/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Card from '../../components/card'
import ModelCard from '../../components/modelCard'
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../../components/context/search'
import SearchAndFilter from '../../components/search'
import { useDispatch, useSelector,  } from "react-redux";
import { Subcategory, Subsubcategory, BacktoModels, clearThirdLink, levelTwoName } from "../../slices/sidebarStatus";

const searchTitle = (item, toBeChecked) => {
    return (
        item.frontmatter.subsubcategory ? searchByTitle(item.frontmatter.title, toBeChecked) ||
        searchBySubSubCatergory(item.frontmatter.subsubcategory, toBeChecked) : 
        searchByTitle(item.frontmatter.title, toBeChecked)
    )
}
const searchByTitle = (title, toBeChecked) => {
    return title.toLowerCase().includes(toBeChecked)
}
const searchBySubSubCatergory = (subsubcategory, toBeChecked) => {
    return subsubcategory.toLowerCase().includes(toBeChecked)
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
    const subcategoryExists = filesData.filter(item => item.frontmatter.subcategory)

    const paths = subcategoryExists.map(fileName => ({
        params: {
            subsubcategory: fileName.frontmatter.subcategory,
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { subsubcategory } }) {
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
      //Reading the heading or description from subsubcategory.md
      const readHome = fs.readFileSync(`HeadingOrDesc/subsubcategories.md`, 'utf-8')
      const { data: subsubcategoryData } = matter(readHome)
      const subsubcategoryMD = subsubcategoryData
    return {
        props: {
            filesData,
            subsubcategory,
            subsubcategoryMD
        }
    }
}


export default function SubsubCategoryPage({ filesData, subsubcategory, subsubcategoryMD }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(levelTwoName(subsubcategory))
        dispatch(clearThirdLink())
        dispatch(Subsubcategory())
    })

    const [value, setValue] = useState('');
    const router = useRouter();
    //Start Filtering out records and avoiding one category to appear more time   
    const newCategoryArr = new Set();
    const unique = filesData.filter(item => item.frontmatter.show == true).filter(element => {
        const isDuplicate = newCategoryArr.has(element.frontmatter.subsubcategory);
        newCategoryArr.add(element.frontmatter.subsubcategory);
        if (!isDuplicate) {
            return true;
        }
        return false;
    });
    //Finish Filtering out records and avoiding one category to appear more time 
    let subsubcategoryExists = false;
    let subsubcategoryModelsExists = false;
    return (
        <SearchContext.Provider value={{ value, setValue }}>
            <div>
                <h1 className=" font-semibold text-center mb-3 -mt-3 text-4xl">{useRouter().query.subcategory}</h1>
            </div>

            <div className="mb-12  text-center">
                <div className='-mb-2'><h2 className="text-2xl font-medium text-greyish">
                {subsubcategoryMD.SearchHeading}
                </h2></div>
                <SearchAndFilter />

            </div>
            {/* Start Conditional Rendering of Subcategories heading */}
            {unique.filter(item => item.frontmatter.show == true)
                .filter(props => props.frontmatter.subcategory == subsubcategory)
                .filter(item => searchTitle(item, value)).map(props => {
                    if (props.frontmatter.subsubcategory) {
                        subsubcategoryExists = true
                    }
                })}
            {subsubcategoryExists ? <div className="text-center">
                <h1 className=" font-semibold text-center mb-3 -mt-3 text-4xl">
                    {subsubcategoryMD.SubsubcategoryHeading}{" "}
                    {useRouter().query.subsubcategory} 
                </h1>
                <h2 className="text-2xl font-medium text-greyish">
                    {subsubcategoryMD.SubsubcategoryDesc}
                </h2>                
            </div> : false}
            {/* Ending Conditional Rendering of Subcategories heading */}

            <div className="grid grid-cols-1 p-4 mt-3 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">
                {
                    unique.filter(item => item.frontmatter.show == true)
                        .filter(props => props.frontmatter.subcategory == subsubcategory)
                        .filter(item => searchTitle(item, value)).map(props => {
                            if (props.frontmatter.subsubcategory) {
                                return (
                                    <Card
                                        key={props.slug}
                                        slug={props.slug}
                                        title={props.frontmatter.title}
                                        category={props.frontmatter.category}
                                        subcategory={props.frontmatter.subcategory}
                                        subsubcategory={props.frontmatter.subsubcategory}
                                        thumbnail={props.frontmatter.thumbnail}
                                        desc={props.frontmatter.desc}
                                    />
                                )
                            }
                        })}
            </div>


            {/* Start Conditional Rendering of models heading in Subcategories */}
             {filesData.filter(item => item.frontmatter.show == true)
                .filter(props => props.frontmatter.subcategory == subsubcategory)
                .filter(item => searchTitle(item, value)).map(props => {
                    if (!props.frontmatter.subsubcategory) {
                        subsubcategoryModelsExists = true
                    }
                })}
            {subsubcategoryModelsExists ?  <div className="text-center">
            <h1 className=" font-semibold text-center mb-2 mt-5 text-4xl">
                        {subsubcategoryMD.ModelsHeading}{" "}
                       {useRouter().query.subsubcategory} 
                    </h1>
                    <h2 className="text-2xl font-medium text-greyish">
                    {subsubcategoryMD.ModelsDesc}
                </h2>
            </div>: false}
            {/* Ending Conditional Rendering of models heading in Subcategories */}
           
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">
                {filesData.filter(item => item.frontmatter.show == true)
                    .filter(props => props.frontmatter.subcategory == subsubcategory)
                    .filter(item => searchTitle(item, value)).map(props => {
                        if (!props.frontmatter.subsubcategory) {

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