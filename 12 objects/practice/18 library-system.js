const library = {
  books: {},

  addBook: function (id, title, author) {
    this.books[id] = { title, author, isBorrowed: false };
  },

  borrowBook: function (id) {
    if (!(id in this.books)) {
      return "Book not found";
    }
    const book = this.books[id];
    if (book.isBorrowed) {
      return $(.title) is already borrowed;
    }
    book.isBorrowed = true;
    return $(.title) issued;
  },

  returnBook: function (id) {
    if (!(id in this.books)) {
      return "Book not found";
    }
    const book = this.books[id];
    if (!book.isBorrowed) {
      return $(.title) was not borrowed;
    }
    book.isBorrowed = false;
    return $(.title) returned;
  },

  getAvailableBooks: function () {
    const availableTitles = [];
    for (const id in this.books) {
      if (!this.books[id].isBorrowed) {
        availableTitles.push(this.books[id].title);
      }
    }
    return availableTitles;
  },

  getReport: function () {
    let total = 0;
    let borrowed = 0;
    let available = 0;

    for (const id in this.books) {
      total++;
      if (this.books[id].isBorrowed) {
        borrowed++;
      } else {
        available++;
      }
    }

    return { total, borrowed, available };
  }
};

library.addBook("b1", "Days Gone By", "A. Qodiriy");
library.addBook("b2", "Starry Nights", "P. Qodirov");
library.addBook("b3", "Mirage", "A. Qahhor");

console.log(library.borrowBook("b1"));
console.log(library.borrowBook("b1"));
console.log(library.borrowBook("b9"));
console.log(library.getAvailableBooks());
console.log(library.getReport());
console.log(library.returnBook("b1"));
console.log(library.returnBook("b2"));
console.log(library.getReport());
