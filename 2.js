class student{

    static count=0;  //static variable to call

   constructor(name ,age ,phone_no,marks){

       this.name= name;

       this.age= age;

       this.phone_no= phone_no;

       this.marks= marks;

       student.countStudent();

   }

   static countStudent(){
       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${this.age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${this.age} is not eligible`);

       }

   }
}

const Mona=new student('Mona',18,1234,34);

const Ram=new student('Ram',15,2345,35);

const Diya=new student('Diya',16,4567,60);

const Shyam =new student('Shyam',17,7891,70);

const Rohan=new student('Rohan',19,3456,80);

console.log(student.countStudent());

Mona.eligible();

Ram.eligible();

Diya.eligible();

Shyam.eligible();

Rohan.eligible();
