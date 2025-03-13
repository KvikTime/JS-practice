let count = 0;
let year = 2024;

let userOne = prompt("Введите имя пользователя №1");
let userOneYear = prompt("Введите год рождения №1");
let userOneAge = year - userOneYear

console.log(++count, userOne, userOneAge);

let userTwo = prompt("Введите имя пользователя №2");
let userTwoYear = prompt("Введите год рождения №2");
let userTwoAge = year - userOneYear

console.log(++count, userTwo, userTwoAge);

let userThree = prompt("Введите имя пользователя №3");
let userThreeYear = prompt("Введите год рождения №3");
let userThreeAge = year - userOneYear

console.log(++count, userThree, userThreeAge);

console.log("Средний возраст пользователей: " + ((userOneAge + userTwoAge + userThreeAge) / 3));
