// gagal
// The Vowel Code 6kyu
// const encode = (a) => {
//     const b = a.split('');
//     for(let i = 0; i < b.length; i++) {
//         // saya jadikan function
//         // if(b[i] == 'e') { b[i] = '1'}

//         coba2(b, i, 'a', '1');
//         coba2(b, i, 'e', '2');
//         coba2(b, i, 'i', '3');
//         coba2(b, i, 'o', '4');
//         coba2(b, i, 'u', '5');
//     };
//     return b.join('')
// }
// const decode = (a) => {
//     const b = a.split('');
    // for(let i = 0; i < b.length; i++) {
    //     coba2(b, i, '1', 'a');
    //     coba2(b, i, '2', 'e');
    //     coba2(b, i, '3', 'i');
    //     coba2(b, i, '4', 'o');
    //     coba2(b, i, '5', 'u');
    // };
    
    // kalau pakai forEach
//     b.forEach((e, i, a) => coba2(e, i, a, '2', 'e'))
//     return b.join('')
// }
// function coba2(e, i, a, p, t) {
//     if(a[i] == p) {
//         a[i] = t
//     }
    // if(e == p) {
    //     a[i] = t
    // }
// }


// console.log(encode('How are you today?'));
// console.log(decode('h2ll4'));

// // Membuat array
// var arr = ["apple", "banana", "orange", "grape"];

// // Menggunakan forEach untuk menampilkan setiap elemen array dengan menambahkan pesan tambahan
// arr.forEach(function(item, index, array) {
//     console.log("Element ke-" + index + " adalah " + item + " dari array " + array);
// });
// Element ke-0 adalah apple dari array apple,banana,orange,grape

