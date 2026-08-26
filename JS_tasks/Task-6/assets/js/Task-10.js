let word = "javascript";
let target = "s";

for (let a = 0; a < word.length; a++) {
  if (word[a] === target) {
    console.log('Character Found:', target);
    break;
  }
}