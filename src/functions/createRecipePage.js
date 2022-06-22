const prepMethod = document.getElementById('main-recipe-site');
const ingredientList = document.getElementById('main-recipe-ingredients');
const nutritionList = document.getElementById('main-recipe-nutrients');
const labelList = document.getElementById('health-labels');

const createRecipePage = (dataRecipe) => {
    let buttonText = "";
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
        if((Math.round((dataRecipe.recipe.totalNutrients[entry].quantity) * 0.01) / 0.01)) {
            nutritionList.innerHTML += `
                <tr>
                    <td>${dataRecipe.recipe.totalNutrients[entry].label}</td>
                    <td>${(Math.round((dataRecipe.recipe.totalNutrients[entry].quantity) * 0.01) / 0.01)}</td>
                    <td>${dataRecipe.recipe.totalNutrients[entry].unit}</td>
                </tr>
        `
        }
    }
}

export default createRecipePage;