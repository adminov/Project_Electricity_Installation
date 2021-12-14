const sendForm = () => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скокро с вами свяжемся!',
        errorImg = './images/wait/error.png',
        loadImg = './images/wait/wait.gif',
        successImg = './images/wait/success.png';

    //чистка инпутов после отправки данных
    const clearInput = idForm => {
        const form = document.getElementById(idForm);

        [...form.elements]
            .filter(item =>
                item.tagName.toLowerCase() !== 'button' &&
                item.type !== 'button')
            .forEach(item =>
                item.value = '');
    };

    const removeClassSuccess = () => {
        const classSuccess = document.querySelector('.success'),
            modalOverlay = document.querySelector('.modal-overlay'),
            modalCallback = document.querySelector('.modal-callback');


        setTimeout(() => {
            classSuccess.remove();
            modalOverlay.style.display = 'none';
            modalCallback.style.display = 'none';
        }, 2000)
    };


    const processingForm = (idForm) => {
        const form = document.getElementById(idForm);

        const statusMessageDiv = document.createElement('div');
        const img = document.createElement('img');

        statusMessageDiv.className = 'success';
        statusMessageDiv.style.cssText = `
            font-size: 2rem;
            color: red;
        `;
        img.height = 50;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            let body = {};
            formData.forEach((val, key) => {
               body[key] = val;
            });

            if (body.fio === '' || body.tel === '') {
                alert('Write correct data');
            } else {
                statusMessageDiv.textContent = loadMessage;
                img.src = loadImg;
                statusMessageDiv.insertBefore(img, statusMessageDiv.firstChild);
                form.appendChild(statusMessageDiv);
                postData(body)
                    .then(() => {
                        statusMessageDiv.textContent = successMessage;
                        img.src = successImg;
                        statusMessageDiv.insertBefore(img, statusMessageDiv.firstChild);
                        clearInput('form1');
                        removeClassSuccess();
                    })
                    .catch((error) => {
                        statusMessageDiv.textContent = errorMessage;
                        img.src = errorImg;
                        statusMessageDiv.insertBefore(img, statusMessageDiv.firstChild);
                        clearInput('form1');
                        removeClassSuccess();
                        console.error(error);
                    });
            }
        });
    };

    processingForm('form1');


    const postData = (body) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener("readystatechange", () => {
                if (request.readyState !== 4) return;
                if (request.status === 200) {
                    resolve();
                } else {
                    reject(request.status)
                }
            });

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json');
            request.send(JSON.stringify(body))
        });
    };
};

export default sendForm;
