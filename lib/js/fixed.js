$(document).ready(function() {
	// info for each project
	var projects = [{
			name: "Neighborhood Map",
			img: "img/neighborhood4x4.jpg",
			description: "description of project goes here!",
			url: "www.blah.com"
		},
		{
			name: "Frogger Arcade Game",
			img: "img/arcade.png",
			description: "description of project goes here!",
			url: "www.blah.com"
		},
		{
			name: "Stumble Upon Lyfe",
			img: "img/sul.png",
			description: "description of project goes here!",
			url: "www.blah.com"
		},
		{
			name: "Feed Reader Testing",
			img: "img/feedtesting.png",
			description: "description of project goes here!",
			url: "www.blah.com"
		}];


	// adds the info for each project from the project object above
	var title, image, website, blurp = '';
	var starterProject = $("#projects > article").first();
	for (var project = 0; project < projects.length; project++) {
		title = '<h3><a href="' + projects[project].url +'">' + projects[project].name + '</a></h3>';
		image = '<img class="img-adjust img-responsive img-rounded" src="'+ projects[project].img +'">';
		blurp = '<p>'+ projects[project].description+'</p>';
		starterProject.append(image);
		starterProject.append(title);
		starterProject.append(blurp);

		starterProject = starterProject.next();
	}



	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  // maybe change to 1.4 to make it appear sooner?
	  var upperLength = ($("#welcome-section").height() + ($("#about-section").height()/1.5));
	  var lowerLength = ($(".container-fluid").height() - ($("#contact-section").height()*1.55));
	  if (y > upperLength && y < lowerLength){
	    $('.fixed-title').show("fast");
	  }
	  else {
	    $('.fixed-title').hide();
	  }
	});
});