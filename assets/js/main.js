const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var avt_btn = $$('.header__user-avt')
var modal = $('.modal')
var modal_overlay = $('.modal__overlay')
var modal_selected = $$('.auth-form__switch-modal')
var modal_list = $$('.auth-form')

showModal = () => {
    modal.classList.add('open')
}

hideModal = (e) => {
    // e.stopPropagation()
    modal.classList.remove('open')
}

switchModal = () => {
    Array.from(modal_list).forEach(item => {
        item.classList.toggle('auth-form-open')
    })
}

Array.from(avt_btn).forEach(btn => {
    btn.addEventListener('click', showModal)  
})
modal_overlay.addEventListener('click', hideModal)

Array.from(modal_selected).forEach(modal => modal.addEventListener('click', switchModal))


