
emailjs.init('thIprAbsvsq8j5_ig'); 

// Function to send email using EmailJS
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect form data
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS
    emailjs.send('service_k4tl664', 'template_k3gelsd', params)
        .then(function(response) {
            // Success callback
            document.getElementById('statusMessage').innerHTML = '<p class="text-green-500">Email sent successfully!</p>';
            // Reset the form
            document.getElementById('contactForm').reset();
        }, function(error) {
            // Error callback
            document.getElementById('statusMessage').innerHTML = '<p class="text-red-500">Failed to send email. Please try again.</p>';
        });
});