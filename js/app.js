// click on the button reset to start the game 

const btn_start =document.getElementsByClassName("btn__reset");
const  qwerty= document.getElementById("qwerty");
const overlay = document.getElementById("overlay");
const hearts = document.getElementsByTagName("img");
const phraseTOdisplay = document.getElementsByClassName("letter");
const lettersPressed = document.getElementsByClassName("show");
const list = document.getElementsByTagName("ul");



//Create a Phrases array that stores 5 strings 
var phrases= ["nermine plays with haroun","haroun loves nermine","mom is cooking dinner","dad is playing with his phone","haroun is sleeping"];

//missed is the counter to check how many wrong guesses the player made 
var missed = 0;

//the title to display in the ovelay
const h2 = document.getElementsByClassName("title") ;


 btn_start[0].addEventListener("click",() => {
   
    overlay.style.display ="none";
    StartTheGame();

    if (btn_start[0].textContent === "TRY AGAIN"){     
        resetTheGame();


    }

});

function StartTheGame() {

    var randomPhrase = getRandomPhraseAsArray(phrases);
    console.log (randomPhrase);
    addPhraseToDisplay(randomPhrase);

}


function resetTheGame(){

        missed =0;
        const button = document.getElementsByTagName("button");
        const listItems = document.querySelectorAll(".letter,.space");

        // remove the li elements from the UL in the DOM
        for(let i = 0 ; i < listItems.length; i++ ){
            listItems[i].remove();
    
            }

        //generate new random pharse and display it on the screen

            var randomPhrase = getRandomPhraseAsArray(phrases);
            addPhraseToDisplay(randomPhrase);
            list[0].style.display = "";
            // console.clear;
            // console.log("reseting the game");
            // console.log(randomPhrase);

        for(let i = 0 ; i < hearts.length; i++ ){
            hearts[i].src = "images/liveHeart.png";
        }

        for(let i = 0 ; i < button.length; i++ ){
        button[i].classList.remove("chosen");
        button[i].disabled = false;

        }

        
        
}

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



//checkLetter function
function checkLetter(button) {

            const buttonLetter = button.textContent;
            const word = document.getElementsByClassName("letter");
            //Create a variable to store if a match is found and give it an initial value of null
            var match = null;

            for(let i=0 ; i < word.length ; i++){

                const li = word[i];
                
                if (buttonLetter === li.textContent){
                    //this will overwrite the existing class
                    // li.className ="show";
                    // To add new classes, without overwriting existing values, add a space and the new classes:
                    // element.className += " class1 class2";

                    li.className += " show";      
                    match = buttonLetter;
                        
                }


            }

            return match;


}



//  checkWin function is used to verify if the game is over and if the user won or lost the game 

function checkWin(){

   
    if (phraseTOdisplay.length === lettersPressed.length){
        
        //the user guessed the phrase correctly 
        //display the win overlay
            overlay.className = "win";
            h2[0].textContent ="You won great job";
            btn_start[0].textContent ="TRY AGAIN";
            overlay.style.display ="flex"; 
            list[0].style.display ="none";


        }

        if (missed >= 5 ){

                //the user made 5 wrong guesses
                //display the lose overlay
                overlay.className = "lose";
                h2[0].textContent ="better luck next time";
                btn_start[0].textContent ="TRY AGAIN";
                overlay.style.display ="flex";
                list[0].style.display ="none";

        }



}

 //add an event listener on the keyboard 
 qwerty.addEventListener ("click", (event) => {
 
    const button = event.target;
    
    if (button.tagName === "BUTTON"){
        button.className ="chosen";
        button.disabled = true;
        var match =checkLetter(button);
        
        if (match == null) {
            //the button pressed is not in correct so the guess is wrong,remove one of 
            //the heart images and increment the missed counter 
            hearts[missed].src = "images/lostHeart.png";
            if (missed <= 4 ){
                missed ++;    
            }
            
            
        }//end if match == null
        
        }
        checkWin(); 
 
 
 
 });
 




