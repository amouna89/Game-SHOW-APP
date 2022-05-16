// click on the button reset to start the game 

const btn_start =document.getElementsByClassName("btn__reset");


 btn_start[0].addEventListener("click",StartGame);

 function StartGame(){
   
    const overlay = document.getElementById("overlay");
    overlay.style.display ="none"

}
//Create a Phrases array that stores 5 strings 
var phrases= ["Nermine","play","together","Haroun","Nice"];

//create a fucntion to generate a random phrase from an array

function getRandomPhraseAsArray(arr){

var randomNumber = Math.floor(Math.random()*arr.length);
var randomPhrase = [];


if (randomNumber <= arr.length){
    console.log(randomNumber);
    return  randomPhrase = arr[randomNumber];
 

}
else {
 
    return  randomPhrase = arr[5];


}
}
var randomPhrase = getRandomPhraseAsArray(phrases);
console.log(randomPhrase);
//addPhraseToDisplay will loop the arr and display everyletter on the screen

function addPhraseToDisplay(arr){
   var item="";
     
for (let i=0 ; i < arr.length ; i++ ){

console.log(arr[i]);

    //create an li node
    item = document.createElement("li"); 

    // Create a text node:
    var text = arr[i];
    const textnode = document.createTextNode(text);

   // Append the text node to the "li" node:
     item.appendChild(textnode);

     // Append the "li" node to the list:
    document.getElementById("list").appendChild(item);
      
}

}


addPhraseToDisplay(randomPhrase);







