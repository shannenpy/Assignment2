if (window.location.pathname == "/") {
	window.location.pathname = "/index.html";
}

// check if user is logged in
let isLoggedIn = sessionStorage.getItem("user") ? true : false;

function login() {
	let { userID, firstName, lastName, credits } = JSON.parse(
		sessionStorage.getItem("user")
	);
	document.title += ` | ${firstName} ${lastName}`;
	registeredUser(userID, firstName, lastName, credits);
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
const currentPage = "Homepage";

$("<nav>", { class: "main-navigation" }).appendTo("body");
$("<label>", { class: "company" }).appendTo(".main-navigation");
$("<a>", {
	href: `${isLoggedIn ? "#registered-user" : "#top"}`,
	id: "name",
})
	.append(title)
	.appendTo(".company");
$("<ul>", { class: "nav-ul" })
	.append(generateLinks())
	.appendTo(".main-navigation");

function generateLinks() {
	return pages.map((page) => {
		let isActive = page.name == currentPage ? true : false;
		return `<a href = "${isActive ? "#" : page.url}" class = "nav-a" mBLI = ${
			page.mustBeLoggedIn
		} both = ${page.both}><li class = "nav-li ${
			isActive ? "active" : "inactive"
		}">${page.name}</li></a>`;
	});
}

function toggleLinks() {
	$(".nav-a").each(function () {
		$(this).hide();
		let mustBeLoggedIn = $(this).attr("mBLI") == "true" ? true : false;
		let both = $(this).attr("both") == "true" ? true : false;
		console.log(`${this}: ${mustBeLoggedIn} ${both}`);
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

$("<div>", { class: "homepage", id: "top" }).appendTo("body");

// create hamburger menu overlay
$("<div>", { class: "hamburger-overlay" }).appendTo("body");
$("<ul>").append(generateLinks()).appendTo(".hamburger-overlay");

toggleLinks();

$(".nav-a[href='#top']").click(function () {
	logout();
});

// create page body

// #pricing
// #contact-us
// #location
function loadMap() {
	$("<section>", { class: "section", id: "location" })
		.toggle()
		.appendTo(".homepage");
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
loadMap();

// #login
$("<section>", { class: "section", id: "login" })
	.toggle()
	.appendTo(".homepage");

let backgroundImage = $(
	`<image src="../assets/images/13643.webp" class="background-image"></image>`
);

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
    <p class="error-message"></p>
    <div class="form-btns">
		<button class="cancel" tabindex="0">Cancel</button>
		<button class="sign-in" tabindex="0">Sign In</button>
	</div>
</form>`);

const loadingLottie = `<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`;
const loadingPage = `<div class="loading-page">${loadingLottie}</div>`;

$("#login").append(backgroundImage, form, loadingPage);

$(".loading-page").toggle();

$(".cancel").click(function (e) {
	e.preventDefault();
	history.back() || (location.href = "./index.html");
});

function changeWindowBackground() {
	if ($(window).width() < 500) {
		backgroundImage.hide();
		$("body").css({ "background-color": "var(--primary-color)" });
	} else {
		backgroundImage.show();
		$("body").css({ "background-color": "" });
	}
}

$(window).ready(changeWindowBackground());

let emailRegexp = /\S+@\S+\.\S+/;
let apikey = "63dfab573bc6b255ed0c46ae";
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
			"x-apikey": apikey,
			"cache-control": "no-cache",
		},
	};
	$(".loading-page").toggle();
	$.ajax(settings).done(function (response) {
		if (response?.length) {
			if (passwordInput == response[0]["password"]) {
				sessionStorage.setItem(
					"user",
					JSON.stringify({
						id: response[0]["_id"],
						firstName: response[0]["firstName"],
						lastName: response[0]["lastName"],
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
		isLoggedIn = true;
		login();
		toggleLinks();
		$(".loading-page").toggle();
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
		.append(`<p>You currently have $${credits} in your account.</p>`)
		.appendTo("#registered-user");
}

//logout
function logout() {
	sessionStorage.removeItem("user");
	isLoggedIn = false;
	toggleLinks();
	$("#registered-user").hide();
	$("#top").show();
}

$("#logout").click(logout());

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
	$("body").toggleClass("active");
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

	$(function () {
		$("a").click(function (e) {
			e.preventDefault();
			toggleLinks();
			var link = $(this).attr("href");
			$(".section").hide();
			$(link).show();
		});
	});

	$(window).resize(function () {
		changeTitle();

		if ($(window).width() < 500) {
			backgroundImage.hide();
			$("body").css({ "background-color": "var(--primary-color)" });
		} else {
			resetHamburger();

			backgroundImage.show();
			$("body").css({ "background-color": "" });
		}
	});

	$(window).keydown(function (e) {
		if (e.which == 13) {
			userApi(e);
		}
	});

	// not secure but oh well...
	$(".sign-in").click((e) => userApi(e));
});
