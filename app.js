const keys2 = document.querySelectorAll('button');
const keys = [...document.querySelectorAll('button')];
const listKeycode = keys.map(element => element.dataset.key)
const display = document.querySelector('.display');


document.addEventListener('keydown', (e) => {

    //console.log(e);
    const valor = e.key.toString();
    calcular(valor)
})

document.addEventListener('click', (e) => {


    const valor = e.target.dataset.key;
    calcular(valor)


})


const calcular = (valor) => {

    if (listKeycode.includes(valor)) {

        switch (valor) {

            case '8':
                display.textContent = ""; //Borra contenido
                break;

            case '13':
                const calcul = eval(display.textContent);
                display.textContent = calcul;
                break;

            default:
                const indexKeycode = listKeycode.indexOf(valor);
                const tecla = keys[indexKeycode];
                display.textContent += tecla.innerHTML;
                break;

        }


    }

}

window.addEventListener('error', (e) => {

    alert('Un error apareció en su cálculo: ' + e.message)
})


console.log(keys2);
console.log(listKeycode);