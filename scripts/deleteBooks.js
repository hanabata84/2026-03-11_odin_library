import { bookLibrary } from "./bookLibrary.js"

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

export { deleteBooks }