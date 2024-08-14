// Add event listener for scroll to handle navbar and back-to-top button visibility
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navbarBrand = document.querySelector('.navbar-brand');
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const backToTopButton = document.getElementById('back-to-top');

    // Handle navbar and back-to-top button visibility
    if (window.scrollY > 500) { // Adjust the scroll position as needed
        navbar.classList.add('scrolled');
        navbar.classList.add('minimized'); // Add minimized class for transparency and reduced size
        navbarBrand.classList.add('scrolled');
        navbarLinks.forEach(link => link.classList.add('scrolled-text'));
        if (backToTopButton) {
            backToTopButton.style.opacity = 1;
            backToTopButton.style.visibility = 'visible';
        }
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('minimized'); // Remove minimized class to revert to original style
        navbarBrand.classList.remove('scrolled');
        navbarLinks.forEach(link => link.classList.remove('scrolled-text'));
        if (backToTopButton) {
            backToTopButton.style.opacity = 0;
            backToTopButton.style.visibility = 'hidden';
        }
    }

    // Dynamic section highlighting
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// Add event listener for click to smooth scroll to top
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add event listener for smooth scroll on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add event listener for the Contact link to scroll to the footer
    const contactLink = document.querySelector('.navbar-nav .nav-link[href="#footer"]');
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('footer').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add event listener for strength items to open Google search link
    const strengthItems = document.querySelectorAll('.strength-item');
    
    strengthItems.forEach(item => {
        item.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            window.open(link, '_blank');
        });
    });
});
