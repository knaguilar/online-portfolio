// var navigation = ["Welcome", "About", "Projects", "Contact"];
// function displayNav() {
// 	var parent = $("nav > div > ul > li");
// 	for (var i = 0; i < navigation.length; i++) {
// 		var nav = navigation[i];
// 		parent.first().append('<a class="page-scroll" href="#'+nav.toLowerCase()+'-section">'+ nav+'</a>');
// 		parent = parent.next();
// 	}
// }
var headers = ["About", "Projects", "Contact"];

function displayHeaders() {
	for (var i = 0; i < headers.length; i++) {
		var header = headers[i];
		$('#' + header.toLowerCase() + '-section > div > .header').prepend(header);
	}
}

var person = {
	name: "Karla N. Aguilar",
	role: "Front-End Web Developer"
};

person.display = function() {
	var name = '<div class="header">' + person.name + '</div>';
	var role = '<div class="occupation">' + person.role + '</div>';
	$(".welcome-wrapper").append(name);
	$(".welcome-wrapper").append(role);
};

//about section
var about = {
	img: "images/mobile/fall2015-mobile.jpg",
	blurp: "<p>I thrive in an environment where I am constantly challenged and learning new skills, which correlates with the self-motivation I have acquired throughout my years in college and while traveling abroad. I have been dedicated to programming since my sophomore year in college while still maintaining a broad range of interests which include photography, graphic design and blogging.</p> <p>I am very passionate about technology and education, which can be seen through my accomplishment of hosting and instructing basic Scratch programming classes to students in my community. I facilitated the CS First by Google curriculum in (3) locations in Santa Ana, CA for students ranging from the 1st to 12th grade, totaling in (33) students over the course of the 11 weeks. Furthermore, I journeyed through various Photoshop and Illustrator courses with Adobe’s Education Exchange Platform earning my trainer certification. The certificate attests to my ability to train students, faculty and staff alike in the skill of basic Photoshop and Illustrator at any grade level.</p> </p>I also developed my communication skills while I was abroad, which I used through the interaction with people of various backgrounds. Having been in Germany, Italy, France, Portugal and the Czrech Republic, I was placed out of my comfort zone yet learned to communicate with others despite our language or cultural barriers. I also learned about photography along the way which gave way to our travel blog and my passion for making beautiful, responsive websites.</p> <p>I am certain I would be a great asset to any workplace providing a diverse perspective, a strong passion for technology and education and a drive to create efficient, creative and responsive webpages with the latest technologies.</p>"
};

about.display = function() {
	var image =
		'<div class="col-xs-12 col-md-6"><img class="img-circle img-responsive" src="' +
		about.img + '"></div>';
	var info = '<div class="col-xs-12 col-md-6 blurp">' + about.blurp + '</div>';
	$(".about-wrapper").append(image);
	$(".about-wrapper").append(info);
};

// info for each project
var projects = [{
	name: "Neighborhood Map",
	img: "images/mobile/neighborhood4x4-mobile.jpg",
	description: "A single-page application featuring a map of Barcelona's neighborhood. Additional functionality to the application includes: map markers indicating points of interest, a search function and a listview of all the locations on the map. The application is also mobile-friendly and allows the user to hide or show the list of locations and search bar. APIs in the application include Google and Wikipedia.",
	url: "neighborhood-map-30f11.firebaseapp.com"
}, {
	// make into mobile size
	name: "Wikipedia Viewer",
	img: "images/mobile/wiki.png",
	description: "Designed and developed a web application using Angular 2 that displays a list of articles (based on a search query) with a brief summary and their respective link through the use of MediaWiki's API",
	url: "karlanaguilar.me/wikipedia-search-viewer/"
}, {
	name: "Frogger Arcade Game Clone",
	img: "images/mobile/arcade-mobile.png",
	description: "A recreation of the classic aracde game. Using visual assets and a game loop engine provided by Udacity, added a main charater and enemies to the game. Additional functionality includes current score and highest score displayed.",
	url: "karlanaguilar.me/arcade-frogger-game"
}, {
	name: "Mariachi Webpage",
	img: "images/mobile/mariachi.png",
	description: "Developed a client webpage for their mariachi group which consisted of 5 web pages each customized to include fullscreen carosel slideshow, hover zoom images and auto-play music playlist. Created using HTML, CSS and JavaScript.",
	url: "http://karlanaguilar.me/music-group-webpage/"
}, {
	name: "Stumble Upon Lyfe",
	img: "images/mobile/sul-mobile.png",
	description: "A travel blog run on WordPress by Victor M. Muratalla and myself. Through this blog, we would like to share our journey with our family, friends, and anyone interested in traveling and/or studying abroad. Our journey narrates from the beginnings of our journey to leave the United States to our attempt to immerse into the Spanish culture and traveling to other countries. Come and find out what we're up to next!!",
	url: "stumbleuponlyfe.com"
}, {
	name: "Feed Reader Testing",
	img: "images/mobile/feedtesting-mobile.png",
	description: "A web-based application that reads RSS feeds originally given by Udacity with incomplete test suites. Additional test suites were added to the application to ensure that the application works without fail.",
	url: "https://github.com/knaguilar/feed-reader-testing/tree/master"
}];

