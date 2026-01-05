const rock = document.getElementById("rockBtn")
const paper = document.getElementById("paperBtn")
const scissor = document.getElementById("scissorBtn")
const buttons = document.querySelectorAll(".btn")
const result = document.getElementById("result");
const resText = document.getElementById("resText")

const scoreCard = document.getElementById("scoreBoard")

let count = 0;




//creating the computer's choice
let isClicked;

const res = () => {
    setTimeout(() => {
        result.classList.remove("hidden")
    }, 3000);
    setTimeout(() => {
        result.classList.add("hidden")
    }, 4000);

}


const compChoice = Math.floor(Math.random() * 3 + 1);

function unhideComp() {

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
// function hideBtn() {
//   buttons.forEach(btn => {
//     btn.classList.add("hidden2");
//   });

//   // show after 5 seconds
//   setTimeout(() => {
//     buttons.forEach(btn => {
//       btn.classList.remove("hidden2");
//     });
//   }, 5000);
// }

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // hide all buttons
    buttons.forEach(b => b.classList.add("hidden2"));

    // show again after 5 seconds
    setTimeout(() => {
      buttons.forEach(b => b.classList.remove("hidden2"));
    }, 5000);
  });
});

// Rock : when the player chooses the rock button 
rock.addEventListener('click', () => {
    console.log("click")
    isClicked = "rock";

    unhideComp()
    unhidePlayer(isClicked)
   
    res()
    if (compChoice === 1) { resText.innerText = "It's a Draw" }
    else if (compChoice === 2) { resText.innerText = "You lost to paper" }
    else { resText.innerText = "You Won!!" }

})

// paper : when the player chooses the rock button 
paper.addEventListener('click', () => {
    console.log("click")
    isClicked = "paper";

    unhideComp()
    unhidePlayer(isClicked)
   
    res()
    if (compChoice === 1) { resText.innerText = "You won!!" }
    else if (compChoice === 2) { resText.innerText = "It's a Draw" }
    else { resText.innerText = "You lost to Scissor" }


})

// scissor : when the player chooses the rock button 
scissor.addEventListener('click', () => {
    console.log("click scissor")
    isClicked = "scissor";

    unhideComp()
    unhidePlayer(isClicked)
    
    res()
    if (compChoice === 1) { resText.innerText = "You Lost to Rock" }
    else if (compChoice === 2) { resText.innerText = "You Won!!" }
    else { resText.innerText = "It's a Draw" }

})
