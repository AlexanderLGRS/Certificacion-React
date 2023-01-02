import heroes from './data/heroes';
//TESTING repaso Javascript
//TEMPLATE STRINGS
export function getSaludo(nombre) {
	return 'Que se dice viejo ' + nombre;
}
//TEMPLATE STRINGS

//FUNCTIONS
export const getUser = () => ({
	uid: 'ABC123',
	userName: 'Alex',
});
export const getUsuarioActivo = (nombre) => ({
	uid: 'abc456',
	nombre: nombre,
});

export const returnArray = () => {
	return ['ABC', 123];
};
//FUNCTIONS

//HEROES
const getHeroById = (id) => {
	return heroes.find((hero) => hero.id === id);
};
const getHeroesByOwner = (owner) => {
	return heroes.filter((hero) => hero.owner === owner);
};
export { getHeroById, getHeroesByOwner };
//HEROES

