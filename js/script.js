const gridElement = document.querySelector("div#grid");

for (let index = 0; index < 99; index++) {
    const squareElement = document.createElement("article");
    squareElement.classList.add("square");

    gridElement.appendChild(squareElement);
    
}

