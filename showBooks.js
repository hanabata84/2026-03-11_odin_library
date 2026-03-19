import { bookLibrary } from "./bookLibrary.js"

const tbody = document.querySelector('tbody')

function createCells(cellName) {
    const newCell = document.createElement('td')

    if (cellName === 'delete') {
        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'delete-book-btn')
        const deleteIcon = document.createElement('i')
        deleteIcon.setAttribute('class', 'material-icons')
        deleteIcon.textContent = 'clear'
        delBtn.appendChild(deleteIcon)
        newCell.appendChild(delBtn)
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

function deleteBooks() {
    const delBookBtns = document.querySelectorAll('.delete-book-btn')
    delBookBtns.forEach(delBookBtn => {
        delBookBtn.addEventListener('click', () => {
            const closestRow = delBookBtn.closest('tr')
            const removeBookId = closestRow.dataset.id
            bookLibrary.forEach((book, index) => {
                if (book.id === removeBookId) {
                    bookLibrary.splice(index, 1)
                    closestRow.remove()
                }
            })
        })
    })
}
export {showBooks, tbody}