import { render } from "@testing-library/react"
import App from "../src/App"

describe('Pruebas en App', () => {
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<App title='Mi titulo' />)
        console.log(container);
        expect(container).toMatchSnapshot()
    })
})