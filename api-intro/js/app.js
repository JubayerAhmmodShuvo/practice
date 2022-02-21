//Javascript Object Notation
//JSON
const user = { id: 11, name: 'gorib amir', job: 'actor' };

//console.log(user);
const stringified = JSON.stringify(user);
//console.log(stringified);

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    product: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia bhatt',
        address: 'inida'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
//console.log(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);