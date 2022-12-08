/* eslint-disable @next/next/no-img-element */
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'

export const getStaticProps = async () => {
    const readNews = fs.readdirSync('newsMD')
    const newsData = readNews.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filePath = `newsMd/${fileName}`
        const readFile = fs.readFileSync(filePath, 'utf-8')
        const { data: frontmatter } = matter(readFile)
        return {
            frontmatter
        }
    })
    return {
        props: {
            newsData,
            fallback: false

        }
    }
}

export default function news({ newsData }) {
    // export default function News() {

    return (
        <div className="mb-12 mt-4 px-1 text-center">
            <h2 className="text-2xl font-medium text-greyish mb-4">
                Latest Data Science News
            </h2>
            <div className="flex mb-4">
            {newsData
                .filter(item => item.frontmatter.show == true)
                .map(props => {
                    return (
                        <div
                            className="max-w-sm rounded overflow-hidden shadow-xl m-6 flex-1"
                            key={props.frontmatter.title}
                        >
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
                                    {props.frontmatter.description} <br/>
                                    <a href={`${props.frontmatter.link}`}  >Read More</a>
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                   #{props.frontmatter.tag1}
                                </span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                   #{props.frontmatter.tag2}
                                </span>
                                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                   # {props.frontmatter.tag3}
                                </span> */}
                            </div>
                            <div className="px-6 pt-4 pb-2">
                              
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">
                                        Author: {props.frontmatter.author}
                                    </p>
                                    <p className="text-gray-600">
                                        {props.frontmatter.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div> 


        </div>
    )
}
