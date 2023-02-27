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

// var tempVar = 0

buttonSubmit.onclick = function () {
  addBookToLibrary();
  clearModal();
  display();
  // console.log(myLibrary[tempVar])
  // tempVar++
};

function display(){
  let myBookcase = document.getElementById('my--content--container');
  let cover = document.createElement('div');
  for(let i = 0; i < myLibrary.length; i++){
    cover.innerHTML = 
    ` <h1> ${myLibrary[i].title} </h1>
      <h1> ${myLibrary[i].author} </h1> 
      <h1> ${myLibrary[i].pages} </h1>
      <h1> ${myLibrary[i].bool} </h1>
      <button onclick="remove(${i})"> Remove </button>`;
    myBookcase.appendChild(cover);
    console.log(i)
  }
}

function remove(i) {
  myLibrary.splice(i, 1);
  display();
}

function addBookToLibrary() {
  let title = document.getElementById('book--title').value
  let author = document.getElementById('author--name').value
  let pages = document.getElementById('pages').value
  let checkbox = document.getElementById('isRead').checked
  let newbook = new book(title, author, pages, checkbox)
  myLibrary.push(newbook);
}

function clearModal() {
  document.getElementById('book--title').value = ''
  document.getElementById('author--name').value = ''
  document.getElementById('pages').value = ''
  document.getElementById('isRead').checked = false
  modal.style.display = 'none';
}
