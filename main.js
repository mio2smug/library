//  HTML Consants
const modal = document.getElementById('myModal');
const buttonAdd = document.getElementById('modal--add--button');
const span = document.getElementById('mySpan');
const buttonSubmit = document.getElementById('submit--button');

//  JS constants

//  ___proto____
buttonAdd.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

buttonSubmit.onclick = function () {
  modal.style.display = 'none';
};



// window.onclick = function(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// };
