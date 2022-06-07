// click on the button reset to start the game 

const btn_start =document.getElementsByClassName("btn__reset");

const  qwerty= document.getElementById("qwerty");

 btn_start[0].addEventListener("click",() => {
   
    const overlay = document.getElementById("overlay");
    overlay.style.display ="none"

});


//Create a Phrases array that stores 5 strings 
var phrases= ["Nermine plays with Haroun","Haroun loves Nermine","Mom is cooking dinner","Dad is watching TV","Haroun is sleeping"];

//create a fucntion to generate a random phrase from an array
//adjust this function 

function getRandomPhraseAsArray(arr){

var randomNumber = Math.floor(Math.random()*arr.length);
var randomPhrase = [];

if (randomNumber < 5){
    randomPhrase =arr[randomNumber];
    return  randomPhrase ;
}
else {
    return arr[5];
}
    
    

 
    


}
var randomPhrase = getRandomPhraseAsArray(phrases);
console.log(randomPhrase);
//addPhraseToDisplay will loop the arr and display everyletter on the screen

function addPhraseToDisplay(arr){
          
    for (let i=0 ; i < arr.length ; i++ ){//begin for

    var list = document.querySelector("#phrase ul");
        //create an li node
    var li = document.createElement("li"); 
        // Create a text node:
        li.textContent = arr[i];
        if ( arr[i] == " "){
            li.className ="space";
        }
        else{
        li.className ="letter"

        }
        // Append the "li" node to the list:
        list.appendChild(li);
        
        }//fin for
console.log(li);
        


}//fin de la fonction addPhraseToDisplay

addPhraseToDisplay(randomPhrase);


//checkLetter function

function checkLetter(button) {

    const buttonLetter =button.textContent;
    const word = document.getElementsByClassName("letter");
    
    const match =null;

    for(let i=0 ; i < word.length ; i++){

        const li = word[i];
        
        if (buttonLetter === li.textContent){
            li.className ="show";
            match = buttonLetter;
        }


    }

    return match;


}


("click", (event) => {

    const button =event.target;

    if (button.tagName === "BUTTON"){

        console.log("a buttton");
    }



});





