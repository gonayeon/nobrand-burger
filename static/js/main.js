$(function(){
    intervalId = setInterval(nextSlide, 3000);
    pagination();
});

function nextNotice() {
    $('.notice').animate({
        top: "-100%"
    }, function () {
        $('.notice li:first').appendTo('.notice');
        $('.notice').css({ top: 0 });
    });
}

function prevNotice() {
    $(".notice > li:last").prependTo(".notice");
    $(".notice").css({top: "-100%"});
    $(".notice").animate({top: 0});
}


let intervalId;

function nextSlide(x=1) {
    setActivePagination(1);

    $(".slide_wrap").animate({
        left: -x * 100 + '%'
    }, 1000, function () {
        for (let i = 0; i < x; i++){
            $(".slide_wrap > li").eq(0).appendTo(".slide_wrap");
        }
        $(".slide_wrap").css({
            left: 0
        });
    });
}

function prevSlide(x=1) {
    for (let i = 0; i < x; i++){
        $(".slide_wrap > li:last").prependTo(".slide_wrap");
    }
    $(".slide_wrap").css({
        left: -x * 100 + '%'
    });
    $(".slide_wrap").animate({
        left: 0
    }, 1000);
    
    setActivePagination();
}


function pagination() {
    let slideItems = document.querySelectorAll('.slide_item');
    let numberOfSlides = slideItems.length;
    let paginationUl = document.querySelector('.slide_pagination');

    for (let i = 0; i < numberOfSlides; i++) {
        slideItems[i].setAttribute('data-index', i + 1);

        let pageLi = document.createElement('li');
        pageLi.setAttribute('data-index', i + 1);
        pageLi.addEventListener('click', movePage);
        paginationUl.appendChild(pageLi);
    }
    
    setActivePagination();
}

function setActivePagination(y) {
    let activeIndex = $('.slide_wrap > li:first-child').data('index');
    let activeIndexDefault = $('.slide_wrap > li:nth-child(2)').data('index');

    $('.slide_pagination li').removeClass('active');
    if (y) {
        $('.slide_pagination li[data-index="' + activeIndexDefault + '"]').addClass('active');    
    } else {
        $('.slide_pagination li[data-index="' + activeIndex + '"]').addClass('active');
    }
}

function movePage() {
    let clickedIndex = $(this).data('index');
    let nowIndex = $('.slide_wrap > li:first-child').data('index');

    let difference = clickedIndex - nowIndex;

    clearInterval(intervalId);
    if (difference < 0) {
        prevSlide(Math.abs(difference));
    } else if (difference > 0) {
        nextSlide(difference);
        $('.slide_pagination li').removeClass('active');
        $(this).addClass('active');
    }
    intervalId = setInterval(nextSlide, 3000);
}