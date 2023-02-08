import { useCounter, useFetch } from "../hooks"
import { Loader } from "../03-Examples/Loader"
import { QuoteContainer } from "../03-Examples/QuoteContainer"

export const Layout = () => {
    const { counter, increment, decrease } = useCounter(1)
    const { state: { data, isLoading, hasError } } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            <button className="btn btn-primary" disabled={isLoading} onClick={decrease} >Less Quotes</button>
            <button className="btn btn-primary" disabled={isLoading} onClick={increment} >More Quotes</button>
            {isLoading
                ? <Loader />
                : <QuoteContainer quotes={data} />
            }
        </>
    )
}