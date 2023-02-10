if (window.location.pathname != "/index.html") {
	window.location.pathname = "/index.html";
}

const restdbApiKey = "63dfab573bc6b255ed0c46ae";
let emailRegexp = /\S+@\S+\.\S+/;
const $loadingLottie = `<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`;
const $loadingPage = `<div class="loading-page">${$loadingLottie}</div>`;
let $errorMessage = $("<p>", { class: "error-message" });

// check if user is logged in
let isLoggedIn = sessionStorage.getItem("user") ? true : false;

function login() {
	let { userID, firstName, lastName, email, phone, credits } = JSON.parse(
		sessionStorage.getItem("user")
	);
	document.title += ` | ${firstName} ${lastName}`;
	registeredUser(userID, firstName, lastName, credits);

	$("input[name='name']").val(`${firstName} ${lastName}`);
	$("input[name='email']").val(email);
	$("input[name='phone']").val(phone);
}

if (isLoggedIn) {
	login();
}

toggleLinks();

// set site name
const title = `Driving for Dummies`;
document.title = `${title}`;

// create navigation bar
let pages = [
	{
		name: "Academy",
		url: "#academy",
		mustBeLoggedIn: true,
		both: false,
	},
	{
		name: "Booking",
		url: "#booking",
		mustBeLoggedIn: true,
		both: false,
	},
	{
		name: "Pricing",
		url: "#pricing",
		mustBeLoggedIn: false,
		both: true,
	},
	{
		name: "Contact Us",
		url: "#contact-us",
		mustBeLoggedIn: false,
		both: true,
	},
	{
		name: "Location",
		url: "#location",
		mustBeLoggedIn: false,
		both: false,
	},
	{
		name: "Login",
		url: "#login",
		mustBeLoggedIn: false,
		both: false,
	},
	{
		name: "Logout",
		url: "#top",
		mustBeLoggedIn: true,
		both: false,
	},
];

$("<nav>", { class: "main-navigation" }).appendTo("body");
$("<label>", { class: "company" }).appendTo(".main-navigation");
$("<a>", {
	href: `${isLoggedIn ? "#registered-user" : "#top"}`,
	class: "active",
	id: "name",
})
	.append(title)
	.appendTo(".company");
	.append(title)
	.appendTo(".company");

$("#name").click(function () {
	if (isLoggedIn) {
		$("#registered-user").show();
		$("#top").hide();
	} else {
		$("#registered-user").hide();
		$("#top").show();
	}
	resetHamburger();
	$(".nav-a").removeClass("active");
	$(this).addClass("active");
});

$("<ul>", { class: "nav-ul" })
	.append(generateLinks())
	.appendTo(".main-navigation");
	.append(generateLinks())
	.appendTo(".main-navigation");

function generateLinks() {
	return pages.map((page) => {
		return `<a href = ${page.url} class = "nav-a" mBLI = ${page.mustBeLoggedIn} both = ${page.both}><li class = "nav-li">${page.name}</li></a>`;
	});
	return pages.map((page) => {
		return `<a href = ${page.url} class = "nav-a" mBLI = ${page.mustBeLoggedIn} both = ${page.both}><li class = "nav-li">${page.name}</li></a>`;
	});
}

function toggleLinks() {
	$(".nav-a").each(function () {
		// toggle display
		$(this).hide();
		let mustBeLoggedIn = $(this).attr("mBLI") == "true" ? true : false;
		let both = $(this).attr("both") == "true" ? true : false;
		if (!isLoggedIn) {
			if (!mustBeLoggedIn) {
				$(this).show();
			}
		} else {
			if (mustBeLoggedIn || (!mustBeLoggedIn && both)) {
				$(this).show();
			}
		}
	});
	$(".nav-a").each(function () {
		// toggle display
		$(this).hide();
		let mustBeLoggedIn = $(this).attr("mBLI") == "true" ? true : false;
		let both = $(this).attr("both") == "true" ? true : false;
		if (!isLoggedIn) {
			if (!mustBeLoggedIn) {
				$(this).show();
			}
		} else {
			if (mustBeLoggedIn || (!mustBeLoggedIn && both)) {
				$(this).show();
			}
		}
	});
}

