let index = 0;
const interval = 3000;

function rotateHero() {
	const bookArray = [
		{image: "images/the_inheritance_games.jpg", link: "mock_htmls/1.html", name: "The Inheritance Games"},
		{image: "images/the_frozen_river.jpg", link: "mock_htmls/2.html", name: "The Frozen River"}, 
		{image: "images/killer_instinct.jpg", link: "mock_htmls/3.html", name: "Killer Instinct"},
		{image: "images/three_bags_full.jpg", link: "mock_htmls/4.html", name: "Three Bags Full"}
	];

	const a = document.getElementById("featured-book-link");
	const img = document.getElementById("hero-featured-books");
	const p = document.getElementById("featured-book-title");

	const book = bookArray[index];
	a.href = book.link;
	img.style.backgroundImage = `url("${book.image}")`;
	p.textContent = book.name;
	
	index = (index + 1) % bookArray.length;
}

document.addEventListener("DOMContentLoaded", () => {
    rotateHero();
    setInterval(rotateHero, interval);
});

const form = document.getElementById("account-inputs");

function accountInputValidation() {
	const errors = [];
	const customerInfo = [];

	const firstName = form.firstname.value.trim();
	const lastName = form.lastname.value.trim();
	const phoneNumber = form.phone.value.trim();
	const email = form.email.value.trim();
	const birthday = form.birthday.value.trim();
	const streetAddress = form.street.value.trim();
	const city = form.city.value.trim();
	const state = form.state.value.trim();
	const zip = form.zip.value.trim();
	const password = form.password.value.trim();
	const confirmPassword = form.confirmpassword.value.trim();

	customerInfo.push(firstName, lastName, phoneNumber, email, birthday, streetAddress, city, state, zip, password, confirmPassword);

	if (customerInfo.includes("")) {
    		errors.push({
			field: "firstname",
      			message: "Please fill out all fields"
   		});
	}
	else {
		if (firstName.length < 2 || lastName.length < 2) {
      			errors.push({
    				field: "firstname", 
				message: "Name fields must be at least 2 characters"
      			});
		}
		if (lastName.length < 2) {
      			errors.push({
    				field: "lastname", 
				message: "Name fields must be at least 2 characters"
      			});
		}
		if ((phoneNumber.length != 12) || ((phoneNumber.split("-").length - 1) != 2)) {
			errors.push({
        			field: "phone",
        			message: "Please enter a valid phone number (using provided format)"
      			});
		}
		if (!email.includes("@")) {
			errors.push({
        			field: "email",
        			message: "Please enter a valid email"
      			});

		}
		if ((birthday.length != 10) || ((birthday.split("/").length - 1) != 2)) {
			errors.push({
        			field: "birthday",
        			message: "Please enter a valid birthday (using provided format)"
      			});

		}
		if (state.length != 2) {
			errors.push({
        			field: "state",
        			message: "Please enter a valid state (using provided format)"
      			});
		}
		if (zip.length != 5) {
			errors.push({
        			field: "zip",
        			message: "Please enter a valid ZIP"
      			});
		}
		if (password != confirmPassword) {
			errors.push(
        			{field: "password", message: "Passwords do not match"},
    				{field: "confirmPassword", message: "Passwords do not match"}
      			);
		}
		if ((password.length  < 8)) {
			errors.push({
        			field: "password", 
				message: "Passwords must be at least 8 characters"
      			});
		}
	}

	return errors;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

 	form.querySelectorAll('.error-message').forEach(span => {
		span.textContent = '';
  	});

	form.querySelectorAll('input').forEach(inp => {
		inp.classList.remove('invalid');
  	});

	const errors = accountInputValidation();
	let allValid = true;

	errors.forEach(({field, message}) => {
		allValid = false;

		const input = form.querySelector(`[name="${field}"]`);
    		const span = form.querySelector(`#${field}Error`);

		if (input && span) {
        		input.classList.add('invalid');
        		span.textContent = message;
		}	
	});

	if (allValid) {
		form.submit();
  	}
});
