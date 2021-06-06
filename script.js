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

function colorBoxes() {
    const divs = document.querySelectorAll(".grid-box");
    divs.forEach(gridBox => {
        gridBox.addEventListener("mouseenter", function(e) {
            e.target.classList.add("grid-hover");
        })
    })
}

function clearBoxes() {
    const divs = document.querySelectorAll(".grid-box");
    divs.forEach(gridBox => {
        gridBox.classList.remove("grid-hover");
    })
}

const gridButton = document.getElementById("create-grid");
gridButton.addEventListener("click", function() {
    let boxes = prompt("How many boxes per side?", 16);
    if (boxes > 50) {
        alert("Please input a number under 50.");
    } else {
        clearBoxes();
        createGrid(boxes, boxes);
        colorBoxes();
    }
})
