// check if user is logged in
const isLoggedIn = sessionStorage.getItem("user") ? true : false;
if (!isLoggedIn) {
	window.location.href = "./login.html";
}

// retrieve user data from sessionStorage
let { userID, firstName, lastName, credits } = JSON.parse(
	sessionStorage.getItem("user")
);
document.title = `Driving for Dummies | ${firstName} ${lastName}`;

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
		url: "./logout.html",
	},
];

$("<nav>", { class: "main-navigation" }).appendTo("body");
$("<label>", { class: "company" }).appendTo(".main-navigation");
$("<a>", {
	href: `${isLoggedIn ? "./registered-user.html" : "./index.html"}`,
	id: "name",
})
	.append("Driving for Dummies")
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
	style="width: 700px; margin: auto"
>
	<a href="https://appointmentthing.com" title="Appointment Scheduling">
		Appointment Scheduling
	</a>
</div>`;
$(apptThing).appendTo("body");
