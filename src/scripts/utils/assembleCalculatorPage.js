import constructorCalculator from "../constructors/calculator.constructor.js"
import addEventCalculateButton from "../events/calculator/calculateValues.event.js"
import addEventPlusValues from "../events/calculator/plusValue.event.js"
import addEventSubtractValues from "../events/calculator/subtracrtValue.event.js"

const assembleCalculatorPage = () =>{
    const app = document.getElementById('app')
    const form = document.querySelector('.register-form')
    const calculator = constructorCalculator()

    app.removeChild(form)
    app.appendChild(calculator)
    addEventPlusValues()
    addEventSubtractValues()
    addEventCalculateButton()
}

export default assembleCalculatorPage