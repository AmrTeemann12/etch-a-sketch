const container = document.querySelector("#grid-square");

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

function etch(){
    let isMouseDown = false;
    document.body.addEventListener("mousedown", (e) =>{
        isMouseDown = true;
    });
    container.addEventListener("mousedown", (e) =>{
        e.preventDefault()
    })
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

createGrid(16)

const set = document.querySelector("#set-grid");
const bar = document.querySelector("#bar");
const squaresNumber = document.querySelector("#squares-number");
const popupContainer = document.querySelector(".popup-container");

bar.value = 16;
squaresNumber.textContent = `${bar.value} x ${bar.value}`
bar.addEventListener("input", (e) => {
    container.innerHTML="";
    squaresNumber.textContent = `${e.target.value} x ${e.target.value}`
    createGrid(+(e.target.value))
})

set.addEventListener("click", (e) =>{
    e.preventDefault()
    popupContainer.classList.add("active")
    bar.focus()
})

bar.addEventListener("blur", () => {
    popupContainer.classList.remove("active")
})