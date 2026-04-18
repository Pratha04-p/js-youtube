 const name = "priyam"
 const repoCount = 5

 //console.log(name + repoCount + "value")

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
 const gameName = new String("pratha-pp")

 /*console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(5));
 console.log(gameName.indexOf('p'));*/

 const newString = gameName.substring(-8, 4)
 console.log(newString);

 const anotherString = gameName.slice(-8, 5)
 console.log(anotherString);
 
 const newStringOne = "     pratha     " //unnecessary space
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://pratha.com/pratha%20pandey"

 console.log(url.replace('%20', '-'))

 console.log(url.includes('z'));
 console.log(gameName.split('-'))