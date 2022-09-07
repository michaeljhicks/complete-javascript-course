/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';

let PI = 3.14;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

// double slash is how you comment out code
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(typeof year);

console.log(typeof null); // this returns object, but its a bug


// this is reassigning or mutating a value to a variable
let age = 30;
age = 31;

const birthYear = 1991;
console.log(birthYear)

var job = 'Programmer';
job = 'Teacher';

lastName = 'Hicks';
console.log(lastName);


// math operators
const now = 2037;
const ageMichael = now - 1984;
const ageAli = now - 1988;
console.log(ageMichael, ageAli);

console.log(ageMichael * 2, ageMichael / 10, 2 ** 3) // 2 ** 3 means to 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Michael';
const lastName = 'Hicks';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparison operators
console.log(ageMichael > ageAli);
console.log(ageMichael > 18);
console.log(ageMichael < ageAli);
console.log(ageMichael <= ageAli);
console.log(ageMichael >= ageAli);

const isFullAge = ageAli >= 18;
console.log(now - 1988 > now - 2019);

const now = 2037;
const ageMichael = now - 1984;
const ageAli = now - 1988;

console.log(now - 1988 > now - 2019);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5 // x = y = 10
console.log(x, y);

const averageAge = (ageMichael + ageAli) / 2
console.log(averageAge)
*/

const firstName = 'Mike';
const job = 'programmer';
const birthYear = 1984;
const year = 2037;

const mike = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(mike);

const mikeNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(mikeNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)