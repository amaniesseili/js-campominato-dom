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
}


