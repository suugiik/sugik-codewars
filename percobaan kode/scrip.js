// function waktu(j, m, d) {
//     return (j * 3600 + m * 60 + d) * 1000;
// }
// console.log(waktu(1, 2, 6));




// tugas satu
// function cubeChecker(volume, side){
//     const total = side * side *side;
//     if(volume == total & volume > 0) {
//         return true;
//     } else {
//         return false
//     }
//   };
// console.log(cubeChecker(8, 2))



// tugas dua
//     (saya merasa kebingungan saat mengerjakan tetapi saya berhasil menemukan jawabanya. jawaban saya memang benar
//     tapi codenya tidak work it dan terlalu rumit. setelah saya melihat jawaban orang lain ternyata codenya itu
//     sangat simpel. dibawah ini adalah jawaban saya.)
// function flickSwitch(arr){
//     let a = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == 'flick' && arr[i - 1] == true) {
//             arr[i] = false;
//         } else if(arr[i] == 'flick' && arr[i - 1] == false) {
//             arr[i] = true;
//         } else if(arr[i] == 'flick' && arr[i - 1] == undefined) {
//             arr[i] = false;
//         } else if(arr[i - 1] == undefined) {
//             arr[i] = true;
//         } else if(arr[i - 1] == false) {
//             arr[i] = false;
//         } else {
//             arr[i] = true;
//         }
//         a.push(arr[i]);
//     }
//     return a;
// };

// ini versi jawaban orang lain
// function flickSwitch(arr){
//     let returning = true;
//       return arr.map( (v) => {
//         return (v == "flick") ? returning = !returning : returning;
//       })
//   }

// console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
// console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
// console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
// console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));
// console.log(flickSwitch(["john", "smith","susan", "flick"]));
// console.log(flickSwitch(["bicycle"]));
// console.log(flickSwitch(["flick"]));
// console.log(flickSwitch([]));




// tugas tiga
// function strCount(str, letter){  
//   let total = 0;
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] == letter) {
//       total+= 1;     
//     } else {
//       total;
//     }
//   }
//   return total;
// };

// versi jawaban orang lain
// function strCount(str, letter){  
//   return str.split(letter).length-1
// }

// function strCount(str, letter){  
//   return str.split('').filter(c => c == letter).length;
// }

// function strCount(str, letter){   
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter)
//       count++;
//   }
//   return count;
// }

// const strCount = (str, letter) => str.split(letter).length - 1;

// console.log(strCount('hello', 'o'));

// const nama = 'sugiiik';
// console.log(nama.split('i').length)




// tugas empat
// function fixTheMeerkat(arr) {
//     return arr.reverse();
// }
// console.log(fixTheMeerkat(['tiga', 'dua', 'satu']));




// tugas lima
// function flipNumber(n) {
//   let a = [];
//   var s = n.split('');
//   for(let i = 0; i < n.length; i++) {
//     s.reverse();
//     a.push(s[0]);
//     s.shift();
//   }
//   return a.join('');
// }

// jawaban orang lain
// function flipNumber (string) {
//     let out = [];
//     let chars = string.split("");  
//     while (chars.length) {
//         out.push(chars.reverse().shift());
//     }   
//     return out.join("");
//   }

// const flipNumber = n => n.length < 2 ? n : n.slice(-1) + n[0] + flipNumber(n.slice(1, -1));

// const flipNumber = n =>
//   (arr => [...n].reduce(pre => pre + arr.reverse().shift(), ``))
//   ([...n])

// function flipNumber(n)
// {
// 	if (n.length === 1)
//   	return n; 
//   n = n.split('').reverse().join('');
//   return n[0] + flipNumber(n.substr(1));
// }

// console.log(flipNumber("012345"))





// tugas enam
// function yearDays(year) {
//     if(year % 4 === 0 && year % 100 !== 0 || year === 0) {
//         return `${year} has 366 days`
//     } else if(year % 100 === 0 && year % 400 === 0) {
//         return `${year} has 366 days`;
//     } else{return `${year} has 365 days`}
// }

// jawaban orang lain
// // 1
// function yearDays(year) {
//     return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
// }
// // 2
// function yearDays(year) {
//     let nDays =  year % 4 ? 365 :
//                  year % 100 ? 366:
//                  year % 400 ? 365 : 366;
    
//     return `${year} has ${nDays} days`;
// }
// // 3
// function yearDays(year)
// {
//   var result = 365;
//   if (year%400==0 || (year%4==0 && year%100!==0)) {
//     result = 366;
//   }
  
//   return year + ' has ' + result + ' days';
// }

// console.log(yearDays(1200));




// tugas tujuh
// const add = (a,b) => a + b;

// const divide = (a,b) => a / b;

// const multiply = (a,b) => a * b;

// const mod = (a,b) => a % b;
   
