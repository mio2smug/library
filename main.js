//  Consants
const modal = document.getElementById('myModal');
const button = document.getElementById('modal--add--button');
const span = document.getElementById('mySpan');

button.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

// window.onclick = function(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// };
