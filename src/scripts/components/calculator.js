import Element from "./element.js";

class Calculator extends Element {

    constructor(props){
        super('section', props)

        const {categoriesList, classList, title, buttonList} = props
        this.classList = classList

        if(title){
            this.addClassesToChildren(title, 'title')
            this.appendChild(title.getElement())
        }

        if(categoriesList){
            categoriesList.forEach((category)=>{
                this.appendChild(category.getElement())
                this.addClassesToChildren(category, 'category')
            })
        }

        if(Array.isArray(buttonList)){
            buttonList?.forEach((button) =>{
                this.appendChild(button.getElement())
            })
        }

    }
}

export default Calculator