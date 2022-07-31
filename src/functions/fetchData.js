//The recipe data is called with axios.
import axios from "axios";
//Import the functions for the loader animation.
import {addLoader, removeLoader} from "./makeLoader.js";
//Import function, so the result or the error message will be injected on the page.
import {createCard, createEmptyCard} from "./createCard.js";
//Import the helper function, so an errormessage will be chosen.
import createError from "./createError.js";

// //Fill in your recipe API key here
const recKey = "";
// //Fill in your recipe API ID here
const recID = "";

//This function takes an object with the search query and options and fetches the data
const fetchData = async (param) => {
    //The URL and endpoint for the API call
    const apiUrl = "https://api.edamam.com/api";
    const endpoint = "/recipes/v2";
    //Start loader animation
    addLoader();
    try {
        //Fetch the data with Axios asynchronously.
        const response = await axios.get(`${apiUrl}${endpoint}`, {
            params: {
                app_key: recKey,
                app_id: recID,
                type: "public",
                q: param.queryVal,
                //If this option is empty then it will have the value null, so no filter will be applied.
                mealType: param.mealTypeVal ? param.mealTypeVal : null,
                cuisineType: param.cuisineTypeVal ? param.cuisineTypeVal : null,
                diet: param.dietTypeVal ? param.dietTypeVal : null,
                time: param.timeVal ? param.timeVal : null,
            }
        });
        //Get the hits from the response of the API call and put in a variable.
        const recipes = response.data.hits;
        //Check if there is a response or results
        if (!recipes) {
            recipes.code = "NO_RESULT";
            createEmptyCard(createError(recipes));
        } else if (recipes.length === 0) {
            recipes.code = "NO_RESULT";
            createEmptyCard(createError(recipes));
        } else {
            //Give the data to the function as a parameter to inject the data on the page.
            createCard(recipes);
        }
    } catch (err) {
        //Inject an errormessage on the page if there is an error.
        createEmptyCard(createError(err));
    } finally {
        //In every case (error or result) stop the loader animation.
        removeLoader();
    }
}

export default fetchData;