const headerAnim = document.getElementById('header-anim');
const mainAnim = document.getElementById('main-anim');
const footerAnim = document.getElementById('footer-anim');

export const setListeners = () => {
    headerAnim.addEventListener("click", navigateToNextPage, true);
    mainAnim.addEventListener("click", navigateToNextPage, true);
    footerAnim.addEventListener("click", navigateToNextPage, true);

    function navigateToNextPage(e) {
        if (e.target.getAttribute('href') && e.target.tagName === "A") {
            e.preventDefault();
            // console.log(e);
            headerAnim.removeAttribute('class');
            setTimeout(() => {
                window.location.replace(`${e.target.getAttribute('href')}`)
            }, 2000)
        }
    }
}

export default setListeners();



