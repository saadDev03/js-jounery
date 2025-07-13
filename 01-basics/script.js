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
//A method is a function that we use on objects,
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
// Is the method responsible?	   ❌ No. The method doesn't wrap anything — JavaScript does it internally

 let str1 = new String("helo world") ;
 

 console.log(str1[2]);
 
 
   











 

 

