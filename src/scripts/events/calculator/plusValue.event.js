import increasedValues from "../../utils/increasedValues.js"

const addEventPlusValues = () =>{
    const buttons = document.querySelectorAll('.plus-button')
    const calculator = document.querySelectorAll('.calculator')
    if(calculator){
        buttons.forEach((button) =>{
            button.addEventListener('click', () => {
                const idButton = button.attributes.id.value
                increasedValues(idButton)
            })
        })
    }
}

export default addEventPlusValues