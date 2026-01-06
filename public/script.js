const rock = document.getElementById("rockBtn")
const paper = document.getElementById("paperBtn")
const scissor = document.getElementById("scissorBtn")
const buttons = document.querySelectorAll(".btn")
const playButtons = document.getElementById("buttons");
const result = document.getElementById("result");
const resText = document.getElementById("resText")
const main = document.querySelector("main");

const scoreCard = document.getElementById("scoreBoard")
const compChoice = Math.floor(Math.random() * 3 + 1);

var playerCount = 0;
var compCount = 0;
let playerChoice;



let totalClicks = 0;
const MAX_CLICKS = 3;



//creating the computer's choice
let isClicked;

const res = () => {
    setTimeout(() => {
        result.classList.remove("hidden")
    }, 3000);
    setTimeout(() => {
        result.classList.add("hidden")
    }, 5000);

}



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
    }, 2000)
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
    }, 2000)
}




buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // hide all buttons
        buttons.forEach(b => b.classList.add("hidden2"));

        // show again after 5 seconds
        setTimeout(() => {
            buttons.forEach(b => b.classList.remove("hidden2"));
        }, 4500);
    });
});

// Rock : when the player chooses the rock button 
rock.addEventListener('click', () => {
    console.log("click")
    isClicked = "rock";
    playerChoice = 1;
    unhideComp()
    unhidePlayer(isClicked)

    res()
    if (compChoice === 1) { resText.innerText = "It's a Draw" }
    else if (compChoice === 2) { resText.innerText = "You lost to paper"; compCount++; }
    else {
        resText.innerText = "You Won!!";
         playerCount++;
    }
    console.log("player:- ", playerCount, " Comp:- ", compCount)
})

// paper : when the player chooses the rock button 
paper.addEventListener('click', () => {
    console.log("click")
    isClicked = "paper";
    playerChoice = 2;

    unhideComp()
    unhidePlayer(isClicked)

    res()
    if (compChoice === 1) { resText.innerText = "You won!!";  playerCount++; }
    else if (compChoice === 2) { resText.innerText = "It's a Draw" }
    else { resText.innerText = "You lost to Scissor";  compCount++; }
    console.log("player:- ", playerCount, " Comp:- ", compCount)

})

// scissor : when the player chooses the rock button 
scissor.addEventListener('click', () => {
    console.log("click scissor")
    isClicked = "scissor";
    playerChoice = 3;

    unhideComp()
    unhidePlayer(isClicked)

    res()
    if (compChoice === 1) { resText.innerText = "You Lost to Rock";  compCount++; }
    else if (compChoice === 2) { resText.innerText = "You Won!!";  playerCount++; }
    else { resText.innerText = "It's a Draw" }
    console.log("player:- ", playerCount, " Comp:- ", compCount)
})

/// funtction to update the result board
 function finalResult(){
    document.getElementById("playerScore").innerText = playerCount;
    document.getElementById("compScore").innerText = compCount;
    if(compCount > playerCount){ document.getElementById("finalResult").innerText = "Computer Won The Game"}
    else if(playerCount >compCount){document.getElementById("finalResult").innerText = "Player Won The Game"}
    else{
        document.getElementById("finalResult").innerText = "The Game Draws"   
    }
 }


//// button ivisiblity matrixx
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target)
    
    if (totalClicks >= MAX_CLICKS) return;

    totalClicks++;

    console.log("Round:", totalClicks);

    // 👉 game logic here

    if (totalClicks === MAX_CLICKS) {
      console.log("Game Over");
      setTimeout(() => {
        main.classList.add("hidden")
       playButtons.classList.add("hidden");
       scoreCard.classList.remove("hidden");
      }, 4000);
        finalResult();
        console.log("final result updated")

    }
  });
 
});


// result updation 
const playAgain = document.getElementById("playAgain");

playAgain.addEventListener('click', ()=>{
    scoreCard.classList.add("hidden")
            main.classList.remove("hidden")
       playButtons.classList.remove("hidden");
       playerCount = 0;
       compCount = 0;
       totalClicks = 0;
})
