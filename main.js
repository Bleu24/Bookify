document.addEventListener('DOMContentLoaded', () => {

    // assigning localStorage
    const savedBooks = localStorage.getItem('myLibrary');

    // declaration of variables, functions and nodes
    let myLibrary = [];
    const removeBtn = document.querySelector('.actions__btn.remove');
    const modal = document.querySelector('.modal');
    const actions = document.querySelector('.actions');
    const bookForm = document.querySelector('.modal__form');
    const statusBtn = document.querySelector('#book_status');
    const bookStatus = document.querySelector('#book_status_hidden');
    const bookContainer = document.querySelector('.body');
    


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
            const bookCard = document.createElement('div');
            bookCard.classList.add('card');
            bookCard.innerHTML = `

                <h2>${book.title}</h2>
                <h3>${book.author}</h3>
                <p>${book.pages}</p>
                <p>${book.isRead}</p>

            `

            bookContainer.appendChild(bookCard);

        }
    }

    if (savedBooks !== null) {
        myLibrary = JSON.parse(savedBooks);
        // console.log(myLibrary);
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





});