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

  //+++++++++++++++++++++++++++++++FUNCTON++++++++++++++++++++++++++++++++++++// 
  //FUNCTION is block of code that perform a particular task when we call it 
   
// Built-in Function
// A function that is already provided by JavaScript.
// console.log("hello");
// "abc".toUpperCase()
// [a ,b ,c].push(b)
// alert("danger")

// User-defined Function
// A function that you create yourself.
//parameter A parameter is a variable in a function definition that receives a value.
//An argument is the actual value you pass to a function when calling or invoked  it.
 


 function sum( x , y ) { 
      return  x + y ;
      
      
     
 }

  let  value = sum(55 , 567) ;
  console.log(value);
  

 
  
 
 









 

 

