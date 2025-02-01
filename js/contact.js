document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.querySelector('.submit-btn');
    const formStatus = document.createElement('div');
    formStatus.className = 'form-status';
    contactForm.appendChild(formStatus);

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const subject = this.subject.value.trim();
        const message = this.message.value.trim();

    
        const emailBody = `
Name: ${name}
Email: ${email}

Subject: ${subject}

Message:
${message}
        `;

        const mailtoLink = `mailto:philipostesfaye26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Show success message
        formStatus.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <p>Your email client will open now. Please send the pre-filled email.</p>
            </div>
        `;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();
    });
});
