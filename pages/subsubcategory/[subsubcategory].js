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
import { useDispatch, useSelector, } from "react-redux";
import { Subcategory, Subsubcategory, BacktoModels, clearThirdLink, levelTwoName } from "../../slices/sidebarStatus";


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
    //Reading the search heading from HeadingOrDesc/subcategory/search.md
    const readSearchHeading = fs.readFileSync(`HeadingOrDesc/subsubcategory/search.md`, 'utf-8')
    const { data: subcategorySearchHeading } = matter(readSearchHeading)
    const subcategorySearchHeadingMD = subcategorySearchHeading
    //Getting the subsubcategory headings
    const readsubsubCatHeading = fs.readFileSync(`HeadingOrDesc/subsubcategory/subsubCategoryHeadings.md`, 'utf-8')
    const { data: subsubcategoryHeadings } = matter(readsubsubCatHeading)
    const subsubcategoryHeadingsMD = subsubcategoryHeadings
    //Getting the subsubcategory model headings
    const readsubsubCatModelHeading = fs.readFileSync(`HeadingOrDesc/subsubcategory/modelsHeadings.md`, 'utf-8')
    const { data: subsubcategoryModelHeadings } = matter(readsubsubCatModelHeading)
    const subsubcategoryModelHeadingsMD = subsubcategoryModelHeadings
    //Getting the subsubcategory heading´s description
    const readsubsubCatDesc = fs.readFileSync(`HeadingOrDesc/subsubcategory/subsubCategoryDesc.md`, 'utf-8')
    const { data: subsubcategoryDesc } = matter(readsubsubCatDesc)
    const subsubcategoryDescMD = subsubcategoryDesc
    //Getting the subsubcategory model´s desc
    const readsubsubCatModelDesc = fs.readFileSync(`HeadingOrDesc/subsubcategory/modelsDesc.md`, 'utf-8')
    const { data: subsubcategoryModelDesc } = matter(readsubsubCatModelDesc)
    const subsubcategoryModelDescMD = subsubcategoryModelDesc
    return {
        props: {
            filesData,
            subsubcategory,
            subcategorySearchHeadingMD,
            subsubcategoryHeadingsMD,
            subsubcategoryModelHeadingsMD,
            subsubcategoryDescMD,
            subsubcategoryModelDescMD
        }
    }
}


export default function SubsubCategoryPage({ filesData, subsubcategory, subcategorySearchHeadingMD,
    subsubcategoryHeadingsMD, subsubcategoryModelHeadingsMD, subsubcategoryDescMD, subsubcategoryModelDescMD }) {
    //search start
    const searchTitle = (item, toBeChecked) => {
        return (
            item.frontmatter.subsubcategory ? searchByTitle(item, toBeChecked) ||
                searchBySubSubCatergory(item.frontmatter.subsubcategory, toBeChecked) :
                searchByTitle(item, toBeChecked)
        )
    }
    const searchByTitle = (item, toBeChecked) => {
        if (!item.frontmatter.subsubcategory) {
            if (item.frontmatter.title) {
                return item.frontmatter.title.toLowerCase().includes(toBeChecked.toLowerCase()) ||
                    item.frontmatter.category.toLowerCase().includes(toBeChecked.toLowerCase()) ||
                    item.frontmatter.desc.toLowerCase().includes(toBeChecked.toLowerCase())
            }
        }
    }
    const searchBySubSubCatergory = (item, toBeChecked) => {
        return item.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    //search end

    
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
                <h1 className="px-1 font-semibold text-center mb-3 -mt-3 text-4xl">{useRouter().query.subcategory}</h1>
            </div>

            <div className="mb-12 px-1 text-center">
                <div className='-mb-2'><h2 className="text-2xl font-medium text-greyish">
                    {subcategorySearchHeadingMD[subsubcategory]}
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
            {subsubcategoryExists ? <div className="px-1 text-center">
                <h1 className=" font-semibold text-center mb-3 -mt-3 text-4xl">
                    {subsubcategoryHeadingsMD[subsubcategory]}
                    {/* {subsubcategoryMD.SubsubcategoryHeading}{" "}
                    {useRouter().query.subsubcategory} */}
                </h1>
                <h2 className="text-2xl font-medium text-greyish">
                    {subsubcategoryDescMD[subsubcategory]}
                    {/* {subsubcategoryMD.SubsubcategoryDesc} */}
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
            {subsubcategoryModelsExists ? <div className="px-1 text-center">
                <h1 className=" font-semibold text-center mb-2 mt-5 text-4xl">
                    {subsubcategoryModelHeadingsMD[subsubcategory]}
                    {/* {subsubcategoryMD.ModelsHeading}{" "}
                    {useRouter().query.subsubcategory} */}
                </h1>
                <h2 className="text-2xl font-medium text-greyish">
                    {subsubcategoryModelDescMD[subsubcategory]}
                    {/* {subsubcategoryMD.ModelsDesc} */}
                </h2>
            </div> : false}
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