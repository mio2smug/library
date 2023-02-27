//  HTML Consants
const modal = document.getElementById('myModal');
const buttonAdd = document.getElementById('modal--add--button');
const span = document.getElementById('mySpan');
const buttonSubmit = document.getElementById('submit--button');

//  JS constants
const myLibrary = [];

// object constructor
function book (title, author, pages, bool) {
  this.title = title
  this.author = author
  this.pages = pages
  this.bool = bool
}

//  ___proto____
buttonAdd.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

buttonSubmit.onclick = function () {
  addBookToLibrary();
  modal.style.display = 'none';
};

function addBookToLibrary() {
  let title = document.getElementById('book--title').value
  let author = document.getElementById('author--name').value
  let pages = document.getElementById('pages').value
  let checkbox = document.getElementById('isRead').checked
  let newbook = new book(title, author, pages, checkbox)
  myLibrary.push(newbook)
}
// window.onclick = function(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// };
