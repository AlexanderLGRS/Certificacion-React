export const getGifs = async (category) => {
    const apiKey = 'sNGSYQHSoWnztxi53ZQ02XVn9EAJ5Y9z';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }))
    return gifs
}