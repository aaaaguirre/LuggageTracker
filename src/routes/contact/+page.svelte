<script>

 

    import { preventDefault } from "svelte/legacy";

 

</script>

<h1>Contact us</h1>




<style>

    h1{

        color: pink;

        text-align: center;

    }

 

</style>

 

<body>

    <style>

        body {

            font-family: Arial, sans-serif;

            text-align: center;

            margin: 20px;

            padding-bottom: 100px; /* Space for footer */

            min-height: 100vh; /* Ensures the body takes at least the full height of the screen */

            display: flex;

            flex-direction: column;

            justify-content: space-between;

        }

        .container {

            max-width: 500px;

            margin: auto;

            padding: 20px;

            border: 2px solid black;

            border-radius: 10px;

            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2)

            margin-bottom: 100px;

        }

        input, textarea {

            width: 100%;

            padding: 10px;

            margin: 5px 0;

            border: 2px solid black; /* Adds solid black border */

            border-radius: 5px; /* Optional: Makes edges slightly rounded */

        }

        button {

            background: black;

            color: white;

            padding: 10px 20px;

            border: none;

            cursor: pointer;

        }

 

        footer {

            background-color: #f7c6d5; /* Light pink background */

            color: black;

            padding: 20px;

            text-align: center;

            position: fixed;

            bottom: 0;

            width: 100%

        }

 

        #formMessage {

            margin-top: 15px;

            font-size: 18px;

        }

    </style>

    <script>

        fucntion validateForm(event) {

 

            event.preventDefault();

 

            const name = document.getElementById("name").value;

            if (name == "") {

                alert("Name must be filled out.");

                document.getElementById("name").focus();

                return false;

            }

       

        }

 

        // check if email is valid

        const email = document.getElementById("email").value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,4}$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            document.getElementById("email").focus();

            return false;

        }

 

        // check is message is provided

        const message = document.getElementById("message").value;

        if (message == "") {

            alert("Message must be filled out to solve your issue.");

            document.getElementById("message").focus();

            return false;

        }

 

        // If validation is successful, show success message and clear form

        document.getElementById("formMessage").innerHTML = "Your message has been sent successfully!";

        document.getElementById("formMessage").style.color = "green";

        document.getElementById("name").value = ""; // clear the name field

        document.getElementById("email").value = ""; // clear email field

        document.getElementById("message").value = ""; // clear message field

        return false;

    </script>

 

    <div class="container">

        <h3>Customer Relations</h3>

        <p>Have questions? Contact us and keep your luggage always within reach!</p>

 

        <form method="POST" action="?/submit">

            <input type="text" name="name" placeholder="Your name" required>

            <input type="email" name="email" placeholder="Your email" required>

            <textarea name="message" placeholder="Your message" required></textarea>

            <button type="submit">Submit</button>

        </form>

       

 

    <div id="formMessage"></div>

 

</div>

 

<footer>

    <p><b>Email:</b> support@luggagetracker.com</p>

    <p><b>Phone:</b> +123 456 7890</p>

</footer>

 

</body>

 