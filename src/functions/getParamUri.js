import fetchRecipePage from "./fetchRecipePage.js";

document.addEventListener("DOMContentLoaded", (e) => {
    const parameters = new URLSearchParams( window.location.search);
    const id = parameters.get("id");
    e.preventDefault();
    fetchRecipePage(id);
});