const score = 400 
console.log(score);

const balance = new Number(1020.570) //new obj mein define kar raha hu jo number type ka hai.
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 22.27256

console.log(otherNumber.toPrecision(5 ));
console.log(otherNumber.toPrecision(1));


// ++++++++ Maths +++++++ //

console.log(Math)
console.log(Math.abs(-4.5)); //absolute turns - value to + only
console.log(Math.round(4.3));
console.log(Math.round(6.7)); //roundoff

console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));

console.log(Math.min(4, 89,1, 147))
console.log(Math.max(5, 89, 75, 79));


console.log(Math.random()) //give value always between 0 and 1

console.log(Math.random()*10);
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)