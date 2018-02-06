// Check off specific todo's by clicking
$("ul").on("click", "li", function() {
  // USE TOGGLECLASS...
  $(this).toggleClass("completed");

  // ...OR THIS CODE...
  // if($(this).css("color") === "rgb(128, 128, 128)") {
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });
  // } else {
  //   $(this).css({
  //     color: "gray",
  //     textDecoration: "line-through"
  //   });
  // };
  // ...TO ALL THE WAY DOWN HERE
});

// Click on 'X' to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    var todoText = $(this).val(); // grab new todo text from input
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); // create new li and add to ul
  };
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
