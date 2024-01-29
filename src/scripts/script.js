import App from "./components/app.js"

import constructorForm from "./constructors/form.constructor.js"
import constructorCalculator from "./constructors/calculator.constructor.js"

const root = document.getElementById('root')
const app = new App({tagId: 'app'})

const registerForm = constructorForm()
const calculator = constructorCalculator()

// app.appendChild(registerForm)
app.appendChild(calculator)
root.appendChild(app.getElement())