// const exponent = (a,b) => a ** b;
    
// const subt = (a,b) => a - b;


// 
// function powersOfTwo(n){
//     const a = [];
//     for(let i = 0; i <= n; i++) {
//         a.push(2**i)
//     }
//     return a
// }
// console.log(powersOfTwo(4));












// const a = 11;
// const b = 12;

// function multiply(number){
//     let str = number.toString();
//     let dgt = str.length;
//     if(number <= 9) {return number * 5}
//     return number * (5 ** dgt);
// }
// console.log(multiply(20));

// var angka = 123;
// var stringAngka = angka.toString();

// console.log(stringAngka); // Output: "123"



























// 
// function sumArray(array) {
//     const nT = array.indexOf(Math.min(...array));
//     const split = array.join('');
//     if(split.length < 3) {return 0}
//     else if (nT !== -1) {
//         array.splice(nT, 1);
//         const nTg = array.indexOf(Math.max(...array));
//         array.splice(nTg, 1);
//         return array.reduce((a, b) => a + b);
//     };
// }
// function sumArray(array) {
//     const split = array.join('');
//     if(split.length < 3) {return 0};
//     const nT = array.indexOf(Math.min(...array));
//     array.splice(nT, 1);
//     const nTg = array.indexOf(Math.max(...array));
//     array.splice(nTg, 1);
//     return array.reduce((a, b) => a + b);
// }

// console.log(sumArray([null]));
// console.log(sumArray([]));
// console.log(sumArray([ 0]));
// console.log(sumArray([ 0, 1]));
// console.log(sumArray([ 6, 2, 1, 8, 10 ]));
// console.log(sumArray([ 0, 1, 6, 10, 10 ]));
// console.log(sumArray([  -6, -20, -1, -10, -12]));
// console.log(sumArray([-6, 20, -1, 10, -12 ]));

// const w = [2, 3, 4, 1, 5, 1, 6];
// w.splice(2, 1)
// console.log(w);
// const array = [4, 7, 3, 1, 8, 6, 1];
// const nT = Math.min(...array);
// const niTePe = array.indexOf(nT);
// // const nTg = Math.max(...array);
// const tNT = array.filter(a => a !== nT);
// console.log(niTePe);





// function latestClock(a, b, c, d) {
//     return [parseInt([a, b].join('')), parseInt([c, d].join(''))].join(':') ; 
// }

// console.log(latestClock(1, 2, 3, 4));












// boleh di hapus
// const coba = (n) => {
//     let a = [];
//     for(let i = n; i > 0; i--) {
//         a.push(i)
//     }
//     return a
// }

// const coba2 = (n) => {
//     return Array(n).fill().map((_, i) => i+1)
// }

// console.log(coba2(3));
// console.log(Array(3).fill().map((a, i) => 3 - i));




























// catatan
// - split('') untuk mengubah string mrnjadi array. membuat var baru jika mau di split (kalu di akhiri;)
// - reverse() untuk mereverse array
// - join('') untuk menggabungkan elemen" array menjadi string
// - reverse string => string.split('').reverse().join('')
// - shift() menghapus elemen pertama array
// - pop() menhapus elemen terakhir array
// - typeof {elemen} untuk melihat tipe data
// - math.min(...array) digunakan untuk melihat nilai terendah didalam array
// - math.max(...array) digunakan untuk melihat nilai tertinggi didalam array
// - .splice(indeks, menghapusBerapa, tambah, tambahDanSeterusnya)
// - indexOf(yangdicari, indeksAwalcari)
//       -bisa untuk string dan array
//       - jika yang dicari tidak ada maka akan mengembalikan nilai -1
// 








// let myArray = [4, 7, 2, 9, 5, 9];

// // Menemukan indeks angka terbesar pertama
// let indexOfFirstMax = myArray.indexOf(Math.max(...myArray));
// console.log(indexOfFirstMax);

// // Menghapus angka terbesar pertama
// if (indexOfFirstMax !== -1) {
//     myArray.splice(indexOfFirstMax, 1);
// }

// console.log("Array setelah menghapus angka terbesar indeks pertama:", myArray);




const As = ['a', 'a', 't', 'e', 'f', 'i', 'j']

const B = ['t', 'g', 'g', 'i', 'k', 'f']

const q = []
const c = As.forEach(e => {
    const w = B.find(m => m === e);
    if (typeof w == 'undefined') {
        q.push(e)
    }
})
const d = B.forEach(e => {
    const w = As.find(m => m === e);
    if (typeof w == 'undefined') {
        q.push(e)
    }
})
console.log(q);
// const uniqueArray = [...new Set(array)]; // Menggunakan Set untuk menghapus duplikat, kemudian menggunakan spread operator untuk mengonversi Set kembali menjadi array

// console.log(uniqueArray);
console.log([...new Set(q)]);