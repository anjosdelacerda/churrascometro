const postUser = (event) => {
    event.preventDefault()
    const elements = document.querySelectorAll('.input-values')
    const user = {}
    for(let i = 0; i < elements.length; i++){
        const element = elements[i]
        const key = element.attributes.name.value
        const value = element.value
        if(element.attributes.checked){
            element.checked === true ? user[key] = true : user[key] = false
        }else{
            user[key] = value
        }   
    }
}

export default postUser