// create hamburger menu
const hamburger = `<input type="checkbox" id="menu_checkbox">
<label for="menu_checkbox" id="menu_checkbox_label">
  <div></div>
  <div></div>
  <div></div>
</label>`;
$("<label>", { class: "hamburger" })
	.append(hamburger)
	.appendTo(".main-navigation");
	.append(hamburger)
	.appendTo(".main-navigation");

$("<div>", { class: "homepage", id: "homepage" }).appendTo("body");
let $backgroundImage = $(
`<image src="../assets/images/lexus.jpg" class="background-image"></image>`
);
$(".homepage").append($backgroundImage);
// create hamburger menu overlay
$("<div>", { class: "hamburger-overlay" }).appendTo("body");
$("<ul>").append(generateLinks()).appendTo(".hamburger-overlay");

toggleLinks();

$(".nav-a[href='#top']").click(function () {
	logout();
});

// create page body

// academy
$("<section>", { class: "section", id: "academy" })
	.toggle()
	.appendTo(".homepage");

$("<div>", { class: "quiz" }).appendTo("#academy");
$("<div>", { class: "quiz-header" }).appendTo(".quiz");
$("<h1>", { class: "quiz-name" }).append(`Quiz`).appendTo(".quiz-header");
$("<button>", { class: "quiz-btn quiz-btn-retry" })
	.append("Retry")
	.appendTo(".quiz-header");
$("<div>", { class: "quiz-progress" }).appendTo(".quiz-header");
$("<div>", { class: "quiz-progress-bar" }).appendTo(".quiz-progress");
$("<div>", { class: "quiz-progress-bar-fill" }).appendTo(".quiz-progress-bar");
$("<div>", { class: "quiz-progress-text" }).appendTo(".quiz-progress");
$("<div>", { class: "quiz-body" }).appendTo(".quiz");
$("<div>", { class: "quiz-results" }).toggle().appendTo(".quiz");
$("<p>", { class: "quiz-results-text" }).appendTo(".quiz-results");
$("<button>", { class: "quiz-btn quiz-btn-results" })
	.append("Results")
	.appendTo(".quiz-results");
$("<div>", { class: "quiz-footer" }).appendTo(".quiz");
$("<button>", { class: "quiz-btn quiz-btn-prev" })
	.append("Previous")
	.toggle()
	.appendTo(".quiz-footer");
$("<button>", { class: "quiz-btn quiz-btn-next" })
	.append("Next")
	.appendTo(".quiz-footer");
$("<button>", { class: "quiz-btn quiz-btn-submit" })
	.append("Submit")
	.toggle()
	.appendTo(".quiz-footer");

