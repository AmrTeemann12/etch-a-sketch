const container = document.querySelector("#grid-square");
const set = document.querySelector("#set-grid");
const bar = document.querySelector("#bar");
const squaresNumber = document.querySelector("#squares-number");
const popupContainer = document.querySelector(".popup-container");
const randomColorsOption = document.querySelector("#random-colors");

function createGrid(n){
    container.innerHTML="";
    if (!Number.isInteger(n)|| n <= 0){
        alert("please enter a valid whole number")
        return;
    }
    const width = container.offsetWidth;
    const squareWidth = width/n;
    const squareWidthPercentage = squareWidth/width*100;

    for (let i = n*n; i > 0; i--){
        const square = document.createElement("div");
        square.classList.add("square-border")
        square.style.width = `${squareWidthPercentage}%`

        container.appendChild(square)
    }

    const squares = document.querySelectorAll(".square-border");
    squares.forEach(square => square.addEventListener("mouseenter", (e) =>{
        e.preventDefault()
        if(isMouseDown){
            if(randomColorsOption.checked){
            etch(square, "randomize")
            } else {
            etch(square)
            }
        }
    }))
}

function getRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}

function etch(elem, color = "black"){

    if(color === "randomize"){
        elem.style.backgroundColor = getRandomColor();
    } else {
        elem.style.backgroundColor = color;
    }
}

let isMouseDown = false;
document.body.addEventListener("mousedown", () =>{
    isMouseDown = true;
});
container.addEventListener("mousedown", (e) =>{
    e.preventDefault()
})
document.addEventListener("mouseup", () => isMouseDown = false);
document.addEventListener("mouseleave", () => isMouseDown = false);

bar.value = 16;
squaresNumber.textContent = `${bar.value} x ${bar.value}`
bar.addEventListener("input", (e) => {
    
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

createGrid(16)
