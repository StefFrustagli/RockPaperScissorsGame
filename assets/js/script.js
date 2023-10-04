// Variables for player & computer hands
let player = document.querySelector('.player-hand'); // store player hand default icon
let computer = document.querySelector('.pc-hand'); // store pc hand default icon
// Variables for player hidden hands
let playerHandRock = document.querySelector('.player-hand-rock');
let playerHandPaper = document.querySelector('.player-hand-paper');
let playerHandScissors = document.querySelector('.player-hand-scissors');

// VAriables for computer hidden hands
let computerHandRock = document.querySelector('.computer-hand-rock');
let computerHandPaper = document.querySelector('.computer-hand-paper');
let computerHandScissors = document.querySelector('.computer-hand-scissors');

// Variables for scores
let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById('player-score'); // variables with underscore store DOM elements
let computerScore_span = document.getElementById('computer-score');
let scoreArea_div = document.querySelector('.score-area');

// Variables for buttons/options
let options = document.querySelectorAll('.options .buttons'); // all the 3 buttons
let rock_button = document.getElementById('button-rock');
let paper_button = document.getElementById('button-paper');
let scissors_button = document.getElementById('button-scissors');

// game function
function game(userChoice) {
    return userChoice;
    //console.log(userChoice);
    
}

// addEventListener for each button (when button is clicked, player's hand has to change)

rock_button.addEventListener('click', function(){
   player.classList.add('player-hand-rock');
})

        
        
    
    //console.log('hey, you cliked on rock!'); //console.log to see if it works


paper_button.addEventListener('click', function (){
    game('paper');
    //console.log('hey, you cliked on paper!'); //console.log to see if it works
})

scissors_button.addEventListener('click', function (){
    game('scissors');
   //console.log('hey, you cliked on scissors!'); //console.log to see if it works
})


// Run hands shaking frunction for each loop using arrow function
options.forEach((option) => {
    option.addEventListener('click', () => {
        player.classList.add('shakePlayer');
        computer.classList.add('shakeComputer');
        // Hands shake when button is clicked 

        // Remove classes so that hands shake each time the button is clicled - no need to reload the page
        setTimeout(() => {
            player.classList.remove('shakePlayer');
            computer.classList.remove('shakeComputer');

        
            // Make Player's hand to change depending on the button clicked
            // NEED TO ADD IT

            // Make computer's hand to change randomly
            /*let randomChoice = ["Rock", "Paper", "Scissors"];
            let arrayNo = Math.floor(Math.random() * randomChoice.length);
            let ComputerChoice = choice[arrayNo]; */
            // PC should change image here
            //NEED TO ADD IT
            

            // Variables for Points
            let pcPoints = parseInt(computerScore.innerHTML);
            let playerPoints = parseInt(playerScore.innerHTML);

            // Conditions
            if(options.innerHTML==="Rock") {
                if(computerChoice==="Paper") // Point goes to computer
                computerScore.innerHTML = pcPoints + 1;
                else if (computerChoice === "Scissors") // Point go to player
                playerScore.innerHTML = playerPoints + 1;
            } else if (options.innerHTML === "Paper") {
                if (computerChoice === "Stone") // Point goes to player
                    playerScore.innerHTML = playerPoints + 1;
                else if (computerChoice === "Scissors") // Point go to computer
                    computerScore.innerHTML = pcPoints + 1;
                } else {
                    if (options.innerHTML==="Scissors") {
                        if (computerChoice === "Stone") // Point goes to computer
                    computerScore.innerHTML = pcPoints + 1;
                else if (computerChoice === "Paper") // Point go to player
                    playerScore.innerHTML = playerPoints + 1;
                    }

                
                }

        }, 1000); // Make movement smoother

        
        




    });
});

