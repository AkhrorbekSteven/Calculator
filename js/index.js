const historyValue  = document.querySelector('.history-value'),
    outputValue     = document.querySelector('.output-value'),
    numberButtons   = document.querySelectorAll('.number'),
    operatorButtons = document.querySelectorAll('.operator'),
    equalButton     = document.querySelector('#equal'),
    deleteButton    = document.querySelector('#delete'),
    clearButton     = document.querySelector('#clear'),
    inversedNumber  = document.querySelector('#inversedNumber'),
    squareButton    = document.querySelector('#square'),
    cubeButton      = document.querySelector('#cube')


function getHistory () {
    return historyValue.innerText
}
function showHistory(number) {
    historyValue.innerText = number
}

function getOutput () {
    return outputValue.innerText
}
function showOutput (number) {
    outputValue.innerText = number
}


numberButtons.forEach((button) => {
    button.addEventListener(('click'), () => {
        let output = getOutput()
        output += button.innerText
        if (output[0] == 0 && !isNaN(output[1])) {
            output = output.substring(1)
        }
        if (isNaN(output[output.length - 1]) && isNaN(output[output.length - 2])) {
            output = output.slice(0, -1)
        } 
        showOutput(output)
    })
})
operatorButtons.forEach((button) => {
    button.addEventListener(('click'), () => {
        let result = getOutput()
        if (button.innerText == '%') {
            result /= 100
        }
        if (button.innerText == '!') {
            let print = 1
            for (let i = 1; i <= result; i++) {
                print *= i
            }
            result = print
        }
        if (button.innerText == '√') {
            result = Math.sqrt(result)
        }
        if (button.innerText == '±') {
            result *= (-1)
        }
        showOutput(result)
    })
})


equalButton.addEventListener('click', () => {
    let result = eval(getOutput())
    showOutput(result)
})

deleteButton.addEventListener('click', () => {
    let result = getOutput()
    result = result.slice(0, -1)
    if (result == "") {
        result = 0
    }
    showOutput(result)
})

clearButton.addEventListener('click', () => {
    let result = getOutput()
    result = 0
    showOutput(result)
})

inversedNumber.addEventListener('click', () => {
    let result = Number(getOutput())
    result = 1 / result
    showOutput(result)
})

squareButton.addEventListener(('click'), () => {
    let result = Number(getOutput())
    result = result ** 2
    showOutput(result)
})

cubeButton.addEventListener(('click'), () => {
    let result = Number(getOutput())
    result = result ** 3
    showOutput(result)
})
