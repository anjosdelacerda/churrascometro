import increasedValueKid from "./increasedValueKid.js"
import increasedValueMen from "./increasedValueMen.js"
import increasedValueWoman from "./increasedValueWoman.js"

const increasedValues = (idName) =>{
    switch(idName){
        case 'plus-homens':
            increasedValueMen()
            break;
        case 'plus-mulheres':
            increasedValueWoman()
            break;
        case 'plus-criancas':
            increasedValueKid()
            break;
        default:
            console.log('botão não reconhecido')
    }
}

export default increasedValues