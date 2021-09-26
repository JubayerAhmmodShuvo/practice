var firstName = "Shuvo";
age= 25;
var isMale = true;
var isFemale = false;
var surname= null;

var person = {
    name: firstName,
    age: age,
    dob: '01/01/4440'
};

person.age;
person.name;
person.dob;
console.log(person);

var friend =["ani",'amiim','dfd'];
console.log(friend);
console.log(friend[2]);

var friend =[1,2,3];
console.log(friend);
console.log(friend[1]*friend[2]);

var friend =["ani",'amiim','dfd'];
friend.push('jackson')
console.log(friend);


var friend =["ani",'amiim','dfd'];
var f = friend.pop();
console.log(f);

var friend ={
name:'will',
age:25,
address:'123 Main St',
udaa:{
    address:'123 Main St',
    city:'San Francisco',
    state:'CA'
}
}

console.log(friend.udaa.state);