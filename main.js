
$('.options div').on('click', function() {
    // Reset background color of all divs
    $('.options div').css('background-color', 'transparent');
    $('.options-div').css('border-bottom-left-radius', '20px')
    $('.options-div').css('border-bottom-right-radius', '20px')
    
    // Set background color of the clicked div
    $(this).css('background-color', 'var(--bright-main-color)'); // Change to your desired color
});