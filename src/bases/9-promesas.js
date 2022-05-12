 import {getHeroeById,getHeoresByOwner} from './08-imp-exp'


//  console.log(getHeoresByOwner('DC'))

//  const promesa = new Promise( (resolve, reject) => {

//      setTimeout( () => {
//          const heroe = getHeroeById(1);
//          resolve(heroe);
//          //reject('No se pudo Obtener')
//      }, 2000)
//  } );


// promesa.then( (heroe) => {
//     console.log(heroe);
//     console.log('Then de la promesa');
// }).catch(err => console.warn(err));
  
const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            const p1 = getHeroeById(id);
            // console.log(p1);
            if(p1)
                resolve(p1)
            else
                reject('Error el herroe no se encuentra')
        });
    });
}


getHeroeByIdAsync(10)
    .then(console.log)    
    .catch(console.warn);
