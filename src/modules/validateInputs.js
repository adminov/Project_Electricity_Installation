const validateInputs = () => {
    const formName = document.querySelectorAll('[name=fio]'),
        formPhone = document.querySelectorAll('[name=tel]');

    const trim = (input) => {
        input.value = input.value.replace(/\s+/g, ' ');
        input.value = input.value.replace(/\-+/g, '-');

        let inputToExp = new RegExp("ReGeX" + input.value + "ReGeX");
        if (/^[/ /-]/.test(inputToExp)) {
            input.value = input.value.replace(/^[/ /-]/, '')
        }
        if (/[/ /-]$/.test(inputToExp)) {
            input.value = input.value.replace(/[/ /-]$/, '')
        }
    };

    const capitalize = (input) => {
        let inputValue = input.value;
        return inputValue.split(' ').map(item =>
            item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
    };

    const controlInputs = (input, exp, message = 'Введите корректные данные') => {
        if (input.value === '') return;
        if (!input.value.match(exp)) {
            alert(message);
            input.value = '';
        }
    };

    formName.forEach(el => {
        el.addEventListener('blur', () => {
            trim(el);
            el.value = capitalize(el);
            controlInputs(el, /[A-Za-zА-Яа-яЁё]{2,}/g);
        })
    });


    formPhone.forEach(el => {
        el.addEventListener('blur', () => {
            trim(el);
            controlInputs(el, /\+?(\d){2,16}$/g);
        })
    });
};

export default validateInputs;
