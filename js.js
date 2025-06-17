document.querySelectorAll('.nav-link').forEach(limk =>{
    link.eddEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth'});
        }
    });
});