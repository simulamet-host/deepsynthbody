/* eslint-disable @next/next/no-img-element */
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { SearchContext } from '../../components/context/search'
import { useContext, useState, useEffect } from 'react'
import SearchAndFilter from '../../components/search'
import Link from 'next/link'
import { NewsPage } from "../../slices/sidebarStatus";
import { useDispatch, useSelector } from "react-redux";

export async function getStaticProps() {
    const files = fs.readdirSync('newsMd')
    const filesData = files.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filepath = `newsMd/${fileName}`
        const readFile = fs.readFileSync(filepath, 'utf-8')
        const stats = fs.statSync(filepath)
        const { data: frontmatter } = matter(readFile)
        return {
            frontmatter,
            slug
        }
    })
    return {
        props: {
            filesData
        }
    }
}

export default function News({ filesData }) {
    const [value, setValue] = useState('');
    //search start
    const searchCard = (item, toBeChecked) => {
        return (
            searchByAuthor(item.frontmatter.author, toBeChecked) ||
            searchByTitle(item.frontmatter.title, toBeChecked) ||
            searchByDescription(item.frontmatter.description, toBeChecked) ||
            searchByDate(item.frontmatter.date, toBeChecked) ||
            searchByCategory(item.frontmatter.category, toBeChecked) ||
            searchByTag1(item.frontmatter.tag1, toBeChecked) ||
            searchByTag2(item.frontmatter.tag2, toBeChecked))
    }

    const searchByAuthor = (author, toBeChecked) => {
        return author.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    const searchByTitle = (title, toBeChecked) => {
        return title.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    const searchByDescription = (desc, toBeChecked) => {
        return desc.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    const searchByDate = (date, toBeChecked) => {
        return date.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    const searchByCategory = (cat, toBeChecked) => {
        return cat.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    const searchByTag1 = (tag1, toBeChecked) => {
        return tag1.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    const searchByTag2 = (tag2, toBeChecked) => {
        return tag2.toLowerCase().includes(toBeChecked.toLowerCase())
    }
    //search end
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(NewsPage())
    })
    return (
        <SearchContext.Provider value={{ value, setValue }}>

            <main className="container mx-auto">
                <h2 className="text-2xl font-medium text-greyish mb-4 px-1 text-center">
                    Latest Data Science News
                </h2>
                <div className="mb-12 px-1 text-center">
                    <SearchAndFilter />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filesData
                        .filter(item => item.frontmatter.show == true)
                        .sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date))
                        .filter(item => searchCard(item, value))
                        .map(props => {
                            return (
                                <Link href={props.slug} key={props.frontmatter.title}
                                >
                                    <div
                                        className="max-w-sm cursor-pointer rounded overflow-hidden shadow-xl m-6 flex-col flex justify-between"
                                    >
                                        <div>
                                            <img
                                                className="w-full h-60 "
                                                src={`${props.frontmatter.image}`}
                                                alt={props.frontmatter.title}
                                            />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    {props.frontmatter.title}
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                    {
                                                        props.frontmatter.description.length > 100 ? props.frontmatter.description.slice(0, 100) + "..." : props.frontmatter.description
                                                    }

                                                    <br />
                                                    <a>Read More</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                #{props.frontmatter.tag1}
                                            </span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                #{props.frontmatter.tag2}
                                            </span>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">

                                            <div className="text-sm">
                                                <p className="text-gray-900">
                                                    Category: {props.frontmatter.category}
                                                </p>
                                                <p className="text-gray-900 leading-none">
                                                    Author: {props.frontmatter.author}
                                                </p>
                                                <p className="text-gray-600">
                                                    {props.frontmatter.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                </div>


            </main>
        </SearchContext.Provider>

    )

}
