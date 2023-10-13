// Get all anchor elements on the page
const allLinks = document.querySelectorAll('a');

// Loop through each link and set the target attribute to "_blank"
allLinks.forEach(link => {
    link.setAttribute('target', '_blank');
});

const navLinks = document.querySelectorAll('[nav-link="true"]')

navLinks.forEach(link => {
    link.setAttribute('target', '');
});