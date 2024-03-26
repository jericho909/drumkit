const btnA = document.getElementById("a");
const btnS = document.getElementById("s");
const btnD = document.getElementById("d");
const btnF = document.getElementById("f");
const btnG = document.getElementById("g");
const btnH = document.getElementById("h");
const btnJ = document.getElementById("j");
const btnK = document.getElementById("k");
const btnL = document.getElementById("l");

const boom = new Audio("./static/sound/boom.wav");
const clap = new Audio("./static/sound/clap.wav");
const hihat = new Audio("./static/sound/hihat.wav");
const kick = new Audio("./static/sound/kick.wav");
const openhat = new Audio("./static/sound/openhat.wav");
const ride = new Audio("./static/sound/ride.wav");
const snare = new Audio("./static/sound/snare.wav");
const tink = new Audio("./static/sound/tink.wav");
const tom = new Audio("./static/sound/tom.wav");


document.addEventListener("keypress", function(event) {
    if (event.code == "KeyA") {
        boom.play();
        btnA.classList.add("pressedA");
        setTimeout(() => btnA.classList.remove("pressedA"), 100);
    }
});
btnA.addEventListener("click", function(e){
    boom.play();
    btnA.classList.add("pressedA");
    setTimeout(() => btnA.classList.remove("pressedA"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyS") {
        clap.play();
        btnS.classList.add("pressedS");
        setTimeout(() => btnS.classList.remove("pressedS"), 100);
    }
});
btnS.addEventListener("click", function(e){
    clap.play();
    btnS.classList.add("pressedS");
    setTimeout(() => btnS.classList.remove("pressedS"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyD") {
        hihat.play();
        btnD.classList.add("pressedD");
        setTimeout(() => btnD.classList.remove("pressedD"), 100);
    }
});
btnD.addEventListener("click", function(e){
    hihat.play();
    btnD.classList.add("pressedD");
    setTimeout(() => btnD.classList.remove("pressedD"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyF") {
        kick.play();
        btnF.classList.add("pressedF");
        setTimeout(() => btnF.classList.remove("pressedF"), 100);
    }
});
btnF.addEventListener("click", function(e){
    kick.play();
    btnF.classList.add("pressedF");
    setTimeout(() => btnF.classList.remove("pressedF"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyG") {
        openhat.play();
        btnG.classList.add("pressedG");
        setTimeout(() => btnG.classList.remove("pressedG"), 100);
    }
});
btnG.addEventListener("click", function(e){
    openhat.play();
    btnG.classList.add("pressedG");
    setTimeout(() => btnG.classList.remove("pressedG"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyH") {
        ride.play();
        btnH.classList.add("pressedH");
        setTimeout(() => btnH.classList.remove("pressedH"), 100);
    }
});
btnH.addEventListener("click", function(e){
    ride.play();
    btnH.classList.add("pressedH");
    setTimeout(() => btnH.classList.remove("pressedH"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyJ") {
        snare.play();
        btnJ.classList.add("pressedJ");
        setTimeout(() => btnJ.classList.remove("pressedJ"), 100);
    }
});
btnJ.addEventListener("click", function(e){
    snare.play();
    btnJ.classList.add("pressedJ");
    setTimeout(() => btnJ.classList.remove("pressedJ"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyK") {
        tink.play();
        btnK.classList.add("pressedK");
        setTimeout(() => btnK.classList.remove("pressedK"), 100);
    }
});
btnK.addEventListener("click", function(e){
    tink.play();
    btnK.classList.add("pressedK");
    setTimeout(() => btnK.classList.remove("pressedK"), 100);
})

document.addEventListener("keypress", function(event) {
    if (event.code == "KeyL") {
        tom.play();
        btnL.classList.add("pressedL");
        setTimeout(() => btnL.classList.remove("pressedL"), 100);
    }
});
btnL.addEventListener("click", function(e){
    tom.play();
    btnL.classList.add("pressedL");
    setTimeout(() => btnL.classList.remove("pressedL"), 100);
})