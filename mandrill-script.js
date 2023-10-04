// Get a reference to the form element
const form = document.querySelector('form');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values entered by the user
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can now use the 'email' and 'message' variables to process or display the data
    console.log('Email:', email);
    console.log('Message:', message);

});