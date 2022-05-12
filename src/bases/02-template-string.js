
const nombre = 'Gilbert';
const apellido = 'Rivas';


//const nombreCompleto = nombre +' '+ apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function getSaludos(name){
    return `Hola mundo ${name}`;
}

console.log(`Esto es un texto: ${ getSaludos(nombre) }`);