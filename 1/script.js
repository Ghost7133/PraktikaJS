(function () {
  //██████████████████████████████████████████████//
  //█────█───█────█─██─█────█────█────██─██─█────█//
  //█─██─██─██─██─█─██─█─██─█─██─█─██──█─█─██─██─█//
  //█─██─██─██────█─█──█─████─██─█────██──███────█//
  //█─██─██─██─████──█─█─██─█─██─█─██──█─█─██─██─█//
  //█────██─██─████─██─█────█────█────██─██─█─██─█//
  //██████████████████████████████████████████████//
  const massiveWork = [];
  const massiveWorkCheck = [];
  let idMassiva = 0;
  let indexDela = 0;
  //Некоторые элементы для отрисовки

  //Контейнер для всех дел//
  function allDivTextRend() {
    allDivText.style.backgroundColor = `#4F4F4F`;
    allDivText.style.color = `white`;
  }

  //Основной текст//
  function h1TextRend(title) {
    let h1Text = document.createElement(`h1`);
    h1Text.textContent = title;
    return h1Text;
  }

  //Общее поле ввода//

  //Текст//

  //Поле ввода дел//
  function inpTextRend() {
    let inpText = document.createElement(`h3`);
    inpText.textContent = `Дело`;
    inpText.style.width = `208px`;
    inpText.style.margin = `0`;
    inpText.style.float = `left`;
    inpText.style.textAlign = `center`;
    return inpText;
  }

  //Поле ввода часа//
  function hourTextRend() {
    let hourText = document.createElement(`h3`);
    hourText.textContent = `Часы`;
    hourText.style.width = `177px`;
    hourText.style.margin = `0`;
    hourText.style.float = `left`;
    hourText.style.textAlign = `center`;
    return hourText;
  }

  //Поле ввода минут
  function minuteTextRend() {
    let minuteText = document.createElement(`h3`);
    minuteText.textContent = `Минуты`;
    minuteText.style.width = `177px`;
    minuteText.style.margin = `0`;
    minuteText.style.float = `left`;
    minuteText.style.textAlign = `center`;
    return minuteText;
  }

  //Поле ввода секунд
  function secondsTextRend() {
    let secondsText = document.createElement(`h3`);
    secondsText.textContent = `Секунды`;
    secondsText.style.textAlign = `left`;
    return secondsText;
  }

  //Ввод//

  //Поле ввода дел//
  function inpRend() {
    let inp = document.createElement(`input`);
    inp.setAttribute(`placeholder`, `Введите дело`);
    inp.style.width = `200px`;
    inp.style.textAlign = `left`;
    return inp;
  }

  //Поле ввода часа//
  function inpHourRend() {
    let inpHour = document.createElement(`input`);
    inpHour.value = `0`;
    inpHour.setAttribute(`placeholder`, `0`);
    return inpHour;
  }

  //Поле ввода минут
  function inpMinuteRend() {
    let inpMinute = document.createElement(`input`);
    inpMinute.value = `0`;
    inpMinute.setAttribute(`placeholder`, `0`);
    return inpMinute;
  }
  //Поле ввода секунд
  function inpSecondRend() {
    let inpSecond = document.createElement(`input`);
    inpSecond.value = `0`;
    inpSecond.setAttribute(`placeholder`, `0`);
    return inpSecond;
  }

  //Кнопка//
  function buttonRend() {
    let btn = document.createElement(`button`);
    allDivText.append(btn);
    btn.setAttribute(`id`, `btn`);
    btn.disabled = true;
    btn.textContent = `Добавить`;
    return btn;
  }

  document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("allDivText");

    let h1TextRendering = h1TextRend("Список дел");

    let inpTextRendering = inpTextRend();
    let hourTextRendering = hourTextRend();
    let minuteTextRendering = minuteTextRend();
    let secondsTextRendering = secondsTextRend();

    let inpRendering = inpRend();
    let inpHourRendering = inpHourRend();
    let inpMinuteRendering = inpMinuteRend();
    let inpSecondRendering = inpSecondRend();

    let buttonRendering = buttonRend();

    allDivTextRend();

    //Контейнер для дел//

    function divTextRend() {
      let divText = document.createElement(`div`);
      return divText;
    }

    function textRend() {
      let text = document.createElement(`p`);
      text.textContent =
        inpRendering.value +
        " " +
        ` after ${inpHourRendering.value} Hour ${inpMinuteRendering.value} Minute ${inpSecondRendering.value} seconds`;
      inpRendering.value = ``;
      return text;
    }

    function confirmButtonRend() {
      let confirmButton = document.createElement(`button`);
      confirmButton.textContent = `✔`;
      confirmButton.setAttribute(`id`, `confirmButton`);
      return confirmButton;
    }

    function cancelButtonRend() {
      let cancelButton = document.createElement(`button`);
      cancelButton.setAttribute(`id`, `cancelButton`);
      cancelButton.textContent = `×`;
      return cancelButton;
    }
    function restartButtonRend() {
      let restartButton = document.createElement(`button`);
      restartButton.setAttribute(`id`, `cancelButton`);
      restartButton.textContent = `Выгрузить`;
      return restartButton;
    }

    function confirms() {
      textRendering.style.textDecoration = `line-through`;
      textRendering.style.color = `green`;
      textRendering.style.backgroundColor = `blacks`;
      massiveWorkCheck[massiveWork.indexOf(_textContent)].status = true;
      textRendering.setAttribute(`class`, `true`);

      localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
      console.log(JSON.parse(localStorage.getItem(`statusDelov`)));

      console.log(`Выполнено`);
    }

    function cancel() {
      if (confirm("Вы уверены что хотите удалить дело ?")) {
        divTextRendering.removeChild(textRendering);
        divTextRendering.removeChild(confirmButtonRendering);
        divTextRendering.removeChild(cancelButtonRendering);
        massiveWork.splice(massiveWork.indexOf(_textContent), 1);

        for (let i = 0; i < massiveWorkCheck.length; i++) {
          if (massiveWorkCheck[i].name == _textContent) {
            indexDela = i;
            break;
          }
        }

        massiveWorkCheck.splice(indexDela, 1);

        localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
        console.log(JSON.parse(localStorage.getItem(`statusDelov`)));

        console.log(`Удалить`);
      }
    }

    let restartButtonRendering = restartButtonRend();

    let _textContent = inpRendering.value;

    let divTextRendering = divTextRend();
    let textRendering = textRend();
    let confirmButtonRendering = confirmButtonRend();
    let cancelButtonRendering = cancelButtonRend();

    container.append(h1TextRendering);

    container.append(inpTextRendering);
    container.append(hourTextRendering);
    container.append(minuteTextRendering);
    container.append(secondsTextRendering);

    container.append(inpRendering);
    container.append(inpHourRendering);
    container.append(inpMinuteRendering);
    container.append(inpSecondRendering);

    container.append(buttonRendering);
    container.append(restartButtonRendering);

    //██████████████████████████████████████████████████████████████//
    //█─────█─█─█─██─█─██─█─██─█─██─█─██─██─██─█────█─██─█────███──█//
    //█─█─█─█─█─█─█─██─██─█─█─██─██─█─██─██─██─█─██─█─██─█─██─██─█─█//
    //█─█─█─█───█──███────█──███─█──█─██─██─█──█─██─█────█────█─██─█//
    //█─────███─█─█─██─██─█─█─██──█─█─██─██──█─█─██─█─██─█─██─█─██─█//
    //███─███───█─██─█─██─█─██─█─██─█─────█─██─█────█─██─█─██─█─██─█//
    //██████████████████████████████████████████████████████████████//

    //отрисовка после перезагрузки//
    //window.addEventListener(`unload`, localStorage.clear);
    ////

    function checkRestart() {
      if (
        localStorage.getItem("statuseImen") != null ||
        localStorage.getItem("statusDelov") != null
      ) {
        restartButtonRendering.disabled = false;
      } else restartButtonRendering.disabled = true;
    }
    setInterval(checkRestart, 1);

    restartButtonRendering.addEventListener(`click`, function () {
      if (
        localStorage.getItem("statuseImen") != null ||
        localStorage.getItem("statusDelov") != null
      ) {
        (massiveWork.length = 0),
          (massiveWorkCheck.length = 0),
          massiveWork.push(JSON.parse(localStorage.getItem(`statusImen`))),
          massiveWorkCheck.push(
            JSON.parse(localStorage.getItem(`statusDelov`))
          ),
          container.append(divTextRendering),
          divTextRendering.append(textRendering),
          divTextRendering.append(confirmButtonRendering),
          divTextRendering.append(cancelButtonRendering);
      }
    });

    /////////
    function check() {
      if (inpRendering.value.length != 0) {
        buttonRendering.disabled = false;
      } else buttonRendering.disabled = true;
    }
    setInterval(check, 1);

    inpRendering.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        buttonRendering.click();
      }
    });

    //Функция создания дел//

    buttonRendering.addEventListener(`click`, function () {
      //Проверка//
      if (!massiveWork.includes(inpRendering.value)) {
        massiveWork.push(inpRendering.value);
        massiveWorkCheck.push({
          name: inpRendering.value,
          status: "false",
        });
        localStorage.setItem(`statusImen`, JSON.stringify(massiveWorkCheck));

        localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
        console.log(JSON.parse(localStorage.getItem(`statusDelov`)));

        //Отрисовка элементов//

        container.append(divTextRendering);
        divTextRendering.append(textRendering);

        let time =
          parseInt(inpHourRendering.value) * 3600 +
          parseInt(inpMinuteRendering.value) * 60 +
          parseInt(inpSecondRendering.value);

        const func = () => {
          alert(`${inpRendering.value} время вышло`);
          textRendering.style.color = `red`;
        };
        setTimeout(func, time * 1000);

        divTextRendering.append(confirmButtonRendering);
        divTextRendering.append(cancelButtonRendering);

        //Функционал//

        document.querySelector(`#confirmbutton`);
        confirmButtonRendering.addEventListener(`click`, confirms);

        document.querySelector(`#cancelButton`);
        cancelButtonRendering.addEventListener(`click`, cancel);
      } else alert(`Такое дело уже есть`);
      if (inpRendering.value.length != 0) {
        buttonRendering.disabled = false;
      }
    });
  });
})();
