// Enhanced interactivity for Food Cart website template
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Array of available images - UPDATE THESE PATHS TO MATCH YOUR ACTUAL IMAGES
    const availableImages = [
        'images/full-size/item1.jpg',
        'images/full-size/item2.jpg',
        'images/full-size/item3.jpg',
        'images/full-size/item4.jpg',
        'images/full-size/item5.jpg',
        'images/full-size/item6.jpg'
        // Add more image paths as needed for your menu items
    ];
    
    // Initialize flame background animation
    window.addEventListener('load', function() {
        initializeFlameBackground();
    });
    
    // Simple flame background initialization
    function initializeFlameBackground() {
        const parallaxContainer = document.querySelector('.parallax-bg');
        
        // Clear any existing layers (for template cleanup)
        const existingLayers = parallaxContainer.querySelectorAll('.parallax-layer');
        existingLayers.forEach(layer => layer.remove());
        
        // Create 6 flame elements
        for (let i = 1; i <= 6; i++) {
            const flame = document.createElement('div');
            flame.className = 'parallax-layer';
            parallaxContainer.appendChild(flame);
        }
        
        console.log('Flame background initialized with 6 animated flames');
    }
    
    // Preload images for better performance
    function preloadImages() {
        menuItems.forEach(item => {
            const thumbSrc = item.dataset.thumb;
            const fullSrc = item.dataset.full;
            
            if (thumbSrc) {
                const thumbImg = new Image();
                thumbImg.src = thumbSrc;
            }
            
            if (fullSrc) {
                const fullImg = new Image();
                fullImg.src = fullSrc;
                
                // Handle image loading errors
                fullImg.onerror = function() {
                    console.warn(`Failed to load full-size image: ${fullSrc}`);
                    // Hide the full image if it fails to load
                    const menuFullImage = item.querySelector('.menu-full-image');
                    if (menuFullImage) {
                        menuFullImage.style.display = 'none';
                    }
                };
            }
        });
    }
    
    // Handle thumbnail image errors
    function handleImageErrors() {
        const thumbnails = document.querySelectorAll('.menu-thumb');
        thumbnails.forEach(thumb => {
            thumb.onerror = function() {
                console.warn(`Failed to load thumbnail: ${this.src}`);
                // Create a placeholder with the menu title
                const menuItem = this.closest('.menu-item');
                const title = menuItem.dataset.title;
                
                // Create placeholder element
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = `
                    <div class="placeholder-content">
                        <span class="placeholder-icon">🍽️</span>
                        <span class="placeholder-text">${title}</span>
                    </div>
                `;
                
                // Replace the image with placeholder
                this.parentNode.replaceChild(placeholder, this);
            };
        });
    }
    
    // Add enhanced hover effects and interactions
    menuItems.forEach((item, index) => {
        // Set initial animation delay
        item.style.animationDelay = `${(index + 1) * 0.1}s`;
        
        // Add click event for mobile devices
        item.addEventListener('click', function(e) {
            // Toggle overlay on mobile
            if (window.innerWidth <= 768) {
                this.classList.toggle('mobile-active');
            }
        });
        
        // Add mouse enter/leave effects for desktop
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                // Add subtle vibration effect
                this.style.transform = 'scale(1.05) translateY(-10px)';
                
                // Dim other items slightly
                menuItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        otherItem.style.opacity = '0.7';
                        otherItem.style.transform = 'scale(0.95)';
                    }
                });
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                // Reset all items
                menuItems.forEach(otherItem => {
                    otherItem.style.opacity = '1';
                    otherItem.style.transform = 'scale(1)';
                });
            }
        });
    });
    
    // Initialize image handling
    preloadImages();
    handleImageErrors();
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe menu items for scroll animations
    menuItems.forEach(item => {
        observer.observe(item);
    });
    
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        const parallaxSpeed = 0.5;
        
        if (header) {
            header.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Stagger the menu item animations
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
    
    // Add touch support for mobile
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', function(e) {
        const touchY = e.touches[0].clientY;
        const touchDiff = touchStartY - touchY;
        
        // Add subtle parallax effect on mobile scroll
        const header = document.querySelector('header');
        if (header) {
            header.style.transform = `translateY(${touchDiff * 0.1}px)`;
        }
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const focusedElement = document.activeElement;
        
        if (focusedElement && focusedElement.classList.contains('menu-item')) {
            let nextElement;
            
            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    nextElement = focusedElement.nextElementSibling;
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    nextElement = focusedElement.previousElementSibling;
                    break;
                case 'Enter':
                case ' ':
                    focusedElement.click();
                    e.preventDefault();
                    return;
            }
            
            if (nextElement && nextElement.classList.contains('menu-item')) {
                nextElement.focus();
                e.preventDefault();
            }
        }
    });
    
    // Make menu items focusable for accessibility
    menuItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View details for ${item.dataset.title}`);
    });
    
    // Add resize handler to reset mobile states
    window.addEventListener('resize', function() {
        menuItems.forEach(item => {
            if (window.innerWidth > 768) {
                item.classList.remove('mobile-active');
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }
        });
    });
});

// Add CSS for mobile active state
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .menu-item.mobile-active .menu-overlay {
            opacity: 1;
        }
        
        .menu-item.mobile-active .menu-info {
            transform: translateY(0);
        }
        
        .menu-item.mobile-active .menu-thumb {
            transform: scale(1.1);
            filter: brightness(0.7);
        }
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);