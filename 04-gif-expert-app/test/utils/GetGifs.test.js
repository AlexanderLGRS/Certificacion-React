import { getGifs } from "../../src/utils/GetGifs"

describe('Pruebas en GetGifs', () => {
    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('si')
        expect(gifs.length).toBe(10)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})