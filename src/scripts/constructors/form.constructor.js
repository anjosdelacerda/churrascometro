import Form from "../components/form.js";
import GroupInputLabel from "../components/groupInputLabel.js";
import Button from "../components/button.js"
import Title from "../components/title.js"

const constructorForm = () =>{
    const inputName = new GroupInputLabel({type: "text", name: "nome", placeholder: "nome",})
    const inputEmail = new GroupInputLabel({type: "email", name: "e-mail", placeholder: "e-mail"})
    const inputCEP = new GroupInputLabel({type: "text", name: "CEP", placeholder: "CEP"})
    const inputChek = new GroupInputLabel({type: "checkbox", name: "email-marketing", placeholder: "aceito receber e-mails com promoções"})

    const registerButton = new Button({text: 'Cadastre-se', type: 'submit'})
    const resetButton = new Button({text:'limpar', type: 'reset'})

    const titleForm = new Title(2, 'Cadastro')

    const registerForm = new Form({
        title: titleForm ,
        inputList: [inputName, inputEmail, inputCEP, inputChek],
        buttonList: [registerButton, resetButton],
        classList: ['register-form']})

    return registerForm.getElement()
}

export default constructorForm