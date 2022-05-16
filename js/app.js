// click on the button reset to start the game 

const btn_start =document.getElementsByClassName("btn__reset");
console.log(btn_start[0]);

 btn_start[0].addEventListener("click",StartGame);

 function StartGame(){
    console.log("button click");
    const overlay = document.getElementById("overlay");
    console.log(overlay);
 overlay.style.display ="none"

}
