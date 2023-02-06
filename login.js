let backgroundImage = $(
	`<image src="./13643.webp" class="background-image"></image>`
);

let form = $(`
<form class="login-form">
	<h1>Login</h1>
    <div class="input-container">
        <div class="input-field">
            <input type="email" placeholder="Email" class="input-email">
        </div>
        <div class="input-field">
            <input type="password" placeholder="Password" class="input-password">
        </div>
    </div>
    <p class="error-message"></p>
    <div class="form-btns">
		<button class="sign-in" tabindex="0">Sign In</button>
		<button class="cancel" tabindex="0">Cancel</button>
	</div>
</form>`);

const loadingLottie = `<lottie-player src="https://assets1.lottiefiles.com/packages/lf20_p8bfn5to.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`;
const loadingPage = `<div class="loading-page">${loadingLottie}</div>`;

$("body").append(backgroundImage, form, loadingPage).css({
	height: "100vh",
	display: "flex",
	"align-items": "center",
});

$(".loading-page").toggle();

$(".cancel").click(function (e) {
	e.preventDefault();
	history.back() || (location.href = "./index.html");
});

function changeWindowBackground() {
	if ($(window).width() < 500) {
		backgroundImage.hide();
		$("body").css({ "background-color": "var(--primary-color)" });
	} else {
		backgroundImage.show();
	}
}

$(window).ready(changeWindowBackground());

let apikey = "63dfab573bc6b255ed0c46ae";
let query = {};
$(document).ready(function () {
	$(window).resize(function () {
		if ($(window).width() < 500) {
			backgroundImage.hide();
			$("body").css({ "background-color": "var(--primary-color)" });
		} else {
			backgroundImage.show();
		}
	});

	let emailRegexp = /\S+@\S+\.\S+/;

	// not secure but oh well...
	$(".sign-in").click(function (e) {
		e.preventDefault();
		$(".error-message").text("");
		let emptyFields = false;
		$(".input-field input").each(function () {
			if (!$(this).val()) {
				$(".error-message").text("Fields cannot be empty");
				emptyFields = true;
				return;
			}
		});
		if (emptyFields) {
			return;
		}
		if (!emailRegexp.test($(".input-email").val())) {
			$(".error-message").text("Please enter a valid email address");
			return;
		}
		let emailInput = $(".input-email").val();
		let passwordInput = $(".input-password").val();
		var settings = {
			async: true,
			crossDomain: true,
			url: `https://drivingfd-b6f9.restdb.io/rest/registeredusers?q={"email": "${emailInput}"}`,
			method: "GET",
			headers: {
				"content-type": "application/json",
				"x-apikey": apikey,
				"cache-control": "no-cache",
			},
		};
		$(".loading-page").toggle();
		let querySuccess = false;
		$.ajax(settings).done(function (response) {
			if (response?.length) {
				querySuccess = true;
				if (passwordInput == response[0]["password"]) {
					$(".error-message").text("Login successful");
					//Redirect to registered user page
				} else {
					$(".error-message").text("Wrong password");
				}
			} else {
				$(".error-message").text("Email not registered");
			}
			$(".loading-page").toggle();
		});
	});
});
