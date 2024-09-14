


export function cimKiiras(cim){ //így másik modulban is használható 
    const h1Elem = $('header');
    console.log(h1Elem); // html DOM típusú elemet ad vissza

    h1Elem.append(`<p> ${cim}</p>`);
    

};

// paraméterekkel tudom átadni azokat a változókat ami a külön file-okban globális változóként van jelen 



// készíts függvényt, amivel az első kutya adatait írhatjuk ki a tartalom nevű class-ba. divben legyen, a nev h3-as címben, a kor p-ben, 
// nem p-tagben 

export function kutyaAdatKiir(kutya){
    const divElem = $(".tartalom");
    divElem.append(`<div class="col-lg-4 col-md-6"> 
        <div class ="card-body">
            <h3 class="card-title">${kutya.nev}</h3>
            <p class ="card-text">${kutya.kora}</p>
            <p class ="card-text">${kutya.neme}</p>
            <button class = "kivalaszt" btn.btn success>Kiválaszt</button>
        </div>
        
                    </div>`);
    

   

}

// lg- 960px alatt megtörik 
// alatta lévő töréspontnál 



  


