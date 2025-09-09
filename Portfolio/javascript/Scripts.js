/*Name: Aravind Santha
File Name: Assignment 1, javascript file
Date Created: Feb 05, 2025*
Description: This is a javascript file that gives logic to the personal portfolio website*/



document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById('contact-btn');
    const contactSection = document.getElementById('contact-info-section');
    const projects = document.querySelectorAll(".Project");
    let currentIndex = 0;

    // Contact Info Section
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            if (contactSection) {
                // Toggle contact section visibility
                if (contactSection.style.display === 'none' || contactSection.style.display === '') {
                    contactSection.style.display = 'block';
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    contactSection.style.display = 'none';
                }
            } else {
                // Redirect to contact page if contact section is not available
                window.location.href = 'contact.html';
            }
        });
    }

    // Project Navigation
    function updateProjects() {
        projects.forEach((project, index) => {
            project.classList.toggle("active", index === currentIndex);
        });
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        updateProjects();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        updateProjects();
    });

    updateProjects();
});
