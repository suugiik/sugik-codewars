var countSheep = function (num){
    let c = '' 
    for(let i = 1; i <= num; i++) {
        c += `${i} sheep...`
    }
    return c
}

console.log(countSheep(3));