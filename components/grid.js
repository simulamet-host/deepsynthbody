import Card from './card'
import { useContext, useEffect } from 'react'
import { SearchContext } from './context/search'

const searchCategory = (item, toBeChecked) => {
    return (
        searchByCategory(item.frontmatter.category, toBeChecked))
}
const searchByCategory = (category, toBeChecked) => {
    return category.toLowerCase().includes(toBeChecked)
}






export function DatasetGrid({ filesData }) {
    
    //Start Filtering out records and avoiding one category to appear more time   
    const newCategoryArr = new Set();
    const unique = filesData.filter(item => item.frontmatter.show == true).filter(element => {
        const isDuplicate = newCategoryArr.has(element.frontmatter.category);
        newCategoryArr.add(element.frontmatter.category);
        if (!isDuplicate) {
            return true;
        }
        return false;
    });
    //Finish Filtering out records and avoiding one category to appear more time   
    const { value, setValue } = useContext(SearchContext)
    return (
        <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">
            {unique.filter(item => searchCategory(item, value)).map(props => {
                return (
                    <Card
                        key={props.frontmatter.title}
                        title={props.frontmatter.title}
                        category={props.frontmatter.category}
                        thumbnail={props.frontmatter.thumbnail}
                        desc={props.frontmatter.desc}
                    />
                )
            })}
        </div>
    )
}
