//The product data is called with axios.
import axios from "axios";
//Import function, so the result will be injected on the page.
import {addToCalculator} from "./addToCalculator.js";
//Import the helper function, so an errormessage will be chosen.
import createError from "./createError.js";
//Import the functions for the loader animation.
import {addLoader, removeLoader} from "./makeLoader.js";
//Import function, so the error message will be injected on the page.
import {createCalError} from "./createCalculatorPage.js";

//Fill in your food API key here
const fooKey = "";
//Fill in your recipe API ID here
const fooID = "";

//This function takes a string with the search query and fetches the data
const fetchProduct = async (searchQuery) => {
    //The URL and endpoint for the API call
    const apiUrl = "https://www.edamam.com/api";
    const endpoint = "/food-database/v2/parser";
    //Start loader animation
    addLoader();
    try {
        //Fetch the data with Axios asynchronously.
        const response = await axios.get(`${apiUrl}${endpoint}`, {
            params: {
                type: "public",
                app_id: fooID,
                app_key: fooKey,
                //A product name is expected for the query
                ingr: searchQuery
            }
        });
        //Get the first hint from the response of the API call and add to calculator and inject on the page.
        addToCalculator(response.data.hints[0]);
    } catch (err) {
        //If nothing is found, try a call for a barcode with the same searchquery.
        fetchProduct2(searchQuery);
        //We still have to use the variable err in some way to prevent bugs.
        const empty = err;
    } finally {
        //In any case (error or result) stop the loader animation.
        removeLoader();
    }
}

//Another data fetch. This time for the barcode.
const fetchProduct2 = async (searchQuery) => {
    //The URL and endpoint for the API call
    const apiUrl = "https://www.edamam.com/api";
    const endpoint = "/food-database/v2/parser";
    //Start loader animation
    addLoader();
    try {
        //Fetch the data with Axios asynchronously.
        const response = await axios.get(`${apiUrl}${endpoint}`, {
            params: {
                type: "public",
                app_id: fooID,
                app_key: fooKey,
                //A barcode is expected for the query
                upc: searchQuery
            }
        });
        //Get the first hint from the response of the API call and add to calculator and inject on the page.
        addToCalculator(response.data.hints[0]);
    } catch (err) {
        //Inject an errormessage on the page if there is an error.
        createCalError(createError(err));
    } finally {
        //In every case (error or result) stop the loader animation.
        removeLoader();
    }
}

export default fetchProduct;