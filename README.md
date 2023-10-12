# CLASSIC ROCK, PAPER, SCISSORS GAME

## Description
This game is a classic version of the Rock Paper Scissors game. It is single-player only, where the user tries to beat the computer. The player will select one of three choices and at the same time the computer will make its random choice. 
Randomness governs the game.

The rules are:

- Rock beats scissors; 
- Scissors beat paper; 
- Paper beats rock. 


It is intended for people who want to experience a simple JavaScript game and see how it works.

<details><summary>Mockup of the game</summary>

  <p align="center"><img src="https://i.ibb.co/2gjH5kS/Mockup.png" alt="Mockup of the game"/></br></p>
  
  </details>

  [Play the game here](https://steffrustagli.github.io/RockPaperScissorsGame/)

## Table of Contents

- [User Experience (UX)](#user-experience)
- [Features](#features)
- [Tecnologies used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

## User Experience

### Design

My goal was to create a classic 'Rock, Paper, Scissors' game where the player fights against a machine. The page design is simple, with cold colours that evoke a robotic theme.


### Project's goal
The goal of this project was to put the skills I learned studying JavaScript into practice by creating a simple and fun game that would be enjoyable for casual players as well as JavaScript beginners.

I can achieve my goal most effectively through this project because I can practice basic JavaScript functions while creating a simple and interactive game.

### Ideal viewers
- A JavaScript learner who wants to see a simple game in action.
- A Rock, Paper, Scissors game enthusiast.
- Someone who wants to distract themselves from daily tasks by playing an online game.
- Someone who's got a basic knowledge of English, as the options are in English.
  
### User stories

#### JavaScript learners:
- I want to see an example of a JavaScript game in action.
- I want to try the classic 'Rock Paper Scissors' game created with basic JavaScript knowledge.
- I want to look at a game and see if I'm able to understand how it works and build a similar version.

#### Rock, paper, scissors game enthusiasts:
- I want to play a classic version of the Rock, paper and scissors game.
- I like the idea of competing against a robot.
- I like the game design and want to try this version of the game.

#### Casual players:
- I want to spend a few minutes distracting yourself from routine tasks.
- I want to play an online game that doesn't require too much concentration.
- I want to play an online game against a chance-dominated computer and test my luck.

#### What the user might expect:
- To understand the game's rules easily.
- To see the score counters.
- To see hands with both choices.

#### As a developer, I expect:
- To provide an easy and logical navigation within the game.
- To make the game as clear and simple to play as possible.
- To provide clear instructions.
- To provide some fun with a chance game.
- To show my JavaScript skills.

### Wireframes
Below are the wireframes I created during the design process (whose aspect and colours differ from the final product):

<details> <summary>Wireframes</summary>
<p align="center">
<img src="https://i.ibb.co/Mh8VdKg/Wireframe-draft-desktop.png" alt="Wireframe for the Homepage - desktop"/>
</br>
<img src="https://i.ibb.co/VQKw4rG/Wireframe-draft-mobile.png" alt="Wireframe for the Homepage - mobile"/>
<br/>
</p>
</details>


### Palette

The colour palette was generated from the hero image using [color-hex](https://www.color-hex.com/). As I said, I wanted some colors that evoke the image of a robot.

![Colour palette](https://i.ibb.co/16zdc66/Colour-Palette.png "Colour palette")

### Typography

The entire website uses the "Roboto Mono" font, with monospace serving as the fallback font in case the font isn't imported properly.
The font was imported into style.css using Google fonts.

### Favicon

The favicon was created using [Favicon Generator](https://favicon.io/favicon-generator/).

I chose an image of a robot that represents the machine the player attempts to beat.

![Robot favicon as appears in the tab](https://i.ibb.co/rG55bZ3/Screenshot-2023-10-10-at-20-49-56.png "Favicon")

## Features
### Existing Features
### Game page
It consists of a header, a main game area and a footer.

#### Header
![Header with How to play button](https://i.ibb.co/qCwbgTT/HEADER.png "Header")
The header shows a "How to play" button that, when selected, pops up a modal listing the simple rules of the game. When hovered over, the button's border turns white.

![Button's borders turn white when the button is hovered over](https://i.ibb.co/NxtpJxc/How-to-play-button.png "How to play button's white border")

In the modal box, the player is shown a brief list of winning conditions.
![Modal box with game instructions](https://i.ibb.co/rtnhM3j/Screenshot-2023-10-12-at-12-29-06.png "Modal box")
At the bottom of the modal, there is a 'Play" button that allows the user to return to the main page and start the game. By hovering over the button, the font turns black.

![Play button's font turning white](https://i.ibb.co/LRc53cv/Screenshot-2023-10-12-at-12-33-44.png "Play button whose font colour turns black when hovered over")

#### Game area
The game area shows: 
- The heading: "Can you beat the machine?"; 
- The player's hand (green) and the computer's hand (blue) facing each other;
- The buttons with three options: "Rock", "Paper", "Scissors";
- The player's score and the computer's score.
  
![Game area that includes heading, icons, options and score](https://i.ibb.co/n07DxZ1/Game-area.png "Game area")

The initial situation in the game shows the two hands facing each others (as image above).

The hand icons change according to the selections made by the player and computer when a button is clicked.

Selectable options for the player are Rock, Paper and Scissors.
![Buttons with options: "Rock", "Paper" and "Scissors"](https://i.ibb.co/n07DxZ1/Game-area.png "Buttons with selectable options")

Upon selecting the button "Rock," the Player's hand appears as follows:

Upon selecting one of the buttons, the Player's hand appears as follows:

Rock: 

![Player's hand: rock](https://i.ibb.co/6W0M07D/Screenshot-2023-10-12-at-14-21-20.png "Player's hand: rock")

Paper:

![Player's hand: paper](https://i.ibb.co/7KbdQc2/Screenshot-2023-10-12-at-14-37-31.png "Player's hand: paper")


Scissors:

![Player's hand: scissors](https://i.ibb.co/2N5jVWQ/Screenshot-2023-10-12-at-14-39-11.png "Player's hand: scissors")

Once the player selects an option, the computer will make a random choice.
The computer has the same options as the player:

Rock: 

![Computer's hand: rock](https://i.ibb.co/F60cykN/Screenshot-2023-10-12-at-18-58-58.png "Computer's hand: rock")

Paper:

![Computer's hand: paper](https://i.ibb.co/mR98wwN/Screenshot-2023-10-12-at-19-00-05.png "Computer's hand: paper")

Scissors:

![Computer's hand: scissors](https://i.ibb.co/NFjkrwW/Screenshot-2023-10-12-at-18-59-18.png "Computer's hand: scissors")

**Match points**
![Match points](https://i.ibb.co/9bvWZR0/Screenshot-2023-10-12-at-17-05-22.png "Your score: 0; PC score: 0.")

Match points are updated every time a match takes place. The winning conditions are: rock wins against scissors; paper wins against rock; and scissors win against paper. If both players throw the same hand signal, neither gets a point.
A player's score is shown in green, while a computer's score is shown in blue.

When the player or computer reaches 10 points, the following will appear:

- A message indicating whether the player has won or lost;
- A reset button to reset points to zero and restart the game.

![Winner message and reset button](https://i.ibb.co/c233vX9/Screenshot-2023-10-12-at-17-28-25.png "You won") 
or ![Loser message and reset button](https://i.ibb.co/vVTBNGQ/Screenshot-2023-10-12-at-17-29-25.png "You lost")

The **Reset button** allows the user to reset the game. The button's border turns white when hovered over. When the button is clicked, the message "You won" or "You lost" disappears and the score resets.


Examples of matches:

![Example of a match where computer wins and gets 1 point](https://i.ibb.co/tbjdkfQ/Scissors.png  "Example of a match where computer wins and gets 1 point")
In this case, the player selects "Scissors" while the computer selects "Rock". The computer wins and gets a point.

![Example of a match where player wins and gets 1 point](https://i.ibb.co/nLsQvhL/Screenshot-2023-10-12-at-17-26-55.png "Example of a match where player wins and gets 1 point")
In this case, the player selects "Rock" while the computer selects "scissors". The player wins and gets a point.

![Example of a match where 10 points are reached and the player has lost](https://i.ibb.co/4jrF2yy/Screenshot-2023-10-12-at-19-07-33.png "Example of a match where 10 points are reached and player has lost")
The computer reaches ten points first and a message informs the player that they have lost.

![Example of a match where 10 points are reached and the player has won](https://i.ibb.co/Srptmbd/Screenshot-2023-10-12-at-19-10-44.png "Example of a match where 10 points are reached and player has won")
The player reaches ten points first and a message informs the player that they have won.

### Footer
![Footer with GitHub link](https://i.ibb.co/b73NHBK/Footer.png "Footer")
There is a GitHub icon in the footer that can be clicked for a link to the developer's GitHub page.

### Features and general aspects left to implement

Due to the short deadline and my limited knowledge, my focus was creating a functional and essential game. However, I hope to accomplish the following as I move forward: 
- change the computer's hands into robot's hands
- add

## Technologies used

### Languages

- Programming languages used in this project are **HTML5**, **CSS3** and **JavaSctipt**.

### Frameworks, Programs & Libraries

- [GitHub Pages:](https://pages.github.com/) is where the site is hosted.
- [Git:](https://git-scm.com/) was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/) was used as the repository for the project after being pushed from Git.
- [Codeanywhere](https://codeanywhere.com/) was used as online IDE.
- [Figma:](https://www.figma.com/) was used to create wireframes during the design process.
- [Google Fonts:](https://fonts.google.com/) was used to import fonts into the style.css.
- [Font Awesome:](https://fontawesome.com/) was used to add icons in the footer.
- [ImgBB:](https://imgbb.com/) was used to upload images and extract the source code.
- [Am I Responsive?](http://ami.responsivedesign.is) was used to generate the mockup of the website.
- [Table Convert](https://tableconvert.com/) was used to generate tables for the TESTING.md file.

## Testing

Testing information can be found in [TESTING.md file](TESTING.md).

## Deployment

This project was developed using Codeanywhere, committed to git and pushed to GitHub.
It was deployed directly from the master branch to GitHub Pages using the following steps:

1. In the GitHub repository, navigate to the **Settings** tab;

2. From the "Code and automation" drop-down menu, select **Pages**.

3. In GitHub pages, the **Source** selected should be Deploy from Branch, the **Branch** set to Main and **Folder** to / (root). Click '**Save**'.

4. Navigate back to the **Code** tab. Wait a few minutes for the build to finish and **refresh your repo**.

5. On the right-hand side, in the **Deployments** section, click 'github-pages'

6. Click the **Arrow-up-right-from-square icon** to see the live site.

The live link can be found here: https://steffrustagli.github.io/RockPaperScissorsGame/

### How to run this project locally

### Cloning

You can clone this repository directly into your editor by pasting `git clone https://github.com/StefFrustagli/RockPaperScissorsGame.git` into your terminal. To remove this GitHub repository, type `git remote rm origin` into the terminal.

### Forking

You can fork this project and make a copy of the original repository in your own GitHub account. In this case, you can view or make changes without affecting the original. To do so:

- log into GitHub and locate the GitHub Repository;
- at the top right of the screen, click the Fork button.

It should be noted that all changes pushed to the main branch are automatically reflected on the site.

## Credits

### Content

This is the classic and most famous version of the game. For more info about the history of the game, please refer to [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors).

### Code

As this was my first time building a game with JavaScript, I must say that it has been extremely challenging. My initial steps were largely guided by videos online. In particular, I've found inspiration watching YouTube videos by [Code Grind](https://youtu.be/NTDBKgBY6JU?si=JvBJ4kWI1syJEjou) and [FreeCodeCamp](https://youtu.be/jaVNP3nIAv0?si=b31LTH54UzufIY4Y). The first video helped me with the handshake function and the general idea of the game, while the second gave me an insight into how to create a tidy set up for a JS project.

In general, I examined and researched different codes online.
For guidance, I've often checked out
[W3Schools](https://www.w3schools.com/).

### Acknowledgment

For their continuous support, suggestions and feedback, I am very grateful to my mentor Brian Macharia, the Code Institute tutors, and my fellow classmates on Slack, in particular I want to thank Niclas for his precious help and support.
