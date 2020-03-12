var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};

var a = prompt("Введите обязательную статью расходов в этом месяце");
var b = prompt("Во сколько обойдется?");
var c = prompt("Введите обязательную статью расходов в этом месяце");
var d = prompt("Во сколько обойдется?")
appData.expences.a = b;
appData.expences.c = d;
alert(appData.budget / 30);