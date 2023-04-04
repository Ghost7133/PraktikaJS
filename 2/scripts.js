document.addEventListener("DOMContentLoaded", function () {
    //Main menu//
    let div = document.querySelector(`#allDiv`)
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
        div.append(startButtonRendering)
        div.append(difficultyButtonRendering)
        div.append(exitButtonRendering)
        div.append(difficultyLevelRendering)
        
    }
    

    let startButtonRendering = startButtonRend()
    let difficultyButtonRendering = difficultyButtonRend()
    let exitButtonRendering = exitButtonRend()
    let difficultyLevelRendering = difficultyLevelRend()
    mainMenuRend()

    //Difficulty menu//
    function fourTilesButtonRend(){
        let fourTilesButton = document.createElement(`button`)
        fourTilesButton.textContent = `4X4`
        return fourTilesButton
    }

    function sixTilesButtonRend(){
        let sixTilesButton = document.createElement(`button`)
        sixTilesButton.textContent = `6X6`
        return sixTilesButton
    }

    function eightTilesButtonRend(){
        let eightTilesButton = document.createElement(`button`)
        eightTilesButton.textContent = `8X8`
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
        div.removeChild(startButtonRendering)
        div.removeChild(difficultyButtonRendering)
        div.removeChild(exitButtonRendering)
        div.removeChild(difficultyLevelRendering)

        gameRend()
    })
    difficultyButtonRendering.addEventListener(`click`,function(){
        div.removeChild(startButtonRendering)
        div.removeChild(difficultyButtonRendering)
        div.removeChild(exitButtonRendering)
        div.removeChild(difficultyLevelRendering)

        div.append(fourTilesButtonRendering)
        div.append(sixTilesButtonRendering)
        div.append(eightTilesButtonRendering)
        div.append(returnButtonRendering)

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
            div.removeChild(fourTilesButtonRendering)
            div.removeChild(sixTilesButtonRendering)
            div.removeChild(eightTilesButtonRendering)
            div.removeChild(returnButtonRendering)
            location.reload()
        })
    })
    exitButtonRendering.addEventListener(`click`,function(){
        window.close()
    })
})

function gameRend() {
    const colorMassive = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,
                          `9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,
                          `17`,`18`,`19`,`20`,`21`,`22`,`23`,`24`,
                          `25`,`26`,`27`,`28`,`29`,`30`,`31`,`32`
                        ]

    function cardRend(div){
        if(localStorage.getItem(`Difficulty`) == `1`){
            for (let i = 0; i < 16; i++) {
                let card = document.createElement(`div`);
                card.setAttribute(`class`,`tiles unfliped `)
                div.append(card)            
            }
            div.style.width = `408px`
        }
        if(localStorage.getItem(`Difficulty`) == `2`){
            for (let i = 0; i < 36; i++) {
                let card = document.createElement(`div`);
                card.setAttribute(`class`,`tiles unfliped `)
                div.append(card)

            }
            div.style.width = `612px`
        }
          if(localStorage.getItem(`Difficulty`) == `3`){
            for (let i = 0; i < 64; i++) {
                let card = document.createElement(`div`);
                card.setAttribute(`class`,`tiles unfliped `)
                div.append(card)

            }  
            div.style.width = `816px` 
          }          
    }
        
    

    let div = document.querySelector(`#allDiv`)
    
    cardRend(div)

    div.addEventListener(`click`,function (){
        let card = event.target
        console.log(card.value);
        card.classList.toggle(`unfliped`)
        card.classList.toggle(`flipped`)

  })
}

