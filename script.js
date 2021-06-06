function createGrid(rows, columns) {
    // delete previous grid if it exists
    if (document.getElementById("main-container")) {
        const cont = document.getElementById("main-container");
        cont.remove();
    }
    // create new grid
    var mainCont = document.createElement("div");
    mainCont.id = "main-container";
    document.body.appendChild(mainCont);

    const cont = document.getElementById("main-container");
    for (i = 1; i <= rows * columns; i++) {
        var div = document.createElement('div');
        div.className = "grid-box";
        cont.appendChild(div);
    };
    cont.style.setProperty("--sides", rows)
    cont.style.gridTemplateColumns = "repeat(var(--sides), auto)";
    cont.style.gridTemplateRows = "repeat(var(--sides), auto)";
}

// Function to color boxes

function colorBoxes(color) {
    const divs = document.querySelectorAll(".grid-box");
    divs.forEach(gridBox => {
        gridBox.classList.add("color");
        gridBox.addEventListener("mouseenter", function(e) {
            e.target.style.setProperty("--color", color);
        })
    })
}

// Function to clear all colored boxes

function clearBoxes() {
    const divs = document.querySelectorAll(".grid-box");
    divs.forEach(gridBox => {
        gridBox.classList.remove("grid-hover");
    })
}

// Clear button
createGrid(16, 16);

const gridButton = document.getElementById("clear");
gridButton.addEventListener("click", function() {
    let boxes = prompt("How many boxes per side?", 16);
    if (boxes > 100) {
        alert("Please input a number under 100.");
    } else {
        clearBoxes();
        createGrid(boxes, boxes);
    }
})

const blackButton = document.getElementById("black");
blackButton.addEventListener("click", function () {
    colorBoxes("black");
})

const redButton = document.getElementById("red");
redButton.addEventListener("click", function () {
    colorBoxes("red");
})

const blueButton = document.getElementById("blue");
blueButton.addEventListener("click", function () {
    colorBoxes("blue");
})

const randomButton = document.getElementById("random");
randomButton.addEventListener("click", function () {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorBoxes("#"+randomColor);
})
