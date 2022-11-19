var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTMl = this.innerHTML;

    buttonSound(buttonInnerHTMl);

    buttonAnimation(buttonInnerHTMl);
    })};

    document.addEventListener("keypress", function(event){
        
        buttonSound(event.key);
        buttonAnimation(event.key);
        console.log(event);
    
    });

    function buttonSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        default:
            console.log(buttonInnerHTMl);
    }
}

function buttonAnimation(currentKey){

    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");

    setTimeout(() => {
        activeKey.classList.remove("pressed");  
    }, 100);
}

//constructive function with new keyword
//how to add audio to JS
// function drumSounds(){
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// }
   
//constructor function
