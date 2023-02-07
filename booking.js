// check if user is logged in
const isLoggedIn = sessionStorage.getItem("user") ? true : false;

if (!isLoggedIn) {
	window.location.href = "./login.html";
}

// set site name
const title = `Driving for Dummies`;

// retrieve user data from sessionStorage
let { userID, firstName, lastName, credits } = JSON.parse(
	sessionStorage.getItem("user")
);
document.title = `${title} | ${firstName} ${lastName}`;

// create navigation bar
const pages = [
	{
		name: "Booking",
		url: "./booking.html",
	},
	{
		name: "Contact Us",
		url: "./contact.html",
	},
	{
		name: "Location",
		url: "./location.html",
	},
	{
		name: "Logout",
		url: "./",
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
$("<label>").append(hamburger).appendTo(".main-navigation");

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
// create appointment widget
/* AppointmentThing widget */
const apptThing = `
<div
	class="apptthingemb"
	data-appt-url="iddrivingcentre"
	data-appt-types="Fd19750,ZP19751,hE19752,IH19753,xh19754,cd19755"
	data-page-text="000000"
	data-page-link="0f5cff"
	data-page-details="false"
	data-emb-num="1"
	>
	<a href="https://appointmentthing.com" title="Appointment Scheduling">
	Appointment Scheduling
	</a>
	</div>`;
$(apptThing).appendTo(".homepage");

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

	$("#menu_checkbox").click(function () {
		$(".hamburger-overlay").toggle();
	});

	$(".hamburger-overlay").click(function () {
		resetHamburger();
	});
});
