import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { getGifs } from '../../src/utils/GetGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'Paradise PD';
  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });
  test('Debe mostrar items cuando se ejecuta useFetchGifs', async () => {
    useFetchGifs.mockReturnValue({
      images: await getGifs(category),
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img')).toHaveLength(10)
  });
});
