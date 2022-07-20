const headerAnim = document.getElementById('header-anim');
const navAnim = document.getElementById('nav-anim');

const openPage = () => {
    setTimeout(() => {
        headerAnim.setAttribute('class', 'open-page');
        navAnim.classList.add('open-nav');
    }, 2000)
}

export default openPage;
