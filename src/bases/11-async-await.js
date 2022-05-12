

// const getImagenPromesa = () => 
//     new Promise(resolve => resolve('Test'));
// getImagenPromesa().then(console.log);

const getImagen = async() => {

    try {
        const apiKey = 'PtY7He5mc7qvo6lkUw4L25OyZYRez1HE';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        //manejo del error
        console.error(error)
    }
}

getImagen();
