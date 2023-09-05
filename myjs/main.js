$(document) .ready(function(){
    $('.my-button') .click(function(){
        $('.my-button') .toggleClass('change')
    })
})

$(window) .scroll(function(){
    let position = $(this) .scrollTop();
    if(position >=200){
        $('.my-nav') .addClass('change-navbar')
    }else{
        $('.my-nav') .removeClass('change-navbar')
    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 700 ){
        $('.honors-text').addClass('fromRight')
        $('.honors-img').addClass('fromLeft')
    }else{
        $('.honors-text').removeClass('fromRight')
        $('.honors-img').removeClass('fromLeft')
    }
})