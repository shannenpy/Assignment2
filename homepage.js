/*----- nav menu -----*/
let mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation")
document.body.appendChild(mainNav)
mainnav = document.querySelector(".main-navigation")
/*let logo = document.createElement("img")
logo.setAttribute("src", "images/logo.png")
logo.setAttribute("alt", "logo of The Digital Zone")
logo.setAttribute("id", "logo")
mainnav.append(logo)*/
let company = document.createElement("label")
mainnav.append(company)
const compName = `<a href = "index.html" id="name" class="vertical-center">Driving for Dummies</a>`
company.innerHTML = compName
let navList = document.createElement("ul")
navList.classList.add("nav-ul")
mainnav.append(navList)
const navContent = 
`<li class="nav-li"><a href = "pricing.html" class="nav-a">Pricing</a></li>
<li class="nav-li"><a href = "contact.html" class="nav-a">Contact Us</a></li>
<li class="nav-li"><a href = "location.html" class="nav-a">Location</a></li>
<li class="nav-li"><a href = "login.html" class="nav-a">Login</a></li>`
navList.innerHTML = navContent

/*----- homepage -----*/
let homePage = document.createElement("div")
homePage.classList.add("homepage")
document.body.append(homePage)
var homepage = document.querySelector(".homepage")

// top of homepage
let tophp = document.createElement("section")
tophp.classList.add("top")
homepage.append(tophp)
let hpbg = document.createElement("img")
hpbg.setAttribute("src", "homepagebg.webp")
hpbg.setAttribute("alt", "Picture of Driving for Dummies")
hpbg.setAttribute("class", "top-homepage")
tophp.append(hpbg)
let topContentDiv = document.createElement("div")
homepage.append(topContentDiv)
var tophpContent = 
`<a href = "pricing.html" class="top-homepage" id="find-out">Find out more here</a>
<h1>Driving for Dummies</h1>
<p>Here at Driving for Dummies, we want what's best for you. 
We have over (number) course to choose from a license in class() to class(). 
How are we different from other driving schools? 
We want you to get the most of your money, so we have free videos and quizzes for you on top of the course you have paid for.
Additionally, we want to give you the opportunity to take charge of your learning. 
Hence, you have the option to choose your prefered instructors.</p>`
topContentDiv.innerHTML = tophpContent

// passing rates
let passing = document.createElement("section")
passing.classList.add("passing")
homepage.append(passing)
var passingContent = 
`<h2>Passing rates (on first try)</h2>
`