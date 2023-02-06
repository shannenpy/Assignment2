if (!sessionStorage.getItem("userId")) {
	window.location.href = "./login.html";
}

$("body").append(`<h1>Redirect successful!</h1>
`);
