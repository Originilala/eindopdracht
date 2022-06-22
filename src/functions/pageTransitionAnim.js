const headerAnim = document.getElementById('header-anim');

const openPage = () => {
    // if(window.location.host === location.origin) {
        setTimeout(() => {
            headerAnim.setAttribute('class', 'open-page');
        }, 2000)
    // } else {
    //     headerAnim.setAttribute('class', 'open-page');
    // }
}


export default openPage;
