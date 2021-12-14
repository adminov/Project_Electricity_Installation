const accordion = () => {
    const accordion = document.querySelectorAll('.accordeon .element');

    accordion.forEach(elem => {
        elem.addEventListener('click', (e) => {
            let target = e.target;
            if (target.closest('.active')) {
                elem.classList.remove('active');
                elem.querySelector('.element-content').style.display = 'none';
            } else if (!target.closest('.active')) {
                elem.classList.add('active');
                elem.querySelector('.element-content').style.display = 'block';
            }
        });
    });
};

export default accordion;
