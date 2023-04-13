const keys = [...document.querySelectorAll("button")];
const listKeycode = keys.map((element) => element.dataset.key);
const display = document.querySelector(".display");
const table = document.querySelector("table");
let operacionDone = false;

document.addEventListener("keydown", (e) => {
  const valor = e.keyCode.toString();
  console.log(valor);
  calcular(valor);
});

document.addEventListener("click", (e) => {
  const valor = e.target.dataset.key;
  console.log(valor);
  calcular(valor);
});

const displayLog = function (display) {
  let log = display;
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyy = today.getFullYear();

  let date = `${dd}/${mm}/${yyy}`;

  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let seconds = addZero(today.getSeconds());

  let current_time = `${hours}:${minutes}:${seconds}`;

  let completeDate = date + " " + current_time;

  let template = `
                    <tr>
                    <td>${log}</td>
                    <td>${completeDate} </td>
                    </tr>
                    `;
  table.innerHTML += template;
};

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

const calcular = (valor) => {
  if (listKeycode.includes(valor)) {
    switch (valor) {
      case "8":
        display.textContent = ""; //Borra contenido
        break;

      case "13":
        const calcul = eval(display.textContent);
        displayLog(display.textContent);
        display.textContent = calcul;
        operacionDone = true;

        /*Crear tabla Html donde se registren 2 columans la primera los log de las operaciones realizadas (ej: 3 + 5 *9) y la seguna la fecha actual con hora de la operacion (07/04/2023 19:36)*/
        break;

      default:
        if (operacionDone) {
          display.textContent = "";
          operacionDone = false;
        }
        const indexKeycode = listKeycode.indexOf(valor);
        const tecla = keys[indexKeycode];
        display.textContent += tecla.innerHTML;
        break;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Un error apareció en su cálculo: " + e.message);
});
