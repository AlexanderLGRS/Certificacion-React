import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [state, setState] = useState({
        username: '',
        email: ''
    })
    const inputChange = ({ target }) => {
        const { value, name } = target
        setState({
            ...state,
            [name]: value
        })
    }
    
    const { username, email } = state
    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input onChange={inputChange} type="text" className="form-control" placeholder="Username" name="username" value={username} />
            <input onChange={inputChange} type="email" className="form-control mt-2" placeholder="E-mail" name="email" value={email} />
            {username === 'Alex' && <Message />}
        </>
    )
}