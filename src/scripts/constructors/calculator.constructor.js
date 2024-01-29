import Button from "../components/button.js"
import Title from "../components/title.js"
import Input from "../components/input.js"
import Category from "../components/category.js"
import Calculator from "../components/calculator.js"


const constructorCalculator = () =>{

    const subtractButtonMen = new Button({text: 'sub'})
    const plusButtonMen = new Button({text: 'add'})
    const subtractButtonWomen = new Button({text: 'sub'})
    const plusButtonWomen = new Button({text: 'add'})
    const subtractButtonKid = new Button({text: 'sub'})
    const plusButtonKid = new Button({text: 'add'})
    const calculatorButton = new Button({text: 'calcular'})

    const menInput = new Input('text', 'homens', '', {tagId: 'input-homens'})
    const womenInput = new Input('text', 'mulheres', '', {tagId: 'input-mulheres'})
    const kidInput = new Input('text', 'criancas', '', {tagId: 'input-criancas'})

    const title = new Title(2,'Calcule seu churrasco')
    const menTitle = new Title(3, 'Homens')
    const womenTitle = new Title(3, 'Mulheres')
    const kidTitle = new Title (3, 'Crianças')

    const categoryMen = new Category({
        title: menTitle,
        tagId: 'homens',
        inputList: [menInput],
        buttonList: [subtractButtonMen, plusButtonMen],
        classList:['calc-section']})

    const categoryWomen = new Category({
        title: womenTitle,
        tagId: 'mulheres',
        inputList: [womenInput],
        buttonList: [subtractButtonWomen, plusButtonWomen],
        classList:['calc-section']})

    const categoryKid = new Category({
        title: kidTitle,
        tagId: 'criancas',
        inputList: [kidInput],
        buttonList: [subtractButtonKid, plusButtonKid],
        classList:['calc-section']})
    
    const calculator = new Calculator({
        classList:['calculator'], 
        title: title, 
        categoriesList: [categoryMen, categoryWomen, categoryKid], 
        buttonList: [calculatorButton]})

        return calculator.getElement()
}

export default constructorCalculator