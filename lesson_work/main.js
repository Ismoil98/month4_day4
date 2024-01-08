// IF-17
// let year = 2024;
// let isCabisa;
// let numOfDays;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       isCabisa = true;
//     } else {
//       isCabisa = false;
//     }
//   } else {
//     isCabisa = true;
//   }
// } else {
//   isCabisa = false;
// }
// if (isCabisa) {
//   numOfDays = 366;
// } else {
//   numOfDays = 365;
// }
// console.log(numOfDays);

// CASE-12;
// let year = 2006;
// let animalIndex = (year - 1984) % 12;
// let colorIndex = (year - 1984) % 5;
// switch (animalIndex) {
//   case 0:
//     animal = 'sichqon';
//     break;
//   case 1:
//     animal = 'sigir';
//     break;
//   case 2:
//     animal = "yo'lbars";
//     break;
//   case 3:
//     animal = 'quyon';
//     break;
//   case 4:
//     animal = 'ajdar';
//     break;
//   case 5:
//     animal = 'ilon';
//     break;
//   case 6:
//     animal = 'ot';
//     break;
//   case 7:
//     animal = "qo'y";
//     break;
//   case 8:
//     animal = 'maymun';
//     break;
//   case 9:
//     animal = 'tovuq';
//     break;
//   case 10:
//     animal = 'it';
//     break;
//   case 11:
//     animal = "to'ng'iz";
//     break;
// }
// switch (colorIndex) {
//   case 0:
//     color = 'yashil';
//     break;
//   case 1:
//     color = 'qizil';
//     break;
//   case 2:
//     color = 'sariq';
//     break;
//   case 3:
//     color = 'oq';
//     break;
//   case 4:
//     color = 'qora';
//     break;
// }
// let nameOfYear = color + ' ' + animal + ' yili';
// console.log(nameOfYear);

// SCOPE /////////////////////////
// GLOBAL SCOPE //////////

// let a = 3;
// var b = 4;
// const c = 5;

// function add() {
//   var a = 3;
//   let b = 4;
//   const c = a + b;

// console.log(a);
// console.log(b);
// console.log(c);
// }
// add();

// if (true) {
// var a = 3;
//   let b = 4;
//   const c = a + b;
//   console.log(a);
// console.log(b);
// console.log(c);
// }

//   L O O P   ----- //////////////////////////
// FOR LOOP //////////////
// for (initializer; condition; iterator) {
//   // statements
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// WITHOUT INITIALIZER ///

// let j = 1; // initilizer
// for (; j <= 10; j += 1) {
//   console.log(j);
// }

// WITHOUT CONDITION
// for (let j = 1; ; j += 1) {
//   console.log(j);
//   if (j > 10) {
//     break;
//   } // condition
// }

// WITHOUT ITERATOR
// for (let j = 1; j <= 10; ) {
//   console.log(j);
//   j += 1; // iterator
// }

// WOTHOUT ANY EXPRESSION
// let j = 1; // initilizer
// for (;;) {
//   if (j > 10) {
//     break;
//   } // condition
//   console.log(j);
//   j += 1; // iterator
// }

// WHILE LOOP ----//////
// while (condition) {
//   // code block to be executed
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let count = 1;
// while (count < 10) {
//   console.log(count);
//   count += 2;
// }

// DO-WHILE LOOP  ---////
// do {
//   statement;
// } while (condition);

// let count = 10;
// do {
//   console.log(count);
//   count++; // 5
// } while (count <= 5);

// SECRET NUMBER GAME ////////////////////////
// generate a secret number between 1 and 10
// const MIN = 1;
// const MAX = 10;

// let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

// let guesses = 0; // for storing the number of guesses
// let hint = ''; // for storing hint
// let number = 0;
// do {
//   // get input from user
//   let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

//   // get the integer
//   number = parseInt(input);

//   // increase the number of guesses
//   guesses++;

//   // check input number with the secret number provide hint if needed
//   if (number > secretNumber) {
//     hint = ', and less than ' + number;
//   } else if (number < secretNumber) {
//     hint = ', and greater than ' + number;
//   } else if (number == secretNumber) {
//     alert(`Bravo! you're correct after ${guesses} guess(es).`);
//   }
// } while (number != secretNumber);

// BREAK ///////////////////
// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   if (i == 2) {
//     break;
//   }
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
//   if (i == 3) {
//     break;
//   }
// }

// CONTINUE ////////////////

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// WEB DEV //////////////////
// let list = '';

// let card =
//   "<div class='card'><div class='card-inner' style='border-radius: 15px'><img width='100%'style='border-radius: 15px'src='https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/9/9/4/2/2162499-5-eng-GB/Natural-and-organic-food-product-trends-shape-sales-success.jpg'alt='product'/><h2 style='text-align: center; font-size: 40px'>Snacks</h2></div></div>";

// for (i = 1; i <= 300; i++) {
//   list += card;
// }

// document.getElementById('row').innerHTML = list;

// DARSDA-FOR-1 ///////////////\
// let k = 3;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(k);
// }

// DARSDA-WHILE-1 //////////

// let n = 28;
// let k = 5;
// var i = 0;
// while (n >= k) {
//   n -= k;
//   i++;
// }
// console.log(`To'liqsiz bo'linma ${i} va qoldiq ${n}`);
