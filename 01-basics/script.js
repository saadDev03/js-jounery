//******************** Datatypes  ********************************* */
//==>datatype tell the javascript  which type of vlua the vriable hold
//==> string "abc"
//==> number 2 to power 53
//==> boolean 
//==> undefind
//==> null
//==> bigint / n
//==>Symbol
//==> object / object has teo type built-in , user defined 

//==>  to acces data in varaible in this base datatype has two  categories primitive  , non-premitive


//***************************Primitive**************************************** */

//==> javascript save program in memeory so it has two type stack ,heap 

// stack memory (primmitive)  it store simple value  
// it store value directly 
// Each variable has its own memory location  
// it store in stack memeory
// changing one variable does not effect other
// it compare value 
// it copy the direct value 

let x  = 4 ; 
y = x
y = 3
console.log(y);


// heap memory (non-primitive) 
// it store the reference
// Each variable holds a reference to the same memory location.” 
// it compare reference

let  obj1 = {
    name :  "ali" ,
    address : "lahore"
}
  
obj2 = obj1




obj2.name = "asghar " 





//***************** String Template ,Template Literals ***************************** */
//==> string written  inside `` are tempelate string or template literal (``)  backticks 
//==> in backticks there a  string interpolation process and placeholder we can inserted varaible and expression into string  
//==> in backticks we can do not use /n for  we line 
//==> backticks allow to both single an double quotation inside string   `  "good" ' bye'     `

// let str = " good bye "
// console.log(`good  ${str} `);

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

//==>Metod for extacting charatcter charat ,charcodeat, charcodepoint , at '
// it extract tha char  at that posiotion

// let val = "httlo"
// console.log(val.charAt(2));

//==> it extact the unicide of char at position

//  let val = "httlo"
//  console.log(val.charCodeAt(2));

//==> it extact the unicide of char at position and emoji 

//  let val = "httlo"
//  console.log(val.codePointAt(4));

// it extract tha char  at that posiotion but it support neg value 
//  let val = "httlo"
//  console.log(val.at(-4));

//==> properpty[] it is same as array but it work different we cannot change the value we can access


// let acces = "javavscript"
// // acces[0] = "h" ==>  it canonot work string is immutable
// console.log(acces[0]); 
// console.log(acces);






//==> For extarting part slice , substring, substr(old)==> slice, it cancont swap the value
//==>  , it support negative value   , substing it swap the value ,




//==> For extarting part of string it has two parameter star  position , end position end not included


// let score = "hello world bye "
// console.log(score.slice( -1 , 5));

//==>For extarting part of string it has two parameter star  position , end position end not included but
//  when can swap value and it can support negative value  it javascript convert to zero

// let score = "hello world bye "
// console.log(score.substring(-1, 3));


//==>it is same as slice but it has two parameter star position and lenght 
//==>Length means how many characters to take — not where to stop.

// let score = "hello world bye "
//  console.log(score.substr(4 , 7));


//==> concat() is used to join two string

// let name = "good"
// console.log("helolo" .concat( name));


//==> touppercase()  , tolowercase()
//  upppercase() method is used to conver all alphbet character to uppercase

// let upper = "good"
// console.log(upper.toUpperCase());


//==>  tolowercase is used to convert all alphbet character to loewercase

//  let upper = "Good"
// console.log(upper.toLowerCase());


 //==> .isWellFormed() return true if the string is well formed otherwise it return false 
 //  A string is not well formed if it contains lone surrogates. and return false 
 //==> javascript saves text into memmory in unicode 0,1 like t has unicode 123  so emoji use two unicode pair
 //  are /ud4545/w4354354 so first is high surrogates and second low surrogates 



    // let name = "heelo"
    // console.log(name.isWellFormed(name));
    
//  let name = "heelo  \uD800" ;
//     console.log(name.isWellFormed(name));
    

//==> toWellFormed() is used to check the string if the string is broken and lone surrogates it replace them  
// into Unicode replacement character (� ) .


// let replace = "hello  \uD800 "
// console.log(replace.toWellFormed());

//==> trim is used to remove white space before and after string new line not middle space  
// it has  trimstart , trim end shorthand trim() 

// let score = "  good    "
// console.log(score.trim());



// ==> padstart is used to add extra  text before of string (lenght , "string")
// padend is used to add extra text after of string 
//padding mean addind extra character to a string 
// padStart() look the size of original string writeen the string written
//  inside variable or directly it check the how long string then add padding if need 


// let text =    "hello"    ;

//  console.log(text.padStart(8 , "wed"));
 


// let text =    "hello"    ;

//  console.log(text.padEnd(8 , "add")) ;

// ==> repaet method repeat the string multiple times 

// let rep = "abc"  ;
// console.log(rep.repeat(5));


//==> replace method it can  find the part of  string and change it something else ti has two parameter (search value , new value) 
// it can  only change the first match 


// let repo = "good , good , bye "
// console.log( repo.replace("good " , "g"));

//==>   To replace case insensitive, use a regular expression with an /i flag  we can use /g

// let  logged  = "Hello , hello, good , dof"
// console.log(logged.replace(/hello/i , "bye"));


//==> replaceall() allow to replace all matches we can also use regular expression  

//     let match = "hello , hello , hello , good , bye"
// console.log(match.replaceAll(/hello/g , "g"));





// ==> split method is used to convert string into array based on "space" , "," , "e" space , symbol , character split mean  brak 
// the string into smaller  part and put them  into  the array it has two parameter (seperator , lenght) lenght mean how many
// value it return 


// let swap = "hello , bye"
// console.log(swap.split("," , 4 ));



//++++++++++++++++++++++++++++++++++++Sting Search Method++++++++++++++++++++++++++++++++++++++++++++++++++++++++// 
//==> indexof check left to right and gives the first mathing posion 

// let something = "helo , hello , bad"
// console.log(something.indexOf("h"));


//==> it chech from right to left and give last matching position
// let last = "back ,bakward"
// console.log(last.lastIndexOf("b"));

//==.SEARCH METHOD it check left to right and give position of first match it more powerful than index it can also 
//  regular  expression to search  
 
// let text = "Please, locate ,where,locate, occurs!";
// console.log(text.search(/Locate/i));


//==> match method find part of string and return them into array it can used regexp
//If a regular expression does not include the g modifier (global search), match give output like
//  match object it is a special type of array give extra information ,  
// match() will return only the first match in the string.

// let match_var = "The rain in SPAIN stays mainly in the plain" ;
//  console.log(match_var.match(/ain/g));
 
 
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
// when using manually  so the result  is iterator object  it give value but exta info because using .matchall and done: true/false
// when when we use loop it give special array like object 
// when  convert to array  it give array  so it is  array You are using the spread syntax, which 
// pulls each match out of the iterator, and puts them into an array.


//  let arr = "the rainy dar the  rain and rain in lahore is full of rain" ;
//   let result = arr.matchAll(/ain/g)

 
//  for(let match of result){
//    console.log(match);
  
//  }


//  console.log([...result]);


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










 


 
 









 

 

