
function registerEvents(){
  // add item to list....Works
   $('form#js-shopping-list-form button').click(function(event){
     event.preventDefault();
     var temp = "<li>"+
                  "<span class='shopping-item'>" +
                    $("input#shopping-list-entry").val() + 
                  "</span>"+
                  "<div class='shopping-item-controls'>"+
                    "<button class='shopping-item-toggle'>"+
                      "<span class='button-label'>check</span>"+
                    "</button><button class='shopping-item-delete'>"+
                      "<span class='button-label'>delete</span>"+
                    "</button>"+
                  "</div>"+
                "</li>";       
      $('ul').append(temp);
      registerEvents();
    });
  // remove function...works!
   $('.shopping-item-delete').on('click', function(event) {
      $(this).closest('li').remove();
  });
   // checked off aka crossed off....It Works!!!
  $('ul.shopping-list button').click(function(){
  // console.log('i was clicked');
    var span = $(this).parent().parent().find('span').eq(0).toggleClass('shopping-item__checked');
  // console.log(span);
  });
};

$(document).ready(function() {
  registerEvents();
  
});
