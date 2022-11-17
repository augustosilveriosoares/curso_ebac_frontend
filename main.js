$('form').on('submit',function(e){
    e.preventDefault();
   $('#lista').append( $('<li class="item"> ' + $('form input').val() +' </li>').hide().fadeIn(500));
   $('form input').val('');
   $(document)
})

$("ul").on("click", "li", function(e){
    $(this).addClass('clicked');
});
