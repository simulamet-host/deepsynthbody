/* eslint-disable @next/next/no-img-element */
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
    const files = fs.readdirSync('newsMd')
    const filesData = files.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filepath = `newsMd/${fileName}`
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

export default function News({ filesData }) {

        return (
            <main className="container mx-auto">
                <h2 className="text-2xl font-medium text-greyish mb-4 px-1 text-center">
                    Latest Data Science News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filesData
                    .filter(item => item.frontmatter.show == true)
                    .map(props => {
                        return (
                            <div
                                className="max-w-sm rounded overflow-hidden shadow-xl m-6 flex-col flex justify-between"
                                key={props.frontmatter.title}
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
                                            props.frontmatter.description.length > 100 ? props.frontmatter.description.slice(0, 100) + "..." :   props.frontmatter.description
                                            }
                                        
                                       <br/>
                                        <a href={`${props.frontmatter.link}`}  >Read More</a>
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
                        )
                    })}
            </div> 
    
    
            </main>
        )
}
