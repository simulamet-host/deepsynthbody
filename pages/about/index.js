import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import markdownIt from 'markdown-it'
import Image from 'next/image'


export async function getStaticProps() {
    const readFile = fs.readFileSync(`pages/about/about.md`, 'utf-8')
    const { data: aboutData, content } = matter(readFile)
    const aboutMd = aboutData
    return {
        props: {
            aboutMd,
            content
        }
    }
}

const AboutPage = ({ aboutMd, content }) => {
    const md = markdownIt({ html: true })
    return (
        <main className=" ml-10 mb-10 overflow-auto mx-auto max-w-screen flex-1 px-3">
            <h2 className="text-2xl text-greyish mb-10 lg:text-3xl ">
                {aboutMd.title}
            </h2>
            <picture>
            <img className="w-6/12 mb-10 flex w-24 justify-around" 
            src={`${aboutMd.image}`} 
            alt={aboutMd.title}
             />
            </picture>
            <div className="prose mx-auto max-w-none prose-h2:mb-2 prose-h2:mt-5 prose-p:my-3">
                <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
            </div>
        </main>
    )
}

export default AboutPage