const quizLength = 10; // number of questions per quiz
let questions = [];
$.ajax({
	url: "../assets/json/questions.json",
	success: function (result) {
		questions = result;
		currentQuestion = 0;
		resetQuiz();
		generateQuiz(questions);
	},
}).done(function () {
	$(".quiz-answer").click(function () {
		if ($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			$(".quiz-btn-next").addClass("inactive");
		} else {
			$(this).siblings().removeClass("selected");
			$(this).toggleClass("selected");
			$(".quiz-btn-next").removeClass("inactive");
		}
	});

	$(".quiz-btn-next").click(function () {
		if ($(".quiz-answer.selected").length) {
			$(".quiz-question").hide();
			$(".quiz-question")
				.eq(currentQuestion + 1)
				.show();
			currentQuestion++;
			if (currentQuestion == $(".quiz-question").length - 1) {
				$(".quiz-btn-next").hide();
				$(".quiz-btn-submit").show();
			}
			$(".quiz-btn-prev").show();

			updateProgress();
		}
		$(this).addClass("inactive");
	});

	$(".quiz-btn-prev").click(function () {
		$(".quiz-question").hide();
		$(".quiz-question")
			.eq(currentQuestion - 1)
			.show();
		currentQuestion--;
		if (currentQuestion == 0) {
			$(".quiz-btn-prev").hide();
		}
		$(".quiz-btn-next").show();
		$(".quiz-btn-submit").hide();
		updateProgress();
	});

	// submit quiz
	$(".quiz-btn-submit").click(function () {
		$(".quiz-question").hide();
		$(".quiz-btn-next").hide();
		$(".quiz-btn-prev").hide();
		$(".quiz-btn-submit").hide();

		$(".quiz-progress-bar-fill").css("width", "100%");
		$(".quiz-progress-text").text("100%");

		// show results
		let correct = 0;
		$(".quiz-question").each(function (index) {
			if (
				$(this).data("correct") ==
				$(this).find(".quiz-answer.selected").text().slice(3)
			) {
				$(this).find(".quiz-answer.selected").addClass("correct");
				correct++;
			} else {
				$(this).find(".quiz-answer.selected").addClass("incorrect");
				// not working
				$(this)
					.find(".quiz-answer")
					.each(function () {
						if (
							$(this).text().slice(3) == $(this).parents().eq(1).data("correct")
						) {
							$(this).addClass("correct");
						}
					});
			}
		});
		$(".quiz-results-text").text(
			`You got ${correct} out of ${quizLength} correct!`
		);
		$(".quiz-results").show();
		currentQuestion = 0;
	});

	$(".quiz-btn-results").click(function () {
		$(".quiz-results").hide();
		$(".quiz-question").addClass("result");
		$(".quiz-btn").addClass("result");
		$(".quiz-question:first").show();
		$(".quiz-btn-next").show();

		$(".quiz-progress-bar-fill").css("width", "0%");
		$(".quiz-progress-text").text("0%");

		$(".quiz-answer").css("pointer-events", "none");

		$(".quiz-btn-next").off("click");
		$(".quiz-btn-next").click(function () {
			$(".quiz-question").hide();
			$(".quiz-question")
				.eq(currentQuestion + 1)
				.show();
			currentQuestion++;
			if (currentQuestion == $(".quiz-question").length - 1) {
				$(".quiz-btn-next").hide();
			}
			$(".quiz-btn-prev").show();
		});

		$(".quiz-btn-prev").off("click");
		$(".quiz-btn-prev").click(function () {
			$(".quiz-question").hide();
			$(".quiz-question")
				.eq(currentQuestion - 1)
				.show();
			currentQuestion--;
			if (currentQuestion == 0) {
				$(".quiz-btn-prev").hide();
			}
			$(".quiz-btn-next").show();
		});
	});

	$(".quiz-btn-retry").click(function () {
		resetQuiz();
		generateQuiz(questions);
		$(".quiz-answer").click(function () {
			if ($(this).hasClass("selected")) {
				$(this).removeClass("selected");
				$(".quiz-btn-next").addClass("inactive");
			} else {
				$(this).siblings().removeClass("selected");
				$(this).toggleClass("selected");
				$(".quiz-btn-next").removeClass("inactive");
			}
		});
	});
});

function generateQuestion(q) {
	const { title, answers, correct, image } = q;
	const allAnswers = answers
		.map((answer, index) => {
			return `<div class="quiz-answer">${index + 1}. ${answer}</div>`;
		})
		.join("");

	$("<div>", {
		class: "quiz-question",
		"data-correct": correct,
	})
		.append(
			`${
				image
					? `<img class="quiz-image" src=${image} alt="Image for question: ${title}"/>`
					: ""
			}
			<h2 class="quiz-title">${title}</h2>
			<div class="quiz-answers">${allAnswers}</div>`
		)
		.appendTo(".quiz-body");
}

function generateQuiz() {
	const questionIndex = [];
	for (let i = 0; i < quizLength; i++) {
		let index = Math.floor(Math.random() * questions.length);
		while (questionIndex.includes(index)) {
			index = Math.floor(Math.random() * questions.length);
		}
		questionIndex.push(index);
		generateQuestion(questions[questionIndex[i]]);
	}
	$(".quiz-question:not(:first)").hide();
}

function updateProgress() {
	$(".quiz-progress-bar-fill").css(
		"width",
		`${(currentQuestion / $(".quiz-question").length) * 100}%`
	);
	$(".quiz-progress-text").text(
		`${currentQuestion}/${$(".quiz-question").length}`
	);
}

