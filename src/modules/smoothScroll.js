const smoothScroll = () => {
    const topMenu = document.querySelectorAll('.top-menu a');

    topMenu.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            //if (targetId === '#close') return;
            window.scrollTo({
                top: document.querySelector(targetId).offsetTop,
                behavior: 'smooth',
            });
        })
    })

};

export default smoothScroll;