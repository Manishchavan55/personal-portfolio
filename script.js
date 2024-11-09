
let menuIcon = document.querySelector("#logo");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



ScrollReveal({
distance: '80px',
duration: 2000,
delay: 200
});

ScrollReveal().reveal('.home, .headding', { origin: 'top' });
ScrollReveal().reveal('.jumping-img, .home-content h1', { origin: 'left' });
ScrollReveal().reveal('.about-img, .home-content p', { origin: 'right' });
ScrollReveal().reveal('.home-img, .project-container, .about-content , .skill-container, .project-container,.contact-form', { origin: 'bottom' });



const typed = new Typed('.multiple-text', {
strings: ['Front-End Developer..!', 'Back-End Developer..!', 'Full-stack Developer..!', 'Freelancer..!'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});


       ///////// // CONTACT PAGE CAPTURE DATA \\\\\\\\\\\\\\\\\\

    
