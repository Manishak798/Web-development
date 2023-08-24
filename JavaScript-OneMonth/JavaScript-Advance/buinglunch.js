function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        var output= Math.floor(Math.random()*names.length);
        var randomPerson=names[output];//creating a variable that points toward the position of array and print values
        return randomPerson+" is going to buy lunch today!";
        
        //here we can generate random names for the person to buy us lunch
        
    
    
    /******Don't change the code below*******/    
    }
    var result=whosPaying();
    console.log(result);