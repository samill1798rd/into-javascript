
//Funciones en JS

const saludar = function (nombre){
    return `Hola ${nombre}`;
}


const saludar2  = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3  = (nombre) => `Hola ${nombre}`;
const saludar4  = () => `Hola Mundo`;

 console.log(saludar2('Vegeta'));
 console.log(saludar3('Goku'));
 console.log(saludar4());



 const getUser= () => ({
    uid: 'ABC567',
    username: 'Samill',
});

console.log(getUser());


 //Tarea
 //1. Trasnformen a una funcion de flecha
 //2. Retornar a un Objecto implicito

const getUsarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

const usuarioActivo = getUsarioActivo('Carlos');

console.log(usuarioActivo);