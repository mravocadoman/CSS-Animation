let char = document.querySelector("img.hero");
let bubble = document.querySelector("img.wtf");
let arrow = document.querySelector("img.arrow");

let shakeButton = document.querySelector("#shake");
let jumpButton = document.querySelector("#jump");
let slideButton = document.querySelector("#slide");
let onejumpButton = document.querySelector("#onejump");
let fadeButton = document.querySelector("#fade");
let talkButton = document.querySelector("#talk");
let move30Button = document.querySelector("#move30");
let fallButton = document.querySelector("#fall");
let arrowButton = document.querySelector("#arrow");
let partyButton = document.querySelector("#party");

shakeButton.addEventListener('click', makeShake);
jumpButton.addEventListener('click', makeJump);
slideButton.addEventListener('click', makeSlide);
onejumpButton.addEventListener('click', makeOnejump);
fadeButton.addEventListener('click', makeFade);
talkButton.addEventListener('click', makeTalk);
move30Button.addEventListener('click', makeMove30);
fall.addEventListener('click', makeFall);
arrowButton.addEventListener('click', makeArrow);
partyButton.addEventListener('click', makeParty);

function makeShake(){
    console.log("make shake");
        char.classList.toggle("shakeCSS");
}

function makeJump(){
    console.log("make jump");
        char.classList.toggle("jumpCSS");
}


function makeSlide(){
    console.log("make slide");
        char.classList.toggle("slideCSS");
}

function makeOnejump(){
    console.log("make one jump");
        char.classList.toggle("onejumpCSS");
}

function makeFade(){
    console.log("make fade");
        char.classList.toggle("fadeCSS");
}

function makeTalk(){
    console.log("make talk");
        bubble.classList.toggle("talkCSS");
}

function makeMove30(){
    console.log("make move 30");
        char.classList.toggle("move30CSS");
}

function makeFall(){
    console.log("make fall");
        char.classList.toggle("fallCSS");
}

function makeArrow(){
    console.log("make arrow");
        arrow.classList.toggle("arrowCSS");
}

function makeParty(){
    console.log("make party");
        char.classList.toggle("partyCSS");
}