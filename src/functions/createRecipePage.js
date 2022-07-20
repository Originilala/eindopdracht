//Import an icon, so it can be injected on the page.
import searchImage from "../assets/icons/search.png"

//Get the html elements where the data will be injected.
const prepMethod = document.getElementById('main-recipe-site');
const aboutPage = document.getElementById('main-recipe');
const ingredientList = document.getElementById('main-recipe-ingredients');
const nutritionList = document.getElementById('main-recipe-nutrients');
const labelList = document.getElementById('health-labels');
const recipeTitle = document.getElementsByTagName("h1")[0];
const prepTime = document.getElementById('main-recipe-time');

//This function takes an object and injects the data on the page
export const createRecipePage = (dataRecipe) => {
    //First the title
    prepTime.innerHTML = `${dataRecipe.recipe.totalTime} min.`;
    recipeTitle.innerHTML = `${dataRecipe.recipe.label}`;
    //Then the button
    prepMethod.innerHTML = `
        <button type="button"><a href="${dataRecipe.recipe.url}">directions</a></button>
        <img src="${dataRecipe.recipe.image}" alt="${dataRecipe.recipe.label}">
    `;
    //Then the ingredients
    dataRecipe.recipe.ingredients.map((entry) => {
        ingredientList.innerHTML += `
        <li>${entry.text}</li>
    `
    });
    //Then the health labels
    dataRecipe.recipe.healthLabels.map((entry, i) => {
        labelList.innerHTML += `
        <li>${dataRecipe.recipe.healthLabels[i]}</li>
    `
    });
    //Then the nutrients through a loop
    for (const entry in dataRecipe.recipe.totalNutrients) {
        //But only if the quantity of the nutrient is not 0
        if (dataRecipe.recipe.totalNutrients[entry].quantity) {
            nutritionList.innerHTML += `
                <tr>
                    <td>${dataRecipe.recipe.totalNutrients[entry].label}</td>
                    <td class="main-recipe-nutrients-align-right">${(Math.round((dataRecipe.recipe.totalNutrients[entry].quantity) * 10) / 10)}</td>
                    <td>${dataRecipe.recipe.totalNutrients[entry].unit}</td>
                </tr>
        `
        }
    }
}

//This function makes an about page with the same html file.
//It takes a string and creates the page.
//If there is no string given the parameter is null.
//The Edemam badge is implemented here. The .js file that implements it is on the recipe.html page
export const createRecipePage2 = (error = null) => {
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
    //If the parameter is null no error string will be shown
    if(error) {
        aboutPage.innerHTML += `
        <p class="error">${error}</p>
    `
    }
};