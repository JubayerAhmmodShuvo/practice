const student = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
    major: 'mathematich',
    subjects: ['english', 'economics', 'math101', 'calculas'],
    bestFriend: {
        name: 'kundu',
        major: ' mathematics'
    },
    takeExam: function() {
        console.log(this.name, 'taking Exam');
    },
    treatDei: function(expense) {
        this.money = this.money - expense;
        return this.money;
    }
}
student.takeExam();
const remaining = student.treatDei(500);
console.log(remaining);