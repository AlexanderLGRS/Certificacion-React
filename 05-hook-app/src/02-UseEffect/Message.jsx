import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const mouseEvent = ({ x, y }) => {
            setCoords({ x, y })
        }
        window.addEventListener('mousemove', mouseEvent)
        return () => {
            window.removeEventListener('mousemove', mouseEvent)
        }
    }, [])
    return (
        <>
            <h3>Usuario existente</h3>
            <h2>{JSON.stringify(coords)}</h2>
        </>
    )
}