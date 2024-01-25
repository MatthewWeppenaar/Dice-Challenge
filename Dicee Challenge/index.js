var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",diceImage);
var diceImage2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",diceImage2);
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 wins🚩";
}
else if(randomNumber1<randomNumber2){

    document.querySelector(".container h1").innerHTML = "🚩Player 2 wins";

}
else{
    document.querySelector(".container h1").innerHTML = "Its a tie";


}