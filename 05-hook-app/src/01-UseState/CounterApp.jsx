import { useState } from "react"

export const CounterApp = () => {
    const [values, setValues] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })
    const { counter1, counter2, counter3 } = values
    return (
        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <h1>Counter: {counter3}</h1>
            <hr />
            <button className="btn btn-success" onClick={() => setValues({
                ...values,
                counter1: counter1 + 1
            })}
            >+1</button>
        </>
    )
}