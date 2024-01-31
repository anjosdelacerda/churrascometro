import decreasedValues from "../../utils/decreaseValue.js"

const addEventSubtractValues = () =>{
    const buttons = document.querySelectorAll('.subtract-button')
    const calculator = document.querySelectorAll('.calculator')
    if(calculator){
        buttons.forEach((button) =>{
            button.addEventListener('click', () => {
                const idButton = button.attributes.id.value
                decreasedValues(idButton)
            })
        })
    }
}

export default addEventSubtractValues