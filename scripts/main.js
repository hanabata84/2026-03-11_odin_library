import { showBooks } from "./showBooks.js";
import { openModal, closeModal } from "./addBook.js";

showBooks()

const openModalBtn = document.querySelector('#open-modal-btn')
const closeModalBtn = document.querySelector('#close-modal-btn')

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
