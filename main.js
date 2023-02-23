/* eslint-disable no-console */
/* eslint-disable semi */
console.log('Hello')

// book object
// const books = {
//   title: 'book title',
//   author: 'book author',
//   pages: 0,
//   isRead: false,
// }

// constructor
function newBook(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.bookInfo = function() {
    console.log(title, author, pages, isRead)
  }
}

const book1 = new newBook('Grapes of Wrath', 'John Steinbeck', 464, true)
console.log(book1.bookInfo())
