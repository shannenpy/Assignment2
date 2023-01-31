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
const motorListContent = `<ul><li><button id="button-2">Class 2 (cylinder capacity (CC) of more than 400 cubic centimeters)</button></li>
<li><a>Class 2A (less than 400CC)</a></li>
<li><a>Class 2B (less than 200CC)</a></li></ul>
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
const carListContent = `<ul><li><a>Class 3 (both manual and auto transmission vehicles)</a></li>
<li><a>3A (only able to drive auto transmission vehicle)</a></li>
<li><a>3C (for foreign workers with a work permit or S-Pass)</a></li>
<li><a>3CA (for foreigners with an overseas auto-transmission driving license)</a></li></ul>`
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
const busTruckListContent = `<ul><li><a>Class 4 (vehicles that weigh more than 2,500kg but less than 7,250kg)</a></li>
<p id="busTruck-sidenote">note: Class 4A licenses are only for poeple who drive public buses.</p>`
busTruckContent.innerHTML = busTruckListContent

/* ----- course details ----- */
let courseDetails = document.createElement("section")
courseDetails.classList.add("course-details")
document.body.append(courseDetails)
const detailsHeading = `<h2 class="pricing-h2">Course Details<h2>`
courseDetails.innerHTML = detailsHeading
// Class 2
//if () and/or eventlistener
let details2 = document.createElement("div")
details2.setAttribute("class", "details-content")
document.getElementById("button-2").addEventListener("click", details2)