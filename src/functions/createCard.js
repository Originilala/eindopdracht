const recipeCards = document.getElementById("recipe-cards");
const headerAnim = document.getElementById('header-anim');

const createCard = (recipes) => {

    recipeCards.replaceChildren();

    recipes.map((entry) => {

        const id = entry.recipe.uri.split("_")[1];
        const link = `recipe.html?id=${id}`;
        recipeCards.innerHTML += `
            
                <article class="main-result-card" id="${link}">
                    <img src="${entry.recipe.image}" alt="${entry.recipe.label}"/>
                    <h5>${entry.recipe.label}</h5>
                    <div>
                        <p><strong>${(Math.round((entry.recipe.calories) * 0.01) / 0.01)}</strong> calories | <strong>${entry.recipe.ingredients.length}</strong> ingredients</p>
                        <p><strong>${entry.recipe.totalTime}</strong> min</p>
                    </div>
                </article>
            
            `
    })

    const newCards = document.querySelectorAll(".main-result-card");
    newCards.forEach((entry) => {
        entry.addEventListener("click", (e) => {
            headerAnim.removeAttribute('class');
            const goTo = e.currentTarget.id;
            setTimeout(() => {
                window.location.replace(goTo);
            }, 2000)
        }, true);

    })
}

export default createCard;