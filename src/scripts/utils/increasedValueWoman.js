const increasedValueWoman = () =>{
    const input = document.getElementById('input-mulheres')
    const value = parseInt(input.value) + 1
    input.value = value.toString()
}

export default increasedValueWoman