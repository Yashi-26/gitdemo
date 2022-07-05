//Write a function and use 'call' to call the function


var obj ={num: 4} ;
var add = function(a){
    return this.num + a;
};
console.log(add.call(obj, 3));

// functionname.call(obj ,functionarguments);

//Write a program using apply
var obj = {num : 2};
var obj2 = {num : 4};
var addToThis = function(a,b,c){
    return this.num + a + b + c;
};
var arr =[1,2,6];
console.log(addToThis.apply(obj2,arr));
console.log(addToThis.apply(obj,arr));



//Write a program using bind
var obj ={ num :8}
var addToThis = function(a,b,c){
    return this.num +a +b +c;
};
var arr =[1,2,3]
console.log(addToThis.bind(obj,arr));

//currying

let multiply = function(a,b){
    console.log(a*b);
}
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree = multiply.bind(this,2);
multiplyByThree(6);