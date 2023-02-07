// check if user is logged in
const isLoggedIn = sessionStorage.getItem("user") ? true : false;

// set site name
const title = `Driving for Dummies`;
document.title = `${title} | Location`;

// create navigation bar
const pages = [
	{
		name: "Pricing",
		url: "./pricing.html",
	},
	{
		name: "Contact Us",
		url: "./contact-us.html",
	},
	{
		name: "Location",
		url: "./location.html",
	},
	{
		name: "Login",
		url: "./login.html",
	},
];

$("<nav>", { class: "main-navigation" }).appendTo("body");
$("<label>", { class: "company" }).appendTo(".main-navigation");
$("<a>", {
	href: `${isLoggedIn ? "./registered-user.html" : "./index.html"}`,
	id: "name",
})
	.append(title)
	.appendTo(".company");
$("<ul>", { class: "nav-ul" })
	.append(function () {
		return pages.map((page) => {
			return `<a href = "${page.url}" class="nav-a"><li class="nav-li">${page.name}</li></a>`;
		});
	})
	.appendTo(".main-navigation");
$(".nav-a:last-child").click(function () {
	sessionStorage.removeItem("user");
});

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

$("<div>", { class: "homepage" }).appendTo("body");

// create hamburger menu overlay
$("<div>", { class: "hamburger-overlay" }).appendTo("body");
$("<ul>")
	.append(function () {
		return pages.map((page) => {
			return `<a href = "${page.url}" class="nav-a"><li class="nav-li">${page.name}</li></a>`;
		});
	})
	.appendTo(".hamburger-overlay");
$(".hamburger-overlay").hide();

// create page body
function loadMap() {
	$("<div>", { id: "mapContainer" }).appendTo(".homepage");

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

// listen for window resize
$(window).ready(function () {
	if ($(window).width() > 500) {
		$("#name").text(title);
	} else {
		$("#name").text("DFD");
	}
});

function resetHamburger() {
	$("#menu_checkbox").prop("checked", false);
	$(".hamburger-overlay").hide();
}
// menu overlay
$(document).ready(function () {
	$(window).resize(function () {
		if ($(window).width() > 500) {
			resetHamburger();
			$("#name").text(title);
		} else {
			$("#name").text("DFD");
		}
	});

	loadMap();

	$("#menu_checkbox").click(function () {
		$(".hamburger-overlay").toggle();
	});

	$(".hamburger-overlay").click(function () {
		resetHamburger();
	});
});
