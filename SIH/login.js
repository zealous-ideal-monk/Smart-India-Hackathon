// Variables to store user details
let userDetails = {
    email: "",
    password: ""
};

// Elements
let signupSliderButton = document.querySelector(".signup"); // The button that slides to signup form
let loginSliderButton = document.querySelector(".login"); // The button that slides to login form
let signupFormButton = document.querySelector(".signup-box .clkbtn"); // The button that submits the signup form
let loginFormButton = document.querySelector(".login-box .clkbtn"); // The button that submits the login form
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

// Function to slide to the signup form
signupSliderButton.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

// Function to slide to the login form
loginSliderButton.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// Function to handle signup process when the "Signup" button is clicked
signupFormButton.addEventListener("click", () => {
    // Get the input values from the signup form
    let emailInput = document.querySelector(".signup-box .email").value;
    let passwordInput = document.querySelector(".signup-box .password").value;
    let confirmPasswordInput = document.querySelector(".signup-box .password:last-of-type").value;

    // Simple validation to check if passwords match
    if (passwordInput !== confirmPasswordInput) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save the details
    userDetails.email = emailInput;
    userDetails.password = passwordInput;

    // Show a success message
    alert("Registration successful! Please log in.");

    // Switch back to the login form
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// Function to handle login process when the "Login" button is clicked
loginFormButton.addEventListener("click", () => {
    // Get the input values from the login form
    let emailInput = document.querySelector(".login-box .email").value;
    let passwordInput = document.querySelector(".login-box .password").value;

    // Check if the details match the ones saved during registration
    if (emailInput === userDetails.email && passwordInput === userDetails.password) {
        // Redirect to a second final page
        window.location.href = "chatBOT.html"; // Update with the actual URL of your final page
    } else {
        alert("Invalid login details. Please try again.");
    }
});
