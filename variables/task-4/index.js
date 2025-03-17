let count = 0;
let year = 2024;

let userOne = prompt("Введите имя пользователя №1", "Антон");
let userOneYear = prompt("Введите год рождения №1", 2003);
let userOneAge = year - userOneYear

console.log(++count, userOne, userOneAge);

let userTwo = prompt("Введите имя пользователя №2", "Василиса");
let userTwoYear = prompt("Введите год рождения №2", 2005);
let userTwoAge = year - userTwoYear

console.log(++count, userTwo, userTwoAge);

let userThree = prompt("Введите имя пользователя №3", "Никита");
let userThreeYear = prompt("Введите год рождения №3", 1998);
let userThreeAge = year - userThreeYear

console.log(++count, userThree, userThreeAge);

console.log("Средний возраст пользователей: " + ((userOneAge + userTwoAge + userThreeAge) / 3));
