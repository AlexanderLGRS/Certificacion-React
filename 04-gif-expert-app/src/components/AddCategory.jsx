import { useState } from "react"

export function AddCategory(props) {
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if(inputValue === '')return
        props.onSubmitHandler(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={inputChangeHandler}
                autoFocus
            />
        </form>
    )
}