// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = prompt("Название товара №1", "Молоко ")// Название товара 1
let price1 = prompt("Цена товара №1", 75)// Стоимость товара  1
let count1 = prompt("Количество товаров №1", 1)// Количесто товара 1

let finalPrice1 = price1 * count1

console.log(product1, finalPrice1) // Вывод в консоль

let product2 = prompt("Название товара №2", "Кофе")//  Название товара 2
let price2 = prompt("Цена товара №2", 420)// Стоимость товара  2
let count2 = prompt("Количество товаров №2", 1)// Количесто товара 2

let finalPrice2 = price2 * count2

console.log(product2, finalPrice2) // Вывод в консоль

let product3 = prompt("Название товара №3", "Яблоки")// Название товара 3
let price3 = prompt("Цена товара №3", 160)// Стоимость товара  3
let count3 = prompt("Количество товаров №3", 1)// Количесто товара 3

let finalPrice3 = price3 * count3

console.log(product3, finalPrice3) // Вывод в консоль


console.log( "Сумма всей покупки: " + (finalPrice1 + finalPrice2 + finalPrice3)) // Вывод в консоль