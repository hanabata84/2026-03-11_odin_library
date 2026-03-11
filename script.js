const bookLibrary = [
    {
        id: 1,
        title: "The Hobbit",
        author: "JRR Tolkien",
        pages: 295,
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

const table = document.querySelector('table')
bookLibrary.forEach(book => {
    const row = document.createElement('tr')

    // title element
    const titleCell = document.createElement('td')
    titleCell.textContent = book.title
    row.appendChild(titleCell)

    // author element
    const authorCell = document.createElement('td')
    authorCell.textContent = book.author
    row.appendChild(authorCell)

    // pages element
    const pagesCell = document.createElement('td')
    pagesCell.textContent = book.pages
    row.appendChild(pagesCell)

    // read element
    const readCell = document.createElement('td')
    readCell.textContent = book.read
    row.appendChild(readCell)

    table.appendChild(row)
});

const addBookBtn = document.querySelector('#add-book-btn')
const addBookModal = document.querySelector('#add-book-modal')
addBookBtn.addEventListener('click', () => addBookModal.showModal())