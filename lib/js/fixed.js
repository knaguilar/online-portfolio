$(document).ready(function() {
	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  // maybe change to 1.4 to make it appear sooner?
	  var upperLength = ($("#welcome-section").height()*1.5);
	  var lowerLength = ($(".container-fluid").height() - ($("#contact-section").height()*1.5));
	  if (y > upperLength && y < lowerLength) {
	    $('.fixed-title').show("fast");
	  } else {
	    $('.fixed-title').hide();
	  }
	});
});