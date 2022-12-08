/* eslint-disable @next/next/no-img-element */
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'

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
    // export default function News() {

    return (
        <div className="mb-12 mt-4 px-1 text-center">
            <h2 className="text-2xl font-medium text-greyish mb-4">
                Latest Data Science News
            </h2>
            <div className="flex mb-4">
            {filesData.map(props => {
                    return (
                        <div
                            className="max-w-sm rounded overflow-hidden shadow-xl m-6 flex-1"
                            key={props.frontmatter.title}
                        >
                         <h1>{props.frontmatter.title}</h1>
                        </div>
                    )
                })}
        </div> 


        </div>
    )
}
