let form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	let first = document.getElementById("first").value;
	let last = document.getElementById("last").value;
	let contact = document.getElementById("contact").value;
	let email = document.getElementById("email").value;

	alert(
		"First Name: " + first +
		"\nLast Name: " + last +
		"\nPhone Number: " + contact +
		"\nEmail ID: " + email
	);
});
