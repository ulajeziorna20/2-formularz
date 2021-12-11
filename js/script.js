let button = document.getElementById('btn-add');
console.log(button);


button.addEventListener('click', () => {



let titleInp = document.getElementById('title').value;
let authorInp = document.getElementById('author').value;
let priorityInp = document.getElementById('priority').value;
let categoryInp = document.getElementById('category');
// console.log(titleInp);
// console.log(authorInp);
// console.log(priorityInp);
// console.log(categoryInp);

let newBookObj = {
  newtitle: titleInp,
  newAuthor: authorInp,
  newPriority: priorityInp
  // newCategory: categoryInp
}
console.log(newBookObj);







})