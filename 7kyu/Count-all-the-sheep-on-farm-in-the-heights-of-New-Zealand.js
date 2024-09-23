function lostSheep(friday,saturday,total){
    // percobaan pertama
    // const jumat = friday.reduce((a, b) => a +  b, 0);
    // const sabtu = saturday.reduce((a, b) => a +  b, 0);
    // return(total - (jumat + sabtu));
    // percobaan kedua cuma di sederhanakan
    // const jusu = friday.reduce((a, b) => a +  b, 0) + saturday.reduce((a, b) => a +  b, 0);
    // return(total - jusu);
    
    // percobaan ketiga
    // const jusu = [...friday, ...saturday].reduce((a, b) => a + b, 0)
    // return(total - jusu);

    // percobaan keempat
    return total - ([...friday, ...saturday].reduce((a, b) => a + b, 0))
}

// jawaban orang lain
// function lostSheep(friday,saturday,total){
//     return friday.concat(saturday).reduce((s,l)=>s-l,total)
// }
console.log(lostSheep([1,2],[3,4],15));

// coba-coba kode
// const a = [1,3]
// const b = [1,3]
// console.log([...a, ...b]);