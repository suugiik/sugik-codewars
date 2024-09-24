function canSnailReachEnd(length, speed, lengthIncreases) {
    // tahun = berapa menit
    const tahun = 525600;

    for(let i = 0; i >= 0; i++) {
        length += lengthIncreases;
        length -= speed
        if(length < 0) {return true}
        if(i >= tahun) {
            return false;
        }
    }
}

console.log(canSnailReachEnd(100, 2, 1));
