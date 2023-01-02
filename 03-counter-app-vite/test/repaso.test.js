import {
	getHeroById,
	getHeroesByOwner,
	getSaludo,
	getUser,
	getUsuarioActivo,
	returnArray,
} from '../src/repaso';

describe('Primeros ejemplos de testing', () => {
	test('Primer test', () => {
		const message1 = 'Hola Alex';
		const message2 = message1.trim();
		expect(message1).toBe(message2);
	});
	test('Segundo test', () => {
		const num = 10;
		const num2 = 2 * 5;
		expect(num).toBe(num2);
	});
});
describe('Pruebas: Template strings', () => {
	test('getSaludo debe retornar "Que se dice viejo Alex"', () => {
		const name = 'Alex';
		const message = getSaludo(name);
		expect(message).toBe(`Que se dice viejo ${name}`);
	});
});

describe('Pruebas: Functions', () => {
	test('getUser debe retornar un objeto', () => {
		const testUser = {
			uid: 'ABC123',
			userName: 'Alex',
		};
		const user = getUser();
		expect(user).toEqual(testUser);
	});
	test('getUserActivo debe retornar un objeto', () => {
		const nombre = 'Alex';
		const testUser = {
			nombre: nombre,
			uid: 'abc456',
		};
		const user = getUsuarioActivo(nombre);
		expect(user).toEqual(testUser);
	});
	test('returnArray debe retornar un array', () => {
		const testArray = ['ABC', 123];
		const [letters, numbers] = returnArray();
		expect(letters).toEqual(testArray[0]);
		expect(numbers).toEqual(testArray[1]);
	});
});

describe('Pruebas: heroes', () => {
	test('getHeroById debe retornar un heroe', () => {
		const testHero = {
			id: 4,
			name: 'Flash',
			owner: 'DC',
		};
		const hero = getHeroById(4);
		expect(hero).toEqual(testHero);
		expect(typeof hero).toEqual('object');
	});
	test('getHeroesByOwner debe retornar los heroes de DC', () => {
		const testHeroes = [
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		];
		const heroes = getHeroesByOwner('DC');
		expect(heroes).toEqual(testHeroes);
		expect(heroes.length).toEqual(3);
		expect(typeof heroes).toEqual('object');
	});
	test('getHeroesByOwner debe retornar los heroes de Marvel', () => {
		const testHeroes = [
			{ id: 2, name: 'Spiderman', owner: 'Marvel' },
			{ id: 5, name: 'Wolverine', owner: 'Marvel' },
		];
		const heroes = getHeroesByOwner('Marvel');
		expect(heroes.length).toBe(2);
		expect(heroes).toEqual(testHeroes);
	});
});