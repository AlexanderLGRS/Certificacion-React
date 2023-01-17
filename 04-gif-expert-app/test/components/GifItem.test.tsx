import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
  const titulo = 'Hola soy Alex';
  const url = 'http://soy_la_url/';
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={titulo} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('Debe renderizar la imagen con el alt y el src correctos', () => {
    render(<GifItem title={titulo} url={url} />);
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(titulo)
  });
  test('Debe renderizar el titulo', () => {
    render(<GifItem title={titulo} url={url} />);
    expect(screen.getByText(titulo)).toBeTruthy();
  });
});
