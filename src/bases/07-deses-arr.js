

const personajes = ['Goku','Vegeta','Trunks'];
const [ , ,p3] = personajes;
console.log(p3 );


const retornArreglo = () => {
    return ['ABC',123];
};

const [letras, numeros] = retornArreglo();
console.log(letras, numeros);

//Tarea
const returnNewArray = (valor) => {
    return [valor, () => console.log('Hola Mundo') ];
};

const [nombre, setNombre] = returnNewArray('Goku');
console.log(nombre);
setNombre();

// arr[1]();


