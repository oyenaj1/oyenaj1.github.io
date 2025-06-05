document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked (for smooth scrolling)
    navLinksLi.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinksLi.forEach(item => {
                item.style.animation = ''; // Reset animation for next open
            });
        });
    }); 
    const scrollTopButton = document.createElement('button');
    scrollTopButton.id = 'scrollTopBtn';
    scrollTopButton.innerHTML = '&uarr;'; // Up arrow
    document.body.appendChild(scrollTopButton);

    // --- Dynamic Copyright Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Simple Scroll-to-top button (Optional) ---
    // You might want to add a scroll-to-top button for longer pages.
    // Let's add the basic JS for it, assuming you'd add the HTML/CSS later.
    //
    // 
    // 
    // 

    // 
         

    scrollTopButton.addEventListener('click', () => {
         window.scrollTo({
             top: 0,
             behavior: 'smooth'
         });
     });

     window.addEventListener('scroll', () => {
         if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
             scrollTopButton.style.display = 'block';
         } else {
             scrollTopButton.style.display = 'none';
         }
     });


    // --- Active Nav Link on Scroll (Optional, but enhances UX) ---
    const sections = document.querySelectorAll('section[id], header[id]');
    const navA = document.querySelectorAll('.nav-links li a');

    function activateNavLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Add a small offset to ensure the section is fully visible
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navA.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    window.addEventListener('load', activateNavLink); // Run on page load
});