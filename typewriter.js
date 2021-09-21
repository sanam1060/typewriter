
let sentence = "hello there from lighthouse labs";
sentence = sentence + '\n';
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }
  , delay);
  delay += 50;
}
