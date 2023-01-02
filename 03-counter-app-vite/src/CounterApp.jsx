import PropTypes from 'prop-types'
import { useState } from 'react';
// import "./styles.css"
export default function CounterApp({ value, interval }) {
    const [newValue, setNewValue] = useState(value)

    const incrementValue = () => {
        setNewValue(newValue + interval)
    }
    const decrementValue = () => {
        setNewValue(newValue - interval)
    }
    const resetValue = () => {
        setNewValue(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{newValue}</h2>
            <button aria-label='button-increment' onClick={incrementValue}> + </button>
            <button aria-label='button-decrement' onClick={decrementValue}> - </button>
            <button aria-label='button-reset' onClick={resetValue}> Reset </button>
        </>

    )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}