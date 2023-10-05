// Variables for default hands
let player = document.querySelector(".player-hand"); // store player hand default icon
let computer = document.querySelector(".pc-hand"); // store pc hand default icon
// Variables for buttons
let options = document.querySelectorAll(".options .buttons"); // all the 3 buttons
let rockButton = document.getElementById("button-rock");
let paperButton = document.getElementById("button-paper");
let scissorsButton = document.getElementById("button-scissors");
// Variables for scores
let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("player-score"); // variables with underscore store DOM elements
let computerScore_span = document.getElementById("computer-score");
let scoreArea_div = document.querySelector(".score-area");
// Variables for player hidden hands
let playerHandRock = document.querySelector(".player-hand-rock");
let playerHandPaper = document.querySelector(".player-hand-paper");
let playerHandScissors = document.querySelector(".player-hand-scissors");
// Variables for computer hidden hands
let computerHandRock = document.querySelector(".computer-hand-rock");
let computerHandPaper = document.querySelector(".computer-hand-paper");
let computerHandScissors = document.querySelector(".computer-hand-scissors");


//Hands shaking function for each loop using arrow function

options.forEach((option) => {
    option.addEventListener("click", () => {
        player.classList.add("shakePlayer");
        computer.classList.add("shakeComputer");
        
        // Delay for shaking animation
        setTimeout(() => {
            player.classList.remove("shakePlayer");
            computer.classList.remove("shakeComputer");
        
            // After the shaking animation, update the hands
            setTimeout(() => {
                playComputerTurn();
            }, 100); // Delay for updating the hands

            
        }, 900); // Make movement smooth
    });
});



 // Function computer random choice
        function getComputerChoice() {
                const choices = ["computer-rock", "computer-paper", "computer-scissors"]; // computer's hands IDs
                let randomNumber = Math.floor(Math.random() * 3); //making sure only 0, 1 or 2 can be selected
                let computerChoice = choices[randomNumber];
                console.log(computerChoice);
                return computerChoice;
            }

            // Function computer turn
            function playComputerTurn() {
                const computerChoice = getComputerChoice();

                const icon = computer.firstElementChild;
                icon.classList.remove("fa-hand-fist", "fa-hand-back-fist", "fa-hand-scissors");

                if (computerChoice === "computer-rock") {
                    icon.classList.add("fa-hand-back-fist");
                } else if (computerChoice === "computer-paper") {
                    icon.classList.add("fa-hand");
                } else if (computerChoice === "computer-scissors") {
                    icon.classList.add("fa-hand-scissors");
                }
            }


// Function to update the player's hand
function updatePlayerHand(handType) {
    let icon = player.firstElementChild;
    icon.classList.remove("fa-hand-fist", "fa-hand-back-fist", "fa-hand-scissors");
    icon.classList.add(handType);
}


// EVENT LISTENER for each button (when button is clicked, player's hand has to change)
rockButton.addEventListener("click", function () {
    let icon = player.firstElementChild;

    icon.classList.remove("fa-hand-fist");
    removeIcons(icon);
    icon.classList.add("fa-hand-back-fist");

});

paperButton.addEventListener("click", function () {
    let icon = player.firstElementChild;

    icon.classList.remove("fa-hand-fist");
    removeIcons(icon);

    icon.classList.add("fa-hand");
    removeRotation(icon);

});

scissorsButton.addEventListener("click", function () {
    let icon = player.firstElementChild;

    icon.classList.remove("fa-hand-fist");
    removeIcons(icon);
    icon.classList.add("fa-hand-scissors");
    icon.classList.add("transform");

    removeRotation(icon);

});

// Function to make sure classes don't get added to each others and buttons run correctly

function removeIcons(icon) {
    if (icon.classList.contains("fa-hand")) {
        icon.classList.remove("fa-hand");
    }
    if (icon.classList.contains("fa-hand-back-fist")) {
        icon.classList.remove("fa-hand-back-fist");
    }
    if (icon.classList.contains("fa-hand-scissors")) {
        icon.classList.remove("fa-hand-scissors");
    }

}

function removeTransform(icon) {
    if (icon.classList.contains("transform")) {
        icon.classList.remove("transform");
    }

}

function removeRotation(icon) {
    if (icon.classList.contains("rotate-90")) {
        icon.classList.remove("rotate-90");
    }
}









