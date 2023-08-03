let srButton = document.getElementById('resetButton');
let digits = document.getElementsByClassName('digit');


let counter = 0;


srButton.onclick = function() {
    // Control start/reset button
    let text = srButton.innerText;
    if (text == "START") {
        startCounter();

        



        // to verify code to apply!!






    } else resetCounter();
}





function startCounter() {
    let k=1;
    const lamp = setInterval(() => {
        for (const digitElement of digits) {
            digitElement.classList.contains('on') ? digitElement.classList.remove('on'):digitElement.classList.add('on');    
        } 
        k++;
        if (k==6) {
            clearInterval(lamp);
            for (const elem of digits) {
                elem.classList.contains('bar-center') ? elem.classList.remove('on'):elem.classList.add('on');
            }
            srButton.innerText = 'RESET';



            // struttura codice per comparsa ed attivazione bottoni

            let container = document.getElementById('buttons-container');
            // Insert the code to create plus/minus buttons
            let plusButton = document.createElement('button');
            let minusButton = document.createElement('button');
            plusButton.innerText = '+';
            minusButton.innerText = '-';
            plusButton.classList.add('plus');
            minusButton.classList.add('minus');
            plusButton.setAttribute('id', 'plusButton');
            minusButton.setAttribute('id', 'minusButton');
            container.insertAdjacentElement('beforeend', plusButton);
            container.insertAdjacentElement('afterbegin', minusButton);

            let pButton = document.getElementById('plusButton');
            let mButton = document.getElementById('minusButton');

            pButton.onclick = function() {
                counter++;
                if (counter == 100) counter = 0;
                numberProcessing(counter);
            }

            mButton.onclick = function() {
                counter--;
                if (counter == -1) counter = 0;
                numberProcessing(counter);
            }

        };
    }, 500);
}

function resetCounter() {
    counter = 0;
    for (const elem of digits) {
        elem.classList.contains('bar-center') ? elem.classList.remove('on'):elem.classList.add('on');
    }
}

function numberProcessing(number) {
    let decimal = Math.trunc(number/10);
    let unit = number - decimal * 10;
    digitsVisualization(decimal, 'decimals');
    digitsVisualization(unit, 'units');
}

function digitsVisualization(number, type) {
    switch (number) {
        case 0:
            switchoff(type);
            for (const elem of digits) {
                if (elem.classList.contains('bar-center') && elem.classList.contains(type)) {
                    continue;
                } else if (elem.classList.contains(type)) {elem.classList.add('on')};
            }
            break;
        case 1:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('vertical-right-top') || elem.classList.contains('vertical-right-bottom')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                }
            }
            break;
        case 2:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('digit-horizontal') || elem.classList.contains('vertical-right-top') || elem.classList.contains('vertical-left-bottom')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                }
            }
            break;
        case 3:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('digit-horizontal') || elem.classList.contains('vertical-right')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                }
            }
            break;
        case 4:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('bar-center') || elem.classList.contains('vertical-right') || elem.classList.contains('vertical-left-top')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                }
            }
            break;
        case 5:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('digit-horizontal') || elem.classList.contains('vertical-left-top') || elem.classList.contains('vertical-right-bottom')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                } 
            }
            break;
        case 6:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('digit-horizontal') || elem.classList.contains('vertical-left') || elem.classList.contains('vertical-right-bottom')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                } 
            }
            break;
        case 7:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('vertical-right') || elem.classList.contains('bar-top')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                } 
            }

            break;
        case 8:
            switchoff(type);
            for (const elem of digits) {
                if (elem.classList.contains(type)) {
                    elem.classList.add('on');
                } 
            }
            break;
        case 9:
            switchoff(type);
            for (const elem of digits) {
                if ((elem.classList.contains('vertical-right') || elem.classList.contains('bar-top') || elem.classList.contains('bar-center') || elem.classList.contains('vertical-left-top')) && elem.classList.contains(type)) {
                    elem.classList.add('on');
                }
            }
            break;
    }

    function switchoff(type) {
        for (const item of digits) {
            if (item.classList.contains(type)) {item.classList.remove('on')};
        }
    }
}

