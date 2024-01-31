import App from "./components/app.js"
import Title from "./components/title.js"

import constructorForm from "./constructors/form.constructor.js"
import constructorCalculator from "./constructors/calculator.constructor.js"

import addEventPostUser from "./events/form/postUser.event.js"
import addEventPlusValues from "./events/calculator/plusValue.event.js"
import addEventSubtractValues from "./events/calculator/subtracrtValue.event.js"
import addEventCalculateButton from "./events/calculator/calculateValues.event.js"

const root = document.getElementById('root')
const app = new App({tagId: 'app'})
const title = new Title(1, 'Churrascômetro', {tagId: 'titulo'})

const registerForm = constructorForm()
const calculator = constructorCalculator()

app.appendChild(title.getElement())
app.appendChild(registerForm)
root.appendChild(app.getElement())


if(app.getElement().querySelector('.register-form') !== null){
    addEventPostUser()
}

if(JSON.parse(localStorage.getItem('user'))){
    app.getElement().removeChild(registerForm)
    app.appendChild(calculator)
    addEventPlusValues()
    addEventSubtractValues()
    addEventCalculateButton()
}

