//vazifadan tashqari
// let matn = "ronaldo";
// let nums = "1234567890";
// let bormi = true;
// for (let i of matn) {
//   let n = Number(matn[i]);
//   if (nums.includes(matn) && n == isNaN) {
//     bormi = true;
//   } else {
//     bormi = false;
//   }
// }
// console.log(bormi);

//==========================================================

// 3.Funksiyabutunsonqabulqiladi. Funksiyaushbubutun
// sondankeyingisonniqaytarsin.

// function nextInteger(num) {
//   return num + 1;
// }
// console.log(nextInteger(1));

//==========================================================
// 4.Funskiyauchburchakningasosivabalandliginiqabulqiladi.
// Funksiyauchburchakningyuzinihisoblabqaytarsin.Uchbur
// chakyuzinitopishformulasi:S=(asos*balandlik)/2

const uchburchakYuzi = function (asos, balandlik) {
  return (asos * balandlik) / 2;
};

console.log(uchburchakYuzi(3, 6));

//============================================================

//5.Funksiyayoshniyilko’rinishidaqabulqiladi.ushbufunksiya
// yoshnikunlardahisoblabnatijaniqaytarsin.Biryil365kundeb
// oling

// const ageToDays = (yil) => yil * 365;
// console.log(ageToDays(65));

//=================================================
// 6.Quyidaginamunalargamuvofiqravishdafunksiyani tana
// qisminiyozing

// function numToKub(num) {
//   return num ** 3;
// }
// console.log(numToKub(3));

//=====================================================

// 7.Massivniichidanbirinchielementiniqaytaradiganfunksiya
// yasang.

// const firstElement = function (list) {
//   return list[0];
// };

// console.log(firstElement([1, 2, 3]));

///========================================================
// 8.Funksiya2taargumentqabulqilsin.Ushbufunksiyabirinchi
// qiymatningikkinchiqiymatbilanko’paytmasiniqaytarsin.

// const power = (x, y) => x * y;
// console.log(power(2, 4));

//============================================================

// 9.Soatko’rinishidaqiymatkiritilsa,sekundlardaqaytaradigan
// funksiyayasang.

// function clockTosekund(num) {
//   return num * 3600;
// }

// console.log(clockTosekund(2));

//==============================================================

// 10.Uchburchakninguchinchitomoniningenguzunqiymatini
// qaytaradiganfunksiyayasang.
// Formula:Enguzunuchinchitom

// const uchinchiTomon = function (tomon1, tomon2) {
//   return tomon1 + tomon2 - 1;
// };

// console.log(uchinchiTomon(8, 10));

// 11.Ikkitasonargumentsifatidakiritilsa,ushbuikkalasonnibir
// inchisiniikkinchisigabo’lgandagiqoldiqniqaytaribberadigan
// funksiyayasang

//==============================================================

// 11.Ikkitasonargumentsifatidakiritilsa,ushbuikkalasonnibir
// inchisiniikkinchisigabo’lgandagiqoldiqniqaytaribberadigan
// funksiyayasang.

// const qoldiq = (x, y) => Math.floor(x % y);
// console.log(qoldiq(3, 4));

//===============================================================
// 12.Turtburchakningbo’yivaeniberilsauningyuzinihisoblab
// qaytaradiganfunksiyayasang.

// function tortburchakYuzi(boyi, eni) {
//   return boyi * eni;
// }
// console.log(tortburchakYuzi(6, 7));

//==================================================================
// 13.Funksiya“a”argumentsifatidastringma’lumotqabulqiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joyva “a”
// stringinibirlashtiribqaytarsin

// const stringQosh = function (matn) {
//   return "somethin " + matn;
// };
// console.log(stringQosh("is wrong"));

//===================================================================
// 14.Quyidaginamunalargaqaraganholatdafunksiyayasang

// const kvadrat = (num) => num ** 2;
// console.log(kvadrat(5));

//================================================================
// 15.Funksiyaraqamqabulqiladi.

// function noldan(num) {
//   return num <= 0;
// }

// console.log(noldan(9));

//=================================================================

// 16.Funksiyako’pburchaklishaklningburchaklarsoniniqabul
// qiladi. Natijadafunksiyaushbushaklningichkiburchaklar
// yig’indisiniqaytarsin.Formula(n-2)x180

// const ichkiBurchaklar = function (n) {
//   return (n - 2) * 180;
// };

// console.log(ichkiBurchaklar(3));

//===================================================================

// 17.Basketbolo’yinida ikkiochkolikvauchochkolikgollar
// 8
// EDABIT
// mavjud.Agarfunksiya1-argumentsifatidaikkiochkolikgollar
// soniniva2-argumentsifatidauchochkolikgollarsoniniqabul
// qilsa, jamoaningjamiochkosiniqaytaradiganfunksiyayasang.

// const ochkolar = (num1, num2) => num1 * 2 + num2 * 3;
// console.log(ochkolar(1, 1));

//====================================================================

// 18.Quyidagi namunalarni kuzatgan holda ungamuvofiq
// funksiyayasang.

// function ismAdd(ism) {
//   return ism + "Edabit";
// }

// console.log(ismAdd("Otabek"));

//==========================================================================

// 19.Ikkitasonkiritilsa,agarularningyig’indisi100dankichkina
// bo’lsarost,kattabo’lsayolg’onqiymatqaytaradiganfunksiya
// yasang

// const ikkitaSon = function (num1, num2) {
//   return 100 > num1 + num2;
// };

// console.log(ikkitaSon(22, 95));

//==============================================================================

//20

// const forNum = (num) => {
//   let list = [];
//   for (let i = 1; i <= num; i++) {
//     list.push(i);
//   }
//   return list;
// };
// console.log(forNum(6));

//21
