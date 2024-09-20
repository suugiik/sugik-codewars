function invert(array) {
    let a = [];
    array.map(e => {
        (e === 0) ? a.push(e) : (e > 0) ? a.push(-e) : a.push(Math.abs(e))
    })
    return a
}

// const invert = array => array.map(num => -num);
console.log(invert([1, -2, 3, -4, 5]));

// catatan
console.log(Math.abs(-1));
console.log(0 - (-1));


// gagal Check the exam 7kyu
// function checkExam(array1, array2) {
//     if(array2[0] === '') {
//         return 0;
//     }
//     let c = 0;

//     for(let i = 0; i < array1.length; i++) {
//         if(array1[i] === array2[i]) {
//             c += 4
//         } else if(array1[i] !== array2[i] & array2[i] !== '' ) {
//             c -= 1
//         } else {c += 0}

//     }
//     return c  
// }

// console.log(checkExam(['a', 'b', 'c', 'd'], ['a', 's', '', 'd']));
// console.log(checkExam(["c","b","b","c","b","c"], ["","","c","b","a","c"]));