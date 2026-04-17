let score = "33ABC" //if value is null then answer will be 0 


console.log(typeof score);
   
//conversion of string to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber)


//"33"-> 33 //converted easily
//"33abc" -> //NaN
//true = 1; false = 0;
//1 converted to true and 0 converted to false 
//empty "" converted to false
//"pratha" converted to true

let marks = 33//ab isko string mein badalna hai toh ek naya variable banao fir string() mein iska naam daalo bas

let score = String(marks)
console.log(score);
console.log(typeof score)