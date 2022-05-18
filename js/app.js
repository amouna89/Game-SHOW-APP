// click on the button reset to start the game 

const btn_start =document.getElementsByClassName("btn__reset");


 btn_start[0].addEventListener("click",() => {
   
    const overlay = document.getElementById("overlay");
    overlay.style.display ="none"

});


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
   
     
for (let i=0 ; i < arr.length ; i++ ){//begin for

console.log(arr[i]);
var list = document.querySelector("#phrase ul");
    //create an li node
    item = document.createElement("li"); 

    // Create a text node:
    const textnode = document.createTextNode(arr[i]);

   // Append the text node to the "li" node:
     item.appendChild(textnode);

     if (textnode == ""){
        item.className ="space";
        console.log("space");
        // Append the "li" node to the list:
    list.appendChild(item);

     }
     else{
    item.className ="letter"
    console.log("letter");
    // Append the "li" node to the list:
    list.appendChild(item);
     }
    
     
    }//fin for

}//fin de la fonction addPhraseToDisplay

addPhraseToDisplay(randomPhrase);

//var p = document.querySelector("p").textContent ="happy day"









