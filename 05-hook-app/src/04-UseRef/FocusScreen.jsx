import { useRef } from "react"

export const FocusScreen = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input ref={nameRef} className="form-control mt-3" type="text" placeholder="Ingrese su nombre" />
            <input ref={emailRef} className="form-control mt-3" type="email" placeholder="Ingrese su e-mail" />
            <button onClick={() => nameRef.current.select()} className="btn btn-primary mt-3"> Set Focus Name</button>
            <button onClick={() => emailRef.current.select()} className="btn btn-primary mt-3"> Set Focus Email</button>
        </>
    )
}