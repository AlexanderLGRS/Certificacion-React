import { render, screen } from "@testing-library/react"
import App from "../src/App"

describe('Pruebas en App', () => {
    const miTitulo = "Hola soy Alex"
    const miSubtitulo = "y este es mi subtitulo"
    // test('Debe hacer match con el snapshot', () => {
    //     const { container } = render(<App title='Mi titulo' />)
    //     expect(container).toMatchSnapshot()
    // })
    test('Debe renderizar el titulo', () => {
        render(<App title={miTitulo} />)
        expect(screen.getByText(miTitulo)).toBeTruthy()
        // expect(getByTestId("test-title").innerHTML).toBe(miTitulo)
        // expect(getByTestId("test-title").innerHTML).toContain(miTitulo)
        // const h1 = container.querySelector("h1")
        // expect(h1.innerHTML).toBe("Titulo")

    })
    test('Debe renderizar el subtitulo', () => {
        render(<App title={miTitulo} subtitle={miSubtitulo} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(miTitulo)
        // const h1 = container.querySelector("h1")
        // expect(h1.innerHTML).toBe("Titulo")

    })
})