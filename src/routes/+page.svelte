<script>
	let welcome = 'Who are we?';

	let howwework = 'How does LuggageTracker work?';
</script>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="true">
	<div class="carousel-indicators">
		<button
			type="button"
			data-bs-target="#carouselExampleDark"
			data-bs-slide-to="0"
			class="active"
			aria-current="true"
			aria-label="Slide 1"
		></button>
		<button
			type="button"
			data-bs-target="#carouselExampleDark"
			data-bs-slide-to="1"
			aria-label="Slide 2"
		></button>
		<button
			type="button"
			data-bs-target="#carouselExampleDark"
			data-bs-slide-to="2"
			aria-label="Slide 3"
		></button>
	</div>
	<div class="carousel-inner">
		<div class="carousel-item active" data-bs-interval="10000">
			<img src="src/routes/img/plane.jpeg" class="d-block w-100" alt="..." />
			<div class="carousel-caption d-none d-md-block">
				<h5>Luggage Tracker</h5>
				<p>Where you can track your luggage anywhere around the world!</p>
			</div>
		</div>
		<div class="carousel-item" data-bs-interval="2000">
			<img src="src/routes/img/phoneCheck.jpeg" class="d-block w-100" alt="..." />
			<div class="carousel-caption d-none d-md-block">
				<h5>Curious or anxious about the status of your luggage?</h5>
				<p>Find where your luggage is at your finger tips!</p>
			</div>
		</div>
		<div class="carousel-item">
			<img src="src/routes/img/pinkPlaneGlobe.jpeg" class="d-block w-100" alt="..." />
			<div class="carousel-caption d-none d-md-block">
				<h5>What are you waiting for?</h5>
				<p>Track your luggage in real time now!</p>
			</div>
		</div>
	</div>
	<button
		class="carousel-control-prev"
		type="button"
		data-bs-target="#carouselExampleDark"
		data-bs-slide="prev"
	>
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	</button>
	<button
		class="carousel-control-next"
		type="button"
		data-bs-target="#carouselExampleDark"
		data-bs-slide="next"
	>
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	</button>
</div>

<!--Who we are-->
<div class="container mt-5">
	<div class="row align-items-center">
		<div class="col-md-6">
			<h1 class="fw-light">{welcome}</h1>
			<p class="lead">
				Luggage Tracker is a smart luggage tracking service dedicated to helping travelers locate
				their bags in real time, ensuring peace of mind and a hassle-free journey.
			</p>
			<hr class="my-4" />
			<p>Want to know more about us? Click the button below to learn more!</p>
			<p class="lead">
				<a class="btn btn-dark btn-lg" href="about" role="button">Learn more</a>
			</p>
		</div>
		<div class="col-md-6">
			<div class="featurette-image">500x500</div>
		</div>
	</div>
</div>
<hr class="custom-hr" />
<!--Other part-->
<div class="container mt-5">
	<div class="row align-items-center">
		<div class="col-md-6">
			<div class="featurette-image">500x500</div>
		</div>
		<div class="col-md-6">
			<h1 class="fw-light">{howwework}</h1>
			<p class="lead">
				Luggage Tracker helps locate lost baggage in real time. Report missing luggage on our
				website, and our system will track it through airline databases. You’ll receive updates, and
				once found, your airline will arrange collection or delivery for a hassle-free recovery.
			</p>
		</div>
	</div>
</div>
<hr class="custom-hr" />
<!--FAQ-->
<div class="container">
	<div class="row justify-content-center">
		<div class="col-md-8">
			<h2 class="mb-4">Frequently Asked Questions</h2>
			<div class="accordion" id="faqAccordion">
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#faq1"
							aria-expanded="true"
							aria-controls="faq1"
						>
							How do I track my luggage?
						</button>
					</h2>
					<div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
						<div class="accordion-body">
							You can track your luggage using the tracking number provided in your confirmation
							email. Enter the tracking number on our website's tracking page to get real-time
							updates.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#faq2"
							aria-expanded="false"
							aria-controls="faq2"
						>
							What if my luggage is delayed or lost?
						</button>
					</h2>
					<div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
						<div class="accordion-body">
							If your luggage is delayed or lost, please contact our customer support team
							immediately. We will initiate an investigation and provide you with updates. You may
							also be eligible for compensation based on our policy.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#faq3"
							aria-expanded="false"
							aria-controls="faq3"
						>
							How accurate is the luggage tracking information?
						</button>
					</h2>
					<div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
						<div class="accordion-body">
							We strive to provide accurate tracking information based on data from our network of
							partners. However, delays and inaccuracies can occur due to various factors, including
							airline operations and weather conditions.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#faq4"
							aria-expanded="false"
							aria-controls="faq4"
						>
							Can I track luggage from any airline?
						</button>
					</h2>
					<div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
						<div class="accordion-body">
							We support tracking for luggage handled by most major airlines and shipping companies.
							Please check our list of supported carriers on our website for more details.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#faq5"
							aria-expanded="false"
							aria-controls="faq5"
						>
							How do I update my luggage information?
						</button>
					</h2>
					<div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
						<div class="accordion-body">
							You can update your luggage information through your account on our website. Login and
							navigate to the "Manage Luggage" section to modify details such as destination and
							contact information. Please note that changes may not be possible after your luggage
							has been processed.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- FOOTER -->
<footer class="py-3 my-4">
	<ul class="nav justify-content-center border-bottom pb-3 mb-3">
		<li class="nav-item"><a href="home" class="nav-link px-2 text-muted">Home</a></li>
		<li class="nav-item"><a href="about" class="nav-link px-2 text-muted">About</a></li>
		<li class="nav-item"><a href="events" class="nav-link px-2 text-muted">Events</a></li>
		<li class="nav-item"><a href="contact" class="nav-link px-2 text-muted">Contact Us</a></li>
	</ul>
	<p class="text-center text-muted">&copy; 2025 LuggageTracker</p>
</footer>

<style>
	h1 {
		color: pink;
		text-align: center;
	}

	img {
		height: auto;
		width: 100%;
		object-fit: cover;
		aspect-ratio: 16/9;
		max-height: 600px;
	}
	.featurette-image {
		width: 500px;
		height: 500px;
		background-color: #eee; /* Placeholder color */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		color: gray;
	}
	.custom-hr {
		border: none;
		border-top: 1px solid #666; /* Light gray line */
		width: 100%;
		margin: 20px 0; /* Adjust spacing */
	}

	.accordion-item {
		border: none;
		border-bottom: 1px solid #e0e0e0;
	}

	.accordion-button {
		padding: 20px 0;
		font-weight: 600;
		color: #333;
		background-color: transparent;
	}

	.accordion-button:not(.collapsed) {
		color: #333;
		background-color: transparent;
		box-shadow: none;
	}

	.accordion-button:focus {
		box-shadow: none;
		border-color: transparent;
	}

	.accordion-button::after {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23333'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
	}

	.accordion-body {
		padding: 0 0 20px 0;
	}
</style>
