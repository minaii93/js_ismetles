import { kutyaLista } from "./adatok.js";

import { cimKiiras, kutyaAdatKiir } from "./fuggvenyek.js"; // a kiterjesztés mögéírása fontos!! .js
let nev= "Dézi";

const cim = "Kutyák minden mennyiségben";

//objektumokat hozunk összetett  adatszerkezet esetén

//egyetlen kutya adata

const kutya1 = {
    nev : "Foltos", 
    kora: 12,
    neme: "kan"
}

const kutya2 = {
    nev : "Fifi", 
    kora: 5,
    neme: "nőstény"
}

kutya1.nev = "Jenő";

console.log('első kutya: ',kutya1);
console.log("cím:", cim);

// lista - csak azonos típusú adatok lhetnek 
// tartalmat valtoztathatunk consttal is - biztonságosabb mint a let

const nevLista = ["Dézi", "Jenő", "Béla"];
const szamLista = [5, 12, 7];

nevLista[0] = "Lotti";
console.log(nevLista[0]);

// const h1Elem = document.querySelector('header h1');


cimKiiras(cim);

kutyaLista.forEach((kutya, index) => {
    console.log(kutya, index)
    kutyaAdatKiir(kutya);
});

// for (let index = 0; index < kutyaLista.length; index++) {
//     kutyaAdatKiir(kutyaLista[index]);
    
// } ez a megoldás is jó 



kutyaAdatKiir(kutyaLista);

const gomb = $(".kivalaszt");
gomb.on("click",(event)=> {
    console.log(event.target)
});
    



// az az elem ami kiváltotta az eseményt












