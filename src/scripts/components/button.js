import Element from "./element.js";

class Button extends Element{
    constructor(props){
        super('button', props)

        const {text, type} = props
        
        this.text = text
        this.appendText(this.text)
        this.type = type || ""
        this.getElement().setAttribute('type', this.type)
    }
}

export default Button