const scrollUp = () => {
    const up = document.querySelector('.up');

    const offset = 800;

    const getUp = () => window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        if (getUp() > offset) {
            up.classList.add('smooth-scroll--active');
        } else {
            up.classList.remove('smooth-scroll--active');
        }
    });


    up.addEventListener('click', () => {
       window.scrollTo({
           top: 0,
           behavior: "smooth",
       })
    });
};

export default scrollUp;