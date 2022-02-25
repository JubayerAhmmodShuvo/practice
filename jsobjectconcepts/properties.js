const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};
//getting all properties names
const keys = Object.keys(bottle);
console.log(keys);
//getting all values
const values = Object.values(bottle);
console.log(values);

const pairs = Object.entries(bottle);
console.log(pairs);
Object.seal(bottle);

bottle.price = 100;
delete bottle.isClean;
console.log(bottle);