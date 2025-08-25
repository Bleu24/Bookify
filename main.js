document.addEventListener('DOMContentLoaded', () => {

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function() {

    let info = `${this.title} by ${this.author}, ${this.pages} pages`;

    if (this.isRead) { // has read
        return `${info}, has read`;
    } else {
        return `${info}, not read yet`;
    }
    
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());

});