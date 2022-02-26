const shuvo = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,

    treatDeArrow: () => {
        console.log(this);
    },
    treatDeInside: function() {
        const myArrow = () => console.log(this);
        myArrow();
    },


    treatDei: function(expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
};
const heroBalam = {
    id: 102,
    name: 'Balam',
    money: 6000,
};

function add() {
    console.log(this);
}