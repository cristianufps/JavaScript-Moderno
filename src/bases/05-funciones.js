// FUNCIONES EN JAVASCRIPT


const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

// Funcion de flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Cristian'));

console.log(saludar);
console.log(saludar2('Cristian'));
console.log(saludar3('Maria'));
console.log(saludar4);



const getUser = () => ({
    uid: 'ABC123',
    username: 'Cristian.bg97'
});

console.log(getUser());

//Tarea

// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas


const getUsuarioActivo = (nombre) => ({
    uid: 'ABC456',
    username: nombre
});
// function getUsuarioActivo (nombre){
//     return {
//         uid: 'ABC456',
//         username: nombre
//     }
// };

const usuarioActivo = getUsuarioActivo('Cristian');
console.log(usuarioActivo);

