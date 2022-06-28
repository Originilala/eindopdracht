import axios from "axios";
import secretKeys from "../../notes/appkey.js";
import {addLoader, removeLoader} from "./makeLoader.js";
import {createCard, createEmptyCard} from "./createCard.js";

const {recKey, recID} = secretKeys;

const fetchData = async (param) => {
    const apiUrl = "https://api.edamam.com/api";
    const endpoint = "/recipes/v2";
    addLoader();
    try {
        const response = await axios.get(`${apiUrl}${endpoint}`, {
            params: {
                app_key: recKey,
                app_id: recID,
                type: 'public',
                q: param.queryVal,
                mealType: param.mealTypeVal ? param.mealTypeVal : null,
                cuisineType: param.cuisineTypeVal ? param.cuisineTypeVal : null,
                diet: param.dietTypeVal ? param.dietTypeVal : null,
                time: param.timeVal ? param.timeVal : null,
            }
        })

        const recipes = response.data.hits;
        if (!recipes) {
            createEmptyCard();
        } else if (recipes.length === 0) {
            createEmptyCard();
        } else {
            createCard(recipes);
        }

    } catch (err) {
        createError(err);
    } finally {
        removeLoader();
    }
}

export default fetchData;