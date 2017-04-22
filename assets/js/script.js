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
  
});
