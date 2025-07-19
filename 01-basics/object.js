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

//==>An object method is a function stored as a property in an object.
//==>A method is a function definition stored as a property value.
// 
// const  person = {
//      name : "ali" ,
//     adress : "lahore" ,
//     gmail : "ali@google.com" ,
// 
     
        // object_fun : function name(params) {
        //     return this.name +   this.gmail ;

            
        //  }
     

    //  }

    //  adding function ouside curly bracket

    // person.fun = function ( ){
    //     return  (this.name + this.gmail) .toUpperCase() ;

    // }

    // console.log(person.name);

    //==> object can be nested

    // const person = {
//         name : "ali" ,
//      adress : "lahore" ,
//     gmail : "ali@google.com" ,

//     product : {
//         name : "car" ,
//         color : "white"
//     }

// }
//  let outerkey = "product"
//  let innerkey = "color"

//  console.log(person[outerkey][innerkey]);



    //+++++++++++++++   Display Object ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\
    // There are eight way of display object
    // 1. console.log() 
    // 2. Access individual properties
    //  3. Loop through the object (for...in)
    //  4. Convert object to a string using JSON.stringify()
    //  5. Show on Webpage (in HTML)
    //  6. Use Object.entries()
    //  7. Use Object.values() (only values
    // 8. Use Object.keys() (only keys)

    //==>1

    const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person);

//==> 2

console.log(person.name);

//==> 4
let result = JSON.stringify(person)
console.log(result);


//==> 5
// document.getElementById().innerHTML = person ;

//==> 6
    console.logobO(Object.entries(person));

//==> 7
console.log(Object.values(person));

   //==> 8
    console.log(Object.keys(person));


    

    
    
     
    
     
     








     

