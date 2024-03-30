var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageSource1 = document.querySelectorAll("img")[0];
var imageName = "dice"+randomNumber1+".png";
var finalImageName = "images/"+imageName;
imageSource1.setAttribute("src",finalImageName);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = document.querySelectorAll("img")[1];
var imageName1 = "dice"+randomNumber2+".png";
var finalImageName1 = "images/"+imageName1;
imageSource2.setAttribute("src",finalImageName1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML  = "Draw";
}