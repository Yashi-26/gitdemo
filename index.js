//traversing the DOM
var itemList = document.querySelector('#items');
//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='lightGrey';
// console.log(itemList.parentNode.parentNode);
// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='lightGrey';
console.log(itemList.parentElement.parentElement.parentElement);
//childNode
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='pink';
//firstchild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor='green';
//lastchild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor='yellow';
//next sibblings
console.log(itemList.nextSibling);
//nextElementsibbling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='blue';

//create elements//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className ='hello';
//add id
newDiv.id ='hello';
//add attribute
newDiv.setAttribute('title','Hello Div');
//create text node

var newDivText = document.createTextNode('HEllo');
//appendChild
newDiv.appendChild(newDivText);
//hello before itemlister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1)


