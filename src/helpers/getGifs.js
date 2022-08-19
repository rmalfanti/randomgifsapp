export const getGifs = async( category ) => {
    const apiKey = 'NCjVOqP27mr5KmQ1lIYHiY6EYWP3jIG6';
    const url = `https://api.giphy.com/v1/gifs/search?apiKey=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}