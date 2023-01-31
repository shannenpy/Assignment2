/*----- nav menu -----*/
let mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
document.body.appendChild(mainNav);
let mainnav = document.querySelector(".main-navigation");
/*let logo = document.createElement("img")
logo.setAttribute("src", "images/logo.png")
logo.setAttribute("alt", "logo of The Digital Zone")
logo.setAttribute("id", "logo")
mainnav.append(logo)*/
let company = document.createElement("label");
company.classList.add("company");
mainnav.append(company);
const compName = `<a href = "index.html" id="name">Driving for Dummies</a>`;
company.innerHTML = compName;
let navList = document.createElement("ul");
navList.classList.add("nav-ul");
mainnav.append(navList);
const navContent = `<a href = "pricing.html" class="nav-a"><li class="nav-li">Pricing</li></a>
<a href = "contact.html" class="nav-a"><li class="nav-li">Contact Us</li></a>
<a href = "location.html" class="nav-a"><li class="nav-li">Location</li></a>
<a href = "login.html" class="nav-a"><li class="nav-li">Login</li></a>`;
navList.innerHTML = navContent;

const hamburger = `<input type="checkbox" id="menu_checkbox">
<label for="menu_checkbox" id="menu_checkbox_label">
  <div></div>
  <div></div>
  <div></div>
</label>`;

let navSmall = document.createElement("label");
mainnav.append(navSmall);
navSmall.innerHTML = hamburger;

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

/*----- homepage -----*/
let homePage = document.createElement("div");
homePage.classList.add("homepage");
document.body.append(homePage);
var homepage = document.querySelector(".homepage");

const hamburgerOverlay = document.createElement("div");
hamburgerOverlay.classList.add("hamburger-overlay");
hamburgerOverlay.innerHTML = `<ul>${navContent}</ul>`;
homepage.append(hamburgerOverlay);
$(".hamburger-overlay").hide();

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
var tophpContent = `<h1>Driving for Dummies</h1>
<p>Here at Driving for Dummies, we want what's best for you. 
We have over (number) courses to choose from a license in class() to class(). 
How are we different from other driving schools? 
We want you to get the most of your money, so we have free videos and quizzes for you on top of the course you have paid for.
Additionally, we want to give you the opportunity to take charge of your learning. 
Hence, you have the option to choose your prefered instructors.</p>`;
topContentDiv.innerHTML = tophpContent;

// passing rates
let passing = document.createElement("section");
passing.classList.add("passing");
homepage.append(passing);
var passingContent = `<h2>Passing rates (on first try)</h2>
`;

function resetHamburger() {
	$("#menu_checkbox").prop("checked", false);
	$(".hamburger-overlay").hide();
}
// menu overlay
$(document).ready(function () {
	$("#menu_checkbox").click(function () {
		$(".hamburger-overlay").toggle();
	});

	$(window).bind("resize", function () {
		if ($(window).width() > 900) {
			resetHamburger();
		}
	});
});
