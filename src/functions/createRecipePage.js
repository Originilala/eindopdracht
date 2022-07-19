import searchImage from "../assets/icons/search.png"

const prepMethod = document.getElementById('main-recipe-site');
const aboutPage = document.getElementById('main-recipe');
const ingredientList = document.getElementById('main-recipe-ingredients');
const nutritionList = document.getElementById('main-recipe-nutrients');
const labelList = document.getElementById('health-labels');
const recipeTitle = document.getElementsByTagName("h1")[0];
const prepTime = document.getElementById('main-recipe-time');


export const createRecipePage = (dataRecipe) => {
    prepTime.innerHTML = `${dataRecipe.recipe.totalTime} min.`;
    recipeTitle.innerHTML = `${dataRecipe.recipe.label}`;
    prepMethod.innerHTML = `
        <button type="button"><a href="${dataRecipe.recipe.url}">directions</a></button>
        <img src="${dataRecipe.recipe.image}" alt="${dataRecipe.recipe.label}">
    `;
    dataRecipe.recipe.ingredients.map((entry) => {
        ingredientList.innerHTML += `
        <li>${entry.text}</li>
    `
    });
    dataRecipe.recipe.healthLabels.map((entry, i) => {
        labelList.innerHTML += `
        <li>${dataRecipe.recipe.healthLabels[i]}</li>
    `
    });
    for (const entry in dataRecipe.recipe.totalNutrients) {
        if ((Math.round((dataRecipe.recipe.totalNutrients[entry].quantity) * 0.01) / 0.01)) {
            nutritionList.innerHTML += `
                <tr>
                    <td>${dataRecipe.recipe.totalNutrients[entry].label}</td>
                    <td class="main-recipe-nutrients-align-right">${(Math.round((dataRecipe.recipe.totalNutrients[entry].quantity) * 0.01) / 0.01)}</td>
                    <td>${dataRecipe.recipe.totalNutrients[entry].unit}</td>
                </tr>
        `
        }
    }
}

export const createRecipePage2 = () => {
    aboutPage.innerHTML = `
        <article id="main-recipe-site">
            <div>
                <h3>Webdevelopment Bootcamp Project for Novi Hogeschool</h3>
                <p>-by Originilala.
                    <em>This website has been created as a final assignment for a Webdevelopment bootcamp. The website uses the edamam API from Edamam.com for the retrieval of recipes and the nutrition info.
                    On the home page you can search for recipes by category.
                    There is a handy calculator with which products can be searched by means of the barcode (upc).
                    Then you calculate the nutritional value per portion. Use numbers with decimal points to divide the portion.</em>
                </p>
                <div id="edamam-badge" data-color="white"></div>
            </div>
            <img src="${searchImage}" alt="search image" id="search-logo">
        </article>
    `
    ;
};