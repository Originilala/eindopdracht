//Import function, so the data can be fetched with the id in the URL.
import fetchRecipePage from "./fetchRecipePage.js";
//Import function that creates an about page
import {createRecipePage2} from "./createRecipePage.js";

//Add a listener on the page
document.addEventListener("DOMContentLoaded", (e) => {
    //Then extract the id from the URL
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");
    //Don't load an empty page.
    e.preventDefault();
    //If there is an id then fetch the corresponding recipe data.
    if (id) {
        fetchRecipePage(id);
        //Else load the about page.
    } else {
        createRecipePage2();
    }

});