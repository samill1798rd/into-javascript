
//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

//const { nombre, edad, clave } = persona;
// const { edad } = persona;
// const { clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornarPersona = ({clave, nombre, edad, rango = 'Capitan'}) => {
    // const {edad, clave, nombre} = usuario;
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1223,
            lng: -12.3232
        }

    }
};


const {nombreClave, anios, latlng:{lat, lng}} = retornarPersona(persona);
// const {lat, lng} = retornarPersona(persona);

// const {nombreClave, anios} = avenger;


console.log(nombreClave,anios);
console.log(lat, lng);

// console.log(avenger);