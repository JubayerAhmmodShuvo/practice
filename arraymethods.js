const product = [{
        name: 'laptop',
        price: 3200,
        brand: 'lenovo',
        color: 'black',
    },
    {
        name: 'phone',
        price: 3200,
        brand: 'lenovo',
        color: 'cyan',
    },
    {
        name: 'watch',
        price: 1200,
        brand: 'lenovo',
        color: 'yellow',
    },
    {
        name: 'sunglass',
        price: 2200,
        brand: 'lenovo',
        color: 'gray',
    }
];
const brands = product.map(product => product.brand);
console.log(brands);
const price = product.map(product => product.price);
console.log(price);

product.forEach(product => console.log(product));
product.forEach(product => {
    console.log(product.name);
    console.log(product.price);
});
const cheap = product.filter(product => product.price <= 3000);
console.log(cheap);

const special = product.find(p => p.name.includes('n'));
console.log(cheap);