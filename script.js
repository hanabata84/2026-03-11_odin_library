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

function Book(id, title, author, pages, read) {
    this.id = id,
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function createCells(cellName){
    const newCell = document.createElement('td')
    newCell.textContent = cellName
    return newCell
}

const table = document.querySelector('table')
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

    table.appendChild(row)
});

const addBookBtn = document.querySelector('#add-book-btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.btn-close')

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = ()=> {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

addBookBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})