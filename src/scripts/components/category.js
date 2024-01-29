import Element from "./element.js";

class Category extends Element {

    constructor(props){
        super('div', props)

        const {buttonList, tagId, title, inputList} = props 
        this.tagId = tagId
        this.divButtons = null

        if(title){
            this.addClassesToChildren(title, 'title')
            this.appendChild(title.getElement())
        }

        if(inputList){
            const input = inputList[0]
            this.addClassesToChildren(input, 'input')
            input.getElement().setAttribute('value', '0')
            this.appendChild(input.getElement())
        }

        
        const newDiv = new Element('div')
        this.divButtons = newDiv
        this.appendChild(this.divButtons.getElement())
        this.addClassesToChildren(newDiv, 'div-butttons')
        
        
        if(Array.isArray(buttonList)){
            buttonList?.forEach((button, index) =>{
                const operator = index % 2 === 0 ? 'subtract' : 'plus'
                button.getElement().setAttribute('id', `${operator}-${tagId}`)
                this.divButtons.appendChild(button.getElement())
            })
        }

    }
}

export default Category