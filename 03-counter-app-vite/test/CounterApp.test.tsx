import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import React from 'react';
import CounterApp from '../src/CounterApp';

describe('Pruebas en App', () => {
  const initialValue = 100;
  const interval = 1;

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(
      <CounterApp value={initialValue} interval={interval} />
    );
    expect(container).toMatchSnapshot();
  });
  test('Debe mostar el valor innicial de "100"', () => {
    render(<CounterApp value={initialValue} interval={interval} />);
    expect(screen.getByText('100')).toBeTruthy();
  });
  test('Debe incrementar con el boton "+1"',()=>{
    render(<CounterApp value={initialValue} interval={interval} />);
    fireEvent.click(screen.getByRole('button', {name:'button-increment'}))
    fireEvent.click(screen.getByRole('button', {name:'button-increment'}))
    expect(screen.getByRole('heading', {level:2}).innerHTML).toBe("102")
  })
  test('Debe decrementar con el boton "-1"',()=>{
    render(<CounterApp value={initialValue} interval={interval} />);
    fireEvent.click(screen.getByRole('button', {name:'button-decrement'}))
    fireEvent.click(screen.getByRole('button', {name:'button-decrement'}))
    expect(screen.getByRole('heading', {level:2}).innerHTML).toBe("98")
  })
  test('Debe reiniciar con el boton "Reset"',()=>{
    render(<CounterApp value={initialValue} interval={interval} />);
    fireEvent.click(screen.getByRole('button', {name:'button-decrement'}))
    fireEvent.click(screen.getByRole('button', {name:'button-decrement'}))
    fireEvent.click(screen.getByRole('button', {name:'button-decrement'}))
    fireEvent.click(screen.getByRole('button', {name:'button-decrement'}))
    expect(screen.getByRole('heading', {level:2}).innerHTML).toBe("96")
    fireEvent.click(screen.getByRole('button', {name:'button-reset'}))
    expect(screen.getByRole('heading', {level:2}).innerHTML).toBe("100")
  })
});
