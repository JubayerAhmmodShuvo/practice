const student = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,


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
student.treatDei(2000);

const heroTreatDey = student.treatDei.bind(heroBalam);
//console.log(heroTreatDey(500));