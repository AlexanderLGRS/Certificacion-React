import { getHeroById } from './repaso';

export const getHeroByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const hero = getHeroById(id);
			if (hero) {
				resolve(hero);
			} else {
				reject('No se encontro el heroe');
			}
		}, 1000);
	});
};


export const getImagen = async (apiKey) => {
	try {
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await resp.json();
		const { url } = data.images.original;
		return url
	} catch (error) {
		return 'No se encontro la imagen'
	}
};
getImagen();
