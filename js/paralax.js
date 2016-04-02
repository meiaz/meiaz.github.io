// Long form
$(window).scroll(function() {
    var y = $(this).scrollTop(); // Pos
    var r = 10; // Rate
    $('body').css('background-position', 'center ' + parseInt(y/r) + 'px'); // Switch x polarity to reverse direction
});
