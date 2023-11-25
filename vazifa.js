// 81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
// bo’g’in borligini aytsin.
const countSyllables = (str) => {
  let count = 0;
  const character = str.split("");
  character.forEach((element) => {
    if (
      element == "a" ||
      element == "o" ||
      element == "i" ||
      element == "u" ||
      element == "e"
    ) {
      count += 1;
    }
  });
  return count;
};

// Test
console.log(countSyllables("salom berdik"));
// //----------------------------------------------------------------------------------------------------------------
// 82.Funskiyaga belgi kiritilsa ushbu belgining ASCII kodini
// qaytarsin.
const getAsciiCode = (character) =>
  character.length === 1
    ? character.charCodeAt(0)
    : "kiritilgan qiymat me'zonlarga mos emas";

// Test
console.log(getAsciiCode("d"));

// 83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
// bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining
const checkEquality = (str1, str2) => str1.toLowerCase() == str2.toLowerCase();

// Test
console.log(checkEquality("SaLom", "salOM"));
// //----------------------------------------------------------------------------------------------------------------
// 84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta
// belgidan iborat ekanligini qaytarsin. Bunda string.length
// propertisizdan foydalanish mumkin emas !!!
const countCharacters = (word) => {
  let count = 0;
  for (let char of word) {
    count++;
  }
  return count;
};

// Test
console.log(countCharacters("salom"));
// //----------------------------------------------------------------------------------------------------------------
// 85. Karona virusdan tuzalganlar soni, yangi kasallanganlar
// soni va hozirda kasallar soni natijalari qo’limizda mavjud.
// Tuzalganlar soni va yangi kasallar soni har kuni bir xil natija.
// Funksiya necha kundan keyin barcha tuzalishini qaytarsin.
const hammaTuzalishiUchunQanchaKunKerak = (
  Buguntuzalganlar,
  Bugunkasallanganlar,
  UmumiyKasallar
) => {
  const isInt = (num) => (num % 1 === 0 ? true : false);
  let natija = UmumiyKasallar / (Buguntuzalganlar - Bugunkasallanganlar);
  if (isInt(natija)) {
    return natija;
  } else {
    return Math.ceil(natija);
  }
};

// Test
console.log(hammaTuzalishiUchunQanchaKunKerak(4000, 2000, 77000));
// //----------------------------------------------------------------------------------------------------------------
// 86.Quyidagi namunani kuzatgan holda funkisya yasang.
// Namuna:
// namuna([2, 5, 3]) => [4, 10, 6]
// namuna([1, 86, -5]) => [2, 172, -10]
// namuna([5, 382, 0]) =>[10, 764, 0]
const kopaytirIkkiga = (arr) =>
  arr.map(function (element) {
    return element * 2;
  });

// Test
console.log(kopaytirIkkiga([1, 2, 3, 4, 5]));
// //----------------------------------------------------------------------------------------------------------------
// 87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
// so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.
const toElementLenght = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i].length;
  }
  return newArray;
};

// Test
console.log(toElementLenght(["salom", "sak", "sasasas"]));
// //----------------------------------------------------------------------------------------------------------------
// 88.Taksi kilometriga 1000 so’mdan haq oladi. Lekin birinchi
// kilometri 4000 so’m. Agar funksiya taksiga to’langan yakuniy
// summani qabul qilsa. Funksiya taksining necha kilometr
// yurganini qaytarsin.
const qanchaYurgan = (summa) => {
  if (summa > 0 && summa <= 4000) {
    return 1;
  } else {
    return (summa - 4000) / 1000 + 1;
  }
};

// Test
console.log(qanchaYurgan(7000));
// //----------------------------------------------------------------------------------------------------------------
// 89.Funksiya matn qabu qilsa, ushbu funksiya ushbu matnda “d”
// harfi nechi marta ishtirok etganligini qaytarsin. “d” harfining
// katta kichikligini ahamiyati yo’q.
const nechta_D_Bor = (str) => {
  let harflar = str.split("");
  let count = 0;
  for (let i = 0; i < harflar.length; i++) {
    if (harflar[i] == "d" || harflar[i] == "D") {
      count++;
    }
  }
  return count;
};

// Test
console.log(nechta_D_Bor("My friend Dylan got distracted in school"));
// //----------------------------------------------------------------------------------------------------------------
// 90.Funksiya string qabul qiladi. Va har belgini orasiga bo’sh joy
// qo’yib qaytarsin.
const boshJoyQosh = (str) => {
  let boshJoyliStringMassivi = [];
  for (let i = 0; i < str.length * 2; i++) {
    boshJoyliStringMassivi.push(str[i]);
    boshJoyliStringMassivi.push(" ");
  }
  return boshJoyliStringMassivi.join("");
};

