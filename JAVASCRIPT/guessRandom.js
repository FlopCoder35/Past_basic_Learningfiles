const max=prompt("enter max no :");
const random=Math.floor(Math.random()*max)+1;
const guess=prompt("guess the integer ");
while(true){
    if(guess==random){
        console.log("you guessed right ",random);
        break;
    }
    else{
        guess=prompt("guess is wrong try again ");
    }
}