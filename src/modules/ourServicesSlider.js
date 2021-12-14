const ourServicesSlider = () => {


    const container = document.querySelector('.services-section .container'),
        slideContainer = container.querySelector('.services-elements'),
        track = container.querySelector('.services-carousel'),
        colMd4 = track.querySelectorAll('.col-md-4'),
        elements = track.querySelectorAll('.element'),
        arrowRight = document.querySelector('.arrow-right'),
        arrowLeft = document.querySelector('.arrow-left');


    slideContainer.style.overflow = 'hidden';
    track.style.cssText = `
        display: flex;
        transition: .2s;
    `;
    track.style.marginLeft = '-20px';


    if (screen.width <= 860) {
        let position = 0;

        const slidesToShow = 1,
            slidesToScroll = 1;

        const itemsCount = elements.length,
            itemWidth = container.clientWidth / slidesToShow,
            movePosition = slidesToScroll * itemWidth;

        colMd4.forEach( item => {
            item.style.width = `${itemWidth}px`;
        });

        elements.forEach(item => {
            item.style.minWidth = `${itemWidth}px`;
        });

        arrowRight.addEventListener('click', () => {
            const  itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
            position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        arrowLeft.addEventListener('click', () => {
            const  itemLeft = Math.abs(position) / itemWidth;
            position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        const setPosition = () => {
            track.style.transform = `translateX(${position}px)`;
        };
    } else {

        let position = 0;

        const slidesToShow = 3,
            slidesToScroll = 3;

        const itemsCount = elements.length,
            itemWidth = container.clientWidth / slidesToShow,
            movePosition = slidesToScroll * itemWidth;

        colMd4.forEach( item => {
            item.style.width = `${itemWidth}px`;
        });

        elements.forEach(item => {
            item.style.minWidth = `${itemWidth}px`;
        });

        arrowRight.addEventListener('click', () => {
            const  itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
            position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        arrowLeft.addEventListener('click', () => {
            const  itemLeft = Math.abs(position) / itemWidth;
            position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
            setPosition();
        });

        const setPosition = () => {
            track.style.transform = `translateX(${position}px)`;
        };
    }

};

export default ourServicesSlider;
