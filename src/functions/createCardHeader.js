//Import an icon, so it can be injected on the page.
import timeIcon from "../assets/icons/time.png";
//The recipe data is called with axios.
import axios from "axios";
//Import the functions for the loader animation.
import {addLoader, removeLoader} from "./makeLoader.js";
//Import the helper function, so an errormessage will be chosen.
import createError from "./createError.js";
//Import function, so the error message will be injected on the page.
import {createEmptyCard} from "./createCard";

//Get the html elements where the data will be injected.
const cardCarousel = document.getElementById("main-carousel");

//Fill in your recipe API key here
const recKey = "";
//Fill in your recipe API ID here
const recID = "";

//This function takes an object with the search query and options and fetches the data
const fetchDataHeader = async (param) => {
    //The URL and endpoint for the API call
    const apiUrl = "https://api.edamam.com/api";
    const endpoint = "/recipes/v2";
    //Start loader animation
    addLoader();
    try {
        //Fetch the data with Axios asynchronously.
        const response = await axios.get(`${apiUrl}${endpoint}`, {
            params: {
                type: "public",
                q: param.queryVal,
                app_key: recKey,
                app_id: recID,
                //If this option is empty then it will have the value null, so no filter will be applied.
                diet: param.dietTypeVal ? param.dietTypeVal : null,
                cuisineType: param.cuisineTypeVal ? param.cuisineTypeVal : null,
                mealType: param.mealTypeVal ? param.mealTypeVal : null,
                time: param.timeVal ? param.timeVal : null
            }
        });
        //Get the hits from the response of the API call and put in a variable.
        const recipes = response.data.hits;
        //Give the data to the function as a parameter to inject the data on the page.
        createCardHeader(recipes);
    } catch (err) {
        //Inject an errormessage on the page if there is an error.
        createEmptyCard(createError(err));
    } finally {
        //In every case (error or result) stop the loader animation.
        removeLoader();
    }
}

//This function takes an array and injects the data on the page
const createCardHeader = (recipes) => {
    //First remove previous results
    cardCarousel.replaceChildren();
    //Loop through all entries
    recipes.map((entry, i) => {
        //Only use the first three results
        if (i < 3) {
            //Make an id to use in the URL for the link
            const id = entry.recipe.uri.split("_")[1];
            const link = `recipe.html?id=${id}`;
            //Inject every entry as a card and also add the icon and the URL in the id tag (not in the anchor tag).
            cardCarousel.innerHTML += `
                <article class="main-carousel-card" id="${link}">
                    <a href="${link}">
                        <img src="${entry.recipe.image}" alt="${entry.recipe.label}"/>
                    </a>
                    <a href="${link}">
                        <h4>${entry.recipe.label}</h4>
                    </a>
                    <div>
                        <p><strong>${(Math.round((entry.recipe.calories) * 0.01) / 0.01)}</strong> calories | <strong>${entry.recipe.ingredients.length}</strong> ingredients</p>
                        <p><img src="${timeIcon}" alt="time icon" id="time-icon"><strong>    ${entry.recipe.totalTime}</strong> min</p>
                    </div>
                </article>
            `
            ;
        }
    });
}

export default fetchDataHeader;