//접근자 프로퍼티 (Accessor Property) 
class Student{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = `${this.lastName} ${this.firstName}`;
    }

    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value){
        console.log('set',value);
    }
    
}

const student = new Student('한빛', '차')
student.firstName='안나';
console.log(student);
console.log(student.fullName);
student.fullName = '김철수'