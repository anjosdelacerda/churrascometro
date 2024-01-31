const decreasedValueWoman = () =>{
    const input = document.getElementById('input-mulheres')
    if(input.value > 0){
    const value = parseInt(input.value) - 1
    input.value = value.toString()
    }
}

export default decreasedValueWoman