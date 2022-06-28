import axios from "axios";
import createError from "./createError.js";
import secretKeys from "../../notes/appkey.js";
import {addLoader, removeLoader} from "./makeLoader.js";
import {createRecipePage} from "./createRecipePage.js";

const {recID, recKey} = secretKeys;

const fetchRecipePage = async (id) => {
    const apiUrl = "https://www.edamam.com/api";
    const endpoint = "/recipes/v2/";
    addLoader();
    try {
        const response = await axios.get(`${apiUrl}${endpoint}${id}`, {
            params: {
                app_id: recID,
                app_key: recKey,
                type: "public"
            }
        })
        createRecipePage(response.data);
    } catch (err) {
        createError(err);
    } finally {
        removeLoader();
    }
}

export default fetchRecipePage;