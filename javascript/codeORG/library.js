const myLibrary = ["The Hobbit", "The Lord of the Rings", "The Silmarillion"];

function BookCreation(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const readStatus = this.read ? "read" : "not read yet"; //Ternary operator for read status
        return '${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}';     
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

document.getElementById('add-card').addEventListener('click', function(){
    document.getElementById('book-form-container').classList.toggle('hidden');
});

document.getElementById('book-form').addEventListener('submit', function(event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('pages').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const newBookCard = document.createElement('div');
    newBookCard.innerHTML = `<h3>${title}</h3><p>by ${author}</p><p>${pages} pages</p><p>${read ? 'Read' : 'Not read yet'} </p>`;
    document.getElementById('cards-container').appendChild(newBookCard);

    document.getElementById('book-form-container').classList.add('hidden');

    document.getElementById('book-form').reset();

});

function populateCardsWithBooks(book) {
    const container = document.querySelector('cards-container');
    container.innerHTML = '';
    
    myLibrary.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = item;

        const content = document.createElement('p');
        content.textContent = 'Some content for ' + item + '.';

        card.appendChild(title);
        card.appendChild(content);
        container.appendChild(card);
    });
};

populateCardsWithBooks(myLibrary);