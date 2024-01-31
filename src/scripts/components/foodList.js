import Element from "./element.js";

class FoodList extends Element {

    constructor(props){
        super('article', props)

        const {foodListObj, title} = props 
        this.foodList = foodListObj
        this.list = null
        this.text = null

        if(title){
            this.appendChild(title.getElement())
        }

        const list = new Element('div', {classList: ['food-list__list']})
        const text = `
        <p class="food-list__items">
        <strong><h5 class="food-list__item-title">Carne</h5></strong> 
            ${foodListObj.meatMen} para os homens
            ${foodListObj.meatWoman} para as  mulheres
            ${foodListObj.meatKid} para as crianças
        </p>
        <p class="food-list__items">
        <strong><h5 class="food-list__item-title">Pão de alho</h5></strong>
            ${foodListObj.breadAdult} para os adultos
            ${foodListObj.breadKid} para as crianças 
        </p>
        <p class="food-list__items">
        <strong><h5 class="food-list__item-title">Carvão</h5></strong>
            ${foodListObj.coal} no total
        </p>
        <p class="food-list__items">
        <strong><h5 class="food-list__item-title">Gelo</h5></strong>
            ${foodListObj.ice} no total
        </p>
        <p class="food-list__items">
        <strong><h5 class="food-list__item-title">Refrigerante</h5></strong>
            ${foodListObj.soda} no total
        </p>
        <p class="food-list__items">
        <strong><h5 class="food-list__item-title">Água</h5></strong>
            ${foodListObj.water} garrafas
        </p>
        <p class="food-list__items">
        <strong><h5 class="food-list__item-title">Cerveja</h5></strong>
            ${foodListObj.bear} garrafas
        </p>
        `
        this.list = list 
        this.text = text.replace(/\n/g, "<br>")
        this.list.appendHTML(this.text)

        this.appendChild(this.list.getElement())

    }

}

export default FoodList