<!DOCTYPE html>

<html lang="en">

 

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Contact Us</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>

        h1 {

            color: pink;

            text-align: center;

        }

 

        body {

            font-family: Arial, sans-serif;

            text-align: center;

            margin: 20px;

            padding-bottom: 100px;

            min-height: 100vh;

            display: flex;

            flex-direction: column;

            justify-content: space-between;

            background-color: #f9f9f9;

        }

 

        .container {

            width: 50%;

            margin: auto;

            padding: 20px;

        }

 

        input,

        textarea {

            width: 100%;

            padding: 10px;

            margin: 5px 0;

            border: 2px solid black;

            border-radius: 5px;

        }

 

        .dark-pink-button {

            background-color: #C2185B;

            color: white;

            padding: 10px 20px;

            border: none;

            border-radius: 5px;

            font-weight: bold;

            cursor: pointer;

        }

 

        .dark-pink-button:hover {

            background-color: #AD1457;

        }

 

        footer {

            background-color: #f7c6d5;

            color: black;

            padding: 20px;

            text-align: center;

            position: fixed;

            bottom: 0;

            width: 100%;

        }

    </style>

</head>

 

<body>

    <h1>Contact us</h1>

 

    <div class="container">

        <h3>Customer Relations</h3>

        <p>Have questions? Contact us and keep your luggage always within reach!</p>

 

        <form id="contactForm" class="row g-3 needs-validation" novalidate>

            <div class="col-md-6">

                <label for="name" class="form-label"><b>Name:</b></label>

                <input type="text" class="form-control" id="name" placeholder="Enter your name" required>

                <div class="invalid-feedback">Please provide your name.</div>

            </div>

 

            <div class="col-md-6">

                <label for="email" class="form-label"><b>Email:</b></label>

                <input type="email" class="form-control" id="email" placeholder="Enter your email" required>

                <div class="invalid-feedback">Please provide a valid email address.</div>

            </div>

 

            <div class="col-12">

                <label for="message" class="form-label"><b>Message:</b></label>

                <textarea id="message" class="form-control" placeholder="Type your message here" rows="5" required></textarea>

                <div class="invalid-feedback">Please enter a message.</div>

            </div>

 

            <div class="col-12">

                <button type="submit" class="dark-pink-button">Send Message</button>

            </div>

        </form>

    </div>

 

    <footer>

        <p><b>Email:</b> support@luggagetracker.com</p>

        <p><b>Phone:</b> +123 456 7890</p>

    </footer>

 

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <script>

        (function () {

            'use strict'

            var form = document.getElementById('contactForm');

 

            form.addEventListener('submit', function (event) {

                event.preventDefault();

 

                if (!form.checkValidity()) {

                    form.classList.add('was-validated');

                } else {

                    alert('Form submitted successfully!');

                    form.reset();

                    form.classList.remove('was-validated');

                }

            });

        })();

    </script>

</body>

 

</html>

 