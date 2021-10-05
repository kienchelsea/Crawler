var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('lekien.txt', 'adsdsadsada!', function (err) {
  if (err) throw err;
  console.log('Saved!');
  const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(1,4);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
console.log('Saved!');
  const array1 = [1, 4, 9, 16];

  
});
