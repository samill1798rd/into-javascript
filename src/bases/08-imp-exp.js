import heroes, {owners} from '../data/heroes';

// console.log(owners);

// import  { heroes }  from './data/heroes';

//  const getHeroeById = (id) => {
//     return heroes.find(element => element.id === id)
//  };

//  const getHeroeById = (id) => {
//     return heroes.find( (heroes) => {
//         if(heroes.id === id){
//             return true;
//         }
//         else return false;
//     });
//  };


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

// console.log(getHeroeById(1));

export const getHeoresByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// console.log(getHeoresByOwner('DC'));

// export getHeoresByOwner;

// export default getHeroeById;