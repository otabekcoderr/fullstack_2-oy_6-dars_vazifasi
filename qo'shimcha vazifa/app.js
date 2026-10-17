//==============================================
// 1. Sonning holatini tavsiflovchi funksiya (if/else)

// Shart: sonHolati(n) nomli funksiya yarating. U bitta butun son qabul qilsin va sonning holatiga qarab "musbat juft", "musbat toq", "manfiy juft", "manfiy toq" yoki "nol" degan matnni qaytarsin (return). (Manfiy toq sonlarda % 2 !== 0 qoidasini eslang!)

// let son = -7;

// function sonHolati(n) {
//   if (n % 2 == 0 && n > 0) {
//     return "Musbat juft";
//   } else if (n % 2 == 0 && n < 0) {
//     return "Manfiy juft";
//   } else if (n % 2 != 0 && n < 0) {
//     return "Manfiy toq";
//   } else if (n % 2 == 0 && n < 0) {
//     return "Manfiy juft";
//   } else {
//     return "Nol";
//   }
// }

// console.log(sonHolati(son));

//========================================================
// 2. Chegirma hisoblagich (&&, || va ? :)

// Shart: chegirmaHisobla(summa, talabami, promokod) funksiyasini tuzing.

// Agar xaridor talaba bo‘lsa (true) VA xarid summasi 100 dan katta bo‘lsa, YOKI promokod bo‘sh bo‘lmasa (Boolean(promokod) rost bo‘lsa) — summadan 20% chegirma qilib, to‘lanadigan yakuniy summani qaytarsin. Aks holda summaning o‘zini qaytarsin.

// let talabami = true;
// let summa = 100;
// let promokod = true;

// const chegirmaHisobla = function (summa, talabami, promokod) {
//   if ((talabami === true && summa >= 100) || promokod === true) {
//     let chegirmaliNarx = (summa * 20) / 100;
//     return summa - chegirmaliNarx;
//   } else {
//     return summa;
//   }
// };

// console.log(chegirmaHisobla(summa, talabami, promokod));

//==================================================================

// 3. Oy kunlarini aniqlovchi funksiya (switch/case)

// Shart: oyKunlari(oy) nomli funksiya yozing. U 1 dan 12 gacha oy raqamini qabul qilsin va switch/case yordamida shu oyda necha kun borligini (31, 30 yoki 28) return qilsin. Boshqa son kiritilsa "Xato oy raqami" qaytarsin.

// let oy = 2;
// let yil = 2026;

// switch (oy) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 kun");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 kun");
//     break;
//   case 2:
//     if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//       console.log("29 kun");
//     } else {
//       console.log("28 kun");
//     }
//     break;
//   default:
//     console.log("Xato oy raqami");
// }

//===============================================================

// 4. Daraja va Faktorial (for sikli)Shart: Ikkita alohida funksiya yozing:daraja(x, n) — kutubxonalarsiz (** va Math.pow ishlatmasdan) for sikli yordamida $x^n$ ni hisoblab qaytarsin.faktorial(n) — $n!$ ($1 \cdot 2 \cdot \dots \cdot n$) ni hisoblab qaytarsin.

//1

// const darajagaKotar = (x, n) => {
//   let daraja = 1;
//   for (let i = 1; i <= n; i++) {
//     daraja *=x;
//   }
//   return daraja;
// };

// console.log(darajagaKotar(4, 2));

//2

// function factorial(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= i;
//   }
//   return sum;
// }

// console.log(factorial(5));

// let son = 121;
// let son_nusxa = son;
// let sum = 0;

// const palidrom = function(son,son_nusxa,sum){
//     for(let i = )
// }