function resetQuiz() {
	currentQuestion = 0;
	$(".quiz-question").remove();
	$(".quiz-btn-prev").hide();
	$(".quiz-btn-next").show();
	$(".quiz-btn-next").addClass("inactive");
	$(".quiz-btn-submit").hide();
	$(".quiz-progress-bar-fill").css("width", "0%");
	$(".quiz-progress-text").text(`0/${quizLength}`);
}

// booking
// create appointment widget
/* AppointmentThing widget */
$("<section>", { class: "section", id: "booking" })
	.toggle()
	.appendTo(".homepage");

const apptThing = `<div class="apptthingemb" data-appt-url="iddrivingcentre" data-appt-types="Fd19750" data-page-text="000000" data-page-link="0f5cff" data-page-details="false" data-emb-num="1" style="width:100%;"><a href="https://appointmentthing.com" title="Appointment Scheduling">Appointment Scheduling</a></div>`;
$(`<div
			class="apptthingemb"
			data-appt-url="iddrivingcentre"
			data-appt-types="Fd19750,ZP19751,hE19752,IH19753,xh19754,cd19755"
			data-page-text="000000"
			data-page-link="0f5cff"
			data-page-details="false"
			data-emb-num="1"
		>
		<p>Booking system is currently unavailable. Please try again later</p>
		</div>`).appendTo("#booking");

// #top
$("<section>", { class: "section", id: "top" }).appendTo(".homepage");

// image taken from
// https://www.hdcarwallpapers.com/2018_lexus_lc_500h_structural_blue_4k-wallpapers
let $backgroundImage = $(
	`<image src="../assets/images/lexus.jpg" class="background-image" alt="Picture of a blue Lexus"></image>`
);
$("body").append($backgroundImage);

// #pricing
$("<section>", { class: "section", id: "pricing" })
	.toggle()
	.appendTo(".homepage");

/* ----- license list ----- */
$("<section>", { class: "license-list" })
	.append(`<h2 class="pricing-h2">Licenses we offer</h2>`)
	.appendTo("#pricing");

fetch("./assets/json/licenses.json")
	.then((response) => response.json())
	.then((data) => {
		data.map((vehicle) => {
			let { type, heading, classes, sidenote } = vehicle;
			type = type.toLowerCase().replace(/\s/g, "-");
			$(`<div id="${type}-licenses" class="license-type">
		<h3 class="license-heading">${heading ? heading : type}</h3>
		<div id="${type}-content" class="license-content">
		<ul class="license-ul">
		${classes
			.map((license) => {
				return `<li><button id="btn-${license}" class="pricing-btn">${license}</button></li>`;
			})
			.join("")}
			</ul>
			${sidenote ? `<p class="side-note">Side note: ${sidenote}</p>` : ""}
			<button class="purchase pricing-btn">Purchase</btn>
		</div>
		</div>`).appendTo(".license-list");
		});
		$(".license-heading:first").addClass("active");
		$(".license-heading").not(".active").siblings(".license-content").hide();

		$(".pricing-btn:not('.purchase')").click(function () {
			$(this).parent().siblings().children().removeClass("active");
			$(this).toggleClass("active");
		});

		$(".license-heading").click(function () {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(".license-content").slideUp();
			} else {
				$(".license-heading").removeClass("active");
				$(this).addClass("active");
				$(".license-content").slideUp();
				$(this).siblings(".license-content").slideDown();
			}
		});
	});

// #contact-us
$("<section>", { class: "section", id: "contact-us" })
	.toggle()
	.appendTo(".homepage");

$("<div>", { class: "form" }).appendTo("#contact-us");
$("<h3>", { class: "contact-form-header" })
	.append("Get in touch")
	.appendTo(".form");
$("<div>", { class: "contact-form-subheader" })
	.append(`<p>Please feel free to send us a message.</p> `)
	.appendTo(".form");
$("<form>", { name: "contact-form", id: "contact-form", action: "#" }).appendTo(
	".form"
);
$($errorMessage).appendTo("#contact-form");

$("<div>", { class: "input-row", id: "input-row-name" }).appendTo(
	"#contact-form"
);
$("<input>", {
	type: "text",
	name: "name",
	placeholder: "Name",
}).appendTo("#input-row-name");

