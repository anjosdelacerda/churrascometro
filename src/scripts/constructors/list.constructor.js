import FoodList from "../components/foodList.js";
import Title from "../components/title.js"

const constructorFoodList = (obj) =>{
    const title = new Title(2, 'Tabela de referência(sugestão)', {classList: ['food-list__title']})
    const foodList = new FoodList({foodListObj: obj, title: title})
    const calculator = document.querySelector('.calculator')
    const app = document.getElementById('app')
    app.removeChild(calculator)
    app.appendChild(foodList.getElement())
}

export default constructorFoodList