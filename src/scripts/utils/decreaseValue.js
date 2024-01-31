import decreasedValueMen from "./decreasedValueMen.js"
import decreasedValueWoman from "./decreasedValueWoman.js"
import decreasedValueKid from "./decreasedValueKid.js"

const decreasedValues = (idName) =>{
    console.log(idName)
    switch(idName){
        case 'subtract-homens':
            decreasedValueMen()
            break;
        case 'subtract-mulheres':
            decreasedValueWoman()
            break;
        case 'subtract-criancas':
            decreasedValueKid()
            break;
        default:
            console.log('botão não reconhecido')
    }
}

export default decreasedValues