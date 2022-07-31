//Import the functions for injecting the result on the website page.
import {createCalProduct, createCalList} from "./createCalculatorPage.js";

//Declaring arrays outside the functions, so we can use them anywhere.
let totalServing = [];
let prodArr = [];
//A function that takes the result of the whole object of the data fetch and puts them in an array.
export const addToCalculator = (product) => {
    //Clear the array with every click on the button.
    prodArr = [];
    //Destructure the data we need.
    const {label: products, nutrients: {CHOCDF, ENERC_KCAL, FAT}} = product.food;
    //Put the data in variables.
    const amount = (Math.round((product.measures[0].weight) * 0.1) / 0.1);
    const carbs = (Math.round((CHOCDF) * 0.1) / 0.1);
    const calories = (Math.round((ENERC_KCAL) * 0.1) / 0.1);
    const fats = (Math.round((FAT) * 0.1) / 0.1);
    //Push the data in the cleared array
    prodArr.push({product: products, calorie: calories, fat: fats, carb: carbs});
    //Inject the data on the page with helper function.
    createCalProduct(products, amount);
}
//This function uses the prodArr array, which was declared outside the previous functions, so we can use it right away.
//It takes the amount of servings (integer) and multiplies the values in the array.
export const calculateCalories = (servings) => {
    //Loop through the array and multiply the values with the portions/servings.
    prodArr.map((element) => {
        //Push into a new array
        totalServing.push({
            product: element.product,
            calorie: (element.calorie * servings),
            fat: (element.fat * servings),
            carb: (element.carb * servings)
        });
    });
    //Clear the first array, the user first has to do another fetch, before calculating anything again.
    prodArr = [];
    //Inject the data on the page with helper function.
    createCalList(totalServing);
}