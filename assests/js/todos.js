// Check Off Specific Todos By Clicking

$('ul').on("click", 'li', (function () {
    $(this).toggleClass('toggler')

}));

//Click on X to delete Todo

$('ul').on("click", 'span', (function () {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
}));

//Input value//

$("input[type='text']").keydown(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        $(this).val("");
    }

});

//toggle-by calling css class//

$("#toggle-form").click(function () {
    $("input[type='text']").fadeToggle();
});