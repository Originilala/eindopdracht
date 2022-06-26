import fetchRecipePage from "./fetchRecipePage.js";
import {createRecipePage2} from "./createRecipePage.js";

document.addEventListener("DOMContentLoaded", (e) => {
    const parameters = new URLSearchParams( window.location.search);
    const id = parameters.get("id");
    e.preventDefault();
    if(id){
    fetchRecipePage(id);
    } else {
        createRecipePage2();
    }

});