document.addEventListener('DOMContentLoaded', () => {
    // Back to Top Button
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

 

    // Scroll to Footer for Contact Link
    const contactLink = document.querySelector('.navbar-nav .nav-link[href="#footer"]');
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('footer').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Open Google Search Link for Strength Items
    document.querySelectorAll('.strength-item').forEach(item => {
        item.addEventListener('click', function () {
            const link = this.getAttribute('data-link');
            window.open(link, '_blank');
        });
    });

    // Easter Egg Modal
    const easterEggLink = document.getElementById('easter-egg');
    const modal = document.getElementById('easter-egg-modal');
    const closeModal = document.querySelector('#easter-egg-content .close');
    
    if (easterEggLink && modal && closeModal) {
        easterEggLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            modal.classList.add('in'); // Show the modal with fade-in effect
            modal.style.display = 'block'; // Ensure the modal is displayed
        });

        closeModal.addEventListener('click', () => {
            modal.classList.remove('in'); // Hide the modal with fade-out effect
            setTimeout(() => {
                modal.style.display = 'none'; // Hide the modal after the animation
            }, 300); // Match this time with the animation duration
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('in'); // Hide the modal with fade-out effect
                setTimeout(() => {
                    modal.style.display = 'none'; // Hide the modal after the animation
                }, 300); // Match this time with the animation duration
            }
        });
    }

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }


       
    // Skills Section Functionality
    const banners = document.querySelectorAll('.banner');
    const skillSections = document.querySelectorAll('.all-skills');

    banners.forEach(banner => {
        banner.addEventListener('mouseenter', () => {
            const bannerNumber = banner.getAttribute('data-banner');
            skillSections.forEach(section => {
                section.style.display = section.getAttribute('data-skill') === bannerNumber ? 'flex' : 'none';
            });
        });

        banner.addEventListener('mouseleave', () => {
            skillSections.forEach(section => {
                section.style.display = 'none';
            });
        });
    });

    // Scroll Event Listener
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const navbarBrand = document.querySelector('.navbar-brand');
        const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        // Navbar and Back-to-Top Button Visibility
        if (window.scrollY > 300) { // Adjust this value for when the button should appear
            navbar.classList.add('scrolled', 'minimized');
            navbarBrand.classList.add('scrolled');
            navbarLinks.forEach(link => link.classList.add('scrolled-text'));
            if (backToTopButton) {
                backToTopButton.classList.add('show');
            }
        } else {
            navbar.classList.remove('scrolled', 'minimized');
            navbarBrand.classList.remove('scrolled');
            navbarLinks.forEach(link => link.classList.remove('scrolled-text'));
            if (backToTopButton) {
                backToTopButton.classList.remove('show');
            }
        }

        // Highlight Current Section
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

        // Reveal Elements on Scroll
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
});
