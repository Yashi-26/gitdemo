class Student{
    constructor(name , age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return(minMarks) =>{
            console.log('inside eligibleForCurrentCompany', this)
            if(this.marks > minMarks && this.age > minPlacementAge){
                console.log(this.name + " is ready for placements")
            }
            else{
                console.log(this.name + " is not ready for placements")
            }
        }
    }
}
const Riya = new Student('Riya' ,25, 87);
const Siya = new Student('Siya' ,15, 77);

Riya.setPlacementAge(18)(40);
Siya.setPlacementAge(18)(40);