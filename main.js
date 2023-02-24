/* eslint-disable no-console */
/* eslint-disable semi */

// book object
// const books = {
//   title: 'book title',
//   author: 'book author',
//   pages: 0,
//   isRead: false,
// }

//  HTML constants
const bookTitle = document.getElementById('book--title');
const bookAuthor = document.getElementById('book--author')
const bookPages = document.getElementById('book--pages')
const hasRead = document.getElementById('has--read')

//  User library held
const myLibrary = []

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
const book2 = new newBook('Capital Vol.1', 'Karl Marx', 30, false)
bookTitle.textContent = `${book1.title} ${book2.title}`
console.log(book1.bookInfo())
myLibrary.push(book1, book2)
console.log(myLibrary)
