$(document).scroll(function() {
  var y = $(this).scrollTop();
  // maybe change to 1.4 to make it appear sooner?
  var coverLen = ($(".parallax").height()*1.5);
  var projectsLen = ($(".container-fluid").height() + coverLen);
  if (y > (coverLen+100) && y < (projectsLen-100)) {
    $('.projects-title').show();
  } else {
    $('.projects-title').hide();
  }
});