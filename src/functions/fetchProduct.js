import axios from "axios";
import {addToCalculator} from "./addToCalculator.js";
import createError from "./createError.js";
import secretKeys from "../../notes/appkey.js";
import {addLoader, removeLoader} from "./makeLoader";

const {fooID, fooKey} = secretKeys;

const fetchProduct = async (searchQuery) => {
    const apiUrl = "https://www.edamam.com/api";
    const endpoint = "/food-database/v2/parser";
    addLoader();
    try{
        const response = await axios.get(`${apiUrl}${endpoint}`, {
            params: {
                type: "public",
                app_id: fooID,
                app_key: fooKey,
                ingr: searchQuery
            }
        })
        // console.log(response.data.hints[0]);
        addToCalculator(response.data.hints[0]);
    } catch(err) {
        createError(err);
    } finally {
        removeLoader();
    }
}

export default fetchProduct;