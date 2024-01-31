class Element {
    #element
    constructor(tagName, props = {}){
        const {classList, tagId, innerHTML} = props
        this.#element = document.createElement(tagName)
        this.classList = Array.isArray(classList) ? classList : [];
        this.innerHTML = innerHTML

        if (Array.isArray(this.classList)) {
           if(this.classList.length > 0){
            this.classList.forEach(styleClass => {
                this.#element.classList.add(styleClass);
            });
           }
        }

        if(tagId){
            if(typeof tagId === 'string'){
                this.#element.id = tagId
            }else{
                console.log('tagId needs to be a string')
            }   
        }
    }

    getElement(){
        return this.#element
    }

    appendChild(childElement){
        this.#element.appendChild(childElement)
    }

    setClassList(classList) {
        this.classList = classList
        this.#element.classList = this.classList
    }

    appendText(text){
        if(typeof text !== 'string'){
            console.log('text needs to be a string')
        }else{
            const newText = document.createTextNode(text)
            this.#element.appendChild(newText)
        }
    }

    appendHTML(html){
            this.#element.innerHTML = html
    }

    addClassesToChildren(children, tagChildren){
        children.setClassList([...children.classList, `${this.classList[0]}__${tagChildren}`])
    }
}

export default Element