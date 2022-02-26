const student = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,


    treatDei: function(expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
};

const heroBalam = {
    id: 102,
    name: 'Balam',
    money: 6000,
};
const heroGolam = {
    id: 103,
    name: 'Golam',
    money: 8000,
};
//call
// student.treatDei.call(heroBalam, 500, 100, 50);
// student.treatDei.call(heroBalam, 300, 50, 30);

//apply changes
student.treatDei.apply(heroBalam, [500, 100, 50]);