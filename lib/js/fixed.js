$(document).ready(function() {
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

	var person = {
		name: "Karla N. Aguilar",
		role: "Front-End Web Developer"
	};

	person.display = function() {
		var name = '<div class="header">'+ person.name+'</div>';
		var role = '<div class="occupation">'+ person.role+'</div>';
		$(".welcome-wrapper").append(name);
		$(".welcome-wrapper").append(role);
	};

	//about section
	var about = {
		img: "img/self.jpg",
		blurp: "Blah blah blah lnkgfnaligbjkbkjgbkjbdgjklnekjb kajlrfglabe akjleglf"
	};

	about.display = function() {
		var image = '<div class="col-xs-12 col-md-6"><img class="img-circle img-responsive" src="'+ about.img+'"></div>';
		var info = '<div class="col-xs-12 col-md-6"><p>'+ about.blurp+'</p></div>';
		$(".about-wrapper").append(image);
		$(".about-wrapper").append(info);
	};

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

	// adds the info for each project from the project object
	// above starting with the first article child of #projects
	projects.display = function() {
		var title, image, website, blurp = '';
		var projectArea = $("#projects > article").first();
		for (var project = 0; project < projects.length; project++) {
			title = '<h3><a href="' + projects[project].url +'">' + projects[project].name + '</a></h3>';
			image = '<img class="img-adjust img-responsive img-rounded" src="'+ projects[project].img +'">';
			blurp = '<p>'+ projects[project].description+'</p>';
			projectArea.append(image);
			projectArea.append(title);
			projectArea.append(blurp);

			projectArea = projectArea.next();
		}
	};

	var contactInfo = {
		social: ["fa fa-linkedin-square", "fa fa-github-alt", "fa fa-envelope-o"],
		links: ["linkedin.com", "github.com", "mailto:kn.aguilar7@gmail.com"],
		location: {
			current: "Storrs, CT",
			icon: "fa fa-map-pin"
		}
	};

	contactInfo.display = function() {
		$(".contact-wrapper > .contact-info").append("<p>Let's connect!</p><p>Find me here: </p>");
		$(".contact-wrapper > .contact-info").append('<ul></ul');
		for (var i = 0; i < contactInfo.links.length; i++) {
			$('<a href="'+contactInfo.links[i] +'"><i class="'+ contactInfo.social[i]+'" aria-hidden="true"></i></a>').appendTo(".contact-wrapper > .contact-info > ul");
		}
		$(".contact-wrapper > .contact-info").append('<p><i class="'+ contactInfo.location.icon +'" aria-hidden="true"></i> Current Location: '+ contactInfo.location.current+'</p>');
	};

	person.display();
	projects.display();
	about.display();
	contactInfo.display();
});