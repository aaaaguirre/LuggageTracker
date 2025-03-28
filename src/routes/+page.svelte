<script>
	let welcome = 'Who are we?'
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


<div class="container mt-5">
    <div class="row align-items-center">
        <div class="col-md-6">
            <h1 class="fw-light">{welcome}</h1>
            <p class="lead">Luggage Tracker is a smart luggage tracking service dedicated to helping travelers locate their bags in real time, ensuring peace of mind and a hassle-free journey.</p>
			<hr class="my-4">
  			<p>Want to know more about us? Click the button below to learn more!</p>
  			<p class="lead">
			<a class="btn btn-dark btn-lg" href="about" role="button">Learn more</a>
        </div>
        <div class="col-md-6">
            <div class="featurette-image">
                500x500
            </div>
        </div>
    </div>
</div>


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
</style>
