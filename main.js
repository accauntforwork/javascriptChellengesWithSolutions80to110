// closure
function a() {
  let c = 15;
  function b() {
    console.log(c); // closure
  }
}
a();

// JavaScriptda "callback" funksiyalar, boshqa funksiyaga argument sifatida
// uzatilgan va bajarilishi uchun kutib turuvchi funksiyalardir. Bu funksiyalar,
// boshqa bir funksiyani bajarilganida yoki belgilangan shartlar paydo bo'lganda ishlatiladi.
function multiplyByTwo(number) {
  return number * 2;
}
// Asosiy funksiya
function calculate(number, callback) {
  return callback(number);
}
// Callback funksiyasini ishlatish
const result = calculate(5, multiplyByTwo);
console.log(result); // Natija: 10
// //----------------------------------------------------------
function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}
sum(5, 6, console.log);
// //----------------------------------------------------------

// "Higher-order functions" (yuqori tartibdagi funksiyalar) JavaScriptda
// funksiyalar bilan ishlashning yuqori darajadagi konseptlaridan biridir.
// Bu funksiyalar boshqa funksiyalarni qabul qila olish, ularni qaytarish
// yoki ularga o'zgartirish kiritish orqali yuqori tartibda amallar bajarish imkonini beradi.

// Yuqori tartibdagi funksiyalar quyidagi hususiyatlar bilan ajratiladi:
//1. Funksiyani Argument Sifatida Qabul Qila Olish: Yuqori tartibdagi funksiya
// boshqa funksiyani argument sifatida qabul qila olishi mumkin.
//2. Funksiyani Qaytarish: Yuqori tartibdagi funksiya yangi funksiya qaytarishi
// yoki mavjud funksiyani boshqa bir funksiya orqali boshqa shaklda qaytarish imkonini berishi mumkin.
//3. Funksiyani Boshqa Bir Funksiya Orqali O'zgartirish: Yuqori tartibdagi
// funksiya boshqa bir funksiya orqali boshqa shaklda o'zgartirilishi yoki uni ishlatishi mumkin.
// Yuqori tartibdagi funksiya
function higherOrderFunction(operation, number) {
  return operation(number);
}
// Boshqa funksiyalar
function double(x) {
  return x * 2;
}
function square(x) {
  return x * x;
}
// Yuqori tartibdagi funksiyani ishlatish
const result1 = higherOrderFunction(double, 5);
const result2 = higherOrderFunction(square, 4);
console.log(result1); // Natija: 10 (5 * 2)
console.log(result2); // Natija: 16 (4 * 4)

let arr = [1, 2, 3, 4];
// function cb(element,index) {
//     let sumElement=0,summIndex=0;
//     sumElement += element;
//     summIndex+=index;
//     return sumElement;
// }

// console.log(arr.forEach(cb));
arr.forEach(function (element) {
  console.log(element);
  //// return element;
});

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
const numbers = [1, 2, 3, 4, 5];

let natijaa = myForEach(numbers, function (value, index, arr) {
  console.log(`Element: ${value}, Index: ${index}, Array: [${arr}]`);
});

let testArr = [1, 2, 3, 4, 5, 6, 7];
let newTestArr = testArr.map(function cb(el) {
  return el % 2 === 0 ? "juft" : "toq";
});
console.log(newTestArr);

let son = 10;
const sozgaOgir = (son) => {
  let birlik = [
    "nol",
    "bir",
    "ikki",
    "uch",
    "to'rt",
    "besh",
    "olti",
    "yetti",
    "sakkiz",
    "to'qqiz",
  ];
  let onlik = [
    "o'n",
    "yigirma",
    "o'ttiz",
    "qirq",
    "ellik",
    "oltmish",
    "yetmish",
    "sakson",
    "to'qson",
  ];

  if (son < 10) {
    console.log(birlik[son]);
  } else {
    let onlikUchun = Math.floor(son / 10);
    let birlikUchun = son - onlikUchun * 10;
    console.log(`${onlik[onlikUchun - 1]} ${birlik[birlikUchun]}`);
  }
};
sozgaOgir(son);
