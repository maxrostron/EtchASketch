let numberSquares = 20;
let container = document.getElementById("mainContainer");

function createDiv(numberSquares) {
    let boxDimension = 960/numberSquares + "px";
    let totalSquares = numberSquares * numberSquares;
    
    let i;
    for (i = 0; i < totalSquares; i++) {
        let div = document.createElement("div");
        div.id = "div"+i;
        div.style.width = boxDimension;
        div.style.height = boxDimension;
        div.addEventListener("mouseover", function() {
            document.getElementById(div.id).style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        })
        container.appendChild(div);
    }
}

createDiv(numberSquares);

function sizePrompt() {
    numberSquares = prompt("Enter new size")
    if(numberSquares <= 100 && numberSquares >= 0) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
          createDiv(numberSquares);
    }
    else {
        alert("Please enter a number between 0 - 100");
        sizePrompt();
    }
}


