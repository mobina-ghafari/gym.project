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

$('.gallery-item').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')

    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position >= 4400 ){
        $('.card1').addClass('moveFromRight')
        $('.card2').addClass('moveFromBottom')
        $('.card3').addClass('moveFromLeft')

    }else{
        $('.card1').removeClass('moveFromRight')
        $('.card2').removeClass('moveFromBottom')
        $('.card3').removeClass('moveFromLeft')

    }
})