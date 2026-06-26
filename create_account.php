<!DOCTYPE html>
<html>
<head>
	<title>Petal Pages</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

	<link rel="stylesheet" href="bookstore_style.css">
</head>
<body>
<header>
	<img class="logo-img" src="images/leaf.jpg">

	<h1>Petal Pages</h1>
	<form action="">
		<input class="search-bar" type="search" id="book_search" name="book_search" placeholder="Search">
		<button class="search-button" type="submit">
		 	<i class="fa-solid fa-search"></i>
		</button>
	</form>

	<div class="dropdown">
		<i class="fa-solid fa-book"></i>
		<span class="text">Categories</span>
		<div class="dropdown-content">
			<a href="categories.html">Biography</a>
			<a href="categories.html">Horror</a>
			<a href="categories.html">Mystery</a>
			<a href="categories.html">Romance</a>
			<a href="categories.html">Sci-Fi</a>
 		</div>
	</div>

	<div class="icon-with-number">
		<i class="fa-solid fa-cart-shopping"></i>
		<span class="icon-text">1</span>
	</div>

	<div class="dropdown">  
 		<i class="fa-solid fa-circle-user"></i>
		<span class="text">Mason O</span>
 		<div class="dropdown-content">
			<a href="create.html">Log Out</a>
		</div>
	</div>
</header>
 
<?php
$firstname = $lastname = $phone = $email = $birthday = $street = $city = $state = $zip = $password = $confirmpassword = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstname = test_input($_POST["firstname"]);
  $lastname = test_input($_POST["lastname"]);
  $phone = test_input($_POST["phone"]);
  $email = test_input($_POST["email"]);
  $birthday = test_input($_POST["birthday"]);
  $street = test_input($_POST["street"]);
  $city = test_input($_POST["city"]);
  $state = test_input($_POST["state"]);
  $zip = test_input($_POST["zip"]);
  $password = test_input($_POST["password"]);
  $confirmpassword = test_input($_POST["confirmpassword"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<footer>
	<p>&copy 2026 Petal Pages</p>
	<p>|</p>
	<p><a href=""</a>Contact</p> 
	<p>|</p> 
	<p><a href=""</a>Directions</p> 
	<p>|</p> 

	<p><a href="https://facebook.com"
		<i class="fa-brands fa-facebook"></i></button></a></p>
	<p><a href="https://instagram.com"
		<i class="fa-brands fa-instagram"></i></a></p>
	<p><a href="https://reddit.com"
		<i class="fa-brands fa-reddit"></i></button></a></p>
	<p><a href="https://tiktok.com"
		<i class="fa-brands fa-tiktok"></i></button></a></p>
</footer>
<script src="bookstore.js"></script>
</body>
</html>