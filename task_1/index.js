const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Type some string -> ', str => {
  const revercedStr = str.split('').reverse().join('');
  console.log(revercedStr);
  readline.close();
});
