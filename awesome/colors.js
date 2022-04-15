const colors = require('colors');

const choosenColor = colors.getRandomColor();
const bluecolor = colors.getBlue();

console.log(`Name: ${choosenColor.name} | Code: ${choosenColor.code}`);
console.log(`Blue Name: ${bluecolor.name} | Blue Code: ${bluecolor.code}`);
