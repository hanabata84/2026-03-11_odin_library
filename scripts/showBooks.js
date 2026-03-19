import { bookLibrary } from "./bookLibrary.js"
import { deleteBooks } from "./deleteBooks.js"

const tbody = document.querySelector('tbody')

function createDelBtn() {
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'delete-book-btn')
    const deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'material-icons')
    deleteIcon.textContent = 'clear'
    delBtn.appendChild(deleteIcon)

    return delBtn;
}

function createCells(cellName) {
    const newCell = document.createElement('td')

    if (cellName === 'delete') {
        newCell.appendChild(createDelBtn())
    } else {
        newCell.textContent = cellName
    }
    return newCell
}

function showBooks() {
    bookLibrary.forEach(book => {
        const row = document.createElement('tr')
        row.setAttribute('data-id', book.id)

        // title cell
        row.appendChild(createCells(book.title))

        // author cell
        row.appendChild(createCells(book.author))

        // pages cell
        row.appendChild(createCells(book.pages))

        // read cell
        row.appendChild(createCells(book.read))

        //delete cell
        row.appendChild(createCells('delete'))
        tbody.appendChild(row)
    });
    deleteBooks()
}


export { showBooks, tbody }