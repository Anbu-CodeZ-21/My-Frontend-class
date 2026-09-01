class Studentdatas {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(this.name, this.age, this.mark);
    }
}

const s1 = new Studentdatas("Anbu", 20, 80);
const s2 = new Studentdatas("chandru", 21, 90);

s1.displayDetails();
s2.displayDetails();