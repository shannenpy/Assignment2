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

/* ----- license list ----- */
let licenseList = document.createElement("section")
licenseList.classList.add("license-list")
document.body.append(licenseList)
const listHeading = `<h2 class="pricing-h2">Licenses we offer</h2>`
licenseList.innerHTML = listHeading
//motorcycle
let motor = document.createElement("div")
motor.setAttribute("id", "motor-licenses")
motor.setAttribute("class", "licenses-type")
licenseList.append(motor)
const motorHeading = `<h3>Motorcycle</h3>`
motor.innerHTML = motorHeading
let motorContent = document.createElement("div")
motorContent.setAttribute("id", "motor-content") //to add class?
motor.append(motorContent)
const motorListContent = `<ul><li><button id="button-2" class="pricing-buttons">Class 2</button></li>
<li><button id="button-2A" class="pricing-buttons">Class 2A</button></li>
<li><button id="button-2B" class="pricing-buttons">Class 2B</button></li></ul>
<p id="motor-sidenote">note: You must have 2B license for a year before taking 2A test. 
You must also have 2A license for a year before taking Class 2 test.</p>`
motorContent.innerHTML = motorListContent
// car
let car = document.createElement("div")
car.setAttribute("id", "car-licenses")
car.setAttribute("class", "licenses-type")
licenseList.append(car)
const carHeading = `<h3>Car (Vehicles that can carry up to 7 people. Vehicles with unladen weight not exceeding 2,500 kg)</h3>`
car.innerHTML = carHeading
let carContent = document.createElement("div")
carContent.setAttribute("id", "car-content") //to add class?
car.append(carContent)
const carListContent = `<ul><li><button id="button-3" class="pricing-buttons">Class 3</button></li>
<li><button id="button-3A" class="pricing-buttons">Class 3A</button></li>
<li><button id="button-3C" class="pricing-buttons">Class 3C</button></li>
<li><button id="button-3CA" class="pricing-buttons">Class 3CA</button></li></ul>`
carContent.innerHTML = carListContent
// buses, trucks, most big vehicle etc.
let busTruck = document.createElement("div")
busTruck.setAttribute("id", "busTruck-licenses")
busTruck.setAttribute("class", "licenses-type")
licenseList.append(busTruck)
const busTruckHeading = `<h3>Buses, Trucks etc.</h3>`
busTruck.innerHTML = busTruckHeading
let busTruckContent = document.createElement("div")
busTruckContent.setAttribute("id", "busTruck-content") //to add class?
busTruck.append(busTruckContent)
const busTruckListContent = `<ul><li><button id="button-4" class="pricing-buttons">Class 4</button></li>
<p id="busTruck-sidenote">note: Class 4A licenses are only for poeple who drive public buses.</p>`
busTruckContent.innerHTML = busTruckListContent

/* ----- course details ----- */
let courseDetails = document.createElement("section")
courseDetails.classList.add("license-course")
document.body.append(courseDetails)
const detailsHeading = `<h2 class="pricing-h2">License and Course Details<h2>`
courseDetails.innerHTML = detailsHeading
// pricing note
pricingNote = '<p>*prices are a rough estimate, assuming you pass all basic theory, advance theory and practical test the first time</p>'
courseDetails.innerHTML += pricingNote

let details = document.createElement("p")
details.setAttribute("class", "license-details-content")
courseDetails.append(details)

document.getElementById("button-2").addEventListener("click", detailsFunction2);
document.getElementById("button-2A").addEventListener("click", detailsFunction2A);
document.getElementById("button-2B").addEventListener("click", detailsFunction2B);
document.getElementById("button-3").addEventListener("click", detailsFunction3);
document.getElementById("button-3A").addEventListener("click", detailsFunction3A);
document.getElementById("button-3C").addEventListener("click", detailsFunction3C);
//document.getElementById("button-3-3C").addEventListener("click", detailsFunction3);
document.getElementById("button-3CA").addEventListener("click", detailsFunction3CA);
document.getElementById("button-4").addEventListener("click", detailsFunction4);

// Class 2 details
function detailsFunction2(){
    details2Content = `<h4 class="class-type-heading">Class 2</h4>
    <ul id="license-content-2"><li>Big bikes</li>
    <li>Cylinder capacity of more than 400cm<sup>3</sup></li></ul>

    <ul id="course-content-2">
    <li>S$2,227</li>
    <li>5 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details2Content
}

// Class 2A details
function detailsFunction2A(){
    details2AContent = `<h4 class="class-type-heading">Class 2A</h4>
    <ul id="license-content-2A"><li>Medium bikes</li>
    <li>Cylinder capacity of less than 400cm<sup>3</sup></li></ul>

    <ul id="course-content-2A">
    <li>S$2,427</li>
    <li>5 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details2AContent
}

// Class 2B details
function detailsFunction2B(){
    details2BContent = `<h4 class="class-type-heading">Class 2B</h4>
    <ul id="license-content-2B"><li>Small bikes</li>
    <li>Cylinder capacity of less than 200cm<sup>3</sup></li></ul>

    <ul id="course-content-2B">
    <li>S$2,727</li>
    <li>10 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details2BContent
}

// Class 3 details
function detailsFunction3(){
    details3Content = `<h4 class="class-type-heading">Class 3</h4>
    <ul id="license-content-3"><li>For both manual and auto transmission vehicles</li></ul>

    <ul id="course-content-3">
    <li>S$2,727</li>
    <li>10 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details3Content
}

// Class 3A details
function detailsFunction3A(){
    details3AContent = `<h4 class="class-type-heading">Class 3A</h4>
    <ul id="license-content-3A"><li>Can only be used to drive auto transmission vehicles</li></ul>

    <ul id="course-content-3A">
    <li>S$2,727</li>
    <li>10 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details3AContent
}

// Class 3C details
function detailsFunction3C(){
    details3CContent = `<h4 class="class-type-heading">Class 3C</h4>
    <ul id="license-content-3C"><li>For foreign workers with a work permit or S-Pass</li>
    <li>Only allows you to drive a car, and not other light-weight vehicles like vans</li>
    <li>Only theory test needs to be taken if you already have a driving license from your own country</li>
    <li>Should you wish to get Class 3 license, you will have to take both theory and practical tests. Click <button id="button-3-3C">here</button> to find out more.</li></ul>

    <ul id="course-content-3C">
    <li>S$2,727</li>
    <li>10 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details3CContent
}

// Class 3CA details
function detailsFunction3CA(){
    details3CAContent = `<h4 class="class-type-heading">Class 3CA</h4>
    <ul id="license-content-3CA"><li>For foreign workers with a work permit or S-Pass</li>
    <li>Only theory test needs to be taken if you already have a <strong>auto-transmission</strong> driving license from your own country</li></ul>

    <ul id="course-content-3CA">
    <li>S$2,727</li>
    <li>10 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details3CAContent
}

// Class 4 details
function detailsFunction4(){
    details4Content = `<h4 class="class-type-heading">Class 4</h4>
    <ul id="license-content-4"><li>For vehicles that weigh more than 2,500kg, but less than 7,250kg</li>
    <li>Includes buses, trucks, and most big vehicles</li></ul>

    <ul id="course-content-4">
    <li>S$2,727</li>
    <li>10 theory classes</li>
    <li>20 practical session</li>
    <li>*1 each* BTT/ FTT/ TP tests</li></ul>`
    details.innerHTML = details4Content
}