// Test
console.log(boshJoyQosh("salom berdik"));
// //----------------------------------------------------------------------------------------------------------------
// 91.Funksiya 2ta son argument qabul qiladi. Funksiya shunday
// qiymat qaytarsinki, ushbu qiymat ana shu ikkala sondan katta
// va 2-chi songa bo’linsin.
const danKattaGaBolinsin = (a, b) => {
  for (; ; a++) {
    if (a % b === 0) {
      break;
    }
  }
  return a;
};

// Test
console.log(danKattaGaBolinsin(17, 8));
// //----------------------------------------------------------------------------------------------------------------
// 92.Agar men cafedan 3ta kofe olsam yana 1ta tekinga qo’shib
// berishadi. Funksiya nechta kofe olsam meni qo’limda jami
// nechta kofe bo’lishini qaytarsin.
const mendaQanchaCofeBor = (olganCofelarim) => {
  let bonuslarSoni = Math.floor(olganCofelarim / 3);
  return bonuslarSoni + olganCofelarim;
};

// Test
console.log(mendaQanchaCofeBor(10));
// //----------------------------------------------------------------------------------------------------------------
// 93.Funksiyaga string va son berilsa, ushbu stringning oxirigi
// belgisini funksiya son marta takrorlab qaytarib bersin.
const oxirgiBelginiQaytar = (str, qaytarishSoni) => {
  let yangiStr = [];
  yangiStr.push(str);
  for (let i = 0; i < qaytarishSoni; i++) {
    yangiStr.push(str[str.length - 1]);
  }
  return yangiStr.join("");
};

// Test
console.log(oxirgiBelginiQaytar("hello", 5));
// //----------------------------------------------------------------------------------------------------------------
// 94.Funksiyaga sonlar massivi berilsa, Ana shu massivdagi 5dan
// katta bo’lgan elementlarni yig’indiisini qaytarsin.
const danKattaElementlarYigindisi = (arr, danKatta) => {
  let yigindi = 0;
  arr.forEach((element) => {
    if (element > danKatta) {
      yigindi += element;
    }
  });
  return yigindi;
};

// Test
console.log(danKattaElementlarYigindisi([1, 5, 9, 8, 6, 7, 15], 5));
// //----------------------------------------------------------------------------------------------------------------
// 95.Funksiyaga massiv berilsa, ushbu funksiya massiv
// elementlarini barchasini yig’indisini qaytarsin.
const yigindi = (arr) => {
  let yigindi = 0;
  arr.forEach((element) => {
    yigindi += element;
  });
  return yigindi;
};

// Test
console.log(yigindi([1, 5, 9, 8, 6, 7, 15]));
// //----------------------------------------------------------------------------------------------------------------
// 96.Funksiyaga faylning manzili kiritiladi. Funksiya ushbu
// ma’lumotdan faylining nomi ajratib bersin.
const faylNominiAjrat = (faylManzili) => {
  let ajratilganManzil = faylManzili.split("/");
  return ajratilganManzil[ajratilganManzil.length - 1];
};

// Test
console.log(faylNominiAjrat("C:/Projects/pil_tests/ascii/edabit.txt"));
// //----------------------------------------------------------------------------------------------------------------
// 97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
// yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
// funksiya Doston uyiga qaytishi uchun qancha masofa bosib
// o’tishini aytsin.
const masofalarniHisobla = (masolar) => {
  let yigindi = 0;
  masolar.forEach((element) => {
    yigindi += element;
  });
  return yigindi;
};

// Test
console.log(masofalarniHisobla([1, -2, 10, -9]));
// //----------------------------------------------------------------------------------------------------------------
// 98.Funksiya uchburchakning tomonlari argument qilib beriladi.
// Agar ushbu berilgan tomonlardan uchburchak yasab bo’lsa
// unda funksiya true qaytarsin, aks holda false. Uchburchakning
// qoida, istalgan 2ta tomonining yig’igindisi uchunchi tomondan
// katta bo’lsagina uchburchak hosil bo’ladi.
const UchburchakYasasaBoladimi = (a, b, c) => {
  if (a + b > c || a + c > b || b + c > a) {
    return true;
  } else {
    return false;
  }
};

// Test
console.log(UchburchakYasasaBoladimi(5, 10, 9));
// //----------------------------------------------------------------------------------------------------------------
// 99.Funksiya 2 son oralig’gini qabul qilsa, ushbu 2ta son
// orasidagi sonlardan tuzilgan massivni ushbu funksiya
// qaytarsin
const danGachaArray = (dan, gacha) => {
  let yangiArray = [];
  for (; dan < gacha; a++) {
    yangiArray.push(a);
  }
  return yangiArray;
};

