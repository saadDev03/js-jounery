//*********************************Object  ******************************************************** */
//==> object is  a speacial container that hold multiple value like key value pair and 
// also contain function we can say method (functions inside objects) to perform action . 
 //==> The properties of an object can be changed (objects are mutable).
//==> We can access properties using dot notation (.) or bracket notation [""].


// const car = {
//     name  : "bmw" ,
//     "company name  " : "america" ,
//     model: 2022 ,
//     color : "black" ,
//     weight :"22kg"
// }

// car.name = "ferrari"
// console.log(car);
// console.log(car["company "]); //==> in object  all key stored in string even we right "" or not we   use bracket notation [""] 
// // when we cannot acces . notation 

//==> how to define  a object
//==> There are 4 main ways:
//==> object literal  ==> object literals are also called object initializers.
//==> using new ()
//==> constructor //==> singleton
//==>  Using Class (ES6)

// 1 object literal
//==> it has list of key value pair.

// const  person = {
//      name : "ali" ,
//     adress : "lahore" ,
//     gmail : "ali@google.com" ,
// } ;


// console.log(person);



//==> This example creates an empty JavaScript object, and then adds 4 properties:

// const person = {

// }

// person.name ="ali" ,
//     person.adress ="lahore" ,
//     person.gmail = "ali@google.com" ,

// console.log(person);

// 2  //==> using new () keyword
//==> We can say: "new Object() is another way to create an object, instead of using object literal {}

// let product = new  Object( ) ;

// Add properties 
// product.name = "ali"
// product.color = "white"

// console.log(product);

//==>But, there is no need to use new Object()
//==> For readability, simplicity and execution speed, use the object literal method.
