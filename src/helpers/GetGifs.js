export const getGifs = async(category, resultados) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${encodeURI(resultados)}&api_key=Y2Fvyji5IrUnMTWgl3aeQZTm1EvNM2Cb`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img =>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    // console.log(gifs);
    // setImages(gifs);
    return gifs;
}