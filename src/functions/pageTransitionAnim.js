//Get the elements that are changed by the animation of opening the page.
const headerAnim = document.getElementById('header-anim');
const navAnim = document.getElementById('nav-anim');

//Function for opening the page
const openPage = () => {
    //Start animation by adding classes.
    headerAnim.setAttribute('class', 'open-page');
    navAnim.classList.add('open-nav');
}

export default openPage;
