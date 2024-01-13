$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function makeLinkActive() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                navLinks[index].classList.add('active');
            }
        });
    }

    makeLinkActive();

    window.addEventListener('scroll', makeLinkActive);
});