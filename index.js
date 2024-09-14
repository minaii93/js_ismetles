// a program belépési pontja 

import { kutyaLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";
const kivalasztottLista = [];

const divElem = $(".tartalom");
const kivElem = $(".kivalasztottak");

new Kartyak(kutyaLista, divElem); //csak 

//melyik kártáyra kattintunk? Az adatait tegyük bele a listába, 
// ha el akarunk érni egy privát adattagot: 1. getter az osztályban és azt a gettert kell meghívni

//feliratkozunk a saját esményünkre
$(window).on("kivalaszt", (event)=>
{
    console.log(event.detail) //elérjük az adatokat
    kivalasztottLista.push(event.detail);
    console.log(kivalasztottLista);
    new Kartyak(kivalasztottLista, kivElem);
})



// import { cimKiiras } from "./fuggvenyek.js"; // a kiterjesztés mögéírása fontos!! .js
// import Kartya from "./kartya.js";
// let nev= "Dézi";

// const cim = "Kutyák minden mennyiségben";

// //objektumokat hozunk összetett  adatszerkezet esetén

// //egyetlen kutya adata

// const kutya1 = {
//     nev : "Foltos", 
//     kora: 12,
//     neme: "kan"
// }

// const kutya2 = {
//     nev : "Fifi", 
//     kora: 5,
//     neme: "nőstény"
// }

// kutya1.nev = "Jenő";

// console.log('első kutya: ',kutya1);
// console.log("cím:", cim);

// // lista - csak azonos típusú adatok lhetnek 
// // tartalmat valtoztathatunk consttal is - biztonságosabb mint a let

// const nevLista = ["Dézi", "Jenő", "Béla"];
// const szamLista = [5, 12, 7];

// nevLista[0] = "Lotti";
// console.log(nevLista[0]);

// // const h1Elem = document.querySelector('header h1');


// cimKiiras(cim);
// const divElem = $(".tartalom");
// kutyaLista.forEach((kutya, index) => {
    
//     console.log(kutya, index)
//     // kutyaAdatKiir(kutya);
//     new Kartya(kutya, divElem);
// });

// for (let index = 0; index < kutyaLista.length; index++) {
//     kutyaAdatKiir(kutyaLista[index]);
    
// } ez a megoldás is jó 



// kutyaAdatKiir(kutyaLista);

    



// az az elem ami kiváltotta az eseményt












