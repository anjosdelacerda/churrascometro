import postUser from "../../utils/postUser.js";

const addEventPostUser = ()=>{
    const form = document.querySelector('.register-form')

    if(form){
    form.addEventListener('submit', postUser)
}
}

export default addEventPostUser