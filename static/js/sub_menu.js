// $('.menu-category-button').on('click', menuCategoryButton);

// function menuCategoryButton() {
//     let buttons = document.querySelectorAll('.menu-category-wrap button');

//     buttons.forEach(function(button) {
//         button.classList.remove('active');
//     });

//     this.classList.add('active');
// }


$(function(){

    $('.allergy-modal-button').click(function(){
        $('.modal-wrap').fadeIn();
    });
    $('.modal-close-button').click(function(){
        $('.modal-wrap').fadeOut();
    });
});