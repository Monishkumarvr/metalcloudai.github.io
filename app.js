document.getElementById('aiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const industry = this.querySelector('select').value;
    console.log('Submitted:', { email, industry });
    this.reset(); // Reset form after submission
});
