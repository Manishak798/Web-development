//0,1,1,2---
var number;
function fibonacciSeries(){
     var output=[];
    var fib_0=0;
    var fib_1=1;
    var fib_n;
     output.push(fib_0);
     output.push(fib_1);
     for(i=2;i<=10;i++){
        fib_n=fib_0+fib_1;
        output.push(fib_n);
        fib_0=fib_1;
        fib_1=fib_n;
     }
     return output;
     
}
var result=fibonacciSeries();
console.log(result);