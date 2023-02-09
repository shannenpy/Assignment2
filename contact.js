/*$("<nav>", { class: "main-navigation" }).appendTo("body");

let mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
document.body.appendChild(mainNav);*/

/*----- nav menu -----*/
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

$("<nav>", { class: "main-navigation" }).appendTo("body");
$("<label>", { class: "company" }).appendTo(".main-navigation");
$("<a>", {
    href: `${isLoggedIn ? "#registered-user" : "#top"}`,
    id: "name",
})
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
    $(".main-navigation .nav-a").removeClass("active");
});

$("<ul>", { class: "nav-ul" })
    .append(generateLinks())
    .appendTo(".main-navigation");

function generateLinks() {
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
}

/* ----- get in contact form ----- */
// $("<div", {class: "conact-form"}).appendTo("body")
// $("<form>", {name: "contactForm"}, {onsubmit: "return validateForm()"}).appendTo(".contact-form")

// let formDiv = document.createElement("div")
// formDiv.classList.add("forms")
// document.body.append(formDiv)
/*let form = document.createElement("form")
form.setAttribute("name", "contactForm")
form.setAttribute("onsubmit", "return validateForm()")
formDiv.append(form)*/
/*var formContent =
`<h2>Get in touch!</h2><br>
<input type="email" placeholder="Your email" name="emailAdd"><br><br>
<textarea rows="4" cols="30" placeholder="Ask us anything!" name="feedback"></textarea><br><br>
<input type="submit" value="Submit" id="submit-button">`
form.innerHTML = formContent*/

function validateForm() {
	let  name = document.forms["contact-form"]["name"].value;
	if (name == ""){
		alert("Name must be filled out");
    	return false;
	}

    let email = document.forms["contactForm"]["emailAdd"].value;
    if (email == "") {
        alert("Email Address must be filled out");
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

	let message =  document.forms["contactForm"]["form-message"].value;
	if (message == ""){
		alert("Message box must be filled.");
		return false;
	}
}

/* ----- contact page ----- */
$('<section class="contact">').appendTo("body")

/* ----- contact form ----- */
// creating form
$('<div class="form">').appendTo(".contact")
$("<h3>Get in touch</h3><p>Please feel free to enquire any doubts you have. We will try our best to reply you within 1-2 working days.</p>").appendTo(".form")
$("<form>", {name: "contact-form", id: "contact-form", action: "#"}).appendTo(".form")

$('<div id="row1" class="input-row">').appendTo("#contact-form")
$('<input>', {type: "text", name: "name", placeholder: "What's your name"}).appendTo("#row1")

$('<div id="row2" class="input-row">').appendTo("#contact-form")
$('<input>', {type: "email", name: "email", placeholder: "Your Email"}).appendTo("#row2")

$('<div id="row3" class="input-row">').appendTo("#contact-form")
$('<input>', {type: "tel", name: "phone", placeholder: "Phone Number (optional)"}).appendTo("#row3")

$('<div id="row4" class="input-row">').appendTo("#contact-form")
$('<textarea>', {name: "form-message", placeholder: "Message:"}).appendTo("#row4")

$('<div class="text-centre">').appendTo("#contact-form")
$('<input>', {type: "submit", value: "Submit"}).appendTo(".text-centre")

/* ----- direct to difference information (address, instagram etc.) ----- */
$("<ul>", {class: "contact-lists"}).appendTo(".contact")

$("<li>", {id: "opening-hours", class: "contact-lists-content"}).appendTo(".contact-lists")
$("#opening-hours").append('<p>Our opening hours <i class="fa-sharp fa-solid fa-clock"></i></p>', '<p>8am - 6.30pm</p>')

$("<li>", {id: "address", class: "contact-lists-content"}).appendTo(".contact-lists")
$("#address").append('<p>Location <i class="fa-sharp fa-solid fa-location-dot"></i></p>', '<p><a class="contact-links" href="https://www.google.com/maps/dir/1.3439739,103.701547/ngee+ann+poly/@1.3328825,103.736262,13.54z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da107d8eb4e359:0x75d2e7ffdeeb0c43!2m2!1d103.7743466!2d1.3321036" target="_blank">Driving for Dummies, 535 Clementi Rd, Singapore 599489</a></p>')

$("<li>", {id: "tel", class: "contact-lists-content"}).appendTo(".contact-lists")
$("#tel").append('<p>Phone Number <i class="fa-solid fa-phone"></i></p>', '<p>+65 6466 6555</p>')

$("<li>", {id: "ig", class: "contact-lists-content"}).appendTo(".contact-lists")
$("#ig").append('<p>Visit our Instagram page <i class="fa-brands fa-square-instagram"></i></p>', '<p><a class="contact-links" href="https://www.instagram.com/ngeeannpoly/?hl=en" target="_blank">https://www.instagram.com/ngeeannpoly/?hl=en</a></p>')

$("<li>", {id: "tt", class: "contact-lists-content"}).appendTo(".contact-lists")
$("#tt").append('<p>Visit our Tiktok page <i class="fa-brands fa-tiktok"></i></p>', '<p><a class="contact-links" href="https://www.tiktok.com/@ngeeannpoly" target="_blank">https://www.tiktok.com/@ngeeannpoly</a></p>')