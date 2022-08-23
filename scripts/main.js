(() => {

let btn_modal = document.querySelector('input[type="button"]');
let modal = document.getElementsByClassName('modal-container');
let modal_close_button = document.querySelector('.modal-container .modal-card i');



let closeModal = () => modal[0].classList.toggle('modal-hidden');   

btn_modal.addEventListener('click', closeModal);
modal_close_button.addEventListener('click', closeModal);

    let svg_container = document.querySelectorAll('.container-svg');

    
    svg_container.forEach(e => {

        e.addEventListener('mouseover', function () {
                e.style.border = '1px #03a9f4 solid';
                e.children[0].style.fill = '#03a9f4';
        }
        );

        e.addEventListener('mouseout', function () {
                e.style.border = '1px #AFB1B8 solid';
                e.children[0].style.fill = '#AFB1B8';
        }
        );        
    });


})();
