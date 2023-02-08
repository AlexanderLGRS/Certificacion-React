import { useState } from "react"
import { useCounter } from "../hooks/useCounter"

export const CounterAppWithCustomHook = () => {
    const { counter, increment, decrease, reset } = useCounter()
    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />
            <button className="btn btn-success" onClick={increment} >+1</button>
            <button className="btn btn-success" onClick={reset}>Reset</button>
            <button className="btn btn-success" onClick={decrease} >-1</button>
        </>
    )
}