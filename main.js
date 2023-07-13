const gridContainer = document.querySelector(".grid-container")

const numBombs = 16;

const bombs = generateBombs()
console.log(bombs)

for(let i=1; i<=100; i++){
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("click", function(){
        this.classList.toggle("bg-success"); 

    const squareIndex = [];


    if (bombs.includes(i)) { //trovato una bomba
       
       // this.classList.add("bg-danger"); 
       console.log (" bomba");
        
    } else {
        //this.classList.add("bg-success");
        console.log("no bomba")
        
    }

    }) //dichiaro la funzione onclick..


    gridContainer.append(square);
}


//randombombs
function generateBombs() {
    const bombs = [];
    for (let i = 0; i < 16; i++) {
        const randomNum = Math.floor(Math.random() * 100);
        bombs.push(randomNum);
    }
    return bombs
}


//invoco la la funzione onClick fuori del ciclo for 
function onSquareClick ( ) {
    
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

