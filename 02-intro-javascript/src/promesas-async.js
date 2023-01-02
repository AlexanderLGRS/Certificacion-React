// import { getHeroById } from './repaso';
// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const hero = getHeroById(2);
// 		// resolve(hero);
// 		reject('No se encontro el heroe');
// 	}, 2000);
// });
// promesa
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// const getHeroByIdAsync = (id) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const hero = getHeroById(id);
// 			if (hero) {
// 				resolve(hero);
// 			} else {
// 				reject('No se encontro el heroe');
// 			}
// 		}, 2000);
// 	});
// };
// getHeroByIdAsync(5).then(console.log).catch(console.error);

// const apiKey = 'sNGSYQHSoWnztxi53ZQ02XVn9EAJ5Y9z';
// const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// httpCall
// 	.then((resp) => resp.json())
// 	.then(({ data }) => {
// 		const urlImage = data.images.original.url;
// 		const img = document.createElement('img');
// 		img.src = urlImage;
// 		document.body.append(img);
// 	})
// 	.catch(console.error);

// const apiKey = 'sNGSYQHSoWnztxi53ZQ02XVn9EAJ5Y9z';
// const getImagen = async () => {
// 	try {
// 		const resp = await fetch(
// 			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
// 		);
// 		const { data } = await resp.json();
// 		const { url } = data.images.original;
// 		const img = document.createElement('img');
// 		img.src = url;
// 		document.body.append(img);
// 	} catch (error) {
// 		console.log('Error:', error);
// 	}
// };
// getImagen();
