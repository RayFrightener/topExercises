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