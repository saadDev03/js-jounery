let  obj1 = {
    name :  "ali" ,
    address : "lahore"
}
  
obj2 = obj1




obj2.name = "asghar " 

let x  = 4 ; 
y = x
y = 3






// stack memory (primmitive)  it store simple value  
// it store value directly 
// Each variable has its own memory location  
// it store in stack memeory
// changing one variable does not effect other
// it compare value 
// it copy the direct value 

// heap memory (non-primitive) 
// it store the reference
// Each variable holds a reference to the same memory location.” 
// it compare reference
//************************************************************************ */
// string written  inside `` are tempelate string or template literal (``)  backticks 
// in backticks there a  string interpolation process and placeholder we can inserted varaible and expression into string  
// in backticks we can do not use /n for nwe line 
//++++++++++++++++++++++++++++++++++++++++++++++++//
//string-Method//
//A method is a function that is stored inside an object and is used to perform an action on that object.
// string method A string method is a built-in function that lets you change or check a string.
//A built-in method is a function already provided by JavaScript — you don’t have to create it yourself
//Because strings are immutable, string methods always return a new string.
//Srting  method does not change the original value.
//It creates a new value (usually a primitive) and returns it
// immutable mean Once a value is created, you can’t change it    you can only make a new one .
//In string object javascript give string to index based acces like array but it is not array it work similar for example we cannot 
// change value like array we can  acces value 
//  in primitive primitive sring have index but javascript hand it internally 
//  javascript wrap primitive string into object string automatically  this is calles autoboxing 
// string object lokk like object in console but it value is still immutable 
//Technically, it is a property — because everything inside an object in JavaScript is stored as key-value pairs.
// In string objects, the index behaves like a property key
 //But it is used like an index (like an array)
//  Concept	                      Explanation
// String Method	              A method built for string values (like .toUpperCase(), .length)
// Who wraps the string?	       JavaScript automatically wraps the primitive string
// Why?	                           Because methods only work on objects, and strings are primitives
// Is the method responsible?	   ❌ No. The method doesn't wrap anything — JavaScript does it 

//charAt() is a method because it is a function attached to the string object.

//A method is a function that belongs to an object (like a string, array, etc.).
// So yes — charAt() is a built-in function, but when used on a string like name.charAt(), it becomes a method.l
// charAt is a function

// It is stored inside String.prototype

// Because it’s inside an object, we call it a method

// Function	         A block of code that does something
// Method	        A method is a function that is stored inside an object and is used to perform an action on that object.
// String Method	A built-in function that is stored in the String object

// A string method is just a function stored inside the String object, so we call it a method — b
// ut it's still a function at its core.

// Feature   	         Function	                                               Method
// What it is	       A block of code that runs when you call it           	A method is a function that is stored inside an object and is used to perform an action on that object.
// Stands alone?	    ✅ Yes, works by itself	                              ❌ No, it is part of an object
// How to call	        Just use the name: greet()	                           Use the object: person.sayHello()
// Example	            function greet() { }	                                  person.sayHello = function() { }

//Metod for extacting charatcter charat ,charcodeat, charcodepoint , at '
// For extarting part slice , substring, substr(old)==> slice, it cancont swap the value , it support negative value   , substing it swap the value ,
//  if give negative value javascript covert to zero automatically
// it is same as slice it take two parameter the start position and the differece is the second parameter take lenght of exerted par  
//Length means how many characters to take — not where to stop.
// ==> padstart is used to add extra  text before of string (lenght , "string")
// padend is used to add extra text after of string 
//padding mean addind extra character to a string 
// padStart() look the size of original string writeen the string written
//  inside variable or directly it check the how long string then add padding if need 


// let text =    "hello"    ;

//  console.log(text.padStart(8 , "add")) ;


// let text =    "hello"    ;

//  console.log(text.padEnd(8 , "add")) ;

// ==> repaet method repeat the string multiple times 

// let rep = "abc"  ;
// console.log(rep.repeat("abc"));

