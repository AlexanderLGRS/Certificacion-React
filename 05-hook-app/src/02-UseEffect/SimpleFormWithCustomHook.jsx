import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const SimpleFormWithCustomHook = () => {
    const { state, inputChange, resetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })
    const { username, email, password } = state
    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input onChange={inputChange} type="text" className="form-control" placeholder="Username" name="username" value={username} />
            <input onChange={inputChange} type="email" className="form-control mt-2" placeholder="E-mail" name="email" value={email} />
            <input onChange={inputChange} type="password" className="form-control mt-2" placeholder="Password" name="password" value={password} />
            <button onClick={resetForm} className="btn btn-warning mt-3">Clear</button>
        </>
    )
}
