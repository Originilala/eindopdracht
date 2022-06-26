import timeIcon from "../assets/icons/time.png";
const recipeCards = document.getElementById("recipe-cards");
const headerAnim = document.getElementById('header-anim');

export const createCard = (recipes) => {

    recipeCards.replaceChildren();

    recipes.map((entry) => {

        const id = entry.recipe.uri.split("_")[1];
        const link = `recipe.html?id=${id}`;
        recipeCards.innerHTML += `
            
                <article class="main-result-card" id="${link}">
                    <img src="${entry.recipe.image}" alt="${entry.recipe.label}"/>
                    <h4>${entry.recipe.label}</h4>
                    <div>
                        <p><strong>${(Math.round((entry.recipe.calories) * 0.01) / 0.01)}</strong> calories | <strong>${entry.recipe.ingredients.length}</strong> ingredients</p>
                        <p><img src="${timeIcon}" alt="time icon" id="time-icon"><strong>    ${entry.recipe.totalTime}</strong> min</p>
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
        entry.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            const goTo = e.currentTarget.id;
            window.open(goTo, "_blank");
        }, true);

    })
}


export const createEmptyCard = () => {

    recipeCards.replaceChildren();
    recipeCards.innerHTML = `
    <p>No results found. Please try again.</p>
    `;
}