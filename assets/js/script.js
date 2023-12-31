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
let playerScore_span = document.getElementById("player-score");
let computerScore_span = document.getElementById("computer-score");
// Variables for Reset button
const resetButton = document.getElementById('reset-button');
// Variables for results 
let winnerResult = document.getElementById("winner-result");
let loserResult = document.getElementById("loser-result");
// Variable for the open button
const howToPlayButton = document.getElementById('how-to-play');
// Variable for the modal box
const modalContainer = document.getElementById('container');
// Variable for the closing button
const closeModal = document.getElementById('close-modal');
// Variables for choice Mapping
const choiceMapping = {
    "fa-hand-back-fist": "rock",
    "fa-hand": "paper",
    "fa-hand-scissors": "scissors",
};

//Arrow function for hands shaking
options.forEach((option) => {
    option.addEventListener("click", () => {
        player.classList.add("shake-player");
        computer.classList.add("shake-computer");
        // Delay for shaking animation
        setTimeout(() => {
            player.classList.remove("shake-player");
            computer.classList.remove("shake-computer");
            // After the shaking animation, update the hands
            setTimeout(() => {
                playComputerTurn();
            }, 100); // Delay for updating the hands
        }, 900); // Make movement smooth
    });
});
// Function computer's random choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; // they were computer's hands IDs, now changed into "rock" "paper", "scissors" to fix issue with score
    let randomNumber = Math.floor(Math.random() * 3); // making sure only 0, 1 or 2 can be selected
    let computerChoice = choices[randomNumber];
    return computerChoice;
}
// Function player's choice
function getPlayerChoice() {
    const icon = player.firstElementChild;
    const choiceClass = Array.from(icon.classList).find((className) => {
        return className in choiceMapping;
    });
    if (choiceMapping[choiceClass] === 'scissors') {
        document.getElementsByClassName('player-hand')[0].style.transform = "rotate(0deg)";
        return choiceMapping[choiceClass];
    } else {
        document.getElementsByClassName('player-hand')[0].style.transform = "rotate(90deg)";
        return choiceMapping[choiceClass];
    }
}
// Function computer's turn
function playComputerTurn() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const icon = computer.firstElementChild;
    icon.classList.remove(
        "fa-hand-fist",
        "fa-hand-back-fist",
        "fa-hand-scissors"
    );
    // If condition for Computer's choice
    if (computerChoice === "rock") {
        icon.classList.add("fa-hand-back-fist");
        icon.classList.add('fa-rotate-270'); // To fix scissors' hand
    } else if (computerChoice === "paper") {
        icon.classList.add("fa-hand");
        icon.classList.add('fa-rotate-270'); // To fix scissors' hand
    } else if (computerChoice === "scissors") {
        icon.classList.add("fa-hand-scissors");
        icon.classList.remove('fa-rotate-270'); // To fix scissors' hand
        icon.classList.remove('rotate-90');
    }
    // Determine the winner
    const winner = determineWinner(playerChoice, computerChoice);
    // Update the scores 
    if (winner === "Player") {
        playerScore++;
    } else if (winner === "Computer") {
        computerScore++;
    }
    updateScore(playerScore, computerScore);
    // Display the winner
    displayWinner();
    checkAndResetScores();
}
// Display results
function displayWinner() {
    if (playerScore === 10) {
        winnerResult.style.display = "block";
        loserResult.style.display = "none"; // Hide the loser result
    } else if (computerScore === 10) {
        loserResult.style.display = "block";
        winnerResult.style.display = "none"; // Hide the winner result
    }
}
// Function to update the player's hand
function updatePlayerHand(handType) {
    let icon = player.firstElementChild;
    icon.classList.remove(
        "fa-hand-fist",
        "fa-hand-back-fist",
        "fa-hand-scissors"
    );
    icon.classList.add(handType);
}
// Event listener for each button (when button is clicked, player's hand changes)
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

function removeRotation(icon) {
    if (icon.classList.contains("rotate-90")) {
        icon.classList.remove("rotate-90");
    }
}
// update Score function
function updateScore(playerScore, computerScore) {
    playerScore_span.textContent = playerScore; // Use .textContent to update score
    computerScore_span.textContent = computerScore;
}
// Determine the winner of a round and update the score
function determineWinner(playerChoice, computerChoice) {
    // Check for tie
    if (playerChoice === computerChoice) {
        return "Tie";
    }
    // Check for player win
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "Player";
    } else {
        // If it's not a tie and player didn't win, computer wins
        return "Computer";
    }
}

// Function to reset score
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScore(playerScore, computerScore);
    // Hide winner/loser result
}

// Event listener for reset button
resetButton.addEventListener('click', function () {
    resetScore();
    resetButton.style.display = "none";
    winnerResult.style.display = "none";
    loserResult.style.display = "none";
});
// Check if the player or computer score has reached 10
function checkAndResetScores() {
    if (playerScore === 10 || computerScore === 10) {
        // If either player or computer score reaches 10, reset both scores to 0
        displayWinner();
        // To make the button appear in the center
        resetButton.style.display = "inline-block";
    }
}

// MODAL - HowToPlayButton with instructions for the game (code adapted from W3Schools)
// Open modal when clicking on button 
howToPlayButton.onclick = function () {
    modalContainer.style.display = "block";
};
// Close modal when clicking on button
closeModal.onclick = function () {
    modalContainer.style.display = "none";
};