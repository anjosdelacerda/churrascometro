const increasedValueMen = () =>{
    const input = document.getElementById('input-homens')
    const value = parseInt(input.value) + 1
    input.value = value.toString()
}

export default increasedValueMen