const gridContainer = document.querySelector(".grid-container")
const bombs = [];
const numBombs = 16;

for(let i=0; i<100; i++){
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("click", onSquareClick) //dichiaro la funzione onclick..


    gridContainer.append(square);
}


//randombombs
function generateBombs() {
    for (let i = 0; i < 16; i++) {
        const randomNum = Math.floor(Math.random() * 100);
        bombs.push(randomNum);
    }
}


//invoco la la funzione onClick fuori del ciclo for 
function onSquareClick ( ) {
    this.classList.toggle("bg-success"); 

    const squareIndex = [];


    if (bombs.includes(squareIndex)) {
        squareIndex.push(i);
        this.classList.add("bg-danger");
        
    } else {
        this.classList.add("bg-success");
    }
}
    




// ---------------------------------

// genero 16 numeri random da 1 a 100 
//const randomNumber = Math.floor(Math.random() * 100) +1; questo genera solo un numero 


// const randomNumbers = [];
// for (let i=0; i<16; i++){
//     const randomNum = randomNumber = Math.floor(Math.random() * 100) +1;
//     randomNumbers.push(randomNum) 
// }
// console.log(randomNumbers)

//------------------------------------------------

