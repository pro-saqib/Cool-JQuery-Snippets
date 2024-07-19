$('input, textarea').on('focus', function() {
    $(this).css('background-color', '#ffffcc');
}).on('blur', function() {
    $(this).css('background-color', '');
});
