
function fizzbuzz(){
var output=[];
var count=1;

while(count<=50){
      
      if(count%3===0 && count%5===0){
         output.push("FizzBuzz");
        }
      else if(count%3===0){
         output.push("Fizz");
        
      }else if(count%5===0){
         output.push("Buzz");
        
      }else{
         output.push(count);
        
      }
      count++;
   
       }
       return output;//returnn function immediately exits the function
       
}


var result=fizzbuzz();
console.log(result);
