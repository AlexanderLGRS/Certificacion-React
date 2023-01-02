import { getHeroByIdAsync, getImagen } from '../src/promesas-async';

describe('Pruebas: promesas', () => {
	test('getHeroByIdAsync debe retornar un heroe', (done) => {
		getHeroByIdAsync(1).then((hero) => {
			expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
			done();
		});
	});
	test('getHeroByIdAsync debe retornar error si no existe', (done) => {
		getHeroByIdAsync(10).catch((error) => {
			expect(error).toBe('No se encontro el heroe');
			done();
		});
	});
});

describe('Pruebas: async', () => {
	test('getImagen debe retornar una url de una imagen', async () => {
		const apiKey = 'sNGSYQHSoWnztxi53ZQ02XVn9EAJ5Y9z';
		const url = await getImagen(apiKey);
		expect(typeof url).toBe('string');
	});
	test('getImagen debe retornar error con el apiKey incorrecto ', async () => {
		const apiKey = 'sNGSYQHSoWnztxi53ZQ02XVn9EAJ5Y9';
		const url = await getImagen(apiKey);
		expect(url).toBe('No se encontro la imagen');
	});
});
