//The product data is called with axios.
import axios from "axios";
//Import the helper function, so an errormessage will be chosen.
import createError from "./createError.js";
import secretKeys from "../../notes/appkey.js";
//Import the functions for the loader animation.
import {addLoader, removeLoader} from "./makeLoader.js";
//Import function, so the result or error will be injected on the page.
import {createRecipePage, createRecipePage2} from "./createRecipePage.js";

//Fill in your recipe API key here
//Fill in your recipe API ID here
const {recID, recKey} = secretKeys;

//This function takes a string with the id for the search query and fetches the data
const fetchRecipePage = async (id) => {
    //The URL and endpoint for the API call
    const apiUrl = "https://www.edamam.com/api";
    const endpoint = "/recipes/v2/";
    //Start loader animation
    addLoader();
    try {
        //Fetch the data with Axios asynchronously with the id in the URL.
        const response = await axios.get(`${apiUrl}${endpoint}${id}`, {
            params: {
                app_id: recID,
                app_key: recKey,
                type: "public"
            }
        })
        //Give the data to the function as a parameter to inject the data on the page.
        createRecipePage(response.data);
    } catch (err) {
        //Inject an errormessage on the page if there is an error.
        createRecipePage2(createError(err));
    } finally {
        //In every case (error or result) stop the loader animation.
        removeLoader();
    }
}

export default fetchRecipePage;