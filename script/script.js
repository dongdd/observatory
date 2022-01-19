$(function(){
    $('.tab_menu>a').click(function(){
        let num = $(this).index();
        $('.tab_con>.list').eq(num).addClass('on').siblings('.list').removeClass('on');
    });
});