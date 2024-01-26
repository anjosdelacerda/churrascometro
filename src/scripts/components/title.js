import Element from "./element.js";

class Title extends Element {

    #text
    constructor(size, text, props){
        let titleSize = parseInt(size);
        
        if (isNaN(titleSize) || titleSize < 1) {
            titleSize = 2;
        }else if (titleSize > 6) {
            titleSize = 6;
        }
        super(`h${Math.round(titleSize)}`, props)

        this.#text = text

        this.appendText(this.#text)
    }

    isInteger(number){
        return number % 1 === 0
    }
}

export default Title