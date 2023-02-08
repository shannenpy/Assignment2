/*$("<nav>", { class: "main-navigation" }).appendTo("body");

let mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
document.body.appendChild(mainNav);*/

/*----- nav menu -----*/
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

/* ----- get in contact form ----- */
// $("<div", {class: "conact-form"}).appendTo("body")
// $("<form>", {name: "contactForm"}, {onsubmit: "return validateForm()"}).appendTo(".contact-form")

let formDiv = document.createElement("div")
formDiv.classList.add("forms")
document.body.append(formDiv)
let form = document.createElement("form")
form.setAttribute("name", "contactForm")
form.setAttribute("onsubmit", "return validateForm()")
formDiv.append(form)
var formContent =
`<h2>Get in touch!</h2><br>
<input type="email" placeholder="Your email" name="emailAdd"><br><br>
<textarea rows="4" cols="30" placeholder="Ask us anything!" name="feedback"></textarea><br><br>
<input type="submit" value="Submit" id="submit-button">`
form.innerHTML = formContent

function validateForm() {
    let email = document.forms["contactForm"]["emailAdd"].value;
    if (email == "") {
        alert("Email Address compulsory");
        return false;
    }

    function ValidateEmail(inputText){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
        {
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
        }
        }

}

/* ----- direct to difference information (address, instagram etc.) ----- */
$("<section>", {class: "contact-lists"}).appendTo("body")
// opening hours
$("<div>", {id: "opening-hours"}).appendTo(".contact-lists")
$(document).ready(function() {
    $("#opening-hours").append('<p class="info-icon"><i class="fa-sharp fa-solid fa-clock"></i></p>', '<p>Our opening hours: 8am - 6.30pm</p>')
})

// location
$("<div>", {id: "address"}).appendTo(".contact-lists")
$(document).ready(function() {
    $("#address").append('<p class="info-icon"><i class="fa-sharp fa-solid fa-location-dot"></i></p>',
    '<p><a class="contact-links" href="https://www.google.com/maps/dir/1.3439739,103.701547/ngee+ann+poly/@1.3328825,103.736262,13.54z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da107d8eb4e359:0x75d2e7ffdeeb0c43!2m2!1d103.7743466!2d1.3321036" target="_blank">Driving for Dummies, 535 Clementi Rd, Singapore 599489</a></p>')
})

// telephone number
$("<div>", {id: "tel"}).appendTo(".contact-lists")
$(document).ready(function() {
    $("#tel").append('<p class="info-icon"><i class="fa-solid fa-phone"></i></p>',
    '<p>+65 6466 6555</>')
})

// instagram
$("<div>", {id: "ig"}).appendTo(".contact-lists")
$(document).ready(function() {
    $("#ig").append('<p class="info-icon"><i class="fa-brands fa-square-instagram"></i></p>',
    '<p><a class="contact-links" href="https://www.instagram.com/ngeeannpoly/?hl=en" target="_blank">https://www.instagram.com/ngeeannpoly/?hl=en</a></p>')
})

// tiktok
$("<div>", {id: "tt"}).appendTo(".contact-lists")
$(document).ready(function() {
    $("#tt").append( '<p class="info-icon"><i class="fa-brands fa-tiktok"></i></p>',
    '<p><a class="contact-links" href="https://www.tiktok.com/@ngeeannpoly" target="_blank">https://www.tiktok.com/@ngeeannpoly</a></p>')
})