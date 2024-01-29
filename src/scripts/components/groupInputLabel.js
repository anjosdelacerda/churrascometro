import Input from "./input.js"
import Label from "./label.js"
import Element from "./element.js"

class GroupInputLabel extends Element {
    #type
    #name
    #placeholder
    constructor(props){
        super('div', props)

        const {type, name, placeholder, classList} = props

        this.#type = type
        this.#name = name 
        this.#placeholder = placeholder
        this.classList = Array.isArray(classList) ? classList : [];

        this.createLabel()
        this.createInput()

    }

    createInput() {
        const input = new Input(this.#type, this.#name, this.#placeholder);
        this.appendChild(input.getElement())
    }
    
    createLabel() {
        const label = new Label(this.#name);
        this.appendChild(label.getElement())
    }
}

export default GroupInputLabel