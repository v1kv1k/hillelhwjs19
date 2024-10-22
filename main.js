console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

let i = 0;
console.log('Початкове значення i:', i);

console.log('Префіксний інкремент:', ++i); 
console.log('Постфіксний інкремент:', i++);
console.log('Значення i після постфіксного інкременту:', i); 

console.log('Префіксний декремент:', --i); 

console.log('Постфіксний декремент:', i--); 
console.log('Значення i після постфіксного декременту:', i); 


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 20;

myTest += 5;
console.log('myTest після += 5:', myTest);

myTest -= 3;
console.log('myTest після -= 3:', myTest);

myTest *= 2;
console.log('myTest після *= 2:', myTest);

myTest /= 4;
console.log('myTest після /= 4:', myTest);

myTest %= 3;
console.log('myTest після %= 3:', myTest);

/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

const myPi = Math.PI;
console.log('myPi:', myPi);

const myRound = Math.round(89.279);
console.log('myRound:', myRound);

const myRandom = Math.random() * 10; // Випадкове число між 0 і 10
console.log('myRandom:', myRandom);

const myPow = Math.pow(3, 5);
console.log('myPow:', myPow);

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 (10 не включено) → myRandom
// 3 у 5 степені → myPow


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
//

let strObj = {
    str: "Мама мыла раму, рама мыла маму",
    length: "Мама мыла раму, рама мыла маму".length
};

/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

let isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos);

let isRama = isRamaPos !== -1;
console.log('isRama:', isRama);

// isRamaPos
// isRama


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

let strReplace = strObj.str.replace('мыла', 'моет').replace('рама мыла', 'Рама держит'); 
console.log('strReplace:', strReplace);

// strReplace


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
console.log('upperStr:', upperStr);

var lowerStr = someStr.toLowerCase();
console.log('lowerStr:', lowerStr);

// var someStr = 'some STRING'
// var upperStr
// var lowerStr




