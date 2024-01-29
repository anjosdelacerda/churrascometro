import Element from "./element.js";

class Form extends Element{

    constructor (props){
        super('form', props)

        const {inputList, buttonList, title, classList} = props
        this.divButtons = null

        if(title){
            this.addClassesToChildren(title, 'title')
            this.appendChild(title.getElement())
        }

        if(Array.isArray(inputList)){
            inputList?.forEach((input) =>{
                this.appendChild(input.getElement())
                this.addClassesToChildren(input, 'group-input-label')
            })
        }

        if(buttonList){
            const newDiv = new Element('div')
            this.divButtons = newDiv
            this.appendChild(this.divButtons.getElement())
            this.addClassesToChildren(newDiv, 'div-butttons')
        }

        if(Array.isArray(buttonList)){
            buttonList?.forEach((button) =>{
                this.divButtons.appendChild(button.getElement())
            })
        }
    }
}

export default Form