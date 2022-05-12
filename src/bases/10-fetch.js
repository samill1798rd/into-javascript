
const apiKey = 'PtY7He5mc7qvo6lkUw4L25OyZYRez1HE';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

peticion
    .then((resp)=> resp.json())
    .then(({data})=> {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch( console.warn);