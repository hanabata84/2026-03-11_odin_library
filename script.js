const bookLibrary = [
    {
        id: 1,
        title: "The Hobbit",
        author: "JRR Tolkien",
        pages: 295,
        read: true
    },
    {
        id: 2,
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
    newCell.textContent = cellName
    return newCell
}

function showBooks() {
    bookLibrary.forEach(book => {
        const row = document.createElement('tr')

        // title element
        row.appendChild(createCells(book.title))

        // author element
        row.appendChild(createCells(book.author))

        // pages element
        row.appendChild(createCells(book.pages))

        // read element
        row.appendChild(createCells(book.read))

        tbody.appendChild(row)
    });
}

showBooks()


const openModalBtn = document.querySelector('#open-modal-btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.btn-close')

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
