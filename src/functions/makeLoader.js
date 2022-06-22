

const spinner = document.getElementById("spinner");

export const addLoader = () => {
    spinner.setAttribute("class", "loading");
}


export const removeLoader = () => {
    spinner.classList.remove("loading");
}