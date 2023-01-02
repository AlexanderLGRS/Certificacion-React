//Repaso  Javascript

// const nombre = 'Alexander';
// const apellido = 'Lansdorp';
// const nombreCompleto = `${nombre} ${apellido}`;
// let numero = 6;
// console.log(nombreCompleto, numero);
// if (true) {
//   let numero = 18;
//   console.log(numero);
// }

// const persona = {
// 	nombre: nombre,
// 	apellido: apellido,
// 	edad: numero,
//   direccion:{
//     ciudad: 'Bogotá',
//     pais: 'Colombia'

//   }
// };
// const persona2 = {...persona}
// persona2.nombre = 'Alex'
// console.table({persona});
// console.table({persona2});

// const arreglo = [1, 2, 3, 4];
// const arreglo2 = [8, ...arreglo, 5];
// const arreglo3 = arreglo2.map((x)=>{
//   return x*2
// })
// console.log(arreglo);
// console.log(arreglo2);
// console.log(arreglo3);

// const getUsuarioActivo = (nombre) => ({
// 	uid: 'abc456',
// 	nombre: nombre,
// });
// const usuarioActivo  = getUsuarioActivo('Alex')
// console.log({usuarioActivo});

// const persona = {
// 	nombre: 'Alex',
// 	edad: 24,
// 	clave: 'Batman',
// 	rango: 'Caballero',
// };
// const getUser = ({ nombre, edad, clave, rango }) => {
// 	return {
// 		nombreClave: clave,
// 		edad: edad,
// 		latlng: {
// 			lat: 1564,
// 			lng: 35843,
// 		},
// 	};
// };
// const {
// 	nombreClave,
// 	edad,
// 	latlng: { lat, lng },
// } = getUser(persona);
// console.log(nombreClave, edad, lat, lng);

// const personajes = ['Batman', 'Joker', 'EdNigma'];
// const [p1, , p3] = personajes;
// console.log(p3);
// const state = (valor) => {
// 	return [
// 		valor,
// 		() => {
// 			console.log('Hola mundo');
// 		},
// 	];
// };
// const [nombre, setNombre] = state('Alex');
// console.log(nombre);
// setNombre();

// import { heroes } from './data/heroes';
// const getHeroById = (id) => {
// 	return heroes.find((hero) => hero.id === id);
// };
// console.log(getHeroById(5));
// const getHeroesByOwner = (owner) => {
// 	return heroes.filter((hero) => hero.owner === owner);
// };
// console.log(getHeroesByOwner('DC'));
// export {getHeroById, getHeroesByOwner}

// const activo = true;
// const mensaje = activo ? 'Activo' : 'Inactivo';
// const mensaje2 = !activo && 'Activo';
// console.log(mensaje, mensaje2);