$("<div>", { class: "input-row", id: "input-row-email" }).appendTo(
	"#contact-form"
);
$("<input>", {
	type: "email",
	name: "email",
	placeholder: "Email",
}).appendTo("#input-row-email");

$("<div>", { class: "input-row", id: "input-row-phone" }).appendTo(
	"#contact-form"
);
$("<input>", {
	type: "tel",
	name: "phone",
	placeholder: "Phone number (optional)",
}).appendTo("#input-row-phone");

$("<div>", { class: "input-row", id: "input-row-message" }).appendTo(
	"#contact-form"
);
$("<textarea>", {
	name: "message",
	placeholder: "Message",
	rows: "5",
}).appendTo("#input-row-message");

$('<div id="input-row-submit" class="input-row">').appendTo("#contact-form");
$("<input>", {
	type: "submit",
	value: "Send",
	id: "submit-btn",
}).appendTo("#input-row-submit");

$("#contact-us").append($loadingPage);
$("#contact-us .loading-page").toggle();

// submit form
const contactApiKey = "https://drivingfd-b6f9.restdb.io/rest/contact-form";
$("#submit-btn").click(function (e) {
	e.preventDefault();
	let name = $("#input-row-name input").val();
	let email = $("#input-row-email input").val();
	let phone = $("#input-row-phone input").val();
	let message = $("#input-row-message textarea").val();

	if (!emailRegexp.test(email)) {
		$(".error-message").text("Please enter a valid email address");
		return;
	}
	if (name && email && message) {
		var data = {
			name: name,
			email: email,
			phone: phone,
			message: message,
		};
		var settings = {
			async: true,
			crossDomain: true,
			url: "https://drivingfd-b6f9.restdb.io/rest/contact-form",
			method: "POST",
			headers: {
				"content-type": "application/json",
				"x-apikey": restdbApiKey,
				"cache-control": "no-cache",
			},
			processData: false,
			data: JSON.stringify(data),
		};
		$("#contact-us .loading-page").toggle();
		$.ajax(settings).done(function (response) {
			console.log(response);
			$("#contact-us .loading-page").toggle();
			$("#input-row-name input").val("");
			$("#input-row-email input").val("");
			$("#input-row-phone input").val("");
			$("#input-row-message textarea").val("");
			$(".error-message").text("Your message has been sent!");
		});
	} else {
		alert("Please fill in all the compulsory fields!");
	}
});

// contact details
$("<div>", { class: "contact-details" }).appendTo("#contact-us");
$("<ul>", { class: "contact-list" }).appendTo(".contact-details");

$("<li>", { id: "opening-hours", class: "contact-list-content" }).appendTo(
	".contact-list"
);
$("#opening-hours").append(
	'<p>Our opening hours <i class="fa-sharp fa-solid fa-clock"></i></p>',
	"<p>8am - 6.30pm</p>"
);

$("<li>", { id: "address", class: "contact-list-content" }).appendTo(
	".contact-list"
);
$("#address").append(
	'<p>Location <i class="fa-sharp fa-solid fa-location-dot"></i></p>',
	'<p><a class="contact-links" href="https://www.google.com/maps/dir/1.3439739,103.701547/ngee+ann+poly/@1.3328825,103.736262,13.54z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da107d8eb4e359:0x75d2e7ffdeeb0c43!2m2!1d103.7743466!2d1.3321036" target="_blank">Driving for Dummies, 535 Clementi Rd, Singapore 599489</a></p>'
);

$("<li>", { id: "tel", class: "contact-list-content" }).appendTo(
	".contact-list"
);
$("#tel").append(
	'<p>Phone Number <i class="fa-solid fa-phone"></i></p>',
	"<p>+65 6466 6555</p>"
);

$("<li>", { id: "ig", class: "contact-list-content" }).appendTo(
	".contact-list"
);
$("#ig").append(
	'<p><a class="contact-links" href="https://www.instagram.com/ngeeannpoly/?hl=en" target="_blank">Visit our Instagram page <i class="fa-brands fa-square-instagram"></i></a></p>'
);

