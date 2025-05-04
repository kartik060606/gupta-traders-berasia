document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! (This is a demo, no actual submission occurs.)');
    this.reset();
});