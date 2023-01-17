import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {
    test('Debe renderizar el titulo de la app', () => {
        render(<GifExpertApp />)
        expect(screen.getByText("GifExpertApp")).toBeTruthy()
        // screen.debug()
    })
})