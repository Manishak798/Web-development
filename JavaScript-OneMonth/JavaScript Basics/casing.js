var yourName=prompt("Enter your name: ");
var greet=document.write("Greetings, "+ yourName.toUpperCase()+"<br>");
var greet2=document.write("Greetings, "+yourName.toLowerCase()+"<br>");
var greet3=document.write("Greetings, "+((yourName.slice(0,1)).toUpperCase())+(yourName.slice(1,yourName.length).toLowerCase()));