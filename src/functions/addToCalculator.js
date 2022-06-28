import {createCalProduct, createCalList} from "./createCalculatorPage.js"


let totalServing = [];
let prodArr = [];
export const addToCalculator = (product) => {
    prodArr = [];
    const {label: products, nutrients: {CHOCDF, ENERC_KCAL, FAT}} = product.food;
    const amount = (Math.round((product.measures[0].weight) * 0.1) / 0.1);
    const carbs = (Math.round((CHOCDF) * 0.1) / 0.1);
    const calories = (Math.round((ENERC_KCAL) * 0.1) / 0.1);
    const fats = (Math.round((FAT) * 0.1) / 0.1);
    prodArr.push({product: products, calorie: calories, fat: fats, carb: carbs});
    createCalProduct(products, amount);
}

export const calculateCalories = (servings) => {
    const newArr = prodArr.map((element) => {
        totalServing.push({
            product: element.product,
            calorie: (element.calorie * servings),
            fat: (element.fat * servings),
            carb: (element.carb * servings)
        });
    })
    prodArr = [];
    createCalList(totalServing);
}