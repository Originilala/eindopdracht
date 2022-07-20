//Import listener for the page transition when closing the page.
//When opening the page.
//Import the listener for the button for the recipe search.
//And the fetch for the 3 results in the carousel.
import {setListeners} from "./functions/switchPage.js";
import openPage from "./functions/pageTransitionAnim.js";
import "./functions/getInputRecSearch.js";
import fetchDataHeader from "./functions/createCardHeader";

//Search for the recipe roti for the 3 results in the carousel, because the first results shows cutlery, pots and pans.
const searchObject = {
    queryVal: 'basic roti',
    mealTypeVal: '',
    cuisineTypeVal: '',
    dietTypeVal: '',
    timeVal: ''
}

//Fetch the results for in the carousel
fetchDataHeader(searchObject);
//Set the listeners for closing the page
setListeners();
//Set the listeners for opening the page
openPage();