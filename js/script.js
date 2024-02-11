function validateAndSubmit() {
    // Validate the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return false; // Prevent form submission
    }



    // Clear the form on submit
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Display success msg once form is validated 
    alert('Message sent successfully!');

    return false; // Prevent form submission (remove this line to allow form submission)
}