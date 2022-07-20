//Import function, so the data can be fetched with the search query.
import fetchProduct from "./fetchProduct";
//Import function, so the result of the calculation will be injected on the page.
import {calculateCalories} from "./addToCalculator";
import fetchData from "./fetchData";

//Get the button element, so we can set a listener to it.
const calSearchButton = document.getElementById("calorie-button");
const calAddButton = document.getElementById("servings-button");
//Get the input element, so we access the values.
const calSearchBar = document.getElementById("input-field-calorie");
const calAddBar = document.getElementById("servings-field");

//Set listeners on the buttons
calSearchButton.addEventListener('click', handleClick);
calAddButton.addEventListener('click', handleClick2);

//If the search button is clicked we will fetch data with the input
function handleClick() {
    fetchProduct(calSearchBar.value);
    //Empty the input field.
    calSearchBar.value = '';
}

//Do the same when enter is pressed
calSearchBar.addEventListener("keydown", (e) => {
    if(e.key === 'Enter') {
        fetchProduct(calSearchBar.value);
        //Empty the input field.
        calSearchBar.value = '';
    }
});

//If the add button is clicked we will calculate the calories with the input
function handleClick2() {
    //If no value is given or it is below zero, we will multiply with 1, effectively not multiplying but adding the product to calculator.
    calculateCalories(calAddBar.value > 0 ? calAddBar.value : 1);
    //Empty the input field.
    calAddBar.value = '';
}

//Do the same when enter is pressed
calAddBar.addEventListener("keydown", (e) => {
    if(e.key === 'Enter') {
        //If no value is given or it is below zero, we will multiply with 1, effectively not multiplying but adding the product to calculator.
        calculateCalories(calAddBar.value > 0 ? calAddBar.value : 1);
        //Empty the input field.
        calAddBar.value = '';
    }
});
