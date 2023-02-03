document.addEventListener('DOMContentLoaded', initApp)

let firstNumber
let secondNumber
let operator
let firstEquation = true
let lastEquations = []
let lastEquationsEl




function initApp() {
    firstNumber = document.getElementById('first-number')
    secondNumber = document.getElementById('second-number')
    operator = document.getElementById('operator')
    lastEquationsEl = document.getElementById('last-equations')

    firstNumber.innerHTML = '0'
    
    console.log('APP STARTED')

    

    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener('click', (event) => {
            const inputNumber = event.target.textContent;
            console.log(inputNumber)
            if (operator.innerHTML == '') {
                handleFirstNumber(inputNumber)
            } else {
                handleSecondNumber(inputNumber)
            }

        })
    })

    const operatorButtons = document.querySelectorAll('.operator')
    operatorButtons.forEach((operator) => {
        operator.addEventListener('click', (event) => {
            const content = event.target.textContent
            console.log(content)
            handleOperator(content) 
        })
    })

    const equalButton = document.getElementById('equal')
    equalButton.addEventListener('click', () => {
        handleEqual()
    })

    const clearButton = document.getElementById('clear')
    clearButton.addEventListener('click', () => {
        handleClear()
    })

    const backButton = document.getElementById('back')
    backButton.addEventListener('click', () => {
        handleBack()
    })



}

function handleFirstNumber(number) {
    console.log('HANDLE FIRST')
    if (firstNumber.innerHTML == "0") {
        firstNumber.innerHTML = number
        return
    } 
    if (!firstEquation) {
        return
    }
    if (firstNumber.innerHTML.length >= 5) {
        return
    }
    else {
        firstNumber.innerHTML += number
    }
}

function handleSecondNumber(number) {
    console.log('HANDLE SECOND')
    if (secondNumber.innerHTML.length >= 5) {
        return
    }
    if (secondNumber.innerHTML == '' && number != "0") {
        secondNumber.innerHTML = number
    } else {
        secondNumber.innerHTML += number
    }

}

function handleOperator(input) {
    if (firstNumber.innerHTML != "0") {
        operator.innerHTML = input
    }
    
}



function handleClear() {
    firstNumber.innerHTML = "0"
    operator.innerHTML = ''
    secondNumber.innerHTML = ''
}

function handleBack() {
    if (operator.innerHTML == '' && firstNumber.innerHTML != "0") {
        if (firstNumber.innerHTML.length == 1) {
            firstNumber.innerHTML = "0"
            return
        }
        firstNumber.innerHTML = firstNumber.innerHTML.slice(0, -1)
        return
    }
    if (operator.innerHTML != '' && secondNumber.innerHTML == '') {
        operator.innerHTML = ''
        return
    } 
    if (operator.innerHTML != '' && secondNumber.innerHTML != '') {
        secondNumber.innerHTML = secondNumber.innerHTML.slice(0, -1)
        return
    }
}

function handleEqual() {
    if (secondNumber.innerHTML != '') {
        const result = `${firstNumber.innerHTML}${operator.innerHTML}${secondNumber.innerHTML}`
        lastEquations.push(result)
        operator.innerHTML = ''
        secondNumber.innerHTML = ''
        firstNumber.innerHTML = Math.trunc(eval(result).toString())
        

        if (firstNumber.innerHTML == "0") {
            firstEquation = true
        } else {
            firstEquation = false
        }

        console.log(lastEquations.length)
        if (lastEquations.length == 1) {
            const el = document.createElement('h3')
            el.textContent = result
            lastEquationsEl.appendChild(el)
        } else {
            lastEquationsEl.innerHTML = ''
            console.log('WE ARE HERE')
            console.log(lastEquations)
            
            for (var i = lastEquations.length - 1; i >= 0; i--) {
                const el = document.createElement('h3')
                console.log('INSIDE THE LOOP')
                el.textContent = lastEquations[i]
                console.log(lastEquations[i])
                lastEquationsEl.appendChild(el)
            }
        }
        


    }
}

