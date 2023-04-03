(function(){
//██████████████████████████████████████████████//
//█────█───█────█─██─█────█────█────██─██─█────█//
//█─██─██─██─██─█─██─█─██─█─██─█─██──█─█─██─██─█//
//█─██─██─██────█─█──█─████─██─█────██──███────█//
//█─██─██─██─████──█─█─██─█─██─█─██──█─█─██─██─█//
//█────██─██─████─██─█────█────█────██─██─█─██─█//
//██████████████████████████████████████████████//
    const massiveWork = [];
    const massiveWorkCheck = [];
    //Некоторые элементы для отрисовки

        //Контейнер для всех дел//
        function allDivTextRend() {
            allDivText.style.backgroundColor = `#4F4F4F`
            allDivText.style.color = `white`
        }


        //Основной текст//
        function h1TextRend(title) {
            let h1Text = document.createElement(`h1`)
            h1Text.textContent = title
            return h1Text
        }
        
        
    //Общее поле ввода//

        //Текст//

            //Поле ввода дел//
        function inpTextRend(){
            let inpText = document.createElement(`h3`)
            inpText.textContent = `Дело`
            inpText.style.width = `208px`
            inpText.style.margin = `0`
            inpText.style.float = `left`
            inpText.style.textAlign = `center`
            return inpText
        }

        
            //Поле ввода часа//
        function hourTextRend(){
            let hourText = document.createElement(`h3`)
            hourText.textContent = `Часы`
            hourText.style.width = `177px`
            hourText.style.margin = `0`
            hourText.style.float = `left`
            hourText.style.textAlign = `center`
            return hourText
        }

            //Поле ввода минут
        function minuteTextRend(){
            let minuteText = document.createElement(`h3`)
            minuteText.textContent = `Минуты`
            minuteText.style.width = `177px`
            minuteText.style.margin = `0`
            minuteText.style.float = `left`
            minuteText.style.textAlign = `center`
            return minuteText
        }
        
            //Поле ввода секунд
        function secondsTextRend(){
            let secondsText = document.createElement(`h3`)
            secondsText.textContent = `Секунды`
            secondsText.style.textAlign = `left`
            return secondsText
        }


        //Ввод//

            //Поле ввода дел//
        function inpRend(){
            let inp = document.createElement(`input`)
            inp.value = `1`
            inp.setAttribute(`placeholder`,`Введите дело`)
            inp.style.width = `200px`
            inp.style.textAlign = `left`
            console.log(inp.value);
            console.log(`123`);
            return inp
        }

            //Поле ввода часа//
        function inpHourRend(){
            let inpHour = document.createElement(`input`)
            inpHour.value = `0`
            inpHour.setAttribute(`placeholder`,`0`)
            return inpHour
        }

            //Поле ввода минут
        function inpMinuteRend(){
            let inpMinute = document.createElement(`input`)
            inpMinute.value = `0`
            inpMinute.setAttribute(`placeholder`,`0`)
            return inpMinute
        }
            //Поле ввода секунд
        function inpSecondRend(){
            let inpSecond = document.createElement(`input`)
            inpSecond.value = `0`
            inpSecond.setAttribute(`placeholder`,`0`)
            return inpSecond
        }


        //Кнопка//
        function buttonRend(){
            let btn = document.createElement(`button`);
            allDivText.append(btn);
            btn.setAttribute(`id`, `btn`);
            btn.disabled = true 
            btn.textContent = `Добавить`;
            return btn
        }
    
    document.addEventListener('DOMContentLoaded', function (){
        let container = document.getElementById('allDivText');

        let h1TextRendering = h1TextRend('Список дел');

        let inpTextRendering = inpTextRend()
        let hourTextRendering = hourTextRend()
        let minuteTextRendering = minuteTextRend()
        let secondsTextRendering = secondsTextRend()

        let inpRendering = inpRend()
        let inpHourRendering = inpHourRend()
        let inpMinuteRendering = inpMinuteRend()
        let inpSecondRendering = inpSecondRend()

        let buttonRendering = buttonRend()


        
        allDivTextRend()

        container.append(h1TextRendering)

        container.append(inpTextRendering)        
        container.append(hourTextRendering)
        container.append(minuteTextRendering)
        container.append(secondsTextRendering)

        container.append(inpRendering)
        container.append(inpHourRendering)
        container.append(inpMinuteRendering)
        container.append(inpSecondRendering)

        container.append(buttonRendering)

//██████████████████████████████████████████████████████████████//
//█─────█─█─█─██─█─██─█─██─█─██─█─██─██─██─█────█─██─█────███──█//
//█─█─█─█─█─█─█─██─██─█─█─██─██─█─██─██─██─█─██─█─██─█─██─██─█─█//
//█─█─█─█───█──███────█──███─█──█─██─██─█──█─██─█────█────█─██─█//
//█─────███─█─█─██─██─█─█─██──█─█─██─██──█─█─██─█─██─█─██─█─██─█//
//███─███───█─██─█─██─█─██─█─██─█─────█─██─█────█─██─█─██─█─██─█//
//██████████████████████████████████████████████████████████████//

function check(){
    if(inpRendering.value.length != 0){
        buttonRendering.disabled = false}
    else buttonRendering.disabled = true
    }
setInterval(check, 1); 
//Функция создания дел//


document.querySelector(`#btn`);
btn.addEventListener(`click`, function(){
    //Проверка//
    if (inpRendering.value.length > 0){
        if (!massiveWork.includes(inpRendering.value)){
            massiveWork.push(inpRendering.value,)
            massiveWorkCheck.push({
                name: inpRendering.value,
                status: "false"
                })
            console.log(massiveWork);
            console.log(massiveWorkCheck);
 
            //Отрисовка элементов

                //Контейнер для дел//
                let divText = document.createElement(`div`)
                container.append(divText)

                //Текст дела//
                let text = document.createElement(`p`)
                divText.append(text)
                text.textContent = inpRendering.value + " "+ ` after ${inpHourRendering.value} Hour ${inpMinuteRendering.value} Minute ${inpSecondRendering.value} seconds`
                let _textContent = inpRendering.value
                //Время на исполнение
                let time = (parseInt(inpHourRendering.value)*3600)+(parseInt(inpMinuteRendering.value)*60)+(parseInt(inpSecondRendering.value))

                const func = () => {
                    alert(`${inpRendering.value} время вышло`);
                    text.style.color = `red`
                  };
                  setTimeout(func, time * 1000);

                //Кнопка выполнить//
                let confirmButton = document.createElement(`button`)
                confirmButton.textContent = `✔`;
                confirmButton.setAttribute(`id`,`confirmButton`)
                divText.append(confirmButton)
                

                //Кнопка удалить//
                let cancelButton = document.createElement(`button`)
                cancelButton.setAttribute(`id`,`cancelButton`)
                cancelButton.textContent = `×`;
                divText.append(cancelButton)
                
            //Функционал//

                //Функция подтвердить//
                function confirms(){
                console.log(`Выполнено`);
                text.style.textDecoration = `line-through`
                text.style.color = `green`
                text.style.backgroundColor = `blacks`
                massiveWorkCheck[massiveWork.indexOf(_textContent)].status = true
                console.log(massiveWork);
                console.log(massiveWorkCheck);
                text.setAttribute(`class`,`gone`)
                console.log(text.getAttribute(`class`));
                }

                //Функция отменить//
                function cancel(){
                    console.log(`Удалить`);
                    if (confirm("Вы уверены что хотите удалить дело ?")){
                        divText.removeChild(text)
                        divText.removeChild(confirmButton)
                        divText.removeChild(cancelButton)
                        massiveWork.splice(massiveWork.indexOf(_textContent),1) 
                        console.log(massiveWork);
                    }
                }

                document.querySelector(`#confirmbutton`);
                confirmButton.addEventListener(`click`, confirms);

                document.querySelector(`#cancelButton`);
                cancelButton.addEventListener(`click`, cancel);       
        }

        else alert(`Такое дело уже есть`)
    }
    else{
        alert(`Вы ничего не ввели`)
    }
    if (inpRendering.value.length != 0) {
        buttonRendering.disabled = false
    }
   })
  })
  
})()

