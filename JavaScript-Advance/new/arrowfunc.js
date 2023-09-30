//in javascript we write funciton like
// function sum(a,b){
//     return a+b;
// }
// let result= sum(5,15);//function call
// console.log(result);
//there is another method to make functions in javascripts like by using arrow functions
//they shorten the code and useful when we want to insert functions in between
sum=(a,b)=>{
    //return "hello";
    return a+b;
}
let result= sum(5,15);//function call
console.log(result);