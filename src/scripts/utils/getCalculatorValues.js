const getCalculatorValues = () =>{
    const inputs = document.querySelectorAll('.calc-section__input')
    const quantities = {}
    inputs.forEach((input)=>{
        quantities[input.attributes.id.value.slice(6)] = parseInt(input.value)
    })
    return quantities
}

export default getCalculatorValues