//==> replace method it can  find the part of  string and change it something else ti has two parameter (search value , new value) 
// it can  only change the first match 


// let replace = "hellhellhello" ;
// console.log(rep;ace.replace( "hell" , "P") );


//  the replaceAll it can change all match

// let replace = "hellhellhello" ;
// console.log(replace.replaceAll( "hell" , "P") );

// ==> split method is used to convert string into array based on "space" , "," , "e" space , symbol , character split mean  brak 
// the string into smaller  part and put them  into  the array it has two parameter (seperator , lenght) lenght mean how many
// value ti return 

// let spli_string = "heelo  , byy , word"
// console.log(spli_string.split("," , 3));

// ==> include is used to check if a string contain a word , letter or a part it return true or false 


// let score = "ten , tewenty"

// console.log(score.includes("good"));

//++++++++++++++++++++++++++++++++++++Sting Search Method++++++++++++++++++++++++++++++++++++++++++++++++++++++++// 
//==> indexof check left to right and gives the first mathing posion 
// let var_name = "hello ,hello" ;
// console.log(var_name.indexOf("h"));

//==> it chech from right to left and give last matching position
// let last = "back ,bakward"
// console.log(last.lastIndexOf("b"));

//==.SEARCH METHOD it check left to right and give position of first match it more powerful than index it can also 
//  regular  expression to search  
 
// let text = "Please locate where 'locate' occurs!";
// text.search(/locate/);

//==> match method find part of string and return them into array it can used regexp
//If a regular expression does not include the g modifier (global search), match give output like
//  match object it is a special type of array give extra information ,  
// match() will return only the first match in the string.

// let match_var = "The rain in SPAIN stays mainly in the plain" ;
//  console.log(match_var.match("ain"));
 
//==> matchall() return an iterator of all matches of  a rugelar exp in string 
//==>iterator is  a tool in javascript that allow to go through in each item one by one in a collection like
//  array,string ,object etc
// Deep technical Defination 
//An iterator is a special object that has a .next() method.
// Each time you call .next(), it gives you the next value in the sequence and tells you if it’s done.
// iterator give value step bt step
// Where we use Iterators:
// In loops: for...of uses iterators
// In methods like: .matchAll(), Map, Set
// When working with Generators (advanced topic)
// we cause  iterator manually


// let score = "The rain in SPAIN stays mainly in the plain"
// let result = score[Symbol.iterator]();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());


// iterator is lazy tool gives valus one by one using .next()
//Because an iterator is lazy — it doesn’t give you everything immediately.
// You have 2 ways to use it:
//They're used in loops (for...of) and can be converted to arrays

// use in for..of

// for(let char of "hi"){
//   console.log(char);
  
// }

//using spread mean coverting to array 

// let name = "hello"
// let result = [...name]
//console.log(result);

// using matchall() return an iterator 
// when using manually it an the reult is iterator it give value but exta info because using .matchall and done: true/false
// when when we use loop it give special array like object 
// when  convert to array  it give array  so it is  array You are using the spread syntax, which 
// pulls each match out of the iterator, and puts them into an array.


//  let arr = "the rainy dar the  rain and rain in lahore is full of rain" ;
//  let result = arr.matchAll(/r/g)
//  console.log(result.next());

 

// for(let match of result){
//   console.log(match);
  
// }


// console.log([...result]);


// include give true or false if the string has the  specified value 

// let = score = "the good day"
// console.log(score.includes("good"));

// ==> start with() return true if the string has specified value 
//==>lenght mean check the first 12 char startswith  you


// let game = "You are using the spread syntax, which pulls each match out of the iterator, and puts them into an array."
// console.log(game.startsWith("You"));
// console.log(game.startsWith("You" , 12));


//==> endWith() return true if the string end with specified value 
//==> lenght mean check the first 12 char end with you

//  let game = "You are using the spread syntax, which pulls each match out of the iterator, and puts them into an array."
// console.log(game.endsWith("array."));
// console.log(game.endsWith("You" , 12));










 


 
 









 

 

