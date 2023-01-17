import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["paradise pd"])
    const onAddCategory = async (category) => {
        if (!categories.includes(category) && category != 'clear') {
            setCategories([category, ...categories])
        }
        if (category === 'clear') {
            setCategories([])
        }
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onSubmitHandler={onAddCategory} />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}