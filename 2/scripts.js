document.addEventListener("DOMContentLoaded", function () {
    //Main menu//
    let div = document.querySelector(`#allDiv`)
    function divMenuRend(){
        let menu = document.createElement(`div`)
        menu.setAttribute(`class`,`menuDiv`)
        return menu
    }
    function startButtonRend(){
        let startButton = document.createElement(`button`)
        startButton.textContent = `СТАРТ`
        return startButton
    }

    function difficultyButtonRend(){
        let difficultyButton = document.createElement(`button`)
        difficultyButton.textContent = `СЛОЖНОСТЬ`
        return difficultyButton
    }

    function exitButtonRend(){
        let exitButton = document.createElement(`button`)
        exitButton.textContent = `ВЫХОД`
        return exitButton
    }

    function difficultyLevelRend() {
        let difficultyLevel = document.createElement(`h3`)
        difficultyLevel.textContent = `Уровень сложности ` + localStorage.getItem(`Difficulty`)
        return difficultyLevel
    }

    function mainMenuRend(){
        div.append(divMenuRendering)
        divMenuRendering.append(startButtonRendering)
        divMenuRendering.append(difficultyButtonRendering)
        divMenuRendering.append(exitButtonRendering)
        divMenuRendering.append(difficultyLevelRendering)
        
    }
    
    let divMenuRendering = divMenuRend()
    let startButtonRendering = startButtonRend()
    let difficultyButtonRendering = difficultyButtonRend()
    let exitButtonRendering = exitButtonRend()
    let difficultyLevelRendering = difficultyLevelRend()
    mainMenuRend()

    //Difficulty menu//
    function fourTilesButtonRend(){
        let fourTilesButton = document.createElement(`button`)
        fourTilesButton.textContent = `6X1`
        return fourTilesButton
    }

    function sixTilesButtonRend(){
        let sixTilesButton = document.createElement(`button`)
        sixTilesButton.textContent = `6X2`
        return sixTilesButton
    }

    function eightTilesButtonRend(){
        let eightTilesButton = document.createElement(`button`)
        eightTilesButton.textContent = `6X4`
        return eightTilesButton
    }
    function returnButtonRend(){
        let returnButton = document.createElement(`button`)
        returnButton.textContent = `НАЗАД`
        return returnButton
    }

    let fourTilesButtonRendering = fourTilesButtonRend()
    let sixTilesButtonRendering = sixTilesButtonRend()
    let eightTilesButtonRendering = eightTilesButtonRend()
    let returnButtonRendering = returnButtonRend()

    

    startButtonRendering.addEventListener(`click`,function(){
        divMenuRendering.removeChild(startButtonRendering)
        divMenuRendering.removeChild(difficultyButtonRendering)
        divMenuRendering.removeChild(exitButtonRendering)
        divMenuRendering.removeChild(difficultyLevelRendering)
        div.removeChild(divMenuRendering)

        generateGameField()
    })
    difficultyButtonRendering.addEventListener(`click`,function(){
        divMenuRendering.removeChild(startButtonRendering)
        divMenuRendering.removeChild(difficultyButtonRendering)
        divMenuRendering.removeChild(exitButtonRendering)
        divMenuRendering.removeChild(difficultyLevelRendering)

        divMenuRendering.append(fourTilesButtonRendering)
        divMenuRendering.append(sixTilesButtonRendering)
        divMenuRendering.append(eightTilesButtonRendering)
        divMenuRendering.append(returnButtonRendering)

        fourTilesButtonRendering.addEventListener(`click`, function(){
            localStorage.setItem(`Difficulty`,`1`)
            console.log(localStorage.getItem(`Difficulty`));
        })

        sixTilesButtonRendering.addEventListener(`click`,function(){
            localStorage.setItem(`Difficulty`,`2`)
            console.log(localStorage.getItem(`Difficulty`));
        })

        eightTilesButtonRendering.addEventListener(`click`,function(){
            localStorage.setItem(`Difficulty`,`3`)
            console.log(localStorage.getItem(`Difficulty`));
        })

        returnButtonRendering.addEventListener(`click`,function(){
            divMenuRendering.removeChild(fourTilesButtonRendering)
            divMenuRendering.removeChild(sixTilesButtonRendering)
            divMenuRendering.removeChild(eightTilesButtonRendering)
            divMenuRendering.removeChild(returnButtonRendering)
            location.reload()
        })
    })
    exitButtonRendering.addEventListener(`click`,function(){
        window.close()
    })
})

