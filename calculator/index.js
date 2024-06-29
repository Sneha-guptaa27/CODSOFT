// this is a javascript file for CALCULATOR
let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Text of Button is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue = screenValue+buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'CLR') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}