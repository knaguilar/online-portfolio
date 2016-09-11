$(document).scroll(function() {
  var y = $(this).scrollTop();
  var coverLen = ($(".parallax").height() / 2);
  var projectsLen = ($(".container-fluid").height() + coverLen);
  if (y > (coverLen+100) && y < (projectsLen-100)) {
    $('.projects-title').show();
  } else {
    $('.projects-title').hide();
  }
});