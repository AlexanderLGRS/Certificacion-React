import { useLayoutEffect, useRef, useState } from "react"

export const QuoteContainer = (props) => {
    const { quotes } = props
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    })
    const blockRef = useRef()
    useLayoutEffect(() => {
        const { height, width } = blockRef.current.getBoundingClientRect()
        setDimensions({
            height,
            width
        })

    }, [])
    return (
        <>
            <code>{JSON.stringify(dimensions)}</code>
            <div className="mt-5" ref={blockRef}>
                {quotes.map((quote, index) => (
                    <blockquote className="blockquote text-end" key={index}>
                        <p className="">{quote.quote}</p>
                        <footer className="blockquote-footer"> {quote.author} </footer>
                    </blockquote>
                ))}
            </div>
        </>
    )
}