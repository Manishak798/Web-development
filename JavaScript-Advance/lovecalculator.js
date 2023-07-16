function calculateLove(){
    var love = Math.random();
    love=love*100;
    var result =(Math.floor(calculateLove)+1);
    return result;
}
// var yourName=prompt("enter your name: ");
// var yourLoveName=prompt("your loved ones name: ");
var result1=calculateLove();
//document.write("you both are "+ result1 +"% compatible.")
console.log(result1);
