// variables for player and computer hands
let player = document.querySelector('.player-hand'); // store player hand icon
let computer = document.querySelector('.pc-hand'); // store pc hand icon
// variables for scores
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');

let options = document.querySelectorAll('.options .buttons'); // all the 3 buttons

// run hands shake function for each loop using arrow function
options.forEach((option) => {
    option.addEventListener('click', () => {
        player.classList.add('shakePlayer');
        computer.classList.add('shakeComputer');
        //hand shakes when button is clicked 

        //remove classes so that hands shake each time the button is clicled - no need to reload the page
        setTimeout(() => {
            player.classList.remove('shakePlayer');
            computer.classList.remove('shakeComputer');
        }, 1000);
    });
});
