const headSlider = () => {
    const slide = document.querySelectorAll('.item'),
        slickDots = document.querySelector('.slick-dots'),
        active = document.querySelectorAll('.top-slider .table');

    //ищем длину слайдера исходя этого добавляем li into ul
    slide.forEach(item => {
        item.style.position = 'absolute';
        item.style.width = '100%';
        // slickDots.innerHTML += `<li></li>`;
    });

    if (screen.width >= 320) {
        //добавляем класс slick-active внутри ли
        // const li = slickDots.querySelectorAll('li');
        // li[0].classList.add('slick-active');

        //currentSlide - это счетчик для слайдера
        let currentSlide = 0,
            interval,
            urlImg = ["slide1", "slide2", "slide3"];

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
            elem[index].style.background = '';
        };

        const nextSlide = (elem, index, strClass) => {

            elem[index].classList.add(strClass);
            urlImg.forEach((img, index) => {
                active[index].style.cssText = `
            background: url("images/${img}.jpg") ${50}% ${50}% / cover no-repeat;`;
            });

        };

        const autoPlaySlide = () => {
            prevSlide(active, currentSlide, 'active');
            prevSlide(slide, currentSlide, 'relative');

            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(active, currentSlide, 'active');
            nextSlide(slide, currentSlide, 'relative');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        startSlide()
    }


};
export default headSlider;
