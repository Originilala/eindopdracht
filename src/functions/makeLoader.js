//Get the element that will move in a circle with a round dark blue border.
const spinner = document.getElementById("spinner");

//Start the loader animation by adding the css class that makes it appear and spin.
//The class has a delay of two seconds for the animation.
export const addLoader = () => {
    spinner.setAttribute("class", "loading");
}

//Remove the class from the element, so it won't show on the page and stop spinning.
export const removeLoader = () => {
    spinner.classList.remove("loading");
}