$("<li>", { id: "tt", class: "contact-list-content" }).appendTo(
	".contact-list"
);
$("#tt").append(
	'<p><a class="contact-links" href="https://www.tiktok.com/@ngeeannpoly" target="_blank">Visit our Tiktok page <i class="fa-brands fa-tiktok"></i></a></p>'
);

// #location
function loadMap() {
	$("<section>", { class: "section", id: "location" })
		.toggle()
		.appendTo(".homepage");
	$("<p>")
		.append("Map may take a while to load... Please be patient!")
		.appendTo("#location");
	$("<div>", { id: "mapContainer" }).appendTo("#location");
	$("<section>", { class: "section", id: "location" })
		.toggle()
		.appendTo(".homepage");
	$("<p>")
		.append("Map may take a while to load... Please be patient!")
		.appendTo("#location");
	$("<div>", { id: "mapContainer" }).appendTo("#location");

	const coordinates = { lng: 103.7777, lat: 1.3324 };
	const address = "535 Clementi Rd, Singapore 599489";
	// Initialize the platform object
	var platform = new H.service.Platform({
		apikey: "gKw5rlJJb7-AGl_6NkRnxN7qzy6_1Bvg4oeq5Blh8eo",
	});

	// Obtain the default map types from the platform object
	var maptypes = platform.createDefaultLayers();

	// Instantiate (and display) the map
	var map = new H.Map($("#mapContainer")[0], maptypes.vector.normal.map, {
		zoom: 15,
		center: coordinates,
	});

	var ui = H.ui.UI.createDefault(map, maptypes);

	// Create an info bubble object at a specific geographic location:
	var bubble = new H.ui.InfoBubble(coordinates, {
		content: `<b>${title} ${address}</b>`,
	});

	// Add info bubble to the UI:
	ui.addBubble(bubble);

	$(window).resize(function () {
		map.getViewPort().resize();
	});
}

// Load the map
// loadMap();

// #login
$("<section>", { class: "section", id: "login" })
	.toggle()
	.appendTo(".homepage");

let form = $(`
<form class="login-form">
	<h1>Login</h1>
    <div class="input-container">
        <div class="input-field">
            <input type="email" placeholder="Email" class="input-email">
        </div>
        <div class="input-field">
            <input type="password" placeholder="Password" class="input-password">
        </div>
    </div>
    ${$errorMessage}
    <div class="form-btns">
		<button class="cancel" tabindex="0">Cancel</button>
		<button class="sign-in" tabindex="0">Sign In</button>
	</div>
</form>`);

$("#login").append(form, $loadingPage);
$("#login .loading-page").toggle();

$(".cancel").click(function (e) {
	e.preventDefault();
	history.back() || (location.href = "./index.html");
});

function changeWindowBackground() {
	if ($(window).width() < 500) {
		$backgroundImage.hide();
	} else {
		$backgroundImage.show();
	}
}

$(window).ready(changeWindowBackground());

let query = {};
function userApi(e) {
	e.preventDefault();
	$(".error-message").text("");
	let emptyFields = false;
	$(".input-field input").each(function () {
		if (!$(this).val()) {
			$(".error-message").text("Fields cannot be empty");
			emptyFields = true;
			return;
		}
	});
	if (emptyFields) {
		return;
	}
	if (!emailRegexp.test($(".input-email").val())) {
		$(".error-message").text("Please enter a valid email address");
		return;
	}
	let emailInput = $(".input-email").val();
	let passwordInput = $(".input-password").val();
	var settings = {
		async: true,
		crossDomain: true,
		url: `https://drivingfd-b6f9.restdb.io/rest/registeredusers?q={"email": "${emailInput}"}`,
		method: "GET",
		headers: {
			"content-type": "application/json",
			"x-apikey": restdbApiKey,
			"cache-control": "no-cache",
		},
	};
	$("#login .loading-page").toggle();
	$.ajax(settings).done(function (response) {
		if (response?.length) {
			if (passwordInput == response[0]["password"]) {
				sessionStorage.setItem(
					"user",
					JSON.stringify({
						id: response[0]["_id"],
						firstName: response[0]["firstName"],
						lastName: response[0]["lastName"],
						email: response[0]["email"],
						phone: response[0]["phoneno"],
						credits: response[0]["credits"],
					})
				);
				$("#login").hide();
				$("#registered-user").show();
			} else {
				$(".error-message").text("Wrong password");
			}
		} else {
			$(".error-message").text("Email not registered");
		}
		$("#login .loading-page").toggle();
		isLoggedIn = true;
		login();

		toggleLinks();
	});
}

