import calculateQuantities from "../../utils/calculateQuantities.js";

const addEventCalculateButton = () =>{
    const calcbutton = document.getElementById('calculator-button')
    const calculator = document.querySelectorAll('.calculator')
    if(calculator){
        calcbutton.addEventListener('click', calculateQuantities)
    }
}

export default addEventCalculateButton