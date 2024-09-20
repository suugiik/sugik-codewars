function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

// atau 

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([234334, 5]));