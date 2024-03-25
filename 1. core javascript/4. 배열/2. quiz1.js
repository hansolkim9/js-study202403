
var scores = [100, 90, 80, 70, 60, 50];
var sum = 0;
var avg = 0;

for (i = 0 ; i < scores.length ; i++) {
    sum += scores[i];
}
avg = sum/(scores.length);
    
console.log(`총점: ${sum}점, 평균: ${avg}점`);


// for (var s of scores) {
//     sum += s;
// }