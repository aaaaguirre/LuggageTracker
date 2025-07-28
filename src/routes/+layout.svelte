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
				<a class="nav-link" href="/contact">Contact</a>
				<a class="nav-link" href="/owner">Owner</a>

				<li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="events" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      Track Luggage

                    </a>

                    <ul class="dropdown-menu">

                      <li><a class="dropdown-item" href="/track-by-bag-id">Track by Bag ID</a></li>

                      <li><a class="dropdown-item" href="/track-by-flight">Track by Flight Number</a></li>

                      <li><a class="dropdown-item" href="/track-by-date">Track by Date</a></li>

                    </ul>

                  </li>

                  <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="events" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      Luggage Management

                    </a>

                    <ul class="dropdown-menu">

                      <li><a class="dropdown-item" href="/add-luggage">Add New Luggage</a></li>

                      <li><a class="dropdown-item" href="/update-luggage">Update Luggage Info</a></li>

                      <li><a class="dropdown-item" href="/luggage-history">Luggage History</a></li>

                    </ul>

                  </li>

                  <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="owner" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      Account

                    </a>

                    <ul class="dropdown-menu">

                      <li><a class="dropdown-item" href="/login">Login / Sign Up</a></li>

                      <li><a class="dropdown-item" href="/profile">Profile Settings</a></li>

                      <li><a class="dropdown-item" href="/subscription">Subscription / Plan</a></li>

                    </ul>

                  </li>
                  <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="contact" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                      Help & Support

                    </a>

                    <ul class="dropdown-menu">

                      <li><a class="dropdown-item" href="/faq">FAQ</a></li>

                      <li><a class="dropdown-item" href="/contact">Contact Us</a></li>

                      <li><a class="dropdown-item" href="/live-chat">Live Chat</a></li>

                      <li><a class="dropdown-item" href="/troubleshooting">Troubleshooting</a></li>

                    </ul>

                </li>

 
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
