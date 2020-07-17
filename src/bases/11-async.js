
// USANDO ASYNC 


// FORMA EXTENSA DE DECLARAR LA FUNCION

// const getImagenPromise = () => {
//     return new Promise ( (resolve,reject) => {
//         resolve('https://www.google.com');
//     })
// }
// getImagenPromise().then(console.log);



//DECLARANDO UNA PROMESA DE UNA FORMA MÁS ABREVIADA
// const getImagenPromesa = () =>
//     new Promise((resolve) => resolve('https://www.google.com'));

// getImagenPromesa().then(console.log);



// DECLARANDO LA FUNCION USANDO ASYNC
// const getImage = async() => 'https://www.google.com';
// getImage().then(console.log);
// console.log(getImage());  //PARA VER SI RESUELVE




// USANDO ASYNC CON EL EJERCICIO DE 10-FETCH 

const getImage = async () => {
    try {
        const apiKey = 'SHWMz4AMy0F1RbaNX3SZozX64YrfSNcq';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch(error) {
        console.error(error);
    }
}

getImage();
getImage();

