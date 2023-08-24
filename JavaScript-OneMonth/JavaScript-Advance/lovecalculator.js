function calculateLove(){
    var love = Math.random();
    love=love*100;
    var result =(Math.floor(love)+1);
    return result;
}
var yourName=document.write(prompt("Enter your name")+"  &#128152 ");
var yourLoveName=document.write(prompt("Your loved ones name: "));
 var result1=calculateLove();

document.write("  ,You both are "+ result1 +"% compatible ");
//console.log(result1);
// var love = Math.random();
// love=love*100;
// var result =(Math.floor(love)+1);
// console.log(result);
