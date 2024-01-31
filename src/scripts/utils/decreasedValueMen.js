const decreasedValueMen = () =>{
    const input = document.getElementById('input-homens')
    if(input.value > 0){
    const value = parseInt(input.value) - 1
    input.value = value.toString()
    }
}

export default decreasedValueMen