// Test
console.log(danGachaArray(5, 10));
// //----------------------------------------------------------------------------------------------------------------
// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") => "<div></div><div></div>"
// Namuna("p*1") => "<p></p>"
// Namuna("li*3") => "<li></li><li></li><li></li>"
const elementniTaggaAylantir = (element, soni) => {
  let tag = `<${element}></${element}>`;
  let arr = [];
  for (let i = 0; i < soni; i++) {
    arr.push(tag);
  }
  return arr.join("");
};

// Test
console.log(elementniTaggaAylantir("div", 2));
// //----------------------------------------------------------------------------------------------------------------
// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
const gachaSonlarniQosh = (gacha) => {
  let yigindi = 0;
  for (let i = 0; i < gacha; i++) {
    yigindi += i;
  }
  return yigindi;
};

// Test
console.log(gachaSonlarniQosh(5));
// //----------------------------------------------------------------------------------------------------------------
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
const orasidami = (son, object) => {
  return son >= object.min && son <= object.max;
};

// Test
console.log(orasidami(4, { min: 0, max: 5 }));
// //----------------------------------------------------------------------------------------------------------------
// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false
const kvadratOxiriTengmi = (son) => {
  let kvadratNatija = son * son;
  let oxirgiRaqam = son % 10;

  return kvadratNatija % 10 === oxirgiRaqam;
};

// Test
console.log(kvadratOxiriTengmi(1));
// //----------------------------------------------------------------------------------------------------------------
// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga
// o’sha elementning indexini qo’shgan holda yangimassiv qaytarsin
const indexQoshish = (massiv) => {
  return massiv.map(function (element, index) {
    return element + index;
  });
};

// Test
console.log(indexQoshish([0, 5, 10, 0, 0]));
// //----------------------------------------------------------------------------------------------------------------
// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola
// fanta
const shakariYoqIchimliklar = (ichimliklar) => {
  const shakarliIchimliklar = ["cola", "fanta"];
  return ichimliklar.filter(function (ichimlik) {
    return !shakarliIchimliklar.includes(ichimlik);
  });
};

// Test
console.log(shakariYoqIchimliklar(["fanta", "cola", "water"]));
// //----------------------------------------------------------------------------------------------------------------
// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
const raqamSoni = (son) => {
  const sonMatn = son.toString();
  return sonMatn.length;
};

// Test
console.log(raqamSoni(123));
// //----------------------------------------------------------------------------------------------------------------
// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
const engKattaSon = (number) => {
  const raqamlar = number.toString().split("");
  const saralanganRaqamlar = raqamlar.sort((a, b) => b - a);
  const natija = parseInt(saralanganRaqamlar.join(""), 10);
  return natija;
};

// Test
console.log(engKattaSon(685));
// //----------------------------------------------------------------------------------------------------------------
// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
const randomSon = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Test
console.log(randomSon(5, 9));
// //----------------------------------------------------------------------------------------------------------------
// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son
// narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
const narissistikSonmi = (son) => {
  const raqamlar = son.toString().split("");
  const uzunlik = raqamlar.length;
  const yigindi = raqamlar.reduce(
    (acc, raqam) => acc + Math.pow(parseInt(raqam, 10), uzunlik),
    0
  );
  return yigindi === son;
};

// Test
console.log(narissistikSonmi(153));
// //----------------------------------------------------------------------------------------------------------------
// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
const kattaHarfSoni = (string) => {
  const kattaHarflar = /[A-Z]/;
  let kattaHarfSoni = 0;
  for (let i = 0; i < string.length; i++) {
    if (kattaHarflar.test(string[i])) {
      kattaHarfSoni++;
    }
  }
  return kattaHarfSoni;
};

// Test
console.log(kattaHarfSoni("fvLzpxmgXSDrobbgMVrc"));
// //----------------------------------------------------------------------------------------------------------------
// 11.
// Calculate the average of the numbers in an array of numbers
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue === undefined ? array[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}
const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(
  numbers,
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  0
);

// Test
console.log(sum);
// //----------------------------------------------------------------------------------------------------------------
// 12.
// Create a function that receives an array of numbers as
// argument and returns an array containing only the positive numbers
// Custom filter function
function filterPositiveNumbers(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
function isPositive(number) {
  return number > 0;
}

// Test
const testnumbers = [-2, 5, 0, -7, 3, 10, -1];
const positiveNumbers = filterPositiveNumbers(testnumbers, isPositive);
console.log(positiveNumbers);
// //----------------------------------------------------------------------------------------------------------------
// 13. Find the maximum number in an array of numbers
function findMaxNumber(numbers) {
  return Math.max(...numbers);
}

// Test
const maxNumber = findMaxNumber([3, 7, 2, 8, 5]);
console.log("Maximum number:", maxNumber);
// //----------------------------------------------------------------------------------------------------------------
// 14. Print the first 10 Fibonacci numbers without recursion
function printFibonacci(n) {
  const fibonacciNumbers = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
  }
  console.log("First 10 Fibonacci numbers:", fibonacciNumbers);
}

