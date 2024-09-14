import Kartya from "./kartya.js";

export default class Kartyak{
    #lista = []
    constructor(lista, szuloElem){
        this.#lista = lista;

        this.szuloElem = szuloElem;
        this.szuloElem.empty(); //nem fog duplikálni 

        this.#kartyaKiir()
    }

    #kartyaKiir(){
        this.#lista.forEach((kutya) => {
    
            
            new Kartya(kutya, this.szuloElem);
    });
    }

};



