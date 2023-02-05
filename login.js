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
        <button class="register" tabindex="0">Register</button>
        <button class="sign-in" tabindex="0">Sign In</button>
        </div>
</form>`);

$("body")
	.append(form)
	.css({ height: "100vh", display: "flex", "align-items": "center" });

let apikey = "63dfab573bc6b255ed0c46ae";
let query = {};
$(document).ready(function () {
	let emailRegexp = /\S+@\S+\.\S+/;
	// not secure but oh well...
	$(".sign-in").click(function (e) {
		e.preventDefault();
		$(".error-message").text("");
		if (!emailRegexp.test($(".input-email").val())) {
			$(".error-message").text("Please enter a valid email address");
			return;
		}
		$(".input-field input").each(function () {
			if (!$(this).val()) {
				$(".error-message").text("Fields cannot be empty");
				return;
			}
		});
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
		let querySuccess = false;
		$.ajax(settings).done(function (response) {
			if (response?.length) {
				querySuccess = true;
				if (passwordInput == response[0]["password"]) {
					$(".error-message").text("Login successful");
				} else {
					$(".error-message").text("Wrong password");
				}
			} else {
				$(".error-message").text("Email not registered");
			}
		});
	});
});
