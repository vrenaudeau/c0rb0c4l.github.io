// WARNING, this script doesn't work for a grid size beyond 9x9, due to the instructions used to find the ID. I'll address this issue later.

const totalRows = 3;
const totalColumns = 3;

generateGrid();

// function used to generade the grid, based on the desired number of rows/columns
// each cell gets an id which is generated in a systemic way (row-i-column-j)
function generateGrid() {

    for (let i = 1; i <= totalRows; i++) {
        const row = document.createElement('tr');
        row.setAttribute('id', 'row-' + i.toString());
        document.getElementById("js-generate-grid").insertAdjacentElement('beforeend', row);
        for (let j = 1; j <= totalColumns; j++) {
            const column = document.createElement('td')
            // column.innerText = "case" + i.toString() + j.toString();
            column.setAttribute('id', 'row-' + i.toString() + '-column-' + j.toString());
            document.getElementById('row-' + i.toString()).insertAdjacentElement('beforeend', column);
        }
    }
}


// function used to assign to each cell one of two attributes which is randomly chosen based on the odd/even nature of a random integer)
// this attribute will be used to color the cell. The function based on the onlick event is also generated within these instructions.
function initializeCells() {
    for (let i = 1; i <= totalRows; i++) {
        for (let j = 1; j <= totalColumns; j++) {
            let rand = parseInt(Math.random() * 10);
            if (rand % 2 === 0) {
                document.getElementById('row-' + i.toString() + '-column-' + j.toString()).setAttribute('class', 'app-green');
            } else {
                document.getElementById('row-' + i.toString() + '-column-' + j.toString()).setAttribute('class', 'app-red');
            }
            document.getElementById('row-' + i.toString() + '-column-' + j.toString()).setAttribute('onclick', 'handleClick(this)');
        }
    }
}

// function used to switch the attribute that affects the color of a cell, based on the ID and its actual state.
function switchCellState(cellState, cellID) {

    if (cellState === 'app-green') {
        document.getElementById(cellID).className = 'app-red';
    } else if (cellState === 'app-red') {
        document.getElementById(cellID).className = 'app-green';
    }
}

// function that triggers the switchCellState on the clicked cell and adjacent ones (based on the clicked cell ID)
function handleClick(element) {

    let clickedCellState = element.getAttribute('class');
    let clickedCellID = element.getAttribute('id');

    switchCellState(clickedCellState, clickedCellID);

    // Variables used to "locate" the clicked cell
    let clickedRow = parseInt(clickedCellID.charAt(4));
    let clickedColumn = parseInt(clickedCellID.charAt(13));

    // I know there are some duplicate instructions and the parameters are hideously long. Will address this issue and refactor later.
    // It was easier/faster for me to handle each individual scenario rather than finding the mathematical model.
    if (clickedRow === 1) {
        if (clickedColumn === 1) {
            switchCellState(
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
            )
        } else if (clickedColumn === totalColumns) {
            switchCellState(
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
            )
        } else {
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
        }
    }

    if (clickedRow === totalRows) {
        if (clickedColumn === 1) {
            switchCellState(
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
            )
        } else if (clickedColumn === totalColumns) {
            switchCellState(
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
            )
        } else {
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
        }
    }

    if (clickedRow > 1 && clickedRow < totalRows) {
        if (clickedColumn === 1) {
            switchCellState(
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
            )
        } else if (clickedColumn === totalColumns) {
            switchCellState(
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
            )
        } else {
            switchCellState(
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
                (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
            )
            switchCellState(
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
                (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
            )
        }
    }
}

// (c) C0RB0C4L
