
let counter = 0;

let srButton = document.getElementById('resetButton'); // The central button START/RESET
let digits = document.getElementsByClassName('digit'); // this is a collection that contains all components (<div> elements) of the digits of the counter
let container = document.getElementById('buttons-container'); // Container of buttons Plus, Minus and START/RESET

container.addEventListener('click', myfunction); // Event listener on button container in order to listen all clicks on inside elements

            
function myfunction(event) {

    // Function to manage the click event on the elements inside the buttons <div> wrapper 

    let target = event.target;
    switch (target.id) {
        case 'resetButton':
            let text = srButton.innerText;
            if (text == "START") {
                startCounter();
            } else resetCounter();  
            break;

        case 'plusButton':
            counter++;
            if (counter == 100) counter = 0;
            numberProcessing(counter);
            break;

        case 'minusButton':
            counter--;
            if (counter == -1) counter = 0;
            numberProcessing(counter);
            break;

        default:
            break;
    } 
}

function startCounter() {

    // Function starts the counter flashing all digits for about two seconds, afterwards tha function to create the Plus and Minnus buttons is called 

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

            // Calling to function that creates the Plus and Minus buttons

            createButton('button', '+', 'plus', 'plusButton');
            createButton('button', '-', 'minus', 'minusButton');
        };
    }, 500);
}



function createButton (tagName, innerContent, classAttribute, idAttribute) {

    /* Function creates a new Item according to input parameters, in this case the function 
       is used to create the minus and plus buttons
    */

    let newItem = document.createElement(tagName);
    newItem.innerText = innerContent;
    newItem.classList.add(classAttribute);
    newItem.setAttribute('id', idAttribute);
    if (innerContent == '+') {
        container.insertAdjacentElement('beforeend', newItem);
    } else {
        container.insertAdjacentElement('afterbegin', newItem);
    }
}

function resetCounter() {

    // Function to set counter to zero

    counter = 0;
    for (const elem of digits) {
        elem.classList.contains('bar-center') ? elem.classList.remove('on'):elem.classList.add('on');
    }
}

function numberProcessing(number) {

    /* This function is called when we have a number (the only input parameter) and want to discriminate decimals from units. 
       A new function will be called in order to display the numbers on the counter.
    */

    let decimal = Math.trunc(number/10);
    let unit = number - decimal * 10;
    digitsVisualization(decimal, 'decimals');
    digitsVisualization(unit, 'units');
}

function digitsVisualization(number, type) {

    /* Function that works on a number to display on the screen of the counter. It will be displayed on the right position according to the
       specification of the second parameter that says if the number is a decimal digit or unit.  
    */

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

        /* The function works switching off all components of the digit on the counter simply acting on the class specification removing the 'on' attribute 
           that gives the color green to the digit.
        */

        for (const item of digits) {
            if (item.classList.contains(type)) {item.classList.remove('on')};
        }
    }
}

