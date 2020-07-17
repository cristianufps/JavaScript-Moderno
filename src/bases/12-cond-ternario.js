
// OPERADOR CONDICIONAL TERNARIO

const activo = true;

//MANERA EXTENSA

// const mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// }else {
//     mensaje = 'Inactivo';
// }

// Usando el operador ternario
const mensaje = (!activo) ? 'Activo'  : 'Inactivo';

// En caso de que solo quiera mostrar un mensaje y en la otra parte nada
const mensaje1 = (!activo) ? 'Activo' : null;

// Pero una manera mas eficaz que trabajar con null es esta!
const mensaje2 = (!activo) && 'Activo';

console.log(mensaje);
console.log(mensaje1);
console.log(mensaje2);

