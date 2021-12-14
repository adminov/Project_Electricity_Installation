const modal = () => {
   const modalCallback = document.querySelector('.modal-callback'),
       modalOverlay = document.querySelector('.modal-overlay');

   document.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.callback-btn') || target.closest('.absolute') || target.closest('.button-services')) {
         modalOverlay.style.display = 'block';
         modalCallback.style.display = 'block';
      } else if (target.closest('.modal-close') || !target.closest('.modal-callback')) {
         modalOverlay.style.display = 'none';
         modalCallback.style.display = 'none';
      }
   });

};

export default modal;