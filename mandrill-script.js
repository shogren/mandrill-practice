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


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "message": {
    "html": message,
    "subject": "New Form Request",
    "from_email": "",
    "from_name": "Form Request",
    "to": [
      {
        "email": email,
        "name": "Form Requester",
        "type": "to"
      }
    ],
    "headers": {
      "Reply-To": ""
    }
  },
  "key": ""
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mandrillapp.com/api/1.0/messages/send.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
});