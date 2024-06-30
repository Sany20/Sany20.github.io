function scrollToProject(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const form = this;
    const data = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Message sent successfully!");
            form.reset(); // Clear form fields
        } else {
            alert("There was an error sending the message.");
        }
    })
    .catch(error => {
        alert("There was an error sending the message.");
    });
});