function difficultyGame() {
    let difficulty = JSON.parse(localStorage.getItem('Difficulty'))
    if(difficulty == `1`){
        userInputPairs = 3
        return userInputPairs;}
    else if (difficulty == `2`){
        userInputPairs = 6
        return userInputPairs;}
    else{
        userInputPairs = 12
        return userInputPairs;
    }
    }
  
  // создание игрового поля
  function generateGameField() {
    const gameField = document.createElement("div");
    gameField.classList.add("gameField");
  
    const pelement = document.createElement("p");
    pelement.textContent = "Время до окончания";
    pelement.classList.add("pelement");
  
    const timerToEnd = document.createElement("p");
    timerToEnd.classList.add("timerToEnd");
    timerToEnd.textContent = "60";
  
    const btnStartGame = document.createElement("button");
    btnStartGame.classList.add("btnStartGame");
    btnStartGame.textContent = "Начать";
  
    const btnRestartGame = document.createElement("button")
    btnRestartGame.classList.add("btnRestartGame")
    btnRestartGame.textContent = "Меню"
  
    const containerForGame = document.querySelector("#allDiv");
    containerForGame.append(pelement, timerToEnd, btnStartGame, btnRestartGame, gameField);
    addCardsToGameField(getCards(difficultyGame()), gameField);
  
    btnStartGame.addEventListener("click", () => {
      startTimer(timerToEnd, btnStartGame);
      guessingGame();
    });
  
    btnRestartGame.addEventListener("click", () => {
      location.reload()
    });
  }
  
  function startTimer(timerToEnd, btnStartGame) {
    let count = timerToEnd.textContent;
    function timer(){
        count--;
        timerToEnd.textContent = count;
        if (count === 0) {
          clearInterval(interval);
          gameEnd()
        }
      }
      let interval = setInterval(timer,1000);
      btnStartGame.setAttribute("disabled", true);
  }

  function gameEnd(){
    alert(`Время вышло. Вы проиграли`)
    location.reload()
}
  // получить массив пар карт
  function getCards(textFromUserInput) {
    const dualCards = [];
    for (let i = 1; i <= textFromUserInput; i++) {
      dualCards.push(i);
      dualCards.push(i);
    }
    shuffle(dualCards);
    return dualCards;
  }
  
  // Перемешать массив
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  // добавление карт на поле
  function addCardsToGameField(pairsCard, gameField) {
    for (let i = 0; i < pairsCard.length; i++) {
      let cardItem = document.createElement("div");
      cardItem.classList.add("cardItem");
      let cardText = document.createElement("p");
      cardText.classList.add("cardText");
      cardText.textContent = pairsCard[i];
      cardText.style.fontSize = `0`
      cardItem.append(cardText);
      gameField.append(cardItem);
    }
  }
  
  function guessingGame() {
    let difficulty = JSON.parse(localStorage.getItem(`Difficulty`))
    let time = 0
    let firstGuess;
    let secondGuess;
    let firstGuessBlock;
    let secondGuessBlock;
    let gameFields = document.querySelector(".gameField");
    gameFields.style.pointerEvents = "auto";
    let count = 0;

      gameFields.addEventListener("click", () => {
        let card = event.target
        let pElem = card.children
        let elem = pElem[0]
          if (count < 1) {
            count++;
            firstGuess = elem;
            firstGuessBlock = card;
            firstGuess.style.fontSize = `8vh`
            card.style.backgroundColor = "white";
          } else if (count < 2) {
            count++;
            secondGuess = elem;
            secondGuessBlock = card;
            secondGuess.style.fontSize = `8vh`
            card.style.backgroundColor = "white";
          }
          setTimeout(() =>{
          if (count == 2) {
            firstGuess.style.fontSize = `0`
            secondGuess.style.fontSize = `0`
            if (firstGuess.textContent == secondGuess.textContent) {
              firstGuess.style.fontSize = `8vh`
              secondGuess.style.fontSize = `8vh`
              firstGuess.setAttribute("disabled", true);
              secondGuess.setAttribute("disabled", true);
              count = 0;
              time++;
              if (difficulty == `1` && time == 3) {
                alert(`Вы выиграли`)
                location.reload()
              }
              if (difficulty == `2` && time == 6) {
                alert(`Вы выиграли`)
                location.reload()
              }
              if (difficulty == `3` && time == 12) {
                alert(`Вы выиграли`)
                location.reload()
              }
              firstGuess = null
              secondGuess = null;
            } else {
              setTimeout(() => {
                firstGuessBlock.style.backgroundColor = "black";
                secondGuessBlock.style.backgroundColor = "black";
                
              }, 100);          
              count = 0;             
              firstGuess = null 
              secondGuess = null;
            }
          }
        },500)
      });
    
  }