// registered-user
function registeredUser(userID, firstName, lastName, credits) {
	$("<section>", { class: "section", id: "registered-user" }).appendTo(
		".homepage"
	);

	$("<h2>", { class: "welcome" })
		.append(`Welcome, ${firstName} ${lastName}`)
		.appendTo("#registered-user");

	// current profile details
	$("<div>", { class: "profile-details" })
		.append(
			`<p>You currently have <span id="credits">$${credits}</span> in your account.</p>`
		)
		.appendTo("#registered-user");

	$("<p>")
		.append(
			`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		)
		.appendTo("#registered-user");
	$("<p>")
		.append(
			`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		)
		.appendTo("#registered-user");
	$("<p>")
		.append(
			`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		)
		.appendTo("#registered-user");
}

//logout
function logout() {
	sessionStorage.removeItem("user");
	isLoggedIn = false;
	toggleLinks();
	$("#registered-user").hide();
	$("input[name='name']").val("");
	$("input[name='email']").val("");
	$("input[name='phone']").val("");
	$("#top").show();
}

// top of homepage
let tophp = document.createElement("section");
tophp.classList.add("top");
homepage.append(tophp);
let hpbg = document.createElement("img");
hpbg.setAttribute("src", "./13643.webp");
hpbg.setAttribute("alt", "Picture of Driving for Dummies");
hpbg.setAttribute("class", "top-homepage--image");
tophp.append(hpbg);
let topContentDiv = document.createElement("div");
topContentDiv.classList.add("top-content-div");
homepage.append(topContentDiv);
var tophpContent = `<a href = "pricing.html" class="top-homepage" id="find-out">Find out more here</a>
<h1>Driving for Dummies</h1>
<p>Here at Driving for Dummies, we want what's best for you. 
We have over (number) course to choose from a license in class() to class(). 
How are we different from other driving schools? 
We want you to get the most of your money, so we have free videos and quizzes for you on top of the course you have paid for.
Additionally, we want to give you the opportunity to take charge of your learning. 
Hence, you have the option to choose your prefered instructors.</p>`;
topContentDiv.innerHTML = tophpContent;

// todo name resize not working
// listen for window resize
function changeTitle() {
	if ($(window).width() > 500) {
		$("#name").text(title);
	} else {
		$("#name").text("DFD");
	}
}

// hamburger controls
function resetHamburger() {
	$("#menu_checkbox").prop("checked", false);
	$(".hamburger-overlay").removeClass("active");
	$("body").removeClass("no-scroll");
}

function toggleHamburgerMenu() {
	$(".hamburger-overlay").toggleClass("active");
	$("body").toggleClass("no-scroll");
}

$(document).ready(function () {
	changeTitle();

	$("#menu_checkbox").click(function () {
		toggleHamburgerMenu();
	});

	$(".hamburger-overlay .nav-li").click(function () {
		toggleHamburgerMenu();
	});

	$(".hamburger-overlay").click(function () {
		resetHamburger();
	});

	$("a").click(function (e) {
		e.preventDefault();
		var link = $(this).attr("href");
		toggleLinks();
		$(".section").hide();
		$(link).show();
		if (link == "#top" || link == "#login") {
			$(".main-navigation").css("background-image", "");
			$(".background-image").show();
		} else {
			$(".main-navigation").css(
				"background-image",
				"url(../assets/images/lexus.jpg)"
			);
			$(".background-image").hide();
		}
	});

	$(".nav-a").click(function () {
		$("#name").removeClass("active");
		$(".nav-a").removeClass("active");
		$(`.nav-a[href="${$(this).attr("href")}"]`).addClass("active");
	});

	$(window).resize(function () {
		changeTitle();
	});

	$(window).keydown(function (e) {
		if (e.which == 13) {
			userApi(e);
		}
	});

	// not secure but oh well...
	$(".sign-in").click((e) => userApi(e));
});
