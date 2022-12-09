import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import markdownIt from 'markdown-it'

export async function getStaticProps() {
    const filepath = `about/about.md`
    const fileName = fs.readFileSync(filepath, 'utf-8')
    const stats = fs.statSync(filepath)
    const { data: frontmatter, content } = matter(fileName);
    frontmatter.mtime = stats.mtime.toString()
    return {
        props: {
            content
        }
    }
}
export default function detail({ content }) {
    const md = markdownIt({ html: true })
    return (
        <div className="overflow-auto  mx-auto max-w-screen flex-1 px-3">
            <div className="prose mx-auto max-w-none prose-h2:mb-2 prose-h2:mt-5 prose-p:my-3">
                <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
            </div>
        </div>
    )
}