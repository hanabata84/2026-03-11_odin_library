const bookLibrary = [
    {
        id: "1",
        title: "The Hobbit",
        author: "JRR Tolkien",
        pages: 295,
        read: true
    },
    {
        id: "2",
        title: "Game of Thrones",
        author: "GRR Martin",
        pages: 1000,
        read: true
    }
];

const tbody = document.querySelector('tbody')

function Book(id, title, author, pages, read) {
    this.id = id,
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function createCells(cellName) {
    const newCell = document.createElement('td')

    if (cellName === 'delete') {
        const delBtn = document.createElement('button')
        delBtn.setAttribute('class','delete-book-btn')
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
}

showBooks()


const openModalBtn = document.querySelector('#open-modal-btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('#close-modal-btn')

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})

const addBookBtn = document.querySelector('#add-book-btn')
const inputs = document.querySelectorAll('input')

addBookBtn.addEventListener('click', (e) => {
    let newBookArr = []
    inputs.forEach(input => {
        newBookArr.push(input.value)
        input.value = ''
    });
    const uuid = crypto.randomUUID()
    const newBook = new Book(uuid, ...newBookArr)
    bookLibrary.push(newBook)
    console.log(bookLibrary)
    tbody.replaceChildren()
    showBooks()
    closeModal()
    e.preventDefault()
})

const delBookBtns = document.querySelectorAll('.delete-book-btn')
delBookBtns.forEach(delBookBtn => {
    delBookBtn.addEventListener('click', ()=>{
        const removeBookId = delBookBtn.closest('tr').dataset.id
        const indexRemoveBookId = bookLibrary.indexOf(removeBookId)
        console.log(removeBookId);
        
    })
})