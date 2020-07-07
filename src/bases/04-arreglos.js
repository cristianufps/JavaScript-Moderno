// Arreglos en JavaScript
// const arreglo  = new Array(101);

const arreglo = [1, 2, 3, 4];

// No usar, por que modifica el objeto
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// Al igual que en los objetos literales
let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);


// Multiplicar x2 cada uno de los elementos de otro array
const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2
});
// const arreglo3 = arreglo2.map();

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);