// adds the info for each project from the project object
// above starting with the first article child of #projects
projects.display = function() {
	var title, image, web, blurp = '';
	var projectArea = $("#projects > article").first();
	for (var project = 0; project < 6; project++) {
		title = '<h3>' + projects[project].name + '</h3>';
		image = '<img class="img-adjust img-responsive img-rounded" src="' +
			projects[project].img + '">';
		blurp = '<p>' + projects[project].description + '</p>';
		web = '<a class="btn btn-primary link" href="' + projects[project].url +
			'" role="button">View Project</a>';
		projectArea.append(image);
		projectArea.append(title);
		projectArea.append(blurp);
		projectArea.append(web);

		projectArea = projectArea.next();
	}
};

var contactInfo = {
	social: ["fa fa-linkedin-square", "fa fa-github-alt", "fa fa-underline",
		"fa fa-envelope-o"
	],
	links: ["https://www.linkedin.com/in/karlanaguilar",
		"https://github.com/knaguilar/",
		"https://profiles.udacity.com/u/karlaaguilar",
		"mailto:kn.aguilar7@gmail.com"
	],
	location: {
		current: "Storrs, CT",
		icon: "fa fa-map-pin"
	}
};

contactInfo.display = function() {
	$(".contact-wrapper > div > .contact-info").append("<h3>Let's connect!</h3>");
	$(".contact-wrapper > div > .contact-info").append('<ul></ul');
	for (var i = 0; i < contactInfo.links.length; i++) {
		$('<a href="' + contactInfo.links[i] + '"><i class="' + contactInfo.social[i] +
			' fa-3x" aria-hidden="true"></i></a>').appendTo(
			".contact-wrapper > div > .contact-info > ul");
	}
	$(".contact-wrapper > div > .contact-info").append('<p><i class="' +
		contactInfo.location.icon + '" aria-hidden="true"></i> Current Location: ' +
		contactInfo.location.current + '</p>');
};

function controlProjectTitle(projectTitle) {
	if ($(window).width() > 991) {
		if (projectTitle.hasClass('fixed-title') === false) {
			projectTitle.addClass('fixed-title');
		}
		//add fixed title class
	} else {
		projectTitle.removeClass('fixed-title');
		//remove fixed title class
	}
}

$(document).ready(function() {
	var projectTitle = $('#projects-section > div > .header');
	//if its a big screen, add fixed-title from the beginning
	if ($(window).width() > 991) {
		projectTitle.addClass('fixed-title');
	}

	$(window).resize(function() {
		controlProjectTitle(projectTitle);
	});

	//while scrolling, control project title if fixed-title is set as a class
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		// maybe change to 1.4 to make it appear sooner?
		var upperLength = ($("#welcome-section").height() + ($("#about-section").height() /
			1.5));
		var lowerLength = ($(".container-fluid").height() - ($("#contact-section")
			.height() * 1.55));
		if (y > upperLength && y < lowerLength) {
			$('.fixed-title').show("fast");
		} else {
			$('.fixed-title').hide("fast");
		}
	});

	displayHeaders();
	// displayNav();
	person.display();
	projects.display();
	about.display();
	contactInfo.display();
});