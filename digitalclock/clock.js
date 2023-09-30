let a;
let time;
let date;
setInterval(() => {
    function newDate(){
        a= new Date();
        date= a.toLocaleDateString();
        time= a.getTime() + " : "+ a.getMinutes()+ " : "+a.getSeconds();
        
        document.getElementById('text').innerHTML=time +" on "+ date;
    }
}, 1000);