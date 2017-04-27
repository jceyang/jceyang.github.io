$(document).ready(function(){
  $('#wrapper').fadeIn(1500);

  $("#ashaTag").click(function(){
    $("#placeTitle").fadeOut("1000");
	});

  $("#ashaTag").click(function(){
    $('#asha').delay(250).fadeIn(1500);
    console.log("hi")
  });

  $("#pagewrapper").click(function(){
    $("#asha").fadeOut(1000);
    console.log("hi");
	});

  $("#modal-overlay").click(function(){
    $("#modal-container").hide();
	});
	$(".link").hover(
		function() {
			$(this).css("color", "#9ed4ec");
		},
		function() {
			$(this).css("color", "#6fafcd");
		}
	);

  $(".social-item").hover(
		function() {
			$(this).addClass("social-item-hover");
		},
		function() {
			$(this).removeClass("social-item-hover");
		}
	);
});
