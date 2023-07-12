const gridContainer = document.querySelector(".grid-container")

for(let i=0; i<100; i++){
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("click", onSquareClick) //dichiaro la funzione onclick..






    gridContainer.append(square);
}


//invoco la la funzione onClick fuori del ciclo for 
function onSquareClick ( ) {
    this.classList.toggle("bg-success"); 
    // dataSet.indice = (i + 1)toString();perche mi cancella le celle ?
}

// ---------------------------------

// genero 16 numeri random da 1 a 100 
//const randomNumber = Math.floor(Math.random() * 100) +1; questo genera solo un numero 


const randomNumbers = [];
for (let i=0; i<16; i++){
    const randomNum = randomNumber = Math.floor(Math.random() * 100) +1;
    randomNumbers.push(randomNum) 
}
console.log(randomNumbers)

//------------------------------------------------
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - 
// abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro
// e l’utente può continuare a cliccare sulle altre celle.

// funzione per gestire il click sulla cella

