import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {
    test('Debe cambiar el valor del input', () => {
        render(<AddCategory />)
        const input = screen.getByPlaceholderText('Buscar gifs')
        fireEvent.input(input, { target: { value: 'nuevo valor' } })
        expect(input.value).toBe('nuevo valor')
    })
    test('Debe hacer submit al form', () => {
        const onSubmitHandlerMock = jest.fn()
        const { container } = render(<AddCategory onSubmitHandler={onSubmitHandlerMock} />)
        const form = container.querySelector('form')
        const input = screen.getByPlaceholderText('Buscar gifs')
        fireEvent.input(input, { target: { value: 'nuevo valor' } })
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onSubmitHandlerMock).toHaveBeenCalledTimes(1)
        expect(onSubmitHandlerMock).toHaveBeenCalledWith('nuevo valor')
    })
    test('No debe llamar onSubmitHandler si el input está vacio', () => {
        const onSubmitHandlerMock = jest.fn()
        const { container } = render(<AddCategory onSubmitHandler={onSubmitHandlerMock} />)
        const form = container.querySelector('form')
        fireEvent.submit(form)
        expect(onSubmitHandlerMock).not.toHaveBeenCalled()
    })
})