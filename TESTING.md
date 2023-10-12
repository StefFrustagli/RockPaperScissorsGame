# CLASSIC ROCK, PAPER, SCISSORS GAME - Testing details

[Main README.md file](README.md) <br>
[View the game in GitHub Pages](https://github.com/StefFrustagli/RockPaperScissorsGame.git)

## Validator Testing

### HTML

The [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html) returned some warnings: "Section lacks heading":

![Warnings](https://i.ibb.co/vvvjSGp/Screenshot-2023-10-12-at-21-01-59.pngg "Section lacks heading.")

**How I fixed this**: I have added some hidden headings in the sections.

In conclusion, the message returned no errors.
![Document checking completed. No errors or warnings to show.](https://i.ibb.co/hddrgq4/Screenshot-2023-08-29-at-20-38-56.png "Document checking completed")

### CSS

No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator.html.en).

## Manual testing

| **To be tested**               | **Test Action**                                                                                       | **Expected Outcome**                                                                                   | **Test Outcome** |
|--------------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|------------------|
| **How to play [button]**      | Navigate to the top of the screen and click on "How to play" in the centre of the header.             | The button's border should turn white when hovered over.                                          | Pass             |
| ****                           |                                                                                                       | The button should open a modal box with game instructions when clicked.                                | Pass             |
| **Play [button]**              | Navigate to the header and click How to Play. In the modal box that appears, click the Play button.   | In the modal box, there should be a Play button that, when clicked, returns the user to the main page. | Pass             |
| ****                           |                                                                                                       | The Play button's font should turn black when hovered over.                                            | Pass             |
| **Player's options [buttons]** | The player's options are located below the hands' icons in the main area of the game. Hover over them | The buttons should display a green background when hovered over.                                       | Pass             |
| ****                           | Select the Rock button.                                                                               | The Rock button should transform the player's hand into a 'rock' shape when selected.                  | Pass             |
| ****                           |                                                                                                       | The Rock button should trigger the computer's random choice when selected.                             | Pass             |
| ****                           |                                                                                                       | Both hands should shake when the Rock button is selected.                                              | Pass             |
| ****                           | Select the Paper button.                                                                              | The Paper button should transform the player's hand into a 'paper' shape when selected.                | Pass             |
| ****                           |                                                                                                       | The Paper button should trigger the computer's random choice when selected.                            | Pass             |
| ****                           |                                                                                                       | Both hands should shake when the Paper button is selected.                                             | Pass             |
| ****                           | Select the Scissors button.                                                                           | The Scissors button should transform the player's hand into a 'scissors' shape when selected.          | Pass             |
| ****                           |                                                                                                       | The Scissors button should trigger the computer's random choice when selected.                         | Pass             |
| ****                           |                                                                                                       | Both hands should shake when the Scissors button is selected.                                          | Pass             |
| **Player's score**             | The player's score is in green and is displayed below the option buttons.                             | Each time the player wins a match, their score should increase by one point.                           | Pass             |
| **Computer's score**           | The computer's score is in blue and is displayed below the option buttons.                            | Each time the computer wins a match, their score should increase by one point.                         | Pass             |
| ****                           |                                                                                                       | If there is a tie, neither score should increase.                                                      | Pass             |
| **Winner's declaration**      | Below the scoring area, the "You won" message appears in the centre of the screen.                    | This message appears if the player reaches 10 points before the computer.                              | Pass             |
| **Loser's declaration**        | Below the scoring area, the "You lost" message appears in the centre of the screen.                   | This message appears if the computer reaches 10 points before the computer.                            | Pass             |
| **Reset button**               | The reset button appears below the declaration's message.                                             | Players should be able to reset the game by pressing the button. The scores should return to zero.     | Pass             |
| **Footer**                     | Navigate to the footer at the bottom of the page and click on the GitHub icon.                        | By clicking on the GitHub icon, you should be taken to the developer's GitHub page.                    | Pass             |


## Browser Compatibility

Below are the browsers that have been tested:

- Chrome Version 116.0.5845.140
- Firefox Version 118.0.2
- Version 17.0 (17616.1.27.111.22, 17616)

## Responsiveness

I tested the website on a variety of screen sizes from iPhone 5 (320px wide) to a 5K iMac Pro (5120 x 2880 px) and it appears to be responsive on all of them.

## Lighthouse test

I performed this test using Chrome Dev tools in an incognito window.

The result, with a mobile setup, was the following:

- Performance: 92;
- Accessibility: 100;
- Best practises: 100;
- SEO: 100;

![Test result: 92 Performance, 100 Accessibility, 100 Best Practices, 100 SEO](https://i.ibb.co/GTtZcY9/Screenshot-2023-10-12-at-22-47-52.png)

The result, with a desktop setup, was the following:

- Performance: 99;
- Accessibility: 100;
- Best practises: 100;
- SEO: 100;
  
![Test result: 99 Performance, 100 Accessibility, 100 Best Practices, 100 SEO](https://i.ibb.co/xqSvcV2/Screenshot-2023-10-12-at-22-51-46.png)

## Bugs resolved

The development of this game has been challenging for me because I am a beginner, lack experience and JavaScript is a new world for me. 

- Most of the minor bugs were fixed by correcting typos and checking the correct elements to target using console.log.

- The direction of the hands caused me the most stress out of all the bugs I encountered. My goal was to have both hands (the player's and the computer's) facing each other. Instead, the scissors' hands were facing down, because they took over rotation from the other hands. This was fixed by adding the following if/else condition to the getPlayerChoice function:

```
if (choiceMapping[choiceClass] === 'scissors') {

 document.getElementsByClassName('player-hand')[0].style.transform = "rotate(0deg)";

return choiceMapping[choiceClass];

 } else {

document.getElementsByClassName('player-hand')[0].style.transform = "rotate(90deg)";

return choiceMapping[choiceClass];

 }

```

- The other major bug was the score resetting system. At first, I wanted the score to reset automatically when the user or computer reached 10 points. The reset was happening too fast and the message "You won" or "You lost" that happened before wasn't visible to the human eye, so my mentor suggested adding a reset button.

  
## Future improvements

- Hands performance is something I would like to improve going forward.
