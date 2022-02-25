//using object literal 

const student = { name: 'sakib al hasan', job: 'crickter' };
//using constructor
const person = new Object();
//console.log(person);

const human = Object.create(student);
console.log(human);

class People {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

}
const peop = new People('sakib', 'crickter');
console.log(peop);

//function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);