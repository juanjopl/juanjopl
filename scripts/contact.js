class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.submitBtn = this.form.querySelector('.submit-btn');
        this.messageEl = this.form.querySelector('.form-message');
        
        this.setupListeners();
    }

    setupListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => this.clearErrors(input));
        });
    }

    clearErrors(input) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.remove('error');
        this.messageEl.style.display = 'none';
    }

    validateForm() {
        let isValid = true;
        const email = this.form.querySelector('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        this.form.querySelectorAll('.form-group').forEach(group => {
            const input = group.querySelector('input, textarea');
            if (!input.value.trim()) {
                this.showError(input, 'Este campo es requerido');
                isValid = false;
            }
        });

        if (email.value && !emailRegex.test(email.value)) {
            this.showError(email, 'Por favor ingresa un email válido');
            isValid = false;
        }

        return isValid;
    }

    showError(input, message) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');
        const errorText = formGroup.querySelector('.error-text');
        errorText.textContent = message;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) return;

        this.submitBtn.disabled = true;
        this.submitBtn.textContent = 'Enviando...';

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.messageEl.textContent = '¡Mensaje enviado con éxito!';
            this.messageEl.className = 'form-message success';
            this.form.reset();
        } catch (error) {
            this.messageEl.textContent = 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.';
            this.messageEl.className = 'form-message error';
        } finally {
            this.submitBtn.disabled = false;
            this.submitBtn.textContent = 'Enviar mensaje';
            this.messageEl.style.display = 'block';
        }
    }
}

// Initialize the contact form
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm('contactForm');
});