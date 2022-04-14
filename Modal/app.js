// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const openButton=document.querySelector('.modal-btn')
const showModal=document.querySelector('.modal-overlay')
const closeButton=document.querySelector('.close-btn')

openButton.addEventListener('click', function(){
    showModal.classList.add('open-modal')
})

closeButton.addEventListener('click', function(){
    showModal.classList.remove('open-modal')
})
