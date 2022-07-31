//Get elements on the page, so we can intercept clicks
const headerAnim = document.getElementById("header-anim");
const mainAnim = document.getElementById("main-anim");
const footerAnim = document.getElementById("footer-anim");
const navAnim = document.getElementById("nav-anim");

//Set listeners on the elements
export const setListeners = () => {
    //Option true so it will override other events
    headerAnim.addEventListener("click", navigateToNextPage, true);
    mainAnim.addEventListener("click", navigateToNextPage, true);
    footerAnim.addEventListener("click", navigateToNextPage, true);

    //Then we find out if a link was clicked
    function navigateToNextPage(e) {
        if (e.target.getAttribute("href") && e.target.tagName === "A" || e.target.parentElement.tagName === "A") {
            //Don't follow the link
            e.preventDefault();
            let goToLink = "";
            if (e.target.getAttribute("href")) {
                goToLink = e.target.getAttribute("href");
            } else {
                goToLink = e.target.parentElement.getAttribute("href");
            }
            //Start the animation by closing the page by removing classes.
            headerAnim.removeAttribute("class");
            navAnim.classList.remove("open-nav");
            //Wait two seconds, because the animation takes two seconds, the go to the link.
            setTimeout(() => {
                window.location.replace(`${goToLink}`)
            }, 2000)
        }
    }
}

export default setListeners();



