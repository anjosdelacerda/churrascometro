import getCalculatorValues from "./getCalculatorValues.js"
import constructorFoodList from "../constructors/list.constructor.js"

const calculateQuantities = () =>{
    const quantities = getCalculatorValues()
    const quantityMeatMen = quantities.homens * 400
    const quantityMeatWoman = quantities.mulheres * 320 
    const quantityMeatKid = quantities.criancas * 200 
    const quantityBreadAdult = (quantities.homens + quantities.mulheres) * 2
    const quantityCoal = quantities.homens + quantities.mulheres + quantities.criancas
    const quantityBreadKid = quantities.criancas
    const quantityIce = (quantities.homens + quantities.mulheres + quantities.criancas) * 500 
    const quantitySoda = (quantities.homens + quantities.mulheres + quantities.criancas) * 200
    const quantityWhater = (quantities.homens + quantities.mulheres + quantities.criancas) * 200
    const quantityBear = (quantities.homens + quantities.mulheres) * 3
    const list = {
        meatMen: quantityMeatMen / 1000,
        meatWoman: quantityMeatWoman / 1000,
        meatKid: quantityMeatKid / 1000,
        breadAdult: quantityBreadAdult,
        breadKid: quantityBreadKid, 
        coal: quantityCoal,
        ice: Math.ceil(quantityIce / 1000),
        soda: Math.ceil(quantitySoda / 1000),
        water: Math.ceil(quantityWhater / 1000),
        bear: Math.ceil(quantityBear)
    }
    constructorFoodList(list)
}

export default calculateQuantities