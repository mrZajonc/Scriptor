(function () {
    // Initialize EmailJS with your Public Key
    emailjs.init("_jhUaBjs_A0Wdjhks");
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    emailjs.send("service_ve9phax", "template_u0udsbi", data)
        .then((response) => {
            alert("Wiadomość została wysłana!");
            document.getElementById('contact-form').reset(); // Clear the form
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            alert("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
            document.getElementById('contact-form').reset();
        });
});