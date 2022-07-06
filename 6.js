function attachEventListeners(){
let count=0;
document.getElementById("clickMe").addEventListener("click", function xyz() {   // callback function
console.log("button clicked", ++count);
});
}
attachEventListeners();