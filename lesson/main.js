// for1
// let a = +prompt("a=")
// let b = +prompt("b=")

// for (let i=a; i<=b; i++) {
//     console.log(i);
// }


// for2
// let a = +prompt("a=")
// let b = +prompt("b=")
// for (let i=b-1; i>a; i--) {
//     console.log(i);
// }


// for3
// let narx = +prompt("Konfet narxi=")
// for (let i=1; i<=10; i++) {
//     console.log(i*narx);
// }


// for4
// let narx = +prompt("Konfet narxi=")
// for (let i=1; i<=2; i+=0.2) {
//     console.log(i*narx);
// }

// for5
// let a = +prompt("a=")
// let b = +prompt("b=")
// let s = 0;
// for (let i=a; i<=b; i++) {
//     s += i;
// }
// console.log(s);


// for6 
// let a = +prompt("a=")
// let b = +prompt("b=")
// let s = 1;
// for (let i=a; i<=b; i++) {
//     s *= i;
// }
// console.log(s);

// for7 
// let a = +prompt("a=")
// let b = +prompt("b=")
// let s = 0;
// for (let i=a; i<=b; i++) {
//     s += i*i;
// }
// console.log(s);

// for8 
// let n = +prompt('n=')
// let s = 0
// for (let i=1; i<=n; i ++) {
//   s += 1/i;
// }
// console.log(s);

// for9 
// let n = +prompt("n=")
// let s = 1;
// for (let i=1.1; i<=n; i+=0.1) {
//     s *= i;
// }
// console.log(s);

// for11 
// let n = +prompt("n=")
// let s = 0;
// for (let i=1; i<=n; i++) {
//     s += 2*i-1;
//     console.log(s);
// }

// for12 
// let a = +prompt("a=")
// let n = +prompt("n=")
// let s = 1;
// for (let i=1; i<=n; i++) {
//     s *= a;
//   }
// console.log(s);


// for13 
// let a = +prompt("a=")
// let n = +prompt("n=")
// for (let i=1; i<=n; i*=a) {
//     console.log(i);
// }


// for14
// let a = +prompt("a=")
// let n = +prompt("n=")
// let s = 0;
// for (let i=1; i<=n; i*=a) {
//     console.log(i);
//     s += i;
// }
// console.log(s);


// for15
// let n = +prompt("n=")
// let s=1
// let S=0
// for (let i=1; i<=n; i++){
//   s *= i;
//   console.log(s);
//   S += s;
// }
// console.log(S);



// for16
// let n = +prompt("n=")
// let k = +prompt("k=")
// let s=1
// let S=0
// for (let i=1; i<=n; i++) {
//   for (let j=1; j<=k; j++) {
//     s *= i;
//   }
//   S += s;
//   s = 1
// }
// console.log(S);


// for17
// let n = +prompt("n=")
// let s=1
// let S=0
// for (let i=1; i<=n; i++) {
//   for (let j=1; j<=i; j++) {
//     s *= i;
//   }
//   console.log(s);
//   S += s;
//   s = 1;
// }
// console.log(S);


// for18 
// let n = +prompt('n=')
// s = 0
// counter = 0
// for (let i=1; i<=n; i++) {
//   if (n%i==0) {
//     counter ++;
//     s += i;
//     console.log(i);
//   }
// }
// console.log(s);
// console.log(counter);


// let19
// let n = +prompt('n=')
// counter = 0
// for (let i=2; i<n; i++) {
//   if (n%i==0) {
//     counter ++;
//   }
// }
// if (counter != 0) {
//   console.log(`${n} tub son emas`);
// } else {
//   console.log(`${n} tub son`);
// }


// for20 
// let n = +prompt('n=')
// for (let i=1; i<=n; i++) {
//   for (let j=1; j<=i; j++) {
//     console.log(j);
//   }
// }



//////////////// WHILE 
// while1
// let a = +prompt('a=')
// let b = +pnompt('b=');
// while (a >= b) {
//   a -= b;
// }
// console.log(`Qoldiq ${a}`);


// while2
// let a = +prompt('a=')
// let b = +prompt('b=');
// let s=0;
// while (a >= b) {
//   a -= b;
//   s++;
// }
// console.log(`${s} ta kesma joylashtirish mumkin`);


// while3 
// let n = +prompt("n=")
// let x = 3;
// let i = 1;
// while (x<=n) {
//   if (x==n) {
//     console.log(`${n} 3 ning ${i} darajasi`);
//     x *=3;
//     i ++;
//   }
// }


// while4
// let n = +prompt('n=');
// let m = +prompt('m=')
// let s=0;
// while (n >= m) {
//   n -= m;
//   s++;
// }
// console.log(`${s} butun qismi va ${n} qoliq qismi`);


// while5
// let a = +prompt('a=')
// let s = a % 10;
// a = Math.floor(a/10)
// while (a>0) {
//     s = (s * 10 + (a%10))
//     a = Math.floor(a/10);
// }
// console.log(s);


// while6
// let a = +prompt('a=')
// let s = 0;
// let i = 0;
// while (a>0) {
//     s += a % 10
//     a = Math.floor(a/10);
//     i ++;
// }
// console.log(s);
// console.log(i);


// while7
// let a = +prompt('a=')
// let x = 0;
// let i = 0;
// while (a>0) {
//     x = a % 10
//     a = Math.floor(a/10);
//     if (x == 2) {
//         i ++;
//     }
// }
// if (i != 0) {
//     console.log('Berilgan sonda 2 raqami qatnashgan');
// } else {
//     console.log('Berilgan sonda 2 raqami qatnashmagan');
// }





// while9
// let a = +prompt('a=')
// b = a;
// let s = a % 10;
// a = Math.floor(a/10)
// while (a>0) {
//     s = (s * 10 + (a%10))
//     a = Math.floor(a/10);
// }
// if (s == b) {
//     console.log("Polindrom");
// } else {
//     console.log('polindrom emas');
// }