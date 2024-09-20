// function getGrade (s1, s2, s3) {
//     let a = s1 + s2 + s3;
//     let b = a / 3

//     // if(b >= 90) {
//     //     return 'A';
//     // } else if(b < 60) {
//     //     return 'F';
//     // } else if(b < 70) {
//     //     return 'D';
//     // } else if(b < 80) {
//     //     return 'C';
//     // } else if(b < 90) {
//     //     return 'B'
//     // }

//     return (b >= 90) ? 'A' : (b >= 80) ? 'b' : (b >= 70) ? 'C' : (b >= 60) ? 'D' : 'F'
//   }

function getGrade (s1, s2, s3) {
    let a = (s1 + s2 + s3) / 3;
    return (a >= 90) ? 'A' : (a >= 80) ? 'B' : (a >= 70) ? 'C' : (a >= 60) ? 'D' : 'F'
}