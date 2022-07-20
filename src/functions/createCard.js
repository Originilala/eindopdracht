//Import an icon, so it can be injected on the page.
import timeIcon from "../assets/icons/time.png";
//Get the html elements where the data will be injected.
const recipeCards = document.getElementById("recipe-cards");
const headerAnim = document.getElementById('header-anim');
const navAnim = document.getElementById('nav-anim');

//The function takes an array with all the data from the fetch. Then it injects it on the page.
export const createCard = (recipes) => {
    //First remove all previous results
    recipeCards.replaceChildren();
    //Loop through the array with the data.
    recipes.map((entry) => {
        //Make an id to use in the URL for the link
        const id = entry.recipe.uri.split("_")[1];
        const link = `recipe.html?id=${id}`;
        //Inject every entry as a card and also add the icon and the URL in the id tag (not in the anchor tag).
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
    //Add a listener, so we can intercept clicks, so we can add a page transition animation.
    //First find every card by class.
    const newCards = document.querySelectorAll(".main-result-card");
    //Loop through every card and add an event listener.
    newCards.forEach((entry) => {
        entry.addEventListener("click", (e) => {
            //Start the animation with a click by removing a class.
            headerAnim.removeAttribute('class');
            navAnim.classList.remove('open-nav');
            //The URL for the link was stored in de id tag, not in the anchor tag.
            const goTo = e.currentTarget.id;
            //Switch page after two seconds.
            setTimeout(() => {
                window.location.replace(goTo);
            }, 2000)
            //Override other clicks
        }, true);
        //With the right mouse button click, the page opens in a new tab.
        entry.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            const goTo = e.currentTarget.id;
            window.open(goTo, "_blank");
        }, true);
    })
}

//This function takes an error message(string) and injects it on the page
export const createEmptyCard = (error) => {
    recipeCards.innerHTML = `
        <p class="error">${error}</p>
    `
    ;
}