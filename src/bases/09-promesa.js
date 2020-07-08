import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//        // reject("No se encontro el heroe");
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log("El heroe es ", heroe);
// })
//     .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => { 
        setTimeout( () => {
            const h = getHeroeById(id);
            if(p1) {
                resolved(p1);
            }
            else {
                reject("El heroe no existe");
            }
        }, 2000);
    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);