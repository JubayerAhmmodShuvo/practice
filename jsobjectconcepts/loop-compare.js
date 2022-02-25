const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};
/*
for(let i = 0; i <10,i++){} 
for(const num of numbers){}//array of numbers
for(const prop in student){}//object
 */

for (const prop in bottle) {
    console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
for (const prop of keys) {
    console.log(prop, bottle[prop]);
}

//advance
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}