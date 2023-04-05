(function () {
  const massiveWork = [];
  const massiveWorkCheck = [
    {
      name: `name`,
      status: `status`,
    },
  ];
  function allDivTextRend() {
    allDivText.style.backgroundColor = `#4F4F4F`;
    allDivText.style.color = `white`;
  }
  function h1TextRend(title) {
    let h1Text = document.createElement(`h1`);
    h1Text.textContent = title;
    return h1Text;
  }
  function inpTextRend() {
    let inpText = document.createElement(`h3`);
    inpText.textContent = `Дело`;
    inpText.style.width = `208px`;
    inpText.style.margin = `0`;
    inpText.style.float = `left`;
    inpText.style.textAlign = `center`;
    return inpText;
  }
  function inpRend() {
    let inp = document.createElement(`input`);
    inp.setAttribute(`placeholder`, `Введите дело`);
    inp.style.width = `200px`;
    inp.style.textAlign = `left`;
    return inp;
  }
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
    let inpRendering = inpRend();
    let buttonRendering = buttonRend();
    allDivTextRend();
    function divTextRend() {
      let divText = document.createElement(`div`);
      divText.setAttribute;
      return divText;
    }
    function textRend() {
      let text = document.createElement(`p`);
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
    function clearButtonRend() {
      let clearButton = document.createElement(`button`);
      clearButton.setAttribute(`id`, `clearButton`);
      clearButton.textContent = `Очистить`;
      return clearButton;
    }
    let clearButtonRendering = clearButtonRend();
    container.append(h1TextRendering);
    container.append(inpTextRendering);
    container.append(inpRendering);
    container.append(buttonRendering);
    container.append(clearButtonRendering);
    //Отрисовка после перезагрузки//
    if (
      localStorage.getItem("statuseImen") != null ||
      localStorage.getItem("statusDelov") != null
    ) {
      massiveWork.push(...JSON.parse(localStorage.getItem(`statusImen`)));
      massiveWorkCheck.push(...JSON.parse(localStorage.getItem(`statusDelov`)));


      console.log(massiveWork);
      console.log(massiveWorkCheck);
      for (let i = 0; i < massiveWork.length; i++) {
        console.log(`2`);
        
        let divTextRendering = divTextRend();
        let textRendering = textRend();
        let confirmButtonRendering = confirmButtonRend();
        let cancelButtonRendering = cancelButtonRend();

        textRendering.textContent = massiveWork[i];
        container.append(divTextRendering);
        divTextRendering.append(textRendering);
        divTextRendering.append(textRendering);
        divTextRendering.append(confirmButtonRendering);
        divTextRendering.append(cancelButtonRendering);
      
      function confirms() {
        textRendering.style.textDecoration = `line-through`;
        textRendering.style.color = `green`;
        textRendering.style.backgroundColor = `blacks`;
        textRendering.setAttribute(`class`, `true`);
        massiveWorkCheck[
          massiveWork.indexOf(textRendering.textContent) + 1
        ].status = true;
        localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
      }
      function cancel() {
        if (confirm("Вы уверены что хотите удалить дело ?")) {
          divTextRendering.removeChild(textRendering);
          divTextRendering.removeChild(confirmButtonRendering);
          divTextRendering.removeChild(cancelButtonRendering);
          localStorage.setItem(`statusImen`, JSON.stringify(massiveWork));
          localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
        }
      }
      document.querySelector(`#confirmbutton`);
      confirmButtonRendering.addEventListener(`click`, function () {
        massiveWorkCheck[
          massiveWork.indexOf(textRendering.textContent) + 1
        ].status = true;
        confirms();
      });
      document.querySelector(`#cancelButton`);
      cancelButtonRendering.addEventListener(`click`, function () {
        massiveWorkCheck.splice(
          massiveWork.indexOf(textRendering.textContent) + 1,
          1
        );
        massiveWork.splice(massiveWork.indexOf(textRendering.textContent), 1);
        cancel();
      });
    }
  }
    clearButtonRendering.addEventListener(`click`, function () {
      localStorage.removeItem(`statusDelov`);
      localStorage.removeItem(`statusImen`);
      localStorage.removeItem(`bufer`);
    });
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
    buttonRendering.addEventListener(`click`, function () {
      massiveWork.push(inpRendering.value);
      massiveWorkCheck.push({
        name: inpRendering.value,
        status: "false",
      });
      localStorage.setItem(`statusImen`, JSON.stringify(massiveWork));
      localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
      let divTextRendering = divTextRend();
      let textRendering = textRend();
      let confirmButtonRendering = confirmButtonRend();
      let cancelButtonRendering = cancelButtonRend();
      textRendering.textContent = inpRendering.value;
      _textContent = inpRendering.value;
      inpRendering.value = ``;
      container.append(divTextRendering);
      divTextRendering.append(textRendering);
      divTextRendering.append(confirmButtonRendering);
      divTextRendering.append(cancelButtonRendering);
      function confirms() {
        textRendering.style.textDecoration = `line-through`;
        textRendering.style.color = `green`;
        textRendering.style.backgroundColor = `blacks`;
        textRendering.setAttribute(`class`, `true`);
        massiveWorkCheck[
          massiveWork.indexOf(textRendering.textContent) + 1
        ].status = true;
        localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
      }
      function cancel() {
        if (confirm("Вы уверены что хотите удалить дело ?")) {
          divTextRendering.removeChild(textRendering);
          divTextRendering.removeChild(confirmButtonRendering);
          divTextRendering.removeChild(cancelButtonRendering);
          localStorage.setItem(`statusImen`, JSON.stringify(massiveWork));
          localStorage.setItem(`statusDelov`, JSON.stringify(massiveWorkCheck));
        }
      }
      document.querySelector(`#confirmbutton`);
      confirmButtonRendering.addEventListener(`click`, function () {
        console.log(massiveWorkCheck);
        console.log(massiveWork);
        console.log(textRendering.textContent);
        massiveWorkCheck[
          massiveWork.indexOf(textRendering.textContent) + 1
        ].status = true;
        confirms();
      });
      document.querySelector(`#cancelButton`);
      cancelButtonRendering.addEventListener(`click`, function () {
        console.log(
          massiveWorkCheck[massiveWork.indexOf(textRendering.textContent) + 1]
        );
        massiveWorkCheck.splice(
          massiveWork.indexOf(textRendering.textContent) + 1,
          1
        );
        massiveWork.splice(massiveWork.indexOf(textRendering.textContent), 1);
        cancel();
      });
      if (inpRendering.value.length != 0) {
        buttonRendering.disabled = false;
      }
    });
  });
})();
