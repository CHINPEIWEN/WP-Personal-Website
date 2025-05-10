// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a menu item
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenu.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Project filtering functionality (for Projects page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Add responsive classes based on viewport width
    function checkViewport() {
        const width = window.innerWidth;
        const body = document.body;
        
        if (width < 576) {
            body.classList.remove('medium', 'large');
            body.classList.add('small');
        } else if (width < 992) {
            body.classList.remove('small', 'large');
            body.classList.add('medium');
        } else {
            body.classList.remove('small', 'medium');
            body.classList.add('large');
        }
    }
    
    // Run on page load and window resize
    checkViewport();
    window.addEventListener('resize', checkViewport);
});

