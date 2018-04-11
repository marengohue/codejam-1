# CodeJam-1 

**Задание #1. Функция "sumOfOther"**.

```
Реализуйте функцию sumOfOther, которая получает на вход массив, например, [2, 3, 4, 1], а возращает, [8, 7, 6, 9]. Входной массив - одномерный, целочисленный, произвольной длины. 
В результирующем массиве каждый элемент по индексу i - это сумма остальных элементов оригинального массива. 
```

**Задание #2. Функция "make"**.

Реализовать функцию make, которую можно вызвать следующим образом:

```javascript
make(15)(34, 21, 666)(41)(sum); // return 777

function sum(a, b) {
    return a + b;
}

```
Пока переданный аргумент не функция, запоминаем значения аргументов (способы перечислены ниже), затем применяем функцию к аргументам по принципу `Array.prototype.reduce`, возвращаем полученное значение

Step | a    | b    | result
---- | ---- | ---- | ----
  0  |  15  |  34  |  49
  1  |  49  |  21  |  70
  2  |  70  |  666 |  736
  3  |  736 |  41  |  777

нельзя использовать глобальные переменные, сохранять промежуточные значения в `make.smth` или в `make.prototype`

Cпособы:
* через замыкание
* частичное применение (google: "partial application javascript")
* рекурсия (для гиков :smirk_cat:)

**Бонусное задание. Покрыть функции тестами**.