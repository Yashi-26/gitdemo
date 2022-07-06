// 'this' inside global scope
this.table ='window table';
this.garage ={
    table: 'garage table',
    cleanTable()
{
    console.log(`cleaning ${this.table}`) 
}
};
this.garage.table;

console.log(window.table);

//'this' inside an object(private)
let johnsRoom ={
    table: 'johns table'
};
console.log(johnsRoom.table);

//'this' inside a method
let johnRoom ={
    table: 'john table',
    cleanTable(){
       console.log(`cleaning ${this.table}`) 
    }
};
johnRoom.cleanTable();
this.garage.cleanTable();
console.log(johnRoom.table);
//this inside a function
this.table ='window table';
const cleanTable = function(){
    console.log(`cleaning ${this.table}`)
}
cleanTable();
//call function
this.table ='window table';
const cleanClothes = function(soap){
    console.log(`cleaning ${this.table}`)
}
cleanTable.call(this, 'some soap');
cleanTable.call(this.garage,'some soap')
cleanTable.call(johnsRoom,'some soap')
//this inside an inner function
const cleanWindow =function(soap){

    const innerFunction = function(){
        console.log(`cleaning ${this.table} using ${soap}`)
    }
    innerFunction.call(this,soap);//inside a function using this is not very useful unless u apply call,apply or bind,arrow functionor this=that
    innerFunction.bind(this)(soap);
}
// use arrow function
const cleanWindo =function(soap){

    const innerFunction = (soap) => {
        console.log(`cleaning ${this.table} using ${soap}`)
    }
    innerFunction(soap);
    
}
//this inside constructor
let createRoom = function(name){
    this.table =`${name}s table`
}
createRoom.prototype.cleanTable =function(soap){
console.log(`cleaning ${this.table} using ${soap}`)
};
const riyasRoom = new createRoom('riya')
const jaysRoom = new createRoom('jay')

// this inside class
class createRooms{
 constructor(name){
    this.table =`${name}s table`
 }
 cleanCloth(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
 }
}
const riyaRoom = new createRoom('riya')
const jayRoom = new createRoom('jay')

riyaRoom.cleanTable('some soap');
jayRoom.cleanTable('some soap');