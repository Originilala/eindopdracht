//Import function, so the data can be fetched with the search query.
import fetchData from "./fetchData.js";

//Get the input element, so we access the values.
const recipeSearch = document.getElementById('input-field');
const mealField = document.getElementById('meal-field');
const cuisineField = document.getElementById('cuisine-field');
const dietField = document.getElementById('diet-field');
const timeField = document.getElementById('time-field');

//Get the button element, so we can set a listener to it.
const searchButton = document.getElementById('search-button');
const jumpButton = document.getElementById('main-hero-link');

//Set a listener on the button
jumpButton.addEventListener("click", function jumpTo() {
    //Get the (vertical) location of the ribbon (where the input fields are) and put it in a variable.
    const goToSearch = document.getElementById('main-ribbon').offsetTop;
    //Scroll/jump to the location (of the input fields)
    window.scrollTo(0, goToSearch);
})

//Set a listener on the button
searchButton.addEventListener("click", function startApp() {
    //Get all the input values on a mouse click.
    const searchQuery = {
        queryVal: recipeSearch.value,
        mealTypeVal: mealField.value,
        cuisineTypeVal: cuisineField.value,
        dietTypeVal: dietField.value,
        timeVal: timeField.value
    }
    //Fetch the data with this object of search query and filters
    fetchData(searchQuery);
});

//Do the same when enter is pressed
recipeSearch.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        //Get all the input values on a mouse click.
        const searchQuery = {
            queryVal: recipeSearch.value,
            mealTypeVal: mealField.value,
            cuisineTypeVal: cuisineField.value,
            dietTypeVal: dietField.value,
            timeVal: timeField.value
        }
        //Fetch the data with this object of search query and filters
        fetchData(searchQuery);
    }
});