// Test
printFibonacci(10);
// //----------------------------------------------------------------------------------------------------------------
// 15. Create a function that will find the nth Fibonacci number using recursion
function findNthFibonacci(n) {
  if (n <= 1) return n;
  return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
}

// Test
const nthFibonacci = findNthFibonacci(10);
console.log("10th Fibonacci number:", nthFibonacci);
// //----------------------------------------------------------------------------------------------------------------
// 16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Test
const primeCheck = isPrime(13);
console.log("Is 13 prime?", primeCheck);
// //----------------------------------------------------------------------------------------------------------------
// 17. Calculate the sum of digits of a positive integer number
function sumOfDigits(number) {
  return [...String(number)].reduce((sum, digit) => sum + Number(digit), 0);
}

// Test
const digitSum = sumOfDigits(123);
console.log("Sum of digits:", digitSum);
// //----------------------------------------------------------------------------------------------------------------
// 18. Print the first 100 prime numbers
function printPrimes(limit) {
  const primes = [];
  let i = 2;

  while (primes.length < limit) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }

  console.log("First 100 prime numbers:", primes);
}

// Test
printPrimes(100);
// //----------------------------------------------------------------------------------------------------------------
// 19. Create a function that will return in any array the first 'p' prime numbers greater than 'n'
function firstPrimesGreaterThanN(p, n) {
  const primes = [];
  let i = n + 1;

  while (primes.length < p) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }

  return primes;
}

// Test
const firstPrimes = firstPrimesGreaterThanN(5, 10);
console.log("First 5 prime numbers greater than 10:", firstPrimes);
// //----------------------------------------------------------------------------------------------------------------
// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
  const firstElement = arr.shift();
  arr.push(firstElement);
  return arr;
}

// Test
const arrayLeft = [1, 2, 3, 4, 5];
console.log("Array after left rotation:", rotateLeft(arrayLeft));
// //----------------------------------------------------------------------------------------------------------------
// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
  const lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
}

// Test
const arrayRight = [1, 2, 3, 4, 5];
console.log("Array after right rotation:", rotateRight(arrayRight));
// //----------------------------------------------------------------------------------------------------------------
// 22. Reverse an array
function reverseArray(arr) {
  return arr.reverse();
}

// Test
const arrayToReverse = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray(arrayToReverse));
// //----------------------------------------------------------------------------------------------------------------
// 23. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Test
const stringToReverse = "Hello, World!";
console.log("Reversed string:", reverseString(stringToReverse));
// //----------------------------------------------------------------------------------------------------------------
// 24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Test
const mergedArray = mergeArrays([1, 2, 3], ["a", "b", "c"]);
console.log("Merged array:", mergedArray);
// //----------------------------------------------------------------------------------------------------------------
// 25. Create a function that will receive two arrays of numbers as arguments
// an array composed of all the numbers that are either in the first array or second array but not in both
function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const difference = new Set(
    [...set1]
      .filter((x) => !set2.has(x))
      .concat([...set2].filter((x) => !set1.has(x)))
  );
  return Array.from(difference);
}

// Test
const arrDiff = symmetricDifference([1, 2, 3, 4], [3, 4, 5, 6]);
console.log("Symmetric difference:", arrDiff);
// //----------------------------------------------------------------------------------------------------------------
// 26. Create a function that will receive two arrays and will return
// an array with elements that are in the first array but not in the second
function elementsOnlyInFirstArray(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const difference = new Set([...set1].filter((x) => !set2.has(x)));
  return Array.from(difference);
}

// Test
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const result = elementsOnlyInFirstArray(array1, array2);
console.log("Elements only in the first array:", result);
// //----------------------------------------------------------------------------------------------------------------
// 81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
// bo’g’in borligini aytsin.
//! navbatadan tashqari masala
const syllablesLine = (str) => {
  let newWord = [];
  const character = str.split("");
  for (let i = 0; i < character.length; i++) {
    newWord.push(character[i]);
    if (
      character[i] == "a" ||
      character[i] == "o" ||
      character[i] == "i" ||
      character[i] == "u" ||
      character[i] == "e"
    ) {
      newWord.push("-");
    }
  }
  return newWord.join("");
};
console.log(syllablesLine("salom berdik"));
// //----------------------------------------------------------------------------------------------------------------
