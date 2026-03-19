import { bookLibrary } from "./bookLibrary.js"
import { showBooks, tbody } from "./showBooks.js"

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})

class Book {
    constructor(id, title, author, pages, read) {
        this.id = id,
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

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

overlay.addEventListener('click', closeModal)

export {openModal, closeModal}