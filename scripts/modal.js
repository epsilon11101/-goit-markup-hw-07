(() => {

let btn_modal = document.querySelector('input[type="button"]');
let modal = document.getElementsByClassName('modal-container');
let modal_close_button = document.querySelector('.modal-container .modal-card i');



let closeModal = () => modal[0].classList.toggle('modal-hidden');   

btn_modal.addEventListener('click', closeModal);
modal_close_button.addEventListener('click', closeModal);




})();
