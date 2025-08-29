import { refreshCardIDs } from './utils/refreshCardId.js' ; // use when forgot to add id on card

document.addEventListener('DOMContentLoaded', () => {

    // assigning localStorage
    const savedBooks = localStorage.getItem('myLibrary');
    
    // declaration of variables, functions and nodes
    let myLibrary = [];
    const modal = document.querySelector('.modal');
    const actions = document.querySelector('.actions');
    const bookForm = document.querySelector('.modal__form');
    const statusBtn = document.querySelector('#book_status');
    const bookStatus = document.querySelector('#book_status_hidden');
    const bookContainer = document.querySelector('.body');

    // dummy cover
    function Book(title, author, pages, isRead) {
        this.id = crypto.randomUUID(); // stable identifier
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    function addBookToLibrary(title, author, pages, isRead) {
        let newBook = new Book (title, author, pages, isRead);
        myLibrary.push(newBook);

        //save book immediately to storage
        const stringified = JSON.stringify(myLibrary);
        localStorage.setItem('myLibrary', stringified);
    }

    function display(library) {
        for (const book of library) {
    
            if (document.getElementById(book.id) === null) {
                const bookCard = document.createElement('div');
                bookCard.id = book.id;
                bookCard.classList.add('card');

                bookCard.innerHTML = `

                    <img class="card__bookCover" src="assets/book_placeholder.png" alt="default book cover">
                    <div class="card__container">
                        <div class="card__info">
                            <div class="card__info--left">
                                <h3 class="card__title">Title: ${book.title}</h3>
                                <p class="card__author">Author: ${book.author}</p>
                                <p class="card__pages">Pages: ${book.pages}</p>
                            </div>
                            <div class="card__info--right">
                                <div class="card__delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                </div>
                            </div>
                        </div>
                        <button class="card__status">
                            Status: ${book.isRead}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw-icon lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                        </button>
                    </div>

                `
                // NOTE: book.cover is not explicitly declared in the constructor, I leveraged the prototype chain to have a fallback book cover
                bookContainer.appendChild(bookCard);
            }      
        }
    }
    

    if (savedBooks !== null) {
        myLibrary = JSON.parse(savedBooks);
        display(myLibrary);
    }


    // event listeners
    actions.addEventListener('click', (e) => {
        const isAddBtnClicked = e.target.closest(".actions__btn.add");
        const isModalClose = getComputedStyle(modal).display === "none";

        if (isAddBtnClicked && isModalClose) {
            e.stopPropagation();
            modal.style.display = "grid";
        }
    });

   document.addEventListener('click', (e) => {
        const isModalOpen = getComputedStyle(modal).display === "grid";
        const clickedCloseBtn = e.target.closest('.modal__close');
        const clickedInsideModal = modal.contains(e.target);

        if (isModalOpen && (clickedCloseBtn || !clickedInsideModal)) {
            modal.style.display = "none";
        }
    });

    // form listeners
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const bookData = new FormData(bookForm);
        const bookArgs = [];

        for (const bookInfo of bookData.values()) {
            bookArgs.push(bookInfo);
        }


        addBookToLibrary(...bookArgs);
        display(myLibrary);
        bookForm.reset();

    });

    statusBtn.addEventListener('click', (e) => {
        if (e.target.value === "Unread") {
            e.target.value = "Reading";
            bookStatus.value = "Reading"
        } else if (e.target.value === "Reading") {
            e.target.value = "Read";
            bookStatus.value = "Read"
        } else {
            e.target.value = "Unread";
            bookStatus.value = "Unread";
        }
    });

    // body listener
    bookContainer.addEventListener('click', (e) => {
        
        if (e.target.closest('.card__delete')) {
            const bookId = e.target.closest('.card').id;
            e.target.closest('.card').remove();

            // Update array and localStorage.
            myLibrary = myLibrary.filter(book => book.id !== bookId);
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

            display(myLibrary);
        }
        
         if (e.target.closest('.card__status')) {

            const bookId = e.target.closest('.card').id;
            const foundBookIndex = myLibrary.findIndex(book => book.id === bookId);
            const stringified = JSON.stringify(myLibrary);

            if(myLibrary[foundBookIndex].isRead === 'Unread') {
                myLibrary[foundBookIndex].isRead = 'Reading';
            } else if (myLibrary[foundBookIndex].isRead === 'Reading') {
                myLibrary[foundBookIndex].isRead = 'Read';
            } else {
                myLibrary[foundBookIndex].isRead = 'Unread';
            }

            
            e.target.innerHTML = `Status: ${myLibrary[foundBookIndex].isRead} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw-icon lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`;
            localStorage.setItem('myLibrary', stringified);
        }

    });


});
