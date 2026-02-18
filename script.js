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
    etch()
}

createGrid(16)

function etch(){
    let isMouseDown = false;
    document.body.addEventListener("mousedown", (e) =>{
        e.preventDefault()
        isMouseDown = true;
    });
    document.addEventListener("mouseup", () => isMouseDown = false);
    document.addEventListener("mouseleave", () => isMouseDown = false);
    const squares = document.querySelectorAll(".square-border");

    squares.forEach(square => square.addEventListener("mouseenter", (e) =>{
        e.preventDefault()
        if (isMouseDown){
        e.target.style.backgroundColor = "black"
        }
    }));
}

const set = document.querySelector("#set-grid");

set.addEventListener("click", (e) =>{
    e.preventDefault();
    container.innerHTML="";
    createGrid(+prompt("pick a number for squares per side."), 10)
})
