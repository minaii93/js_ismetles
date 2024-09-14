export default class Kartya {
    #kutya = {} //privát adattag lett

    constructor(kutya, szuloElem, esemenyKezelo){
        /*iniciaálizálja az adattagokat */
        this.#kutya = kutya
        this.szuloElem = szuloElem
        this.#kutyaAdatKiir()
        this.gomb = $(".kivalaszt:last"); //az éppen utoljára létrehozott gombelemet jelentse
        this.#esemenyKezelo()
    }

    #esemenyKezelo(){
        
        
        this.gomb.on("click", () => { // a nyílfüggvény és a névtelen func függ között az a különbség a nyíl a konkrét osztálypéldányra mutat(a teljes objektumot), 
            //a func névtelen függvény esetén pedig arra a html elemre, amelyik kiváltotta az eseményt
            console.log(this) 
});
    }


    /*Tagfüggvény, nem kell paraméteresen már átadni */

     #kutyaAdatKiir(){ //privát metódus lett a #-tel
        
        this.szuloElem.append(`<div class="col-lg-4 col-md-6"> 
            <div class ="card-body">
                <h3 class="card-title">${this.#kutya.nev}</h3>
                <p class ="card-text">${this.#kutya.kora}</p>
                <p class ="card-text">${this.#kutya.neme}</p>
                <button class = "kivalaszt" btn.btn success>Kiválaszt</button>
            </div>
            
                        </div>`);
        
    
       
    
    }


}


