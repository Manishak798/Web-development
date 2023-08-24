var composeTweet=prompt("Compose a tweet..");
var charLeft=document.write("your tweet count "+ composeTweet.length +" remaining Characters "+ (150-composeTweet.length));
charLeft=150-composeTweet.length;
if(charLeft==150){
    document.write("Your tweet: ");
    document.write(composeTweet);
}else if(charLeft<150 && charLeft>0){
 var newtweet= Boolean(prompt("Do you want to write more ?"));
 if(newtweet==true){
 var tweet=prompt("Enter remaining part..");
 var orignalTweet= document.write(composeTweet+tweet);
 }else{
    document.write(composeTweet);
 }
}else{
    document.write(composeTweet.slice(0,150));
}