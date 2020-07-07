

const persona = {
    nombre: 'Cristian',
    apellido: 'Bustos',
    edad: 23,
    direccion: {
        barrio: 'Torcoroma 3',
        manzana: 'F17',
        casanumero: 11,
    }
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Maria';

console.log(persona2);


// Representacion de los objetos en una tabla
//   console.table(persona);