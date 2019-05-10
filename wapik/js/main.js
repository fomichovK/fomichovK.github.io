$(document).ready(function () {

    $('.nav-toggle i.fa-bars').on('click', function () {
        $('.nav-toggle i.fa-bars').css('display', 'none');
        $('.nav-toggle i.fa-times').css('display', 'block');
        $('.nav-list').css('display', 'block');
    });
    $('.nav-toggle i.fa-times').on('click', function () {
        $('.nav-toggle i.fa-bars').css('display', 'block');
        $('.nav-toggle i.fa-times').css('display', 'none');
        $('.nav-list').css('display', 'none');
    });

});
