const headerAnim = document.getElementById('header-anim');

const openPage = () => {
    setTimeout(() => {
        headerAnim.setAttribute('class', 'open-page');
    }, 2000)
}

export default openPage;
