// check if user is logged in
const isLoggedIn = sessionStorage.getItem("user") ? true : false;

// set site name
const title = `Driving for Dummies`;
document.title = `${title}`;

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

// top of homepage
// let tophp = document.createElement("section");
// tophp.classList.add("top");
// homepage.append(tophp);
// let hpbg = document.createElement("img");
// hpbg.setAttribute("src", "../assets/images/13643.webp");
// hpbg.setAttribute("alt", "Picture of Driving for Dummies");
// hpbg.setAttribute("class", "top-homepage--image");
// tophp.append(hpbg);
// let topContentDiv = document.createElement("div");
// topContentDiv.classList.add("top-content-div");
// homepage.append(topContentDiv);
// var tophpContent = `<a href = "pricing.html" class="top-homepage" id="find-out">Find out more here</a>
// <h1>Driving for Dummies</h1>
// <p>Here at Driving for Dummies, we want what's best for you.
// We have over (number) course to choose from a license in class() to class().
// How are we different from other driving schools?
// We want you to get the most of your money, so we have free videos and quizzes for you on top of the course you have paid for.
// Additionally, we want to give you the opportunity to take charge of your learning.
// Hence, you have the option to choose your prefered instructors.</p>`;
// topContentDiv.innerHTML = tophpContent;

// // passing rates
// let passing = document.createElement("section");
// passing.classList.add("passing");
// homepage.append(passing);
// var passingContent = `<h2>Passing rates (on first try)</h2>
// `;

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
