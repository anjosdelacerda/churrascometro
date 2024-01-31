const increasedValueKid = () =>{
    const input = document.getElementById('input-criancas')
    const value = parseInt(input.value) + 1
    input.value = value.toString()
}

export default increasedValueKid