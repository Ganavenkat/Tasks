const kelvin=293;//The forecast today is 293 Kelvin
const celsius=kelvin-273;//converting Kelvin to Celsius by subtracting 273 from the kelvin variable
let fahrenheit=celsius*(9/5)+32;//equation to calculate Fahrenheit
fahrenheit=Math.floor(fahrenheit);//rounding off
console.log(`\nThe Temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton =celsius*(33/100);
newton=Math.floor(newton);
console.log(`\nThe Temperature is ${newton} newton.`);