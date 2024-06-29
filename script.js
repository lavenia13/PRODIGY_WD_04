// Toggle navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
});

// Open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for intro text
document.addEventListener('DOMContentLoaded', () => {
    const introText = document.querySelector('.intro-text h2');
    introText.classList.add('animate');
});

// 3D effect for project images
const projectImages = document.querySelectorAll('.project img');
projectImages.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;
        const xRotation = ((offsetY / clientHeight) - 0.5) * 20;
        const yRotation = ((offsetX / clientWidth) - 0.5) * -20;
        target.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    image.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});
