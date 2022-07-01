
var li =document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].style.fontWeight="bold";
li[2].style.backgroundColor="yellow";
for(var i =0;i< li.length;i++){
    li[i].style.fontWeight="bold";
}