import fetchData from "./fetchData.js";

const recipeSearch = document.getElementById('input-field');
const mealField = document.getElementById('meal-field');
const cuisineField = document.getElementById('cuisine-field');
const dietField = document.getElementById('diet-field');
const timeField = document.getElementById('time-field');

const searchButton = document.getElementById('search-button');
const jumpButton = document.getElementById('main-hero-link');

jumpButton.addEventListener("click", function jumpTo() {
    const goToSearch = document.getElementById('main-ribbon').offsetTop;
    window.scrollTo(0, goToSearch);
})

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

