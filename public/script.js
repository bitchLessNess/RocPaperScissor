const rock = document.getElementById("rockBtn")
const paper = document.getElementById("paperBtn")
const scissor = document.getElementById("scissorBtn")
const buttons = document.getElementById("buttons")

//creating the computer's choice
let isClicked;


function unhideComp() {
    const compChoice = Math.floor(Math.random() * 3 + 1);
    if (compChoice == 1) {
        document.getElementById("image1").classList.remove("hidden")
    }
    else if (compChoice == 2) {
        document.getElementById("image2").classList.remove("hidden")
    }
    else {
        document.getElementById("image3").classList.remove("hidden")
    }
    setTimeout(() => {
        if (compChoice == 1) {
            document.getElementById("image1").classList.add("hidden")
        }
        else if (compChoice == 2) {
            document.getElementById("image2").classList.add("hidden")
        }
        else {
            document.getElementById("image3").classList.add("hidden")
        }
    }, 3000)
}

function unhidePlayer(isClicked) {

    if (isClicked == "rock") {
        document.getElementById("player1rock").classList.remove("hidden")
    }
    else if (isClicked == "paper") {
        document.getElementById("player1paper").classList.remove("hidden")
    }
    else if (isClicked == "scissor") {
        document.getElementById("player1sicssor").classList.remove("hidden")
    }
    setTimeout(() => {
        if (isClicked == "rock") {
            document.getElementById("player1rock").classList.add("hidden")
        }
        else if (isClicked == "paper") {
            document.getElementById("player1paper").classList.add("hidden")
        }
        else if (isClicked == "scissor") {
            document.getElementById("player1sicssor").classList.add("hidden")
        }
    }, 3000)
}


// hide button 
function hideBtn() {
    buttons.classList.add("hidden2");

    setTimeout(()=>{
        buttons.classList.remove("hidden2");
    }, 3000)
}

// Rock : when the player chooses the rock button 
rock.addEventListener('click', () => {
    console.log("click")
    isClicked = "rock";

    unhideComp()
    unhidePlayer(isClicked)
    hideBtn()

})

// paper : when the player chooses the rock button 
paper.addEventListener('click', () => {
    console.log("click")
    isClicked = "paper";

    unhideComp()
    unhidePlayer(isClicked)
    hideBtn()

})

// scissor : when the player chooses the rock button 
scissor.addEventListener('click', () => {
    console.log("click scissor")
    isClicked = "scissor";

    unhideComp()
    unhidePlayer(isClicked)
    hideBtn()
})
