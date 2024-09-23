function solution(str){
    // percobaan pertama
    // if(str.length % 2 == 1) {
    //     str += '_';     
    // }

    // percobaan kedua
    (str.length % 2 == 1) ? str += '_' : str;
    
    return str.split(/(.{2})/).filter(Boolean)
}

console.log(solution('asdc'));

// catatan:
// split memisahkan string berdasarkan koma. kalau gak ada bisa dengan cara yang saya lakukan di atas
// let str = "Halo,dunia,ini,adalah,contoh";
// let arr = str.split(","); // Memisahkan string berdasarkan koma
// console.log(arr); // Output: ["Halo", "dunia", "ini", "adalah", "contoh"]

// fungsi filter(Boolean). menghapus golongan kosong
// let arr = [0, 1, 2, "", "hello", null, undefined, NaN];
// let filteredArr = arr.filter(Boolean);
// console.log(filteredArr); // Output: [1, 2, "hello"]