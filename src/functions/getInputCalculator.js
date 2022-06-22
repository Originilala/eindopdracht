import fetchProduct from "./fetchProduct";
import {calculateCalories} from "./addToCalculator";

const calSearchButton = document.getElementById("calorie-button");
const calAddButton = document.getElementById("servings-button");
const calSearchBar = document.getElementById("input-field-calorie");
const calAddBar = document.getElementById("servings-field");

calSearchButton.addEventListener('click', handleClick);
calAddButton.addEventListener('click', handleClick2);

function handleClick () {
    fetchProduct(calSearchBar.value);
    calSearchBar.value='';
}

function handleClick2 () {
    calculateCalories(calAddBar.value);
    calAddBar.value='';
}