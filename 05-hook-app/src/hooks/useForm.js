import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [state, setState] = useState(initialForm)

    const inputChange = ({ target }) => {
        const { value, name } = target
        setState({
            ...state,
            [name]: value
        })
    }
    const resetForm = ()=>{
        setState(initialForm)
    }
    return {
        state, inputChange, resetForm
    }
}