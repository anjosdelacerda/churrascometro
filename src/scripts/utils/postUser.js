import setObjToLocalStorate from "./setObjToLocalStorage.js"
import assembleCalculatorPage from "./assembleCalculatorPage.js"
import postUserData from "../API/postUser.api.js"
const postUser = (event) => {
    event.preventDefault()
    const elements = document.querySelectorAll('.input-values')
    const user = {}
    elements.forEach((element) =>{
        const key = element.attributes.name.value
        const value = element.value
        if(element.attributes.checked){
            element.checked === true ? user[key] = true : user[key] = false
        }else{
            user[key] = value
        } 
    })
    user.postalCode = user.postalCode.replace(/\D/g, '')
    setObjToLocalStorate(user, 'user')
    const userStorage = JSON.parse(localStorage.getItem('user'))
    if(userStorage){
        postUserData()
        assembleCalculatorPage()
    }
}

export default postUser