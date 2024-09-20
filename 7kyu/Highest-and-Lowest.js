function highAndLow(numbers){
    const a = numbers.split(' ').map(Number)
    return `${Math.max(...a)} ${Math.min(...a)}`
}

// const a = '1 2 3 4 5'

// const a = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
// console.log(a.split('   '));
// console.log(a.split(' ').map(Number));
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// const angkaArray = a.split(' ').filter(item => item.trim() !== '').map(Number);

// console.log(angkaArray);

// cara orang lain 
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }