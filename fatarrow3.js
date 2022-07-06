// var getA =function(a){
//     return a ;
// };

//arrow function
let getA = a => a ;console.log(getA(1));
//let square =a => a*a;

// let square =(a) =>{return a*a};
// console.log(square(2));
//use outside var
var a =4;
let square =() =>{return a*a};
console.log(square());
//multiply

let mult =(c,b) => {return c*b};
console.log(mult(5,6));
