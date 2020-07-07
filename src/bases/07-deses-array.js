
// Desesctructuracion de arreglos

const personajes = ['Ragnar','Ubbe','Bjorn'];

//Manera de mostrar el ultimo valor del arreglo
const [, , p3] = personajes;
console.log(p3);


// Manera ladillosa de imprimir console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);


const retornaArreglo = () =>{
    return ['ABC',123];
}

//De esta manera se extrae el arreglo completo
// const arr = retornaArreglo();
// console.log(arr);

//De esta otra manera se trae los datos del arreglo que necesita

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// ----------- Tarea
// 1. El primer valor del arr se llamara nombre
// 2. se llamara setNombre

// const useState = (valor) => {
//     return [valor, ()=>{console.log('Hola Mundo')}];
// }

// const arr = useState('Ragnar');
// console.log(nombre);
// setNombre();

// ------------ Solucion 


const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Ragnar');
console.log(nombre);
setNombre();





