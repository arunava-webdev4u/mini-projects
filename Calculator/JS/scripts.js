const topDisplay = document.querySelector(".display-top");          //
const mainDisplay = document.querySelector(".display-main");        // select all the display
const tempDisplay = document.querySelector(".display-temp-result"); //

const numbers = document.querySelectorAll(".number");               // select all the numbers
const operations = document.querySelectorAll(".operation");         // select all the operations
const buttons = document.querySelectorAll(".button");               // select all the buttons

const equal = document.querySelector(".equal");                     // select equal button
const C = document.querySelector(".all-clear");                     // sekect all clear/reset button
const CE = document.querySelector(".last-entity-clear");            // sekect clear button

let topDis = '';
let mainDis = '';
let tempResult = null;
let lastOperation = '';
let haveDot = false;

// Button click sound function call
buttonClickSound();

// This section setup the number button operations
numbers.forEach(function(number) {
    number.addEventListener('click', function (e) {

        // This section is to ensure that the user can't enter more than 1 dot
        if ((e.target.innerText === '.') && (!haveDot))
            haveDot = 'true';
        else if ((e.target.innerText === '.') && (haveDot))
            return;
        
        // This section updates the main display text    
        mainDis += e.target.innerText;
        mainDisplay.innerText = mainDis;
    });
});

// This section setup the number button operations
operations.forEach(function (operation) {
    operation.addEventListener('click', function (e) {
        
        // can not add operation with out entering the first operand
        if (!mainDis)
            return;

        haveDot = false;
        const operationName = e.target.innerText;

        // do math only when all operand is present, else store that in temp result
        if (topDis && mainDis && tempResult)
            doMath();
        else
            tempResult = parseFloat(mainDis);

        clearDisplay(operationName);
        lastOperation = operationName;
    });
});

// This maintain display texts on each steps
function clearDisplay(name = '')
{
    // Update the top display on each operation
    topDis += mainDis + ' ' + name + ' ';
    topDisplay.innerText = topDis;
    
    //clear the main display on each operation
    mainDisplay.innerText = '';
    mainDis = '';

    // set the temp result value (for initial value only)
    tempDisplay.innerText = tempResult;
}

// this function does the math
function doMath()
{
    if (lastOperation === 'x')
        tempResult = parseFloat(tempResult) * parseFloat(mainDis);

    else if (lastOperation === '/')
        tempResult = parseFloat(tempResult) / parseFloat(mainDis);

    else if (lastOperation === '%')
        tempResult = parseFloat(tempResult) % parseFloat(mainDis);

    else if (lastOperation === '+')
        tempResult = parseFloat(tempResult) + parseFloat(mainDis);

    else if (lastOperation === '-')
        tempResult = parseFloat(tempResult) - parseFloat(mainDis);
}

equal.addEventListener('click', function(e){
    // if any of the operand is empty, then return
    if (!topDis || !mainDis)    
        return;

    haveDot = false;
    doMath();
    clearDisplay();

    // clear the temp display, top display and show the final result in the main display
    mainDis = tempResult;
    topDis = '';
    mainDisplay.innerText = tempResult;
    tempDisplay.innerText = '';
});

// click on C will clear everything, i.e. reset
C.addEventListener('click', function(e){
    topDisplay.innerText = '0';
    mainDisplay.innerText = '0';
    tempDisplay.innerText = '0';
    topDis = '';
    mainDis = '';
    tempResult = null;
});

// click on CE will clear the number on main display,
CE.addEventListener('click', function (e) {
    mainDisplay.innerText = '';
    mainDis = '';
});

/* This section is for accepting keyboard inputs */
window.addEventListener('keydown', function(e){
    if (e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '.')
        numberPress(e.key);
    else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '%')
        operationPress(e.key);
    else if (e.key === '*')
        operationPress('x');
    else if (e.key === 'Enter' || e.key === '=')
        clickEqual();
        
});

// This function is for keyboard number inputs
function numberPress(key)
{
    numbers.forEach(function(number){
        if (number.innerText === key)
            number.click();
    })
}

// This function is for keyboard operations inputs
function operationPress(key)
{
    operations.forEach(function(operation){
        if (operation.innerText === key)
            operation.click();
    });
}

// This function is for capturing enter/=
function clickEqual()
{
    equal.click();
}

// This function is to create button sound
function buttonClickSound()
{
    const audio = new Audio();
    audio.src = "../Audio/click_sound.mp3"
    for (let i = 0; i <buttons.length; i++)
    {
        buttons[i].addEventListener('click', function(){
            audio.play();
        });
    }
}