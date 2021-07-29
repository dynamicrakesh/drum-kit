var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButton; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerHTML = this.InnerHTML;

       makeSound( buttonInnerHTML);

       buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {
    switch(key) {
case "w":
    var Tom1= new Audio('sounds/tom-1.mp3');
    Tom1.play();
    break;
    case "a":
    var Tom2= new Audio('sounds/tom-2.mp3');
    Tom2.play();
    break;
    case "s":
    var Tom3= new Audio('sounds/tom-3.mp3');
    Tom3.play();
    break;
    case "d":
    var Tom4= new Audio('sounds/tom-4.mp3');
    Tom4.play();
    break;
    case "j":
    var crash= new Audio('sounds/crash.mp3');
    crash.play();
    break;
    case "k":
    var kick= new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;
    case "l":
    var snare= new Audio('sounds/snare.mp3');
    snare.play();
    break;

    default: console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey)
{
var activeButton = document.querySelector("." + currentKey );
activeButton.classList.add("pressed");

setTimeout(function() {
    activeButton.classList.remove("pressed");
},100);
}













