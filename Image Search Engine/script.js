function searchImage(){
    var a=document.getElementById("name").value;
    if(a=="bird"){
        var x = document.createElement("IMG");
        x.setAttribute("class","centr")
        x.setAttribute("src", "Bird.jpg");
        x.setAttribute("width", "350");
        x.setAttribute("height", "350");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }
    else if(a=="cat"){
        var x = document.createElement("IMG");
        x.setAttribute("class","centr")
        x.setAttribute("src", "cat.jpeg");
        x.setAttribute("width", "350");
        x.setAttribute("height", "350");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }
    else if(a=="ganesha"){
        var x = document.createElement("IMG");
        x.setAttribute("class","centr")
        x.setAttribute("src", "Ganesha.jpg");
        x.setAttribute("width", "350");
        x.setAttribute("height", "350");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }
    else if(a=="girl"){
        var x = document.createElement("IMG");
        x.setAttribute("class","centr")
        x.setAttribute("src", "girl.jpg");
        x.setAttribute("width", "350");
        x.setAttribute("height", "350");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }
    else if(a=="krishna"){
        var x = document.createElement("IMG");
        x.setAttribute("class","centr")
        x.setAttribute("src", "krishna.webp");
        x.setAttribute("width", "350");
        x.setAttribute("height", "350");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }
    else if(a=="wallpaper"){
        var x = document.createElement("IMG");
        x.setAttribute("class","centr")
        x.setAttribute("src", "wall.webp");
        x.setAttribute("width", "350");
        x.setAttribute("height", "350");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }else{
        document.write("error!!");
    }
    
}