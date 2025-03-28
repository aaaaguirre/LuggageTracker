<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
<nav class="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="light">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">
			<img
				src="src/routes/img/trackerlogo.png"
				alt="Logo"
				width="40"
				height="40"
				class="d-inline-block align-text-top"
			/>
			<span class="logo-text">Luggage Tracker</span>
		</a>

		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<a class="nav-link" aria-current="page" href="/">Home</a>
				<a class="nav-link" href="/about">About</a>
				<a class="nav-link" href="/events">Events</a>
				<a class="nav-link" href="/owners">Owners</a>
				<a class="nav-link" href="/contact">Contact</a>
			</div>
		</div>
	</div>
</nav>

<slot />

<style>
	.nav-link:hover {
		color: pink;
	}

	.navbar-brand {
		color: black;
	}

	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

	.logo-text {
		font-family: 'Sofia', sans-serif;
	}
</style>
