$(document).ready(function () {
    //Requirements toggle
    $('#toggle-view li').click(function () {
        var text = $(this).children('div.panel');
        if (text.is(':hidden')) {
            text.slideDown(50);
            $(this).children('span').html('-');     
        } else {
            text.slideUp(50);
            $(this).children('span').html('+');     
        }     
    });
    //Resources list toggle
    $('#resources-toggle li').click(function () {
        var text = $(this).children('div.rPanel');
        if (text.is(':hidden')) {
            text.slideDown(50);
            $(this).children('span').html('-');     
        } else {
            text.slideUp(50);
            $(this).children('span').html('+');     
        }
    });
    //On click gun, display incorrect caption
    $('.gun_choice1').click(function(){
        $('.gun_choice1 .caption').text('Semi-automatics are ok.')
        .addClass('gun_choice_select');
        });
     $('.gun_choice2').click(function(){
        $('.gun_choice2 .caption').text('Shotguns are chill in public.')
             .addClass('gun_choice_select');
        });
      $('.gun_choice3').click(function(){
        $('.gun_choice3 .caption').text('Revolvers are fine.')
             .addClass('gun_choice_select');
        });
       $('.gun_choice4').click(function(){
        $('.gun_choice4 .caption').text('Pistols are allowed.')
             .addClass('gun_choice_select');
        });
    //Back to Top
    var amountScrolled = 150;
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});