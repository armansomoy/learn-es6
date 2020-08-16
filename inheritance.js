class Parent {
    constructor() {
        this.fatherName = "Motaleb";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arman");
const baby2 = new Child("Arif");
console.log(baby.getFullName());
console.log(baby2);