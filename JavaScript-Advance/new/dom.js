document.getElementById('click').style.background=("red");
document.getElementById('click').style.border=("3px solid blue");
let element=document.getElementsByClassName("para");
for(var i=0;i<element.length;i++){
element[i].style.color="red";
}/*whenever selecting whole string itrate through to change color of every letter*/
let btn = document.getElementById('click');
btn.style.color="lavender";
let myqry= document.querySelector("h1");/*work as css select particular query to change its work agr selector all krege give all query related*/
myqry.innerHTML="NEW CONTENT...";
myqry.style.color="brown";
let divc=document.getElementsByClassName("container");
divc[0].style.background="cyan";/*at location it will change the color*/
divc[0].style.border="3px solid black";
divc[0].style.padding="15px";
divc[0].style.margin="13px 0";
let divd=document.getElementsByClassName("containe");
divd[0].style.background="pink";
divd[0].style.padding="10px";
divd[0].style.border="3px solid black"; 
divd[0].style.height="50px";
tn= document.getElementsByTagName('div');
createElement=document.createElement('p');
createElement.innerHTML="this is a new paragraph.";
tn[0].appendChild(createElement);
createElement2=document.createElement('b');
createElement2.innerHTML="this is a new bold paragraph.";
tn[0].replaceChild(createElement2,createElement);
/*Event listners in javascript*/
window.onload=function(){
    alert('loaded...');//on loading function
}
function clicked(){
    console.log('button was clicked');//button clicking funtion
}
// seccontainer.addEventListener('click', function(){
// console.log("container was clicked");
// })// method 1 direct id banake kro
let firstContainer= document.querySelector('.container');
firstContainer.addEventListener('click', function(){
    console.log("click hua");//method 2 var me save kro then mainuplate kro
})
let prevHTML= document.querySelector('.container');
// firstContainer.addEventListener('mouseover', function(){
//     prevHTML.innerHTML="<b>New content</b>";//mouse se click hote content change 
// })
// firstContainer.addEventListener('mouseout', function(){
//     prevHTML.innerHTML=createElement.innerHTML;//mouse se click hote content change 
// })
firstContainer.addEventListener('mouseup', function(){
    prevHTML.innerHTML="<b>New content</b>";
    //console.log('mouse was clicked');//mouse se click hua
})
firstContainer.addEventListener('mousedown', function(){
    
    firstContainer.innerHTML="hello👋👋👋";
    //console.log('mouse click down');//mouse se click hata
})
//set timeout and set interval --- 
/*settimeout is like setting an alarm clock in js. you tell it to wait for a certain amount of time and when the time is up, it will perform a specific task, like ringing the alarm*/
log=()=>{
    alert("log is called means set time out fired.")
}
setTimeout(log,5000);
/*set interval is like setting a recurring alaram clock. you tell it to perform task repetedly at a regular interval , like in every 5 sec, just like a snooz button on an alarm clock*/
let clr=setInterval(log,6000);
//if you want to stop time interval use clear interval it is like a stop button for the alarm that is beeping
clearInterval(clr);//pass the name and it will stop it here 5000 means 5000 miliseconds
/*local storage in js--
it is like a small secret storage space in our web browser where websites can keep things, like our prefrences, or settings so next time when we visit the website, it already knows what we like, its handy to make user experience personalized*/
const divs = document.getElementsByTagName('div');
// Define a function to change the background color of the first div element
function changeBackgroundColor() {
    divs[0].style.background = "orange";
}

// Call the function to change the background color
changeBackgroundColor();

// You can't store a function in localStorage, but you can store a string
// representing the color "orange" for example.
//localStorage.setItem('backgroundColor', 'orange');

