// Desestructuración 
// Asignación Desestructurante

const persona = {
    nombre: 'Cristian',
    edad: 23,
    clave: '123'
}

// const {
//     nombre,
//     edad,
//     clave
// } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(persona.edad);
// console.log(persona.clave);


const useContext = ({
    nombre,
    edad,
    clave,
    rango = 'Capitan'
}) => {

    // console.log(nombre + ',', edad + ',', clave + ',', rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2564,
            lng: 1.4568
        }
    }
}

const {
    nombreClave,
    anios,
    latlng: {
        lat,
        lng
    }
} = useContext(persona);


console.log('Clave: ' + nombreClave, '.Edad: ' + anios);
console.log('lat: ' + lat, 'lat: ' + lng);