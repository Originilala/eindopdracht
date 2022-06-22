import fetchData from "./fetchData";

const recipeSearch = document.getElementById('input-field');
const mealField = document.getElementById('meal-field');
const cuisineField = document.getElementById('cuisine-field');
const dietField = document.getElementById('diet-field');
const timeField = document.getElementById('time-field');

const searchButton = document.getElementById('search-button');

searchButton.addEventListener("click", function startApp() {
    const searchQuery = {
        queryVal: recipeSearch.value,
        mealTypeVal: mealField.value,
        cuisineTypeVal: cuisineField.value,
        dietTypeVal: dietField.value,
        timeVal: timeField.value
    }

    fetchData(searchQuery);
});

