class student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Samiron Nessa School"
    }
}

const student1 = new student(12, "Shuvo");
const student2 = new student(10, "Mahiya");
const student3 = new student(15, "Nahid");

console.log(student1, student2, student3);