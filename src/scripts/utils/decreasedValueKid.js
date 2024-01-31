const decreasedValueKid = () =>{
    const input = document.getElementById('input-criancas')
    if(input.value > 0){
    const value = parseInt(input.value) - 1
    input.value = value.toString()
    }
}

export default decreasedValueKid