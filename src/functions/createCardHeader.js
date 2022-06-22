
import {addLoader, removeLoader} from "./makeLoader.js";
import secretKeys from "../../notes/appkey.js";
import axios from "axios";
import createError from "./createError.js";

const cardCarousel = document.getElementById('main-carousel');
const headerAnim = document.getElementById('header-anim');

const {recKey, recID} = secretKeys;

const searchObject = {
    queryVal: 'this',
    mealTypeVal: 'this',
    cuisineTypeVal: 'this',
    dietTypeVal: 'this',
    timeVal: 'this'
}

const fetchDataHeader = async (param) => {
    const apiUrl = "https://api.edamam.com/api";
    const endpoint = "/recipes/v2";
    addLoader();
    try {
        const response = await axios.get(`${apiUrl}${endpoint}`, {
            params: {
                type: 'public',
                q: param.queryVal,
                app_key: recKey,
                app_id: recID,
                diet: param.dietTypeVal ? param.dietTypeVal : null,
                cuisineType: param.cuisineTypeVal ? param.cuisineTypeVal : null,
                mealType: param.mealTypeVal ? param.mealTypeVal : null,
                time: param.timeVal ? param.timeVal : null
            }
        })

        const recipes = response.data.hits;
        console.log(recipes);
        createCardHeader(recipes);

    } catch (err) {
        createError(err);
    } finally {
        removeLoader();
    }
}

const createCardHeader = (recipes) => {
    // cardOne.replaceChildren();
    // cardTwo.replaceChildren();
    // cardThree.replaceChildren();
    cardCarousel.replaceChildren();

    recipes.map((entry, i) => {
        if(i < 3) {
            const id = entry.recipe.uri.split("_")[1];
            const link = `recipe.html?id=${id}`
            cardCarousel.innerHTML += `
            
                <article class="main-carousel-card" id="${link}">
                    <img src="${entry.recipe.image}" alt="${entry.recipe.label}"/>
                    <h5>${entry.recipe.label}</h5>
                    <div>
                        <p><strong>${(Math.round((entry.recipe.calories) * 0.01) / 0.01)}</strong> calories | <strong>${entry.recipe.ingredients.length}</strong> ingredients</p>
                        <p><strong>${entry.recipe.totalTime}</strong> min</p>
                    </div>
                </article>
            
            `
        }
    } )

    const newPages = document.querySelectorAll(".main-carousel-card");
    newPages.forEach((entry) => {
        entry.addEventListener("click", (e) => {
            headerAnim.removeAttribute('class');
            const goTo = e.currentTarget.id;
            setTimeout(() => {
                window.location.replace(goTo);
            }, 2000)
        }, true);

    })

}

export default fetchDataHeader;