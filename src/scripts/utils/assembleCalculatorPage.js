import constructorCalculator from "../constructors/calculator.constructor.js"

const assembleCalculatorPage = () =>{
    const app = document.getElementById('app')
    const form = document.querySelector('.register-form')
    const calculator = constructorCalculator()

    app.removeChild(form)
    app.appendChild(calculator)
}

export default assembleCalculatorPage