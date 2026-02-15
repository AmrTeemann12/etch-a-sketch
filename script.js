const container = document.querySelector("#container");

function createGrid(n){
    if (!Number.isInteger(n)|| n < 0) return "please enter a valid whole number"
    const width = container.offsetWidth;
    const squareWidth = width/n;
    const squareWidthPercentage = squareWidth/width*100;

    for (let i = n*n; i > 0; i--){
        const square = document.createElement("div");
        square.classList.add("square-border")
        square.style.width = `${squareWidthPercentage}%`

        container.appendChild(square)
    }   
}

createGrid(16)
