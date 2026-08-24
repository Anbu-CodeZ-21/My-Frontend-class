let word = "javascript";
let target = "s";

for (let i = 0; i < word.length; i++) {
  if (word[i] === target) {
    console.log('Character Found:', target);
    break;
  }
}