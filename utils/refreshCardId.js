// Created because past cards dont have id
   export function refreshCardIDs() {
    const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            // Only assign an ID if one doesn't exist
            if (card.id === "") {
                card.id = myLibrary[index].id;
            }
        });
    }