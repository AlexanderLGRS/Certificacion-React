import { useState } from "react"

export const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrease = () => {
        counter > 1 ? setCounter(counter - 1) : null
    }
    const reset = () => {
        setCounter(initialValue)
    }
    return {
        counter,
        increment,
        decrease,
        reset
    }
}